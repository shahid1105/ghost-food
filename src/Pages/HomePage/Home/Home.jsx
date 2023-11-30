import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import DiscountFood from "../DiscountFood/DiscountFood";
import GhostFevFood from "../GhostFebFood/GhostFebFood";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <DiscountFood></DiscountFood>
      <GhostFevFood></GhostFevFood>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
