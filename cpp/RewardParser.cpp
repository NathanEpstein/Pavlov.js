#include "RewardParser.h"

vector<double> RewardParser::rewards() const {
  vector<double> total_state_rewards(d_state_count);
  vector<int> total_state_visits(d_state_count);

  obs_iter obs_it = d_obs.begin();
  while (obs_it != d_obs.end()) {
    int visits = obs_it -> state_transitions.size();
    double reward_per_visit = (obs_it -> reward) / visits;

    trans_iter trans_it = obs_it -> state_transitions.begin();
    while (trans_it != obs_it -> state_transitions.end()) {
      int state = trans_it -> state;
      total_state_rewards[state] += reward_per_visit;
      total_state_visits[state] += 1;

      ++trans_it;
    }

    ++obs_it;
  }

  vector<double> average_state_rewards;
  for (int i = 0; i < d_state_count; ++i) {
    double state_reward = total_state_rewards[i];
    if(total_state_visits[i] > 0) state_reward /= total_state_visits[i];

    average_state_rewards.push_back(state_reward);
  }

  return average_state_rewards
}