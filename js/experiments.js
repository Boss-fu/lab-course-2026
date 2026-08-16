/* ============================================================
   茲茲文教 · 實驗大全 (Experiment Library)
   ------------------------------------------------------------
   這是所有「原子實驗」的主目錄，取代原本的 Excel「實驗課清單」。
   課程（堂次）會從這裡挑選 1–3 個實驗組成一堂 1.5–2 小時的課。
   欄位說明：
     id        穩定代碼（勿隨意更動，課程會以此參照）
     no        大全編號（對應參考講義 實驗0–26；無則 null）
     name      實驗名稱
     category  分類：物理 / 化學 / 生物 / 跨領域
     topic     科學觀念（一句話）
     minutes   建議時間（分鐘）
     grades    適用年段：國小 / 國七 / 國八 / 銜接
     difficulty 難易度：易 / 中 / 中高 / 高
     risk      風險等級 1–3（1 低、2 中、3 高）
     status    ready 已完成講義 / draft 草稿(講義在雲端待搬入) / planned 規劃中
     handout   已上線講義路徑（無則 null）
     video     參考影片連結
     takeHome  可帶回成品（無則 null）
     note      備註
   狀態為 seed 種子資料，數值可再細修。
   ============================================================ */

const EXPERIMENTS = [
  /* ── 物理 ── */
  { id:'phy-static-cup', no:13, name:'閃電魔法杯（萊頓瓶）', category:'物理', topic:'靜電：摩擦起電、電荷儲存與放電', minutes:30, grades:['國小','銜接'], difficulty:'易', risk:2, status:'ready', handout:'handouts/茲茲銜國小實驗1-閃電魔法杯：神奇的靜電現象.pdf', video:['https://youtube.com/shorts/_AxV3W_kH7s'], takeHome:'萊頓瓶', note:'' },
  { id:'phy-franklin-motor', no:14, name:'富蘭克林馬達', category:'物理', topic:'靜電力驅動旋轉（不插電馬達）', minutes:50, grades:['國小','銜接'], difficulty:'中', risk:2, status:'ready', handout:'handouts/茲茲銜國小實驗1-閃電魔法杯：神奇的靜電現象.pdf', video:['https://youtu.be/On08u4M1490'], takeHome:'富蘭克林馬達', note:'受濕度影響，備靜電棒' },
  { id:'phy-foam-cutter', no:null, name:'保麗龍寶劍（電熱切割器）', category:'物理', topic:'電流熱效應：焦耳熱切割保麗龍', minutes:40, grades:['國小'], difficulty:'中', risk:3, status:'ready', handout:'handouts/茲茲銜國小實驗3_電流與熱能的交響曲：電流麵包與保麗龍寶劍.pdf', video:[], takeHome:'保麗龍寶劍', note:'發熱絲高溫，嚴禁觸碰' },
  { id:'phy-electric-bread', no:26, name:'電流麵包', category:'物理', topic:'電流熱效應：電阻發熱烤熟麵團', minutes:60, grades:['國小'], difficulty:'中', risk:3, status:'ready', handout:'handouts/茲茲銜國小實驗3_電流與熱能的交響曲：電流麵包與保麗龍寶劍.pdf', video:['https://youtu.be/PGbaGsmRqPM'], takeHome:null, note:'可食用' },
  { id:'phy-cloud', no:8, name:'人造雲', category:'物理', topic:'絕熱膨脹使水氣凝結成雲', minutes:40, grades:['國小','國七'], difficulty:'易', risk:1, status:'ready', handout:'handouts/茲茲銜國小實驗4_風的掌控者：人造雲與轉轉飛天杯.pdf', video:['https://youtu.be/T67TosEDg2c'], takeHome:null, note:'' },
  { id:'phy-bernoulli', no:null, name:'白努利實驗', category:'物理', topic:'流速與氣壓：白努利原理', minutes:30, grades:['國小'], difficulty:'易', risk:1, status:'ready', handout:'handouts/茲茲銜國小實驗4_風的掌控者：人造雲與轉轉飛天杯.pdf', video:['https://youtube.com/shorts/tp9iYf41pGg'], takeHome:null, note:'' },
  { id:'phy-flying-cup', no:18, name:'轉轉飛天杯', category:'物理', topic:'馬格努斯效應', minutes:30, grades:['國小','國七'], difficulty:'易', risk:1, status:'ready', handout:'handouts/茲茲銜國小實驗4_風的掌控者：人造雲與轉轉飛天杯.pdf', video:['https://youtube.com/shorts/CmOKpfJUwU8'], takeHome:'飛天杯', note:'' },
  { id:'phy-clock', no:15, name:'自製時鐘', category:'物理', topic:'單擺等時性、古典力學', minutes:90, grades:['國中'], difficulty:'中', risk:1, status:'planned', handout:null, video:[], takeHome:'時鐘', note:'' },
  { id:'phy-air-cannon', no:null, name:'迷你空氣砲', category:'物理', topic:'渦環與氣壓', minutes:30, grades:['國小'], difficulty:'易', risk:1, status:'planned', handout:null, video:[], takeHome:'空氣砲', note:'' },

  /* ── 化學 ── */
  { id:'chem-lab-intro', no:0, name:'進入實驗室', category:'化學', topic:'實驗室安全、器材認識與基本操作', minutes:60, grades:['國七','國小'], difficulty:'易', risk:1, status:'planned', handout:null, video:[], takeHome:null, note:'開學第一堂' },
  { id:'chem-salt-refine', no:1, name:'食鹽精製', category:'化學', topic:'溶解、過濾、蒸發、結晶（分離純化）', minutes:60, grades:['國中'], difficulty:'易', risk:1, status:'planned', handout:null, video:[], takeHome:null, note:'' },
  { id:'chem-oxygen', no:2, name:'氧氣製備', category:'化學', topic:'雙氧水催化分解製氧、氣體收集', minutes:60, grades:['國中'], difficulty:'中', risk:2, status:'planned', handout:null, video:[], takeHome:null, note:'' },
  { id:'chem-alcohol-gun', no:3, name:'酒精槍', category:'化學', topic:'揮發、爆燃與能量釋放', minutes:40, grades:['國中'], difficulty:'中', risk:3, status:'planned', handout:null, video:[], takeHome:null, note:'明火，須嚴格監督' },
  { id:'chem-coolant', no:4, name:'自製冷劑', category:'化學', topic:'溶解吸熱反應', minutes:40, grades:['國中'], difficulty:'易', risk:1, status:'planned', handout:null, video:[], takeHome:null, note:'' },
  { id:'chem-hot-ice', no:5, name:'點水成冰（熱冰）', category:'化學', topic:'醋酸鈉過飽和溶液結晶放熱', minutes:110, grades:['國中'], difficulty:'中', risk:1, status:'ready', handout:'handouts/茲茲銜國中實驗3-點水成冰：急凍世界.html', video:[], takeHome:'熱冰樣品', note:'' },
  { id:'chem-dry-distill', no:6, name:'有機物乾餾', category:'化學', topic:'隔絕空氣加熱的熱分解', minutes:60, grades:['國八'], difficulty:'中高', risk:3, status:'planned', handout:null, video:[], takeHome:null, note:'' },
  { id:'chem-flame-color', no:7, name:'焰色反應', category:'化學', topic:'金屬焰色、電子躍遷與光譜', minutes:40, grades:['國八'], difficulty:'中', risk:2, status:'planned', handout:null, video:[], takeHome:null, note:'' },
  { id:'chem-blue-bottle', no:8, name:'搖搖變色瓶（藍瓶／紅綠燈）', category:'化學', topic:'氧氣與葡萄糖驅動的可逆氧化還原變色', minutes:40, grades:['國八'], difficulty:'中', risk:1, status:'draft', handout:null, video:[], takeHome:null, note:'國八暑期2 講義已寫（雲端）' },
  { id:'chem-naked-egg', no:9, name:'天降神蛋', category:'化學', topic:'醋酸溶解蛋殼碳酸鈣、滲透作用', minutes:40, grades:['國小'], difficulty:'易', risk:1, status:'planned', handout:null, video:[], takeHome:'彈力蛋', note:'' },
  { id:'chem-coin-alchemy', no:10, name:'偷天換日（真假金銀幣）', category:'化學', topic:'鋅鍍層與銅鋅合金：物理或化學變化？', minutes:60, grades:['國八'], difficulty:'中', risk:2, status:'draft', handout:null, video:[], takeHome:'金銀幣', note:'國八暑期1 講義已寫（雲端）' },
  { id:'chem-black-snake', no:12, name:'黑蛇招喚術', category:'化學', topic:'糖類熱分解碳化膨脹', minutes:40, grades:['國小','國七'], difficulty:'中', risk:2, status:'ready', handout:'handouts/茲茲銜國小實驗2_看不見的爆發力-黑蛇招喚術與酸鹼火箭.pdf', video:['https://youtu.be/dXpC9AuekfE'], takeHome:null, note:'需點火' },
  { id:'chem-rocket', no:null, name:'酸鹼火箭發射器', category:'化學', topic:'小蘇打＋酸產生 CO₂ 壓力與反作用力', minutes:50, grades:['國小'], difficulty:'中', risk:2, status:'ready', handout:'handouts/茲茲銜國小實驗2_看不見的爆發力-黑蛇招喚術與酸鹼火箭.pdf', video:['https://www.youtube.com/watch?v=bl_kIX_ZkfM'], takeHome:null, note:'液體噴濺，戴護目鏡' },
  { id:'chem-invisible-ink', no:19, name:'無字天書（火焰解碼術）', category:'化學', topic:'隱形墨水四法：熱碳化／氧化還原／酸鹼／助燃', minutes:100, grades:['國七','國中'], difficulty:'中高', risk:3, status:'ready', handout:'handouts/茲茲銜國中實驗2-特務密碼：火焰解碼術.html', video:[], takeHome:'密碼卡', note:'含硝酸鉀助燃' },
  { id:'chem-elephant-toothpaste', no:20, name:'大象牙膏', category:'化學', topic:'雙氧水催化快速分解放熱產泡', minutes:40, grades:['國中'], difficulty:'中', risk:2, status:'planned', handout:null, video:[], takeHome:null, note:'' },
  { id:'chem-slime', no:21, name:'史萊姆（交聯作用）', category:'化學', topic:'PVA 與硼砂交聯形成高分子', minutes:40, grades:['銜接'], difficulty:'易', risk:1, status:'planned', handout:null, video:[], takeHome:'史萊姆', note:'' },
  { id:'chem-magnetic-slime', no:null, name:'磁力史萊姆', category:'化學', topic:'高分子交聯＋鐵磁性複合材料', minutes:100, grades:['銜接','國中'], difficulty:'易', risk:1, status:'ready', handout:'handouts/茲茲銜接實驗1-磁力史萊姆V3.pdf', video:[], takeHome:'磁力史萊姆', note:'' },
  { id:'chem-weather-bottle', no:21, name:'天氣瓶', category:'化學', topic:'樟腦結晶與溫度、溶解度', minutes:40, grades:['國中'], difficulty:'易', risk:1, status:'planned', handout:null, video:[], takeHome:'天氣瓶', note:'' },
  { id:'chem-silica-garden', no:22, name:'神秘花園（化學花園）', category:'化學', topic:'金屬矽酸鹽半透膜結晶生長', minutes:60, grades:['國中'], difficulty:'中', risk:2, status:'planned', handout:null, video:[], takeHome:null, note:'' },
  { id:'chem-precipitation', no:23, name:'沉澱反應', category:'化學', topic:'離子交換與溶解度規則', minutes:60, grades:['國八'], difficulty:'中', risk:2, status:'planned', handout:null, video:[], takeHome:null, note:'' },
  { id:'chem-titration', no:23, name:'酸鹼濃度滴定', category:'化學', topic:'中和滴定與指示劑變色', minutes:60, grades:['國八'], difficulty:'中', risk:2, status:'planned', handout:null, video:[], takeHome:null, note:'' },
  { id:'chem-electrolysis', no:25, name:'水的電解', category:'化學', topic:'電化學：電解水產生氫氣與氧氣', minutes:60, grades:['國八'], difficulty:'中', risk:2, status:'planned', handout:null, video:[], takeHome:null, note:'' },
  { id:'chem-golden-rain', no:null, name:'黃金雨', category:'化學', topic:'碘化鉛沉澱與重結晶', minutes:40, grades:['國八'], difficulty:'中', risk:2, status:'planned', handout:null, video:[], takeHome:null, note:'講義草稿在雲端' },
  { id:'chem-salmon-roe', no:null, name:'合成水怪蛋（人造鮭魚卵）', category:'化學', topic:'海藻酸鈉與鈣離子交聯成膜', minutes:100, grades:['國小'], difficulty:'中', risk:1, status:'ready', handout:'handouts/茲茲銜國小實驗5_科學小廚房：深海熔岩燈與爆漿水怪蛋.pdf', video:['https://youtube.com/shorts/Wh6bWpEmWJY'], takeHome:'分子晶球', note:'可食用（分開）' },
  { id:'chem-lava-lamp', no:null, name:'深海熔岩燈', category:'跨領域', topic:'油水密度差與發泡錠產氣', minutes:40, grades:['國小'], difficulty:'易', risk:1, status:'ready', handout:'handouts/茲茲銜國小實驗5_科學小廚房：深海熔岩燈與爆漿水怪蛋.pdf', video:[], takeHome:'熔岩燈', note:'' },
  { id:'chem-honeycomb', no:null, name:'椪糖', category:'化學', topic:'小蘇打受熱產氣使糖膨脹（可食用）', minutes:40, grades:['國小'], difficulty:'易', risk:2, status:'planned', handout:null, video:[], takeHome:'椪糖', note:'加熱糖漿高溫' },
  { id:'chem-luminol', no:null, name:'血跡的檢驗（魯米諾）', category:'化學', topic:'魯米諾化學發光、鑑識科學', minutes:90, grades:['銜接','國中'], difficulty:'中高', risk:2, status:'ready', handout:'handouts/茲茲銜國中實驗4-茲茲福爾摩斯：血跡的檢驗.pdf', video:[], takeHome:null, note:'需暗室' },

  /* ── 生物 ── */
  { id:'bio-pig-heart', no:null, name:'豬心解剖', category:'生物', topic:'心臟構造與血液循環', minutes:100, grades:['國七'], difficulty:'中', risk:2, status:'planned', handout:null, video:[], takeHome:null, note:'國七生物初階首選' },
  { id:'bio-dna', no:null, name:'DNA 粗萃取', category:'生物', topic:'細胞裂解、鹽析與乙醇沉澱 DNA', minutes:110, grades:['銜接','國中'], difficulty:'中', risk:1, status:'ready', handout:'handouts/茲茲銜國中實驗5-粗類拔萃：DNA粗萃取.pdf', video:[], takeHome:'DNA 樣品', note:'' },
];

/* 分類顏色（供頁面使用） */
const CATEGORY_COLOR = {
  '物理': { bg:'#f1ede6', fg:'#6f6353' },
  '化學': { bg:'#f1ede6', fg:'#6f6353' },
  '生物': { bg:'#f1ede6', fg:'#6f6353' },
  '跨領域': { bg:'#f1ede6', fg:'#6f6353' },
};
const STATUS_META = {
  ready:   { label:'講義完成', cls:'st-ready' },
  draft:   { label:'講義草稿', cls:'st-draft' },
  planned: { label:'規劃中',   cls:'st-planned' },
};
