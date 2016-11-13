#include "Pavlov.h"
#include <emscripten/bind.h>
using namespace emscripten;

Pavlov::Pavlov() {
  d_data_parser = new DataParser();
}

Pavlov::~Pavlov() {
  delete d_data_parser;
  delete d_state_action_encoder;
  delete d_reward_parser;
  delete d_transition_parser;
  delete d_policy_parser;
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

void Pavlov::observe(const std::string &obs_string) {
  d_observations.push_back(
    d_data_parser -> parse_obs_line(obs_string)
  );
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
    .function("observe", &Pavlov::observe)
    .function("learn", &Pavlov::learn)
    .function("action", &Pavlov::action)
    ;
}


