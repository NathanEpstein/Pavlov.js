'use strict';

var Pavlov = require('../../lib/Pavlov.js');
var determ = require('./deterministicData.js');
var random = require('./randomData.js');

describe('deterministic policy', function() {
  var pav = new Pavlov.model(determ.observations);
  pav.learn();

  it('should produce the correct policy', function() {
    expect(pav.policy['A']).toBe('L');
    expect(pav.policy['B']).toBe('L');
    expect(pav.policy['C']).toBe('F');
    expect(pav.policy['D']).toBe('F');

  });
});

describe('random policy', function() {
  var pav = new Pavlov.model(random.observations);
  pav.learn();

  it('should produce the correct policy', function(){
    expect(pav.policy['notBroke']).toBe('notBet');
  });
});
