---
layout: page
title: {{name-here}}
experience: true
---
<div class="header">
    <h3>{{name-here}}</h3>
    <h3 class="position">{{site.data.{{name-here | lowercased}}.title}}</h3>
</div>
<div>
    <p>{{site.data.{{name-here | lowercased}}.range}}</p>
</div>
<ul>
    {% for desc in site.data.{{name-here | lowercased}}.desc %}
        <li>{{desc}}</li>
    {% endfor %}
</ul>
