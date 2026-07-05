/* L-ES Portfolio — data-driven, dependency-free vanilla JS.
   Panels ("pages") open/close via URL hash, close button, Esc and outside click. */
(function () {
  "use strict";

  const ICONS = {
    code:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.7 15.9 4.8 12l3.9-3.9L7.3 6.7 2 12l5.3 5.3zM15.3 8.1 19.2 12l-3.9 3.9 1.4 1.4L22 12l-5.3-5.3z"/></svg>',
    live:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3v2h3.6l-9.3 9.3 1.4 1.4L19 6.4V10h2V3zM19 19H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2z"/></svg>',
    article:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14zM7 7h10v2H7zm0 4h10v2H7zm0 4h7v2H7z"/></svg>',
    play:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 20.5V3.5c0-.6.7-1 1.2-.7l14.8 8.5c.5.3.5 1.1 0 1.4L4.2 21.2c-.5.3-1.2-.1-1.2-.7z"/></svg>',
  };

  // Official brand icons (Simple Icons, MIT). Single-path, 24x24, currentColor.
  function svg24(d) {
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + d + '"/></svg>';
  }
  const SOCIAL_ICONS = {
    github: svg24(
      "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
    ),
    linkedin: svg24(
      "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
    ),
    medium: svg24(
      "M4.21 0A4.201 4.201 0 0 0 0 4.21v15.58A4.201 4.201 0 0 0 4.21 24h15.58A4.201 4.201 0 0 0 24 19.79v-1.093c-.137.013-.278.02-.422.02-2.577 0-4.027-2.146-4.09-4.832a7.592 7.592 0 0 1 .022-.708c.093-1.186.475-2.241 1.105-3.022a3.885 3.885 0 0 1 1.395-1.1c.468-.237 1.127-.367 1.664-.367h.023c.101 0 .202.004.303.01V4.211A4.201 4.201 0 0 0 19.79 0Zm.198 5.583h4.165l3.588 8.435 3.59-8.435h3.864v.146l-.019.004c-.705.16-1.063.397-1.063 1.254h-.003l.003 10.274c.06.676.424.885 1.063 1.03l.02.004v.145h-4.923v-.145l.019-.005c.639-.144.994-.353 1.054-1.03V7.267l-4.745 11.15h-.261L6.15 7.569v9.445c0 .857.358 1.094 1.063 1.253l.02.004v.147H4.405v-.147l.019-.004c.705-.16 1.065-.397 1.065-1.253V6.987c0-.857-.358-1.094-1.064-1.254l-.018-.004zm19.25 3.668c-1.086.023-1.733 1.323-1.813 3.124H24V9.298a1.378 1.378 0 0 0-.342-.047Zm-1.862 3.632c-.1 1.756.86 3.239 2.204 3.634v-3.634z"
    ),
    stackoverflow: svg24(
      "M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z"
    ),
    googleplay: svg24(
      "M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"
    ),
    instagram: svg24(
      "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"
    ),
    facebook: svg24(
      "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
    ),
  };

  const SOCIAL_ORDER = [
    ["github", "GitHub"],
    ["linkedin", "LinkedIn"],
    ["medium", "Medium"],
    ["stackoverflow", "Stack Overflow"],
    ["googleplay", "Google Play"],
    ["instagram", "Instagram"],
    ["facebook", "Facebook"],
  ];

  const els = {
    body: document.body,
    stage: document.getElementById("stage"),
    intro: document.getElementById("intro"),
    outro: document.getElementById("outro"),
    heroName: document.getElementById("hero-name"),
    heroRole: document.getElementById("hero-role"),
    ctaRow: document.getElementById("cta-row"),
    featuredCta: document.getElementById("featured-cta"),
    menu: document.getElementById("menu"),
    panels: document.getElementById("panels"),
    socials: document.getElementById("socials"),
    contact: document.getElementById("contact"),
    year: document.getElementById("year"),
  };

  let panels = []; // { id, node }
  let activeId = null;
  let locked = false;
  const SPEED = 300; // ms; keep in sync with --speed in the stylesheet

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function slug(s) {
    return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }
  function extLink(url, label, icon) {
    if (!url) return "";
    return (
      '<a class="card-link" href="' + esc(url) +
      '" target="_blank" rel="noopener noreferrer">' + (icon || "") + esc(label) + "</a>"
    );
  }

  function prettify(s) {
    return String(s)
      .replace(/[-_]+/g, " ")
      .replace(/\b\w/g, function (c) {
        return c.toUpperCase();
      });
  }
  function badgesHTML(p) {
    const out = [];
    if (p.featured) out.push('<span class="badge featured">Featured</span>');
    const status = (p.status || "").trim();
    if (status === "shipped") {
      out.push('<span class="badge shipped">Shipped</span>');
    } else if (status === "team") {
      out.push('<span class="badge team">Team</span>');
    } else if (status) {
      // Any other non-empty status -> default badge showing its label.
      out.push('<span class="badge">' + esc(prettify(status)) + "</span>");
    }
    return out.length ? '<div class="card-badges">' + out.join("") + "</div>" : "";
  }
  function linksHTML(p) {
    const l = p.links || {};
    const parts = [];
    if (l.code) parts.push(extLink(l.code, "Code", ICONS.code));
    if (l.live) parts.push(extLink(l.live, "Live", ICONS.live));
    if (l.playstore) parts.push(extLink(l.playstore, "Google Play", ICONS.play));
    (l.extra || []).forEach((x) => parts.push(extLink(x.url, x.label, ICONS.live)));
    (l.articles || []).forEach((a) => parts.push(extLink(a.url, a.label, ICONS.article)));
    return parts.length ? '<div class="card-links">' + parts.join("") + "</div>" : "";
  }
  function versionsHTML(p) {
    if (!p.versions || !p.versions.length) return "";
    const rows = p.versions.map(function (v) {
      const links = [];
      if (v.live) links.push(extLink(v.live, "Live", ICONS.live));
      if (v.code) links.push(extLink(v.code, "Code", ICONS.code));
      return (
        '<div class="version"><span class="version-label">' + esc(v.label) +
        '</span> <span class="version-note">' + esc(v.note) + "</span>" +
        (links.length ? '<span class="version-links">' + links.join("") + "</span>" : "") + "</div>"
      );
    }).join("");
    return '<div class="versions">' + rows + "</div>";
  }
  function chipsHTML(stack) {
    if (!stack || !stack.length) return "";
    return '<div class="chips">' + stack.map((s) => '<span class="chip">' + esc(s) + "</span>").join("") + "</div>";
  }
  function cardHTML(p) {
    return (
      '<article class="card' + (p.versions ? " wide" : "") + '">' +
      '<div class="card-media">' + badgesHTML(p) +
      '<img src="' + esc(p.image) + '" alt="' + esc(p.title) +
      ' project screenshot" loading="lazy" decoding="async" /></div>' +
      '<span class="card-cat">' + esc(p.category) + "</span>" +
      "<h3>" + esc(p.title) + "</h3>" +
      '<p class="card-desc">' + esc(p.description) + "</p>" +
      (p.role ? '<p class="card-role">' + esc(p.role) + "</p>" : "") +
      versionsHTML(p) + chipsHTML(p.stack) + linksHTML(p) +
      "</article>"
    );
  }

  function panelHTML(id, title, sub, projects) {
    const multi = projects.length > 1;
    return (
      '<article class="panel" id="' + id + '" aria-hidden="true">' +
      '<button type="button" class="close" aria-label="Close panel">Close</button>' +
      '<h2 class="panel-title">' + esc(title) + "</h2>" +
      '<p class="panel-sub">' + esc(sub) + "</p>" +
      '<div class="cards' + (multi ? " multi" : "") + '">' +
      (projects.length ? projects.map(cardHTML).join("") : '<p class="empty-state">Nothing here yet.</p>') +
      "</div></article>"
    );
  }

  /* ---------- Explore / search panel ---------- */
  let searchState = { query: "", tags: [] };
  let allProjectsRef = [];

  function allTags(projects) {
    const set = new Set();
    projects.forEach((p) => (p.stack || []).forEach((t) => set.add(t)));
    return Array.from(set).sort(function (a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });
  }

  function matchesSearch(p) {
    const q = searchState.query.trim().toLowerCase();
    let textOk = true;
    if (q) {
      const hay = [p.title, p.description, p.category]
        .concat(p.stack || [])
        .join(" ")
        .toLowerCase();
      textOk = hay.indexOf(q) !== -1;
    }
    let tagOk = true;
    if (searchState.tags.length) {
      const stack = p.stack || [];
      // OR match: project shown if it has ANY of the selected tags.
      tagOk = searchState.tags.some((t) => stack.indexOf(t) !== -1);
    }
    return textOk && tagOk;
  }

  function renderSearchResults() {
    const results = allProjectsRef.filter(matchesSearch);
    const box = document.getElementById("search-results");
    if (!box) return;
    box.innerHTML = results.length
      ? results.map(cardHTML).join("")
      : '<p class="empty-state">No projects match your search.</p>';
    const count = document.getElementById("search-count");
    if (count)
      count.textContent =
        results.length + " of " + allProjectsRef.length + " projects";
  }

  function buildExplorePanelHTML(projects) {
    const tags = allTags(projects);
    const chips = tags
      .map(
        (t) =>
          '<button type="button" class="tag-chip" data-tag="' +
          esc(t) +
          '">' +
          esc(t) +
          "</button>"
      )
      .join("");
    return (
      '<article class="panel" id="explore" aria-hidden="true">' +
      '<button type="button" class="close" aria-label="Close panel">Close</button>' +
      '<h2 class="panel-title">Explore</h2>' +
      '<p class="panel-sub" id="search-count">' +
      projects.length +
      " projects</p>" +
      '<input type="search" id="search-input" class="search-input" ' +
      'placeholder="Search by name, tech, keyword…" aria-label="Search projects" />' +
      '<div class="tag-filter" id="tag-filter" role="group" aria-label="Filter by technology">' +
      chips +
      "</div>" +
      '<div class="cards multi" id="search-results"></div>' +
      "</article>"
    );
  }

  function wireExplorePanel() {
    const input = document.getElementById("search-input");
    const tagBox = document.getElementById("tag-filter");
    if (input) {
      input.addEventListener("input", function () {
        searchState.query = input.value;
        renderSearchResults();
      });
    }
    if (tagBox) {
      tagBox.addEventListener("click", function (e) {
        const chip = e.target.closest(".tag-chip");
        if (!chip) return;
        const tag = chip.getAttribute("data-tag");
        const i = searchState.tags.indexOf(tag);
        if (i === -1) {
          searchState.tags.push(tag);
          chip.classList.add("active");
        } else {
          searchState.tags.splice(i, 1);
          chip.classList.remove("active");
        }
        renderSearchResults();
      });
    }
    renderSearchResults();
  }

  /* ---------- panel show/hide ---------- */
  function showPanel(id) {
    const entry = panels.find((p) => p.id === id);
    if (!entry) return;
    if (locked) return;

    // First interaction stops the "start here" pulse on the Featured button.
    const fb = els.featuredCta && els.featuredCta.querySelector(".pulse");
    if (fb) fb.classList.remove("pulse");

    els.panels.classList.add("open");

    // Panels only open from the front page (intro/outro are pointer-events:none
    // while a panel is open), so there is no active panel to swap out here.
    if (activeId === id) return;

    locked = true;
    els.body.classList.add("panel-open");
    mountPanel(entry.node);
    activeId = id;
    setTimeout(() => (locked = false), SPEED);
  }

  function mountPanel(node) {
    node.classList.add("mounted");
    node.setAttribute("aria-hidden", "false");
    // next frame so the transition runs
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        node.classList.add("shown");
        window.scrollTo(0, 0);
      });
    });
  }

  function hidePanel() {
    if (!activeId || locked) return;
    const entry = panels.find((p) => p.id === activeId);
    locked = true;
    entry.node.classList.remove("shown");
    entry.node.setAttribute("aria-hidden", "true");
    els.body.classList.remove("panel-open");
    setTimeout(function () {
      entry.node.classList.remove("mounted");
      els.panels.classList.remove("open");
      activeId = null;
      locked = false;
    }, SPEED);
  }

  function onHashChange() {
    const hash = location.hash.replace(/^#/, "");
    if (!hash) {
      hidePanel();
    } else if (panels.some((p) => p.id === hash)) {
      showPanel(hash);
    }
  }

  /* ---------- rendering ---------- */
  function renderMenuAndPanels(data) {
    const projects = data.projects || [];
    allProjectsRef = projects;
    const menuItems = [];
    const panelMarkup = [];
    const panelIds = [];

    // Featured panel — promoted to a distinct hero button (not in the menu strip),
    // but still a real panel reachable via #featured.
    const featured = projects.filter((p) => p.featured);
    if (featured.length) {
      panelMarkup.push(
        panelHTML("featured", "Featured Work", "A few highlights across different domains.", featured)
      );
      panelIds.push("featured");
      els.featuredCta.innerHTML =
        '<a class="btn btn-featured pulse" href="#featured">' +
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7L12 2z"/></svg>' +
        "Featured Work</a>";
    }

    // Explore panel (text + tag filtering; cross-cuts categories)
    menuItems.push({ id: "explore", label: "Explore" });
    panelMarkup.push(buildExplorePanelHTML(projects));

    // One panel per category
    (data.categories || []).forEach(function (cat) {
      const items = projects.filter((p) => p.category === cat);
      if (!items.length) return;
      const id = slug(cat);
      menuItems.push({ id: id, label: cat });
      panelMarkup.push(
        panelHTML(id, cat, items.length + (items.length === 1 ? " project" : " projects"), items)
      );
    });

    els.panels.innerHTML = panelMarkup.join("");
    els.menu.innerHTML =
      "<ul>" +
      menuItems.map((n) => '<li><a href="#' + n.id + '">' + esc(n.label) + "</a></li>").join("") +
      "</ul>";

    // Panels list includes Featured (hero button) + all menu-strip items.
    menuItems.forEach((n) => panelIds.push(n.id));
    panels = panelIds.map((id) => ({ id: id, node: document.getElementById(id) }));

    wireExplorePanel();

    // wire close buttons + swallow inside clicks
    panels.forEach(function (p) {
      const btn = p.node.querySelector(".close");
      if (btn) btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        location.hash = "";
      });
      // clicks inside a panel shouldn't bubble to the "click outside = close" handler
      p.node.addEventListener("click", (e) => e.stopPropagation());
    });
  }

  function splitGlyphs(name) {
    // Wrap each character in a span so the hero title can spring on hover.
    return name
      .split("")
      .map(function (ch) {
        if (ch === " ") return '<span class="gap">&nbsp;</span>';
        return '<span class="glyph">' + esc(ch) + "</span>";
      })
      .join("");
  }

  function wireGlyphSpring() {
    // Trigger the spring on hover; once started it runs to completion even if
    // the pointer leaves (class removed on animationend).
    els.heroName.addEventListener("mouseover", function (e) {
      const glyph = e.target.closest(".glyph");
      if (glyph && !glyph.classList.contains("springing")) {
        glyph.classList.add("springing");
      }
    });
    els.heroName.addEventListener("animationend", function (e) {
      const glyph = e.target.closest(".glyph");
      if (glyph) glyph.classList.remove("springing");
    });
  }

  function initTrail() {
    // Lightweight vanilla-canvas cursor trail (front page only, no libraries).
    const reduce =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer =
      window.matchMedia && window.matchMedia("(pointer: fine)").matches;
    if (reduce || !finePointer) return; // skip on touch / reduced-motion

    const canvas = document.createElement("canvas");
    canvas.id = "trail";
    canvas.setAttribute("aria-hidden", "true");
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    let w = 0, h = 0, dpr = 1;
    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const STRANDS = 7, LEN = 32;
    const SPREAD = 18; // radius of the fan around the cursor (visual spacing)
    const mouse = { x: w / 2, y: h / 2 };
    const strands = [];
    for (let s = 0; s < STRANDS; s++) {
      const pts = [];
      for (let i = 0; i < LEN; i++) pts.push({ x: mouse.x, y: mouse.y });
      // Each strand targets a slightly different point around the cursor so they
      // fan out and read as separate whisps instead of one blob.
      const ang = (s / STRANDS) * Math.PI * 2;
      // Stable model: only the head carries velocity (spring toward its target,
      // gives momentum / glide after stop). The tail eases toward the point
      // ahead of it (no chained springs -> no oscillation/whipping).
      strands.push({
        pts: pts,
        vx: 0,
        vy: 0,
        ox: Math.cos(ang) * SPREAD,
        oy: Math.sin(ang) * SPREAD,
        stiffness: 0.18 - s * 0.018,
        damping: 0.82 - s * 0.015,
      });
    }

    function drawStrand(p) {
      // Smooth the polyline with quadratic curves through midpoints, and taper
      // width + fade alpha from head (thick/bright) to tail (thin/faint).
      for (let i = 1; i < p.length - 1; i++) {
        const t = i / (p.length - 1);
        const px = (p[i - 1].x + p[i].x) / 2;
        const py = (p[i - 1].y + p[i].y) / 2;
        const xc = (p[i].x + p[i + 1].x) / 2;
        const yc = (p[i].y + p[i + 1].y) / 2;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.quadraticCurveTo(p[i].x, p[i].y, xc, yc);
        ctx.lineWidth = (1 - t) * 2.6 + 0.4;
        ctx.strokeStyle = "rgba(144, 178, 255, " + ((1 - t) * 0.4 + 0.05) + ")";
        ctx.stroke();
      }
    }
    window.addEventListener(
      "pointermove",
      function (e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      },
      { passive: true }
    );

    let lastMx = mouse.x, lastMy = mouse.y, spread = 0;
    function frame() {
      requestAnimationFrame(frame);
      ctx.clearRect(0, 0, w, h);
      // Front page only — do nothing while a panel is open.
      if (els.body.classList.contains("panel-open")) return;
      // Fan spread scales with cursor speed: moving = spread out,
      // stopped = spread eases to 0 so all strands converge on the cursor.
      const speed = Math.hypot(mouse.x - lastMx, mouse.y - lastMy);
      lastMx = mouse.x;
      lastMy = mouse.y;
      spread += (Math.min(speed / 14, 1) - spread) * 0.12;
      strands.forEach(function (strand) {
        const p = strand.pts;
        // Head: spring toward this strand's fanned target (cursor + offset*spread).
        const tx = mouse.x + strand.ox * spread;
        const ty = mouse.y + strand.oy * spread;
        strand.vx = (strand.vx + (tx - p[0].x) * strand.stiffness) * strand.damping;
        strand.vy = (strand.vy + (ty - p[0].y) * strand.stiffness) * strand.damping;
        p[0].x += strand.vx;
        p[0].y += strand.vy;
        // Tail: each point eases toward the one ahead (stable, no oscillation).
        for (let i = 1; i < p.length; i++) {
          p[i].x += (p[i - 1].x - p[i].x) * 0.42;
          p[i].y += (p[i - 1].y - p[i].y) * 0.42;
        }
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        drawStrand(p);
      });
    }
    frame();
  }

  function applyBackground(profile) {
    const scene = document.getElementById("scene");
    if (!scene) return;
    // Resolve to an absolute URL against the document. A url() set via a CSS
    // custom property otherwise resolves relative to the stylesheet
    // (assets/css/), which would look for assets/css/images/...
    function absUrl(path) {
      return new URL(path, document.baseURI).href;
    }
    if (profile.background)
      scene.style.setProperty("--shot-front", 'url("' + absUrl(profile.background) + '")');
    if (profile.backgroundPanels)
      scene.style.setProperty("--shot-panels", 'url("' + absUrl(profile.backgroundPanels) + '")');
  }

  function renderProfile(profile) {
    if (!profile) return;
    if (profile.name) {
      els.heroName.innerHTML = splitGlyphs(profile.name);
      els.heroName.setAttribute("aria-label", profile.name);
      document.title = profile.name + " — Portfolio";
      wireGlyphSpring();
    }
    if (profile.tagline) els.heroRole.textContent = profile.tagline;
    applyBackground(profile);

    const links = profile.links || {};
    // Brand links live only in the social icon row below.
    const soc = SOCIAL_ORDER.filter(([k]) => links[k]).map(function ([k, label]) {
      return '<a class="social" href="' + esc(links[k]) + '" target="_blank" rel="noopener noreferrer" aria-label="' + esc(label) + '">' + (SOCIAL_ICONS[k] || "") + "</a>";
    });
    els.socials.innerHTML = soc.join("");

    // Assemble the email at runtime from split parts so it never appears as a
    // harvestable address in the static HTML/JS source.
    if (links.emailUser && links.emailDomain) {
      const addr = links.emailUser + "@" + links.emailDomain;
      els.contact.innerHTML =
        'Contact me at <a href="mailto:' + esc(addr) + '">' + esc(addr) + "</a>";
    }
  }

  function init(data) {
    renderProfile(data.profile);
    renderMenuAndPanels(data);
    initTrail();
    if (els.year) els.year.textContent = new Date().getFullYear();

    // Events
    window.addEventListener("hashchange", onHashChange);
    // click outside a panel closes it
    els.body.addEventListener("click", function () {
      if (els.body.classList.contains("panel-open")) location.hash = "";
    });
    // Esc closes
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && els.body.classList.contains("panel-open")) {
        location.hash = "";
      }
    });

    // Intro reveal, then honor any deep-link hash
    window.setTimeout(function () {
      els.body.classList.remove("booting");
      if (location.hash) onHashChange();
    }, 100);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const data = window.PORTFOLIO_DATA;
    if (!data || !Array.isArray(data.projects)) {
      console.error("PORTFOLIO_DATA not found. Is data/projects.js loaded before app.js?");
      els.panels.innerHTML = '<p class="empty-state">Could not load projects.</p>';
      els.panels.classList.add("open");
      return;
    }
    try {
      init(data);
    } catch (err) {
      console.error("Failed to render portfolio:", err);
    }
  });
})();
