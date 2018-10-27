---
layout: post
title: \[How to\] Run tests after compile webpack
permalink: /posts/run-tests-after-compile-webpack/
tags: ['npm', 'webpack', 'tests']
image: '/assets/images/posts/run-tests-after-compile-webpack.jpg'
---

## The problem ##

I'm using <a href="https://webpack.js.org/" target="_blank">webpack</a> for compiling and bundling in one hand. In the other hand I'm using <a href="https://jestjs.io/" target="_blank">jest</a> for testing.

I want to run the tests after each time that any file was changed (and compiled).
<!--more-->

## The solution ##

The solution has 3 steps of modifications the _webpack.config.js_ file:

1. Add the tests <a href="https://webpack.js.org/concepts/entry-points/" target="_blank">entry</a>
2. Answer the question <b>How to run a code on each file changing in webpack</b>?
3. Call for running the tests

### Step 1

Add an entry:

```js
entry: {
  // ...
  // add this to let webpack watch on the test files changes
  tests: './test/path-to-the-tests-entry.js'
}
```

### Step 2

To extend the functionality of webpack we can use a plugin. For our usage we can simply add it directly to the <a href="https://webpack.js.org/concepts/plugins/" target="_blank">plugins</a> section.
The only method we should implement in our plugin is `apply`. In this method we will register to `afterCompile` hook so in each compile we will run our code.

```js
plugins: [
  {
    // add a custom webpack plugin. For more info: https://webpack.js.org/concepts/plugins/
    apply: compiler => {
      // add a hook to run a callback after each compile
      compiler.hooks.afterCompile.tap('jest', compilation => {
        // in this part we will run the tests
      }
    }
  }
]
```

### Step 3

Run `spawn('npm', ['test'], {stdio:'inherit'});`. I'm using `spawn` and `{stdio:'inherit'}` to keeps the original colors which the terminal should use. (Thanks for the answer: https://stackoverflow.com/a/20145153/863110
)

And all togather:

<script src="https://gist.github.com/moshfeu/ea69b77854aa590459cfe339bd364e77.js"></script>