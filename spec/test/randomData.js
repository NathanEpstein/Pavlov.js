// gambler has a pot, will not loose if she doesn't bet. 50% chance of going broke if she does bet.
var obs1 = [
  {state:"notBroke", action:"notBet"},
  {state:"notBroke", action:"bet"},
  {state:"notBroke",action:"bet"},
  {state:"broke", action:"hangout"},
  {state:"broke",action:"hangout"}
];

var obs2 = [
  {state:"notBroke", action:"bet"},
  {state:"notBroke",action:"bet"},
  {state:"broke", action:"hangout"}
];

var obs3 = [
  {state:"notBroke", action:"notBet"},
  {state:"notBroke", action:"notBet"},
  {state:"notBroke", action:"notBet"}
];

module.exports.observations = [obs1,obs2,obs3];
module.exports.rewards = [-1,-1,0];

