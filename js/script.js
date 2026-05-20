// js/script.js

document.addEventListener('DOMContentLoaded', () => {
  const pages = document.querySelectorAll('.middle-itme-page');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  function showSection(name) {
    pages.forEach(page => {
      page.style.display = page.classList.contains(name) ? 'block' : 'none';
    });
    navLinks.forEach(link => {
      link.classList.toggle('active',
        link.getAttribute('href') === '#' + name
      );
    });
  }

  function onHashChange() {
    let section = window.location.hash.slice(1);
    // mặc định về 'home' nếu rỗng hoặc không tồn tại
    if (!section || !document.querySelector(`.middle-itme-page.${section}`)) {
      section = 'home';
    }
    showSection(section);
  }

  // chuyển section khi click menu (vẫn pushState để URL có hash)
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = link.getAttribute('href');
      history.pushState(null, '', target);
      onHashChange();
    });
  });

  // xử lý back/forward và load trang lần đầu
  window.addEventListener('hashchange', onHashChange);
  onHashChange();
});




// resum 

// const track = document.getElementById('track');
// const container = document.getElementById('sliderContainer');
// const cardWidth = container.offsetWidth / 3; // 3 cards visible
// const totalCards = track.children.length;
// const groupSize = 3;
// const totalDots = Math.ceil(totalCards / groupSize);
// let currentIndex = 0;

// let startX = 0;
// let currentTranslate = 0;
// let prevTranslate = 0;
// let dragging = false;

// // Tạo dot: mỗi 3 card 1 dot
// const dotsContainer = document.getElementById("sliderDots");
// for (let i = 0; i < totalDots; i++) {
//   const dot = document.createElement("span");
//   dot.classList.add("dot");
//   if (i === 0) dot.classList.add("active");
//   dot.addEventListener("click", () => {
//     currentIndex = i * groupSize;
//     updateSlider();
//     resetAutoSlide();
//   });
//   dotsContainer.appendChild(dot);
// }

// // Cập nhật vị trí slider + dot
// function updateSlider() {
//   currentTranslate = -currentIndex * cardWidth;
//   track.style.transform = `translateX(${currentTranslate}px)`;
//   prevTranslate = currentTranslate;

//   const dots = document.querySelectorAll('.slider-dots .dot');
//   dots.forEach(dot => dot.classList.remove('active'));

//   const dotIndex = Math.floor(currentIndex / groupSize);
//   if (dots[dotIndex]) {
//     dots[dotIndex].classList.add('active');
//   }
// }

// // Tự động trượt từng card
// function slideNext() {
//   currentIndex = (currentIndex + 1) % (totalCards - 3 + 1);
//   updateSlider();
// }

// function resetAutoSlide() {
//   clearInterval(autoSlide);
//   autoSlide = setInterval(slideNext, 4000);
// }

// let autoSlide = setInterval(slideNext, 4000);

// // Kéo chuột / cảm ứng
// container.addEventListener("mousedown", startDrag);
// container.addEventListener("touchstart", startDrag);
// container.addEventListener("mouseup", endDrag);
// container.addEventListener("mouseleave", endDrag);
// container.addEventListener("touchend", endDrag);
// container.addEventListener("mousemove", drag);
// container.addEventListener("touchmove", drag);

// function startDrag(e) {
//   clearInterval(autoSlide);
//   dragging = true;
//   container.style.cursor = "grabbing";
//   startX = getPositionX(e);
// }

// function endDrag() {
//   if (!dragging) return;
//   dragging = false;
//   container.style.cursor = "grab";

//   const movedBy = currentTranslate - prevTranslate;
//   if (movedBy < -50 && currentIndex < totalCards - 3) currentIndex++;
//   if (movedBy > 50 && currentIndex > 0) currentIndex--;

//   updateSlider();
//   resetAutoSlide();
// }

// function drag(e) {
//   if (!dragging) return;
//   const currentX = getPositionX(e);
//   const deltaX = currentX - startX;
//   currentTranslate = prevTranslate + deltaX;
//   track.style.transform = `translateX(${currentTranslate}px)`;
// }

