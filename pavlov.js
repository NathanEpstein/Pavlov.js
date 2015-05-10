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

function getTransProbsFromCount(P_){
  Object.keys(P_).forEach(function(state){
    Object.keys(P_[state]).forEach(function(action){
      var visitCount = Object.keys(P_[state][action]).reduce(function(sum,state_){
        return sum + P_[state][action][state_];
      },0);
      Object.keys(P_[state][action]).forEach(function(state_){
        P_[state][action][state_] = P_[state][action][state_] / visitCount;
      });
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
  var P = getTransProbsFromCount(P_);

  return [P,R];
};

function policy(P,R){
  var policy = {}
  var V = {};
  R.forEach(function(state){
    V[state] = 0;
  });

  var arg, val;
  Object.keys(P).forEach(function(state){
    var futureVal = -Infinity;
    Object.keys(P[state]).forEach(function(action){
      arg = 0;
      val = 0;
      //
    });
  });

};

var o1 = [{state:'s1', action:'a1'}, {state:'s2', action:'a1'},{state:'s1',action:'a2'}, {state:'s2', action:'a2'}, {state:'s2', action:'a1'}];
var o2 = [{state:'s2', action:'a1'}, {state:'s1', action:'a2'}, {state:'s2', action:'a1'}, {state:'s2',action:'a1'}];
obs = [o1,o2]
console.log(makeMDP(obs, [1,2])[0])
