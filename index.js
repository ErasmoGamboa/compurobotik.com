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

function c() {
  let e = Object.keys(D),
    t = e[Math.floor(Math.random() * e.length)],
    n = [`Caracas`, `Valencia`, `Maracay`, `Barquisimeto`, `Margarita`, `Carúpano`],
    r = n[Math.floor(Math.random() * n.length)],
    i = document.querySelector(`.sales-toast`);
  i && i.remove();
  let a = document.createElement(`div`);
  a.className = `sales-toast`, a.innerHTML = `🔥 ¡Alguien en <strong>${r}</strong> acaba de pedir <strong>${t}</strong>! 💻`, document.body.appendChild(a), requestAnimationFrame(() => {
    requestAnimationFrame(() => a.classList.add(`show`))
  }), setTimeout(() => {
    a.classList.remove(`show`), setTimeout(() => a.remove(), 400)
  }, 4e3)
}

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

var u = document.getElementById(`nav-whatsapp-btn`);
u && u.addEventListener(`click`, r => {
  let i = u.getAttribute(`href`);
  if (i === `#`) return;
  let a = document.querySelector(i);
  if (a) {
    r.preventDefault();
    let i = e.offsetHeight,
      o = a.getBoundingClientRect().top + window.scrollY - i - 40;
    window.scrollTo({ top: o, behavior: `smooth` }), n && n.classList.remove(`open`), t && (t.classList.remove(`active`), t.setAttribute(`aria-expanded`, `false`)), e && e.classList.remove(`menu-open`), document.body.style.overflow = ``;
  }
}), document.addEventListener(`click`, r => {
  e && n && t && !e.contains(r.target) && n.classList.contains(`open`) && (n.classList.remove(`open`), t.classList.remove(`active`), e.classList.remove(`menu-open`), t.setAttribute(`aria-expanded`, `false`), document.body.style.overflow = ``)
});

var d = document.getElementById(`hero-order-btn`);
d && d.addEventListener(`click`, () => {
  let r = document.querySelector(`#productos`);
  if (r) {
    let t = e.offsetHeight,
      n = r.getBoundingClientRect().top + window.scrollY - t - 8;
    window.scrollTo({ top: n, behavior: `smooth` })
  }
});

var p = new IntersectionObserver(e => {
  e.forEach(e => {
    e.isIntersecting && e.target.classList.add(`visible`)
  });
  let t = document.querySelectorAll(`.catalog-product-card, .schedule-card, .wa-cta-card, .faq-item`);
  Array.from(t).every(e => e.classList.contains(`visible`)) && p.disconnect()
}, { threshold: .12, rootMargin: `0px 0px -40px 0px` }),
  m = () => {
    document.querySelectorAll(`.catalog-product-card, .schedule-card, .wa-cta-card, .faq-item`).forEach((e, t) => {
      e.classList.add(`fade-in`), e.style.transitionDelay = `${t % 3 * .15}s`, p.observe(e)
    })
  };

document.querySelectorAll(`a[href^="#"]`).forEach(t => {
  t.addEventListener(`click`, function (t) {
    let n = this.getAttribute(`href`);
    if (n === `#`) return;
    let r = document.querySelector(n);
    if (r) {
      t.preventDefault();
      let n = e.offsetHeight,
        i = r.getBoundingClientRect().top + window.scrollY - n - 8;
      window.scrollTo({ top: i, behavior: `smooth` })
    }
  })
});

var g = document.getElementById(`lang-toggle`),
  _ = localStorage.getItem(`shilis_lang`) || `ES`,
  v = e => {
    if (localStorage.setItem(`shilis_lang`, e), document.querySelectorAll(`[data-en], [data-es]`).forEach(t => {
      let n = t.getAttribute(`data-en`) || ``,
        r = t.getAttribute(`data-es`) || ``,
        i = e === `EN` ? n : r;
      if (i) {
        let e = t.querySelector(`svg`);
        e ? t.innerHTML = e.outerHTML + ` ` + i : t.innerHTML = i
      }
    }), g) {
      let t = g.querySelector(`.flag-icon`),
        n = g.querySelector(`.lang-text`);
      e === `ES` ? (t && (t.innerText = `🇻🇪`), n && (n.innerText = `ES`)) : (t && (t.innerText = `🇺🇸`), n && (n.innerText = `EN`))
    }
  };
