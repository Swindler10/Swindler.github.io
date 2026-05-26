window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  
  // Eğer sayfa yukarıdan 50px'den fazla kaydırıldıysa 'scrolled' sınıfını ekle
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    // Sayfa en üstteyse sınıfı kaldır, tekrar saydam olsun
    navbar.classList.remove('scrolled');
  }
});