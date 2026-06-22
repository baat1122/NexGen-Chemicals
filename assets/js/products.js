/* ==========================================================================
   NexGen Chemicals - Products Catalog & Details Engine
   ========================================================================== */
const catalogProducts = window.productsData;
const isUrdu = document.documentElement.lang === 'ur';

document.addEventListener('DOMContentLoaded', () => {
  // Check if we are on the Catalog page or the Details page
  if (document.getElementById('products-catalog-grid')) {
    initCatalogPage();
  } else if (document.getElementById('product-detail-view')) {
    initDetailPage();
  }
});

/**
 * Catalog Page Logic
 * Search, filter and dynamically populate agricultural chemical product grid
 */
function initCatalogPage() {
  const grid = document.getElementById('products-catalog-grid');
  const searchInput = document.getElementById('catalog-search');
  const filterContainer = document.getElementById('filter-tags-container');

  if (!grid) return;

  // Read initial category filter from URL query string (e.g. ?category=Herbicide)
  const urlParams = new URLSearchParams(window.location.search);
  let activeCategory = urlParams.get('category') || 'All';

  // Set active class on corresponding button
  updateFilterButtons(activeCategory);

  // Render initial set
  renderProducts(activeCategory, searchInput ? searchInput.value : '');

  // Filter button clicks
  if (filterContainer) {
    filterContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-tag-btn');
      if (!btn) return;

      activeCategory = btn.dataset.category;
      updateFilterButtons(activeCategory);
      renderProducts(activeCategory, searchInput ? searchInput.value : '');

      // Update URL query string silently without reloading page
      const newUrl = activeCategory === 'All' 
        ? window.location.pathname 
        : `${window.location.pathname}?category=${encodeURIComponent(activeCategory)}`;
      window.history.pushState({ path: newUrl }, '', newUrl);
    });
  }

  // Search input typing
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderProducts(activeCategory, searchInput.value);
    });
  }

  function updateFilterButtons(category) {
    const buttons = document.querySelectorAll('.filter-tag-btn');
    buttons.forEach(btn => {
      if (btn.dataset.category === category) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  function renderProducts(category, query) {
    grid.innerHTML = '';
    const filtered = catalogProducts.filter(prod => {
      const matchesCategory = category === 'All' || prod.category === category;
      
      let matchesQuery = true;
      if (query) {
        const lowerQuery = query.toLowerCase();
        if (isUrdu) {
          const nameMatch = (prod.name_ur || '').toLowerCase().includes(lowerQuery) || prod.name.toLowerCase().includes(lowerQuery);
          const taglineMatch = (prod.tagline_ur || '').toLowerCase().includes(lowerQuery) || prod.tagline.toLowerCase().includes(lowerQuery);
          const compMatch = (prod.composition_ur || prod.composition || '').toLowerCase().includes(lowerQuery);
          const targetMatch = (prod.target_ur || prod.target || '').toLowerCase().includes(lowerQuery);
          matchesQuery = nameMatch || taglineMatch || compMatch || targetMatch;
        } else {
          const nameMatch = prod.name.toLowerCase().includes(lowerQuery);
          const taglineMatch = prod.tagline.toLowerCase().includes(lowerQuery);
          const compMatch = prod.composition.toLowerCase().includes(lowerQuery);
          const targetMatch = prod.target.toLowerCase().includes(lowerQuery);
          matchesQuery = nameMatch || taglineMatch || compMatch || targetMatch;
        }
      }
      
      return matchesCategory && matchesQuery;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `<div class="no-products-message">${isUrdu ? "مطلوبہ پروڈکٹ نہیں ملی! آپ کی تلاش یا منتخب کردہ کیٹیگری کے مطابق کوئی پروڈکٹ دستیاب نہیں ہے۔" : "No products found! No products matched your search query or selected category."}</div>`;
      return;
    }

    filtered.forEach(prod => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.setAttribute('data-fade', '');
      
      card.innerHTML = `
        <div class="product-card-top">
          <span class="product-category">${isUrdu ? (prod.category_ur || prod.category) : prod.category}</span>
          <div class="product-packshot-wrapper">
            <img class="product-packshot-img" src="${prod.packshot}" alt="${prod.name} Packshot" loading="lazy">
          </div>
          <div class="product-info">
            <h3 class="product-name">${isUrdu ? (prod.name_ur || prod.name) : prod.name}</h3>
            <p class="product-tagline">${isUrdu ? (prod.tagline_ur || prod.tagline) : prod.tagline}</p>
            <div class="product-price">Rs. ${prod.price.toLocaleString('en-US')}</div>
          </div>
        </div>
        <div class="product-card-bottom">
          <a class="product-learn-more-btn" href="${isUrdu ? 'product-detail-ur.html' : 'product-detail.html'}?product=${prod.id}">
            ${isUrdu ? 'تفصیلات دیکھیں' : 'Learn More'}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      `;
      grid.appendChild(card);
      
      // Trigger fade-in stagger animation micro-interaction
      setTimeout(() => {
        card.classList.add('visible');
      }, 50);
    });
  }
}

/**
 * Details Page Logic
 * Read dynamic parameter product identifier and render complete specification specs
 */
function initDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('product');

  if (!productId) {
    redirectToCatalog();
    return;
  }

  const prod = catalogProducts.find(p => p.id === productId);
  if (!prod) {
    redirectToCatalog();
    return;
  }

  // Set SEO tags dynamically
  document.title = `${prod.name} - ${prod.category} | NexGen Chemicals`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', `${prod.name}: ${prod.tagline} Chemical composition: ${prod.composition}. Find target pests, recommended dosage, and application safety.`);
  }

  // Populate data
  document.getElementById('detail-category').textContent = isUrdu ? (prod.category_ur || prod.category) : prod.category;
  document.getElementById('detail-title').textContent = isUrdu ? (prod.name_ur || prod.name) : prod.name;
  document.getElementById('detail-description').textContent = isUrdu ? (prod.description_ur || prod.description) : prod.description;
  document.getElementById('detail-composition').textContent = isUrdu ? (prod.composition_ur || prod.composition) : prod.composition;
  document.getElementById('detail-target').textContent = isUrdu ? (prod.target_ur || prod.target) : prod.target;
  document.getElementById('detail-packshot').src = prod.packshot;
  document.getElementById('detail-packshot').alt = `${prod.name} Packaging`;

  // Populate WhatsApp Order Now Button link dynamically
  const orderNowBtn = document.getElementById('detail-whatsapp-order-btn');
  if (orderNowBtn) {
    const message = isUrdu ? `السلام علیکم! مجھے نیکس جین کیمیکلز کا پروڈکٹ "${prod.name}" (${prod.category_ur || prod.category}) آرڈر کرنا ہے۔ برائے مہربانی اس کی مزید معلومات اور قیمت بتا دیں۔` : `Hello! I would like to order "${prod.name}" (${prod.category}) from NexGen Chemicals. Please provide details and pricing.`;
    orderNowBtn.href = `https://wa.me/923008990026?text=${encodeURIComponent(message)}`;
  }

  // Populate prominent price - Removed
  const priceContainer = document.getElementById('detail-price-prominent');
  if (priceContainer) {
    priceContainer.style.display = 'none';
  }

  // Populate packaging details with prices
  const pricingContainer = document.getElementById('detail-pricing-list');
  if (pricingContainer) {
    pricingContainer.innerHTML = '';
    if (prod.sizes && prod.sizes.length > 0) {
      prod.sizes.forEach(sz => {
        const div = document.createElement('div');
        div.className = 'pricing-row-item';
        div.innerHTML = `
          <span class="pack-size"><strong>${isUrdu && sz.size_ur ? sz.size_ur : sz.size}</strong></span>
          <span class="pack-price">Rs. ${sz.price.toLocaleString('en-US')}</span>
        `;
        pricingContainer.appendChild(div);
      });
    } else {
      const div = document.createElement('div');
      div.className = 'pricing-row-item';
      div.innerHTML = `
        <span class="pack-size"><strong>${isUrdu ? "سٹینڈرڈ پیک" : "Standard Pack"}</strong></span>
        <span class="pack-price">Rs. ${prod.price.toLocaleString('en-US')}</span>
      `;
      pricingContainer.appendChild(div);
    }
  }

  // Render dosage chart table
  const tableBody = document.getElementById('dosage-table-body');
  if (tableBody) {
    tableBody.innerHTML = '';
    prod.dosage.forEach(row => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>${isUrdu ? (row.crop_ur || row.crop) : row.crop}</strong></td>
        <td>${isUrdu ? (row.rate_ur || row.rate) : row.rate}</td>
        <td>${isUrdu ? (row.water_ur || row.water) : row.water}</td>
      `;
      tableBody.appendChild(tr);
    });
  }

  // Render safety steps
  const safetyList = document.getElementById('safety-steps-list');
  if (safetyList) {
    safetyList.innerHTML = '';
    const steps = isUrdu ? (prod.safety_ur || prod.safety) : prod.safety;
    steps.forEach(step => {
      const li = document.createElement('li');
      li.textContent = step;
      safetyList.appendChild(li);
    });
  }

  function redirectToCatalog() {
    window.location.href = 'products.html';
  }
}
