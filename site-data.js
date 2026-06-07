// MindGarden site data
const COURSES = [
  {
    id: 1, icon: "🌿", tag: "壓力管理", title: "壓力舒緩植栽課",
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=480&h=360&fit=crop&auto=format",
    lead: "在快節奏的都市生活中，這堂課帶你回到土壤的溫度，學習與植物共處，讓園藝成為你的心靈避風港。",
    highlights: ["親手種植 3 株療癒系觀葉植物", "認識植物與情緒的科學連結", "學習照護技巧並帶回成品", "團體分享 · 同儕支持氛圍"],
    audience: ["長期感到壓力、焦慮的上班族", "想培養新興趣放鬆身心者", "對植物完全陌生但充滿好奇的初學者"],
    price: 1200, duration: "2 小時", level: "入門", cap: "8 人", bg: "linear-gradient(135deg,#dcebd9,#b9d6b4)",
  },
  {
    id: 2, icon: "🌸", tag: "情感療癒", title: "失戀療癒花藝課",
    img: "https://images.unsplash.com/photo-1477168676804-1b6dce8ee5ec?w=480&h=360&fit=crop&auto=format",
    lead: "一段關係結束後，需要儀式去告別。我們以鮮花為媒介，讓花朵的盛放與凋零，幫助你處理情感、重新認識自己。",
    highlights: ["挑選代表自己情緒的花材", "創作專屬於你的療癒花束", "引導書寫一封給過去自己的信", "燭光分享圈 · 安全保密"],
    audience: ["剛經歷分手或失去重要關係者", "想以非語言方式整理情緒者", "對藝術與書寫感興趣的療癒探索者"],
    price: 1500, duration: "2.5 小時", level: "適合所有人", cap: "6 人", bg: "linear-gradient(135deg,#fce7ef,#f4a4be)",
  },
  {
    id: 3, icon: "🌱", tag: "職場身心", title: "職場壓力療癒課",
    img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=480&h=360&fit=crop&auto=format",
    lead: "職場倦怠不是你的問題。這堂進階課程結合園藝治療與正念練習，帶你重新建立工作與生活的平衡。",
    highlights: ["設計專屬辦公桌療癒小盆栽", "5 分鐘正念呼吸 × 植物照護", "職涯反思工作坊", "資深園藝治療師全程引導"],
    audience: ["長期 burnout 的工作者", "主管或團隊領導，想改善團隊氛圍", "希望在工作中找到節奏感的專業人士"],
    price: 1800, duration: "3 小時", level: "進階", cap: "10 人", bg: "linear-gradient(135deg,#ecdfc5,#c9a273)",
  },
  {
    id: 4, icon: "🌙", tag: "睡眠健康", title: "睡眠改善植物課",
    img: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=480&h=360&fit=crop&auto=format",
    lead: "失眠是這個世代的流行病。我們從植物香氣入手，搭配晚間儀式，協助你打造舒眠的臥室能量場。",
    highlights: ["認識 8 種助眠植物（薰衣草、迷迭香等）", "親手製作香氛舒眠袋 × 床邊植物角", "睡前 5 分鐘儀式設計", "贈送精油樣本一份"],
    audience: ["長期淺眠或失眠困擾者", "對芳療與植物香氣感興趣者", "想為臥室增添療癒感的居家工作者"],
    price: 1400, duration: "2 小時", level: "入門", cap: "8 人", bg: "linear-gradient(135deg,#d6dbe8,#8d99b8)",
  },
  {
    id: 5, icon: "👨‍👩‍👧", tag: "親子關係", title: "親子療癒園藝課",
    img: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=480&h=360&fit=crop&auto=format",
    lead: "在土壤中與孩子並肩工作，你們會說出平時說不出的話。這是一堂為親子關係設計的雙人課程。",
    highlights: ["親子共同設計微型生態瓶", "引導式對話卡 × 共讀植物繪本", "拍立得回憶照片一張", "結業可帶回兩盆共同植栽"],
    audience: ["想增進親密關係的父母與孩子", "適合 5-12 歲孩童與家長一同參與", "對自然教育感興趣的親職"],
    price: 2200, duration: "3 小時", level: "親子", cap: "5 組", bg: "linear-gradient(135deg,#f5efe1,#ecdfc5)",
  },
];

