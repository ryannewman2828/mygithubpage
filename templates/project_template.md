---
layout: page
title: {{name-here}}
project: true
---
<div class="header">
    <h3>{{name-here}}</h3>
    <div class="icons">
        {% for icon in site.data.{{name-here | lowercased}}.icons %}
            <i class="{{icon}}"></i>
        {% endfor %}
    </div>
</div>
<div class="content">
    <p>{{site.data.{{name-here | lowercased}}.desc}}</p>
</div>
