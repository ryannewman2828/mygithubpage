---
layout: page
title: Bootstrap
skill: true
---
<div class="header">
    <h3>
    {% for icon in site.data.bootstrap.icons %}
        <i class="{{icon}}"></i>
    {% endfor %}
     Bootstrap <span><button class="btn btn-info" id="bootstrap">See Skill</button></span></h3>
</div>
<ul class="bootstrap">
    {% for li in site.data.bootstrap.desc %}
        <li>{{li}}</li>
    {% endfor %}
</ul>
