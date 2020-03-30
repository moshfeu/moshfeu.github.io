---
layout: post
title: How to post code snippet and run it
permalink: /posts/how-to-post-code-snippet-and-run-it/
tags: ['jekyll', 'github-pages', 'quick-tips']
---

<style>
body .gist .gist-file {
  margin-bottom: 0;
  border: none;
  border-radius: 0;
}

body .gist .gist-data {
  border-bottom: none;
  border-radius: 0;
  background-color: #f1f3f5;
}

body .gist .blob-wrapper {
  border-radius: 0;
}

body .gist .highlight {
  background-color: #000;
  font-family: monospace;
  font-size: 16px;
  color: #b5e853;
}

body .gist .highlight td {
  padding: 5px 15px !important;
  line-height: 1;
  font-family: inherit;
  font-size: inherit;
}

body .gist tr:first-child td {
  padding-top: 15px !important;
}

body .gist tr:last-child td {
  padding-bottom: 15px !important;
}

body .gist .blob-num {
  color: #b5e853;
  background-color: transparent;
  pointer-events: none;
}

body .gist .gist-meta {
  display: none;
}

body .gist .pl-ent,
body .gist .pl-kos,
body .gist .pl-c1 {
  color: #f4bf75;
}

body .gist .pl-s .pl-s1,
body .gist .pl-smi,
body .gist .pl-en,
body .gist .blob-code-inner {
  color: #b5e853;
}

body .gist .pl-pds,
body .gist .pl-s,
body .gist .pl-s .pl-pse .pl-s1,
body .gist .pl-sr,
body .gist .pl-sr .pl-cce,
body .gist .pl-sr .pl-sra,
body .gist .pl-sr .pl-sre {
  color: #90a959;
}
</style>

## Highlight the code

Jekyll supplys a tag called `highlight`. It can accept some parameters. What's language and show lines numbers. [More info](https://jekyllrb.com/docs/liquid/tags/#code-snippet-highlighting)

<!-- more -->

For example, this code

<script src="https://gist.github.com/moshfeu/9389214552feb9eef823fa1b62e63773.js"></script>

Will render

{% highlight html linenos %}
  <button>do alert</button>
  <script>
    document.querySelector('button').addEventListener('click', () => {
      alert('clicked');
    })
  </script>
{% endhighlight %}

## Run it

And the runnable part

{% highlight html linenos %}
<div>
  <button>do alert</button>
  <script>
    document.querySelector('button').addEventListener('click', () => {
      alert('clicked');
    })
  </script>
</div>
{% endhighlight %}

Will render

<div>
  <button>do alert</button>
  <script>
    document.querySelector('button').addEventListener('click', () => {
      alert('clicked');
    })
  </script>
</div>

P.S. have you moticed that the first snippet is actually [a gits](https://gist.github.com/moshfeu/9389214552feb9eef823fa1b62e63773)? 😄
Want to know how to customize a gits' theme? Check this great post: https://codersblock.com/blog/customizing-github-gists/