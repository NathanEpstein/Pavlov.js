#ifndef PAVLOV
#define PAVLOV

#include "DataParser.h"
#include "StateActionEncoder.h"
#include "RewardParser.h"
#include "TransitionParser.h"
#include "PolicyParser.h"

class Pavlov {

public:
  Pavlov();
  ~Pavlov();

  void learn();
  void observe(const std::string &obs_string);
  std::string action(const std::string &state) const;

private:
  std::vector<observation> d_observations;
  std::map<std::string, std::string> d_policy;

  DataParser* d_data_parser;
  StateActionEncoder* d_state_action_encoder;
  RewardParser* d_reward_parser;
  TransitionParser* d_transition_parser;
  PolicyParser* d_policy_parser;

  void scaffold();
};

#endif
