


import AboutUs from '../About/AboutUs';
import AnimationScroll from '../components/AnimationScroll';
import Counts from '../components/Count';

import ScreenVideo from '../components/ScreenVideo';
import Videos from '../components/Videos';
import Footer from '../Layout/Footer';

import Navbar from '../Navbar/Navbar';
import Calculator from '../Pages/Calculator';
import FeaturesSection from '../Pages/FeaturesSection';
import Marquee from '../Pages/Marquee';
import ProgressBar from '../Pages/ProgressBar';
import RecentArticles from '../Pages/RecentArticles';
import Service from '../Pages/Service';

import WorkProcess from '../Pages/WorkProcess';

const Home = () => {
  return (

    <section>

      <div className="relative  min-h-screen">
        <div style={{ position: "relative" }}>
          <ScreenVideo />
          <Navbar />
        </div>
        <AboutUs />


        <AnimationScroll>
          <Service />
        </AnimationScroll>

        <AnimationScroll>
          <WorkProcess />
        </AnimationScroll>

        <AnimationScroll>
          <Videos />
        </AnimationScroll>

        <AnimationScroll>
          <ProgressBar />
        </AnimationScroll>

        <AnimationScroll>
          <FeaturesSection />
        </AnimationScroll>

        <AnimationScroll>
          <Counts />
        </AnimationScroll>

        <AnimationScroll>
          <Calculator />
        </AnimationScroll>

        <AnimationScroll>
          <RecentArticles />
        </AnimationScroll>


        <Marquee />



        <Footer />












      </div>
    </section>
  );
};

export default Home;