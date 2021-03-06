---
layout: post
title: Position fix and pointer-event hacks
permalink: /posts/position-fix-and-pointer-event-hacks/
tags: ['css', 'quick-tips', 'pointer-events', 'position-fixed']
image: '/assets/images/posts/fixed-absolute-pointer-events.jpg'
credit: 'Photo by <a target="_blank" href="https://unsplash.com/photos/JTB4NZDJBzA?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Erik Brolin</a> on <a target="_blank" href="/search/photos/tricks?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>'
---

In the this post I will show you 2 tricks I learned by answering a question on StackOverflow

# Trick 1

We all now that `position: fixed` is relatively to the `window`, right? Well, no. We can put it inside a `position: relative` element.

What is good for? It's a good question :)
<!--more-->
It's good if we want to put a "floating" element inside a another element.

For example, we want the the green square will stick to the right red square. We can try this:

<iframe height='265' scrolling='no' title='position fixed relative to element' src='//codepen.io/moshfeu/embed/pxgmMd/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/moshfeu/pen/pxgmMd/'>position fixed relative to element</a> by Mosh (<a href='https://codepen.io/moshfeu'>@moshfeu</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## The problem
>we want the the green square will stick to the right red square

## The solution

We can wrap the "fixed" element with another `div` and set it as `position: absolute` and `right: 0`:

<iframe height='265' scrolling='no' title='position fixed relative to element final' src='//codepen.io/moshfeu/embed/wYMLpr/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/moshfeu/pen/wYMLpr/'>position fixed relative to element final</a> by Mosh (<a href='https://codepen.io/moshfeu'>@moshfeu</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

**Imprtant!** Be careful. It's hack and the `position: relative` doesn't work as expected. For example, if we set `width: 100%` to the "fixed" element, it will get the window's width.
<hr />
# Trick 2

Sometime you want to "disable" all the element inside a certain element. So we can easly use [`pointer-events: none`](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events#Basic_example).

## The problem

What if you want to "disable" only some element but not the others?

## The solution

You can, surprise surprise, enable the `pointer-events` even if the parent has `pointer-events: none`.

Want a proof?

<iframe height='265' scrolling='no' title='pointer-event inside pointer-events' src='//codepen.io/moshfeu/embed/PyZMYE/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/moshfeu/pen/PyZMYE/'>pointer-event inside pointer-events</a> by Mosh (<a href='https://codepen.io/moshfeu'>@moshfeu</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

You can click on the `button` and on the `select` but not on the `input` or on the `radio`

The question <a href="https://stackoverflow.com/a/52611251/863110" target="_blank">https://stackoverflow.com/a/52611251/863110</a>