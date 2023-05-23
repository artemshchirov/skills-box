import About from '@/components/About/About';
import Certificate from '@/components/Certificate';
import Info from '@/components/Info/Info';
import ProductsView from '@/components/ProductsView/ProductsView';
import Reviews from '@/components/Reviews/Reviews';
import Launch from '@/components/Launch';
import Questions from '@/components/Questions/Questions';
import Subscribe from '../components/Subscribe';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-column justify-content-evenly align-items-center">
      <Launch />
      <About />
      <Info />
      <ProductsView />
      <Reviews />
      <Certificate />
      <Questions />
      <Subscribe />
    </main>
  );
}
