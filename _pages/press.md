---
layout: page
permalink: /press/
title: Press
description: Media coverage and features of the group's research.
nav: true
nav_order: 4
---

<style>
  .press-list {
    max-width: 820px;
    margin: 0 auto;
  }
  .press-item {
    display: flex;
    align-items: baseline;
    gap: 1.25rem;
    padding: 1.15rem 0;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .press-item:last-child {
    border-bottom: none;
  }
  .press-date {
    flex: 0 0 7.5rem;
    color: var(--global-text-color-light);
    font-size: 0.9rem;
    white-space: nowrap;
  }
  .press-body {
    flex: 1;
  }
  .press-outlet {
    display: inline-block;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--global-theme-color);
    margin-bottom: 0.2rem;
  }
  .press-title {
    font-size: 1.15rem;
    font-weight: 600;
    line-height: 1.4;
    margin: 0;
  }
  .press-title a {
    color: inherit;
  }
  .press-title a:hover {
    color: var(--global-theme-color);
    text-decoration: none;
  }
  @media (max-width: 576px) {
    .press-item {
      flex-direction: column;
      gap: 0.25rem;
    }
    .press-date {
      flex: none;
      order: 2;
    }
  }
</style>

<div class="press-list">
  {% assign press_sorted = site.data.press | sort: "date" | reverse %}
  {% for item in press_sorted %}
  <div class="press-item">
    <div class="press-date">{{ item.date | date: "%B %-d, %Y" }}</div>
    <div class="press-body">
      <span class="press-outlet">{{ item.outlet }}</span>
      <p class="press-title"><a href="{{ item.url }}">{{ item.title }}</a></p>
    </div>
  </div>
  {% endfor %}
</div>
