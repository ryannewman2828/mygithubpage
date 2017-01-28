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
                <div class="container">
                    {{ post.excerpt }}
                </div>
            </div>
        {% endif %}
    {% endfor %}
</div>