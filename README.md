# MIS233 Final Project - Custom Grafana Data Source Plugin

Bu proje, MIS233 dersi final projesi kapsamında geliştirilmiş, özel bir **Grafana Data Source** eklentisidir.

## Geliştirici Bilgileri
- **Ad Soyad:** Yunus Gürbüz
- **Öğrenci No:** 2023502045

---

## Özellikler & Bonuslar

### 1. Zorunlu Gereksinimler
- **Config Editor:** Eklenti ayarlar sayfasında isim sabit olarak yer almaktadır.
- **Plugin Loading:** Eklenti Docker ortamında sorunsuz yüklenmekte ve Grafana tarafından tanınmaktadır.

### 2. Bonus Özellikler
- **Table Format:** Veriler zaman serisi yerine, daha okunaklı olan **Table (Tablo)** formatına dönüştürülmüştür.
- **Query Parameters:** Query Editor üzerinde 2 adet dinamik filtreleme alanı (Filtre 1 & Filtre 2) bulunmaktadır.
- **Mock Data & REST API:** Sistem, hata yönetimini simüle etmek ve stabil çalışmak için Mock Data yapısı kullanmaktadır.
- **Connection Test:** `testDatasource` metodu ile eklentinin bağlantı durumu ve hata mesajları yönetilmektedir.

---

## Kurulum ve Çalıştırma

**1. Öncelikle projeyi bilgisayarınıza indirin ve terminal üzerinden proje klasörüne giriş yapın**  
```git clone <https://github.com/ynsgrb/mis233-final-project.git>```  
```cd <mis233-yunus-datasource>```

**2. Projenin çalışması için gerekli olan paketleri yüklemek için aşağıdaki komutu çalıştırın. (Bilgisayarınızda Node.js yüklü olmalıdır)**   
```npm install```  

**3. Eklentinin Grafana tarafından okunabilir hale gelmesi ve sürekli güncel kalması için geliştirme modunu başlatın**  
```npm run dev```  
(Bu terminali kapatmayın)

**4. Grafana sunucusunu ayağa kaldırmak için yeni bir terminal açın ve proje klasöründeyken şu komutu verin**  
```docker compose up -d```

**5. Grafana Arayüzüne Giriş Yapın**  
Tarayıcınızı açın ve şu adrese gidin: http://localhost:3000  
Kullanıcı Adı: admin  
Şifre: admin

**6. Eklentiyi Aktifleştirin ve Test Edin**  
Sol menüden Connections -> Data Sources yolunu izleyin.  
Add data source butonuna basın.  
Arama kutusuna eklentinin adını (yunus-datasource) yazın ve seçin.  
Açılan sayfada "Save & Test" butonuna basarak yeşil onay mesajını görün.  
Dashboards -> New Dashboard -> Add Visualization diyerek verilerinizi tablo formatında izlemeye başlayın.
