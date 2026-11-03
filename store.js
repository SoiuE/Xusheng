(() => {
  const products = [
    { id: 1, name: 'Beige Knit Cardigan', category: 'Knitwear', price: 68, description: 'An easy knit layer for cooler days. Soft neutral styling pairs naturally with your everyday wardrobe.', image: './images/pexels-9311992.jpg', color: '#e8e2d8', badge: 'FEATURED' },
    { id: 2, name: 'Classic Denim Jacket', category: 'Outerwear', price: 74, description: 'A timeless layering piece with a casual feel. Style it over a tee or dress for an effortless finish.', image: './images/pexels-17896486.jpg', color: '#d9ded2' },
    { id: 3, name: 'Everyday White Tee', category: 'Tops', price: 28, description: 'The simple wardrobe staple you can wear on repeat, from relaxed weekends to layered weekday looks.', image: './images/pexels-18186106.jpg', color: '#e6e0d7', badge: 'ESSENTIAL' },
    { id: 4, name: 'Relaxed Denim Jeans', category: 'Bottoms', price: 56, description: 'An easy denim silhouette that works with shirts, tees, and lightweight knitwear.', image: './images/pexels-12846310.jpg', color: '#e1d9cb' },
    { id: 5, name: 'Soft Beige Sweater', category: 'Knitwear', price: 62, description: 'A cozy layer in a versatile warm neutral, made for easy styling through the changing seasons.', image: './images/pexels-6995886.jpg', color: '#e5ded3' },
    { id: 6, name: 'Modern White Shirt', category: 'Tops', price: 48, description: 'A crisp, clean shirt that brings polish to denim, tailored trousers, and everyday outfits.', image: './images/pexels-7648167.jpg', color: '#e5e5e0' },
    { id: 7, name: 'City Black Coat', category: 'Outerwear', price: 112, description: 'A sleek outer layer with a versatile shape for cool weather and city days.', image: './images/pexels-30877823.jpg', color: '#d8d8d4' },
    { id: 8, name: 'Easy Denim Layer', category: 'Outerwear', price: 72, description: 'A laid-back denim look that adds texture and character to simple outfits.', image: './images/pexels-9789623.jpg', color: '#d3d9d8' },
    { id: 9, name: 'Everyday White Sneakers', category: 'Shoes', price: 79, description: 'An easy-to-style pair for walks, travel days, and casual outfits.', image: './images/pexels-12739982.jpg', color: '#dce4e7', badge: 'NEW' },
    { id: 10, name: 'White Casual Sneakers', category: 'Shoes', price: 72, description: 'Clean white sneakers are a versatile choice with denim, relaxed trousers, and weekend looks.', image: './images/pexels-7880267.jpg', color: '#e9e9e4' },
    { id: 11, name: 'Colorful Crew Socks', category: 'Socks', price: 14, description: 'A playful sock style to pair with sneakers, lounge outfits, and day-to-day essentials.', image: './images/pexels-8187640.jpg', color: '#e4e1dc' },
    { id: 12, name: 'White Puffer Jacket', category: 'Outerwear', price: 128, description: 'A cozy-looking puffer style in a light neutral shade for building cold-weather outfits.', image: './images/pexels-10177515.jpg', color: '#e3dfd5', badge: 'WINTER EDIT' },
    { id: 13, name: 'Relaxed Street Hoodie', category: 'Hoodies', price: 59, description: 'A casual hooded layer that works with denim, joggers, or under a jacket when temperatures drop.', image: './images/pexels-34582212.jpg', color: '#d8d7d5' },
    { id: 14, name: 'Beige Knit Sweater', category: 'Knitwear', price: 67, description: 'A warm neutral knit look with an easy, cozy feel for cooler days and relaxed weekends.', image: './images/pexels-11446761.jpg', color: '#dadbd8' },
    { id: 15, name: 'Winter City Coat', category: 'Outerwear', price: 119, description: 'A polished outerwear look for crisp days, styled to layer comfortably over everyday pieces.', image: './images/pexels-10522360.jpg', color: '#dee0de' },
    { id: 16, name: 'Classic Lace-Up Boots', category: 'Shoes', price: 96, description: 'A sturdy-looking lace-up boot style that brings a grounded finish to autumn and winter outfits.', image: './images/pexels-4748409.jpg', color: '#d8d0c4' },
  ];
  const $ = (s) => document.querySelector(s);
  const money = (n) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n);
  let cart = {}; try { cart = JSON.parse(localStorage.getItem('jingji-cart') || '{}'); } catch {}
  let user = localStorage.getItem('jingji-user') || '';
  const save = () => localStorage.setItem('jingji-cart', JSON.stringify(cart));
  const qty = () => Object.values(cart).reduce((a, b) => a + b, 0);
  const toast = (message) => { const el = $('#toast'); el.textContent = message; el.classList.add('show'); clearTimeout(toast.timer); toast.timer = setTimeout(() => el.classList.remove('show'), 2300); };
  const renderProducts = (filter = 'all') => { const shown = products.filter(p => filter === 'all' || p.category === filter || (filter === 'footwear' && ['Shoes', 'Socks'].includes(p.category))); $('#products').innerHTML = shown.map(p => `<article class="product-card"><a class="product-image" href="#product-${p.id}" style="background:${p.color}" data-detail="${p.id}"><img src="${p.image}" alt="Sample styling for ${p.name}" loading="lazy" onload="this.nextElementSibling.style.display='none'" onerror="this.style.display='none'"><div class="product-placeholder"><span>J</span><small>${p.category}</small></div>${p.badge ? `<b class="badge">${p.badge}</b>` : ''}<button class="quick-add" data-add="${p.id}" aria-label="Add ${p.name} to bag">+</button></a><div class="product-info"><div><h3>${p.name}</h3><p>${p.category}</p></div><span>${money(p.price)}</span></div><p class="product-description">${p.description}</p><button class="mobile-add" data-add="${p.id}">Add to bag　＋</button></article>`).join(''); };
  const renderCart = () => { $('#bag-count').textContent = qty(); $('#cart-content').innerHTML = qty() ? `<div class="cart-items">${products.filter(p => cart[p.id]).map(p => `<div class="cart-item"><div class="cart-thumb" style="background:${p.color}"><img src="${p.image}" alt="" onerror="this.style.display='none'"></div><div class="cart-detail"><h3>${p.name}</h3><span>${money(p.price)}</span><div class="quantity"><button data-change="${p.id}" data-by="-1">−</button><span>${cart[p.id]}</span><button data-change="${p.id}" data-by="1">＋</button></div></div><button class="remove" data-remove="${p.id}">Remove</button></div>`).join('')}</div><div class="cart-bottom"><div class="subtotal"><span>Subtotal</span><b>${money(products.reduce((a,p) => a + p.price*(cart[p.id]||0),0))}</b></div><p>Shipping and taxes calculated at checkout.</p><button class="button dark-button checkout" id="checkout">Continue to checkout　→</button><button class="continue" data-close="cart">Continue shopping</button></div>` : `<div class="empty-cart"><div class="empty-icon">♧</div><h3>Your bag is taking it slow.</h3><p>Find something lovely for your everyday.</p><button class="button dark-button" data-close="cart">Explore the collection　→</button></div>`; };
  const open = (id) => { $(id).classList.add('open'); document.body.classList.add('locked'); };
  const close = (id) => { $(id).classList.remove('open'); document.body.classList.remove('locked'); };
  renderProducts(); renderCart(); $('#account-label').textContent = user ? 'Account' : 'Sign in';
  document.addEventListener('click', e => {
    const t = e.target.closest('button,a'); if (!t) return;
    if (t.dataset.add) { e.preventDefault(); const id = +t.dataset.add; cart[id] = (cart[id] || 0) + 1; save(); renderCart(); toast('Added to your bag'); }
    if (t.dataset.filter) { document.querySelectorAll('.filters button').forEach(button => button.classList.remove('filter-active')); t.classList.add('filter-active'); renderProducts(t.dataset.filter); }
    if (t.dataset.detail) { e.preventDefault(); const p = products.find(x => x.id === +t.dataset.detail); toast(`${p.name} — ${p.description}`); }
    if (t.dataset.change) { const id = +t.dataset.change; cart[id] += +t.dataset.by; if (cart[id] <= 0) delete cart[id]; save(); renderCart(); }
    if (t.dataset.remove) { delete cart[t.dataset.remove]; save(); renderCart(); }
    if (t.dataset.open === 'cart') { renderCart(); open('#cart-drawer'); }
    if (t.dataset.open === 'auth') { open('#auth-modal'); }
    if (t.dataset.close) close(t.dataset.close === 'cart' ? '#cart-drawer' : '#auth-modal');
    if (t.id === 'checkout') toast('Online checkout is not connected yet. Please contact us to place an order.');
    if (t.id === 'auth-switch') { const signup = $('#auth-title').dataset.mode !== 'signup'; $('#auth-title').dataset.mode = signup ? 'signup' : 'signin'; $('#auth-title').textContent = signup ? 'Come on in.' : 'Good to see you.'; $('#auth-submit').textContent = signup ? 'Create account　→' : 'Sign in　→'; t.textContent = signup ? 'Sign in' : 'Create an account'; }
    if (t.id === 'menu-toggle') $('#nav').classList.toggle('nav-open');
  });
  document.querySelectorAll('.overlay').forEach(el => el.addEventListener('click', e => { if (e.target === el) close(`#${el.id}`); }));
  $('#auth-form').addEventListener('submit', e => { e.preventDefault(); user = $('#auth-email').value; localStorage.setItem('jingji-user', user); $('#account-label').textContent = 'Account'; close('#auth-modal'); toast('You are signed in on this device'); });
  $('#newsletter-form').addEventListener('submit', e => { e.preventDefault(); e.currentTarget.reset(); toast('Thanks for joining our list!'); });
})();
