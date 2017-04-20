---
layout: page
title: Documented-Learning
project: true
---
<div class="header">
    <h3>Documented-Learning</h3>
    <div class="icons">
        {% for icon in site.data.documented-learning.icons %}
            <i class="{{icon}}"></i>
        {% endfor %}
    </div>
</div>
<div class="content">
    <p>{{site.data.documented-learning.desc}}</p>
</div>
