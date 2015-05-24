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

  it('should produce the correct rewards', function(){
    expect(R['Prize']).toBe(0.75);
    expect(R['A']).toBe(0.25);
    expect(R['B']).toBe(0);
    expect(R['C']).toBe(0);
    expect(R['D']).toBe(0);
  });
});

// describe('random rewardsAndTransitions',function(){
//   var rewardsAndTransitions = pavlov.rewardsAndTransitions(determ.observations,determ.rewards);
//   var R = rewardsAndTransitions[1];
//   var P = rewardsAndTransitions[0];

//   it('should produce the correct transitions',function(){
//     // console.log(P)

//   });
// });
