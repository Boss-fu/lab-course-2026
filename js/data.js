const COURSE = {
  name: "茲茲國小部暑期實驗課",
  year: 2026,
  grade: "國小五、六年級（無實驗經驗）",
  students: "10–15 人",
  time: "每次 10:00–12:00（共 120 分鐘）",
  period: "2026 年 7 月 6 日 ～ 2026 年 8 月 24 日",
  teacher: "福大老師",
  sessions: [
    {
      id: 1,
      date: "2026-07-06",
      dateDisplay: "7/6（二）",
      title: "神奇的靜電：閃電魔法杯與不插電馬達",
      category: "物理",
      difficulty: "易",
      risk: "中",
      riskLevel: 2,
      takeHome: "萊頓瓶、富蘭克林馬達",
      status: "ready",
      handout: "handouts/茲茲銜國小實驗1-閃電魔法杯：神奇的靜電現象.pdf",
      experiments: ["閃電魔法杯（萊頓瓶）", "富蘭克林馬達"],
      objectives: [
        "認識靜電、摩擦起電與感應起電的差異",
        "親手組裝富蘭克林馬達（不插電馬達），觀察靜電驅動旋轉",
        "製作萊頓瓶（閃電魔法杯），體驗電荷儲存與輕微放電感受"
      ],
      timeline: [
        { time: "10:00–10:15", activity: "開場與原理講解：靜電原理、摩擦起電、安全注意事項", warning: false, note: "" },
        { time: "10:15–11:05", activity: "簡單測試不同材質對 PVC 棒的起電效果", warning: false, note: "提供 PE 手套、抹布、衛生紙、廚房紙巾" },
        { time: "11:05–11:15", activity: "富蘭克林馬達：製作靜電馬達、調整鋁箔距離，用 PVC 管測試轉動", warning: false, note: "靜電受濕度影響，備用靜電棒操作" },
        { time: "11:15–11:45", activity: "萊頓瓶製作與體驗：製作閃電魔法杯，手牽手成圈感受靜電", warning: true, note: "放電為輕微麻感，課前需知會家長。若同學害怕，可不觸碰，由老師操作" },
        { time: "11:45–12:00", activity: "總結與場地復原：複習靜電原理", warning: false, note: "完成學習單，需要電腦投影" }
      ],
      materials: [
        { name: "塑膠杯 340mL", qty: 45, unit: "個", note: "製作萊頓瓶外殼＋馬達轉子", prepBy: "福大老師" },
        { name: "鋁箔紙", qty: 2, unit: "卷", note: "導電層與電極片", prepBy: "福大老師" },
        { name: "PVC 管", qty: 2, unit: "支", note: "摩擦起電用，可重複使用", prepBy: "福大老師" },
        { name: "廚房紙巾", qty: 1, unit: "包", note: "摩擦 PVC 管，務必乾燥", prepBy: "福大老師" },
        { name: "PE 手套", qty: 1, unit: "盒", note: "摩擦起電用，避免手汗", prepBy: "福大老師" },
        { name: "竹籤", qty: 12, unit: "支", note: "馬達轉軸", prepBy: "福大老師" },
        { name: "竹筷", qty: 24, unit: "支", note: "馬達電刷支架", prepBy: "福大老師" },
        { name: "靜電棒", qty: 10, unit: "支", note: "備用方案，梅雨季備用", prepBy: "福大老師" },
        { name: "保麗龍板", qty: 15, unit: "片", note: "馬達底座", prepBy: "福大老師" },
        { name: "衛生紙", qty: 1, unit: "包", note: "摩擦 PVC 管，務必乾燥", prepBy: "周老師" },
        { name: "剪刀", qty: 4, unit: "把", note: "共用", prepBy: "周老師" },
        { name: "A4 廢紙", qty: 1, unit: "張", note: "靜電測試，撕碎成小紙屑", prepBy: "周老師" },
        { name: "透明膠帶", qty: 4, unit: "卷", note: "固定結構", prepBy: "周老師" },
        { name: "乾淨抹布（棉質）", qty: 7, unit: "條", note: "摩擦 PVC 管，務必乾燥", prepBy: "周老師" },
        { name: "吹風機", qty: 1, unit: "台", note: "確保材料無水氣", prepBy: "周老師" },
        { name: "乾淨抹布", qty: 15, unit: "條", note: "必須完全乾燥", prepBy: "周老師" }
      ],
      assistantNotes: [
        "確認教室乾燥（靜電受濕度影響），課前在教室先開啟除濕功能",
        "準備 12 條乾燥棉抹布",
        "萊頓瓶放電時在旁協助安全說明",
        "家長知情確認（放電麻感體驗）"
      ]
    },
    {
      id: 2,
      date: "2026-07-20",
      dateDisplay: "7/20（二）",
      title: "看不見的爆發力：黑蛇招喚術與酸鹼火箭",
      category: "化學",
      difficulty: "中",
      risk: "中",
      riskLevel: 2,
      takeHome: "無",
      status: "ready",
      handout: "handouts/茲茲銜國小實驗2_看不見的爆發力-黑蛇招喚術與酸鹼火箭.pdf",
      experiments: ["火箭發射器", "黑蛇便便"],
      objectives: [
        "比較小蘇打粉的兩種反應路徑：熱分解 vs. 酸鹼中和產氣",
        "透過火箭競賽體驗氣體壓力與反作用力",
        "觀察蔗糖碳化過程，理解熱分解與碳化概念"
      ],
      timeline: [
        { time: "10:00–10:15", activity: "酸鹼反應與熱分解講解：小蘇打粉的兩種反應路徑", warning: false, note: "" },
        { time: "10:15–11:00", activity: "火箭發射器：製作底座，檸檬酸＋小蘇打推動寶特瓶，「誰飛最高」", warning: true, note: "確保發射時空間安全，會有部分液體濺出，需保護眼睛" },
        { time: "11:00–11:15", activity: "清潔環境", warning: false, note: "" },
        { time: "11:15–11:45", activity: "黑蛇便便：糖＋小蘇打點燃酒精，觀察碳化膨脹黑蛇", warning: true, note: "需點火，桌面鋪鋁箔避免燒黑桌面" },
        { time: "11:45–12:00", activity: "總結：比較兩種產生 CO₂ 方法的異同", warning: false, note: "" }
      ],
      materials: [
        { name: "小蘇打粉", qty: 1, unit: "包", note: "", prepBy: "福大老師" },
        { name: "檸檬酸粉", qty: 1, unit: "包", note: "", prepBy: "福大老師" },
        { name: "沙子", qty: 1, unit: "包", note: "黑蛇底座", prepBy: "福大老師" },
        { name: "電器膠帶", qty: 1, unit: "卷", note: "纏繞火箭底座", prepBy: "福大老師" },
        { name: "氣球底座", qty: 15, unit: "個", note: "火箭底座", prepBy: "福大老師" },
        { name: "氣球棒", qty: 15, unit: "支", note: "火箭底座", prepBy: "福大老師" },
        { name: "塑膠滴管", qty: 15, unit: "支", note: "火箭頭", prepBy: "福大老師" },
        { name: "A4 塑膠墊板", qty: 4, unit: "片", note: "黑蛇加熱燃燒底部墊板", prepBy: "周老師" },
        { name: "錫箔紙", qty: 1, unit: "卷", note: "包覆底部墊板絕熱", prepBy: "福大老師" },
        { name: "酒精", qty: 1, unit: "瓶", note: "黑蛇燃料", prepBy: "福大老師" },
        { name: "白砂糖", qty: 1, unit: "包", note: "黑蛇燃料", prepBy: "福大老師" },
        { name: "紅砂糖", qty: 1, unit: "包", note: "黑蛇燃料", prepBy: "福大老師" },
        { name: "方糖", qty: 1, unit: "包", note: "黑蛇燃料", prepBy: "福大老師" },
        { name: "長頸打火機", qty: 5, unit: "個", note: "點火工具", prepBy: "福大老師" },
        { name: "電子秤", qty: 2, unit: "台", note: "秤量藥品", prepBy: "福大老師" },
        { name: "燒杯", qty: 4, unit: "個", note: "配置檸檬酸", prepBy: "福大老師" },
        { name: "研缽＋杵", qty: 4, unit: "組", note: "研磨方糖", prepBy: "福大老師" },
        { name: "陶瓷蒸發皿", qty: 4, unit: "個", note: "燃燒黑蛇容器", prepBy: "福大老師" },
        { name: "不銹鋼藥勺", qty: 4, unit: "支", note: "取用砂糖", prepBy: "福大老師" },
        { name: "軟尺", qty: 4, unit: "個", note: "測量黑蛇多長", prepBy: "福大老師" }
      ],
      assistantNotes: [
        "申請戶外場地使用（走廊/操場），確認通風狀況",
        "移至戶外前清點人數並告知安全規範",
        "打火機由老師保管，嚴格監督黑蛇",
        "全員佩戴護目鏡確認",
        "錫箔紙預鋪於桌面"
      ]
    },
    {
      id: 3,
      date: "2026-08-03",
      dateDisplay: "8/3（二）",
      title: "電流與熱能的交響曲：保麗龍寶劍與電流麵包",
      category: "物理",
      difficulty: "中",
      risk: "中高",
      riskLevel: 3,
      takeHome: "保麗龍寶劍",
      status: "ready",
      handout: "handouts/茲茲銜國小實驗3_電流與熱能的交響曲：電流麵包與保麗龍寶劍.pdf",
      experiments: ["電流加熱麵包", "保麗龍切割器"],
      objectives: [
        "理解電流通過導體產生熱能的電流熱效應（焦耳效應）",
        "透過雙軌交叉操作，體驗等待時間的有效運用",
        "製作保麗龍切割器，並用電流烤熟麵包（可食用）"
      ],
      timeline: [
        { time: "10:00–10:15", activity: "原理講解與安全宣導：電流熱效應、嚴格規範不得碰觸電極與發熱絲", warning: true, note: "全程嚴禁觸碰電極與發熱絲，通電後一律帶上布手套。熱熔槍與電焊槍由老師代理操作" },
        { time: "10:15–10:45", activity: "電流麵包（前段）：混合麵糊、架好裝置，插入電極、通電加熱，進入等待期", warning: false, note: "通電後請同學勿觸碰，可以觀察是否有變化，交叉進行下一項實作" },
        { time: "10:45–11:25", activity: "保麗龍寶劍：製作鎳鉻絲切割器，彩繪保麗龍，切割保麗龍", warning: false, note: "" },
        { time: "11:25–11:45", activity: "電流麵包（後段）：斷電拔極，等待冷卻，觀察氣孔，開心享用", warning: false, note: "可備果醬奶油，增加趣味" },
        { time: "11:45–12:00", activity: "總結與場地復原", warning: false, note: "" }
      ],
      materials: [
        { name: "剪刀", qty: 4, unit: "支", note: "剪開牛奶紙盒", prepBy: "周老師" },
        { name: "紙盒牛奶 400mL", qty: 4, unit: "盒", note: "任意品牌，尺寸差不多即可", prepBy: "周老師" },
        { name: "彩色筆", qty: 1, unit: "盒", note: "彩繪保麗龍板", prepBy: "周老師" },
        { name: "鬆餅粉", qty: 1, unit: "包", note: "1kg（200g 粉/150 牛奶）", prepBy: "福大老師" },
        { name: "中筋麵粉", qty: 1, unit: "包", note: "製作麵糊用", prepBy: "福大老師" },
        { name: "酵母粉、食鹽、白糖", qty: 1, unit: "份", note: "少許，製作麵糊用", prepBy: "福大老師" },
        { name: "食用量杯 250mL", qty: 4, unit: "組", note: "混合麵糊用", prepBy: "福大老師" },
        { name: "竹筷", qty: 1, unit: "份", note: "數支，攪拌麵糊用", prepBy: "福大老師" },
        { name: "電子秤", qty: 2, unit: "台", note: "食用秤即可", prepBy: "福大老師" },
        { name: "不鏽鋼電極片", qty: 8, unit: "支", note: "插入麵團兩側", prepBy: "福大老師" },
        { name: "帶插頭電線導線", qty: 4, unit: "條", note: "連接不銹鋼板電極", prepBy: "福大老師" },
        { name: "電池組＋開關", qty: 15, unit: "組", note: "串連 2 個 3 號電池＋按鈕式開關", prepBy: "福大老師" },
        { name: "鱷魚夾導線", qty: 4, unit: "組", note: "正負為一組", prepBy: "福大老師" },
        { name: "鎳鉻絲（0.3–0.5mm）", qty: 1, unit: "卷", note: "切割器發熱絲", prepBy: "福大老師" },
        { name: "保麗龍板", qty: 12, unit: "片", note: "繪製喜歡的圖案待切割", prepBy: "福大老師" },
        { name: "冰棒棍", qty: 30, unit: "支", note: "製作切割器底座", prepBy: "福大老師" },
        { name: "熱溶膠槍+熱溶膠條組", qty: 1, unit: "組", note: "黏貼切割器底座", prepBy: "福大老師" },
        { name: "隔熱棉手套", qty: 15, unit: "雙", note: "實驗安全用具", prepBy: "福大老師" },
        { name: "電烙鐵套裝", qty: 1, unit: "組", note: "電焊切割器導線接觸", prepBy: "福大老師" },
        { name: "三用電表", qty: 1, unit: "台", note: "勾表", prepBy: "福大老師" }
      ],
      assistantNotes: [
        "發鬆餅粉前確認電池組充電/備電",
        "桌面清空、保麗龍板預先分發",
        "嚴格電極片巡視（不得觸碰電極）",
        "嚴格電熱切割器巡視（不得觸碰發熱絲）",
        "協助麵包通電後計時（約 40 分鐘）",
        "備果醬/奶油（可選）"
      ]
    },
    {
      id: 4,
      date: "2026-08-17",
      dateDisplay: "8/17（二）",
      title: "風的掌控者：人造雲與轉轉飛天杯",
      category: "物理",
      difficulty: "易",
      risk: "低",
      riskLevel: 1,
      takeHome: "飛天杯",
      status: "ready",
      handout: "handouts/茲茲銜國小實驗4_風的掌控者：人造雲與轉轉飛天杯.pdf",
      experiments: ["人造雲", "白努利實驗", "轉轉飛天杯（馬格努斯效應）"],
      objectives: [
        "理解絕熱膨脹與人造雲的成因",
        "體驗白努利效應，觀察流速與氣壓的關係",
        "製作轉轉飛天杯，體驗馬格努斯效應並帶回家"
      ],
      timeline: [
        { time: "10:00–10:15", activity: "大氣壓力與流體力學概覽", warning: false, note: "本堂三實驗節奏較緊湊" },
        { time: "10:15–10:45", activity: "人造雲：寶特瓶加酒精、打氣加壓後瞬間釋放觀察雲霧", warning: false, note: "拉上窗簾效果更明顯" },
        { time: "10:45–10:50", activity: "收拾清潔", warning: false, note: "" },
        { time: "10:55–11:25", activity: "白努利實驗：乒乓球實驗", warning: false, note: "10 人輪流，每人至少體驗一次" },
        { time: "11:25–11:50", activity: "轉轉飛天杯：兩紙杯背對背黏合＋橡皮筋彈射，比賽向上飄最遠", warning: false, note: "成品可帶回，製作簡單，成就感高" },
        { time: "11:50–12:00", activity: "總結與場地復原", warning: false, note: "" }
      ],
      materials: [
        { name: "硬寶特瓶", qty: 4, unit: "個", note: "1500 舒跑", prepBy: "周老師" },
        { name: "吹風機", qty: 1, unit: "台", note: "白努利懸浮", prepBy: "周老師" },
        { name: "A4 紙", qty: 40, unit: "張", note: "可用回收紙", prepBy: "周老師" },
        { name: "雙面膠", qty: 4, unit: "卷", note: "固定紙杯", prepBy: "周老師" },
        { name: "剪刀", qty: 4, unit: "把", note: "勞作工具", prepBy: "周老師" },
        { name: "膠水", qty: 4, unit: "罐", note: "勞作工具", prepBy: "周老師" },
        { name: "色紙", qty: 1, unit: "包", note: "勞作工具", prepBy: "周老師" },
        { name: "美工刀", qty: 4, unit: "把", note: "勞作工具", prepBy: "周老師" },
        { name: "紙杯", qty: 30, unit: "個", note: "飛天杯", prepBy: "福大老師" },
        { name: "乒乓球", qty: 5, unit: "個", note: "白努利演示", prepBy: "福大老師" },
        { name: "橡皮筋（寬版）", qty: 15, unit: "條", note: "飛天杯發射繩", prepBy: "福大老師" },
        { name: "竹筷", qty: 15, unit: "支", note: "飛天杯發射座", prepBy: "福大老師" },
        { name: "酒精", qty: 1, unit: "罐", note: "共用", prepBy: "福大老師" },
        { name: "甲醇", qty: 1, unit: "罐", note: "共用", prepBy: "福大老師" },
        { name: "打氣筒＋氣針", qty: 2, unit: "組", note: "共用", prepBy: "福大老師" },
        { name: "線香", qty: 1, unit: "包", note: "共用", prepBy: "福大老師" },
        { name: "長頸打火機", qty: 4, unit: "支", note: "一組一支", prepBy: "福大老師" },
        { name: "軟木塞", qty: 4, unit: "個", note: "尺寸須配合硬寶特瓶口", prepBy: "福大老師" },
        { name: "燒杯", qty: 2, unit: "個", note: "裝酒精或甲醇", prepBy: "福大老師" },
        { name: "滴管", qty: 4, unit: "支", note: "用於滴加酒精", prepBy: "福大老師" },
        { name: "沙子", qty: 1, unit: "包", note: "用於白努力定律", prepBy: "福大老師" },
        { name: "可彎曲吸管", qty: 15, unit: "支", note: "用於白努力定律", prepBy: "福大老師" }
      ],
      assistantNotes: [
        "器材課前分裝至各座位",
        "拉上窗簾（人造雲效果更好）",
        "準備評分小紙條（競賽用）",
        "輪流闖關時協助秩序",
        "飛天杯競賽時協助計量/判斷"
      ]
    },
    {
      id: 5,
      date: "2026-08-24",
      dateDisplay: "8/24（二）",
      title: "星際科學實驗室：深海熔岩燈與爆漿水怪蛋",
      category: "化學",
      difficulty: "中",
      risk: "低",
      riskLevel: 1,
      takeHome: "熔岩燈",
      status: "ready",
      handout: "handouts/茲茲銜國小實驗5_科學小廚房：深海熔岩燈與爆漿水怪蛋.pdf",
      experiments: ["繽紛極光熔岩燈", "合成外星水怪蛋"],
      objectives: [
        "理解海藻酸鈉遇到鈣離子會形成「外膜（交聯作用）」的科學原理",
        "能說出「油比水輕（密度）」的沉浮現象"
      ],
      timeline: [
        { time: "10:00–10:15", activity: "星際任務引導與原理概念", warning: false, note: "本堂課包含物理與化學跨領域實驗" },
        { time: "10:15–11:00", activity: "繽紛極光熔岩燈", warning: true, note: "發泡錠一次只能給 1/4 顆；看完效果後需助教一瓶一瓶檢查蓋子是否鎖緊" },
        { time: "11:00–11:10", activity: "收拾清潔與中場休息", warning: true, note: "嚴格規定熔岩燈杯「絕對不能飲用」" },
        { time: "10:55–11:25", activity: "合成外星水怪蛋", warning: true, note: "海藻酸鈉果汁必須課前一天（8/23）泡好放冰箱消泡，現場攪拌會全是泡泡，實驗會失敗" },
        { time: "11:25–11:50", activity: "跨界大融合與分子點心", warning: true, note: "只能吃乾淨、洗過清水的那盤水怪蛋" },
        { time: "11:50–12:00", activity: "總結、發放續航禮包與場地復原", warning: false, note: "提醒孩子回家倒發泡錠時「蓋子一定要打開」" }
      ],
      materials: [
        { name: "果汁飲料", qty: 1, unit: "份", note: "學生自備", prepBy: "周老師" },
        { name: "食用級乳酸鈣", qty: 1, unit: "包", note: "全新未開封", prepBy: "福大老師" },
        { name: "食用級海藻酸鈉", qty: 1, unit: "包", note: "全新未開封", prepBy: "福大老師" },
        { name: "無菌滴管", qty: 15, unit: "支", note: "新未開封", prepBy: "福大老師" },
        { name: "湯匙", qty: 15, unit: "支", note: "撈出海藻酸鈉", prepBy: "福大老師" },
        { name: "塑膠杯/紙杯", qty: 1, unit: "條", note: "配置溶液、讓學生裝成品", prepBy: "福大老師" },
        { name: "食用色素", qty: 4, unit: "瓶", note: "四種不同顏色", prepBy: "福大老師" },
        { name: "胖胖寶特瓶 345mL", qty: 15, unit: "瓶", note: "熔岩燈容器，需有可旋緊瓶蓋", prepBy: "福大老師" },
        { name: "沙拉油", qty: 1, unit: "桶", note: "2 公升", prepBy: "福大老師" },
        { name: "發泡錠", qty: 15, unit: "顆", note: "熔岩燈", prepBy: "福大老師" },
        { name: "小夾鏈袋", qty: 15, unit: "袋", note: "裝發泡錠", prepBy: "福大老師" }
      ],
      assistantNotes: [
        "海藻酸鈉果汁必須於課前一天（8/23）調配完畢並放冰箱冷藏消泡",
        "課前將油、乳酸鈣水、消泡果汁、清水，用免洗杯精準分裝至各組座位",
        "桌面預先鋪設報紙或防護墊，備足抹布與廚房紙巾",
        "巡視熔岩燈灌油過程，避免大打翻",
        "嚴格監督「實驗用熔岩燈」與「食用分子晶球」完全分開，禁止學生誤食",
        "巡視分子晶球製作，糾正滴管姿勢（須保持垂直高空滴入，不可將滴管戳進乳酸鈣水中）"
      ]
    }
  ]
};
