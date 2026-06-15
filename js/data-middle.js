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
      title: "特務密碼：無字天書解碼術",
      category: "化學",
      difficulty: "中",
      risk: "中高",
      riskLevel: 3,
      takeHome: "無字天書作品卡（硝酸鉀字跡紙）",
      status: "ready",
      handout: "handouts/茲茲銜國中實驗2-特務密碼：無字天書解碼術.html",
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
      title: "實驗尚未確認",
      category: "待定",
      difficulty: "—",
      risk: "—",
      riskLevel: 0,
      takeHome: "—",
      status: "pending",
      handout: null,
      experiments: ["實驗內容待定"],
      objectives: [],
      timeline: [],
      materials: [],
      assistantNotes: []
    },
    {
      id: 4,
      date: null,
      dateDisplay: "待定",
      title: "實驗尚未確認",
      category: "待定",
      difficulty: "—",
      risk: "—",
      riskLevel: 0,
      takeHome: "—",
      status: "pending",
      handout: null,
      experiments: ["實驗內容待定"],
      objectives: [],
      timeline: [],
      materials: [],
      assistantNotes: []
    },
    {
      id: 5,
      date: null,
      dateDisplay: "待定",
      title: "實驗尚未確認",
      category: "待定",
      difficulty: "—",
      risk: "—",
      riskLevel: 0,
      takeHome: "—",
      status: "pending",
      handout: null,
      experiments: ["實驗內容待定"],
      objectives: [],
      timeline: [],
      materials: [],
      assistantNotes: []
    }
  ]
};
