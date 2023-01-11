import React from 'react'
import CommonNavbar from '../../common/navbar/navbar';
import AccordionSection from './accordion/accordion';
import FeaturedMembers from './featured/featuredMembers';
import Footer from './footerSection/footer';
import HomePage from './homePage/homePage';
import PricingSection from './pricingSection/pricing';
import ProfileConstructor from './profilePage/profileConstructor';
import RangeSlider from './rangePage/rangeSlider';
import SlickSliderLogo from './slickSliderLogo/SlickSliderLogo';
import Subscribe from './subscribeUpdate/subscribe';


const HomeIndex = () => {
  return (
    <>
      <CommonNavbar />
      <HomePage />
      <SlickSliderLogo />
      <RangeSlider />
      <ProfileConstructor />
      <FeaturedMembers />
      <PricingSection />
      <AccordionSection />
      <Subscribe />
      <Footer />
    </>
  )
}

export default HomeIndex;