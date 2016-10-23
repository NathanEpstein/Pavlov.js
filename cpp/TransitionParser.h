#ifndef TRANSITION_PARSER
#define TRANSITION_PARSER

#include "DataStructures.h"

class TransitionParser {

public:
  TransitionParser(vector<observation> &observations,
                   int state_count,
                   int action_count);
  tensor transition_probabilities();

private:

  vector<observation> d_obs;
  int d_state_count;
  int d_action_count;

  tensor count_transitions();
  tensor parse_probabilities(tensor &transition_count);

};

#endif