---
layout: page
title: GradeBook
project: true
---
<div class="container">
    <div class="header">
        <h3>GradeBook</h3>
        <div class="icons">
            {% for icon in site.data.gradebook.icons %}
                <i class="{{icon}}"></i>
            {% endfor %}
        </div>
    </div>
</div>
<div class="container">
    <p>{{site.data.gradebook.desc}}<a href="https://github.com/ryannewman2828/GradeBook" target="_blank">here</a>.</p>
</div>