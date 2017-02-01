'use strict';

var module = require('../../lib/Pavlov.js');

describe('policy', function() {

  var pavlov = new module.Pavlov();

  pavlov.transition({ "state": "A", "action": "R", "state_": "B" });
  pavlov.transition({ "state": "B", "action": "B", "state_": "D" });
  pavlov.reward(0);

  pavlov.transition({ "state": "A", "action": "B", "state_": "C" });
  pavlov.transition({ "state": "C", "action": "R", "state_": "D" });
  pavlov.transition({ "state": "D", "action": "B", "state_": "D" });
  pavlov.transition({ "state": "D", "action": "R", "state_": "D" });
  pavlov.reward(0);

  pavlov.transition({ "state": "B", "action": "B", "state_": "D" });
  pavlov.transition({ "state": "D", "action": "L", "state_": "C" });
  pavlov.transition({ "state": "C", "action": "F", "state_": "A" });
  pavlov.transition({ "state": "A", "action": "R", "state_": "B" });
  pavlov.reward(0);

  pavlov.transition({ "state": "C", "action": "R", "state_": "D" });
  pavlov.transition({ "state": "D", "action": "F", "state_": "B" });
  pavlov.transition({ "state": "B", "action": "L", "state_": "A" });
  pavlov.transition({ "state": "A", "action": "L", "state_": "Prize" });
  pavlov.reward(0);

  pavlov.transition({ "state": "A", "action": "L", "state_": "Prize" });
  pavlov.transition({ "state": "Prize", "action": "L", "state_": "Trap" });
  pavlov.transition({ "state": "Trap", "action": "B", "state_": "Trap" });
  pavlov.reward(1);

  pavlov.learn();

  it('should produce the correct policy', function() {
    expect(pavlov.action('A')).toBe('L');
    expect(pavlov.action('B')).toBe('L');
    expect(pavlov.action('C')).toBe('F');
    expect(pavlov.action('D')).toBe('F');
  });
});