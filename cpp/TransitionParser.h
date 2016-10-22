#include "DataStructures.h"

class TransitionParser {

public:
  TransitionParser(vector<observation> &observations,
                   int state_count,
                   int action_count);

private:
  tensor TransitionParser::transition_probabilities();

  tensor TransitionParser::count_transitions();

  tensor parse_probabilities(tensor &transition_count);

};