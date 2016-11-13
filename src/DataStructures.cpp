#include "DataStructures.h"

// helper function to scaffold empty tensor
tensor makeTensor(int state_count, int action_count) {
  tensor t;

  t.resize(state_count);
  for (int i = 0; i < state_count; ++i) {
    t[i].resize(action_count);
    for (int j = 0; j < action_count; ++j) {
      t[i][j].resize(state_count);
    }
  }

  return t;
}