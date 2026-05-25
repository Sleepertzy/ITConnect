// shared-nav.js — Menyuntikkan sidebar + topbar secara dinamis
function buildNav(activePage, pageTitle, pageSubtitle, searchPlaceholder) {
  const pages = [
    { id:'dashboard',  label:'Dashboard',   icon:'⊞',  href:'dashboard.html' },
    { id:'projects',   label:'Cari Proyek', icon:'🔍', href:'projects.html' },
    { id:'portfolio',  label:'Portofolio',  icon:'📁', href:'portofolio.html' }, // Menyesuaikan nama file portofolio.html kamu
    { id:'collab',     label:'Kolaborasi',  icon:'🤝', href:'collab.html' },
    { id:'chat',       label:'Chat',        icon:'💬', href:'chat.html' },
  ];
  const payPages = [
    { id:'payment',    label:'Pembayaran',  icon:'💳', href:'payment.html' },
  ];

  const navItems  = pages.map(p=>`
    <a class="nav-item ${activePage===p.id?'active':''}" href="${p.href}">
      <span class="icon">${p.icon}</span>${p.label}
    </a>`).join('');
  const payItems  = payPages.map(p=>`
    <a class="nav-item ${activePage===p.id?'active':''}" href="${p.href}">
      <span class="icon">${p.icon}</span>${p.label}
    </a>`).join('');

  document.getElementById('app-root').innerHTML = `
  <div class="app-shell">
    <aside class="sidebar">
      <div class="sidebar-logo">
        <div class="logo-mark">IT</div>
        <div class="logo-text">IT<span>Connect</span></div>
      </div>
      <nav class="sidebar-nav">
        <div class="nav-section-label">Menu Utama</div>
        ${navItems}
        <div class="nav-section-label">Keuangan</div>
        ${payItems}
        <div class="nav-section-label">Akun</div>
        <a class="nav-item" href="index.html">
            <span class="icon">🚪</span>Logout
        </a>
      </nav>
      <div class="sidebar-footer">
        <div class="user-chip">
          <div class="avatar">AF</div>
          <div class="user-info">
            <div class="user-name">Afiq F.</div>
            <div class="user-sub">Teknik Informatika</div>
          </div>
        </div>
      </div>
    </aside>
    <div class="main">
      <div class="topbar">
        <div class="search-box">
          <span class="search-icon">🔍</span>
          <input type="text" placeholder="${searchPlaceholder||'Cari proyek, skill, klien...'}"/>
        </div>
        <div class="topbar-right">
          <div class="icon-btn">🔔<div class="notif-dot"></div></div>
          <a href="portofolio.html" class="profile-btn">
            <div class="avatar">AF</div>
            <span>Afiq F.</span>
          </a>
        </div>
      </div>
      <div class="page" id="page-content"></div>
    </div>
  </div>`;

  document.getElementById('page-content').innerHTML = `
    <div class="page-header">
      <div class="page-title">${pageTitle}</div>
      <div class="page-sub">${pageSubtitle||''}</div>
    </div>
    <div id="inner-content"></div>`;
}