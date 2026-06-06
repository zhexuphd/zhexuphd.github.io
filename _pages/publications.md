---
layout: page
permalink: /publications/
title: publications
description: selected publications, preprints, and working papers (reverse chronological order). See my Google Scholar profile for a full list.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->
<!-- Bibsearch Feature -->
{% include bib_search.liquid %}

<br>

## Selected peer-reviewed publications

<div class="publications">
{% bibliography --query @*[keywords=published] %}
</div>

<br>

## Selected working papers

<div class="publications">
{% bibliography --query @*[keywords=working paper] %}
</div>
