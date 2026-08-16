/* ============================================================
   茲茲文教 · 題庫系統 (Question Bank)
   ------------------------------------------------------------
   與「課綱實驗」共用科目／學制分類，題目可對應某個實驗或課綱項目。
   欄位說明：
     id         穩定代碼（勿隨意更動）
     stage      學制：國中 / 高中
     subject    科目：生物 / 理化 / 物理 / 化學 / 地球科學
     grade      年級 / 課程
     type       題型：選擇 / 是非 / 填充 / 簡答 / 探究
     difficulty 難易度：易 / 中 / 難
     stem       題幹（題目本文）
     options    選項陣列（僅 type='選擇' 使用；其他題型可省略或給 []）
     answer     正解：
                  選擇 → 選項索引（0=A、1=B…）
                  是非 → true / false
                  填充/簡答/探究 → 參考答案字串
     explanation 解析／詳解（一句到數句）
     relatedId  對應的實驗 / 課綱代碼（供延伸連結，無則 null）
     tags       關鍵字標籤（供搜尋）
   ※ 此為種子題庫，內容可持續擴充、細修。
   ============================================================ */

const QUIZ_BANK = [
  /* ── 國中 · 生物 ── */
  {
    id:'q-bio-cell-1', stage:'國中', subject:'生物', grade:'七年級', type:'選擇', difficulty:'易',
    stem:'使用光學顯微鏡觀察標本時，應先以下列哪一個物鏡對準標本並對光？',
    options:['最高倍物鏡','最低倍物鏡','不需使用物鏡','油鏡'],
    answer:1,
    explanation:'觀察應由低倍開始：低倍視野較大、較易找到標本並對光，確認位置後再轉高倍。',
    relatedId:'cur-bio-micro', tags:['顯微鏡','物鏡','對光','低倍']
  },
  {
    id:'q-bio-cell-2', stage:'國中', subject:'生物', grade:'七年級', type:'選擇', difficulty:'中',
    stem:'觀察洋蔥表皮細胞與人類口腔皮膜細胞，下列哪一個構造是植物細胞有、而動物細胞沒有的？',
    options:['細胞膜','細胞核','細胞壁','細胞質'],
    answer:2,
    explanation:'細胞壁（與葉綠體、大液胞）為植物細胞特有；細胞膜、細胞核、細胞質則兩者皆有。',
    relatedId:'cur-bio-plantcell', tags:['細胞','細胞壁','植物細胞','動物細胞']
  },
  {
    id:'q-bio-nutrient-1', stage:'國中', subject:'生物', grade:'七年級', type:'選擇', difficulty:'中',
    stem:'檢驗食物中的養分時，滴入「碘液」後由棕色變為藍黑色，代表該食物含有下列何者？',
    options:['還原糖','蛋白質','澱粉','脂質'],
    answer:2,
    explanation:'碘液遇澱粉呈藍黑色。還原糖用本氏液（加熱變磚紅色），蛋白質用雙縮脲試劑（紫色）。',
    relatedId:'cur-bio-nutrient', tags:['碘液','澱粉','養分檢驗','本氏液']
  },
  {
    id:'q-bio-enzyme-1', stage:'國中', subject:'生物', grade:'七年級', type:'是非', difficulty:'中',
    stem:'唾液澱粉酶在接近人體體溫（約 37°C）時作用最快，溫度過高會使其失去活性。',
    answer:true,
    explanation:'酵素具有最適溫度，人體酵素約在 37°C 最活躍；高溫會使蛋白質變性而失去活性。',
    relatedId:'cur-bio-enzyme', tags:['酵素','唾液澱粉酶','最適溫度','變性']
  },
  {
    id:'q-bio-photo-1', stage:'國中', subject:'生物', grade:'七年級', type:'探究', difficulty:'難',
    stem:'要證明「光」是葉片行光合作用製造澱粉的必要條件，如何設計對照實驗？請說明變因與檢驗方法。',
    answer:'以同一片葉子部分遮光（操縱變因＝有無光照，其餘條件相同）。經一段時間後取葉，先去綠（酒精隔水加熱脫色），再滴碘液：受光部位變藍黑（有澱粉），遮光部位不變色。',
    explanation:'重點在單一變因（光）、其餘條件相同，並用碘液檢測澱粉作為光合作用的證據。',
    relatedId:'cur-bio-photo', tags:['光合作用','對照實驗','變因','去綠','碘液']
  },

  /* ── 國中 · 理化（化學） ── */
  {
    id:'q-che-density-1', stage:'國中', subject:'理化', grade:'八年級', type:'選擇', difficulty:'易',
    stem:'一塊金屬質量為 54 g，體積為 20 cm³，其密度為多少 g/cm³？',
    options:['0.37','2.7','2.16','1080'],
    answer:1,
    explanation:'密度＝質量／體積＝54 ÷ 20＝2.7 g/cm³（此值接近鋁的密度）。',
    relatedId:'cur-che-density', tags:['密度','質量','體積','計算']
  },
  {
    id:'q-che-sep-1', stage:'國中', subject:'理化', grade:'八年級', type:'選擇', difficulty:'中',
    stem:'欲將「食鹽水」分離出純水與食鹽，最適合的方法組合是？',
    options:['過濾','傾析','蒸餾（收集蒸氣冷凝得純水）','靜置沉澱'],
    answer:2,
    explanation:'食鹽已溶解，過濾與傾析無法分離；蒸餾可使水汽化再冷凝得純水，殘留即食鹽。',
    relatedId:'cur-che-sep', tags:['分離','蒸餾','過濾','混合物']
  },
  {
    id:'q-che-ph-1', stage:'國中', subject:'理化', grade:'八年級', type:'選擇', difficulty:'易',
    stem:'將廣用試紙浸入某溶液後呈現紅色，此溶液的 pH 值最可能為下列何者？',
    options:['pH 3','pH 7','pH 10','pH 13'],
    answer:0,
    explanation:'廣用試紙偏紅代表酸性，pH < 7；pH 3 為酸性，7 為中性，10、13 為鹼性（偏藍紫）。',
    relatedId:'cur-che-ph', tags:['酸鹼','pH','廣用試紙','指示劑']
  },
  {
    id:'q-che-mass-1', stage:'國中', subject:'理化', grade:'八年級', type:'是非', difficulty:'中',
    stem:'在密閉容器中進行化學反應，反應前後容器內物質的總質量會保持不變。',
    answer:true,
    explanation:'質量守恆定律：密閉系統中反應前後原子種類與數目不變，故總質量守恆。若在開放容器且有氣體逸出，秤得質量才會改變。',
    relatedId:'cur-che-mass', tags:['質量守恆','化學反應','密閉']
  },
  {
    id:'q-che-metal-1', stage:'國中', subject:'理化', grade:'八年級', type:'選擇', difficulty:'難',
    stem:'將鐵釘放入硫酸銅溶液中，一段時間後鐵釘表面出現紅色物質、溶液藍色變淡。此現象說明？',
    options:['鐵的活性小於銅','鐵的活性大於銅，把銅置換出來','發生了中和反應','鐵被氧化成氣體逸出'],
    answer:1,
    explanation:'活性大的金屬可把活性小的金屬從其鹽類溶液中置換出來。鐵活性大於銅，故鐵溶入溶液、銅析出（紅色），藍色（銅離子）變淡。',
    relatedId:'cur-che-metal', tags:['金屬活性','置換反應','硫酸銅']
  },

  /* ── 國中 · 理化（物理） ── */
  {
    id:'q-phy-hooke-1', stage:'國中', subject:'理化', grade:'九年級', type:'選擇', difficulty:'中',
    stem:'某彈簧懸掛 100 g 砝碼時伸長 2 cm。在彈性限度內，改掛 250 g 砝碼時，理論上會伸長多少？',
    options:['2 cm','4 cm','5 cm','8 cm'],
    answer:2,
    explanation:'虎克定律：伸長量與施力成正比。100 g→2 cm，故每 50 g 伸長 1 cm，250 g 伸長 5 cm。',
    relatedId:'cur-phy-hooke', tags:['虎克定律','彈簧','正比','伸長量']
  },
  {
    id:'q-phy-static-1', stage:'國中', subject:'理化', grade:'九年級', type:'選擇', difficulty:'易',
    stem:'用衛生紙摩擦塑膠尺後，尺能吸起小紙屑，這是因為？',
    options:['塑膠尺產生磁性','摩擦使尺帶靜電，靜電力吸引紙屑','紙屑本身會發熱','空氣把紙屑吹上去'],
    answer:1,
    explanation:'摩擦起電使尺帶電，帶電體會使附近紙屑感應而受靜電力吸引。此為茲茲「閃電魔法杯／萊頓瓶」實驗的基礎。',
    relatedId:'phy-static-cup', tags:['靜電','摩擦起電','靜電力']
  },
  {
    id:'q-phy-cloud-1', stage:'國中', subject:'理化', grade:'九年級', type:'簡答', difficulty:'中',
    stem:'「人造雲」實驗中，在瓶內加壓後突然釋放，瓶內出現白霧。請以科學原理解釋成雲過程。',
    answer:'瓶內空氣快速膨脹（絕熱膨脹）使溫度下降，水氣達到過飽和後凝結在微粒（凝結核）上形成小水滴，即白霧（雲）。',
    explanation:'降溫＋凝結核是成雲兩要素，對應真實大氣中空氣上升絕熱冷卻成雲的過程。',
    relatedId:'phy-cloud', tags:['人造雲','絕熱膨脹','凝結','水氣']
  },

  /* ── 高中 · 物理 ── */
  {
    id:'q-hs-phy-motion-1', stage:'高中', subject:'物理', grade:'高一', type:'選擇', difficulty:'中',
    stem:'一物體由靜止開始作等加速度直線運動，加速度 2 m/s²。經 5 秒後的速度為多少？',
    options:['2 m/s','5 m/s','10 m/s','25 m/s'],
    answer:2,
    explanation:'v = v₀ + at = 0 + 2 × 5 = 10 m/s。',
    relatedId:null, tags:['等加速度','運動學','速度']
  },
  {
    id:'q-hs-phy-ohm-1', stage:'高中', subject:'物理', grade:'高一', type:'選擇', difficulty:'易',
    stem:'一電阻兩端電壓為 6 V，通過電流為 0.5 A，則此電阻值為多少 Ω？',
    options:['3','6','12','0.083'],
    answer:2,
    explanation:'歐姆定律 R = V / I = 6 ÷ 0.5 = 12 Ω。',
    relatedId:null, tags:['歐姆定律','電阻','電壓','電流']
  },

  /* ── 高中 · 化學 ── */
  {
    id:'q-hs-che-mole-1', stage:'高中', subject:'化學', grade:'高一', type:'選擇', difficulty:'中',
    stem:'在標準狀況（STP）下，1 莫耳理想氣體的體積約為多少公升？',
    options:['1 L','6.02 L','22.4 L','44.8 L'],
    answer:2,
    explanation:'STP 下 1 mol 任何理想氣體的莫耳體積約為 22.4 L。',
    relatedId:null, tags:['莫耳','莫耳體積','STP','氣體']
  },
  {
    id:'q-hs-che-acidbase-1', stage:'高中', subject:'化學', grade:'高二', type:'選擇', difficulty:'難',
    stem:'某強酸水溶液的 [H⁺] = 1 × 10⁻³ M，其 pH 值為多少？',
    options:['3','−3','11','7'],
    answer:0,
    explanation:'pH = −log[H⁺] = −log(10⁻³) = 3，屬酸性。',
    relatedId:null, tags:['pH','強酸','對數','酸鹼']
  },

  /* ── 高中 · 生物 ── */
  {
    id:'q-hs-bio-dna-1', stage:'高中', subject:'生物', grade:'高一', type:'是非', difficulty:'中',
    stem:'DNA 雙股螺旋中，腺嘌呤（A）與胸腺嘧啶（T）配對，鳥糞嘌呤（G）與胞嘧啶（C）配對。',
    answer:true,
    explanation:'華生–克里克鹼基互補配對：A–T（2 個氫鍵）、G–C（3 個氫鍵）。此為 DNA 粗萃取延伸實驗的理論基礎。',
    relatedId:null, tags:['DNA','鹼基配對','雙股螺旋','互補']
  },

  /* ── 高中 · 地球科學 ── */
  {
    id:'q-hs-es-1', stage:'高中', subject:'地球科學', grade:'高一', type:'選擇', difficulty:'易',
    stem:'地震發生時，最先被地震儀記錄到、傳播速度最快的是哪一種地震波？',
    options:['S 波（次波）','P 波（主波）','表面波','海嘯波'],
    answer:1,
    explanation:'P 波（縱波）速度最快、最先抵達；S 波（橫波）較慢；表面波最慢但破壞力常最大。',
    relatedId:null, tags:['地震波','P波','S波','地球科學']
  },
];