const COUNSELORS = [
  { id: "c1", name: "李雅婷", title: "諮商心理師 · 諮心字第 001234 號", avatar: "👩🏻", bio: "10 年臨床經驗，擅長以人本取向陪伴個案釐清自我，協助情感修復與家庭議題。", specs: ["人際關係", "情感議題", "焦慮症"], stars: "★★★★★", years: 10 },
  { id: "c2", name: "陳柏宇", title: "諮商心理師 · 諮心字第 002567 號", avatar: "👨🏻‍💼", bio: "認知行為取向，協助職場壓力、職涯探索與成人 ADHD，理性傾聽，務實同行。", specs: ["職場壓力", "CBT", "ADHD"], stars: "★★★★★", years: 8 },
  { id: "c3", name: "林宜萱", title: "諮商心理師 · 諮心字第 003821 號", avatar: "👩🏻‍🦰", bio: "敘事與表達性藝術治療，溫柔陪伴創傷後修復與自我認同探索。", specs: ["創傷修復", "表達性藝術", "自我探索"], stars: "★★★★★", years: 12 },
  { id: "c4", name: "張慕森", title: "諮商心理師 · 諮心字第 004102 號", avatar: "🧑🏻", bio: "正念取向，協助慢性壓力、睡眠困擾與重大生活轉換調適，慢下來，慢慢來。", specs: ["正念", "睡眠困擾", "生涯轉換"], stars: "★★★★☆", years: 6 },
];

const TAROT_READERS = [
  { id: "t1", name: "月光", title: "認證塔羅諮詢師 · 心理學背景", avatar: "🌙", bio: "結合心理學與塔羅象徵，引導你看見潛意識訊息，特別擅長情感與人生方向解讀。", specs: ["情感占卜", "心理塔羅", "凱爾特十字"], stars: "★★★★★", years: 7 },
  { id: "t2", name: "星河", title: "資深塔羅師 · 韋特體系", avatar: "✨", bio: "傳統韋特牌系統，結構清晰、解讀直接。職涯、財運與重大決定的最佳夥伴。", specs: ["職涯占卜", "財運", "韋特體系"], stars: "★★★★★", years: 11 },
  { id: "t3", name: "晨霧", title: "塔羅諮詢師 · 直覺派", avatar: "🌫️", bio: "以直覺與牌面意象進行能量解讀，氛圍溫柔、語調療癒，適合需要被陪伴的提問者。", specs: ["能量解讀", "情緒療癒", "靈性成長"], stars: "★★★★★", years: 5 },
  { id: "t4", name: "夜瓏", title: "塔羅師 · 神話象徵研究", avatar: "🦉", bio: "深入神話與原型分析，擅長處理人際糾葛、家庭代際議題與內在小孩工作。", specs: ["人際議題", "原型分析", "深度諮詢"], stars: "★★★★☆", years: 9 },
];

