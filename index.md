---
image: '/assets/images/logo.png'
description: "Hello and welcome to my blog :) My blog is focuses on FED stuff and dedicated to `spread the code`"
---

{% for post in site.posts limit:5 %}
  {% include post-item.html post=post %}
{% endfor %}