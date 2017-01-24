---
layout: page
main: false
title: Experience
permalink: /experience/
---

<div class="experience">
    {% for post in site.posts %}
        {% if post.experience %}
            {{ post.excerpt }}
        {% endif %}
    {% endfor %}
</div>
