import 'babel-polyfill'
import StateActionEncoder from './StateActionEncoder';
import RewardParser from './RewardParser';
import TransitionParser from './TransitionParser'
import PolicyParser from './PolicyParser';

export default class {
  constructor(observations) {
    // encode observation data as int values
    this.state_action_encoder = new StateActionEncoder(observations);
    this.state_action_encoder.observations_to_int();
    let dimensions = this.state_action_encoder.parse_dimensions();

    // create reward, transition, and policy parsers
    this.reward_parser = new RewardParser(observations, dimensions);
    this.transition_parser = new TransitionParser(observations, dimensions);
    this.policy_parser = new PolicyParser(dimensions);
  }

  learn() {
    let R = this.reward_parser.rewards();
    let P = this.transition_parser.transition_probabilities();

    // learn int-encoded policy and convert to readable dictionary
    let encoded_policy = this.policy_parser.policy(P, R);
    this.policy = this.state_action_encoder.parse_encoded_policy(encoded_policy);
  }

};
