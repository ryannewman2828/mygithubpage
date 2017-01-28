---
layout: page
title: C++
skill: true
---
<div class="container">
    <div class="header">
        <h3>
        {% for icon in site.data.cplusplus.icons %}
            <i class="{{icon}}"></i>
        {% endfor %}
         C++ <span><button class="btn btn-info" id="cPlusPlus">See Skill</button></span></h3>
    </div>
</div>
<div class="container">
    <ul class="cPlusPlus">
        {% for li in site.data.cplusplus.desc %}
            <li>{{li}}</li>
        {% endfor %}
    </ul>
</div>