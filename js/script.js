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

const track = document.getElementById('track');
const container = document.getElementById('sliderContainer');
const cardWidth = container.offsetWidth / 3; // 3 cards visible
const totalCards = track.children.length;
const groupSize = 3;
const totalDots = Math.ceil(totalCards / groupSize);
let currentIndex = 0;

let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let dragging = false;

// Tạo dot: mỗi 3 card 1 dot
const dotsContainer = document.getElementById("sliderDots");
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

// Cập nhật vị trí slider + dot
function updateSlider() {
  currentTranslate = -currentIndex * cardWidth;
  track.style.transform = `translateX(${currentTranslate}px)`;
  prevTranslate = currentTranslate;

  const dots = document.querySelectorAll('.slider-dots .dot');
  dots.forEach(dot => dot.classList.remove('active'));

  const dotIndex = Math.floor(currentIndex / groupSize);
  if (dots[dotIndex]) {
    dots[dotIndex].classList.add('active');
  }
}

// Tự động trượt từng card
function slideNext() {
  currentIndex = (currentIndex + 1) % (totalCards - 3 + 1);
  updateSlider();
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(slideNext, 4000);
}

let autoSlide = setInterval(slideNext, 4000);

// Kéo chuột / cảm ứng
container.addEventListener("mousedown", startDrag);
container.addEventListener("touchstart", startDrag);
container.addEventListener("mouseup", endDrag);
container.addEventListener("mouseleave", endDrag);
container.addEventListener("touchend", endDrag);
container.addEventListener("mousemove", drag);
container.addEventListener("touchmove", drag);

function startDrag(e) {
  clearInterval(autoSlide);
  dragging = true;
  container.style.cursor = "grabbing";
  startX = getPositionX(e);
}

function endDrag() {
  if (!dragging) return;
  dragging = false;
  container.style.cursor = "grab";

  const movedBy = currentTranslate - prevTranslate;
  if (movedBy < -50 && currentIndex < totalCards - 3) currentIndex++;
  if (movedBy > 50 && currentIndex > 0) currentIndex--;

  updateSlider();
  resetAutoSlide();
}

function drag(e) {
  if (!dragging) return;
  const currentX = getPositionX(e);
  const deltaX = currentX - startX;
  currentTranslate = prevTranslate + deltaX;
  track.style.transform = `translateX(${currentTranslate}px)`;
}

function getPositionX(e) {
  return e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
}

updateSlider();



// portfolio 
// js/script.js (hoặc chèn trong <script>…</script>)

document.addEventListener('DOMContentLoaded', () => {
  const portfolioItems = [
    { title: "Babel Admin", description: "Admin template.", category: "Web Design", imageUrl: "../img/portfolio/work2.jpg" },
    { title: "Motion Graph 1", description: "Motion graphic.", category: "Motion Graphic", imageUrl: "../img/portfolio/work.jpg", videoUrl: "https://www.youtube.com/embed/bpOSxM0rNPM?si=7Lvj1_rgIlK8m-CB" },
    { title: "Amazon Travel", description: "Photography.", category: "Photography", imageUrl: "../img/portfolio/work2.jpg" },
    { title: "Workspace", description: "Illustration.", category: "Illustration", imageUrl: "../img/portfolio/work.jpg" },
    { title: "Recoba", description: "HTML theme.", category: "Web Design", imageUrl: "../img/portfolio/work2.jpg" },
    { title: "Motion Graph 2", description: "Motion graphic.", category: "Motion Graphic", imageUrl: "../img/portfolio/work.jpg", videoUrl: "https://www.youtube.com/embed/bpOSxM0rNPM?si=7Lvj1_rgIlK8m-CB" },
    // … thêm bao nhiêu items bạn cần
  ];

  const categories = ["All", "Web Design", "Motion Graphic", "Illustration", "Photography"];
  let currentCategory = "All";
  let visibleCount = 9;  // show 9 items đầu tiên
  const incrementCount = 9;  // mỗi lần load more cũng +9

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
      div.innerHTML = `
        <div class="portfolio-thumb" onclick="openPreview('${item.videoUrl || item.imageUrl}', ${!!item.videoUrl})">
          <img src="${item.imageUrl}" alt="${item.title}">
          ${item.videoUrl ? '<div class="play-button"></div>' : ''}
        </div>
        <div class="portfolio-content">
          <h4>${item.title}</h4>
          <p>${item.description}</p>
        </div>`;
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






