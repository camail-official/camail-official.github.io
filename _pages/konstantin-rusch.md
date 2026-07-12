---
layout: page
permalink: /konstantin-rusch/
title: T. Konstantin Rusch
description:
nav: false
---

<style>
  .pi-page {
    max-width: 820px;
    margin: 0 auto;
  }
  .pi-header {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 1.75rem;
  }
  .pi-photo {
    flex: 0 0 170px;
  }
  .pi-photo img {
    width: 170px;
    height: 170px;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  }
  .pi-role {
    color: var(--global-text-color-light);
    margin: 0 0 0.75rem;
    line-height: 1.5;
  }
  .pi-links a {
    display: inline-block;
    font-weight: 600;
    color: var(--global-theme-color);
    margin-right: 1.1rem;
  }
  .pi-section {
    margin-top: 2.5rem;
  }
  .pi-section h2 {
    font-size: 1.35rem;
    font-weight: 600;
    margin-bottom: 1rem;
    padding-bottom: 0.4rem;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .pi-timeline {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .pi-timeline li {
    display: flex;
    gap: 1.25rem;
    align-items: baseline;
    padding: 0.45rem 0;
  }
  .pi-timeline .years {
    flex: 0 0 7.5rem;
    color: var(--global-text-color-light);
    font-size: 0.9rem;
    white-space: nowrap;
  }
  .pi-timeline .detail {
    display: block;
    color: var(--global-text-color-light);
    font-size: 0.92rem;
  }
  @media (max-width: 576px) {
    .pi-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    .pi-timeline li {
      flex-direction: column;
      gap: 0.15rem;
      padding: 0.6rem 0;
    }
    .pi-timeline .years {
      flex: none;
      font-size: 0.85rem;
    }
  }
</style>

<div class="pi-page">

  <div class="pi-header">
    <div class="pi-photo">
      <img src="{{ '/assets/img/TKRusch.jpeg' | relative_url }}" alt="T. Konstantin Rusch">
    </div>
    <div>
      <p class="pi-role">
        Principal Investigator (Assistant Professor) at the <a href="https://institute-tue.ellis.eu/">ELLIS Institute Tübingen</a>
        and the <a href="https://is.mpg.de/">Max Planck Institute for Intelligent Systems</a><br>
        Head of the Computational Applied Mathematics &amp; AI Lab (CAMAIL)
      </p>
      <p class="pi-links">
        <a href="https://scholar.google.de/citations?user=9LajlSsAAAAJ&hl=en" target="_blank" rel="noopener">Google Scholar</a>
        <a href="mailto:tkrusch@tue.ellis.eu">Email</a>
      </p>
    </div>
  </div>

  <p>
    T. Konstantin Rusch is a Principal Investigator (Assistant Professor) at the ELLIS Institute Tübingen and the
    Max Planck Institute for Intelligent Systems, where he leads the Computational Applied Mathematics &amp; AI Lab
    (CAMAIL). He is also a Scientific Advisor at Liquid AI. Previously, he was an SNSF postdoctoral researcher at
    MIT CSAIL, advised by Daniela Rus, and held a visiting researcher position at UC Berkeley. He received his PhD
    in Applied Mathematics from ETH Zurich, advised by Siddhartha Mishra.
  </p>

  <div class="pi-section">
    <h2>Positions</h2>
    <ul class="pi-timeline">
      <li><span class="years">2025 &ndash; now</span><span>Principal Investigator (Assistant Professor), ELLIS Institute Tübingen &amp; Max Planck Institute for Intelligent Systems<span class="detail">Head of the Computational Applied Mathematics &amp; AI Lab (CAMAIL)</span></span></li>
      <li><span class="years">2025 &ndash; now</span><span>Scientific Advisor, Liquid AI</span></li>
      <li><span class="years">2024 &ndash; 2025</span><span>Postdoctoral Researcher, MIT CSAIL<span class="detail">SNSF postdoctoral fellow, advised by Daniela Rus</span></span></li>
      <li><span class="years">2022</span><span>Visiting Researcher, UC Berkeley<span class="detail">Hosted by Michael W. Mahoney</span></span></li>
    </ul>
  </div>

  <div class="pi-section">
    <h2>Education</h2>
    <ul class="pi-timeline">
      <li><span class="years">2019 &ndash; 2023</span><span>PhD in Applied Mathematics, ETH Zurich<span class="detail">Thesis: &ldquo;Physics-Inspired Machine Learning&rdquo;</span></span></li>
      <li><span class="years">2018 &ndash; 2019</span><span>MSc in Computational Applied Mathematics, University of Edinburgh</span></li>
      <li><span class="years">2014 &ndash; 2018</span><span>BSc in Mathematics, University of Bonn</span></li>
    </ul>
  </div>

</div>
