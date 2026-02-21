import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedIn from '@/components/FeaturedIn';
import Testimonials from '@/components/Testimonials';
import Syllabus from '@/components/Syllabus';
import Founder from '@/components/Founder';
import FAQ from '@/components/FAQ';
import Philanthropy from '@/components/Philanthropy';
import Showcase from '@/components/Showcase';
import Quote from '@/components/Quote';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturedIn />
      <Testimonials />
      <Syllabus />
      <Founder />
      <FAQ />
      <Philanthropy />
      <Showcase />
      <Quote />
      <Footer />
    </main>
  );
}
