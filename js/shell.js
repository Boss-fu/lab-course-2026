/* 茲茲實驗課務系統 · 頂欄 shell 產生器（淺色風格）
   用法：<div id="app-shell" data-active="dashboard"></div>（放在 <body> 最前）
        內容包在 <main class="app-main"> ... </main>
        末尾： <script src="js/shell.js"></script>  */
(function () {
  const NAV = [
    { key:'dashboard',  href:'index.html',      label:'總覽' },
    { key:'lib',        href:'library.html',    label:'創意實驗' },
    { key:'curriculum', href:'curriculum.html', label:'課綱實驗' },
    { key:'courses',    href:'courses.html',    label:'課程目錄' },
    { key:'materials',  href:'materials.html',  label:'器材管理' },
    { key:'generator',  href:'generator.html',  label:'講義生成器' },
    { key:'teacher',    href:'teacher.html',    label:'課前準備' },
  ];

  const mount = document.getElementById('app-shell');
  if (!mount) return;
  const active = mount.dataset.active || '';

  const link = (it) =>
    `<a href="${it.href}" class="nav-link ${it.key===active?'active':''}">${it.label}</a>`;

  const navHtml = NAV.map(link).join('');

  mount.innerHTML = `
    <header class="app-topbar">
      <a class="tb-brand" href="index.html">
        <img src="茲茲icon.png" alt="茲茲">
        <span class="tb-lock"><span class="tb-t">茲茲實驗課</span><span class="tb-s">TZU TZU LAB SYSTEM</span></span>
      </a>
      <nav class="tb-nav" id="tbNav">${navHtml}</nav>
      <button class="tb-burger" id="tbBurger" aria-label="選單">☰</button>
    </header>
    <div class="tb-drawer" id="tbDrawer">${navHtml}</div>
    <div class="scrim" id="tbScrim"></div>`;

  const drawer = document.getElementById('tbDrawer');
  const scrim  = document.getElementById('tbScrim');
  const toggle = (open) => { drawer.classList.toggle('open', open); scrim.classList.toggle('show', open); };
  document.getElementById('tbBurger')?.addEventListener('click', () => toggle(!drawer.classList.contains('open')));
  scrim?.addEventListener('click', () => toggle(false));
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggle(false)));
})();
