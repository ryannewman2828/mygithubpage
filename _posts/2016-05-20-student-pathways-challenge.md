---
layout: page
title: Student Pathways Challenge
project: true
---
<div class="header">
    <h3>Student Pathways Challenge</h3>
    <div class="icons">
        {% for icon in site.data.student-pathways-challenge.icons %}
            <i class="{{icon}}"></i>
        {% endfor %}
    </div>
</div>
<div class="content">
    <p>{{site.data.student-pathways-challenge.desc}}</p>
</div>
