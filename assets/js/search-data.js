// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-group-members",
          title: "Group Members",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-press",
          title: "Press",
          description: "Media coverage and features of the group&#39;s research.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/press/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "Recorded talks, lectures, and interviews from the group.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "news-papers-accepted-at-iclr-2026-our-lab-will-present-4-papers-at-iclr-2026-in-rio-1-full-paper-and-3-workshop-papers-on-control-theoretic-in-training-compression-of-ssms-frequency-aware-flow-matching-structured-pruning-of-gated-deltanet-models-and-data-free-mixed-precision-quantization-of-moes",
          title: 'Papers accepted at ICLR 2026: Our lab will present 4 papers at ICLR...',
          description: "",
          section: "News",},{id: "news-papers-accepted-at-icml-2026-our-lab-will-present-3-papers-at-icml-2026-1-full-paper-and-2-workshop-papers-on-neural-low-discrepancy-sequences-neurolds-stable-and-adaptive-deep-looped-transformers-fixed-point-reasoners-and-state-reduction-in-linear-attention",
          title: 'Papers accepted at ICML 2026: Our lab will present 3 papers at ICML...',
          description: "",
          section: "News",},{id: "news-papers-accepted-at-neurips-2026-our-lab-will-present-3-full-papers-at-neurips-2026-on-stable-and-adaptive-deep-looped-transformers-fixed-point-reasoners-calibration-free-bit-allocation-for-moe-quantization-alphaq-and-a-benchmark-for-scientific-time-series-phyts",
          title: 'Papers accepted at NeurIPS 2026: Our lab will present 3 full papers at...',
          description: "",
          section: "News",},];
