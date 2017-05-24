---
layout: page
title: Databases
skill: true
---
<div class="header">
    <h3>
    {% for icon in site.data.databases.icons %}
        <i class="{{icon}}"></i>
    {% endfor %}
     Databases <span><button class="btn btn-info" id="databases">See Skill</button></span></h3>
</div>
<ul class="databases">
    {% for li in site.data.databases.desc %}
        <li>{{li}}</li>
    {% endfor %}
</ul>
