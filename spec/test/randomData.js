var obs1 = [
  {state:"notPrize", action:"stay"},
  {state:"notPrize",action:"move"},
  {state:"prize", action:"stay"},
  {state:"prize", action:"move"},
  {state:"notPrize",action:"move"}
];

var obs2 = [
  {state:"notPrize", action:"stay"},
  {state:"notPrize",action:"move"},
  {state:"prize", action:"stay"},
  {state:"prize", action:"move"},
  {state:"notPrize",action:"move"}
];

var obs3 = [
  {state:"prize", action:"move"},
  {state:"prize", action:"stay"},
  {state:"notPrize", action:"move"},
  {state:"notPrize", action:"stay"},
  {state:"prize", action:"move"},
];

module.exports.observations = [obs1,obs2,obs3];
module.exports.rewards = [2,2,3];