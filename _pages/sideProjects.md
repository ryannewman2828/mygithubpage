---
layout: page
main: false
title: Side Projects
permalink: /sideProjects/
---
<div class="side-projects">
    {% for post in site.posts %}
        {% if post.project %}
        <div class="{{post.title}}">
            <div class="container">
                {{ post.excerpt }}
            </div>
        </div>    
        {% endif %}
    {% endfor %}
</div>