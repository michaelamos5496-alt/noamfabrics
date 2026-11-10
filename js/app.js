/* NOAM storefront — cart, listing and product page logic. */
(function () {
  "use strict";

  var data = window.NOAM;
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  var money = { format: function (n) { return "GH₵" + Number(n).toLocaleString("en-GH"); } };
  var byId = function (id) { return data.products.filter(function (p) { return p.id === id; })[0]; };
  var cat = function (id) { return data.categories.filter(function (c) { return c.id === id; })[0]; };
  var catName = function (id) { var c = cat(id); return c ? c.name : id; };
  // price and selling unit come from the product, or else from its category
  var priceOf = function (p) { return p.price != null ? p.price : cat(p.category).price; };
  var packOf = function (p) { return p.pack != null ? p.pack : (cat(p.category).pack || 1); };
  var unitLabel = function (p) { return packOf(p) === 1 ? "yard" : packOf(p) + " yards"; };
  var qtyLabel = function (p, n) { return packOf(p) === 1 ? n + " yd" : n + " × " + packOf(p) + " yd"; };
  var catShort = function (id) { var c = cat(id); return c ? c.short : id; };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  };

  /* ---------------- cart store ---------------- */
  var KEY = "noam-cart";
  var cart = (function () {
    try {
      var raw = JSON.parse(localStorage.getItem(KEY) || "[]");
      return Array.isArray(raw) ? raw.filter(function (l) { return byId(l.id) && l.qty > 0; }) : [];
    } catch (e) { return []; }
  })();

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(cart)); } catch (e) { /* storage unavailable */ }
    renderCart();
  }
  function setQty(id, qty) {
    var line = cart.filter(function (l) { return l.id === id; })[0];
    if (qty <= 0) { cart = cart.filter(function (l) { return l.id !== id; }); }
    else if (line) { line.qty = qty; }
    else { cart.push({ id: id, qty: qty }); }
    save();
  }
  function addToCart(id, qty) {
    var line = cart.filter(function (l) { return l.id === id; })[0];
    setQty(id, (line ? line.qty : 0) + qty);
  }

  /* ---------------- cart drawer ---------------- */
  function buildDrawer() {
    var wrap = document.createElement("div");
    wrap.innerHTML =
      '<div class="scrim" data-cart-close></div>' +
      '<aside class="drawer" aria-label="Cart" aria-hidden="true">' +
        '<div class="drawer__head"><span class="label">Your cart</span>' +
        '<button class="label" data-cart-close>Close</button></div>' +
        '<div class="drawer__body"></div>' +
        '<div class="drawer__foot">' +
          '<div class="drawer__total"><span>Subtotal</span><span data-cart-total></span></div>' +
          '<p class="drawer__note">Shipping and taxes are calculated at checkout.</p>' +
          '<button class="btn" data-checkout>Checkout</button>' +
        '</div>' +
      '</aside>';
    while (wrap.firstChild) document.body.appendChild(wrap.firstChild);
  }

  function renderCart() {
    var count = cart.reduce(function (n, l) { return n + l.qty; }, 0);
    $$("[data-cart-count]").forEach(function (el) { el.textContent = count; });

    var body = $(".drawer__body");
    if (!body) return;

    if (!cart.length) {
      body.innerHTML = '<p class="drawer__empty">Your cart is empty.</p>';
    } else {
      body.innerHTML = cart.map(function (l) {
        var p = byId(l.id);
        return '<div class="line" data-id="' + esc(p.id) + '">' +
          '<a href="product.html?id=' + encodeURIComponent(p.id) + '"><img src="' + esc(p.image) + '" alt=""></a>' +
          '<div>' +
            '<div class="line__top"><span>' + esc(p.name) + '</span><span>' + money.format(priceOf(p) * l.qty) + '</span></div>' +
            '<div class="line__meta">' + esc(catShort(p.category)) + ' · ' + money.format(priceOf(p)) + ' / ' + esc(unitLabel(p)) + '</div>' +
            '<div class="line__bottom">' +
              '<div class="qty"><button data-step="-1" aria-label="Less">−</button>' +
              '<output>' + esc(qtyLabel(p, l.qty)) + '</output>' +
              '<button data-step="1" aria-label="More">+</button></div>' +
              '<button class="line__remove" data-remove>Remove</button>' +
            '</div>' +
          '</div></div>';
      }).join("");
    }

    var total = cart.reduce(function (n, l) { return n + priceOf(byId(l.id)) * l.qty; }, 0);
    $("[data-cart-total]").textContent = money.format(total);
    $("[data-checkout]").disabled = !cart.length;
  }

  function openCart(open) {
    document.body.classList.toggle("cart-open", open);
    document.body.classList.toggle("is-locked", open);
    $(".drawer").setAttribute("aria-hidden", String(!open));
  }

  function bindCart() {
    document.addEventListener("click", function (e) {
      var t = e.target;
      if (t.closest("[data-cart-open]")) { e.preventDefault(); openCart(true); return; }
      if (t.closest("[data-cart-close]")) { openCart(false); return; }

      var line = t.closest(".line");
      if (line) {
        var id = line.getAttribute("data-id");
        var current = cart.filter(function (l) { return l.id === id; })[0];
        if (t.closest("[data-remove]")) setQty(id, 0);
        var step = t.closest("[data-step]");
        if (step && current) setQty(id, current.qty + Number(step.getAttribute("data-step")));
      }

      if (t.closest("[data-checkout]")) {
        // Checkout is not connected to a payment provider yet.
        t.closest("[data-checkout]").textContent = "Checkout coming soon";
      }
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") openCart(false); });
    if (location.hash === "#cart") openCart(true);
  }

  /* ---------------- shared rendering ---------------- */
  function card(p) {
    return '<a class="card" href="product.html?id=' + encodeURIComponent(p.id) + '">' +
      '<div class="card__img"><img src="' + esc(p.image) + '" alt="' + esc(p.name) + ' fabric" loading="lazy"></div>' +
      '<div class="card__row"><h3 class="card__name">' + esc(p.name) + '</h3>' +
      '<span class="card__price">' + money.format(priceOf(p)) + ' / ' + esc(unitLabel(p)) + '</span></div>' +
      '<p class="card__cat">' + esc(catShort(p.category)) + '</p></a>';
  }

  /* ---------------- home: fabric panel strip ---------------- */
  function initHome() {
    var track = $("[data-strip]");
    if (!track) return;

    // one panel per category, using that category's first fabric as the picture
    track.innerHTML = data.categories.map(function (c) {
      var first = data.products.filter(function (p) { return p.category === c.id; })[0];
      return '<a class="panel" href="shop.html?category=' + encodeURIComponent(c.id) + '" draggable="false">' +
        (first ? '<img src="' + esc(c.image || first.image) + '" alt="' + esc(c.name) + '" loading="lazy" draggable="false">' : '') +
        '<span class="panel__bar"><span class="panel__name">' + esc(c.name) + '</span>' +
        '<span class="panel__pill">Shop</span></span></a>';
    }).join("");

    // drag to scroll with a mouse; touch and trackpads scroll natively
    var startX = 0, startLeft = 0, down = false, moved = false;
    track.addEventListener("pointerdown", function (e) {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      down = true; moved = false; startX = e.clientX; startLeft = track.scrollLeft;
    });
    window.addEventListener("pointermove", function (e) {
      if (!down) return;
      var dx = e.clientX - startX;
      if (!moved && Math.abs(dx) > 5) { moved = true; track.classList.add("is-dragging"); }
      if (moved) track.scrollLeft = startLeft - dx;
    });
    window.addEventListener("pointerup", function () {
      down = false;
      setTimeout(function () { track.classList.remove("is-dragging"); }, 0);
    });
    track.addEventListener("click", function (e) { if (moved) { e.preventDefault(); moved = false; } }, true);
    track.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        track.scrollBy({ left: (e.key === "ArrowRight" ? 1 : -1) * window.innerWidth * 0.3, behavior: "smooth" });
      }
    });
  }

  /* ---------------- shop page ---------------- */
  function initShop() {
    var grid = $("[data-grid]");
    var filters = $("[data-filters]");
    var params = new URLSearchParams(location.search);
    var active = params.get("category") || "all";
    if (active !== "all" && !data.categories.some(function (c) { return c.id === active; })) active = "all";

    filters.innerHTML = [{ id: "all", name: "All" }].concat(data.categories).map(function (c) {
      return '<button class="label" data-cat="' + esc(c.id) + '">' + esc(c.name) + '</button>';
    }).join("");

    function render() {
      $$("button", filters).forEach(function (b) {
        b.setAttribute("aria-pressed", String(b.getAttribute("data-cat") === active));
      });
      var list = data.products.filter(function (p) { return active === "all" || p.category === active; });
      $("[data-shop-title]").textContent = active === "all" ? "All fabrics" : catName(active);
      $("[data-shop-count]").textContent = active === "all"
        ? list.length + " fabrics"
        : cat(active).tagline;
      grid.innerHTML = list.length ? list.map(card).join("") : '<p class="empty">Nothing here yet.</p>';
    }

    filters.addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (!b) return;
      active = b.getAttribute("data-cat");
      var url = active === "all" ? "shop.html" : "shop.html?category=" + encodeURIComponent(active);
      try { history.replaceState(null, "", url); } catch (err) { /* file:// may refuse */ }
      render();
    });

    render();
  }

  /* ---------------- product page ---------------- */
  function initProduct() {
    var root = $("[data-product]");
    var p = byId(new URLSearchParams(location.search).get("id"));

    if (!p) {
      root.innerHTML = '<p class="empty">We couldn’t find that fabric. <a class="text-link label" href="shop.html">Back to the shop</a></p>';
      return;
    }

    document.title = p.name + " — Noam Fabrics";
    var qty = 1;

    root.innerHTML =
      '<div class="product">' +
        '<div class="product__media">' +
          '<div class="product__img"><img data-main src="' + esc(p.image) + '" alt="' + esc(p.name) + ' fabric"></div>' +
          (p.images && p.images.length > 1
            ? '<div class="thumbs">' + p.images.map(function (src, i) {
                return '<button data-thumb="' + esc(src) + '" aria-label="View image ' + (i + 1) + '"' + (i === 0 ? ' aria-current="true"' : '') + '><img src="' + esc(src) + '" alt=""></button>';
              }).join("") + '</div>'
            : '') +
        '</div>' +
        '<div class="product__info">' +
          '<p class="crumbs label"><a href="shop.html">Shop</a> / <a href="shop.html?category=' + encodeURIComponent(p.category) + '">' + esc(catShort(p.category)) + '</a></p>' +
          '<h1 class="product__name">' + esc(p.name) + '</h1>' +
          '<p class="product__price">' + money.format(priceOf(p)) + (packOf(p) === 1 ? ' per yard' : ' for ' + packOf(p) + ' yards') + '</p>' +
          '<p class="product__desc">' + esc(p.description) + '</p>' +
          '<dl class="specs">' +
            '<div><dt>Category</dt><dd>' + esc(catName(p.category)) + '</dd></div>' +
            (p.composition ? '<div><dt>Composition</dt><dd>' + esc(p.composition) + '</dd></div>' : '') +
            '<div><dt>Sold</dt><dd>' + (packOf(p) === 1 ? 'By the yard' : 'In ' + packOf(p) + '-yard pieces') + '</dd></div>' +
          '</dl>' +
          '<div class="buy">' +
            '<div class="qty"><button data-q="-1" aria-label="Less">−</button>' +
            '<output data-q-out></output>' +
            '<button data-q="1" aria-label="More">+</button></div>' +
            '<button class="btn btn--grow" data-add>Add to cart · <span data-add-total></span></button>' +
          '</div>' +
        '</div>' +
      '</div>';

    function sync() {
      $("[data-q-out]").textContent = qtyLabel(p, qty);
      $("[data-add-total]").textContent = money.format(priceOf(p) * qty);
    }
    sync();

    root.addEventListener("click", function (e) {
      var th = e.target.closest("[data-thumb]");
      if (th) {
        $("[data-main]", root).src = th.getAttribute("data-thumb");
        $$("[data-thumb]", root).forEach(function (b) { b.removeAttribute("aria-current"); });
        th.setAttribute("aria-current", "true");
      }
      var q = e.target.closest("[data-q]");
      if (q) { qty = Math.max(1, Math.min(99, qty + Number(q.getAttribute("data-q")))); sync(); }
      if (e.target.closest("[data-add]")) { addToCart(p.id, qty); openCart(true); }
    });

    var related = data.products.filter(function (x) { return x.id !== p.id && x.category === p.category; })
      .concat(data.products.filter(function (x) { return x.category !== p.category; }))
      .slice(0, 4);
    $("[data-related]").innerHTML = related.map(card).join("");
  }

  /* ---------------- chrome ---------------- */
  function initScroll() {
    var onScroll = function () {
      var limit = document.body.classList.contains("home") ? window.innerHeight * 0.7 : 20;
      document.body.classList.toggle("is-scrolled", window.scrollY > limit);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    var items = $$(".reveal");
    if (!("IntersectionObserver" in window)) { items.forEach(function (el) { el.classList.add("is-in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { threshold: 0.2 });
    items.forEach(function (el) { io.observe(el); });
  }

  buildDrawer();
  bindCart();
  renderCart();
  initScroll();

  var page = document.body.getAttribute("data-page");
  if (page === "home") initHome();
  if (page === "shop") initShop();
  if (page === "product") initProduct();
})();
