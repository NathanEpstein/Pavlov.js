#ifndef DATA_STRUCTURES
#define DATA_STRUCTURES

#include <string>
#include <vector>

struct state_transition {
  std::string state;
  int encoded_state;

  std::string state_;
  int encoded_state_;

  std::string action;
  int encoded_action;
};

struct observation {
  std::vector<state_transition> state_transitions;
  double reward;
};

typedef std::vector<observation>::const_iterator const_obs_iter;
typedef std::vector<state_transition>::const_iterator const_trans_iter;

typedef std::vector<observation>::iterator obs_iter;
typedef std::vector<state_transition>::iterator trans_iter;

typedef std::vector<std::vector<std::vector<double> > > tensor;

tensor makeTensor(int state_count, int action_count);

#endif