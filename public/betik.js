// Etkinlik verisi (D2 aşamasında bu dizi yerine API'den gelecek)
const etkinlikler = [
  { id: 1, baslik: "Unity ile 2D Oyun Geliştirme Atölyesi", tur: "atolye", tarih: "2026-11-06", yer: "Mühendislik Fakültesi Bilgisayar Lab. 1", kontenjan: 30, duzenleyen: "Oyun Geliştirme Kulübü" },
  { id: 2, baslik: "Oyun Geliştirme Kulübü Tanışma Toplantısı", tur: "topluluk", tarih: "2026-11-04", yer: "Mühendislik Fakültesi Amfi 2", kontenjan: 80, duzenleyen: "Oyun Geliştirme Kulübü" },
  { id: 3, baslik: "TEKNOFEST Takım Kurma Buluşması", tur: "topluluk", tarih: "2026-11-11", yer: "Mühendislik Fakültesi Konferans Salonu", kontenjan: 120, duzenleyen: "TEKNOFEST Kulübü" },
  { id: 4, baslik: "Git ve GitHub Atölyesi", tur: "atolye", tarih: "2026-11-10", yer: "Mühendislik Fakültesi Bilgisayar Lab. 2", kontenjan: 25, duzenleyen: "Oyun Geliştirme Kulübü" },
  { id: 5, baslik: "Blokzincir ve Akıllı Sözleşmeler Söyleşisi", tur: "soylesi", tarih: "2026-11-17", yer: "Mühendislik Fakültesi Konferans Salonu", kontenjan: 150, duzenleyen: "Blockchain Kulübü" },
  { id: 6, baslik: "Dijital Bağımlılık ve Oyun Dengesi Söyleşisi", tur: "soylesi", tarih: "2026-11-19", yer: "Kongre ve Kültür Merkezi", kontenjan: 250, duzenleyen: "Yeşilay Kulübü" },
  { id: 7, baslik: "48 Saatlik Game Jam", tur: "topluluk", tarih: "2026-11-21", yer: "Merkez Kütüphane Etkinlik Alanı", kontenjan: 60, duzenleyen: "Oyun Geliştirme Kulübü" },
  { id: 8, baslik: "Solidity ile İlk Akıllı Sözleşme Atölyesi", tur: "atolye", tarih: "2026-11-25", yer: "Mühendislik Fakültesi Bilgisayar Lab. 1", kontenjan: 20, duzenleyen: "Blockchain Kulübü" }
];

// Tür kodlarının ekranda görünecek adları
const turAdlari = {
  atolye: "Atölye",
  soylesi: "Söyleşi",
  topluluk: "Topluluk"
};

const kartlarAlani = document.getElementById("kartlar");

// Tek bir etkinlik için kart öğesi oluşturur
function kartOlustur(etkinlik) {
  const kart = document.createElement("article");
  kart.className = "kart";

  const etiket = document.createElement("span");
  etiket.className = "etiket";
  etiket.textContent = turAdlari[etkinlik.tur];

  const baslik = document.createElement("h3");
  baslik.textContent = etkinlik.baslik;

  const tarih = document.createElement("p");
  const tarihNesnesi = new Date(etkinlik.tarih + "T00:00:00");
  tarih.textContent = "Tarih: " + tarihNesnesi.toLocaleDateString("tr-TR");

  const yer = document.createElement("p");
  yer.textContent = "Yer: " + etkinlik.yer;

  const kontenjan = document.createElement("p");
  kontenjan.textContent = "Kontenjan: " + etkinlik.kontenjan + " kişi";

  const duzenleyen = document.createElement("p");
  duzenleyen.textContent = "Düzenleyen: " + etkinlik.duzenleyen;

  kart.append(etiket, baslik, tarih, yer, kontenjan, duzenleyen);
  return kart;
}

// Verilen listedeki tüm etkinlikleri sayfaya çizer
function kartlariCiz(liste) {
  kartlarAlani.replaceChildren();   // önceki kartları temizle
  for (const etkinlik of liste) {
    kartlarAlani.append(kartOlustur(etkinlik));
  }
}

kartlariCiz(etkinlikler);
