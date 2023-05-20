import About from '@/components/About/About';
import Launch from '@/components/Launch';
import Info from '@/components/Info/Info';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-column justify-content-evenly align-items-center">
      <Launch />
      <About />
      <Info />
    </main>
  );
}
