---
layout: post
title: Make links work inside SVG
permalink: /posts/links-inside-svg/
tags: ['css3', 'svg', 'link']
image: '/assets/images/posts/links-inside-svg.jpg'
---


First of all, we can add links to a SVG file! Did you know? Well, I didn't. It's like the old good image map (`<map />` tag, remember? If you don't know this tag,   probably you are not yet 20 years old) but with SVG, so it's pretty cool.

The question is, how to use it?

<!--more-->
Well, it's easy, just wrap each tag you want to be a link with `a` tag but instead use `href` attribute, use `xlink:href`. Like this:

<iframe height='265' scrolling='no' title='SVG with link' src='//codepen.io/moshfeu/embed/erKxzp/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/moshfeu/pen/erKxzp/'>SVG with link</a> by Mosh (<a href='https://codepen.io/moshfeu'>@moshfeu</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## The problem ##

The problem start when we want to embed this in the page.<br />
The instant way to embed an image is, surprise surprise, use `img` tag. But when we will try to to so, we will be disappointed to discover that the links are not working anymore.

In other hand, it's actually does make sense.. Who heard about links inside an image? Even in the 90's we needed to use `map` for links on image.

## The solution ##

Much shorter than describe the problem :) Instead of using `img` tag, we can use `object` tag. `object` tag get the url via the `data` attribute. Like this:

<iframe height='265' scrolling='no' title='XqYOoR' src='//codepen.io/moshfeu/embed/XqYOoR/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/moshfeu/pen/XqYOoR/'>XqYOoR</a> by Mosh (<a href='https://codepen.io/moshfeu'>@moshfeu</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Original Question ##
<a href="https://stackoverflow.com/q/50246417/863110" target="_blank">https://stackoverflow.com/q/50246417/863110</a>
