'use strict';

var pavlov = require('../../pavlov.js');
var data = require('./testData.js')

describe('rewardsAndTransitions',function(){
  it('should produce the correct rewards',function(){
    console.log(pavlov.rewardsAndTransitions(data.observations,data.rewards));
  });
});
