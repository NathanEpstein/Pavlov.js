#include "Pavlov.h"

Pavlov::Pavlov(vector<observation>& observations) {
  // encode observation data as int values
  StateActionEncoder d_state_action_encoder(observations);
  d_state_action_encoder.observations_to_int();
  int state_count = d_state_action_encoder.state_count();
  int action_count = d_action_action_encoder.action_count();

  // create reward, transition, and policy parsers
  RewardParser d_reward_parser(observations, state_count);
  TransitionParser d_transition_parser (observations,
                                        state_count,
                                        action_count);
  PolicyParser d_policy_parser(state_count, action_count);

  learn();
}

void Pavlov::learn() {
  vector<double> R = d_reward_parser.rewards();
  tensor P = d_transition_parser.transition_probabilities();

  // learn int-encoded policy and convert to readable dictionary
  vector<int> encoded_policy = d_policy_parser.policy(P, R);
  map<string, int> d_policy = d_state_action_encoder.parse_encoded_policy(encoded_policy);
}

int main() {}
