'use strict';

var pavlov = require('../../pavlov.js');
var determ = require('./deterministicData.js');
var random = require('./randomData.js');

describe('deterministic rewardsAndTransitions',function(){
  var rewardsAndTransitions = pavlov.rewardsAndTransitions(determ.observations,determ.rewards);
  var R = rewardsAndTransitions[1];
  var P = rewardsAndTransitions[0];

  it('should produce the correct transitions',function(){
    // expect P['A']['F']['A'] to be 1
    // expect P['A']['L']['prize'] to be 1
    // expect P['A']['R']['B'] to be 1
    // expect P['A']['B']['C'] to be 1
    // expect P['B']['L']['A'] to be 1
    // expect P['B']['B']['D'] to be 1
    // expect P['A']['B']['C'] to be 1
    console.log(P)

  });
});

describe('deterministic rewardsAndTransitions',function(){
  var rewardsAndTransitions = pavlov.rewardsAndTransitions(determ.observations,determ.rewards);
  var R = rewardsAndTransitions[1];
  var P = rewardsAndTransitions[0];

  it('should produce the correct transitions',function(){
    console.log(P)

  });
});
