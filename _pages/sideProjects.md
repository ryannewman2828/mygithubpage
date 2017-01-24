---
layout: page
main: false
title: Side Projects
permalink: /sideProjects/
---

<div class="side-projects">
    {% for post in site.posts %}
        {% if post.project %}
            {{ post.excerpt }}
        {% endif %}
    {% endfor %}
</div>