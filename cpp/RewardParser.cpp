#include "RewardParser.h"

std::vector<double> RewardParser::rewards() const {
  std::vector<double> total_state_rewards(d_state_count);
  std::vector<int> total_state_visits(d_state_count);

  const_obs_iter obs_it = d_obs.begin();
  while (obs_it != d_obs.end()) {
    int visits = obs_it -> state_transitions.size();
    double reward_per_visit = (obs_it -> reward) / visits;

    const_trans_iter trans_it = obs_it -> state_transitions.begin();
    while (trans_it != obs_it -> state_transitions.end()) {
      int state = trans_it -> encoded_state;
      total_state_rewards[state] += reward_per_visit;
      total_state_visits[state] += 1;

      ++trans_it;
    }

    ++obs_it;
  }

  std::vector<double> average_state_rewards;
  for (int i = 0; i < d_state_count; ++i) {
    double state_reward = total_state_rewards[i];
    if(total_state_visits[i] > 0) state_reward /= total_state_visits[i];

    average_state_rewards.push_back(state_reward);
  }

  return average_state_rewards;
}