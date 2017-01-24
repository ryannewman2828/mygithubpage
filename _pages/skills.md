---
layout: page
main: false
title: Skills
permalink: /skills/
---

<div class="skills">
    {% for post in site.posts %}
        {% if post.skill %}
            {{ post.excerpt }}
        {% endif %}
    {% endfor %}
</div>