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
          description: "",
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
        },{id: "news-oral-paper-at-iclr-2025-our-paper-on-oscillatory-state-space-model-got-accepted-as-an-oral-at-iclr-2025-see-you-in-singapore",
          title: 'Oral Paper at ICLR 2025: Our paper on Oscillatory State-Space Model got accepted...',
          description: "",
          section: "News",},{id: "news-linoss-in-the-news-check-out-the-mit-news-article-about-our-paper-on-oscillatory-state-space-model",
          title: 'LinOSS in the news: Check out the MIT News article about our paper...',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-corl-2025-our-paper-on-improving-efficiency-of-sampling-based-motion-planning-via-message-passing-monte-carlo-got-accepted-at-corl-2025-see-you-in-seoul",
          title: 'Paper accepted at CoRL 2025: Our paper on Improving Efficiency of Sampling-based Motion...',
          description: "",
          section: "News",},{id: "news-t-konstantin-rusch-joined-liquid-ai-as-scientific-advisor-we-are-excited-about-pushing-the-boundaries-of-what-is-possible-on-efficient-ai-together",
          title: 'T. Konstantin Rusch joined Liquid AI as Scientific Advisor: We are excited about...',
          description: "",
          section: "News",},{id: "news-t-konstantin-rusch-serves-as-an-area-chair-at-iclr-icml-and-neurips-2026",
          title: 'T. Konstantin Rusch serves as an Area Chair at ICLR, ICML, and NeurIPS...',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-log-2025-our-paper-on-relaxed-equivariance-via-multitask-learning-got-accepted-at-log-2025-see-you-in-phoenix",
          title: 'Paper accepted at LOG 2025: Our paper on Relaxed Equivariance via Multitask Learning...',
          description: "",
          section: "News",},{id: "news-papers-accepted-at-iclr-2026-our-lab-will-present-4-papers-at-iclr-2026-in-rio-1-full-paper-and-3-workshop-papers-on-control-theoretic-in-training-compression-of-ssms-frequency-aware-flow-matching-structured-pruning-of-gated-deltanet-models-and-data-free-mixed-precision-quantization-of-moes",
          title: 'Papers accepted at ICLR 2026: Our lab will present 4 papers at ICLR...',
          description: "",
          section: "News",},];
