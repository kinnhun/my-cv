// ===== i18n - Internationalization System =====

const translations = {
  en: {
    // Sidebar
    "sidebar.job": "Frontend Developer (Junior Developer)",
    "sidebar.dob": "<strong>DOB</strong>: 14/09/2002",
    "sidebar.gender": "<strong>Gender</strong>: Male",
    "sidebar.phone": "<strong>Phone</strong>: 0862497002",
    "sidebar.email": "<strong>Email</strong>: trantrungkien14092002@gmail.com",
    "sidebar.address": "<strong>Address</strong>: Bình Nguyên, Kiến Xương, Thái Bình",
    "sidebar.facebook": '<strong>Facebook</strong>: <a href="https://www.facebook.com/kin2901" target="_blank">fb.com/kin2901</a>',
    "sidebar.downloadcv": "<strong>Download CV</strong>",

    // Nav
    "nav.resume": "Resume",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",
    "nav.hireme": "Hire Me",

    // Mobile menu
    "mobile.resume": "Resume",
    "mobile.portfolio": "Portfolio",
    "mobile.contact": "Contact",

    // Home - About
    "home.about.title": "About Me",
    "home.about.p1": "I am a young and enthusiastic Frontend developer with over a year of professional experience, I specialize in building modern, scalable web applications using React.js and Next.js. My journey in software development began at FPT University, where I developed a strong foundation in both frontend and backend technologies, complemented by hands-on experience in real-world production environments.",
    "home.about.p2": "Throughout my career, I have successfully contributed to multiple international projects for Swedish clients at TECHLEAD, where I honed my skills in creating responsive user interfaces, implementing complex data management systems, and ensuring code quality through comprehensive testing strategies. Currently at Nemark, I'm developing a sophisticated Live-Chat system that demonstrates my full-stack capabilities, from crafting seamless user experiences with React and Next.js to building robust real-time backend services with Node.js and WebSocket.",
    "home.about.p3": "I am deeply committed to continuous learning and best practices in software development. My expertise includes writing clean, maintainable code, implementing unit and automation tests using Cypress, and integrating CI/CD pipelines to ensure reliable deployments. I thrive in collaborative environments where I can contribute to innovative solutions while growing as a developer.",

    // Home - Career Objective
    "home.career.title": "Career Objective",
    "home.career.p1": "I aim to advance my career as a Fullstack Developer with a strong specialization in the React/Next.js ecosystem. My goal is to join a dynamic team where I can leverage my skills in building high-performance, user-centric web applications while continuing to expand my expertise in modern web technologies.",
    "home.career.p2": "I am particularly focused on optimizing user experience, application performance, and code quality through rigorous testing practices including unit tests and end-to-end automation. Additionally, I seek opportunities to deepen my backend development skills, contributing to the architecture and implementation of robust, scalable server-side systems that power exceptional digital experiences.",

    // Home - Technical Skills
    "home.skills.title": "Technical Skills",
    "home.skills.languages": "<strong>Languages</strong><br><span>JavaScript (ES6+), TypeScript, Java, C#, SQL</span>",
    "home.skills.frontend": "<strong>Frontend</strong><br><span>React.js (Redux, React Router), Next.js, Angular, HTML5, CSS3 (SASS, Tailwind CSS)</span>",
    "home.skills.backend": "<strong>Backend</strong><br><span>Node.js, Express.js, .NET, PHP, JSP/Servlet</span>",
    "home.skills.other": "<strong>Other</strong><br><span>MongoDB, MySQL/SQL Server, RESTful APIs, Cypress, Git, CI/CD</span>",

    // Skills bars
    "skill.frontend": "Frontend Skills",
    "skill.backend": "Backend Skills",

    // Resume
    "resume.title": "Resume",
    "resume.work.title": "Working History",
    "resume.edu.title": "Education History",

    // Work items
    "resume.work1.title": "Fullstack Developer - Nemark",
    "resume.work1.date": "20/12/2025 - Present",
    "resume.work1.desc": 'Developing a comprehensive <strong>Live-Chat system</strong> for real-time customer support.',
    "resume.work1.details": '• <strong>Frontend:</strong> React.js, Next.js, Tailwind CSS<br>• <strong>Backend:</strong> Node.js, Express.js, WebSocket for real-time messaging<br>• <strong>Testing:</strong> Unit tests & Cypress automation tests<br>• <strong>DevOps:</strong> CI/CD pipeline implementation<br>• <strong>Achievement:</strong> Optimized performance for concurrent real-time connections',

    "resume.work2.title": "Frontend Developer - TECHLEAD",
    "resume.work2.date": "01/05/2024 - 15/12/2025",
    "resume.work2.tech": "<strong>Technologies:</strong> React, Angular, Next.js, Cypress (auto test)",
    "resume.work2.details": '• Participated in <strong>3 major projects</strong> for Swedish clients (TopCoach – Tester, BJJ & YMNER – Frontend)<br>• Developed user interfaces using ReactJS, TypeScript, Tailwind CSS, Angular, and Next.js<br>• Built CRUD screens, data tables, filters, pagination, handled UI permissions, and optimized UX (form validation, success/error notifications, rendering performance)<br>• Designed and wrote unit tests and automation tests, integrating them into the CI pipeline to prevent regression issues and ensure product quality',

    "resume.work3.title": "Frontend Intern - FPT SOFTWARE",
    "resume.work3.date": "02/01/2024 - 01/04/2024",
    "resume.work3.details": "• Participated in developing the user interface for a module using React<br>• Fixed UI bugs and optimized UI/UX based on feedback from the leader and tester",

    "resume.edu1.title": "ĐẠI HỌC FPT",
    "resume.edu1.date": "2020 - 2025",
    "resume.edu1.major": "<strong>Major:</strong> Software Engineering",

    // Key Projects
    "resume.projects.title": "Key Projects",

    // Testimonials
    "resume.testimonials.title": "Testimonials",

    // Portfolio
    "portfolio.title": "Portfolio",

    // Contact
    "contact.form.title": "<strong>Contact Form</strong>",
    "contact.info.title": "<strong>Contact Informations</strong>",
    "contact.name.placeholder": "Name",
    "contact.email.placeholder": "E-mail",
    "contact.message.placeholder": "Message",
    "contact.submit": "Submit",
    "contact.map.title": "<strong>Contact Map.</strong>",
    "contact.info.address": "<strong>Address:</strong> Bình Nguyên, Kiến Xương, Thái Bình",
    "contact.info.phone": "<strong>Phone:</strong> 0862497002",
    "contact.info.job": "<strong>Job:</strong> Frontend Developer (Junior Developer)",
    "contact.info.email": '<strong>E-mail:</strong> trantrungkien14092002@gmail.com',
    "contact.info.fb": '<strong>Facebook:</strong> <a href="https://www.facebook.com/kin2901" target="_blank">fb.com/kin2901</a>',

    // Footer
    "footer.copyright": "© 2025 All rights reserved. Designed by Trần Trung Kiên",

    // Hire popup
    "hire.title": "Let's Work Together!",
    "hire.subtitle": "I'm available for freelance projects. Let's create something amazing!",
    "hire.or": "or send a quick message",
    "hire.name": "Your Name",
    "hire.email": "Your Email",
    "hire.message": "Your Message",
    "hire.send": "Send Message",
  },

  vi: {
    // Sidebar
    "sidebar.job": "Lập trình viên Frontend (Junior)",
    "sidebar.dob": "<strong>Ngày sinh</strong>: 14/09/2002",
    "sidebar.gender": "<strong>Giới tính</strong>: Nam",
    "sidebar.phone": "<strong>SĐT</strong>: 0862497002",
    "sidebar.email": "<strong>Email</strong>: trantrungkien14092002@gmail.com",
    "sidebar.address": "<strong>Địa chỉ</strong>: Bình Nguyên, Kiến Xương, Thái Bình",
    "sidebar.facebook": '<strong>Facebook</strong>: <a href="https://www.facebook.com/kin2901" target="_blank">fb.com/kin2901</a>',
    "sidebar.downloadcv": "<strong>Tải CV</strong>",

    // Nav
    "nav.resume": "Kinh Nghiệm",
    "nav.portfolio": "Dự Án",
    "nav.contact": "Liên Hệ",
    "nav.hireme": "Thuê Tôi",

    // Mobile menu
    "mobile.resume": "Kinh Nghiệm",
    "mobile.portfolio": "Dự Án",
    "mobile.contact": "Liên Hệ",

    // Home - About
    "home.about.title": "Giới Thiệu",
    "home.about.p1": "Tôi là một lập trình viên Frontend trẻ và nhiệt huyết với hơn một năm kinh nghiệm chuyên môn, chuyên xây dựng các ứng dụng web hiện đại, có khả năng mở rộng bằng React.js và Next.js. Hành trình phát triển phần mềm của tôi bắt đầu tại Đại học FPT, nơi tôi xây dựng nền tảng vững chắc về cả công nghệ frontend và backend, kết hợp với kinh nghiệm thực tế trong môi trường sản xuất thực.",
    "home.about.p2": "Trong suốt sự nghiệp, tôi đã đóng góp thành công vào nhiều dự án quốc tế cho khách hàng Thụy Điển tại TECHLEAD, nơi tôi trau dồi kỹ năng tạo giao diện người dùng responsive, triển khai hệ thống quản lý dữ liệu phức tạp và đảm bảo chất lượng code thông qua các chiến lược testing toàn diện. Hiện tại tại Nemark, tôi đang phát triển hệ thống Live-Chat tinh vi thể hiện khả năng full-stack, từ xây dựng trải nghiệm người dùng mượt mà với React và Next.js đến xây dựng backend realtime mạnh mẽ với Node.js và WebSocket.",
    "home.about.p3": "Tôi cam kết sâu sắc với việc học hỏi liên tục và các best practice trong phát triển phần mềm. Chuyên môn của tôi bao gồm viết code sạch, dễ bảo trì, triển khai unit test và automation test bằng Cypress, tích hợp CI/CD pipeline để đảm bảo triển khai đáng tin cậy. Tôi phát triển tốt trong môi trường hợp tác, nơi tôi có thể đóng góp vào các giải pháp sáng tạo.",

    // Home - Career Objective
    "home.career.title": "Mục Tiêu Nghề Nghiệp",
    "home.career.p1": "Tôi hướng đến phát triển sự nghiệp như một Fullstack Developer với chuyên môn sâu trong hệ sinh thái React/Next.js. Mục tiêu là gia nhập một đội ngũ năng động nơi tôi có thể tận dụng kỹ năng xây dựng ứng dụng web hiệu suất cao, lấy người dùng làm trung tâm, đồng thời tiếp tục mở rộng chuyên môn trong công nghệ web hiện đại.",
    "home.career.p2": "Tôi đặc biệt tập trung vào tối ưu trải nghiệm người dùng, hiệu suất ứng dụng và chất lượng code thông qua testing nghiêm ngặt bao gồm unit test và automation end-to-end. Ngoài ra, tôi tìm kiếm cơ hội để nâng cao kỹ năng phát triển backend, đóng góp vào kiến trúc và triển khai hệ thống server-side mạnh mẽ, có khả năng mở rộng.",

    // Home - Technical Skills
    "home.skills.title": "Kỹ Năng Chuyên Môn",
    "home.skills.languages": "<strong>Ngôn ngữ</strong><br><span>JavaScript (ES6+), TypeScript, Java, C#, SQL</span>",
    "home.skills.frontend": "<strong>Frontend</strong><br><span>React.js (Redux, React Router), Next.js, Angular, HTML5, CSS3 (SASS, Tailwind CSS)</span>",
    "home.skills.backend": "<strong>Backend</strong><br><span>Node.js, Express.js, .NET, PHP, JSP/Servlet</span>",
    "home.skills.other": "<strong>Khác</strong><br><span>MongoDB, MySQL/SQL Server, RESTful APIs, Cypress, Git, CI/CD</span>",

    // Skills bars
    "skill.frontend": "Kỹ Năng Frontend",
    "skill.backend": "Kỹ Năng Backend",

    // Resume
    "resume.title": "Kinh Nghiệm",
    "resume.work.title": "Kinh Nghiệm Làm Việc",
    "resume.edu.title": "Học Vấn",

    // Work items
    "resume.work1.title": "Fullstack Developer - Nemark",
    "resume.work1.date": "20/12/2025 - Hiện tại",
    "resume.work1.desc": 'Phát triển hệ thống <strong>Live-Chat</strong> toàn diện cho hỗ trợ khách hàng thời gian thực.',
    "resume.work1.details": '• <strong>Frontend:</strong> React.js, Next.js, Tailwind CSS<br>• <strong>Backend:</strong> Node.js, Express.js, WebSocket cho tin nhắn realtime<br>• <strong>Testing:</strong> Unit test & Cypress automation test<br>• <strong>DevOps:</strong> Triển khai CI/CD pipeline<br>• <strong>Thành tựu:</strong> Tối ưu hiệu suất cho kết nối realtime đồng thời',

    "resume.work2.title": "Frontend Developer - TECHLEAD",
    "resume.work2.date": "01/05/2024 - 15/12/2025",
    "resume.work2.tech": "<strong>Công nghệ:</strong> React, Angular, Next.js, Cypress (auto test)",
    "resume.work2.details": '• Tham gia <strong>3 dự án lớn</strong> cho khách hàng Thụy Điển (TopCoach – Tester, BJJ & YMNER – Frontend)<br>• Phát triển giao diện bằng ReactJS, TypeScript, Tailwind CSS, Angular, Next.js<br>• Xây dựng màn hình CRUD, bảng dữ liệu, bộ lọc, phân trang, xử lý phân quyền UI, tối ưu UX<br>• Thiết kế và viết unit test, automation test, tích hợp vào CI pipeline',

    "resume.work3.title": "Frontend Intern - FPT SOFTWARE",
    "resume.work3.date": "02/01/2024 - 01/04/2024",
    "resume.work3.details": "• Tham gia phát triển giao diện cho module sử dụng React<br>• Sửa lỗi UI và tối ưu UI/UX theo phản hồi từ leader và tester",

    "resume.edu1.title": "ĐẠI HỌC FPT",
    "resume.edu1.date": "2020 - 2025",
    "resume.edu1.major": "<strong>Chuyên ngành:</strong> Kỹ thuật Phần mềm",

    // Key Projects
    "resume.projects.title": "Dự Án Tiêu Biểu",

    // Testimonials
    "resume.testimonials.title": "Nhận Xét",

    // Portfolio
    "portfolio.title": "Dự Án Cá Nhân",

    // Contact
    "contact.form.title": "<strong>Form Liên Hệ</strong>",
    "contact.info.title": "<strong>Thông Tin Liên Hệ</strong>",
    "contact.name.placeholder": "Họ và tên",
    "contact.email.placeholder": "E-mail",
    "contact.message.placeholder": "Nội dung tin nhắn",
    "contact.submit": "Gửi",
    "contact.map.title": "<strong>Bản Đồ.</strong>",
    "contact.info.address": "<strong>Địa chỉ:</strong> Bình Nguyên, Kiến Xương, Thái Bình",
    "contact.info.phone": "<strong>SĐT:</strong> 0862497002",
    "contact.info.job": "<strong>Nghề nghiệp:</strong> Lập trình viên Frontend (Junior)",
    "contact.info.email": '<strong>E-mail:</strong> trantrungkien14092002@gmail.com',
    "contact.info.fb": '<strong>Facebook:</strong> <a href="https://www.facebook.com/kin2901" target="_blank">fb.com/kin2901</a>',

    // Footer
    "footer.copyright": "© 2025 Bản quyền thuộc về Trần Trung Kiên",

    // Hire popup
    "hire.title": "Hãy Cùng Hợp Tác!",
    "hire.subtitle": "Tôi sẵn sàng nhận dự án freelance. Hãy cùng tạo nên điều tuyệt vời!",
    "hire.or": "hoặc gửi tin nhắn nhanh",
    "hire.name": "Tên của bạn",
    "hire.email": "Email của bạn",
    "hire.message": "Nội dung tin nhắn",
    "hire.send": "Gửi Tin Nhắn",
  }
};

