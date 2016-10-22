#include "TransitionParser.h"

TransitionParser::TransitionParser(vector<observation> &observations,
                 int state_count,
                 int action_count)
{
  d_obs = observations;
  d_state_count = state_count;
  d_action_count = action_count;
}

tensor TransitionParser::transition_probabilities() {
  tensor transition_count = count_transitions();
  return parse_probabilities(transition_count);
}

tensor TransitionParser::count_transitions() {

  tensor transition_count = makeTensor(d_state_count, d_action_count)

  obs_iter obs_it = d_obs.begin();
  while (obs_it != d_obs.end()) {
    trans_iter trans_it = obs_it -> state_transitions.begin();
    while (trans_it != obs_it -> state_transitions.end()) {
      int state = trans_it -> encoded_state;
      int action = trans_it -> encoded_action;
      int state_ = trans_it -> encoded_state_;

      transition_count[state][action][state_] += 1;

      ++trans_it;
    }
    ++obs_it;
  }

  return transition_count
}

tensor parse_probabilities(tensor &transition_count) {

  tensor P = makeTensor(d_state_count, d_action_count);

  for (int state = 0; state < d_state_count; ++state) {
    for (int action = 0; action < d_action_count; ++action) {

      // count total_transitions
      int total_transitions = 0;
      for (int state_ = 0; state_ < d_state_count; ++state_)
      {
        total_transitions += transition_count[state][action][state_];
      }

      // parse parse probabilities from transitions
      for (int state_ = 0; state_ < d_state_count; ++state_)
      {
        if (total_transitions > 0) {
          double transitions = transition_count[state][action][state_];
          P[state][action][state_] = transitions / total_transitions;
        }
        else {
          P[state][action][state_] = 1.0 / d_state_count;
        }
      }
    }
  }

  return P
}
