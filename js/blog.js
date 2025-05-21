import { datablogs } from './dataBlog.js';

document.addEventListener('DOMContentLoaded', () => {
  let visiblePosts = 6;
  const blogGrid = document.getElementById('blogGrid');
  const loadMoreBtn = document.getElementById('loadMore');

  function renderBlogPosts() {
    // xoá cũ
    blogGrid.innerHTML = '';
    // render
    datablogs
      .slice(0, visiblePosts)
      .forEach(blog => {
        const card = document.createElement('div');
        card.className = 'blog-card';
        card.innerHTML = `
          <img src="${blog.imageUrl || './work.jpg'}" 
               alt="${blog.title}" 
               class="blog-image">
               
          <div class="blog-content">
          <div class="blog-tags">
              ${(blog.tags || []).map(tag =>
          `<span class="blog-tag">${tag} </span>`

        ).join('')}
            <h3 class="blog-title">${blog.title}</h3>
            <p class="blog-excerpt">${blog.content[0] || ''}</p>
                                    <div class="blog-date">${blog.date}</div>

            </div>


          </div>`;
        blogGrid.appendChild(card);
      });

    // cập nhật nút Load More
    const remaining = datablogs.length - visiblePosts;
    if (remaining > 0) {
      loadMoreBtn.style.display = 'block';
      loadMoreBtn.textContent = `Load More (${remaining})`;
    } else {
      loadMoreBtn.style.display = 'none';
    }
  }

  loadMoreBtn.addEventListener('click', () => {
    visiblePosts += 3;
    renderBlogPosts();
  });

  // lần đầu render
  renderBlogPosts();
});
