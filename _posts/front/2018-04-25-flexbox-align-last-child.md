---
layout: post
title: \[How To\] Align last child to right flexbox
permalink: /posts/flexbox-align-last-child/
tags: ['css3', 'flexbox', 'how-to']
---

<img src="/assets/images/posts/flexbox-align-last-child.jpeg" alt="how to flexbox align last child" />
Photo by Jens Johnsson from Pexels

## The problem ##
When you come from `float` mechanism to `flexbox` you are sometime asking yourself how to make `float: right` like works with `flexbox`. (e.g. align the last child to the opposite side)
<!--more-->
## The solution ##
When we want that the last child will align to the right it's like we say we want the first child will take all the place except the last-child place.
To do this we can use `flex-grow`. By set `flex-grow: 1` to the first child we are telling the browser exactly this.

## Demo ##

<iframe height='265' scrolling='no' title='Align flexbox last item to right' src='//codepen.io/moshfeu/embed/aGdNEZ/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/moshfeu/pen/aGdNEZ/'>Align flexbox last item to right</a> by Mosh (<a href='https://codepen.io/moshfeu'>@moshfeu</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Original Question ##
<a href="https://stackoverflow.com/q/49965479/863110" target="_blank">https://stackoverflow.com/q/49965479/863110</a>
