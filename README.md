# human-to-milliseconds

[![npm](https://img.shields.io/npm/v/human-to-milliseconds.svg?style=flat-square)](https://www.npmjs.com/package/human-to-milliseconds)
[![Travis](https://img.shields.io/travis/hacdias/human-to-milliseconds.svg?style=flat-square)](https://travis-ci.org/hacdias/human-to-milliseconds)

Converts human intervals to milliseconds. This accepts durations such as "300s", "1.5h" or "2h45m". Valid time units are: "ms", "s", "m", "h".

## Install

### In Node.js through npm

```bash
$ npm install --save human-to-milliseconds
$ npm install khafradev/human-to-milliseconds
```

### Browser: Browserify, Webpack, other bundlers

~~The code published to npm that gets loaded on require is in fact an ES5 transpiled version with the right shims added. This means that you can require it and use with your favorite bundler without having to adjust asset management process.~~
It should theoretically work in browser since it's relatively vanilla, but who knows.

```js
const HumanToMilliseconds = require('human-to-milliseconds')
```

## API

```js
HumanToMilliseconds('1h50m') // 6600000
```

