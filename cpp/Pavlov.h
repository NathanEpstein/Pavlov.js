#ifndef PAVLOV
#define PAVLOV

#include "StateActionEncoder.h"
#include "RewardParser.h"
#include "TransitionParser.h"
#include "PolicyParser.h"

class Pavlov {

public:
  Pavlov(vector<observation>& observations);
  ~Pavlov();

  std::string action(const std::string &state);

private:
  StateActionEncoder* d_state_action_encoder;
  RewardParser* d_reward_parser;
  TransitionParser* d_transition_parser;
  PolicyParser* d_policy_parser;

  map<string, string> d_policy;

  void learn();

};

#endif