if (g) {
  if (_ === `EN`) {
    let e = g.querySelector(`.flag-icon`),
      t = g.querySelector(`.lang-text`);
    e && (e.innerText = `🇺🇸`), t && (t.innerText = `EN`)
  }
  g.addEventListener(`click`, () => {
    _ = _ === `ES` ? `EN` : `ES`, v(_), V()
  })
}
_ === `EN` && v(_), window.addEventListener(`DOMContentLoaded`, () => {
  _ === `EN` && v(_)
}, { once: !0 });

var y = `shilis_analytics`;
function b(e, t = {}) {
  let n = JSON.parse(localStorage.getItem(y) || `{}`),
    r = n[e] || { count: 0, details: {} };
  r.count++, t.id && (r.details[t.id] = (r.details[t.id] || 0) + 1), n[e] = r, localStorage.setItem(y, JSON.stringify(n))
}

var x = document.getElementById(`theme-toggle`),
  S = `<svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;color:#F59E0B;"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
  C = `<svg class="moon-icon" viewBox="0 0 24 24" fill="currentColor" style="width:18px;height:18px;color:#F59E0B;"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

localStorage.getItem(`shilis_theme`) === `dark` && (document.body.classList.add(`dark-mode`), x && (x.innerHTML = S)), x && x.addEventListener(`click`, () => {
  document.body.classList.toggle(`dark-mode`);
  let e = document.body.classList.contains(`dark-mode`);
  x.innerHTML = e ? S : C, localStorage.setItem(`shilis_theme`, e ? `dark` : `light`)
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

var j = document.getElementById(`nav-cart-badge`),
  M = document.getElementById(`nav-cart-btn`),
  P = document.getElementById(`cart-sidebar`),
  F = document.getElementById(`cart-overlay`),
  I = document.getElementById(`cart-items`),
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
          <p>${_ === `EN` ? `Your cart is empty` : `Tu carrito está vacío`}</p>
          <p class="empty-cart-hint">${_ === `EN` ? `Add your favorite products` : `Agrega tus programas favoritos`}</p>
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
              <span class="cart-item-price"><strong>$${i}</strong> ($${r.price} ${_ === `EN` ? `each` : `c/u`})</span>
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
        <span>${_ === `EN` ? `💰 Estimated Total` : `💰 Total estimado`}</span>
        <strong>$${n.toFixed(2)}</strong>`, I.appendChild(r);
      let i = document.createElement(`div`);
      i.className = `cart-motivation`;
      i.innerHTML = `<span>⭐ ${_ === `EN` ? `Our team of experts is waiting for you` : `¡Nuestro equipo de expertos te espera!`}</span>`;
      I.appendChild(i);
    }
  }
  if (j && (j.innerText = e, j.style.display = e > 0 ? `flex` : `none`), document.querySelectorAll(`.qty-counter-row`).forEach(e => {
    let t = e.querySelector(`.qc-num`),
      n = e.dataset.productName;
    if (t && n) {
      let e = k[n] || 0;
      t.textContent = e, e === 0 ? t.classList.add(`qc-zero`) : t.classList.remove(`qc-zero`)
    }
  }), z) {
    let e = B(),
      t = Object.values(k).reduce((e, t) => e + t, 0),
      n = _ === `EN` ? `Order now` : `Pedir ahora`,
      r = _ === `EN` ? `Order via WhatsApp` : `Pedir vía WhatsApp`;
    z.innerHTML = `<span>${t > 0 ? `${n} · $${e.toFixed(2)}` : r}</span>`, z.disabled = t === 0
  } A()
}

function H(e) {
  k[e] || (k[e] = 0), k[e]++, b(`add_to_cart`, { id: e }), V()
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
        <button class="qc-btn qc-minus" aria-label="Restar">−</button>
        <span class="qc-num qc-zero">0</span>
        <button class="qc-btn qc-plus" aria-label="Sumar">+</button>
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
}), [M].forEach(e => {
  e && e.addEventListener(`click`, () => U())
}), [R, F].forEach(e => {
  e && e.addEventListener(`click`, () => {
    P && P.classList.remove(`open`), F && F.classList.remove(`show`)
  })
}), z && z.addEventListener(`click`, () => {
  Object.keys(k).length !== 0 && J()
});

var W = document.getElementById(`checkout-modal-overlay`),
  G = document.getElementById(`close-checkout`),
  K = document.getElementById(`checkout-form`),
  q = document.getElementById(`checkout-summary-view`);

function J() {
  b(`checkout_started`), K && (K.style.display = `flex`), q && (q.style.display = `none`), W.classList.add(`visible`), document.body.style.overflow = `hidden`
}
function Y() {
  W.classList.remove(`visible`), document.body.style.overflow = ``
}

G && G.addEventListener(`click`, Y), window.addEventListener(`click`, e => {
  e.target === W && Y()
});

function X(e) {
  let t = Object.entries(k);
  if (t.length === 0) return;
  let n = B().toFixed(2),
    r = { details: _ === `EN` ? `Customer Details` : `Detalles del Cliente`, order: _ === `EN` ? `Order Summary` : `Resumen del Pedido`, total: _ === `EN` ? `Estimated Total` : `Total Estimado`, edit: _ === `EN` ? `Edit Details` : `Editar Detalles`, confirm: _ === `EN` ? `Confirm and Send` : `Confirmar y Enviar` },
    i = t.map(([e, t]) => {
      let n = D[e] || { price: 0, emoji: `💻` },
        r = (n.price * t).toFixed(2);
      return `<div class="summary-item" style="display:flex; justify-content:space-between; margin-bottom:8px;">
          <span>${n.emoji} ${t}x ${e}</span>
          <span>$${r}</span>
        </div>`
    }).join(``);
  q.innerHTML = `
<div class="checkout-summary-view" style="padding: 24px;">
  <div class="summary-section" style="margin-bottom: 16px;">
    <h3>${r.details}</h3>
    <div class="summary-details">
      <div><strong>Nombre:</strong> ${e.name}</div>
      <div><strong>Correo:</strong> ${e.address}</div>
      <div><strong>Teléfono:</strong> ${e.phone}</div>
    </div>
  </div>
  <div class="summary-section" style="margin-bottom: 16px;">
    <h3>${r.order}</h3>
    <div class="summary-items-list" style="max-height: 150px; overflow-y:auto;">
      ${i}
    </div>
    <div class="summary-total" style="display:flex; justify-content:space-between; font-weight:bold; margin-top:10px; border-top:1px solid #ddd; padding-top:8px;">
      <span>${r.total}</span>
      <span>$${n}</span>
    </div>
  </div>
  <div class="summary-actions" style="display:flex; gap:10px;">
    <button class="btn-edit-order" id="btn-edit-order" style="flex:1; padding:10px; border-radius:8px; border:1px solid #ccc; background:#f5f5f5; cursor:pointer;">${r.edit}</button>
    <button class="btn-confirm-order" id="btn-confirm-order" style="flex:1; padding:10px; border-radius:8px; border:none; background:#25d366; color:#fff; font-weight:bold; cursor:pointer;">${r.confirm}</button>
  </div>
</div>
`, K && (K.style.display = `none`), q.style.display = `block`, document.getElementById(`btn-edit-order`).onclick = () => {
    q.style.display = `none`, K.style.display = `flex`
  }, document.getElementById(`btn-confirm-order`).onclick = () => {
    Z(e)
  }
}

function Z(e) {
  b(`order_confirmed`);
  let t = Object.entries(k);
  if (t.length === 0) return;
  let n = B().toFixed(2),
    r = `Hola equipo de Compurobotik C.A.\n\n`;
  r += `*DETALLES DEL PEDIDO* 📝\n`, r += `👤 *Nombre:* ${e.name}\n`, r += `✉️ *Correo:* ${e.address}\n`, r += `📞 *Teléfono:* ${e.phone}\n\n`, r += `*PRODUCTOS:*\n`, t.forEach(([e, t]) => {
    let n = D[e],
      i = n ? (n.price * t).toFixed(2) : `?`;
    r += `${n ? n.emoji : `💻`} ${t}x ${e} - $${i}\n`
  }), r += `\n💰 *Total: $${n}*\n\n¡Gracias!`;
  let i = `https://wa.me/584248930224?text=${encodeURIComponent(r)}`;
  window.open(i, `_blank`), Y()
}

K && K.addEventListener(`submit`, e => {
  e.preventDefault();
  let t = { name: document.getElementById(`cust-name`).value, address: document.getElementById(`cust-address`).value, phone: document.getElementById(`cust-phone`).value };
  Object.keys(k).length !== 0 && X(t)
}), V(), document.addEventListener(`DOMContentLoaded`, () => {
  m(), setTimeout(() => {
    let e = document.getElementById(`splash-screen`);
    e && (e.classList.add(`hidden`), setTimeout(() => e.style.display = `none`, 800))
  }, 800), setTimeout(() => {
    let e = document.getElementById(`promo-overlay`);
    e && !localStorage.getItem(`shilis_promo_shown`) && e.classList.add(`visible`)
  }, 5e3);
  let e = document.getElementById(`close-promo`);
  e && e.addEventListener(`click`, () => {
    let e = document.getElementById(`promo-overlay`);
    e && e.classList.remove(`visible`), localStorage.setItem(`shilis_promo_shown`, `true`)
  });
  let t = document.getElementById(`promo-cta`);
  t && t.addEventListener(`click`, () => {
    localStorage.setItem(`shilis_promo_shown`, `true`)
  });
  let r = document.querySelector(`.hero`);
  if (r)
    for (let e = 0; e < 35; e++) {
      let e = document.createElement(`div`);
      e.className = `particle`, e.style.left = Math.random() * 100 + `%`, e.style.top = Math.random() * 100 + `%`, e.style.animationDuration = Math.random() * 3 + 3 + `s`, e.style.animationDelay = Math.random() * 2 + `s`, r.appendChild(e)
    }
  let i = () => {
    confetti({ particleCount: 100, spread: 70, origin: { y: .6 }, colors: [`#E67E22`, `#F1C40F`, `#FFFFFF`, `#FFD700`], disableForReducedMotion: !0 }), Swal.fire({
      title: `¡Es momento de optimizar tu equipo! 🚀`, html: `
        <div style="font-size: 1.1rem; color: #000;">
            Estás a un paso de tener tu PC al 100%. 💻<br>
            <b>Licencias originales, soporte remoto y garantía total.</b><br>
            ¡Trabaja sin interrupciones!
        </div>
    `, confirmButtonText: `¡Ver Catálogo! 💻`, confirmButtonColor: `#E67E22`, backdrop: `rgba(230, 126, 34, 0.1)`, showClass: { popup: `animate__animated animate__zoomIn` }
    }).then(e => {
      if (e.isConfirmed) {
        let e = document.getElementById(`productos`);
        e && e.scrollIntoView({ behavior: `smooth` })
      }
    })
  };
  document.querySelectorAll(`a[href="#productos"]`).forEach(e => {
    e.addEventListener(`click`, e => {
      e.preventDefault(), i()
    })
  })
});