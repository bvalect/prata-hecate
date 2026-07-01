/* =========================================================
   CONFIGURACIÓN — EDITA ESTOS DATOS CON LOS TUYOS
   ========================================================= */
const CONFIG = {
  whatsappNumber: "5551995277640", // Número real de WhatsApp
  instagramUser: "prata.hecate",   // Reemplaza por tu usuario de Instagram
  usdBrlRate: 5.18,   // 1 USD = X BRL. Actualiza este número cuando cambie el dólar.
  marginDivisor: 0.4  // Precio de venta = costo / marginDivisor (0.4 = margen del 60%).
};

let currentLang = localStorage.getItem("lang") || "es";
let currentCategory = "todos";
let cart = JSON.parse(localStorage.getItem("cart") || "{}"); // { productId: qty }

/* ---------- i18n ---------- */
function applyTranslations() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = I18N[currentLang][key];
    if (text) el.textContent = text;
  });
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyTranslations();
  renderProducts();
  renderCart();
  initContactLinks();
}

/* ---------- WhatsApp helpers ---------- */
function buildWhatsappLink(message) {
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function genericWhatsappMessage() {
  return currentLang === "pt"
    ? "Olá! Vi o catálogo da Prata Hécate e gostaria de mais informações."
    : "¡Hola! Vi el catálogo de Prata Hécate y quisiera más información.";
}

/* ---------- Precio: costo (BRL) -> precio de venta mostrado ---------- */
function salePriceBRL(costBRL) {
  return costBRL / CONFIG.marginDivisor;
}

function formatBRL(valueBRL) {
  return `R$ ${valueBRL.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function formatUSD(valueBRL) {
  const usd = valueBRL / CONFIG.usdBrlRate;
  return `US$ ${usd.toLocaleString("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

/* En español se muestran ambas monedas (USD y BRL), ya que la tasa de cambio
   no siempre es clara para quien compra. En portugués solo se muestra BRL. */
function formatPrice(valueBRL) {
  if (currentLang === "pt") {
    return formatBRL(valueBRL);
  }
  return `${formatUSD(valueBRL)} (${formatBRL(valueBRL)})`;
}

function findProduct(id) {
  return PRODUCTS.find((p) => p.id === id);
}

/* Devuelve el HTML del recuadro de foto: galería (2+ fotos), foto única, o ícono de reemplazo. */
function mediaHTML(product) {
  if (product.images && product.images.length > 1) {
    const dots = product.images
      .map((_, i) => `<span class="dot${i === 0 ? " active" : ""}"></span>`)
      .join("");
    return `
      <img src="${product.images[0]}" alt="${product.name[currentLang]}">
      <button class="media-nav media-prev" data-id="${product.id}" aria-label="Anterior">&lsaquo;</button>
      <button class="media-nav media-next" data-id="${product.id}" aria-label="Siguiente">&rsaquo;</button>
      <div class="media-dots">${dots}</div>
    `;
  }
  if (product.image) {
    return `<img src="${product.image}" alt="${product.name[currentLang]}">`;
  }
  return `${CATEGORY_ICONS[product.category] || ""}<span class="placeholder-label">${I18N[currentLang]["product.photoSoon"]}</span>`;
}

/* ---------- Render de productos ---------- */
function renderProducts() {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  const list = PRODUCTS.filter(
    (p) => currentCategory === "todos" || p.category === currentCategory
  );

  list.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";

    const media = mediaHTML(product);

    const categoryLabelKey = {
      aneis: "cat.rings",
      brincos: "cat.earrings",
      colares: "cat.necklaces",
      pulseiras: "cat.bracelets",
      pingentes: "cat.pendants"
    }[product.category];

    const hasPrice = product.cost !== null;
    const priceLabel = hasPrice
      ? formatPrice(salePriceBRL(product.cost))
      : I18N[currentLang]["product.priceTBD"];

    card.innerHTML = `
      <div class="product-media" data-idx="0">${media}</div>
      <div class="product-body">
        <p class="product-category">${I18N[currentLang][categoryLabelKey] || ""}</p>
        <h3 class="product-name">${product.name[currentLang]}</h3>
        <p class="product-desc">${product.desc[currentLang]}</p>
        <p class="product-price">${priceLabel}</p>
        <button class="product-cta add-to-cart-btn" data-id="${product.id}" ${hasPrice ? "" : "disabled"}>
          ${I18N[currentLang]["product.addToCart"]}
        </button>
      </div>
    `;

    grid.appendChild(card);
  });

  grid.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
    btn.addEventListener("click", () => addToCart(btn.dataset.id));
  });

  grid.querySelectorAll(".media-nav").forEach((btn) => {
    btn.addEventListener("click", () => {
      const product = findProduct(btn.dataset.id);
      const mediaEl = btn.closest(".product-media");
      const delta = btn.classList.contains("media-next") ? 1 : -1;
      const idx = (parseInt(mediaEl.dataset.idx, 10) + delta + product.images.length) % product.images.length;
      mediaEl.dataset.idx = idx;
      mediaEl.querySelector("img").src = product.images[idx];
      mediaEl.querySelectorAll(".dot").forEach((dot, i) => dot.classList.toggle("active", i === idx));
    });
  });
}