const PRODUCTS = [
  // 植栽
  { id: "p1", cat: "plant", catName: "植栽", icon: "🪴", img: "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400&h=300&fit=crop&auto=format", name: "多肉植物療癒組合包", desc: "5 款入門款多肉，附陶盆與培養土。", price: 680 },
  { id: "p2", cat: "plant", catName: "植栽", icon: "🌵", img: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&h=300&fit=crop&auto=format", name: "仙人掌療癒系列", desc: "金琥、月世界等 3 入耐旱組合。", price: 520 },
  { id: "p3", cat: "plant", catName: "植栽", icon: "🌿", img: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&h=300&fit=crop&auto=format", name: "觀葉植物大師組", desc: "龜背芋、琴葉榕、蔓綠絨三選一。", price: 1200 },
  { id: "p4", cat: "plant", catName: "植栽", icon: "🌱", img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&h=300&fit=crop&auto=format", name: "苔蘚生態瓶 DIY", desc: "玻璃瓶 + 山苔 + 造景組件全套。", price: 880 },
  // 花藝
  { id: "p5", cat: "flower", catName: "花藝", icon: "🌷", img: "https://images.unsplash.com/photo-1485770958101-9dd7e4b6571b?w=400&h=300&fit=crop&auto=format", name: "四季花藝材料包", desc: "當季鮮花搭配，每月主題不同。", price: 890 },
  { id: "p6", cat: "flower", catName: "花藝", icon: "🌺", img: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=400&h=300&fit=crop&auto=format", name: "乾燥花束 DIY 組", desc: "永生玫瑰 × 滿天星，自由組合。", price: 760 },
  { id: "p7", cat: "flower", catName: "花藝", icon: "💐", img: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=300&fit=crop&auto=format", name: "療癒手綁花週禮盒", desc: "每週新鮮花束直送到府。", price: 1280 },
  // 文具
  { id: "p8", cat: "stationery", catName: "文具", icon: "📓", img: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&h=300&fit=crop&auto=format", name: "每日情緒日記本", desc: "120 天情緒追蹤頁，引導式書寫。", price: 420 },
  { id: "p9", cat: "stationery", catName: "文具", icon: "✏️", img: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=400&h=300&fit=crop&auto=format", name: "感恩植物書寫卡組", desc: "30 張植物水彩感恩練習卡。", price: 280 },
  { id: "p10", cat: "stationery", catName: "文具", icon: "📒", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&auto=format", name: "正念冥想引導本", desc: "8 週正念練習工作手帳。", price: 520 },
  // 香氛
  { id: "p11", cat: "scent", catName: "香氛", icon: "🕯️", img: "https://images.unsplash.com/photo-1602523961358-f9f03dd557db?w=400&h=300&fit=crop&auto=format", name: "森林香氛蠟燭", desc: "雪松與青苔，180g 大豆蠟。", price: 580 },
  { id: "p12", cat: "scent", catName: "香氛", icon: "🧴", img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&h=300&fit=crop&auto=format", name: "薰衣草助眠精油", desc: "10ml 法國普羅旺斯有機認證。", price: 520 },
  { id: "p13", cat: "scent", catName: "香氛", icon: "🌸", img: "https://images.unsplash.com/photo-1587530036827-4e24a3dc6e45?w=400&h=300&fit=crop&auto=format", name: "玫瑰療癒香氛噴霧", desc: "100ml 居家氣場淨化專用。", price: 680 },
  { id: "p14", cat: "scent", catName: "香氛", icon: "🌿", img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=300&fit=crop&auto=format", name: "尤加利擴香組", desc: "藤條擴香瓶 200ml，香氣 60 天。", price: 780 },
  // 工具
  { id: "p15", cat: "tool", catName: "工具", icon: "🛠️", img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&auto=format", name: "居家園藝工具五件組", desc: "鏟、剪、耙、噴瓶、手套全套。", price: 980 },
  { id: "p16", cat: "tool", catName: "工具", icon: "🪴", img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop&auto=format", name: "陶土植栽盆 3 件組", desc: "S/M/L 三尺寸天然陶盆。", price: 640 },
  { id: "p17", cat: "tool", catName: "工具", icon: "💧", img: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=400&h=300&fit=crop&auto=format", name: "智慧灑水計時器", desc: "出差不擔心，自動定時澆灌。", price: 1480 },
];

// 加價購商品
const ADD_ON_PRODUCTS = [
  { id: "a1", name: "精油舒壓滾珠瓶", desc: "隨身攜帶 5ml 複方舒壓精油", price: 150, original: 280, icon: "🫙", img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=120&h=120&fit=crop&auto=format" },
  { id: "a2", name: "木質植物標籤組", desc: "10 入手寫標籤，適合盆栽命名", price: 60, original: 120, icon: "🏷️", img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=120&h=120&fit=crop&auto=format" },
  { id: "a3", name: "MindGarden 環保提袋", desc: "麻繩材質可重複使用，含品牌 LOGO", price: 80, original: 160, icon: "🛍️", img: "https://images.unsplash.com/photo-1591193686104-fddba4d99f93?w=120&h=120&fit=crop&auto=format" },
];

// 滿額折扣活動
const PROMOTIONS = [
  { min: 1500, discount: 150, label: "滿 $1,500 折 $150" },
  { min: 2500, discount: 300, label: "滿 $2,500 折 $300" },
  { min: 3500, discount: 500, label: "滿 $3,500 折 $500" },
];

// 折扣碼
const DISCOUNT_CODES = {
  "MINDGARDEN10": { type: "percent", value: 10, label: "會員專屬 9 折" },
  "GREEN200":     { type: "fixed",   value: 200, label: "新客折抵 $200" },
  "HEAL2026":     { type: "percent", value: 15,  label: "療癒新春 85 折" },
};

const SHOP_CATEGORIES = [
  { id: "all", icon: "🛍️", name: "全部" },
  { id: "plant", icon: "🪴", name: "植栽" },
  { id: "flower", icon: "🌸", name: "花藝" },
  { id: "stationery", icon: "📓", name: "文具" },
  { id: "scent", icon: "🕯️", name: "香氛" },
  { id: "tool", icon: "🛠️", name: "工具" },
];
