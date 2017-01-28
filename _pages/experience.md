---
layout: page
main: false
title: Experience
permalink: /experience/
---
<div class="experience">
    {% for post in site.posts %}
        {% if post.experience %}
        <div class="{{post.title}}">
            <div class="container">
                {{ post.excerpt }}
            </div>
        </div>
        {% endif %}
    {% endfor %}
</div>
