# Pavlov.js

<img src="./img/MDP.png">

##About

Pavlov.js uses Markov Decision Processes to implement reinforcement learning in JavaScript. For more on reinforcement learning, check out Andrew Ng's <a href="http://cs229.stanford.edu/notes/cs229-notes12.pdf">notes</a>.

## Installation

`npm install pavlovjs --save`

## Example Usage

<img src="./img/example.png">

(we assume that the prize state automatically leads to a trap state which is never left)

```javascript
var pavlov = require('pavlovjs');

var observations = [
  {
    state_transitions: [
      {state: "A",  action: "R", state_: "B" },
      {state: "B",  action: "B", state_: "D" }
    ],
    reward: 0
  },
  {
    state_transitions: [
      {state: "A",  action: "B", state_: "C" },
      {state: "C",  action: "R", state_: "D" },
      {state: "D",  action: "B", state_: "D" },
      {state: "D",  action: "R", state_: "D" }
    ],
    reward: 0
  },
  {
    state_transitions: [
      {state: "A",  action: "L", state_: "Prize" },
      {state: "Prize",  action: "R", state_: "Trap" },
      {state: "Trap",  action: "F", state_: "Trap" }
    ],
    reward: 1
  },
  {
    state_transitions: [
      {state: "A",  action: "L", state_: "Prize" },
      {state: "Prize",  action: "L", state_: "Trap" },
      {state: "Trap",  action: "B", state_: "Trap" }
    ],
    reward: 1
  },
  {
    state_transitions: [
      {state: "B", action: "B", state_: "D" },
      {state: "D", action: "L", state_: "C" },
      {state: "C", action: "F", state_: "A" },
      {state: "A", action: "R", state_: "B" }
    ],
    reward: 0
  },
  {
    state_transitions: [
      {state: "C", action: "R", state_: "D" },
      {state: "D", action: "F", state_: "B" },
      {state: "B",  action: "L", state_: "A" },
      {state: "A",  action: "L", state_: "Prize" }
    ],
    reward: 0
  }
];

var pavlov = new pavlov.model(observations);

console.log(pavlov.policy);

// { A: 'L', B: 'L', C: 'F', D: 'F', Prize: 'L', Trap: 'F' }

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
