# Test Notları

Kod değişiklikleri sonrası kontrol edilmesi gereken senaryolar ve beklenen sonuçlar.

## 1. Renk, Hizalama ve Header/Nav Kontrolü
- **Adım:** `index.html`, `icerikler.html` ve `hakkinda.html` sayfalarını açın.
- **Beklenen Sonuç:** Üst menü mavi-yeşil geçişli görünür, metinler ortalanır, aktif menü öğesinin altında açık yeşil çizgi bulunur.

## 2. Uzunlama Kart ve Detay Sayfası Düzeni
- **Adım:** `icerikler.html` ve herhangi bir yer detay sayfasını (`amasra.html`, `kure-daglari.html` vb.) inceleyin.
- **Beklenen Sonuç:** Rota kartları `.liste` içinde alt alta sıralanır; detay sayfalarında görsel ve metin blokları sağ/sol düzeninde akar.

## 3. Scroll ile Doğrudan Article Ekleme (Butonsuz)
- **Adım:** `icerikler.html` veya `hakkinda.html` sayfasında fare tekerleği veya kaydırma çubuğu ile sayfanın altına doğru inin.
- **Beklenen Sonuç:** Ekstra bir "daha fazla göster" butonu olmadan, sayfa altına yaklaşıldığında yeni `<article>` kartları DOM'a doğrudan eklenir ve görünür hale gelir.

## 4. Mobil Görünüm ve Hareket Azaltma
- **Adım:** Tarayıcı genişliğini 700px altına indirin ve "Azaltılmış hareket" (`prefers-reduced-motion: reduce`) tercihini test edin.
- **Beklenen Sonuç:** Kartlar ve bölümler dar ekranda dikey hizalanır; hareket azaltma açıksa geçiş animasyonları devre dışı kalır.