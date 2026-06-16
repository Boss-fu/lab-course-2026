const COURSE_MIDDLE = {
  name: "茲茲國中部暑期實驗課",
  year: 2026,
  grade: "小六升國七、國七生國八",
  students: "約 20 人",
  time: "每次 1.5–2 小時",
  period: "2026 年暑期",
  teacher: "福大老師",
  sessions: [
    {
      id: 1,
      date: null,
      dateDisplay: "待定",
      title: "黑色磁力怪獸：磁力史萊姆",
      category: "化學",
      difficulty: "易",
      risk: "低",
      riskLevel: 1,
      takeHome: "磁力史萊姆",
      status: "ready",
      handout: "handouts/茲茲銜接實驗1-磁力史萊姆V3.pdf",
      experiments: ["史萊姆製作", "磁力史萊姆測試"],
      objectives: [
        "理解 PVA（聚乙烯醇）與硼砂交聯反應形成非牛頓流體",
        "觀察磁性物質在磁場中的受力現象",
        "體驗複合材料的概念：將磁性加入高分子材料"
      ],
      timeline: [
        { time: "10:00–10:15", activity: "原理講解：什麼是高分子？交聯作用是什麼？", warning: false, note: "" },
        { time: "10:15–10:45", activity: "Part A：製作基本史萊姆（白膠 + 氧化鐵粉 + 硼砂溶液）", warning: true, note: "硼砂有刺激性，全程戴乳膠手套；氧化鐵粉易染色，桌面鋪報紙" },
        { time: "10:45–11:20", activity: "Part B：磁力測試──用磁鐵控制、拉伸史萊姆，記錄感應距離", warning: false, note: "磁鐵遠離手機、電腦" },
        { time: "11:20–11:45", activity: "結果分享與動動腦：交聯結構、磁力應用討論", warning: false, note: "" },
        { time: "11:45–12:00", activity: "清潔整理，史萊姆裝袋帶回", warning: false, note: "史萊姆不可沖入排水管" }
      ],
      materials: [
        { name: "白膠（PVA膠）", qty: "50 mL/人", unit: "瓶", note: "一般白膠即可", prepBy: "福大老師" },
        { name: "硼砂溶液（4%）", qty: "50 mL/人", unit: "份", note: "課前配好：20g硼砂 + 500mL水", prepBy: "福大老師" },
        { name: "氧化鐵粉（四氧化三鐵）", qty: "2 湯匙/人", unit: "包", note: "可網購，勿使用生鏽粉", prepBy: "福大老師" },
        { name: "強力釹磁鐵", qty: 15, unit: "顆", note: "直徑 2–3cm 即可", prepBy: "福大老師" },
        { name: "量杯 100mL", qty: 15, unit: "個", note: "", prepBy: "福大老師" },
        { name: "攪拌棒", qty: 15, unit: "支", note: "木棒或玻璃棒均可", prepBy: "福大老師" },
        { name: "乳膠手套", qty: 1, unit: "盒", note: "每人1副", prepBy: "福大老師" },
        { name: "夾鏈袋", qty: 15, unit: "個", note: "裝成品帶回", prepBy: "福大老師" },
        { name: "報紙", qty: 15, unit: "張", note: "鋪桌面防染色", prepBy: "周老師" },
        { name: "抹布", qty: 10, unit: "條", note: "清潔用", prepBy: "周老師" }
      ],
      assistantNotes: [
        "硼砂溶液課前一天配好靜置，讓泡泡消散",
        "氧化鐵粉分裝成小杯，每人2湯匙",
        "桌面預先鋪報紙",
        "磁鐵遠離教室內的電子設備",
        "提醒帶回的史萊姆不可沖水管，密封存放"
      ]
    },
    {
      id: 2,
      date: null,
      dateDisplay: "待定",
      title: "特務密碼：火焰解碼術",
      category: "化學",
      difficulty: "中",
      risk: "中高",
      riskLevel: 3,
      takeHome: "無字天書作品卡（硝酸鉀字跡紙）",
      status: "ready",
      handout: "handouts/茲茲銜國中實驗2-特務密碼：火焰解碼術.html",
      experiments: [
        "檸檬酸加熱顯字法",
        "碘酒 + 維生素C 氧化還原法",
        "小蘇打 + 紫甘藍汁酸鹼法",
        "硝酸鉀火焰顯字法（終極大招）"
      ],
      objectives: [
        "理解四種不同原理的隱形墨水：熱碳化、氧化還原、酸鹼指示、助燃氧化",
        "操作碘與維生素C之間的氧化還原反應，並觀察可逆消色效果",
        "利用紫甘藍汁作為天然酸鹼指示劑，辨識小蘇打的鹼性特性",
        "了解硝酸鉀作為氧化劑的助燃原理，建立正確的化學品安全觀念"
      ],
      timeline: [
        {
          time: "10:00–10:10",
          activity: "導入：特務任務簡報，立即用硝酸鉀溶液書寫秘密訊息，放置自然晾乾",
          warning: true,
          note: "⚠ KNO₃ 為氧化劑，需戴手套操作；書寫後平放，可用吹風機低溫加速乾燥（約 5-10 分鐘）；此步最先做確保有足夠乾燥時間"
        },
        {
          time: "10:10–10:30",
          activity: "Part A：檸檬酸加熱法 — 棉花棒沾 15% 檸檬酸溶液書寫，待乾後吹風機中溫顯字",
          warning: false,
          note: "紙要完全乾燥再加熱，否則顯字效果差；吹風機對準書寫區緩慢移動"
        },
        {
          time: "10:30–10:50",
          activity: "Part B：碘酒 + 維生素C 氧化還原法 — VC 溶液書寫乾燥後，噴碘液顯色",
          warning: false,
          note: "碘液噴灑均勻；顯字後可再噴 VC 溶液讓字消失（可逆反應示範，超酷！）"
        },
        {
          time: "10:50–11:10",
          activity: "Part C：小蘇打 + 紫甘藍汁酸鹼法 — 小蘇打水書寫乾燥後，噴紫甘藍汁顯色",
          warning: false,
          note: "紫甘藍汁遇鹼（pH>8）變藍綠色；可準備整條 pH 色卡加深理解"
        },
        {
          time: "11:10–11:40",
          activity: "Part D：硝酸鉀火焰顯字（終極大招）— 確認字跡完全乾燥，用線香沿字跡引燃，火焰跟著軌跡蔓延",
          warning: true,
          note: "⚠ 必須確認字跡摸起來無涼感（完全乾燥）才可點火；紙下方墊防火板；每人/組輪流操作，老師在旁監督；線香僅老師持有；字不可寫太大或太粗，控制在 10cm 內"
        },
        {
          time: "11:40–12:00",
          activity: "結果比較討論：填寫觀察記錄表，比較四種方法的原理、速度、效果與安全性；清潔整理",
          warning: false,
          note: "引導提問：哪種最安全？哪種效果最戲劇性？化學原理各是什麼？"
        }
      ],
      materials: [
        { name: "棉花棒", qty: "30 支/人", unit: "支", note: "四種方法各 5-8 支", prepBy: "福大老師" },
        { name: "A4 白紙", qty: "10 張/人", unit: "張", note: "每種方法各 2-3 張；厚紙效果更好", prepBy: "福大老師" },
        { name: "檸檬酸粉", qty: "30g", unit: "份（全班）", note: "配成 15% 溶液：30g + 200mL 水攪拌溶解，分裝小杯", prepBy: "福大老師" },
        { name: "維生素C粉（抗壞血酸）", qty: "5g", unit: "份（全班）", note: "配成 10% 溶液：5g + 50mL 水；或壓碎 VC 錠溶水亦可", prepBy: "福大老師" },
        { name: "碘液（稀釋型）", qty: "100mL", unit: "份（全班）", note: "市售碘液 1：3 稀釋至淡茶色；裝入噴瓶", prepBy: "福大老師" },
        { name: "小蘇打粉", qty: "20g", unit: "份（全班）", note: "配成 10% 溶液：20g + 200mL 水", prepBy: "福大老師" },
        { name: "紫色高麗菜（紫甘藍）", qty: "1/4 顆", unit: "顆", note: "課前煮汁：切碎 + 500mL 水煮沸 10 分鐘，過濾後裝噴瓶冷藏", prepBy: "福大老師" },
        { name: "硝酸鉀（KNO₃）", qty: "20g", unit: "份（全班）", note: "⚠ 氧化劑！僅老師配製：20g + 70mL 熱水攪拌溶解，冷卻後使用；分裝小杯讓學生用棉花棒沾取", prepBy: "福大老師" },
        { name: "噴瓶（小型）", qty: 6, unit: "個", note: "碘液用 3 個、紫甘藍汁用 3 個", prepBy: "福大老師" },
        { name: "小杯（30-50mL）", qty: "5 個/人", unit: "個", note: "分裝各種書寫液體，每種一杯", prepBy: "福大老師" },
        { name: "吹風機", qty: 2, unit: "台", note: "檸檬酸加熱顯字用，設定中溫", prepBy: "補習班準備" },
        { name: "線香", qty: "2 支/組", unit: "支", note: "老師持有，逐一引燃 KNO₃ 字跡；1 組配 1 支線香即可", prepBy: "福大老師" },
        { name: "防火板（隔熱板）", qty: 4, unit: "塊", note: "KNO₃ 燃燒時墊在紙下方，防止桌面受熱", prepBy: "福大老師" },
        { name: "乳膠手套", qty: 1, unit: "盒", note: "全程必戴，尤其 KNO₃ 操作段", prepBy: "福大老師" },
        { name: "護目鏡", qty: "1 副/人", unit: "副", note: "碘液噴灑 + KNO₃ 燃燒時必戴", prepBy: "補習班準備" },
        { name: "滅火毯或備用水杯", qty: 1, unit: "件", note: "放在 KNO₃ 實驗區旁，緊急時用", prepBy: "福大老師" }
      ],
      assistantNotes: [
        "【課前一天】配製 KNO₃ 飽和溶液：20g 硝酸鉀 + 70mL 熱水，攪拌至完全溶解，冷卻後裝瓶冷藏",
        "【當天早上】煮紫甘藍汁：1/4 顆紫甘藍切碎 + 500mL 水煮沸 10 分鐘，過濾冷卻後裝噴瓶",
        "【當天早上】稀釋碘液：原液 1 份 + 水 3 份，裝入噴瓶；配製 15% 檸檬酸溶液；配製 10% 小蘇打溶液",
        "【上課第一件事】發 KNO₃ 溶液小杯和棉花棒，讓每位學生在白紙上寫秘密訊息，可用吹風機低溫加速乾燥（約 5-10 分鐘）",
        "【Part D 前安全確認】觸摸字跡確認無涼感（完全乾燥）；清理周圍易燃物；防火板就位；線香僅老師持有，逐組引燃",
        "字跡不可太粗、面積不可超過 10cm，避免燃燒速度過快難以控制",
        "備一杯水在現場，萬一燃燒失控立即澆滅；確認教室有良好通風"
      ]
    },
    {
      id: 3,
      date: null,
      dateDisplay: "待定",
      title: "點水成冰：急凍世界",
      category: "化學",
      difficulty: "中",
      risk: "低",
      riskLevel: 1,
      takeHome: "熱冰樣品（可帶回重複使用）",
      status: "ready",
      handout: "handouts/茲茲銜國中實驗3-點水成冰：急凍世界.html",
      experiments: [
        "醋酸鈉過飽和溶液製作",
        "瞬間點觸結晶觸發",
        "熱冰雕塑造型挑戰",
        "放熱反應溫度測量"
      ],
      objectives: [
        "理解過飽和溶液的形成條件與不穩定性",
        "觀察並解釋晶核誘導造成的瞬間結晶現象",
        "透過溫度測量確認結晶為放熱過程（exothermic）",
        "了解醋酸鈉熱冰可無限重複使用的原理：加熱熔解 → 冷卻過飽和 → 觸發結晶"
      ],
      timeline: [
        {
          time: "10:00–10:20",
          activity: "導入說明 + 製作醋酸鈉過飽和溶液（加熱熔解），靜置開始冷卻",
          warning: true,
          note: "⚠ 熔化的醋酸鈉可達 80–100°C，搬移時戴隔熱手套；冷卻期間絕對不可振動燒杯，否則提前結晶前功盡棄"
        },
        {
          time: "10:20–10:45",
          activity: "等待溶液冷卻至室溫：說明過飽和溶液概念、填寫先猜猜看、預測溫度變化",
          warning: false,
          note: "靜置是關鍵！可以從遠處觀察燒杯，但不要碰桌子。拿這段時間好好解說原理"
        },
        {
          time: "10:45–11:10",
          activity: "觸發實驗：① 種晶點觸，觀察瞬間結晶波 ② 溫度計測量結晶前後溫度 ③ 熱冰柱造型挑戰",
          warning: true,
          note: "⚠ 剛結晶的熱冰溫度可達 54°C，請用鑷子操作，等待 2 分鐘冷卻再用手碰"
        },
        {
          time: "11:10–11:30",
          activity: "重複實驗：將結晶樣品重新加熱熔解，再次冷卻後觸發，確認可重複性",
          warning: false,
          note: "可重複 2–3 次；引導思考：這是物理變化還是化學變化？為什麼可以無限重複？"
        },
        {
          time: "11:30–11:50",
          activity: "填寫觀察記錄、溫度曲線、結論討論；醋酸鈉裝袋帶回，清潔整理",
          warning: false,
          note: "醋酸鈉勿丟棄，可帶回家繼續玩；提醒清洗燒杯時用熱水溶解殘留結晶"
        }
      ],
      materials: [
        { name: "醋酸鈉三水合物（CH₃COONa·3H₂O）", qty: "150g/人", unit: "g", note: "必用三水合物，勿用無水醋酸鈉（行為不同）；可網購或藥品行", prepBy: "福大老師" },
        { name: "燒杯（250mL）", qty: 1, unit: "個/人", note: "必須完全乾燥、潔淨，有雜質或水分會導致提前結晶", prepBy: "福大老師" },
        { name: "電磁加熱板（或電爐）", qty: 2, unit: "台", note: "全班共用，中溫加熱", prepBy: "補習班準備" },
        { name: "玻璃攪拌棒", qty: 1, unit: "支/人", note: "加熱期間輕輕攪拌；完全融化後不再攪拌", prepBy: "福大老師" },
        { name: "溫度計（數位）", qty: 1, unit: "支/人", note: "測量結晶前後溫度對比", prepBy: "福大老師" },
        { name: "種晶（醋酸鈉結晶小粒）", qty: "少許", unit: "份/人", note: "觸發結晶用；課前老師分裝至小夾鏈袋", prepBy: "福大老師" },
        { name: "培養皿或小白碟", qty: 1, unit: "個/人", note: "承接熱冰柱造型", prepBy: "福大老師" },
        { name: "鑷子", qty: 1, unit: "支/人", note: "放種晶 + 夾取剛結晶的熱冰", prepBy: "福大老師" },
        { name: "隔熱手套", qty: 1, unit: "副/人", note: "搬移熱燒杯用", prepBy: "福大老師" },
        { name: "夾鏈袋", qty: 1, unit: "個/人", note: "裝成品帶回（可在家重複使用）", prepBy: "福大老師" }
      ],
      assistantNotes: [
        "【課前分裝】每人 150g 醋酸鈉三水合物放入乾燥燒杯，種晶分裝至小夾鏈袋各一份",
        "【關鍵】燒杯必須完全乾燥潔淨——任何雜質或水滴都可能導致提前結晶",
        "加熱方式：電磁加熱板中溫，邊加熱邊輕輕攪拌，直到固體完全融化成透明清液（約 80°C）",
        "冷卻關鍵：熄火後靜置不振動、不攪拌；冷卻至燒杯外側摸起來微溫即可觸發",
        "觸發方式：鑷子夾一粒種晶輕放入液面，觀察結晶波瀾蔓延",
        "結晶後溫度提醒：立即可達 54°C，告知學生等 2 分鐘後再用手碰",
        "重複使用：把結晶好的熱冰連燒杯再次加熱熔解，冷卻後可再次觸發"
      ]
    },
    {
      id: 4,
      date: null,
      dateDisplay: "待定",
      title: "茲茲福爾摩斯：血跡的檢驗",
      category: "化學",
      difficulty: "中高",
      risk: "中",
      riskLevel: 2,
      takeHome: "無（暗室效果，拍照留念）",
      status: "ready",
      handout: "handouts/茲茲銜國中實驗4-茲茲福爾摩斯：血跡的檢驗.html",
      experiments: ["魯米諾試劑製備與化學發光", "赤血鹽 vs 紅墨水血跡辨識"],
      objectives: [
        "認識鑑識科學的功能與解題策略對結果的影響",
        "瞭解魯米諾試劑化學發光的反應原理",
        "瞭解血跡檢測於犯罪現場的採證與應用",
        "以表格記錄並比較不同樣品的陽性/陰性結果"
      ],
      timeline: [
        { time: "10:00–10:15", activity: "導入：鑑識科學背景故事，介紹魯米諾原理", warning: false, note: "" },
        { time: "10:15–10:40", activity: "Part 1 化學的浪漫：配製魯米諾溶液 + 赤血鹽溶液，暗房觀察化學發光", warning: true, note: "⚠ NaOH 強鹼戴手套；全程護目鏡；通風操作" },
        { time: "10:40–11:15", activity: "Part 2 人人都是福爾摩斯：布/紙巾上設置赤血鹽與紅墨水，暗室噴灑魯米諾檢測", warning: true, note: "⚠ 噴霧僅對檢測面，勿對人；記錄陽性/陰性結果" },
        { time: "11:15–11:45", activity: "問題與討論：填寫觀察記錄、4 題動動腦，清潔整理", warning: false, note: "" }
      ],
      materials: [
        { name: "氫氧化鈉（NaOH）", qty: "1g/組", unit: "g", note: "強鹼，小心使用；戴手套", prepBy: "福大老師" },
        { name: "魯米諾（C₈H₇N₃O₂）", qty: "0.3g/組", unit: "g", note: "", prepBy: "福大老師" },
        { name: "赤血鹽（K₃Fe(CN)₆）", qty: "1g/組", unit: "g", note: "提供鐵離子，模擬血液", prepBy: "福大老師" },
        { name: "7.5% 雙氧水（H₂O₂）", qty: "20mL/組", unit: "mL", note: "氧化劑", prepBy: "福大老師" },
        { name: "蒸餾水", qty: "260mL/組", unit: "mL", note: "魯米諾用180mL + 赤血鹽用80mL", prepBy: "福大老師" },
        { name: "燒杯 250mL、玻棒、量筒、滴管", qty: "各1", unit: "個", note: "", prepBy: "福大老師" },
        { name: "試管", qty: 2, unit: "支", note: "", prepBy: "福大老師" },
        { name: "紅墨水", qty: "1–2 滴", unit: "", note: "對照組", prepBy: "福大老師" },
        { name: "布或紙巾、棉花棒", qty: "各1", unit: "件", note: "血跡模擬", prepBy: "福大老師" },
        { name: "噴霧罐", qty: 1, unit: "瓶", note: "裝魯米諾溶液", prepBy: "福大老師" },
        { name: "電子天平", qty: 1, unit: "台", note: "", prepBy: "補習班準備" },
        { name: "手套、護目鏡", qty: "各1副/人", unit: "", note: "全程佩戴", prepBy: "福大老師" }
      ],
      assistantNotes: [
        "需要可完全遮光的暗室（關燈+遮光布），Part 1 和 Part 2 均需暗室觀察",
        "魯米諾溶液當天配製：1g NaOH + 180mL 水溶解後加入 0.3g 魯米諾攪拌溶解",
        "赤血鹽溶液：1g K₃Fe(CN)₆ + 80mL 水 + 20mL 雙氧水",
        "Part 2 布/紙巾提前標記格子，讓學生知道哪格沾了什麼，進暗室前先記錄位置",
        "提醒：魯米諾發光約 30 秒後會淡出，要快速拍照"
      ]
    },
    {
      id: 5,
      date: null,
      dateDisplay: "待定",
      title: "「粗」類拔「萃」：DNA粗萃取",
      category: "生物",
      difficulty: "中",
      risk: "低",
      riskLevel: 1,
      takeHome: "DNA 樣品（裝入試管帶回）",
      status: "ready",
      handout: "handouts/茲茲銜國中實驗5-粗類拔萃：DNA粗萃取.html",
      experiments: ["奇異果 DNA 粗萃取", "乙醇沉澱法觀察 DNA"],
      objectives: [
        "理解細胞裂解的原理：洗碗精溶解細胞膜磷脂雙層",
        "了解鹽析效應：NaCl 中和 DNA 負電荷使其聚集",
        "觀察乙醇沉澱 DNA 的現象：白色絲狀物在酒精層出現",
        "連結生物概念：DNA 存在於細胞核，是所有生物的遺傳物質"
      ],
      timeline: [
        { time: "10:00–10:10", activity: "導入：DNA 是什麼？為什麼能從水果中萃取？填寫先猜猜看", warning: false, note: "" },
        { time: "10:10–10:40", activity: "步驟 1–4：搗碎奇異果 → 加洗碗精 → 加食鹽水 → 加嫩精，各攪拌 5 分鐘", warning: false, note: "每步驟讓學生先猜目的再操作，操作完再填寫目的欄" },
        { time: "10:40–10:55", activity: "步驟 5–6：紗布過濾 → 取濾液倒入試管，沿壁緩慢加入冰酒精", warning: true, note: "⚠ 冰酒精易燃，遠離明火；倒入時不可攪拌，才能觀察分層" },
        { time: "10:55–11:20", activity: "步驟 7：觀察白色 DNA 絲狀物浮現，用牙籤捲出，裝入試管帶回", warning: false, note: "" },
        { time: "11:20–11:50", activity: "問題與討論：填寫 5 題、畫出 DNA 外觀，清潔整理", warning: false, note: "" }
      ],
      materials: [
        { name: "奇異果", qty: "1顆/人", unit: "顆", note: "熟成的較易萃取", prepBy: "福大老師" },
        { name: "透明夾鏈袋", qty: 1, unit: "個/人", note: "裝水果搗碎用", prepBy: "福大老師" },
        { name: "洗碗精", qty: "5mL/人", unit: "mL", note: "一般廚房洗碗精即可", prepBy: "福大老師" },
        { name: "5M 食鹽水", qty: "5mL/人", unit: "mL", note: "課前配製：292g NaCl + 1L 水", prepBy: "福大老師" },
        { name: "嫩精 or 鳳梨汁", qty: "5g/人", unit: "g", note: "蛋白酶來源；鳳梨汁更易取得", prepBy: "福大老師" },
        { name: "蒸餾水", qty: "50mL/人", unit: "mL", note: "", prepBy: "福大老師" },
        { name: "紗布", qty: "1組/人", unit: "組", note: "過濾果泥", prepBy: "福大老師" },
        { name: "燒杯 250mL、透明塑膠杯、塑膠漏斗", qty: "各1", unit: "個", note: "", prepBy: "福大老師" },
        { name: "試管", qty: 1, unit: "支/人", note: "最終觀察 DNA 用", prepBy: "福大老師" },
        { name: "95% 冰酒精", qty: "10mL/人", unit: "mL", note: "課前放冰箱冷藏；效果更好；遠離明火", prepBy: "福大老師" },
        { name: "滴管或牙籤", qty: 1, unit: "支/人", note: "捲出 DNA 用", prepBy: "福大老師" }
      ],
      assistantNotes: [
        "課前冷藏 95% 酒精（冰酒精效果明顯優於常溫）",
        "課前配製 5M 食鹽水：292g NaCl 溶於 1L 水（或直接買飽和鹽水）",
        "奇異果選熟成偏軟的，DNA 含量較高、搗碎容易",
        "步驟 6 關鍵：沿試管壁緩慢倒入酒精，動作要輕、慢，這是成功的核心",
        "如果白色物質不明顯，可能是酒精加得太快或量不夠；試著再加 5mL 冰酒精"
      ]
    }
  ]
};
