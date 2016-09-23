class StateActionEncoder {

  constructor(observations) {
    this.observations = observations;
    this._parse_states_and_actions();
  }

  parse_dimensions() {
    return {
      'state_count': this.int_to_state.length,
      'action_count': this.int_to_action.length
    }
  }

  observations_to_int() {
    for (let observation of this.observations) {
      for (let transition of observation['state_transitions']) {
        transition['state'] = this.state_to_int[transition['state']];
        transition['state_'] = this.state_to_int[transition['state_']];
        transition['action'] = this.action_to_int[transition['action']];
      }
    }
  }

  parse_encoded_policy(encoded_policy) {
    let policy = {};

    let index, encoded_action, state, action;
    for (let pair of Object.entries(encoded_policy)) {
      encoded_action = pair[0];
      index = pair[1];

      state = this.int_to_state[index];
      action = this.int_to_action[encoded_action];

      policy[state] = action;
    }

    return policy;
  }

  _parse_states_and_actions() {
    let state_dict = {},
        action_dict = {},
        state_array = [],
        action_array = [],
        state_index = 0,
        action_index = 0;

    let state, action;

    for (let observation of this.observations) {
      for (let transition of observation['state_transitions']){
        state = transition['state']
        action = transition['action']

        if (!state_dict.hasOwnProperty(state)) {
          state_dict[state] = state_index;
          state_array.append(state);
          state_index += 1;
        }

        if (!action_dict.hasOwnProperty(action)) {
          action_dict[action] = action_index;
          action_array.append(action);
          action_index += 1;
        }

      }
    }

    this.state_to_int = state_dict;
    this.action_to_int = action_dict;
    this.int_to_state = state_array;
    this.int_to_action = action_array;
  }

};