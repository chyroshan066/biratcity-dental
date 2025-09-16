import { About } from "@/components/About";
import { Appintment } from "@/components/Appointment";
import { CallToAction } from "@/components/CallToAction";
// import { Dentist } from "@/components/Dentist";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Maps } from "@/components/Maps";
import { Review } from "@/components/Review";
// import { Service } from "@/components/Service";
import { TestimonialSlider } from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <main>
        <article>
          <Hero />
          <Intro />
          {/* <Service /> */}
          <About />
          {/* <Dentist /> */}
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
