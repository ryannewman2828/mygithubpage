---
layout: page
title: JavaScript
skill: true
---
<div class="header">
    <h3>
    {% for icon in site.data.javascript.icons %}
        <i class="{{icon}}"></i>
    {% endfor %}
     JavaScript <span><button class="btn btn-info" id = "javascript">See Skill</button></span></h3> 
</div>
<ul class="javascript">
    {% for li in site.data.javascript.desc %}
        <li>{{li}}</li>
    {% endfor %}
</ul>
    