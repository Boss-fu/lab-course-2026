/* ============================================================
   茲茲文教 · 國高中課綱實驗專區 (Curriculum Experiments)
   ------------------------------------------------------------
   依據 十二年國教 自然科學領域課綱，整理國中／高中常見標準實驗。
   與「實驗大全（創意實驗）」分開，這裡是完整的教學骨架清單。
   欄位：
     id        代碼
     name      實驗名稱
     stage     學制：國中 / 高中
     subject   科目：生物 / 理化 / 物理 / 化學 / 地球科學
     grade     年級 / 課程
     topic     對應課綱主題與科學概念
     nature    性質：觀察 / 操作 / 探究實作 / 定量測量
     creativeId 若茲茲已有對應「創意實驗」版本，填其 id（供互相連結）
     note      備註
   ※ 此為標準參考清單（持續擴充、歡迎細修），非特定教科書版本。
   ============================================================ */

const CURRICULUM = [
  /* ── 國中 · 生物（七年級）── */
  { id:'cur-bio-micro',   name:'顯微鏡的構造與操作',       stage:'國中', subject:'生物', grade:'七年級', topic:'顯微鏡使用、對光與調焦', nature:'操作', creativeId:null, note:'' },
  { id:'cur-bio-plantcell',name:'觀察植物細胞（洋蔥表皮）',stage:'國中', subject:'生物', grade:'七年級', topic:'細胞壁、細胞膜、細胞核構造', nature:'觀察', creativeId:null, note:'' },
  { id:'cur-bio-animalcell',name:'觀察動物細胞（口腔皮膜）',stage:'國中', subject:'生物', grade:'七年級', topic:'動物細胞構造、染色', nature:'觀察', creativeId:null, note:'' },
  { id:'cur-bio-diffusion',name:'擴散與滲透作用',           stage:'國中', subject:'生物', grade:'七年級', topic:'物質進出細胞、半透膜', nature:'探究實作', creativeId:null, note:'' },
  { id:'cur-bio-nutrient', name:'食物中養分的檢驗',         stage:'國中', subject:'生物', grade:'七年級', topic:'澱粉(碘液)、還原糖(本氏液)、蛋白質、脂質', nature:'操作', creativeId:null, note:'' },
  { id:'cur-bio-enzyme',   name:'唾液澱粉酶的作用',         stage:'國中', subject:'生物', grade:'七年級', topic:'酵素、受質、溫度影響', nature:'探究實作', creativeId:null, note:'' },
  { id:'cur-bio-photo',    name:'光合作用產物檢驗',         stage:'國中', subject:'生物', grade:'七年級', topic:'葉片去綠、澱粉檢測、光合作用', nature:'探究實作', creativeId:null, note:'' },
  { id:'cur-bio-transp',   name:'植物的蒸散作用',           stage:'國中', subject:'生物', grade:'七年級', topic:'氣孔、水分散失', nature:'探究實作', creativeId:null, note:'' },
  { id:'cur-bio-seed',     name:'種子的構造與發芽條件',     stage:'國中', subject:'生物', grade:'七年級', topic:'發芽所需條件、變因控制', nature:'探究實作', creativeId:null, note:'' },

  /* ── 國中 · 理化（八年級 · 化學為主）── */
  { id:'cur-che-safety',   name:'實驗室安全與常用器材操作', stage:'國中', subject:'理化', grade:'八年級', topic:'加熱、量測器材、安全規範', nature:'操作', creativeId:'chem-lab-intro', note:'' },
  { id:'cur-che-density',  name:'質量、體積與密度的測定',   stage:'國中', subject:'理化', grade:'八年級', topic:'密度＝質量／體積、排水法', nature:'定量測量', creativeId:null, note:'' },
  { id:'cur-che-solub',    name:'溶解度與再結晶',           stage:'國中', subject:'理化', grade:'八年級', topic:'溶解度曲線、飽和溶液、結晶', nature:'探究實作', creativeId:'chem-salt-refine', note:'' },
  { id:'cur-che-sep',      name:'混合物的分離',             stage:'國中', subject:'理化', grade:'八年級', topic:'過濾、蒸發、蒸餾、層析', nature:'操作', creativeId:'chem-salt-refine', note:'' },
  { id:'cur-che-electro',  name:'水的電解',                 stage:'國中', subject:'理化', grade:'八年級', topic:'電解、氫氣與氧氣、電解質', nature:'操作', creativeId:'chem-electrolysis', note:'' },
  { id:'cur-che-mass',     name:'化學反應與質量守恆',       stage:'國中', subject:'理化', grade:'八年級', topic:'質量守恆定律、反應前後秤重', nature:'定量測量', creativeId:null, note:'' },
  { id:'cur-che-ph',       name:'酸鹼指示劑與 pH 測定',     stage:'國中', subject:'理化', grade:'八年級', topic:'廣用試紙、紫甘藍、pH 值', nature:'探究實作', creativeId:'chem-invisible-ink', note:'可連結紫甘藍隱形墨水' },
  { id:'cur-che-neutral',  name:'酸鹼中和反應',             stage:'國中', subject:'理化', grade:'八年級', topic:'中和、鹽與水、放熱', nature:'探究實作', creativeId:null, note:'' },
  { id:'cur-che-metal',    name:'金屬的活性與置換反應',     stage:'國中', subject:'理化', grade:'八年級', topic:'金屬活性大小、置換', nature:'探究實作', creativeId:'chem-coin-alchemy', note:'可連結偷天換日' },
  { id:'cur-che-redox',    name:'氧化與還原（燃燒、生鏽）', stage:'國中', subject:'理化', grade:'八年級', topic:'氧化反應、還原、鐵生鏽', nature:'探究實作', creativeId:'chem-blue-bottle', note:'可連結搖搖變色瓶' },
  { id:'cur-che-battery',  name:'化學電池（水果電池）',     stage:'國中', subject:'理化', grade:'八年級', topic:'電化學、電極、電位差', nature:'操作', creativeId:null, note:'' },

  /* ── 國中 · 理化（九年級 · 物理為主）── */
  { id:'cur-phy-hooke',    name:'虎克定律（彈簧伸長）',     stage:'國中', subject:'理化', grade:'九年級', topic:'力與形變、彈力常數', nature:'定量測量', creativeId:null, note:'' },
  { id:'cur-phy-friction', name:'摩擦力的測量',             stage:'國中', subject:'理化', grade:'九年級', topic:'靜摩擦、動摩擦、正向力', nature:'定量測量', creativeId:null, note:'' },
  { id:'cur-phy-buoy',     name:'浮力與阿基米德原理',       stage:'國中', subject:'理化', grade:'九年級', topic:'浮力＝排開液重、沉浮', nature:'探究實作', creativeId:null, note:'' },
  { id:'cur-phy-lever',    name:'槓桿與力矩平衡',           stage:'國中', subject:'理化', grade:'九年級', topic:'力矩、支點、簡單機械', nature:'定量測量', creativeId:null, note:'' },
  { id:'cur-phy-pressure', name:'液體壓力與大氣壓',         stage:'國中', subject:'理化', grade:'九年級', topic:'壓力、帕斯卡、大氣壓力', nature:'探究實作', creativeId:null, note:'' },
  { id:'cur-phy-heat',     name:'熱量、比熱與熱平衡',       stage:'國中', subject:'理化', grade:'九年級', topic:'熱量、比熱、混合法', nature:'定量測量', creativeId:null, note:'' },
  { id:'cur-phy-mirror',   name:'光的反射與面鏡成像',       stage:'國中', subject:'理化', grade:'九年級', topic:'反射定律、平面鏡、凹凸面鏡', nature:'操作', creativeId:null, note:'' },
  { id:'cur-phy-lens',     name:'光的折射與透鏡成像',       stage:'國中', subject:'理化', grade:'九年級', topic:'折射、凸透鏡成像、焦距', nature:'探究實作', creativeId:null, note:'' },
  { id:'cur-phy-sound',    name:'聲音的傳播與特性',         stage:'國中', subject:'理化', grade:'九年級', topic:'振動、音調、響度、共鳴', nature:'探究實作', creativeId:null, note:'' },
  { id:'cur-phy-circuit',  name:'電路：串聯與並聯',         stage:'國中', subject:'理化', grade:'九年級', topic:'電流、電壓、串並聯特性', nature:'操作', creativeId:null, note:'' },
  { id:'cur-phy-ohm',      name:'歐姆定律',                 stage:'國中', subject:'理化', grade:'九年級', topic:'V＝IR、電阻測量', nature:'定量測量', creativeId:null, note:'' },
  { id:'cur-phy-joule',    name:'電功率與電流熱效應',       stage:'國中', subject:'理化', grade:'九年級', topic:'電功率、焦耳熱', nature:'定量測量', creativeId:'phy-electric-bread', note:'可連結電流麵包' },
  { id:'cur-phy-mag',      name:'電流的磁效應與電磁鐵',     stage:'國中', subject:'理化', grade:'九年級', topic:'安培右手定則、電磁鐵', nature:'操作', creativeId:null, note:'' },
  { id:'cur-phy-induct',   name:'電磁感應與發電',           stage:'國中', subject:'理化', grade:'九年級', topic:'法拉第定律、感應電流', nature:'操作', creativeId:'phy-franklin-motor', note:'' },

  /* ── 國中 · 地球科學（九年級）── */
  { id:'cur-esc-rock',     name:'常見岩石與礦物的觀察辨識', stage:'國中', subject:'地球科學', grade:'九年級', topic:'火成岩、沉積岩、變質岩、礦物性質', nature:'觀察', creativeId:null, note:'' },
  { id:'cur-esc-strata',   name:'地層、化石與地質構造',     stage:'國中', subject:'地球科學', grade:'九年級', topic:'地層層序、化石、褶皺斷層', nature:'觀察', creativeId:null, note:'' },
  { id:'cur-esc-weather',  name:'天氣觀測與氣象要素',       stage:'國中', subject:'地球科學', grade:'九年級', topic:'溫度、溼度、氣壓、風向', nature:'觀察', creativeId:null, note:'' },
  { id:'cur-esc-moon',     name:'月相與星象觀測',           stage:'國中', subject:'地球科學', grade:'九年級', topic:'月相變化、星座、天球', nature:'觀察', creativeId:null, note:'' },

  /* ── 高中 · 物理 ── */
  { id:'cur-hphy-accel',   name:'等加速度運動與自由落體',   stage:'高中', subject:'物理', grade:'物理', topic:'v-t 圖、重力加速度 g', nature:'定量測量', creativeId:null, note:'' },
  { id:'cur-hphy-newton',  name:'牛頓運動定律驗證',         stage:'高中', subject:'物理', grade:'物理', topic:'F＝ma、力與加速度', nature:'探究實作', creativeId:null, note:'' },
  { id:'cur-hphy-energy',  name:'力學能守恆',               stage:'高中', subject:'物理', grade:'物理', topic:'動能、位能、能量守恆', nature:'定量測量', creativeId:null, note:'' },
  { id:'cur-hphy-momentum',name:'動量守恆與碰撞',           stage:'高中', subject:'物理', grade:'物理', topic:'彈性/非彈性碰撞、動量守恆', nature:'探究實作', creativeId:null, note:'' },
  { id:'cur-hphy-shm',     name:'簡諧運動（單擺／彈簧）',   stage:'高中', subject:'物理', grade:'物理', topic:'週期、頻率、回復力', nature:'定量測量', creativeId:'phy-clock', note:'可連結自製時鐘' },
  { id:'cur-hphy-wave',    name:'波動、駐波與共振',         stage:'高中', subject:'物理', grade:'物理', topic:'弦波、空氣柱、波速', nature:'探究實作', creativeId:null, note:'' },
  { id:'cur-hphy-optics',  name:'幾何光學：透鏡與面鏡成像', stage:'高中', subject:'物理', grade:'物理', topic:'成像公式、放大率', nature:'定量測量', creativeId:null, note:'' },
  { id:'cur-hphy-resist',  name:'電阻率與歐姆定律',         stage:'高中', subject:'物理', grade:'物理', topic:'電阻率、串並聯、內電阻', nature:'定量測量', creativeId:null, note:'' },
  { id:'cur-hphy-field',   name:'電場、電位與電容',         stage:'高中', subject:'物理', grade:'物理', topic:'電場線、等電位、電容', nature:'探究實作', creativeId:null, note:'' },
  { id:'cur-hphy-emag',    name:'電流磁效應與電磁感應',     stage:'高中', subject:'物理', grade:'物理', topic:'磁場、勞侖茲力、感應電動勢', nature:'探究實作', creativeId:null, note:'' },

  /* ── 高中 · 化學 ── */
  { id:'cur-hche-mole',    name:'化學計量與莫耳關係',       stage:'高中', subject:'化學', grade:'化學', topic:'定比定律、莫耳、化學式量', nature:'定量測量', creativeId:null, note:'' },
  { id:'cur-hche-gas',     name:'氣體定律驗證',             stage:'高中', subject:'化學', grade:'化學', topic:'波以耳、查理定律、理想氣體', nature:'定量測量', creativeId:null, note:'' },
  { id:'cur-hche-conc',    name:'溶液的配製與濃度',         stage:'高中', subject:'化學', grade:'化學', topic:'莫耳濃度、稀釋、容量瓶', nature:'操作', creativeId:null, note:'' },
  { id:'cur-hche-rate',    name:'反應速率與影響因素',       stage:'高中', subject:'化學', grade:'化學', topic:'濃度、溫度、催化劑', nature:'探究實作', creativeId:'chem-elephant-toothpaste', note:'可連結大象牙膏(催化)' },
  { id:'cur-hche-equil',   name:'化學平衡與勒沙特列原理',   stage:'高中', subject:'化學', grade:'化學', topic:'動態平衡、平衡移動', nature:'探究實作', creativeId:'chem-blue-bottle', note:'' },
  { id:'cur-hche-acidtit', name:'酸鹼滴定',                 stage:'高中', subject:'化學', grade:'化學', topic:'中和滴定、當量點、指示劑', nature:'定量測量', creativeId:'chem-titration', note:'可連結酸鹼滴定' },
  { id:'cur-hche-redoxtit',name:'氧化還原滴定',             stage:'高中', subject:'化學', grade:'化學', topic:'過錳酸鉀/碘量法、電子轉移', nature:'定量測量', creativeId:null, note:'' },
  { id:'cur-hche-cell',    name:'電化學電池與電解',         stage:'高中', subject:'化學', grade:'化學', topic:'伏打電池、電解、電位', nature:'探究實作', creativeId:'cur-che-battery', note:'' },
  { id:'cur-hche-precip',  name:'沉澱反應與定性分析',       stage:'高中', subject:'化學', grade:'化學', topic:'溶解度規則、離子鑑定', nature:'探究實作', creativeId:'chem-precipitation', note:'可連結沉澱反應' },
  { id:'cur-hche-organic', name:'有機化合物性質與官能基檢驗',stage:'高中', subject:'化學', grade:'化學', topic:'官能基、飽和/不飽和、鑑定', nature:'探究實作', creativeId:null, note:'' },
  { id:'cur-hche-cryst',   name:'結晶與再結晶純化',         stage:'高中', subject:'化學', grade:'化學', topic:'純化、結晶、熔點測定', nature:'操作', creativeId:'chem-golden-rain', note:'可連結黃金雨' },
  { id:'cur-hche-flame',   name:'焰色反應與原子光譜',       stage:'高中', subject:'化學', grade:'化學', topic:'焰色、電子躍遷、光譜', nature:'觀察', creativeId:'chem-flame-color', note:'可連結焰色反應' },

  /* ── 高中 · 生物 ── */
  { id:'cur-hbio-cell',    name:'顯微鏡觀察與細胞構造',     stage:'高中', subject:'生物', grade:'生物', topic:'細胞胞器、比例尺', nature:'觀察', creativeId:null, note:'' },
  { id:'cur-hbio-mitosis', name:'細胞分裂（洋蔥根尖有絲分裂）',stage:'高中', subject:'生物', grade:'生物', topic:'有絲分裂各期、染色體', nature:'觀察', creativeId:null, note:'' },
  { id:'cur-hbio-osmo',    name:'擴散與滲透（動植物細胞）', stage:'高中', subject:'生物', grade:'生物', topic:'滲透壓、質壁分離', nature:'探究實作', creativeId:null, note:'' },
  { id:'cur-hbio-enzyme',  name:'酵素活性探究',             stage:'高中', subject:'生物', grade:'生物', topic:'溫度、pH、受質濃度對酵素', nature:'探究實作', creativeId:null, note:'' },
  { id:'cur-hbio-photo',   name:'光合作用與色素層析',       stage:'高中', subject:'生物', grade:'生物', topic:'光反應、葉綠素色素分離', nature:'探究實作', creativeId:null, note:'' },
  { id:'cur-hbio-resp',    name:'呼吸作用與發酵',           stage:'高中', subject:'生物', grade:'生物', topic:'細胞呼吸、酵母菌發酵產氣', nature:'探究實作', creativeId:null, note:'' },
  { id:'cur-hbio-dna',     name:'DNA 的粗萃取',             stage:'高中', subject:'生物', grade:'生物', topic:'細胞裂解、DNA 沉澱', nature:'操作', creativeId:'bio-dna', note:'可連結 DNA 粗萃取' },
  { id:'cur-hbio-genetic', name:'遺傳與機率統計',           stage:'高中', subject:'生物', grade:'生物', topic:'孟德爾遺傳、性狀統計', nature:'探究實作', creativeId:null, note:'' },
  { id:'cur-hbio-eco',     name:'生物多樣性與族群調查',     stage:'高中', subject:'生物', grade:'生物', topic:'取樣、歧異度、生態調查', nature:'探究實作', creativeId:null, note:'' },

  /* ── 高中 · 地球科學 ── */
  { id:'cur-hesc-rock',    name:'岩石與礦物鑑定',           stage:'高中', subject:'地球科學', grade:'地球科學', topic:'礦物硬度、岩石分類', nature:'觀察', creativeId:null, note:'' },
  { id:'cur-hesc-geomap',  name:'地質圖與地形判讀',         stage:'高中', subject:'地球科學', grade:'地球科學', topic:'地質圖、等高線、地層', nature:'探究實作', creativeId:null, note:'' },
  { id:'cur-hesc-weather', name:'天氣圖判讀與氣象觀測',     stage:'高中', subject:'地球科學', grade:'地球科學', topic:'鋒面、高低壓、氣象要素', nature:'探究實作', creativeId:null, note:'' },
  { id:'cur-hesc-astro',   name:'天文觀測（星圖／望遠鏡）', stage:'高中', subject:'地球科學', grade:'地球科學', topic:'星圖、天球座標、望遠鏡', nature:'觀察', creativeId:null, note:'' },
  { id:'cur-hesc-ocean',   name:'海水鹽度與密度',           stage:'高中', subject:'地球科學', grade:'地球科學', topic:'鹽度、密度分層、海水性質', nature:'定量測量', creativeId:null, note:'' },
];

/* 科目顏色 */
const SUBJECT_COLOR = {
  '生物':     { bg:'#f1ede6', fg:'#6f6353' },
  '理化':     { bg:'#f1ede6', fg:'#6f6353' },
  '物理':     { bg:'#f1ede6', fg:'#6f6353' },
  '化學':     { bg:'#f1ede6', fg:'#6f6353' },
  '地球科學': { bg:'#f1ede6', fg:'#6f6353' },
};
