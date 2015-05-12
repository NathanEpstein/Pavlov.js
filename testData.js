var pavlov = require('./pavlov.js');

var obs1 = [{state:"A",action:"F"},{state:"A",action:"L"},{state:"Prize",action:"B"},{state:"Prize",action:"R"}];
var obs2 = [{state:"B",action:"B"},{state:"D",action:"L"}, {state: "C",action:"F"}, {state:"A",action:"R"}];
var obs3 = [{state:"B",action:"L"},{state:"A",action:"L"},{state:"Prize", action:"R"},{state:"A",action:"R"}];
var obs4 = [{state:"A", action:"F"}, {state:"A", action:"B"}];
obs = [obs1,obs2, obs3,obs4];
rew = [1,0,1,0];

console.log(pavlov.policy(obs,rew))
