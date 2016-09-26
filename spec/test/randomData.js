var observations = [
  {
    state_transitions: [
      {state:"notBroke", action:"notBet", state_: "notBroke"},
      {state:"notBroke", action:"bet", state_: "notBroke"},
      {state:"notBroke",action:"bet", state_: "broke"},
      {state:"broke", action:"notBet", state_: "broke"},
      {state:"broke",action:"notBet", state_: "broke"}
    ],
    reward: -1
  },
  {
    state_transitions: [
      {state:"notBroke", action:"bet", state_: "notBroke"},
      {state:"notBroke",action:"bet", state_: "broke"},
      {state:"broke", action:"notBet", state_: "broke"}
    ],
    reward: -1
  },
  {
    state_transitions: [
      {state:"notBroke", action:"notBet"},
      {state:"notBroke", action:"notBet"},
      {state:"notBroke", action:"notBet"}
    ],
    reward: 0
  }
]

module.exports.observations = observations;
