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
    expect(P['prize']['stay']['prize']).toBe(2/3);
    expect(P['prize']['move']['prize']).toBe(1/3);
    expect(P['prize']['stay']['notPrize']).toBe(1/3);
    expect(P['prize']['move']['notPrize']).toBe(2/3);
    expect(P['notPrize']['stay']['notPrize']).toBe(2/3);
    expect(P['notPrize']['move']['notPrize']).toBe(1/3);
    expect(P['notPrize']['stay']['prize']).toBe(1/3);
    expect(P['notPrize']['move']['prize']).toBe(2/3);
  });

  it('should produce the correct rewards',function(){
    expect(R['prize']).toBe((4/5 + 4/5 + 9/5) /7);
    expect(R['notPrize']).toBe(18/40);
  });
});

describe('random policy', function(){
  var policy = pavlov.policy(random.observations,random.rewards);

  it('should produce the correct policy', function(){
    expect(policy['prize']).toBe('stay');
    expect(policy['notPrize']).toBe('move');
  });
});
