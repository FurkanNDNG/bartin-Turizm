// Aşağı kaydırdıkça öğelerin alttan süzülerek gelmesi.
// (Başlığa göre arama kodunu bir sonraki adımda bu dosyaya ekleyeceğiz.)

const ogeler = document.querySelectorAll(".eyebrow, h1, .intro, .button, article, .note, .parca");

if ("IntersectionObserver" in window) {
  const gozlemci = new IntersectionObserver((kayitlar) => {
    kayitlar.forEach((kayit) => {
      if (kayit.isIntersecting) {
        kayit.target.classList.add("gorunur");
        gozlemci.unobserve(kayit.target);
        // Geçikmeyi temizle ki kartın hover rengi gecikmeden değişsin
        setTimeout(() => { kayit.target.style.transitionDelay = ""; }, 1200);
      }
    });
  }, { threshold: 0.15 });

  ogeler.forEach((oge, sira) => {
    oge.classList.add("reveal");
    // Aynı gruptaki kartlar sırayla gelsin
    if (oge.tagName === "ARTICLE") {
      const kardesler = Array.from(oge.parentElement.children);
      oge.style.transitionDelay = (kardesler.indexOf(oge) % 3) * 0.12 + "s";
    }
    gozlemci.observe(oge);
  });
}
