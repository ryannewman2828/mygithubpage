---
layout: page
title: Cave Fighter
project: true
---
<div class="header">
    <h3>Cave Fighter - Game</h3>
    <div class="icons">
        {% for icon in site.data.cavefighter.icons %}
            <i class="{{icon}}"></i>
        {% endfor %}
    </div>
</div>
<div class="row">
    <div class = "col-md-4">
        <img src="../images/screenshot.jpg" height="300px" width="325px">
    </div>
    <div class = "col-md-8">
        <p>{{site.data.cavefighter.desc}}</p>
    </div>
</div> 
