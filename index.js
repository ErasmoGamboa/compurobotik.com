(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver(e => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes) e.tagName === `LINK` && e.rel === `modulepreload` && n(e)
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), e.crossOrigin === `use-credentials` ? t.credentials = `include` : e.crossOrigin === `anonymous` ? t.credentials = `omit` : t.credentials = `same-origin`, t
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n)
  }
})();

var e = document.getElementById(`navbar`),
  t = document.getElementById(`hamburger`),
  n = document.getElementById(`nav-links`);

// ============ LÓGICA DE BUSCADOR Y FILTROS POR CATEGORÍA ============
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('product-search-input');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.catalog-product-card');

  let currentCategory = 'all';
  let searchQuery = '';

  function filterProducts() {
    productCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category') || 'all';
      const cardText = card.textContent.toLowerCase();

      const matchesCategory = (currentCategory === 'all' || cardCategory === currentCategory);
      const matchesSearch = cardText.includes(searchQuery);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'block';
        card.classList.add('visible');
      } else {
        card.style.display = 'none';
        card.classList.remove('visible');
      }
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      filterProducts();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      filterProducts();
    });
  }
});

var c = () => {
  let e = Object.keys(D),
    t = e[Math.floor(Math.random() * e.length)],
    n = [`Caracas`, `Valencia`, `Maracay`, `Barquisimeto`, `Margarita`],
    r = n[Math.floor(Math.random() * n.length)],
    i = document.querySelector(`.sales-toast`);
  i && i.remove();
  let a = document.createElement(`div`);
  a.className = `sales-toast`, a.innerHTML = `🔥 ¡Alguien en <strong>${r}</strong> acaba de pedir <strong>${t}</strong>! 💻`, document.body.appendChild(a), requestAnimationFrame(() => {
    requestAnimationFrame(() => a.classList.add(`show`))
  }), setTimeout(() => {
    a.classList.remove(`show`), setTimeout(() => a.remove(), 400)
  }, 4e3)
};

setInterval(c, Math.random() * 24e4 + 48e4);

var l = !1;
window.addEventListener(`scroll`, () => {
  l ||= (window.requestAnimationFrame(() => {
    e && (window.scrollY > 40 ? e.classList.add(`scrolled`) : e.classList.remove(`scrolled`)), l = !1
  }), !0)
}, { passive: !0 }), t && t.addEventListener(`click`, () => {
  if (n && e) {
    let r = n.classList.toggle(`open`);
    t.classList.toggle(`active`, r), t.setAttribute(`aria-expanded`, r), e.classList.toggle(`menu-open`, r), document.body.style.overflow = r ? `hidden` : ``
  }
}), n && n.querySelectorAll(`a`).forEach(r => {
  r.addEventListener(`click`, () => {
    n.classList.remove(`open`), t && (t.classList.remove(`active`), t.setAttribute(`aria-expanded`, `false`)), e && e.classList.remove(`menu-open`), document.body.style.overflow = ``
  })
});

var D = {
  "Windows 11 Profesional": { price: 12, emoji: `💻` },
  "Windows 10 Professional": { price: 12, emoji: `💻` },
  "Microsoft Office 2021": { price: 15, emoji: `💿` }
},
  O = localStorage.getItem(`shilis_cart`),
  k = O ? JSON.parse(O) : {};

function A() {
  localStorage.setItem(`shilis_cart`, JSON.stringify(k))
}

var j = document.getElementById(`cart-badge`),
  M = document.getElementById(`nav-cart-badge`),
  N = document.getElementById(`nav-cart-btn`),
  P = document.getElementById(`cart-sidebar`),
  F = document.getElementById(`cart-overlay`),
  I = document.getElementById(`cart-items`),
  L = document.getElementById(`floating-cart`),
  R = document.getElementById(`close-cart`),
  z = document.getElementById(`checkout-btn`);

function B() {
  return Object.entries(k).reduce((e, [t, n]) => {
    let r = D[t];
    return e + (r ? r.price * n : 0)
  }, 0)
}

