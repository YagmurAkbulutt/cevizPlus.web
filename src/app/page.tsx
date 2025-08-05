import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ProductCTA from '@/components/ProductCTA';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <ProductCTA
          variant="primary"
          size="medium"
          title="Neden Ceviz Plus'ı Seçmelisiniz?"
          description="20 yıllık deneyimimiz ve binlerce mutlu müşterimizle, en kaliteli ceviz fidanlarını sizlere sunuyoruz."
        />
        <About />
        <Gallery />
        <ProductCTA
          variant="secondary"
          size="small"
          title="Hemen Sipariş Verin!"
          description="Stoklar tükenmeden premium ceviz fidanlarınızı sipariş edin. Ücretsiz kargo ve garanti dahil!"
          showWhatsApp={true}
        />
        <FAQ />
        <Testimonials />
        <ProductCTA
          variant="accent"
          size="medium"
          title="Başarılı Hasatlar İçin Doğru Adres"
          description="Uzman ekibimizden danışmanlık alın ve ceviz yetiştiriciliğinde başarıya ulaşın."
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
