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
    { title: "Hệ Sinh Thái 3 AI Agents", description: "Giải pháp tự động hoá Marketing đa kênh — Research Bot, Ads Automation, Auto Post. Telegram Bot làm trung tâm điều khiển.", category: "AI / SaaS", imageUrl: "./img/portfolio-projects/ai-agents.png", siteUrl: "https://www.mercytechglobal.com/" },
  ];

  const categories = ["All", "E-Commerce", "Product Landing", "AI / SaaS", "Mobile App", "EdTech"];
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
      const visitBtn = document.createElement("a");
      visitBtn.href = item.siteUrl;
      visitBtn.target = "_blank";
      visitBtn.rel = "noopener noreferrer";
      visitBtn.className = "visit-site-btn";
      visitBtn.innerHTML = '<i class="fa-solid fa-arrow-up-right-from-square"></i> Visit Site';
      overlay.appendChild(visitBtn);
      thumbDiv.appendChild(overlay);

      div.appendChild(thumbDiv);

      // Build info section
      const contentDiv = document.createElement("div");
      contentDiv.className = "portfolio-content";
      contentDiv.innerHTML = '<h4>' + item.title + '</h4><p>' + item.description + '</p><span class="portfolio-category-tag">' + item.category + '</span>';
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
