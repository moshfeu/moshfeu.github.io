---
layout: post
title: \[How to\] Run multiple watch scripts in paraller
permalink: /posts/run-multiple-watch-scripts-parallel/
tags: ['npm']
image: '/assets/images/posts/run-multiple-watch-scripts-parallel.jpg'
credit: Photo by <a target="_blank" href="https://unsplash.com/photos/ApjcYVl-h-o?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Bence ▲ Boros</a> on <a href="/search/photos/parallel-space?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>
---

## The problem ##

In each project must be a command the start it, usually this command is been store under `start` script in `package.json`. Sometimes, this command is combine of multiple sub tasks. For example, transpile the _.ts_ files and then start a node server.
<!--more-->

Sometimes, the sub tasks have their own "watcher", to watch files changes and run the script again.
For instanse, `tsc` script has the `-w` option, to watch changes in the _.ts_ files to transpile them again.

The problem is, that "watch" scripts are never ending (unless we `kill` them, of course) so if we want to run them all, by doing `script1 -w && script2 -w`, `script2` will never been execute because `script1` will never ends.


Using `|` will not help us either because it will watch only the **last** part.

## The solution ##

The solution is to use a package called <a href="https://github.com/mysticatea/npm-run-all" target="_blank">`npm-run-all`</a>. With this package we can run all the scripts in parallel and get all the outputs from all the scripts.

In <a href="my case" target="_blank">https://github.com/moshfeu/y2mp3/blob/master/package.json#L16</a> I needed to run 3 watchers: `webpack`, `tsc`, and `electron` so the `package.json` scripts was:

```json
"scripts": {
  "tsc": "tsc -w",
  "webpack": "webpack",
  "electron": "electron ."
}
```

So I added the `start` script:

```json
"scripts": {
  "start": "npm-run-all --parallel tsc webpack electron",
  "tsc": "tsc -w",
  "webpack": "webpack",
  "electron": "electron ."
}
```

And that's it. Working like a charm :)

<a href="https://www.npmjs.com/package/npm-run-all" target="_blank">
  <img alt="npm-run-all package" src="https://nodei.co/npm/npm-run-all.png?downloads=true&downloadRank=true&stars=true">
</a>

Thanks for <a href="https://stackoverflow.com/users/1282571/ling" target="_blank">@Ling</a> for his answer: <a href="https://stackoverflow.com/a/39575186/863110" target="_blank">https://stackoverflow.com/a/39575186/863110</a>