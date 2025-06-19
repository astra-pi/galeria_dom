const products = [
    {
      name: 'HP Essentials 255 G8 AMD',
      price: 289,
      stars: 4,
      reviews: 250,
      seller: 'ASTRANET',
      image: 'https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
    },
    {
      name: 'Lenovo V15 Intel Celeron',
      price: 349,
      stars: 4,
      reviews: 247,
      seller: 'ASTRANET',
      image: 'https://thumb.pccomponentes.com/w-530-530/articles/1076/10763586/1802-lenovo-v15-g2-ijl-intel-celeron-n4500-8gb-256gb-ssd-156.jpg'
    },
    {
      name: 'ASUS VivoBook 15 X515EA',
      price: 449,
      stars: 5,
      reviews: 189,
      seller: 'ASTRANET',
      image: 'https://thumb.pccomponentes.com/w-530-530/articles/1088/10889019/1474-portatil-asus-vivobook-15-156-i5-1334u-16gb-1tb-ssd-iris-xe-guard-plus-plata.jpg'
    },
    {
      name: 'MSI Modern 14 B11MOU',
      price: 599,
      stars: 4,
      reviews: 156,
      seller: 'ASTRANET',
      image: 'https://thumb.pccomponentes.com/w-530-530/articles/1085/10858078/1446-msi-modern-14-f13mg-203xes-intel-core-i7-1355u-16gb-1tb-ssd-14.jpg'
    },
    {
      name: 'Acer Aspire 3 A315-23',
      price: 399,
      stars: 4,
      reviews: 312,
      seller: 'ASTRANET',
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_148345991?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402'
    },
    {
      name: 'HP Pavilion Gaming 15',
      price: 799,
      stars: 5,
      reviews: 278,
      seller: 'ASTRANET',
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_110555163?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402'
    },
    {
      name: 'Dell Inspiron 15 3000',
      price: 429,
      stars: 4,
      reviews: 201,
      seller: 'ASTRANET',
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_149777060?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402'
    },
    {
      name: 'ASUS ROG Strix G15',
      price: 1299,
      stars: 5,
      reviews: 145,
      seller: 'ASTRANET',
      image: 'https://thumb.pccomponentes.com/w-530-530/articles/1087/10878958/1806-asus-rog-strix-g18-g815jmr-s8001-intel-core-i7-14650hx-32gb-1tb-ssd-rtx-5060-18.jpg'
    },
    {
      name: 'MacBook Air M1',
      price: 1199,
      stars: 5,
      reviews: 523,
      seller: 'ASTRANET',
      image: 'https://www.backmarket.es/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/7c5494ef-0af5-4b28-bf2a-524b1d284464-1_0a569569-357c-4d60-87c5-2691525f2ed3.jpg'
    },
    {
      name: 'Lenovo Legion 5 Pro',
      price: 1599,
      stars: 5,
      reviews: 167,
      seller: 'ASTRANET',
      image: 'https://thumb.pccomponentes.com/w-530-530/articles/1088/10889764/1831-portatil-lenovo-legion-5-16-i7-13650hx-16gb-1tb-ssd-rtx-4060-w11-luna-grey-mousepad.jpg'
    }
  ];
  
  function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
      stars += i <= rating ? '★' : '☆';
    }
    return stars;
  }
  
  const productList = document.getElementById('product-list');
  
  products.forEach((product, index) => {
    const card = document.createElement('article');
    card.classList.add('card');
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" loading="lazy">
      <div class="card-content">
        <h3>${product.name}</h3>
        <div class="price">${product.price}€</div>
        <div class="rating">
          <span class="stars">${generateStars(product.stars)}</span>
          <span>${product.reviews} valoraciones</span>
        </div>
        <div class="seller">Vendido por: ${product.seller}</div>
        <button class="btn-comprar">Añadir al carrito</button>
      </div>
    `;
    
    productList.appendChild(card);
  });
  
 
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-comprar')) {
      e.target.textContent = '¡Añadido!';
      e.target.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
      setTimeout(() => {
        e.target.textContent = 'Añadir al carrito';
        e.target.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
      }, 2000);
    }
  });