#ifndef STATE_ACTION_ENCODER
#define STATE_ACTION_ENCODER

#include "DataStructures.h"
#include <map>

class StateActionEncoder {
  public:
    StateActionEncoder(std::vector<observation> *observations);
    int state_count() const;
    int action_count() const;
    void observations_to_int() const;
    std::map<std::string, std::string> parse_encoded_policy(
      const std::vector<int> &encoded_policy) const;

  private:
    void _parse_states_and_actions();

    std::map<std::string, int> d_state_to_int;
    std::map<std::string, int> d_action_to_int;
    std::vector<std::string> d_int_to_state;
    std::vector<std::string> d_int_to_action;
    std::vector<observation>* d_observations;
};

#endif