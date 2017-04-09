# Pavlov.js

<img src="./img/MDP.png">

## About

Pavlov.js uses Markov Decision Processes to implement reinforcement learning. It is written in C++ and compiled to JavaScript. For more on reinforcement learning, check out Andrew Ng's <a href="http://cs229.stanford.edu/notes/cs229-notes12.pdf">notes</a>.

## Installation

`npm install pavlovjs --save`

## Compilation

Simply run `make`. JavaScript code will be in the lib directory.

## Example Usage

<img src="./img/example.png">

(we assume that the prize state automatically leads to a trap state which is never left)

```javascript
var module = require('pavlovjs');

var pavlov = new module.Pavlov();

// transitions and rewards
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

// learn from observations
pavlov.learn();

//policy
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
