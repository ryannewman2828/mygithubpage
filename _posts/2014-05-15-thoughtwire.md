---
layout: page
title: ThoughtWire
experience: true
---
<div class="container">
    <div class="header">
        <h3>ThoughtWire</h3>
        <h3 class="position">{{site.data.thoughtwire.title}}</h3>
    </div>
    <div>
        <p>{{site.data.thoughtwire.range}}</p>
    </div>
</div>
<div class="container">
    <ul>
        {% for desc in site.data.thoughtwire.desc %}
            <li>{{desc}}</li>
        {% endfor %}
    </ul>
</div>
