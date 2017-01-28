---
layout: page
title: ThoughtWire
experience: true
---
<div class="header">
    <h3>ThoughtWire</h3>
    <h3 class="position">{{site.data.thoughtwire.title}}</h3>
</div>
<div>
    <p>{{site.data.thoughtwire.range}}</p>
</div>
<ul>
    {% for desc in site.data.thoughtwire.desc %}
        <li>{{desc}}</li>
    {% endfor %}
</ul>
