#include "DataStructures.h"
#include <map>

class StateActionEncoder {
  public:
    StateActionEncoder(vector<observation> &observations);
    int state_count() const;
    int action_count() const;
    void observations_to_int();
    map<string, int> parse_encoded_policy(const vector<int> &encoded_policy) const;

  private:
    void _parse_states_and_actions();

};