#ifndef DATA_STRUCTURES
#define DATA_STRUCTURES

#include <string>
#include <vector>

using namespace std;

struct state_transition {
  string state;
  int encoded_state;

  string state_;
  int encoded_state_;

  string action;
  int encoded_action;
};

struct observation {
  vector<state_transition> state_transitions;
  double reward;
};

typedef vector<observation>::const_iterator const_obs_iter;
typedef vector<state_transition>::const_iterator const_trans_iter;

typedef vector<observation>::iterator obs_iter;
typedef vector<state_transition>::iterator trans_iter;

typedef vector<vector<vector<double> > > tensor;

tensor makeTensor(int state_count, int action_count);

#endif