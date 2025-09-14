import { About } from "@/components/About";
import { Appintment } from "@/components/Appointment";
import { BackToTop } from "@/components/BackToTop";
import { CallToAction } from "@/components/CallToAction";
// import { Dentist } from "@/components/Dentist";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Maps } from "@/components/Maps";
import { Service } from "@/components/Service";
import { TestimonialSlider } from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <article>
          <Hero />
          <Intro />
          <Service />
          <About />
          {/* <Dentist /> */}
          <CallToAction />
          <TestimonialSlider />
          <Appintment />
          <Maps />
        </article>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
