#ifndef REWARD_PARSER
#define REWARD_PARSER

#include <vector>
#include "DataStructures.h"

class RewardParser {
  public:
    RewardParser(std::vector<observation> &obs, int state_count);
    std::vector<double> rewards() const;

  private:
    std::vector<observation> d_obs;
    const int d_state_count;
};

inline RewardParser::RewardParser(std::vector<observation> &obs, int state_count)
  : d_obs(obs),
    d_state_count(state_count) {}

#endif