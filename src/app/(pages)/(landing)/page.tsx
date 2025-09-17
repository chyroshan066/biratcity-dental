import { About } from "@/components/About";
import { Appintment } from "@/components/Appointment";
import { CallToAction } from "@/components/CallToAction";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Maps } from "@/components/Maps";
import { Review } from "@/components/Review";
import { TestimonialSlider } from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <main>
        <article>
          <Hero />
          <Intro />
          <About />
          <CallToAction />
          <TestimonialSlider />
          <Review />
          <Appintment />
          <Maps />
        </article>
      </main>
    </>
  );
}
