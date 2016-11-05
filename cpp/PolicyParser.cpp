#include "PolicyParser.h"

std::vector<int> PolicyParser::policy(tensor &P, std::vector<double> &rewards) const
{
  const double GAMMA = 0.9;
  const int ITERATIONS = 125;

  std::vector<int> best_policy(d_state_count);
  std::vector<int> state_values(d_state_count);

  for (int i = 0; i < ITERATIONS; ++i) {
    for (int state = 0; state < d_state_count; ++state) {
      double state_value = -std::numeric_limits<double>::infinity();

      for (int action = 0; action < d_action_count; ++action) {
        double action_value = 0;

        for (int state_ = 0; state_ < d_state_count; ++state_) {
          action_value += (P[state][action][state_] * state_values[state_] * GAMMA);
        }

        if (action_value >= state_value) {
          state_value = action_value;
          best_policy[state] = action;
        }
      }
      state_values[state] = rewards[state] + state_value;
    }
  }

  return best_policy;
}
