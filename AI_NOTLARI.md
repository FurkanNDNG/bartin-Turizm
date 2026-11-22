# AI Kullanım Notları

Codespaces kullanamadığım için GitHub Copilot yerine Claude (sohbet arayüzü) ile çalıştım. Ders örnek sitesini (Kampüs Kulübü) başlangıç aldım, Claude'un verdiği dosyaları inceleyip kendi isteklerimle değiştirttim.

## Prompt 1: Ödevi anlama
- **Prompt:** Ödev PDF'ini yükleyip hocanın ne istediğini, kaç sayfa olacağını ve nelerin teslim edileceğini kısa ve net anlatmasını istedim.
- **Amacı:** Rubriği ve teslim kurallarını (ZIP, iç içe klasör olmaması) doğru anlamak.
- **Cevap:** Sayfa sayfa içerik, dosya listesi ve teslim adımları özetlendi.
- **Kararım:** SENİN KARARIN (ne işine yaradı, neyi not aldın?)

## Prompt 2: Başlangıç sitesini Bartın turizmine çevirme
- **Prompt:** Dersin verdiği Kampüs Kulübü sitesini Bartın turizm sitesine çevirmek istedim.
- **Amacı:** Hazır iskeleti (3 sayfa, ortak menü, style.css) konuya uydurmak.
- **Cevap:** Sayfa adları, menü ve ana sayfa metni Bartın'a uyarlandı. Site adı "Bartın'ı Keşfedin" oldu.
- **Kararım:** Önerilen "Bartın'da Ne Var?" adını beğenmedim, üst başlığı "Bartın'ı Keşfedin" yaptırdım.

## Prompt 3: Renk teması ve akıcılık
- **Prompt:** Sayfayı mavi, yeşil ve beyaz renklerle düzenlemesini, sonra daha akıcı hale getirmesini istedim.
- **Cevap:** Renkler `style.css` içinde değişkenlere (`:root`) taşındı; geçişler ve yumuşak kaydırma eklendi.
- **Kararım:** SENİN KARARIN

## Prompt 4: Ortalama, hover ve kaydırma efekti
- **Prompt:** Yazıların ortalanmasını, kartlara hover rengini ve aşağı kaydırınca alttan süzülme efektini istedim.
- **Cevap:** Efekt için `script.js` içinde `IntersectionObserver` kullanıldı.
- **Kararım:** Hover önce koyu maviye dönüyordu, bunu beğenmeyip "beyazdan hafif griye" çevirttim.

## Prompt 5: Rota sayfası ve yer sayfaları
- **Prompt:** Kartların uzun ve alt alta olmasını, "İçerikler" sayfasının adının "Rota" olmasını, Bartın'daki turistik yerler için ayrı sayfalar ve sağlı sollu fotoğraflar istedim.
- **Cevap:** 5 yer sayfası (Amasra, Kuşkayası, Güzelcehisar, Bartın Irmağı, Küre Dağları) ve fotoğraf yerleri oluşturuldu. Bilgiler web'den doğrulanarak yazıldı.
- **Kararım:** SENİN KARARIN (metinleri kendi cümlelerinle nasıl değiştirdin?)

## Prompt 6: Ana sayfa
- **Prompt:** Ana sayfayı "Bartın Tarihçesi" olarak değiştirmesini istedim.
- **Cevap:** Ana sayfa 4 bölümlü tarihçe sayfasına dönüştü.
- **Kararım:** SENİN KARARIN

## Kod açıklamaları (kendi sözlerimle yazılacak)
- **Event listener / observer:** (Kodu okuyup kendi cümlelerinle anlat. Örnek başlangıç: "script.js'te ... öğe ekrana girince ... sınıfı ekleniyor, CSS de ...")
- **Filtreleme koşulu:** (Arama eklendikten sonra yaz: hangi koşul kartı gösteriyor, hangisi gizliyor?)

## Yaptığım değişiklikler
- (Elle değiştirdiğin renk, metin, fotoğraf, başlık gibi şeyleri tarihleriyle yaz.)
