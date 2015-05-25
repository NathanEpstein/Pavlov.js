'use strict';

var pavlov = require('../../pavlov.js');
var determ = require('./deterministicData.js');
var random = require('./randomData.js');

describe('deterministic rewardsAndTransitions',function(){
  var rewardsAndTransitions = pavlov.rewardsAndTransitions(determ.observations,determ.rewards);
  var R = rewardsAndTransitions[1];
  var P = rewardsAndTransitions[0];

  it('should produce the correct transitions',function(){
    expect(P['A']['L']['Prize']).toBe(1);
    expect(P['A']['R']['B']).toBe(1);
    expect(P['A']['B']['C']).toBe(1);
    expect(P['B']['B']['D']).toBe(1);
    expect(P['A']['B']['C']).toBe(1);
  });

  it('should produce the correct rewards',function(){
    expect(R['Prize']).toBe(1/3);
    expect(R['Trap']).toBe(1/3);
    expect(R['A']).toBe(1/9);
    expect(R['B']).toBe(0);
    expect(R['C']).toBe(0);
    expect(R['D']).toBe(0);
  });
});

describe('deterministic policy', function(){
  var policy = pavlov.policy(determ.observations,determ.rewards);

  it('should produce the correct policy', function(){
    expect(policy['A']).toBe('L');
    expect(policy['B']).toBe('L');
    expect(policy['C']).toBe('F');
    expect(policy['D']).toBe('L');

  });
});

describe('random rewardsAndTransitions',function(){
  var rewardsAndTransitions = pavlov.rewardsAndTransitions(random.observations,random.rewards);
  var R = rewardsAndTransitions[1];
  var P = rewardsAndTransitions[0];

  it('should produce the correct transitions',function(){
    expect(P['notBroke']['bet']['broke']).toBe(0.5);
    expect(P['notBroke']['bet']['notBroke']).toBe(0.5);
    expect(P['notBroke']['notBet']['notBroke']).toBe(1);
    expect(P['broke']['hangout']['broke']).toBe(1);
  });

  it('should produce the correct rewards',function(){
    expect(R['broke']).toBe((-2/5 - 1/3)/3);
    expect(R['notBroke']).toBe((-3/5 - 2/3)/8);
  });
});

describe('random policy', function(){
  var policy = pavlov.policy(random.observations,random.rewards);

  it('should produce the correct policy', function(){
    expect(policy['notBroke']).toBe('notBet');
    expect(policy['broke']).toBe('hangout');
  });
});
