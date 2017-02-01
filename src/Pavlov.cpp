#include "Pavlov.h"
#include <emscripten/bind.h>
using namespace emscripten;

Pavlov::Pavlov() {
  d_current_observation = new observation();
}

Pavlov::~Pavlov() {
  delete d_state_action_encoder;
  delete d_reward_parser;
  delete d_transition_parser;
  delete d_policy_parser;
  delete d_current_observation;
}

void Pavlov::scaffold() {
  // encode observation data as int values
  d_state_action_encoder = new StateActionEncoder(&d_observations);
  d_state_action_encoder -> observations_to_int();
  const int state_count = d_state_action_encoder -> state_count();
  const int action_count = d_state_action_encoder -> action_count();

  // create reward, transition, and policy parsers
  d_reward_parser = new RewardParser(&d_observations, state_count);
  d_transition_parser = new TransitionParser(&d_observations,
                                             state_count,
                                             action_count);
  d_policy_parser = new PolicyParser(state_count, action_count);
}

void Pavlov::transition(state_transition trans) {
  d_current_observation -> state_transitions.push_back(trans);
}

void Pavlov::reward(double value) {
  d_current_observation -> reward = value;
  d_observations.push_back(*d_current_observation);
  d_current_observation = new observation;
}

void Pavlov::learn() {
  // build internal classes used for learning
  scaffold();

  // parse rewards and transitions
  std::vector<double> R = d_reward_parser -> rewards();
  tensor P = d_transition_parser -> transition_probabilities();

  // learn int-encoded policy and convert to readable dictionary
  std::vector<int> encoded_policy = d_policy_parser -> policy(P, R);
  d_policy = d_state_action_encoder -> parse_encoded_policy(encoded_policy);
}

std::string Pavlov::action(const std::string &state) const {
  if (d_policy.find(state) == d_policy.end()) {
    return "UNKNOWN_STATE";
  }
  else {
    return d_policy.find(state) -> second;
  }
}

EMSCRIPTEN_BINDINGS(pavlov) {
  class_<Pavlov>("Pavlov")
    .constructor<>()
    .function("transition", &Pavlov::transition)
    .function("reward", &Pavlov::reward)
    .function("learn", &Pavlov::learn)
    .function("action", &Pavlov::action)
    ;

  value_object<state_transition>("state_transition")
    .field("state", &state_transition::state)
    .field("state_", &state_transition::state_)
    .field("action", &state_transition::action)
    ;
}


