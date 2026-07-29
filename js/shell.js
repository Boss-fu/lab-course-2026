/* 茲茲實驗課務系統 · 側邊欄 shell 產生器
   用法：<div id="app-shell" data-active="dashboard"></div>（放在 <body> 最前）
        內容包在 <main class="app-main"> ... </main>
        末尾： <script src="js/shell.js"></script>  */
(function () {
  const NAV = [
    { key:'dashboard', href:'index.html', ico:'🏠', label:'總覽' },
    { group:'實驗庫', items:[
      { key:'lib',        href:'library.html',    ico:'🎨', label:'創意實驗' },
      { key:'curriculum', href:'curriculum.html', ico:'📗', label:'課綱實驗' },
    ]},
    { group:'課程', items:[
      { key:'courses',  href:'courses.html', ico:'🎒', label:'課程目錄' },
      { key:'planner',  href:'#',            ico:'🛠', label:'課程規劃器', soon:true },
    ]},
    { group:'工具', items:[
      { key:'materials', href:'materials.html', ico:'🧰', label:'器材管理' },
      { key:'generator', href:'generator.html', ico:'📝', label:'講義生成器' },
      { key:'teacher',   href:'teacher.html',   ico:'✅', label:'課前準備' },
    ]},
  ];

  const mount = document.getElementById('app-shell');
  if (!mount) return;
  const active = mount.dataset.active || '';

  const link = (it) => it.soon
    ? `<a class="soon"><span class="ico">${it.ico}</span>${it.label}<span class="tag-soon">開發中</span></a>`
    : `<a href="${it.href}" class="${it.key===active?'active':''}"><span class="ico">${it.ico}</span>${it.label}</a>`;

  let html = `<aside class="app-sidebar" id="appSidebar">
    <a class="sb-brand" href="index.html" style="text-decoration:none;color:#fff">
      <img src="茲茲icon.png" alt="茲茲"><span><b>茲茲實驗課</b><small>TZU TZU LAB SYSTEM</small></span>
    </a>`;
  NAV.forEach(sec => {
    if (sec.group) {
      html += `<div class="sb-group">${sec.group}</div>` + sec.items.map(link).join('');
    } else {
      html += link(sec);
    }
  });
  html += `<div class="sb-foot">茲茲文教 · 實驗課務系統<br>持續擴充中</div></aside>`;

  // mobile topbar + scrim
  html += `<div class="app-topbar">
      <button class="burger" id="sbBurger" aria-label="選單">☰</button>
      <a class="tb-brand" href="index.html" style="text-decoration:none"><img src="茲茲icon.png" alt="茲茲">茲茲實驗課</a>
    </div>
    <div class="scrim" id="sbScrim"></div>`;

  mount.innerHTML = html;

  const sb = document.getElementById('appSidebar');
  const scrim = document.getElementById('sbScrim');
  const toggle = (open) => { sb.classList.toggle('open', open); scrim.classList.toggle('show', open); };
  document.getElementById('sbBurger')?.addEventListener('click', () => toggle(!sb.classList.contains('open')));
  scrim?.addEventListener('click', () => toggle(false));
  sb.querySelectorAll('a[href]').forEach(a => a.addEventListener('click', () => toggle(false)));
})();
