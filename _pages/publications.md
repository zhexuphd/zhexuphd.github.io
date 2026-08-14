---
layout: page
permalink: /publications/
title: publications
description: selected publications only, including peer-reviewed journal articles and working papers
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

## Selected Peer-Reviewed Journal Articles

<div class="publications">
{% bibliography --query @*[keywords~=journal] %}
</div>

---

## Selected Working Papers

<div class="publications">
{% bibliography --query @*[keywords~=working] %}
</div>
