'use strict'

const whole = /^((\d+(\.\d+)*)(ms|m|s|h))+$/
const pieces = /((\d+(\.\d+)*)(ms|m|s|h))/g
const measure = /(ms|m|s|h)/g

const multipliers = {
  ms: 1,
  s: 1000,
  m: 60000,
  h: 3.6e+6
}

function analyse (time) {
  const unit = time.match(measure)[0];
  time = time.substring(0, time.length - unit.length);

  return parseFloat(time) * multipliers[unit];
}

module.exports = (time) => {
  if(typeof time !== 'string') {
      return new Error('the first argument must be a string');
  }

  if(!whole.test(time)) {
      return new Error('invalid time');
  }

  return time.match(pieces).reduce((sum, currentVal) => sum + analyse(currentVal), 0);
}