function V() {
  let e = 0;
  if (I) {
    I.innerHTML = ``;
    let t = Object.entries(k);
    if (t.length === 0) I.innerHTML = `
        <div class="empty-cart">
          <div class="empty-cart-icon">🛒</div>
          <p>Tu carrito está vacío</p>
          <p class="empty-cart-hint">Agrega tus programas favoritos</p>
        </div>`;
    else {
      t.forEach(([t, n]) => {
        e += n;
        let r = D[t] || { price: 0, emoji: `💻` },
          i = (r.price * n).toFixed(2),
          a = document.createElement(`div`);
        a.className = `cart-item`, a.innerHTML = `
          <div class="cart-item-info">
            <span class="cart-item-emoji">${r.emoji}</span>
            <div>
              <strong>${t}</strong>
              <span class="cart-item-price"><strong>$${i}</strong> ($${r.price} c/u)</span>
            </div>
          </div>
          <div class="cart-item-qty">
            <button class="qty-btn" data-name="${t}" data-delta="-1">-</button>
            <span class="qty-num">${n}</span>
            <button class="qty-btn" data-name="${t}" data-delta="1">+</button>
          </div>`, I.appendChild(a), a.querySelectorAll(`.qty-btn`).forEach(e => {
          e.addEventListener(`click`, () => {
            let t = e.dataset.name,
              n = parseInt(e.dataset.delta);
            k[t] && (k[t] += n, k[t] <= 0 && delete k[t], V())
          })
        })
      });
      let n = B(),
        r = document.createElement(`div`);
      r.className = `cart-total-row`, r.innerHTML = `
        <span>Total estimado</span>
        <strong>$${n.toFixed(2)}</strong>`, I.appendChild(r);
    }
  }
  if (j && (j.innerText = e, j.style.display = e > 0 ? `flex` : `none`), M && (M.innerText = e, M.style.display = e > 0 ? `flex` : `none`), document.querySelectorAll(`.qty-counter-row`).forEach(e => {
    let t = e.querySelector(`.qc-num`),
      n = e.dataset.productName;
    if (t && n) {
      let e = k[n] || 0;
      t.textContent = e, e === 0 ? t.classList.add(`qc-zero`) : t.classList.remove(`qc-zero`)
    }
  }), z) {
    let e = B(),
      t = Object.values(k).reduce((e, t) => e + t, 0);
    z.innerHTML = `<span>${t > 0 ? `Pedir ahora · $${e.toFixed(2)}` : `Pedir vía WhatsApp`}</span>`, z.disabled = t === 0
  } A()
}

function H(e) {
  k[e] || (k[e] = 0), k[e]++, V(), L && (L.classList.add(`cart-pop`), setTimeout(() => L.classList.remove(`cart-pop`), 400))
}

function U() {
  P && P.classList.add(`open`), F && F.classList.add(`show`)
}

document.querySelectorAll(`.catalog-product-card`).forEach(e => {
  let t = {
    "Windows-11.Professional": [{ name: `Windows 11 Profesional`, price: 12 }],
    "Windows-10-Professional": [{ name: `Windows 10 Professional`, price: 12 }],
    "office-2021": [{ name: `Microsoft Office 2021`, price: 15 }]
  }[e.id];

  if (!t) return;

  let n = e.querySelector(`.catalog-product-info`),
    r = document.createElement(`div`);
  r.className = `qty-counters-wrapper`, t.forEach(({ name: e, price: n }) => {
    let a = document.createElement(`div`);
    a.className = `qty-counter-row`, a.dataset.productName = e, a.innerHTML = `
      <div class="qty-counter-label">
        <span class="qty-counter-price">$${n}</span>
      </div>
      <div class="qty-counter-controls">
        <button class="qc-btn qc-minus">−</button>
        <span class="qc-num qc-zero">0</span>
        <button class="qc-btn qc-plus">+</button>
      </div>`;
    let o = a.querySelector(`.qc-minus`),
      s = a.querySelector(`.qc-plus`),
      c = a.querySelector(`.qc-num`);
    s.addEventListener(`click`, () => {
      H(e), c.textContent = k[e] || 0, c.classList.remove(`qc-zero`)
    }), o.addEventListener(`click`, () => {
      k[e] && k[e] > 0 && (k[e]--, k[e] === 0 && delete k[e], V());
      let t = k[e] || 0;
      c.textContent = t, t === 0 ? c.classList.add(`qc-zero`) : c.classList.remove(`qc-zero`)
    }), r.appendChild(a)
  }), n && n.appendChild(r)
}), [L, N].forEach(e => {
  e && e.addEventListener(`click`, () => U())
}), [R, F].forEach(e => {
  e && e.addEventListener(`click`, () => {
    P && P.classList.remove(`open`), F && F.classList.remove(`show`)
  })
});

var W = document.getElementById(`checkout-modal-overlay`),
  G = document.getElementById(`close-checkout`),
  K = document.getElementById(`checkout-form`),
  q = document.getElementById(`checkout-summary-view`);

function J() {
  K && (K.style.display = `flex`), q && (q.style.display = `none`), W.classList.add(`visible`), document.body.style.overflow = `hidden`
}
function Y() {
  W.classList.remove(`visible`), document.body.style.overflow = ``
}

G && G.addEventListener(`click`, Y), window.addEventListener(`click`, e => {
  e.target === W && Y()
});

z && z.addEventListener(`click`, () => {
  Object.keys(k).length !== 0 && J()
});

K && K.addEventListener(`submit`, e => {
  e.preventDefault();
  let name = document.getElementById(`cust-name`).value;
  let email = document.getElementById(`cust-address`).value;
  let phone = document.getElementById(`cust-phone`).value;
  
  let t = Object.entries(k);
  if (t.length === 0) return;
  let n = B().toFixed(2);
  let r = `Hola equipo de Compurobotik C.A.\n\n*DETALLES DEL PEDIDO* 📝\n👤 *Nombre:* ${name}\n✉️ *Correo:* ${email}\n📞 *Teléfono:* ${phone}\n\n*PRODUCTOS:*\n`;
  t.forEach(([e, t]) => {
    let item = D[e], price = item ? (item.price * t).toFixed(2) : `?`;
    r += `💻 ${t}x ${e} - $${price}\n`;
  });
  r += `\n💰 *Total: $${n}*\n\n¡Gracias!`;
  let i = `https://wa.me/584248930224?text=` + encodeURIComponent(r);
  window.open(i, `_blank`), Y();
});