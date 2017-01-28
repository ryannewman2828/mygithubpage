---
layout: page
main: false
title: Skills
permalink: /skills/
---

<div class="skills">
    {% for post in site.posts %}
        {% if post.skill %}
            <div>
                {{ post.excerpt }}
            </div>
        {% endif %}
    {% endfor %}
</div>