---
layout: page
main: false
title: Experience
permalink: /experience/
---
<div class="experience">
    {% for post in site.posts %}
        {% if post.experience %}
        <div class="{post.title}">
            {{ post.excerpt }}
        </div>
        {% endif %}
    {% endfor %}
</div>
