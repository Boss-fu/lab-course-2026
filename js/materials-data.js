// 實驗總表 — 所有實驗（含未來規劃）
const ALL_EXPERIMENTS = [
  { id: 'C01', title: '看不見的爆發力：黑蛇招喚術與酸鹼火箭', cat: '化學', concept: '糖熱分解碳化、小蘇打加熱/加酸產二氧化碳', format: '分組實作', duration: 100 },
  { id: 'C02', title: '星際科學實驗室：深海熔岩燈與爆漿水怪蛋', cat: '化學', concept: '油水不互溶密度差異、海藻酸鈉交聯成膜', format: '個人實作', duration: 120 },
  { id: 'P01', title: '神奇的靜電：閃電魔法杯與不插電馬達', cat: '物理', concept: '摩擦起電、感應起電、庫倫力驅動', format: '個人實作', duration: 120 },
  { id: 'P02', title: '電流與熱能的交響曲：保麗龍寶劍與電流麵包', cat: '物理', concept: '電流熱效應、電阻與能量轉換', format: '雙軌交叉進行', duration: 120 },
  { id: 'P03', title: '風的掌控者：人造雲與轉轉飛天杯', cat: '物理', concept: '白努力定律、瑪格努斯效應', format: '個人實作', duration: 100 },
  { id: null, title: '特務密碼：火焰解碼術', cat: '化學', concept: '硝酸鉀熱分解、助燃性應用', format: '個人實作', duration: 110 },
  { id: null, title: '冰雪奇緣：魔法天氣瓶', cat: '化學', concept: '樟腦結晶、溫度與溶解度', format: '個人實作', duration: 120 },
  { id: null, title: '點水成冰：急凍世界', cat: '化學', concept: '醋酸鈉過飽和溶液、結晶熱釋放', format: '個人實作', duration: 110 },
  { id: null, title: '魔法煉金術：三色變色杯', cat: '化學', concept: '氧化還原反應、酸鹼指示劑變化', format: '分組點滴板操作', duration: 90 },
  { id: null, title: '黑蛇招喚術與燃術軌跡', cat: '化學', concept: '蔗糖熱分解碳化、小蘇打受熱產氣', format: '分組實作', duration: 100 },
  { id: null, title: '大象的泡泡浴', cat: '化學', concept: '催化劑與反應速率、放熱反應', format: '分組實作', duration: 90 },
  { id: null, title: '水分子破壞者', cat: '化學', concept: '電化學、正負極氣體製備', format: '分組實作', duration: 105 },
  { id: null, title: '煉金術士的點金術', cat: '化學', concept: '氧化還原與置換、結晶型態觀察', format: '分組實作', duration: 120 },
  { id: null, title: '魔幻紅綠燈變色瓶', cat: '化學', concept: '葡萄糖氧化還原、亞甲基藍/靛胭脂', format: '個人實作', duration: 90 },
  { id: null, title: '夜光魔法與終極焰色', cat: '化學', concept: '原子光譜電子躍遷、化學發光冷光現象', format: '分組實作', duration: 100 },
  { id: '中1', title: '黑色磁力怪獸：磁力史萊姆', cat: '化學', concept: '高分子交聯作用、磁性物質感應', format: '個人實作', duration: 100 },
  { id: null, title: '尋找解藥：煉金術士矩陣', cat: '化學', concept: '離子沉澱反應、溶解度規則表格', format: '2人一組/點滴板', duration: 120 },
  { id: null, title: '時間規律者：自製時鐘', cat: '物理', concept: '古典力學、單擺等時性探究', format: '分組實作', duration: 90 },
  { id: null, title: '手動小吊車：帕斯卡契約', cat: '物理', concept: '簡單機械、槓桿原理與輪軸', format: '個人結構組裝', duration: 100 },
  { id: null, title: '天際探險：人造火箭', cat: '化學', concept: '氣體產氣壓、反作用力', format: '分組實作', duration: 90 },
];

