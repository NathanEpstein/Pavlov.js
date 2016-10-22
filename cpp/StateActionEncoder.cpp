#include "StateActionEncoder.h"

StateActionEncoder::StateActionEncoder(vector<observation> &observations) {
  d_observations = observations;
  map<string, int> d_state_to_int;
  map<string, int> d_action_to_int;
  vector<string> d_int_to_state;
  vector<string> d_int_to_action;

  parse_states_and_actions();
}

int StateActionEncoder::state_count() const {
  return d_int_to_state.size();
}

int StateActionEncoder::action_count() const {
  return d_int_to_action.size();
}

void StateActionEncoder::observations_to_int() {
  obs_iter obs_it = d_observations.begin();
  while (obs_it != d_observations.end()) {
    int visits = obs_it -> state_transitions.size();
    double reward_per_visit = (observation -> reward) / visits;

    trans_iter trans_it = obs_it -> state_transitions.begin();
    while (trans_it != obs_it -> state_transitions.end()) {
      trans_it -> encoded_state = d_state_to_int[trans_it -> state];
      trans_it -> encoded_state_ = d_state_to_int[trans_it -> state_];
      trans_it -> encoded_action = d_action_to_int[trans_it -> action];

      ++trans_it;
    }

    ++obs_it;
  }
}

map<string, int> StateActionEncoder::parse_encoded_policy(
  const vector<int> &encoded_policy) const
{
  map<string, int> policy;

  string state, action;
  for (let i = 0; i < encoded_policy.size(); ++i) {
    state = d_int_to_state[i];
    action = d_int_to_action[encoded_policy[i]];

    policy[state] = action;
  }

  return policy;
}

void StateActionEncoder::_parse_states_and_actions() {
  int state_index = 0,
  int action_index = 0;

  string state, action;

  obs_iter obs_it = d_observations.begin();
  while (obs_it != d_observations.end()) {
    trans_iter trans_it = obs_it -> state_transitions.begin();
    while (trans_it != obs_it -> state_transitions.end()) {
      state = trans_it -> state;
      action = trans_it -> action;

      if (d_state_dict.find(state) != d_state_dict.end()) {
        d_state_dict[state] = state_index;
        d_state_array.push_back(state);
        state_index += 1;
      }

      if (d_action_dict.find(action) != d_action_dict.end()) {
        d_action_dict[action] = action_index;
        d_action_array.push_back(action);
        action_index += 1;
      }
      ++trans_it;
    }
    ++obs_it;
  }
}