class TransitionParser {

  constructor(observations, dimensions) {
    this.observations = observations;
    this.state_count = dimensions['state_count'];
    this.action_count = dimensions['action_count'];
  }

  transition_probabilities() {
    let transition_count = this._count_transitions();
    return this._parse_probabilities(transition_count);
  }

  _count_transitions() {

    let transition_count = zeros([this.state_count,
                          this.action_count,
                          this.state_count]);

    for (let observation of this.observations) {
      for (let state_transition of observation['state_transitions']) {
        let state = state_transition['state'];
        let action = state_transition['action'];
        let state_ = state_transition['state_'];

        transition_count[state][action][state_] += 1;
      }
    }

    return transition_count
  }

  _parse_probabilities(transition_count) {

    let P = zeros([this.state_count,
           this.action_count,
           this.state_count]);

    for (let state = 0; state < this.state_count; ++state) {
      for (let action = 0; action < this.action_count; ++action) {

        let total_transitions = transition_count[state][action]
                               .reduce((x, y) => x + y, 0);

        if (total_transitions > 0) {
          P[state][action] = transition_count[state][action]
                            .map(transitions => transitions / total_transitions);
        }
        else {
          P[state][action] = new Array(this.state_count)
                            .fill(1 / this.state_count);
        }
      }
    }

    return P
  }

};

function zeros(dimensions) {
  let tensor = [];
  for (let i = 0; i < dimensions[0]; ++i) {
    tensor.push([]);
    for (let j = 0; j < dimensions[1]; ++ j) {
      tensor[i].push([]);
      for (let k = 0; k < dimensions[2]; ++k) {
        tensor[i][j][k] = 0;
      }
    }
  }
  return tensor;
}