(function() {
  var pages = [
    { name: 'Home', href: 'index.html' },
    { name: 'Products', href: 'products.html' },
    { name: 'Pricing', href: 'pricing.html' },
    { name: 'Testimonials', href: 'testimonials.html' },
    { name: 'Contact Us', href: 'contact.html' },
    { name: 'Dropdown', href: 'dropdown.html' },
    { name: 'Link', href: 'link.html' },
    { name: 'Long Page', href: 'longpage.html' },
    { name: 'New Canvas', href: 'newcanvas.html' },
    { name: 'Redirect', href: 'redirect.html' }
  ];

  var currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // Inject nav styles
  var style = document.createElement('style');
  style.textContent = '\
    #site-nav { position:fixed;top:0;left:0;width:100%;background:linear-gradient(135deg,#1a1a2e,#16213e);padding:0 30px;z-index:99999;display:flex;align-items:center;box-sizing:border-box;height:56px;box-shadow:0 2px 12px rgba(0,0,0,0.3);font-family:"Segoe UI",Roboto,Arial,sans-serif; }\
    #site-nav .nav-brand { color:#e94560;font-size:20px;font-weight:700;margin-right:30px;letter-spacing:1px;text-decoration:none; }\
    #site-nav .nav-links { display:flex;gap:4px;align-items:center;flex-wrap:wrap; }\
    #site-nav .nav-links a { color:#a8b2d1;text-decoration:none;padding:8px 14px;border-radius:6px;font-size:14px;font-weight:500;transition:all 0.2s ease;letter-spacing:0.3px; }\
    #site-nav .nav-links a:hover { color:#fff;background:rgba(233,69,96,0.15); }\
    #site-nav .nav-links a.active { color:#fff;background:rgba(233,69,96,0.25);font-weight:600; }\
    #site-nav .nav-toggle { display:none;background:none;border:none;color:#a8b2d1;font-size:24px;cursor:pointer;padding:8px; }\
    @media(max-width:768px) {\
      #site-nav { flex-wrap:wrap;height:auto;padding:10px 20px; }\
      #site-nav .nav-toggle { display:block;margin-left:auto; }\
      #site-nav .nav-links { display:none;width:100%;flex-direction:column;gap:2px;padding:10px 0; }\
      #site-nav .nav-links.open { display:flex; }\
      #site-nav .nav-links a { padding:10px 14px; }\
    }\
  ';
  document.head.appendChild(style);

  var nav = document.createElement('nav');
  nav.setAttribute('id', 'site-nav');

  var brand = document.createElement('a');
  brand.href = 'index.html';
  brand.className = 'nav-brand';
  brand.textContent = 'SampleSite';
  nav.appendChild(brand);

  var toggle = document.createElement('button');
  toggle.className = 'nav-toggle';
  toggle.innerHTML = '&#9776;';
  toggle.onclick = function() {
    linksDiv.classList.toggle('open');
  };
  nav.appendChild(toggle);

  var linksDiv = document.createElement('div');
  linksDiv.className = 'nav-links';

  pages.forEach(function(page) {
    var a = document.createElement('a');
    a.href = page.href;
    a.textContent = page.name;
    if (currentPage === page.href) {
      a.className = 'active';
    }
    linksDiv.appendChild(a);
  });

  nav.appendChild(linksDiv);
  document.body.insertBefore(nav, document.body.firstChild);
  document.body.style.paddingTop = '56px';
})();
