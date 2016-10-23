#ifndef POLICY_PARSER
#define POLICY_PARSER

#include <limits>
#include <vector>
#include "DataStructures.h"

using namespace std;

class PolicyParser {
  public:
    PolicyParser(int state_count, int action_count);
    vector<int> policy(tensor &P, vector<double> &rewards) const;

  private:
    const int d_state_count;
    const int d_action_count;
};

inline PolicyParser::PolicyParser(int state_count, int action_count)
  : d_state_count(state_count),
    d_action_count(action_count) {}

#endif