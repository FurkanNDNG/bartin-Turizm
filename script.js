const ogeler = document.querySelectorAll(".eyebrow, h1, .intro, .button, article, .note, .parca");

function animasyonBagla(eleman, gecikmeSaniye = 0) {
  eleman.classList.add("reveal");
  if (gecikmeSaniye > 0) {
    eleman.style.transitionDelay = gecikmeSaniye + "s";
  }
}

function animasyonuGoster(eleman) {
  eleman.classList.add("gorunur");
  setTimeout(() => {
    eleman.style.transitionDelay = "";
  }, 1200);
}

if ("IntersectionObserver" in window) {
  const gozlemci = new IntersectionObserver((kayitlar) => {
    kayitlar.forEach((kayit) => {
      if (kayit.isIntersecting) {
        animasyonuGoster(kayit.target);
        gozlemci.unobserve(kayit.target);
      }
    });
  }, { threshold: 0.15 });

  ogeler.forEach((oge) => {
    let gecikme = 0;
    if (oge.tagName === "ARTICLE" && oge.parentElement) {
      const kardesler = Array.from(oge.parentElement.children);
      gecikme = (kardesler.indexOf(oge) % 3) * 0.12;
    }
    animasyonBagla(oge, gecikme);
    gozlemci.observe(oge);
  });
} else {
  ogeler.forEach((oge) => animasyonuGoster(oge));
}

let eklenenKartSayisi = 0;

function yeniArticleOlustur(veri, rotaListesiIcinde) {
  const makale = document.createElement("article");
  makale.classList.add("ekstra-article");

  if (rotaListesiIcinde) {
    makale.classList.add("yer");
    makale.innerHTML = `
      <img src="${veri.gorsel}" alt="${veri.alt}" width="1200" height="800">
      <div class="yer-metin">
        <p class="meta">${veri.meta}</p>
        <h2>${veri.baslik}</h2>
        <p>${veri.aciklama}</p>
        <p><strong>Öne çıkan:</strong> ${veri.oneCikan}</p>
        <a href="${veri.baglanti}">${veri.baglantiMetni}</a>
      </div>
    `;
  } else {
    makale.innerHTML = `
      <p class="meta">${veri.meta}</p>
      <h2>${veri.baslik}</h2>
      <p>${veri.aciklama}</p>
    `;
  }

  return makale;
}

function scrollIleArticleEkle() {
  const listeKapsayici = document.querySelector(".liste");
  const izgarKapsayici = document.querySelector(".grid");
  const mainAlani = document.querySelector("main");

  if (!mainAlani) return;

  let hedefKonteyner = listeKapsayici || izgarKapsayici;
  let rotaListesiMi = Boolean(listeKapsayici);

  // Eğer sayfada .liste veya .grid yoksa main içinde doğrudan article tutan bir alan oluştur
  if (!hedefKonteyner) {
    hedefKonteyner = document.createElement("section");
    hedefKonteyner.className = "grid ekstra-liste";
    hedefKonteyner.setAttribute("aria-label", "Ek bilgiler");
    const notElemani = mainAlani.querySelector(".note");
    if (notElemani) {
      mainAlani.insertBefore(hedefKonteyner, notElemani);
    } else {
      mainAlani.appendChild(hedefKonteyner);
    }
    rotaListesiMi = false;
  }

  const kaynakDizi = rotaListesiMi ? ekstraRotaKartlari : ekstraGenelKartlar;
  if (eklenenKartSayisi >= kaynakDizi.length) return;

  const veri = kaynakDizi[eklenenKartSayisi];
  const yeniKart = yeniArticleOlustur(veri, rotaListesiMi);
  hedefKonteyner.appendChild(yeniKart);

  animasyonBagla(yeniKart, 0.08);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      animasyonuGoster(yeniKart);
    });
  });

  eklenenKartSayisi += 1;
}

function scrollKonumunuKontrolEt() {
  const scrollMesafesi = window.scrollY + window.innerHeight;
  const dokumanYuksekligi = document.documentElement.scrollHeight;

  // Sayfa alt kısmına 260px yaklaşıldığında yeni article ekle
  if (scrollMesafesi >= dokumanYuksekligi - 260) {
    scrollIleArticleEkle();
  }
}

window.addEventListener("scroll", scrollKonumunuKontrolEt, { passive: true });
window.addEventListener("load", () => {
  setTimeout(scrollKonumunuKontrolEt, 250);
});
