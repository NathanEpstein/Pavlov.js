# Pavlov.js

<img src="./img/MDP.png">

##About

Pavlov.js uses Markov Decision Processes to implement reinforcement learning. It is implemented in C++ and compiled to JavaScript. For more on reinforcement learning, check out Andrew Ng's <a href="http://cs229.stanford.edu/notes/cs229-notes12.pdf">notes</a>.

## Installation

`npm install pavlovjs --save`

## Example Usage

<img src="./img/example.png">

(we assume that the prize state automatically leads to a trap state which is never left)

```javascript
var module = require('pavlovjs');

var pavlov = new module.Pavlov();

// state1#action1#state2 ... #stateN#reward
pavlov.observe("A#R#B#B#D#0");
pavlov.observe("A#B#C#R#D#B#D#R#D#0");
pavlov.observe("B#B#D#L#C#F#A#R#B#0");
pavlov.observe("C#R#D#F#B#L#A#L#Prize#0");
pavlov.observe("A#L#Prize#L#Trap#B#Trap#1");
pavlov.learn();

console.log(pavlov.action('A')); //L
console.log(pavlov.action('B')); //L
console.log(pavlov.action('C')); //F
console.log(pavlov.action('D')); //F

```

## License

**The MIT License (MIT)**

> Copyright (c) 2015 Nathan Epstein
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.