// function getPositionX(e) {
//   return e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
// }

// updateSlider();



const track = document.getElementById('track');
const container = document.getElementById('sliderContainer');
const dotsContainer = document.getElementById("sliderDots");
const totalCards = track.children.length;

let groupSize = window.innerWidth <= 768 ? 1 : 3;
let cardWidth = container.offsetWidth / groupSize;
let currentIndex = 0;
let autoSlide;
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let dragging = false;

function updateGroupSize() {
  groupSize = window.innerWidth <= 768 ? 1 : 3;
  cardWidth = container.offsetWidth / groupSize;
}

function createDots() {
  dotsContainer.innerHTML = '';
  const totalDots = Math.ceil(totalCards / groupSize);
  for (let i = 0; i < totalDots; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      currentIndex = i * groupSize;
      updateSlider();
      resetAutoSlide();
    });
    dotsContainer.appendChild(dot);
  }
}

function updateSlider() {
  const maxIndex = totalCards - 1;
  if (currentIndex > maxIndex) currentIndex = 0;
  if (currentIndex < 0) currentIndex = 0;

  currentTranslate = -currentIndex * cardWidth;
  prevTranslate = currentTranslate;
  track.style.transform = `translateX(${currentTranslate}px)`;

  const dots = dotsContainer.querySelectorAll(".dot");
  dots.forEach(dot => dot.classList.remove("active"));
  const dotIndex = Math.floor(currentIndex / groupSize);
  if (dots[dotIndex]) dots[dotIndex].classList.add("active");
}

function slideNext() {
  currentIndex++;
  if (currentIndex > totalCards - 1) currentIndex = 0;
  updateSlider();
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(slideNext, 4000);
}

// ==== Drag Events ====
function getPositionX(e) {
  return e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
}

function startDrag(e) {
  clearInterval(autoSlide);
  dragging = true;
  startX = getPositionX(e);
  container.style.cursor = "grabbing";
}

function drag(e) {
  if (!dragging) return;
  const currentX = getPositionX(e);
  const deltaX = currentX - startX;
  currentTranslate = prevTranslate + deltaX;
  track.style.transform = `translateX(${currentTranslate}px)`;
}

function endDrag() {
  if (!dragging) return;
  dragging = false;
  container.style.cursor = "grab";
  const movedBy = currentTranslate - prevTranslate;

  const threshold = cardWidth / 4;
  if (movedBy < -threshold && currentIndex < totalCards - 1) currentIndex++;
  else if (movedBy > threshold && currentIndex > 0) currentIndex--;

  updateSlider();
  resetAutoSlide();
}

// ==== Events ====
container.addEventListener("mousedown", startDrag);
container.addEventListener("touchstart", startDrag);
container.addEventListener("mousemove", drag);
container.addEventListener("touchmove", drag);
container.addEventListener("mouseup", endDrag);
container.addEventListener("mouseleave", endDrag);
container.addEventListener("touchend", endDrag);

window.addEventListener("resize", () => {
  updateGroupSize();
  createDots();
  updateSlider();
});

// ==== Init ====
updateGroupSize();
createDots();
updateSlider();
resetAutoSlide();





// portfolio 
// js/script.js (hoặc chèn trong <script>…</script>)

