#ifndef POLICY_PARSER
#define POLICY_PARSER

#include <limits>
#include <vector>
#include "DataStructures.h"

class PolicyParser {
  public:
    PolicyParser(int state_count, int action_count);
    std::vector<int> policy(const tensor &P, const std::vector<double> &rewards) const;

  private:
    const int d_state_count;
    const int d_action_count;
};

inline PolicyParser::PolicyParser(int state_count, int action_count)
  : d_state_count(state_count),
    d_action_count(action_count) {}

#endif