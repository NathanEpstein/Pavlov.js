class PolicyParser {

  constructor(dimensions) {
    this.state_count = dimensions['state_count'];
    this.action_count = dimensions['action_count'];
  }

  policy(P, rewards) {
    const GAMMA = 0.9;
    const ITERATIONS = 125;

    let best_policy = new Array(this.state_count).fill(0);
    let state_values = new Array(this.state_count).fill(0);

    for (let i = 0; i < ITERATIONS; ++i) {
      for (let state = 0; state < this.state_count; ++state) {
        let state_value = -Infinity;

        for (let action = 0; action < this.action_count; ++action) {
          let action_value = 0;

          for (let state_ = 0; state_ < this.state_count; ++state_) {
            action_value += (P[state][action][state_] * state_values[state_] * GAMMA);
          }

          if (action_value >= state_value) {
            state_value = action_value;
            best_policy[state] = action;
          }
        }
        state_values[state] = rewards[state] + state_value;
      }
    }

    return best_policy;
  }

};