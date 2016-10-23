#ifndef STATE_ACTION_ENCODER
#define STATE_ACTION_ENCODER

#include "DataStructures.h"
#include <map>

class StateActionEncoder {
  public:
    StateActionEncoder(vector<observation> &observations);
    int state_count() const;
    int action_count() const;
    void observations_to_int();
    map<string, string> parse_encoded_policy(const vector<int> &encoded_policy) const;

  private:
    void _parse_states_and_actions();

    map<string, int> d_state_to_int;
    map<string, int> d_action_to_int;
    vector<string> d_int_to_state;
    vector<string> d_int_to_action;
    vector<observation> d_observations;
};

#endif