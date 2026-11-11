---
layout: page
permalink: /publications/
title: publications
description: peer-reviewed journal articles and working papers
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

### selected peer-reviewed journal articles

<div class="publications">
{% bibliography --query @*[keywords~=published] %}
</div>

### selected working papers

<div class="working">
{% bibliography --query @*[keywords~=working] %}
</div>
