'use strict';

var Pavlov = require('../../js/pavlov.js');
var determ = require('./deterministicData.js');
var random = require('./randomData.js');

describe('deterministic policy', function() {
  var pav = new Pavlov(determ.observations);
  pav.learn();

  it('should produce the correct policy', function() {
    expect(pav.policy['A']).toBe('L');
    expect(pav.policy['B']).toBe('L');
    expect(pav.policy['C']).toBe('F');
    expect(pav.policy['D']).toBe('L');

  });
});

describe('random policy', function() {
  var pav = new Pavlov(random.observations);
  pav.learn();

  it('should produce the correct policy', function(){
    expect(pav.policy['notBroke']).toBe('notBet');
    expect(pav.policy['broke']).toBe('hangout');
  });
});
