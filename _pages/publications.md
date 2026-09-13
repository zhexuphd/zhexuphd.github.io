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

<div style="display: flex; align-items: center; gap: 45px; margin-bottom: 55px;">

  <div style="flex: 0 0 280px;">
    <img src="{{ '/assets/img/researchjourney.JPG' | relative_url }}"
         alt="Whiteboard from 2018"
         style="width: 280px; max-width: 100%; border-radius: 4px;">
    <p style="font-size: 0.8rem; font-style: italic; margin-top: 8px;">
      A whiteboard from 2019, when my research journey began.
    </p>
  </div>

  <div style="flex: 1;">
    <h2 style="margin-top: 0;">
      Where it all began.
    </h2>

    <p>
      In 2019, Professor Martin Scott filled a whiteboard with ideas,
      questions, and connections. That conversation marked the
      beginning of my research journey.
    </p>

## Selected Peer-Reviewed Articles

<div class="publications">
{% bibliography --query @*[keywords~=published] %}
</div>

## Selected Working Papers

<div class="publications">
{% bibliography --query @*[keywords~=working] %}
</div>
