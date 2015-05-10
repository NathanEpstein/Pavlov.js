function countSteps(observation,reward){
  stepReward = reward/observation.length;

  observation.forEach(function(step,i){
    //initialization
    R_[step.state] = R_[step.state] || {reward:0, count:0};
    P_[step.state] = P_[step.state] || {};
    P_[step.state][step.action] = P_[step.state][step.action] || {};

    //increment total reward count
    R_[step.state].reward += stepReward;
    R_[step.state].count += 1;
    //and visit count
    if (i < observation.length - 1) P_[step.state][step.action][observation[i+1].state] = P_[step.state][step.action][observation[i+1].state] + 1 || 1;
  });
};

function getRewardsFromCount(R_){
  var R = {};
  Object.keys(R_).forEach(function(state){
    R[state] = R_[state].reward / R_[state].count;
  });
  return R;
};

function getTransitionsFromCount(P_){
  Object.keys(P_).forEach(function(state){
    Object.keys(P_[state]).forEach(function(action){
      //count transitions over all actions
    });
  });
  return P_;
};

function makeMDP(observations,rewards){
  P_ = {};
  R_ = {};

  observations.forEach(function(observation,i){
    countSteps(observation,rewards[i]);
  });

  var R = getRewardsFromCount(R_);
  var P = getTransitionsFromCount(P_);

  return P_;
};

var o1 = [{state:'s1', action:'a1'}, {state:'s2', action:'a1'},{state:'s1',action:'a2'}];
var o2 = [{state:'s2', action:'a1'}, {state:'s2', action:'a2'}, {state:'s3', action:'a1'}];
obs = [o1,o2]
console.log(makeMDP(obs, [1,2]))
