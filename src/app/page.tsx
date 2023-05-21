import About from '@/components/About/About';
import Launch from '@/components/Launch';
import Info from '@/components/Info/Info';
import Products from '@/components/Products/Products';
import Reviews from '@/components/Reviews/Reviews';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-column justify-content-evenly align-items-center">
      <Launch />
      <About />
      <Info />
      <Products />
      <Reviews />
    </main>
  );
}
