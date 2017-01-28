---
layout: page
title: GradeBook
project: true
---
<div class="header">
    <h3>GradeBook</h3>
    <div class="icons">
        {% for icon in site.data.gradebook.icons %}
            <i class="{{icon}}"></i>
        {% endfor %}
    </div>
</div>
<p>{{site.data.gradebook.desc}}</p>
