// All site text lives here. Edit this file to update content; never edit index.html for text.
const SITE_DATA = {
  en: {
    nav: { about: "About", education: "Education", skills: "Skills", experience: "Experience", teaching: "Teaching",
           projects: "Projects", publications: "Publications", awards: "Awards", contact: "Contact" },
    ui: {
      detailsExpand: "Details ▾",
      detailsCollapse: "Details ▴",
      print: "Print / Save as PDF",
      backToTop: "Back to top"
    },
    hero: {
      name: "Shang-Yu Chiang",
      nameAlt: "江尚瑀",
      tagline: "AI Researcher & Lecturer — Medical Imaging Model Development · Programming & Generative AI Education",
      desc: "Ph.D., Graduate Institute of Biomedical Electronics and Bioinformatics, National Taiwan University.",
      roles: ["Medical Imaging AI Researcher", "LLM & RAG Engineer", "Deep Learning Practitioner", "AI Lecturer & Speaker"]
    },
    stats: {
      title: "By the Numbers",
      items: [
        { key: "publications", label: "Publications", suffix: "" },
        { key: "teaching", label: "Teaching Engagements", suffix: "+" },
        { key: "awards", label: "Competition Awards", suffix: "" },
        { key: "years", label: "Years Lecturing", suffix: "+" }
      ]
    },
    about: {
      title: "About",
      paragraphs: [
        "Dr. Shang-Yu Chiang holds a Ph.D. in Biomedical Electronics and Bioinformatics from National Taiwan University. Over more than a decade of research, Dr. Chiang has focused on medical imaging AI — from computer-aided detection systems to deep learning diagnostic models — publishing in peer-reviewed journals including several Q1-ranked venues.",
        "Since 2019, Dr. Chiang has served as an AI lecturer across universities, government agencies, and industry, teaching machine learning, generative AI, and applied AI. Current research centers on large language models, retrieval-augmented generation (RAG), and multimodal AI."
      ]
    },
    education: {
      title: "Education",
      // thesis = 該學位的畢業論文題目（留空字串就不顯示這一行）。
      // items = 該學位期間的研究成果（計畫／論文／獲獎）。留空陣列 [] 就不顯示。
      // 每筆 items 可選填 tag（Q1 / Q2 / Best Paper 等），會顯示成標籤。
      thesisLabel: "Dissertation: ",
      entries: [
        {
          degree: "Doctor of Biomedical Electronics and Bioinformatics",
          org: "National Taiwan University",
          dept: "Graduate Institute of Biomedical Electronics and Bioinformatics",
          period: "Sep 2018 – Aug 2025",
          thesis: "Stage-wise Diagnosis of NAFLD Progression from Steatosis to Fibrosis on Abdominal Ultrasound Images",
          items: [
            { tag: "Q2", text: "Juan, C. J., Wang, C. S., Lee, B. Y., Chiang, S. Y., Yeh, C. C., Cho, D. Y., &amp; Shen, W. C. (2021). Integration of genetic programming and tabu search mechanism for automatic detection of magnetic resonance imaging in cervical spondylosis" },
            { tag: "Q1", text: "Chiang, S. Y., Wang, Y. W., Su, P. Y., Chang, Y. Y., Yen, H. H., &amp; Chang, R. F. (2025). PBCS-ConvNeXt: Convolutional Network-Based Automatic Diagnosis of Non-alcoholic Fatty Liver in Abdominal Ultrasound Images. Journal of Imaging Informatics in Medicine, 1-16" }
          ]
        },
        {
          degree: "Master of Information and Finance Management",
          org: "National Taipei University of Technology",
          dept: "Institute of Information and Finance Management",
          period: "Aug 2015 – Jun 2017",
          thesis: "Integrate Genetic Programming with TABU Search to Establish a Prediction Model of Cervical Spine Disease",
          items: [
            { tag: "Best Paper", text: "The 4th Multidisciplinary International Social Network Conference — Prediction Model of Cervical Spine Disease Established by Genetic Programming" },
            { tag: "", text: "The 12th Asian-Oceanian Congress of Neuroradiology — Integrate Genetic Programming with TABU Search to Establish a Prediction Model of Cervical Spine Disease" }
          ]
        },
        {
          degree: "Bachelor of Healthcare Information and Management",
          org: "Ming Chuan University",
          dept: "Department of Healthcare Information and Management",
          period: "Sep 2011 – Jun 2015",
          thesis: "",
          items: [
            { tag: "", text: "MOST Undergraduate Research Grant, MOST 103-2815-C-130-108-E" }
          ]
        }
      ]
    },
    skills: {
      title: "Skills",
      groups: [
        { name: "Research Areas", items: [
          "Artificial Intelligence, Machine Learning, Deep Learning & Generative AI",
          "Medical Image Processing, Computer-Aided Diagnosis, NLP & Large Language Models",
          "Retrieval-Augmented Generation (RAG), Knowledge-Base QA & Multimodal / Cross-Modal Learning"
        ] },
        { name: "Programming Languages", items: ["Python", "C#", "C/C++", "R", "MATLAB"] },
        { name: "AI & ML Frameworks", items: ["PyTorch", "TensorFlow", "Scikit-learn", "LangChain", "LlamaIndex"] },
        { name: "Cloud, AI Platforms & Tools", items: ["Azure AI", "Azure OpenAI", "GitHub", "Docker", "Travis CI"] },
        { name: "Web Development", items: ["HTML", "CSS", "JavaScript"] }
      ]
    },
    experience: {
      title: "Experience",
      entries: [
        {
          role: "Postdoctoral Researcher",
          org: "National Taiwan University, Graduate Institute of Biomedical Electronics and Bioinformatics",
          period: "Dec 2025 – Present",
          location: "Taipei, Taiwan",
          bullets: [
            "Continuing research in medical imaging AI and multimodal deep learning at the Graduate Institute of Biomedical Electronics and Bioinformatics, National Taiwan University."
          ]
        },
        {
          role: "AI Lecturer",
          org: "Multiple Universities, Government Agencies & Enterprises",
          period: "Sep 2019 – Present",
          location: "Taiwan",
          bullets: [
            "Taught Python, machine learning, deep learning, and generative AI / RAG courses across academic, government, and corporate settings, including National Taiwan University, National Ilan University, and the Ministry of Digital Affairs.",
            "Delivered enterprise training in data science and applied AI for organizations such as Cathay Life Insurance and the Ministry of Labor.",
            "Served as an overseas instructor for the ICT and Public Security Enhancement Project in Saint Vincent and the Grenadines."
          ]
        },
        {
          role: "Research Intern",
          org: "National Agricultural Library, USDA",
          period: "Aug 2019 – Aug 2020 & Feb 2021 – Jul 2021",
          location: "Beltsville, MD, USA",
          bullets: [
            "Applied computational linguistics algorithms to extract insights from biological texts.",
            "Built named entity recognition (NER) models to tag gene and species names in abstracts.",
            "Migrated and maintained Python-based applications, including coordinate conversion tools, GFF3toolkit, and remap-gff3."
          ]
        },
        {
          role: "Research Assistant",
          org: "Graduate Institute of Computer Science and Information Engineering, National Taiwan University",
          period: "Jun 2018 – Jul 2019",
          location: "Taipei, Taiwan",
          bullets: [
            "Maintained tumor detection systems using deep learning for fully automated breast ultrasound.",
            "Conducted research in computer-aided detection (CAD) for whole breast ultrasound images."
          ]
        },
        {
          role: "Project Manager",
          org: "Taipei Medical University — Ministry of Science and Technology Project (MOST106-2634-F-038-002)",
          period: "Mar 2018 – Apr 2018",
          location: "Taipei, Taiwan",
          bullets: [
            "Developed customized AI and deep learning solutions for clinical medical imaging research.",
            "Established computing infrastructure and led data collection and annotation for medical images."
          ]
        },
        {
          role: "Research Assistant",
          org: "Graduate Institute of Biomedical Informatics, Taipei Medical University",
          period: "Sep 2017 – Feb 2018",
          location: "Taipei, Taiwan",
          bullets: [
            "Developed an automated system to quantify vena contracta width (VCW) for mitral regurgitation severity assessment using MATLAB and C#.",
            "Participated in multiple Ministry of Science and Technology–funded AI research projects, including gait-based diagnosis for neurodegenerative diseases, EMG-based grading of rotator cuff tendinopathy, and multimodal AI models for early detection of elderly neurological conditions."
          ]
        },
        {
          role: "Machine Learning Mentor",
          org: "WeHelp Academy",
          period: "2025 – Present",
          location: "Taiwan (Remote)",
          bullets: [
            "Supported three cohorts in the deep learning track of a 26-week, three-stage intensive career-transition program, assisting students from neural network fundamentals through to independent capstone projects.",
            "Provided one-on-one technical guidance to students on Discord throughout each cohort, maintaining a two-day response commitment.",
            "Delivered three technical talks on applied deep learning: integrating AI into research workflows, improving model accuracy for custom object classification, and an end-to-end PyTorch walkthrough of an image-classification training pipeline (covering data loading, CNN forward pass, loss computation, backpropagation, optimizers, augmentation, transfer learning, and common evaluation pitfalls)."
          ]
        },
        {
          role: "Teaching Assistant",
          org: "TibaMe (Wistron Group)",
          period: "2022 – Present",
          location: "Taiwan",
          bullets: [
            "Supported 27 cohorts (2nd–28th) of the AI Medical Image Analysis program, an 8-week live-instruction course covering Python, OpenCV, CNN/RNN, YOLOv4, semantic segmentation, DICOM handling, and 3D medical image analysis.",
            "Supported 30 cohorts (11th–40th) of the AI Data Scientist program, an 18-week curriculum, assisting on the autonomous-driving and tumor tissue image recognition project modules.",
            "Answered student questions in course discussion forums and provided assignment feedback across 57 cohorts in total."
          ]
        }
      ]
    },
    teaching: {
      title: "Teaching",
      intro: "Selected teaching engagements across academia, government, and industry since 2019.",
      items: [
        { org: "全域科技有限公司 (GlobalTek Technology)", detail: "Lecturer" },
        { org: "National Taiwan University, Information Systems Training Program", detail: "Lecturer for Python, Machine Learning, and Generative AI courses" },
        { org: "Ministry of Digital Affairs", detail: "Instructor for Machine Learning, Generative AI, and RAG applications" },
        { org: "National Ilan University", detail: "Lecturer, Generative AI Course Series" },
        { org: "Certiport", detail: "Traditional Chinese Localization Reviewer, Generative AI Foundations (CCS) Certification" },
        { org: "Saint Vincent and the Grenadines — National ICT and Public Security Enhancement Project", detail: "Distinguished Overseas Lecturer" },
        { org: "Cathay Life Insurance", detail: "Corporate Instructor, Python Data Science Training Program" },
        { org: "AITEC Academy", detail: "Industry Instructor for Python, Computer Vision, and Machine Learning" },
        { org: "University of Taipei", detail: "Instructor, Business Cloud App Inventor Course" },
        { org: "Taipei City University of Science and Technology", detail: "Instructor, Business Cloud App Inventor Course" },
        { org: "AIGO Coach Alliance", detail: "Seed Instructor Training Program Lecturer" },
        { org: "NVIDIA", detail: "Deep Learning Instructor Training Program Trainee" },
        { org: "Chinese Enterprise Resource Planning Society", detail: "Instructor Training — Business Cloud App Developer & Business Data Application Specialist Certification" },
        { org: "Ministry of Labor", detail: "Instructor, Practical Data Analysis and Machine Learning Training Program" }
      ]
    },
    projects: {
      title: "Projects",
      cards: [
        {
          name: "GFF3toolkit",
          desc: "Contributed as the 4th-ranked contributor (48 commits) to USDA National Agricultural Library's open-source toolkit for processing GFF3 genome annotation files.",
          tags: ["Python", "Bioinformatics"],
          linkLabel: "View on GitHub",
          linkUrl: "https://github.com/NAL-i5K/GFF3toolkit"
        },
        {
          name: "coordinates_conversion",
          desc: "Contributed as the 3rd-ranked contributor to USDA NAL's tool for translating sequence IDs and genomic coordinates across file formats (GFF3, BAM, BED, Biograph).",
          tags: ["Python", "Genomics"],
          linkLabel: "View on GitHub",
          linkUrl: "https://github.com/NAL-i5K/coordinates_conversion"
        },
        {
          name: "PBCS-ConvNeXt",
          desc: "A ConvNeXt-based deep learning model for automatic diagnosis of non-alcoholic fatty liver disease in abdominal ultrasound images, published in a Q1 journal (2025).",
          tags: ["Deep Learning", "Medical Imaging", "PyTorch"],
          linkLabel: "View on Google Scholar",
          linkUrl: "https://scholar.google.com/scholar?q=PBCS-ConvNeXt"
        },
        {
          name: "NER for Biological Text",
          desc: "A spaCy-based named entity recognition system for tagging gene and species names in biological abstracts.",
          tags: ["NLP", "spaCy"],
          linkLabel: "View on GitHub",
          linkUrl: "https://github.com/ShangYuChiang/NER"
        },
      ]
    },
    publications: {
      title: "Publications",
      journalHeading: "Journal Articles",
      journals: [
        { badge: "Q1", citation: "Wang, Y. W., Huang, T. C., <strong>Chiang, S. Y.</strong>, Chen, Y. J., Chang, P. Y., & Chang, R. F. (2026). Dual-Phase Computed Tomography-Based Deep Learning Architecture for Three-Year Survival Prediction in Hepatocellular Carcinoma. Journal of Imaging Informatics in Medicine, 1-13." },
        { badge: "Q1", citation: "<strong>Chiang, S. Y.</strong>, Wang, Y. W., Su, P. Y., Chang, Y. Y., Yen, H. H., & Chang, R. F. (2025). PBCS-ConvNeXt: Convolutional Network-Based Automatic Diagnosis of Non-alcoholic Fatty Liver in Abdominal Ultrasound Images. Journal of Imaging Informatics in Medicine, 1-16" },
        { badge: "Q2", citation: "Juan, C. J., Wang, C. S., Lee, B. Y., <strong>Chiang, S. Y.</strong>, Yeh, C. C., Cho, D. Y., & Shen, W. C. (2021). Integration of genetic programming and tabu search mechanism for automatic detection of magnetic resonance imaging in cervical spondylosis" },
        { badge: "Q1", citation: "Feng, P. H., Chen, T. T., Lin, Y. T., <strong>Chiang, S. Y.</strong>, & Lo, C. M. (2018). Classification of lung cancer subtypes based on autofluorescence bronchoscopic pattern recognition: A preliminary study. Computer Methods and Programs in Biomedicine, 163, 33-38." }
      ],
      confHeading: "Conference Papers",
      conferences: [
        { badge: "Best Paper", venue: "The 4th Multidisciplinary International Social Network Conference (July 2017, Bangkok, Thailand)", titleText: "Prediction Model of Cervical Spine Disease Established by Genetic Programming" },
        { badge: "Best Paper", venue: "Symposium on Engineering, Medicine, and Biology Applications (Feb 2018, Taipei, Taiwan)", titleText: "Radiomic MRI T1WI Features used in Predicting Gene Mutations in Brain Tumors" },
        { badge: "", venue: "ICU 2018: 20th International Conference on Ultrasonic (Mar 2018, Singapore)", titleText: "Quantitative Evaluation of Mitral Regurgitation by using Color Doppler Ultrasound" },
        { badge: "", venue: "The 12th Asian-Oceanian Congress of Neuroradiology (Mar 2018, Taipei, Taiwan)", titleText: "Integrate Genetic Programming with TABU Search to Establish a Prediction Model of Cervical Spine Disease" }
      ]
    },
    awards: {
      title: "Awards",
      competitionHeading: "Competitions",
      competitions: [
        "Doctoral Thesis Merit Award — The 18th TSC Thesis Award: AI Application Competition (2025)",
        "Finalist — Taoyuan Startup Challenge x Chuang Tian Xia Competition (2025)",
        "Finalist — Taiwan Highway Bureau Innovation Data Application Challenge (2025)",
        "Finalist — AI Junior Award (2024)",
        "Honorable Mention — Smart+ Data Innovation Competition (2023)"
      ],
      certHeading: "Certifications",
      certs: [
        { org: "Certiport – App Development with Swift", names: "Swift Certified User, Swift Certified Associate" },
        { org: "Certiport – Critical Career Skills", names: "Generative AI Foundations" },
        { org: "Cisco Certified Support Technician", names: "Networking" },
        { org: "ITS (Information Technology Specialist)", names: "Python Programming, Artificial Intelligence, Data Analytics" },
        { org: "Microsoft", names: "Querying Microsoft SQL Server 2012, Programming in HTML5 with JavaScript and CSS3" },
        { org: "TQC+", names: "Mobile Device Application Design (Pro)" }
      ]
    },
    contact: {
      title: "Get in Touch",
      text: "I'm always open to conversations about medical imaging AI, LLM/RAG applications, or teaching collaborations — feel free to get in touch."
    },
    footer: "© 2026 Shang-Yu Chiang · Built with plain HTML/CSS/JS"
  },
  zh: {
    nav: { about: "關於我", education: "學歷", skills: "技能", experience: "經歷", teaching: "教學",
           projects: "專案", publications: "著作", awards: "獲獎", contact: "聯絡" },
    ui: {
      detailsExpand: "詳細內容 ▾",
      detailsCollapse: "詳細內容 ▴",
      print: "列印 / 儲存為 PDF",
      backToTop: "回到頂部"
    },
    hero: {
      name: "江尚瑀",
      nameAlt: "Shang-Yu Chiang",
      tagline: "AI 研究者・講師 — 醫學影像模型開發 · 程式設計與生成式AI教學",
      desc: "國立臺灣大學生醫電子與資訊學研究所 博士",
      roles: ["醫學影像 AI 研究者", "LLM 與 RAG 工程師", "深度學習實務者", "AI 講師與講者"]
    },
    stats: {
      title: "數字實績",
      items: [
        { key: "publications", label: "學術著作", suffix: "" },
        { key: "teaching", label: "教學場次", suffix: "+" },
        { key: "awards", label: "競賽獲獎", suffix: "" },
        { key: "years", label: "教學年資", suffix: "+" }
      ]
    },
    about: {
      title: "關於我",
      paragraphs: [
        "江尚瑀擁有國立臺灣大學生醫電子與資訊學研究所博士學位，投入醫學影像人工智慧研究近十餘年，研究範疇涵蓋電腦輔助偵測系統到深度學習診斷模型，並在多本同儕審查期刊（包含數篇Q1等級）發表研究成果",
        "自2019年起橫跨大學、政府機關與產業界擔任人工智慧講師，教授機器學習、生成式人工智慧與應用AI課程。目前研究聚焦於大型語言模型、檢索增強生成（RAG）與多模態人工智慧"
      ]
    },
    education: {
      title: "學歷",
      // thesis = 該學位的畢業論文題目（留空字串就不顯示這一行）。
      // items = 該學位期間的研究成果（計畫／論文／獲獎）。留空陣列 [] 就不顯示。
      // 每筆 items 可選填 tag（Q1 / Q2 / 最佳論文 等），會顯示成標籤。
      thesisLabel: "畢業論文：",
      entries: [
        {
          degree: "博士",
          org: "國立臺灣大學",
          dept: "生醫電子與資訊學研究所",
          period: "2018年9月 – 2025年8月",
          thesis: "基於腹部超音波影像之非酒精性肝病從脂肪肝至肝纖維化的階段性診斷",
          items: [
            { tag: "Q2", text: "Juan, C. J., Wang, C. S., Lee, B. Y., Chiang, S. Y., Yeh, C. C., Cho, D. Y., &amp; Shen, W. C. (2021). Integration of genetic programming and tabu search mechanism for automatic detection of magnetic resonance imaging in cervical spondylosis" },
            { tag: "Q1", text: "Chiang, S. Y., Wang, Y. W., Su, P. Y., Chang, Y. Y., Yen, H. H., &amp; Chang, R. F. (2025). PBCS-ConvNeXt: Convolutional Network-Based Automatic Diagnosis of Non-alcoholic Fatty Liver in Abdominal Ultrasound Images. Journal of Imaging Informatics in Medicine, 1-16" }
          ]
        },
        {
          degree: "碩士",
          org: "國立臺北科技大學",
          dept: "資訊與財金管理研究所",
          period: "2015年8月 – 2017年6月",
          thesis: "結合基因規劃法與禁忌搜尋法建立頸椎疾病預測模型",
          items: [
            { tag: "最佳論文", text: "The 4th Multidisciplinary International Social Network Conference — Prediction Model of Cervical Spine Disease Established by Genetic Programming" },
            { tag: "", text: "The 12th Asian-Oceanian Congress of Neuroradiology — Integrate Genetic Programming with TABU Search to Establish a Prediction Model of Cervical Spine Disease" }
          ]
        },
        {
          degree: "學士",
          org: "銘傳大學",
          dept: "醫療資訊與管理學系",
          period: "2011年9月 – 2015年6月",
          thesis: "",
          items: [
            { tag: "", text: "科技部大專學生研究計畫　MOST 103-2815-C-130-108-E" }
          ]
        }
      ]
    },
    skills: {
      title: "技能",
      groups: [
        { name: "研究領域", items: [
          "人工智慧、機器學習、深度學習與生成式人工智慧",
          "醫學影像處理、電腦輔助診斷、自然語言處理與大型語言模型",
          "檢索增強生成（RAG）、知識庫問答系統與多模態／跨模態學習"
        ] },
        { name: "程式語言", items: ["Python", "C#", "C/C++", "R", "MATLAB"] },
        { name: "AI／機器學習框架", items: ["PyTorch", "TensorFlow", "Scikit-learn", "LangChain", "LlamaIndex"] },
        { name: "雲端平台與工具", items: ["Azure AI", "Azure OpenAI", "GitHub", "Docker", "Travis CI"] },
        { name: "網頁開發", items: ["HTML", "CSS", "JavaScript"] }
      ]
    },
    experience: {
      title: "經歷",
      entries: [
        {
          role: "博士後研究員",
          org: "國立臺灣大學生醫電子與資訊學研究所",
          period: "2025年12月 – 至今",
          location: "台灣台北",
          bullets: [
            "於國立臺灣大學生醫電子與資訊學研究所持續進行醫學影像人工智慧與多模態深度學習研究"
          ]
        },
        {
          role: "人工智慧講師",
          org: "多所大學、政府機關與企業",
          period: "2019年9月 – 至今",
          location: "台灣",
          bullets: [
            "於學術、政府與企業等場域教授Python、機器學習、深度學習與生成式AI／RAG課程，合作單位包括國立臺灣大學、國立宜蘭大學與數位發展部",
            "為國泰人壽、勞動部等機構提供資料科學與應用AI企業內訓課程",
            "擔任聖文森及格瑞納丁國家ICT與公共安全強化專案海外講師"
          ]
        },
        {
          role: "實習研究員",
          org: "美國農業部（USDA）國家農業圖書館",
          period: "2019年8月 – 2020年8月、2021年2月 – 2021年7月",
          location: "美國馬里蘭州貝爾茨維爾",
          bullets: [
            "運用計算語言學演算法，從生物學文本中萃取關鍵資訊",
            "建構命名實體辨識（NER）模型，用於標記摘要中的基因與物種名稱",
            "移植並維護多項Python應用程式，包括座標轉換工具、GFF3toolkit與remap-gff3"
          ]
        },
        {
          role: "碩士級研究助理",
          org: "國立臺灣大學資訊工程學研究所",
          period: "2018年6月 – 2019年7月",
          location: "台灣台北",
          bullets: [
            "維護以深度學習為基礎的全自動乳房超音波腫瘤偵測系統",
            "進行全乳房超音波影像電腦輔助偵測（CAD）相關研究"
          ]
        },
        {
          role: "專案計畫經理",
          org: "臺北醫學大學－科技部專案計畫（MOST106-2634-F-038-002）",
          period: "2018年3月 – 2018年4月",
          location: "台灣台北",
          bullets: [
            "為臨床醫學影像研究開發客製化人工智慧與深度學習解決方案",
            "建置運算基礎設施，並主導醫學影像資料蒐集與標註工作"
          ]
        },
        {
          role: "碩士級研究助理",
          org: "臺北醫學大學生物醫學資訊研究所",
          period: "2017年9月 – 2018年2月",
          location: "台灣台北",
          bullets: [
            "使用MATLAB與C#開發自動化系統，量化二尖瓣閉鎖不全嚴重程度評估中的縮流頸寬度（VCW）",
            "參與多項科技部（現國科會）資助之人工智慧研究計畫，包括基於步態分析的神經退化性疾病智慧診斷系統、以即時肌電圖進行旋轉肌袖肌腱病變分級，以及用於早期偵測高齡神經系統疾病的多模態人工智慧模型"
          ]
        },
        {
          role: "機器學習導師",
          org: "WeHelp Academy",
          period: "2025年 – 至今",
          location: "台灣（遠距）",
          bullets: [
            "擔任深度學習領域導師，協助三屆轉職學員完成為期 26 週、分三階段的密集訓練，從神經網路基礎到個人專題實作",
            "於 Discord 社群提供一對一技術答疑，維持兩個工作日內回覆學員提問",
            "主講三場技術分享：研究中導入 AI 的實務作法、自定義物件分類的建模準度優化，以及以 PyTorch 拆解影像辨識模型的完整訓練流程（涵蓋資料處理與批次載入、CNN 前向傳播、損失函數、反向傳播與梯度更新、Optimizer、資料增強與預訓練權重，以及模型評估的常見判讀偏誤）"
          ]
        },
        {
          role: "助教",
          org: "緯育TibaMe",
          period: "2022年 – 至今",
          location: "台灣",
          bullets: [
            "擔任「AI 醫學影像分析學程」第 2–28 期助教（共 27 期），課程為期 8 週，涵蓋 Python、OpenCV、CNN/RNN、YOLOv4、語意切割、DICOM 與 3D 醫學影像分析",
            "擔任「AI 資料科學家學程」第 11–40 期助教（共 30 期），課程為期 18 週，負責「自駕車應用」與「辨識腫瘤組織影像」兩個實作專題",
            "於課程討論區回覆學員提問並提供作業回饋，累計協助 57 期學員"
          ]
        }
      ]
    },
    teaching: {
      title: "教學",
      intro: "自2019年起橫跨學術界、政府機關與產業界的教學經歷精選",
      items: [
        { org: "全域科技有限公司", detail: "講師" },
        { org: "國立臺灣大學 資工訓練班", detail: "Python、機器學習與生成式人工智慧課程講師" },
        { org: "數位發展部", detail: "機器學習與生成式人工智慧、RAG 應用講師" },
        { org: "國立宜蘭大學", detail: "生成式人工智慧系列課程講師" },
        { org: "Certiport", detail: "生成式人工智慧證照（CCS）中文化審稿委員" },
        { org: "聖文森及格瑞納丁國家 ICT 與公共安全強化專案", detail: "特聘海外講師" },
        { org: "國泰人壽", detail: "企業內訓 Python Data Science 課程企業講師" },
        { org: "艾鍗科技有限公司", detail: "業界講師，教授 Python、電腦視覺與機器學習" },
        { org: "臺北市立大學", detail: "商用雲端 App Inventor 課程講師" },
        { org: "臺北城市科技大學", detail: "商用雲端 App Inventor 課程講師" },
        { org: "AIGO 教練聯盟", detail: "種子師資培訓講師" },
        { org: "NVIDIA", detail: "Deep Learning 師資培訓學員" },
        { org: "中華企業資源規劃學會", detail: "商用雲端 APP 軟體設計師、商用數據應用師 師資培訓" },
        { org: "勞動部", detail: "實務型資料分析與機器學習訓練計畫講師工作" }
      ]
    },
    projects: {
      title: "專案",
      cards: [
        {
          name: "GFF3toolkit",
          desc: "以第4大貢獻者身分（48次commits）參與美國農業部國家農業圖書館（USDA NAL）開源工具開發，用於處理GFF3基因體註解檔案",
          tags: ["Python", "生物資訊"],
          linkLabel: "查看 GitHub",
          linkUrl: "https://github.com/NAL-i5K/GFF3toolkit"
        },
        {
          name: "coordinates_conversion",
          desc: "以第3大貢獻者身分參與USDA NAL工具開發，用於在GFF3、BAM、BED、Biograph等檔案格式間轉換序列ID與基因體座標",
          tags: ["Python", "基因體學"],
          linkLabel: "查看 GitHub",
          linkUrl: "https://github.com/NAL-i5K/coordinates_conversion"
        },
        {
          name: "PBCS-ConvNeXt",
          desc: "以ConvNeXt為基礎的深度學習模型，用於腹部超音波影像中非酒精性脂肪肝之自動診斷，研究成果發表於2025年Q1期刊",
          tags: ["深度學習", "醫學影像", "PyTorch"],
          linkLabel: "在 Google Scholar 查看",
          linkUrl: "https://scholar.google.com/scholar?q=PBCS-ConvNeXt"
        },
        {
          name: "生物文本命名實體辨識（NER）",
          desc: "以spaCy建構的命名實體辨識系統，用於標記生物學摘要中的基因與物種名稱",
          tags: ["自然語言處理", "spaCy"],
          linkLabel: "查看 GitHub",
          linkUrl: "https://github.com/ShangYuChiang/NER"
        },
      ]
    },
    publications: {
      title: "著作",
      journalHeading: "期刊論文",
      journals: [
        { badge: "Q1", citation: "Wang, Y. W., Huang, T. C., <strong>Chiang, S. Y.</strong>, Chen, Y. J., Chang, P. Y., & Chang, R. F. (2026). Dual-Phase Computed Tomography-Based Deep Learning Architecture for Three-Year Survival Prediction in Hepatocellular Carcinoma. Journal of Imaging Informatics in Medicine, 1-13." },
        { badge: "Q1", citation: "<strong>Chiang, S. Y.</strong>, Wang, Y. W., Su, P. Y., Chang, Y. Y., Yen, H. H., & Chang, R. F. (2025). PBCS-ConvNeXt: Convolutional Network-Based Automatic Diagnosis of Non-alcoholic Fatty Liver in Abdominal Ultrasound Images. Journal of Imaging Informatics in Medicine, 1-16" },
        { badge: "Q2", citation: "Juan, C. J., Wang, C. S., Lee, B. Y., <strong>Chiang, S. Y.</strong>, Yeh, C. C., Cho, D. Y., & Shen, W. C. (2021). Integration of genetic programming and tabu search mechanism for automatic detection of magnetic resonance imaging in cervical spondylosis" },
        { badge: "Q1", citation: "Feng, P. H., Chen, T. T., Lin, Y. T., <strong>Chiang, S. Y.</strong>, & Lo, C. M. (2018). Classification of lung cancer subtypes based on autofluorescence bronchoscopic pattern recognition: A preliminary study. Computer Methods and Programs in Biomedicine, 163, 33-38." }
      ],
      confHeading: "研討會論文",
      conferences: [
        { badge: "Best Paper", venue: "The 4th Multidisciplinary International Social Network Conference (July 2017, Bangkok, Thailand)", titleText: "Prediction Model of Cervical Spine Disease Established by Genetic Programming" },
        { badge: "Best Paper", venue: "Symposium on Engineering, Medicine, and Biology Applications (Feb 2018, Taipei, Taiwan)", titleText: "Radiomic MRI T1WI Features used in Predicting Gene Mutations in Brain Tumors" },
        { badge: "", venue: "ICU 2018: 20th International Conference on Ultrasonic (Mar 2018, Singapore)", titleText: "Quantitative Evaluation of Mitral Regurgitation by using Color Doppler Ultrasound" },
        { badge: "", venue: "The 12th Asian-Oceanian Congress of Neuroradiology (Mar 2018, Taipei, Taiwan)", titleText: "Integrate Genetic Programming with TABU Search to Establish a Prediction Model of Cervical Spine Disease" }
      ]
    },
    awards: {
      title: "獲獎",
      competitionHeading: "競賽",
      competitions: [
        "博士佳作論文獎－第18屆崇越論文大賞：AI應用論文競賽（2025）",
        "入圍決賽－2025桃園新創之星 x 創天下競賽",
        "入圍決賽－2025公路局資料創新應用競賽",
        "入圍決賽－2024 AI Junior Award",
        "佳作－2023數創大賽智慧+組"
      ],
      certHeading: "證照",
      certs: [
        { org: "Certiport – App Development with Swift", names: "Swift Certified User, Swift Certified Associate" },
        { org: "Certiport – Critical Career Skills", names: "Generative AI Foundations" },
        { org: "Cisco Certified Support Technician", names: "Networking" },
        { org: "ITS (Information Technology Specialist)", names: "Python Programming, Artificial Intelligence, Data Analytics" },
        { org: "Microsoft", names: "Querying Microsoft SQL Server 2012, Programming in HTML5 with JavaScript and CSS3" },
        { org: "TQC+", names: "Mobile Device Application Design (Pro)" }
      ]
    },
    contact: {
      title: "聯絡我",
      text: "無論是醫學影像AI、LLM／RAG應用，或教學合作，都歡迎與我聯繫交流"
    },
    footer: "© 2026 江尚瑀 · 純 HTML/CSS/JS 手工打造"
  }
};
