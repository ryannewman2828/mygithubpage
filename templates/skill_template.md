---
layout: page
title: {{name-here}}
skill: true
---
<div class="header">
    <h3>
    {% for icon in site.data.{{name-here | lowercased}}.icons %}
        <i class="{{icon}}"></i>
    {% endfor %}
     {{name-here}} <span><button class="btn btn-info" id="{{name-here | lowercased}}">See Skill</button></span></h3>
</div>
<ul class="{{name-here | lowercased}}">
    {% for li in site.data.{{name-here | lowercased}}.desc %}
        <li>{{li}}</li>
    {% endfor %}
</ul>
