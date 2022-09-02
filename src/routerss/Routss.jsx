import Aos from 'aos';
import "aos/dist/aos.css";

import React, { useEffect } from 'react';
import AboutBrif from '../pages/aboutbreifing/AboutBrif';
import BestAdmin from '../pages/bestadmin/BestAdmin';
import CarouselSlide from '../pages/carousel_slidee/CarouselSlide';
import Feature from '../pages/feature/Feature';
import SkillSec from '../pages/skill_sec/SkillSec';
// import Test from '../pages/testim/Test';
import { OurTest } from '../pages/testimonials/OurTest';
// import { Testimonials } from '../pages/testimonials/Testimonials';

export default function Routss() {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <>
      <div>
        <CarouselSlide />
        <Feature aos="fade-up" aos_duration="3000" />
        <SkillSec aos="fade-up" aos_duration="3000" />
        <AboutBrif
          aos="fade-right"
          aos_offset="300"
          aos_easing="ease-in-sine" />
        <BestAdmin aos="fade-down" aos_duration="3000"/>
        <OurTest aos="fade-down" aos_duration="3000"/>
      </div>
    </>
  );
}
