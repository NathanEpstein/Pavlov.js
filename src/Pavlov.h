#ifndef PAVLOV
#define PAVLOV

#include "DataStructures.h"
#include "StateActionEncoder.h"
#include "RewardParser.h"
#include "TransitionParser.h"
#include "PolicyParser.h"

class Pavlov {

public:
  Pavlov();
  ~Pavlov();

  void learn();
  void transition(state_transition trans);
  void reward(double value);
  std::string action(const std::string &state) const;

private:
  std::vector<observation> d_observations;
  std::map<std::string, std::string> d_policy;

  observation* d_current_observation;
  StateActionEncoder* d_state_action_encoder;
  RewardParser* d_reward_parser;
  TransitionParser* d_transition_parser;
  PolicyParser* d_policy_parser;

  void scaffold();
};

#endif
