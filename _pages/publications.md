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

My research examines how emerging technologies and political contexts shape the mediation of humanitarian issues and public responses. Using natural language processing, computational social science, and multimodal methods, I study how news media, platforms, and political actors shape information environments around humanitarian crises.

## Selected Peer-Reviewed Articles

<div class="publications">
{% bibliography --query @*[selected=true][keywords~=published] %}
</div>

## Selected Working Papers

<div class="publications">
{% bibliography --query @*[selected=true][keywords~=working] %}
</div>
