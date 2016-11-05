#ifndef PAVLOV
#define PAVLOV

#include "DataParaser.h"
#include "StateActionEncoder.h"
#include "RewardParser.h"
#include "TransitionParser.h"
#include "PolicyParser.h"
#include <emscripten/bind.h>

using namespace emscripten;

class Pavlov {

public:
  Pavlov(const std::string &filepath);
  ~Pavlov();

  std::string action(const std::string &state);

private:
  std::vector<observation> d_observations;
  DataParaser* d_data_parser;
  StateActionEncoder* d_state_action_encoder;
  RewardParser* d_reward_parser;
  TransitionParser* d_transition_parser;
  PolicyParser* d_policy_parser;

  std::map<std::string, std::string> d_policy;

  void learn();

};

EMSCRIPTEN_BINDINGS(pavlov) {
  class_<Pavlov>("Pavlov")
    .constructor<const std::string&>()
    .function("action", &Pavlov::action)
    ;
}

#endif
