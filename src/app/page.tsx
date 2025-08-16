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
        <About />
        <Gallery />
        <FAQ />
        <Testimonials />
        <ProductCTA
          variant="primary"
          size="medium"
          title="Başarılı Hasatlar İçin Doğru Adres"
          description="30 yılı aşkın deneyimimiz ve uzman ekibimizle, en kaliteli ceviz fidanlarını sizlere sunuyoruz. Hemen sipariş verin!"
          showWhatsApp={true}
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
