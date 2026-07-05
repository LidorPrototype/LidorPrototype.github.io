/* Portfolio content. Edit this object to add or change projects. */
window.PORTFOLIO_DATA = {
  "profile": {
    "name": "Lidor Eliyahu Shelef",
    "tagline": "Senior Software Engineer",
    "background": "images/bg-front.jpg",
    "backgroundPanels": "images/bg.jpg",
    "links": {
      "linkedin": "https://www.linkedin.com/in/lidor-e-s/",
      "github": "https://github.com/LidorPrototype",
      "medium": "https://medium.com/@lidores98",
      "stackoverflow": "https://stackoverflow.com/users/8405296/lidor-eliyahu-shelef",
      "googleplay": "https://play.google.com/store/apps/dev?id=6589420104492859272&hl=en&gl=US",
      "instagram": "https://www.instagram.com/lidoreliyahu/",
      "facebook": "https://en-gb.facebook.com/ivanlidor",
      "emailUser": "ivanlidor98",
      "emailDomain": "gmail.com"
    }
  },
  "categories": ["Python", "Java", "C/C++", "OS", "Web", "Mobile", "Games"],
  "projects": [
    {
      "title": "TableNet — Table to DataFrame",
      "category": "Python",
      "featured": true,
      "image": "images/tablenet.gif",
      "stack": ["Python", "PyTorch", "OpenCV", "OCR", "Deep Learning"],
      "status": "",
      "description": "Implementation of the TableNet model in PyTorch: detect tables inside document images, crop them, repair the gridlines, then extract the tabular data with pytesseract into a clean DataFrame.",
      "links": {
        "code": "https://github.com/LidorPrototype/TableNetTable2df",
        "articles": [
          { "label": "Table Detection & Extraction — TableNet with PyTorch", "url": "https://medium.com/@lidores98/table-detection-and-extraction-tablenet-deep-learning-model-with-pytorch-from-images-64489e92b641" },
          { "label": "Perfecting Imperfect Table Gridlines (OpenCV)", "url": "https://medium.com/@lidores98/perfecting-imperfect-table-gridlines-a-step-by-step-guide-using-python-opencv-9831cc11e5ee" },
          { "label": "Image Table to DataFrame using Python OCR", "url": "https://medium.com/@lidores98/image-table-to-dataframe-using-python-ocr-773c8afb713d" }
        ]
      }
    },
    {
      "title": "AutoScraper",
      "category": "Python",
      "featured": true,
      "image": "images/autoscraper1.png",
      "stack": ["Python", "FastAPI", "Streamlit", "Scrapy", "BeautifulSoup", "Azure", "Airflow"],
      "status": "",
      "description": "Automated web-scraping platform for collecting ML/DL training data. Two versions (Streamlit and FastAPI): similarity-based scraping, API downloads, query-driven scraping, PDF parsing, plus management services — email, Azure Data Lake tables, and Airflow DAG generation.",
      "links": {
        "code": "https://github.com/LidorPrototype/AutoScraper"
      }
    },
    {
      "title": "Chess Engine",
      "category": "Java",
      "featured": true,
      "image": "images/chess.jpeg",
      "stack": ["Java", "Algorithms", "Game"],
      "status": "",
      "description": "A graphical chess engine — you versus the computer. Uses alpha-beta pruning to speed up the move search and improve play strength.",
      "links": {
        "code": "https://github.com/LidorPrototype/ChessGameIssue1"
      }
    },
    {
      "title": "HTTP Server & Thread-pool",
      "category": "C/C++",
      "featured": true,
      "image": "images/http-server.jpg",
      "stack": ["C", "Networking", "Concurrency", "Sockets"],
      "status": "",
      "description": "A multithreaded HTTP server that builds responses from client requests. Threads are pre-allocated into a pool; each connection is handled by a pooled thread or queued when the pool is exhausted.",
      "links": {
        "code": "https://github.com/LidorPrototype/HTTP/tree/master/HTTP-Server"
      }
    },
    {
      "title": "Bag of Projects",
      "category": "Python",
      "featured": false,
      "image": "images/bagofprojects.gif",
      "stack": ["Python", "Machine Learning", "Deep Learning", "Data Analysis"],
      "status": "",
      "description": "A collection of Machine Learning, Deep Learning and Data Analysis projects, each demonstrating a different algorithm or technique. Finalized projects include an \"Algorithm Brief\" explaining the approach used.",
      "links": {
        "code": "https://github.com/LidorPrototype/Bag-of-Projects"
      }
    },
    {
      "title": "Text Summarization",
      "category": "Python",
      "featured": false,
      "image": "images/textsummarizations.jpg",
      "stack": ["Python", "NLP", "Transformers", "spaCy", "NLTK"],
      "status": "",
      "description": "Five approaches to extractive and abstractive text summarization: NLTK + networkx, NLTK + heapq, spaCy + pytextrank, Hugging Face transformers, and an abstractive model built from scratch with an attention mechanism and coverage vector.",
      "links": {
        "code": "https://github.com/LidorPrototype/TextSummarization",
        "articles": [
          { "label": "Text Summarization Part 1 — Extractive", "url": "https://medium.com/@lidores98/text-summarization-part-1-extractive-abstractive-library-c840b281ee4" },
          { "label": "Text Summarization Part 2 — Abstractive", "url": "https://medium.com/@lidores98/text-summarization-part-2-abstractive-9ee358fbbb11" }
        ]
      }
    },
    {
      "title": "Chatbot & Virtual Assistant",
      "category": "Python",
      "featured": false,
      "image": "images/chatbot-va-black.png",
      "stack": ["Python", "NLP"],
      "status": "",
      "description": "A collection of chatbot and virtual-assistant implementations in Python. Chatbots follow scripted conversation flows; the virtual assistants crawl existing resources to handle a broader range of requests.",
      "links": {
        "code": "https://github.com/LidorPrototype/Chatbot-Virtual-Assistant"
      }
    },
    {
      "title": "Web Scrapers",
      "category": "Python",
      "featured": false,
      "image": "images/web_scrapers.png",
      "stack": ["Python", "BeautifulSoup", "Selenium", "Scrapy"],
      "status": "",
      "description": "A set of web scrapers targeting different sites (Gov.il, Amazon, Twitter, IMDb and more). Each works differently — some take user input or limits — built with BeautifulSoup, Selenium, Scrapy, requests and more.",
      "links": {
        "code": "https://github.com/LidorPrototype/Web-Scrapers",
        "extra": [
          { "label": "Selenium scraper", "url": "https://github.com/LidorPrototype/Web-Scrapers/tree/main/Selenium%20Scraper" }
        ]
      }
    },
    {
      "title": "Generic Hash Table",
      "category": "C/C++",
      "featured": false,
      "image": "images/GenericHashTable.png",
      "stack": ["C", "Data Structures"],
      "status": "",
      "description": "A hash table supporting add, remove and search. Implemented as an array of pointers to linked lists (separate chaining), handling both integer and string keys.",
      "links": {
        "code": "https://github.com/LidorPrototype/GenericHashtable"
      }
    },
    {
      "title": "HTTP Client",
      "category": "C/C++",
      "featured": false,
      "image": "images/http-client-transparent.png",
      "stack": ["C", "Networking", "Sockets"],
      "status": "",
      "description": "An HTTP client that builds a request from command-line input, sends it to a web server over IPv4, receives the reply and prints it to screen.",
      "links": {
        "code": "https://github.com/LidorPrototype/HTTP/tree/master/HTTP-Client"
      }
    },
    {
      "title": "Disk Memory Management",
      "category": "OS",
      "featured": false,
      "image": "images/inode1.GIF",
      "stack": ["C", "Operating Systems", "Systems"],
      "status": "",
      "description": "A simulation of disk memory management — creating, opening, reading, writing and deleting files. Each file has an inode structure pointing to its data blocks on disk.",
      "links": {
        "code": "https://github.com/LidorPrototype/Disk-Memory-Managment"
      }
    },
    {
      "title": "PasswordKit",
      "category": "Mobile",
      "featured": false,
      "image": "images/passwordkit.png",
      "stack": ["Java", "Android", "SQLite", "Cryptography"],
      "status": "shipped",
      "description": "An Android password manager in Java. Stores credentials, generates passwords and backs up to Google Drive. Data is encrypted with a custom algorithm layered over SHA-1/SHA-256, then stored locally via SharedPreferences and SQLite.",
      "links": {
        "code": "",
        "playstore": "https://play.google.com/store/apps/details?id=com.LnY.passwordkit"
      }
    },
    {
      "title": "Stickr",
      "category": "Mobile",
      "featured": false,
      "image": "images/Stickr.png",
      "stack": ["Java", "Android", "Firebase"],
      "status": "shipped",
      "description": "A WhatsApp sticker app in Java (sticker design by Kiril G.). Hebrew sticker packs, ad-supported, with Firebase-driven stats (release date, likes, downloads), featured-pack selection and update prompts.",
      "links": {
        "code": "https://github.com/LidorPrototype/Stickr",
        "playstore": "https://play.google.com/store/apps/details?id=com.l_es.kiril_stickers"
      }
    },
    {
      "title": "Community Recipes",
      "category": "Mobile",
      "featured": false,
      "image": "images/CommunityRecipes.png",
      "stack": ["Java", "Android", "Firebase"],
      "status": "",
      "description": "An Android recipe-sharing app in Java using Services, BroadcastReceivers, Firebase, SharedPreferences, Notifications and the Camera. Everyone can view, share and like recipes — the community grows the content.",
      "links": {
        "code": "https://github.com/LidorPrototype/CommunityRecipes"
      }
    },
    {
      "title": "Musician Finder",
      "category": "Mobile",
      "featured": false,
      "image": "images/MusicianFinder.png",
      "stack": ["Java", "Android", "Firebase"],
      "status": "team",
      "role": "Built as a team; worked on Firebase auth and the real-time database.",
      "description": "An Android app helping musicians and bands find each other. Users chat, post and connect with others in their area. Built with a team, making heavy use of Firebase authentication and real-time database.",
      "links": {
        "code": "https://github.com/LidorPrototype/MusicianFinder"
      }
    },
    {
      "title": "Sol Abs",
      "category": "Mobile",
      "featured": false,
      "image": "images/sol_abs_logo.jpeg",
      "stack": ["Flutter", "Dart", "Android", "iOS"],
      "status": "closed-source",
      "description": "A workout & fitness app for Android and iOS, built for trainers and their trainees. Free and signed users can create and play workouts; signed users get trainer-assigned menus and a progress/measurements screen.",
      "links": {}
    },
    {
      "title": "YANA",
      "category": "Mobile",
      "featured": false,
      "image": "images/yana-.jpg",
      "stack": ["Flutter", "Dart"],
      "status": "team",
      "role": "Built with a team as a social initiative project.",
      "description": "YANA (You Are Not Alone) is a social initiative against loneliness among young adults, helping people build new social circles in safe spaces. Built with friends as a team.",
      "links": {
        "code": "https://github.com/yanngan/YANA",
        "extra": [
          { "label": "Project Wiki", "url": "https://github.com/yanngan/YANA/wiki" }
        ]
      }
    },
    {
      "title": "AllCalculator",
      "category": "Mobile",
      "featured": false,
      "image": "images/AllCalculator.png",
      "stack": ["Flutter", "Dart", "Android"],
      "status": "shipped",
      "description": "A Flutter calculator with three modes: a scientific calculator, a tip & bill calculator, and a currency converter unlocked permanently for donators.",
      "links": {
        "code": "https://github.com/LidorPrototype/All-Calculator",
        "playstore": "https://play.google.com/store/apps/details?id=com.lidorfirstflutter.tip_calculator_flutter"
      }
    },
    {
      "title": "Snake Games Collection",
      "category": "Games",
      "featured": false,
      "image": "images/snake-game.png",
      "stack": ["Java", "Python", "JavaScript", "Game"],
      "status": "",
      "description": "The classic Snake game implemented three times over — in Java, Python and JavaScript.",
      "links": {
        "code": "https://github.com/LidorPrototype/SnakeGamesCollection"
      }
    },
    {
      "title": "CUBETHON",
      "category": "Games",
      "featured": false,
      "image": "images/Cubethon-transparent.png",
      "stack": ["C#", "Unity", "Game"],
      "status": "",
      "description": "A C# game where a red block dodges obstacles. Levels add more obstacles, higher speed and different surface frictions. Runs on desktop and mobile.",
      "links": {
        "code": "https://github.com/LidorPrototype/CUBETHON"
      }
    },
    {
      "title": "Tower Defense",
      "category": "Games",
      "featured": false,
      "image": "images/TowerDefense.png",
      "stack": ["C#", "Unity", "Game"],
      "status": "",
      "description": "A tower-defense game in Unity/C#. Place defensive structures along the enemy path to stop attackers from reaching the exits.",
      "links": {
        "code": "https://github.com/LidorPrototype/TowerDefense_Issue-1"
      }
    },
    {
      "title": "TicTacToe Collection",
      "category": "Games",
      "featured": false,
      "image": "images/Tic_tac_toe.png",
      "stack": ["Java", "JavaScript", "C++", "C#", "Python", "Game"],
      "status": "",
      "description": "Tic-Tac-Toe implemented across five languages (Java, JavaScript, C++, C#, Python). Play against a friend or against the computer, which searches for the fastest win.",
      "links": {
        "code": "https://github.com/LidorPrototype/TicTacToesCollection"
      }
    },
    {
      "title": "Falling Blocks",
      "category": "Games",
      "featured": false,
      "image": "images/falling-blocks.png",
      "stack": ["C#", "Unity", "Game"],
      "status": "",
      "description": "A Unity/C# game where you dodge blocks falling from the top and sides in random directions, shapes and sizes — speeding up as you progress.",
      "links": {
        "code": "https://github.com/LidorPrototype/FallingBlocks"
      }
    },
    {
      "title": "L-ES Portfolio",
      "category": "Web",
      "featured": false,
      "image": "images/L-ES.png",
      "stack": ["HTML", "CSS", "JavaScript"],
      "status": "",
      "description": "This portfolio is its own project, rebuilt a few times as my skills evolved. Each version is preserved in the repository.",
      "versions": [
        {
          "label": "v3 (2026)",
          "note": "Current version — data-driven vanilla JS (no framework, no jQuery), a single projects.js data file, featured section, tag filtering, semantic/SEO cleanup.",
          "code": "https://github.com/LidorPrototype/LidorPrototype.github.io",
          "live": "https://lidorprototype.github.io/"
        },
        {
          "label": "v2 (2022)",
          "note": "Rebuilt on the HTML5 UP \"Dimension\" template — refocused as a projects-only showcase.",
          "code": "https://github.com/LidorPrototype/LidorPrototype.github.io/tree/main/Old%20Versions/Version%202"
        },
        {
          "label": "v1 (2021)",
          "note": "Custom HTML/CSS/JS with jQuery — typed intro, Isotope project filter, animations and a contact form.",
          "code": "https://github.com/LidorPrototype/LidorPrototype.github.io/tree/main/Old%20Versions/Version%201"
        }
      ],
      "links": {
        "code": "https://github.com/LidorPrototype/LidorPrototype.github.io"
      }
    }
  ]
}
;
