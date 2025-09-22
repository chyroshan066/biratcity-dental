import Image from "next/image";
import { memo } from "react";

export const About = memo(() => (
    <section
        className="section about lg:-mt-50 -mt-30"
        id="about"
        aria-label="about"
    >
        <div className="custom-container">

            <figure className="about-banner">
                <Image
                    src="/images/about-banner.webp"
                    width={470}
                    height={538}
                    loading="lazy"
                    alt="about banner"
                    className="w-fill"
                />
            </figure>

            <div>
                <p className="section-subtitle">About Us</p>
                <h2 className="h2 section-title">We Care For Your Dental Health</h2>
                <p className="section-text section-text-1">
                    Welcome to <b>BiratCity Dental Clinic</b>, your trusted <b>best dental clinic in Biratnagar</b> located at ShaniMandir, Biratnagar, Morang, Nepal. As the premier choice for <b>dental in Biratnagar</b> , we operate with the motto <i>“Professional Dentist, Advanced Technology and Affordable Price”</i>, committed to providing high-quality <b>dental care in Nepal</b> for every smile.
                </p>
                <p className="section-text">
                    Our team of experienced dentists at this leading <b>dental clinic in Biratnagar</b> offers a full range of treatments including <b>dental implants, braces, cosmetic dentistry, root canal, teeth whitening, orthodontics, gum treatment, oral surgery,</b> and <b>tooth extraction.</b> We also specialize in <b>pediatric dentistry,</b> ensuring gentle care for children, as well as <b>family dentist services in Biratnagar</b> for all ages.
                </p>
                <p className="section-text section-text-1">
                    At <b>BiratCity Dental Nepal</b>, recognized as the <b>best dental in Biratnagar,</b> we combine modern technology with compassionate care to make treatments comfortable and accessible. Whether you need a routine <b>dental checkup in Biratnagar, emergency dental care,</b> or advanced solutions for restoring your smile, our clinic ensures the best outcomes at an <b>affordable price.</b>
                </p>
                <p className="section-text">
                    Choose <b>BiratCity Dental</b> for the <b>best dentist in Biratnagar,</b> where healthy smiles begin with expert care and a personal touch at the most trusted <b>dental clinic in Biratnagar.</b>
                </p>

            </div>
        </div>
    </section>
));

About.displayName = "About";