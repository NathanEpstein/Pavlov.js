#ifndef TRANSITION_PARSER
#define TRANSITION_PARSER

#include "DataStructures.h"

class TransitionParser {

public:
  TransitionParser(std::vector<observation> *observations,
                   int state_count,
                   int action_count);
  tensor transition_probabilities();

private:
  std::vector<observation>* d_obs;
  const int d_state_count;
  const int d_action_count;

  tensor count_transitions();
  tensor parse_probabilities(tensor &transition_count);
};

#endif