document.addEventListener('DOMContentLoaded', () => {
  const portfolioItems = [
    { title: "DHT Company", description: "Website thương mại nội thất cao cấp — Thiết kế giao diện hiện đại, catalog sản phẩm, quản lý đơn hàng.", category: "E-Commerce", imageUrl: "./img/portfolio-projects/dht-company.png", siteUrl: "https://dhtcompany.com/" },
    { title: "Thiên Linh Ấn Feng Shui", description: "Website bán trang sức phong thuỷ — Giao diện sang trọng, tích hợp giỏ hàng & thanh toán online.", category: "E-Commerce", imageUrl: "./img/portfolio-projects/thienlinhan.png", siteUrl: "http://thienlinhanfengshui.com/" },
    { title: "NewTech Shop", description: "Website bán hàng điện thoại — So sánh sản phẩm, đánh giá, hệ thống quản lý kho thông minh.", category: "E-Commerce", imageUrl: "./img/portfolio-projects/newtech.png", siteUrl: "https://newtechshop.vn/" },
    { title: "Kính Thông Minh Mercy", description: "Website bán kính thông minh — Landing page công nghệ, tích hợp AR preview & đặt hàng trực tuyến.", category: "Product Landing", imageUrl: "./img/portfolio-projects/mercy-glasses.png", siteUrl: "https://kinhthongminhmercy.vn/" },
    { title: "Mercy Tech Global", description: "Bot AI auto hỗ trợ bán hàng — Chatbot thông minh, phân tích dữ liệu khách hàng, dashboard analytics.", category: "AI / SaaS", imageUrl: "./img/portfolio-projects/mercytech.png", siteUrl: "https://www.mercytechglobal.com/" },
    { title: "Fervid", description: "Nền tảng luyện thi trực tuyến — Hệ thống đề thi AI, phân tích kết quả học sinh, quản lý lớp học.", category: "EdTech", imageUrl: "./img/portfolio-projects/fervid.png", siteUrl: "https://fervid.vn/" },
    { title: "App Buffet POS", description: "Ứng dụng quản lý nhà hàng Buffet — Gọi món, quản lý bàn, thanh toán, thống kê doanh thu realtime.", category: "Mobile App", imageUrl: "./img/portfolio-projects/pos-app.png", siteUrl: "https://app-buffet.vercel.app/" },
    { title: "Agent 1: Research Bot", description: "Thu thập dữ liệu đối thủ & xu hướng thị trường từ TikTok/Facebook — Dashboard trực quan, Export Excel.", category: "AI / SaaS", imageUrl: "./img/portfolio-projects/agent-research.png", siteUrl: "https://www.mercytechglobal.com/",
      detailHtml: '<h3>🔍 Agent 1: Market Research Bot</h3><p class="detail-subtitle">Thu thập dữ liệu đối thủ và xu hướng thị trường tự động</p><table class="detail-table"><tr><th>Hạng mục</th><th>Nội dung</th></tr><tr><td>Crawl TikTok Shop</td><td>Lấy tên SP, giá, lượt bán, rating, doanh số ước tính. Dùng Headless Browser (Playwright).</td></tr><tr><td>Crawl Facebook Page</td><td>Quét bài viết tương tác cao, từ khóa trending. Kỹ thuật bypass anti-bot.</td></tr><tr><td>Web Dashboard</td><td>Giao diện biểu đồ (Bar, Line) tóm tắt data. Nút Export to Excel. Next.js + Recharts.</td></tr></table><div class="detail-tags"><span>Playwright</span><span>BrightData Proxy</span><span>Next.js</span><span>Recharts</span><span>Telegram Bot</span></div><p class="detail-note">⚠️ Module thực nghiệm — phụ thuộc chính sách chống bot của nền tảng.</p>' },
    { title: "Agent 2: Ads Automation", description: "Tối ưu quảng cáo đa kênh (FB, TikTok, Google) — Rule Engine tự động tắt/bật Campaign, cảnh báo realtime.", category: "AI / SaaS", imageUrl: "./img/portfolio-projects/agent-ads.png", siteUrl: "https://www.mercytechglobal.com/",
      detailHtml: '<h3>📊 Agent 2: Ads Automation</h3><p class="detail-subtitle">Tối ưu hoá quảng cáo đa kênh bằng Rule Engine</p><table class="detail-table"><tr><th>Hạng mục</th><th>Nội dung</th></tr><tr><td>Đa nền tảng</td><td>Tích hợp API chính quy: Facebook Marketing, TikTok Marketing, Google Ads.</td></tr><tr><td>Tự động Setup</td><td>AI nhận diện phân loại bài viết → Tự động set Campaign, Ngân sách, Targeting.</td></tr><tr><td>Real-time Tracking</td><td>Giám sát liên tục: CPC, CPA, CPM, ROAS, Impressions.</td></tr><tr><td>Rule Engine</td><td>"NẾU CPC > 5000đ SAU 3 giờ → Cảnh báo Telegram & Tự động tắt Camp". Bật/tắt qua nút bấm Telegram.</td></tr></table><div class="detail-tags"><span>Facebook Ads API</span><span>TikTok Ads API</span><span>Google Ads</span><span>NestJS</span><span>BullMQ</span><span>Redis</span></div><p class="detail-note">🏗️ Module lõi — Xương sống của hệ thống tự động hoá.</p>' },
    { title: "Agent 3: Auto Post", description: "Tự động hoá phân phối nội dung đa kênh — AI viết caption, hẹn giờ đăng bài FB/TikTok/YouTube.", category: "AI / SaaS", imageUrl: "./img/portfolio-projects/agent-autopost.png", siteUrl: "https://www.mercytechglobal.com/",
      detailHtml: '<h3>🚀 Agent 3: Auto Post & AI Content</h3><p class="detail-subtitle">Tự động hoá phân phối nội dung đa kênh</p><table class="detail-table"><tr><th>Hạng mục</th><th>Nội dung</th></tr><tr><td>AI Tạo Caption</td><td>Tích hợp GPT-4o. Gửi 1 Video + tên SP → AI viết bài SEO cho Facebook, bài Hashtag cho TikTok, mô tả cho YouTube Shorts.</td></tr><tr><td>Đăng bài Đa kênh</td><td>Graph API (FB Page), TikTok Content API, YouTube Data API. Đẩy content tự động.</td></tr><tr><td>Hẹn giờ đăng</td><td>Queue System cho phép hẹn giờ theo "Khung giờ vàng" từng nền tảng.</td></tr></table><div class="detail-tags"><span>OpenAI GPT-4o</span><span>Graph API</span><span>TikTok Content API</span><span>YouTube Data API</span><span>BullMQ</span></div><p class="detail-note">📅 Bàn giao sớm nhất — Tuần 1 triển khai, dùng ngay.</p>' },
    { title: "Web Bất Động Sản", description: "Website bất động sản — Tìm kiếm nhà, căn hộ, văn phòng. Form tư vấn, danh mục dự án, thống kê.", category: "Web Design", imageUrl: "./img/portfolio-projects/web-batdongsan.png" },
    { title: "Web Giới Thiệu Công Ty", description: "Website giới thiệu doanh nghiệp — Dịch vụ, đội ngũ, thành tựu, đối tác. Thiết kế chuyên nghiệp.", category: "Web Design", imageUrl: "./img/portfolio-projects/web-gioithieu.png" },
    { title: "Web Radios E-Commerce", description: "Website bán hàng điện tử đa danh mục — Camera, Laptop, Phụ kiện, Deal hàng ngày, Newsletter.", category: "E-Commerce", imageUrl: "./img/portfolio-projects/web-congnghe-1.png" },
    { title: "Web Technocy Store", description: "Website bán thiết bị công nghệ — Smartphone, Tablet, Gaming, Featured Offers, Deals of the Day.", category: "E-Commerce", imageUrl: "./img/portfolio-projects/web-congnghe-2.png" },
    { title: "Web EDigit Electronics", description: "Website bán đồ điện tử — Drone, Camera, HeadPhone, Top Categories, Deal of the Week.", category: "E-Commerce", imageUrl: "./img/portfolio-projects/web-congnghe-3.png" },
  ];

  const categories = ["All", "E-Commerce", "Web Design", "Product Landing", "AI / SaaS", "Mobile App", "EdTech"];
  let currentCategory = "All";
  let visibleCount = 9;
  const incrementCount = 9;

  const grid = document.getElementById("portfolioGrid");
  const filterCt = document.getElementById("filterButtons");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const popupOverlay = document.getElementById("popupOverlay");
  const popupMedia = document.getElementById("popupMedia");

  // Tạo filter buttons
  function renderFilterButtons() {
    filterCt.innerHTML = "";
    categories.forEach(cat => {
      const btn = document.createElement("button");
      btn.textContent = cat;
      btn.classList.add("filter-btn");
      btn.addEventListener("click", () => {
        currentCategory = cat;
        visibleCount = incrementCount;      // reset về 9 khi chuyển category
        updateActiveFilter(cat);
        renderPortfolio();
      });
      filterCt.appendChild(btn);
    });
    // Mặc định active nút "All"
    updateActiveFilter("All");
  }

  function updateActiveFilter(cat) {
    Array.from(filterCt.children).forEach(btn => {
      btn.classList.toggle("active", btn.textContent === cat);
    });
  }

  // Render portfolio items
  function renderPortfolio() {
    const filtered = currentCategory === "All"
      ? portfolioItems
      : portfolioItems.filter(i => i.category === currentCategory);

    grid.innerHTML = "";
    filtered.slice(0, visibleCount).forEach((item, idx) => {
      const div = document.createElement("div");
      div.className = "portfolio-item";
      div.style.animationDelay = `${idx * 100}ms`;

      // Build image section
      const thumbDiv = document.createElement("div");
      thumbDiv.className = "portfolio-thumb";

      const img = document.createElement("img");
      img.src = item.imageUrl;
      img.alt = item.title;
      thumbDiv.appendChild(img);

      const overlay = document.createElement("div");
      overlay.className = "portfolio-overlay";

      if (item.detailHtml || !item.siteUrl) {
        // Items with detail popup OR screenshot-only items — show "Xem chi tiết"
        const detailBtn = document.createElement("button");
        detailBtn.className = "visit-site-btn";
        detailBtn.innerHTML = '<i class="fa-solid fa-eye"></i> Xem chi tiết';
        detailBtn.addEventListener("click", function(e) {
          e.stopPropagation();
          openDetailPopup(item);
        });
        overlay.appendChild(detailBtn);
      } else {
        // Regular items with siteUrl — show "Visit Site" link
        const visitBtn = document.createElement("a");
        visitBtn.href = item.siteUrl;
        visitBtn.target = "_blank";
        visitBtn.rel = "noopener noreferrer";
        visitBtn.className = "visit-site-btn";
        visitBtn.innerHTML = '<i class="fa-solid fa-arrow-up-right-from-square"></i> Visit Site';
        overlay.appendChild(visitBtn);
      }

      thumbDiv.appendChild(overlay);
      div.appendChild(thumbDiv);

      // Build info section (with i18n)
      const translated = (typeof getPortfolioText === 'function') ? getPortfolioText(item.title) : null;
      const displayTitle = translated ? translated.title : item.title;
      const displayDesc = translated ? translated.description : item.description;
      const contentDiv = document.createElement("div");
      contentDiv.className = "portfolio-content";
      contentDiv.innerHTML = '<h4>' + displayTitle + '</h4><p>' + displayDesc + '</p><span class="portfolio-category-tag">' + item.category + '</span>';
      div.appendChild(contentDiv);

      grid.appendChild(div);
    });

    // Cập nhật trạng thái nút Load More
    updateLoadMore(filtered.length);
  }

  function updateLoadMore(total) {
    const remaining = total - visibleCount;
    if (remaining > 0) {
      loadMoreBtn.style.display = "block";
      loadMoreBtn.textContent = `Load More (${remaining})`;
    } else {
      loadMoreBtn.style.display = "none";
    }
  }

  loadMoreBtn.addEventListener("click", () => {
    visibleCount += incrementCount;
    renderPortfolio();
  });

  // Popup preview
  window.openPreview = (url, isVideo) => {
    if (isVideo) {
      popupMedia.innerHTML = `<iframe
        src="${url}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        style="width:100%; height:100%;"
      ></iframe>`;
    } else {
      popupMedia.innerHTML = `<img
        src="${url}"
        alt="Preview"
        style="width:100%; height:100%; object-fit:contain;"
      >`;
    }
    popupOverlay.classList.add("active");
  };

  window.closePopup = () => {
    popupOverlay.classList.remove("active");
    popupMedia.innerHTML = "";
  };

  // ===== Detail Popup for all portfolio cards =====
  function openDetailPopup(item) {
    let detailOverlay = document.getElementById("detailPopupOverlay");
    if (!detailOverlay) {
      detailOverlay = document.createElement("div");
      detailOverlay.id = "detailPopupOverlay";
      detailOverlay.className = "detail-popup-overlay";
      document.body.appendChild(detailOverlay);

      detailOverlay.addEventListener("click", function(e) {
        if (e.target === detailOverlay) closeDetailPopup();
      });
      document.addEventListener("keydown", function(e) {
        if (e.key === "Escape") closeDetailPopup();
      });
    }

    // Get translated text
    const translated = (typeof getPortfolioText === 'function') ? getPortfolioText(item.title) : null;
    const displayTitle = translated ? translated.title : item.title;
    const displayDesc = translated ? translated.description : item.description;

    // Build body content
    let bodyContent = '';
    if (item.detailHtml) {
      // Rich detail content (AI Agents)
      bodyContent = item.detailHtml;
    } else {
      // Auto-generated: scrollable full screenshot + description
      bodyContent = '<h3>' + displayTitle + '</h3>' +
        '<p class="detail-subtitle">' + displayDesc + '</p>' +
        '<div class="detail-fullimg-scroll"><img src="' + item.imageUrl + '" alt="' + displayTitle + '"></div>' +
        '<div class="detail-tags"><span>' + item.category + '</span></div>';
    }

    // Optional Visit Site link
    let actionsHtml = '';
    if (item.siteUrl) {
      actionsHtml = '<div class="detail-popup-actions">' +
        '<a href="' + item.siteUrl + '" target="_blank" rel="noopener noreferrer" class="detail-visit-btn"><i class="fa-solid fa-arrow-up-right-from-square"></i> Truy cập Website</a>' +
      '</div>';
    }

    detailOverlay.innerHTML = '<div class="detail-popup-modal">' +
      '<button class="detail-popup-close" onclick="closeDetailPopup()">&times;</button>' +
      '<div class="detail-popup-body">' +
        bodyContent +
        actionsHtml +
      '</div>' +
    '</div>';

    detailOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  window.closeDetailPopup = function() {
    const overlay = document.getElementById("detailPopupOverlay");
    if (overlay) {
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  };

  // Expose rerender for i18n
  window.rerenderPortfolio = renderPortfolio;

  // Khởi tạo
  renderFilterButtons();
  renderPortfolio();
});


// hiển thị menu điện thoại 


document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  menuToggle.addEventListener('click', function (e) {
    e.preventDefault();
    mobileMenu.classList.toggle('active');
  });
});



