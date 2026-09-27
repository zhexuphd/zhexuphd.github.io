---
layout: page
permalink: /research/
title: research
description: selected publications only, including peer-reviewed journal articles and working papers
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

## Selected peer-reviewed articles

<div class="publications">
{% bibliography --query @*[keywords~=published] %}
</div>

## Selected working papers

<div class="publications">
{% bibliography --query @*[keywords~=working] %}
</div>
