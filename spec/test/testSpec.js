'use strict';

var module = require('../../lib/Pavlov.js');

describe('policy', function() {

  var pavlov = new module.Pavlov();

  pavlov.observe("A#R#B#B#D#0");
  pavlov.observe("A#B#C#R#D#B#D#R#D#0");
  pavlov.observe("B#B#D#L#C#F#A#R#B#0");
  pavlov.observe("C#R#D#F#B#L#A#L#Prize#0");
  pavlov.observe("A#L#Prize#L#Trap#B#Trap#3");
  pavlov.learn();

  it('should produce the correct policy', function() {
    expect(pavlov.action('A')).toBe('L');
    expect(pavlov.action('B')).toBe('L');
    expect(pavlov.action('C')).toBe('F');
    expect(pavlov.action('D')).toBe('F');
  });
});