function setActiveNavLink() {
  const hash = window.location.hash || '#home';
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === hash) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

window.addEventListener('hashchange', setActiveNavLink);
window.addEventListener('load', setActiveNavLink);



// ===== HIRE ME POPUP =====
function openHirePopup() {
  const popup = document.getElementById('hirePopup');
  popup.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent background scroll
}

function closeHirePopup() {
  const popup = document.getElementById('hirePopup');
  popup.classList.remove('active');
  document.body.style.overflow = ''; // Restore scroll
}

// Close popup when clicking outside modal
document.addEventListener('click', function (e) {
  const popup = document.getElementById('hirePopup');
  if (e.target === popup) {
    closeHirePopup();
  }
});

// Close popup with Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeHirePopup();
  }
});

// Handle form submission
function sendHireMessage(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const message = form.querySelector('textarea').value;

  // Create mailto link with form data
  const subject = encodeURIComponent(`Hire Request from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  const mailtoLink = `mailto:trantrungkien14092002@gmail.com?subject=${subject}&body=${body}`;

  window.location.href = mailtoLink;

  // Show success feedback
  const submitBtn = form.querySelector('.popup-submit-btn');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<i class="fas fa-check"></i> Opening Email...';
  submitBtn.style.background = '#28a745';

  setTimeout(() => {
    submitBtn.innerHTML = originalText;
    submitBtn.style.background = '';
    form.reset();
    closeHirePopup();
  }, 2000);
}
