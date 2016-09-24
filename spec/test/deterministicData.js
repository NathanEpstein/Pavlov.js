var observations = [
  {
    state_transitions: [
      {state: "A",  action: "R", state_: "B" },
      {state: "B",  action: "B", state_: "D" }
    ],
    reward: 0
  },
  {
    state_transitions: [
      {state: "A",  action: "B", state_: "C" },
      {state: "C",  action: "R", state_: "D" }
    ],
    reward: 0
  },
  {
    state_transitions: [
      {state: "A",  action: "L", state_: "Prize" },
      {state: "Prize",  action: "R", state_: "Trap" },
      {state: "Trap",  action: "F", state_: "Trap" }
    ],
    reward: 1
  },
  {
    state_transitions: [
      {state: "A",  action: "L", state_: "Prize" },
      {state: "Prize",  action: "L", state_: "Trap" },
      {state: "Trap",  action: "B", state_: "Trap" }
    ],
    reward: 1
  },
  {
    state_transitions: [
      {state: "B", action: "B", state_: "D" },
      {state: "D", action: "L", state_: "C" },
      {state: "C", action: "F", state_: "A" },
      {state: "A", action: "R", state_: "B" }
    ],
    reward: 0
  },
  {
    state_transitions: [
      {state: "C", action: "R", state_: "D" },
      {state: "D", action: "F", state_: "B" },
      {state: "B",  action: "L", state_: "A" },
      {state: "A",  action: "L", state_: "Prize" }
    ],
    reward: 0
  }
]

module.exports.observations = observations;
