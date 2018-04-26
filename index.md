{% for post in site.posts %}
<div class="post{% if forloop.last %} last{% endif %}">
  <h3>
    <a href="{{post.url}}">
      {{post.title}}
    </a>
  </h3>
  <div class="tags">/*{{post.tags | join: ', '}}*/</div>
  {{post.excerpt}}
  <a href="{{post.url}}">
    Read more
  </a>
</div>
{% endfor %}