// Portfolio item translations
const portfolioTranslations = {
  en: {
    "DHT Company": { title: "DHT Company", description: "Premium furniture e-commerce — Modern UI, product catalog, order management." },
    "Thiên Linh Ấn Feng Shui": { title: "Thien Linh An Feng Shui", description: "Feng shui jewelry store — Elegant design, shopping cart & online payment." },
    "NewTech Shop": { title: "NewTech Shop", description: "Phone e-commerce — Product comparison, reviews, smart inventory management." },
    "Kính Thông Minh Mercy": { title: "Mercy Smart Glasses", description: "Smart glasses website — Tech landing page, AR preview & online ordering." },
    "Mercy Tech Global": { title: "Mercy Tech Global", description: "AI sales support bot — Smart chatbot, customer data analytics, dashboard." },
    "Fervid": { title: "Fervid", description: "Online exam platform — AI exam system, student analytics, class management." },
    "App Buffet POS": { title: "App Buffet POS", description: "Buffet restaurant management — Ordering, table management, payment, realtime reports." },
    "Agent 1: Research Bot": { title: "Agent 1: Research Bot", description: "Competitor data collection & market trends from TikTok/Facebook — Visual dashboard, Excel export." },
    "Agent 2: Ads Automation": { title: "Agent 2: Ads Automation", description: "Multi-channel ads optimization (FB, TikTok, Google) — Auto on/off campaigns, realtime alerts." },
    "Agent 3: Auto Post": { title: "Agent 3: Auto Post", description: "Automated multi-channel content distribution — AI caption writing, scheduled posting to FB/TikTok/YouTube." },
    "Web Bất Động Sản": { title: "Real Estate Website", description: "Real estate platform — Search houses, apartments, offices. Inquiry forms, project listings, statistics." },
    "Web Giới Thiệu Công Ty": { title: "Company Profile Website", description: "Corporate introduction website — Services, team, achievements, partners. Professional design." },
    "Web Radios E-Commerce": { title: "Radios E-Commerce", description: "Multi-category electronics store — Camera, Laptop, Accessories, Daily Deals, Newsletter." },
    "Web Technocy Store": { title: "Technocy Store", description: "Tech devices store — Smartphones, Tablets, Gaming, Featured Offers, Deals of the Day." },
    "Web EDigit Electronics": { title: "EDigit Electronics", description: "Electronics store — Drones, Cameras, Headphones, Top Categories, Deal of the Week." },
  },
  vi: {
    "DHT Company": { title: "DHT Company", description: "Website thương mại nội thất cao cấp — Thiết kế giao diện hiện đại, catalog sản phẩm, quản lý đơn hàng." },
    "Thiên Linh Ấn Feng Shui": { title: "Thiên Linh Ấn Feng Shui", description: "Website bán trang sức phong thuỷ — Giao diện sang trọng, tích hợp giỏ hàng & thanh toán online." },
    "NewTech Shop": { title: "NewTech Shop", description: "Website bán hàng điện thoại — So sánh sản phẩm, đánh giá, hệ thống quản lý kho thông minh." },
    "Kính Thông Minh Mercy": { title: "Kính Thông Minh Mercy", description: "Website bán kính thông minh — Landing page công nghệ, tích hợp AR preview & đặt hàng trực tuyến." },
    "Mercy Tech Global": { title: "Mercy Tech Global", description: "Bot AI auto hỗ trợ bán hàng — Chatbot thông minh, phân tích dữ liệu khách hàng, dashboard analytics." },
    "Fervid": { title: "Fervid", description: "Nền tảng luyện thi trực tuyến — Hệ thống đề thi AI, phân tích kết quả học sinh, quản lý lớp học." },
    "App Buffet POS": { title: "App Buffet POS", description: "Ứng dụng quản lý nhà hàng Buffet — Gọi món, quản lý bàn, thanh toán, thống kê doanh thu realtime." },
    "Agent 1: Research Bot": { title: "Agent 1: Research Bot", description: "Thu thập dữ liệu đối thủ & xu hướng thị trường từ TikTok/Facebook — Dashboard trực quan, Export Excel." },
    "Agent 2: Ads Automation": { title: "Agent 2: Ads Automation", description: "Tối ưu quảng cáo đa kênh (FB, TikTok, Google) — Rule Engine tự động tắt/bật Campaign, cảnh báo realtime." },
    "Agent 3: Auto Post": { title: "Agent 3: Auto Post", description: "Tự động hoá phân phối nội dung đa kênh — AI viết caption, hẹn giờ đăng bài FB/TikTok/YouTube." },
    "Web Bất Động Sản": { title: "Web Bất Động Sản", description: "Website bất động sản — Tìm kiếm nhà, căn hộ, văn phòng. Form tư vấn, danh mục dự án, thống kê." },
    "Web Giới Thiệu Công Ty": { title: "Web Giới Thiệu Công Ty", description: "Website giới thiệu doanh nghiệp — Dịch vụ, đội ngũ, thành tựu, đối tác. Thiết kế chuyên nghiệp." },
    "Web Radios E-Commerce": { title: "Web Radios E-Commerce", description: "Website bán hàng điện tử đa danh mục — Camera, Laptop, Phụ kiện, Deal hàng ngày, Newsletter." },
    "Web Technocy Store": { title: "Web Technocy Store", description: "Website bán thiết bị công nghệ — Smartphone, Tablet, Gaming, Featured Offers, Deals of the Day." },
    "Web EDigit Electronics": { title: "Web EDigit Electronics", description: "Website bán đồ điện tử — Drone, Camera, HeadPhone, Top Categories, Deal of the Week." },
  }
};

// ===== i18n Engine =====
let currentLang = localStorage.getItem("lang") || "en";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyTranslations();
  updateLangToggle();
  // Re-render portfolio with translated text
  if (typeof window.rerenderPortfolio === "function") {
    window.rerenderPortfolio();
  }
}

function applyTranslations() {
  const t = translations[currentLang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });
  // Handle placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key]) {
      el.setAttribute("placeholder", t[key]);
    }
  });
}

function updateLangToggle() {
  const btn = document.getElementById("langToggleBtn");
  if (btn) {
    btn.innerHTML = currentLang === "en"
      ? '<img src="https://flagcdn.com/w20/gb.png" alt="EN" style="width:18px;height:12px;margin-right:4px;border-radius:2px;vertical-align:middle;"> EN'
      : '<img src="https://flagcdn.com/w20/vn.png" alt="VN" style="width:18px;height:12px;margin-right:4px;border-radius:2px;vertical-align:middle;"> VN';
  }
}

function toggleLanguage() {
  setLanguage(currentLang === "en" ? "vi" : "en");
}

function getPortfolioText(originalTitle) {
  const pt = portfolioTranslations[currentLang];
  return pt && pt[originalTitle] ? pt[originalTitle] : null;
}

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();
  updateLangToggle();
});
