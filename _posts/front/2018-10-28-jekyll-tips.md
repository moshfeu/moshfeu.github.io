---
layout: post
title: Jekyll Tips
permalink: /posts/jekyll-tips/
tags: ['jekyll', 'github-pages', 'quick-tips', 'tags']
---

- To present tag posts count use `tag[1].size`

{% highlight js linenos %}
{% raw %}
{% for tag in site.tags %}
  <li><a href="/path_to_tags/{{ tag[0] | slugify }}">{{ tag[0] }}</a> <{{tag[1].size}}></li>
{% endfor %}
{% endraw %}
{% endhighlight %}
<!--more-->
<hr />
- To display a `ruby` code but prevent compiler from render it, use {% raw %}`{% raw %}`{% endraw %}

<script src="https://gist.github.com/moshfeu/84ea5aea307fbfe65a4a766ee77710cc.js"></script>