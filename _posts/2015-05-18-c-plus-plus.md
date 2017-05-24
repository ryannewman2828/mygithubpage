---
layout: page
title: C++
skill: true
---
<div class="header">
    <h3>
    {% for icon in site.data.cplusplus.icons %}
        <i class="{{icon}}"></i>
    {% endfor %}
     C/C++ <span><button class="btn btn-info" id="cPlusPlus">See Skill</button></span></h3>
</div>
<ul class="cPlusPlus">
    {% for li in site.data.cplusplus.desc %}
        <li>{{li}}</li>
    {% endfor %}
</ul>