/* ---------- Carrito ---------- */
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(productId) {
  cart[productId] = (cart[productId] || 0) + 1;
  saveCart();
  renderCart();
  openCart();
}

function changeQty(productId, delta) {
  const next = (cart[productId] || 0) + delta;
  if (next <= 0) {
    delete cart[productId];
  } else {
    cart[productId] = next;
  }
  saveCart();
  renderCart();
}

function removeFromCart(productId) {
  delete cart[productId];
  saveCart();
  renderCart();
}

function clearCart() {
  cart = {};
  saveCart();
  renderCart();
}

function cartEntries() {
  return Object.entries(cart)
    .map(([id, qty]) => ({ product: findProduct(id), qty }))
    .filter((entry) => entry.product);
}

function cartTotalBRL() {
  return cartEntries().reduce(
    (sum, { product, qty }) => sum + salePriceBRL(product.cost) * qty,
    0
  );
}

function cartCount() {
  return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}

function renderCart() {
  const itemsEl = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");
  const badgeEl = document.getElementById("cartBadge");
  const checkoutBtn = document.getElementById("cartCheckout");
  const clearBtn = document.getElementById("cartClear");
  const entries = cartEntries();

  badgeEl.textContent = String(cartCount());
  badgeEl.classList.toggle("visible", cartCount() > 0);

  if (entries.length === 0) {
    itemsEl.innerHTML = `<p class="cart-empty">${I18N[currentLang]["cart.empty"]}</p>`;
  } else {
    itemsEl.innerHTML = entries
      .map(({ product, qty }) => {
        const lineTotal = salePriceBRL(product.cost) * qty;
        return `
          <div class="cart-item">
            <div class="cart-item-row-top">
              <div class="cart-item-info">
                <p class="cart-item-name">${product.name[currentLang]}</p>
                <p class="cart-item-price">${formatPrice(salePriceBRL(product.cost))} ${currentLang === "pt" ? "cada" : "c/u"}</p>
              </div>
              <button class="cart-item-remove" data-id="${product.id}" aria-label="${I18N[currentLang]["cart.remove"]}">&times;</button>
            </div>
            <div class="cart-item-row-bottom">
              <div class="cart-item-controls">
                <button class="qty-btn" data-action="dec" data-id="${product.id}">-</button>
                <span class="qty-value">${qty}</span>
                <button class="qty-btn" data-action="inc" data-id="${product.id}">+</button>
              </div>
              <div class="cart-item-total">${formatPrice(lineTotal)}</div>
            </div>
          </div>
        `;
      })
      .join("");
  }

  totalEl.textContent = formatPrice(cartTotalBRL());
  checkoutBtn.href = buildWhatsappLink(buildCartWhatsappMessage());
  checkoutBtn.classList.toggle("disabled", entries.length === 0);
  clearBtn.disabled = entries.length === 0;

  itemsEl.querySelectorAll(".qty-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      changeQty(btn.dataset.id, btn.dataset.action === "inc" ? 1 : -1);
    });
  });
  itemsEl.querySelectorAll(".cart-item-remove").forEach((btn) => {
    btn.addEventListener("click", () => removeFromCart(btn.dataset.id));
  });
}

function buildCartWhatsappMessage() {
  const entries = cartEntries();
  const intro = currentLang === "pt"
    ? "Olá! Quero fazer este pedido na Prata Hécate:"
    : "¡Hola! Quiero hacer este pedido en Prata Hécate:";

  const lines = entries.map(({ product, qty }) => {
    const lineTotal = formatPrice(salePriceBRL(product.cost) * qty);
    return `• ${qty}x ${product.name[currentLang]} — ${lineTotal}`;
  });

  const totalLabel = currentLang === "pt" ? "Total" : "Total";
  const total = `${totalLabel}: ${formatPrice(cartTotalBRL())}`;

  return [intro, "", ...lines, "", total].join("\n");
}

function openCart() {
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("cartOverlay").classList.add("open");
  document.getElementById("cartDrawer").setAttribute("aria-hidden", "false");
}

function closeCart() {
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("cartOverlay").classList.remove("open");
  document.getElementById("cartDrawer").setAttribute("aria-hidden", "true");
}

function initCart() {
  document.getElementById("cartBtn").addEventListener("click", openCart);
  document.getElementById("cartClose").addEventListener("click", closeCart);
  document.getElementById("cartOverlay").addEventListener("click", closeCart);
  document.getElementById("cartClear").addEventListener("click", clearCart);
  renderCart();
}

/* ---------- Filtro de categorías ---------- */
function initCategoryTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      currentCategory = tab.dataset.category;
      renderProducts();
    });
  });
}

/* ---------- Menú móvil ---------- */
function initMobileNav() {
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("mainNav");
  hamburger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- Selector de idioma ---------- */
function initLangSwitch() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });
}

/* ---------- Enlaces de contacto ---------- */
function initContactLinks() {
  const wa = document.getElementById("footerWhatsapp");
  const ig = document.getElementById("footerInstagram");
  wa.href = buildWhatsappLink(genericWhatsappMessage());
  ig.href = `https://instagram.com/${CONFIG.instagramUser}`;
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  applyTranslations();
  initCategoryTabs();
  initMobileNav();
  initLangSwitch();
  initContactLinks();
  initCart();
  renderProducts();
});
