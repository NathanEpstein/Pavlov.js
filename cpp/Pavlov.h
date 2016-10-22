#include "StateActionEncoder.h"
#include "RewardParser.h"
#include "TransitionParsee.h"
#include "PolicyParser.h"

class Pavlov {

public:
  Pavlov(vector<observation>& observations);

private:
  void learn();

};
