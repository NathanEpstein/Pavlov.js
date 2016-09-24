class RewardParser {

  constructor(observations, dimensions) {
    this.observations = observations;
    this.state_count = dimensions['state_count'];
  }

  rewards() {
    let total_state_rewards = new Array(this.state_count).fill(0);
    let total_state_visits = new Array(this.state_count).fill(0);

    for (let observation of this.observations) {
      let visits = observation['state_transitions'].length;
      let reward_per_visit = observation['reward'] / visits;

      for (let state_transition of observation['state_transitions']) {
        let state = state_transition['state'];
        total_state_rewards[state] += reward_per_visit;
        total_state_visits[state] += 1;
      }
    }

    let average_state_rewards = [];
    for (let i = 0; i < this.state_count; ++i) {
      let state_reward = total_state_rewards[i];
      if(total_state_visits[i] > 0) state_reward /= total_state_visits[i];

      average_state_rewards.push(state_reward);
    }

    return average_state_rewards
  }

};