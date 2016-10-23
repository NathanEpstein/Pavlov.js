#include "Pavlov.h"

Pavlov::Pavlov(vector<observation>& observations) {
  // encode observation data as int values
  d_state_action_encoder = new StateActionEncoder(observations);
  d_state_action_encoder -> observations_to_int();
  int state_count = d_state_action_encoder -> state_count();
  int action_count = d_state_action_encoder -> action_count();

  // create reward, transition, and policy parsers
  d_reward_parser = new RewardParser(observations, state_count);
  d_transition_parser = new TransitionParser(observations,
                                             state_count,
                                             action_count);
  d_policy_parser = new PolicyParser(state_count, action_count);

  learn();
}

Pavlov::~Pavlov() {
  delete d_state_action_encoder;
  delete d_reward_parser;
  delete d_transition_parser;
  delete d_policy_parser;
}

void Pavlov::learn() {
  vector<double> R = d_reward_parser -> rewards();
  tensor P = d_transition_parser -> transition_probabilities();

  // learn int-encoded policy and convert to readable dictionary
  vector<int> encoded_policy = d_policy_parser -> policy(P, R);
  map<string, string> d_policy = d_state_action_encoder -> parse_encoded_policy(encoded_policy);
}

