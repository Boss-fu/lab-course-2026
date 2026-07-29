/* ============================================================
   茲茲文教 · 課程目錄（課程方案 Programs）
   ------------------------------------------------------------
   一套「課程方案」= 針對某客群、某型態，由實驗庫組成的一系列堂次。
   2026 暑期國小/國中只是其中兩套；未來帶狀班、營隊都放這裡。
   欄位：
     id        代碼
     name      課程名稱
     type      型態：帶狀週課 / 短期營隊 / 主題工作坊
     audience  客群（年段／程度）
     subjectFocus 主軸：創意實驗 / 課綱實驗 / 混合
     sessions  堂數（未定為 null）
     minutesPer 每堂分鐘
     cadence   節奏（例：每週一次 / 隔週一次）
     period    期間
     status    開課中 / 已完課 / 規劃中
     detail    詳細頁（無則 null）
     accent    卡片色：gold / red / blue / green
     note      備註
   ============================================================ */

const COURSE_TYPES = ['帶狀週課', '短期營隊', '主題工作坊'];

const COURSE_PROGRAMS = [
  {
    id:'summer-2026-ele', name:'2026 暑期國小夏令營', type:'短期營隊',
    audience:'國小五、六年級（無經驗）', subjectFocus:'創意實驗',
    sessions:5, minutesPer:120, cadence:'隔週一次（週二）', period:'2026/7/6 – 8/24',
    status:'開課中', detail:'elementary.html', accent:'gold',
    note:'物理與化學創意實驗，趣味入門'
  },
  {
    id:'summer-2026-mid', name:'2026 暑期國中實驗課', type:'短期營隊',
    audience:'國中生（含升國一）', subjectFocus:'創意實驗',
    sessions:5, minutesPer:120, cadence:'暑期', period:'2026 暑期',
    status:'開課中', detail:'middle.html', accent:'red',
    note:'進階科學探索，難度概念更深'
  },

  /* ── 未來帶狀式課程（規劃中骨架，待用規劃器排課）── */
  {
    id:'band-g7-bio', name:'國七生物探究帶狀班', type:'帶狀週課',
    audience:'國七', subjectFocus:'課綱實驗',
    sessions:null, minutesPer:120, cadence:'每週一次', period:'一學期（規劃中）',
    status:'規劃中', detail:null, accent:'green',
    note:'對應國中生物課綱：顯微鏡、細胞、酵素、光合作用…'
  },
  {
    id:'band-g8-che', name:'國八理化帶狀班', type:'帶狀週課',
    audience:'國八', subjectFocus:'混合',
    sessions:null, minutesPer:120, cadence:'每週一次', period:'一學期（規劃中）',
    status:'規劃中', detail:null, accent:'red',
    note:'課綱理化實驗＋偷天換日、搖搖變色瓶等創意實驗'
  },
  {
    id:'band-g9-phy', name:'國九理化衝刺帶狀班', type:'帶狀週課',
    audience:'國九', subjectFocus:'課綱實驗',
    sessions:null, minutesPer:120, cadence:'每週一次', period:'規劃中',
    status:'規劃中', detail:null, accent:'blue',
    note:'力學、電學、光學等課綱必考實驗'
  },
  {
    id:'senior-lab', name:'高中課綱實驗專班', type:'帶狀週課',
    audience:'高中（物理／化學／生物／地科）', subjectFocus:'課綱實驗',
    sessions:null, minutesPer:120, cadence:'每週一次', period:'規劃中',
    status:'規劃中', detail:null, accent:'blue',
    note:'對應高中自然課綱探究與實作'
  },
];

const PROGRAM_STATUS_META = {
  '開課中': { cls:'st-ready' },
  '已完課': { cls:'st-draft' },
  '規劃中': { cls:'st-planned' },
};
const ACCENT_HEX = { gold:'#C8A84B', red:'#850103', blue:'#3E6FB0', green:'#2E8B57' };
