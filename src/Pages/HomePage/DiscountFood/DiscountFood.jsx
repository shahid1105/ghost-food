import { useEffect, useState } from "react";
import DiscountCard from "./DiscountCard";

const DiscountFood = () => {
  const [discount, setOffer] = useState([]);

  useEffect(() => {
    fetch("https://ghost-food-server.vercel.app/allFood")
      .then((res) => res.json())
      .then((data) => {
        setOffer(data);
      });
  }, []);

  const sliceDiscount = discount.slice(0, 6);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-red-400 mt-12 mb-12">
        Discount !!!
      </h1>
      <p className="text-gray-500 md:px-44 lg:px-44 ms-4 mb-24">
        Embark on a spectral feast with our hauntingly delicious Ghost Food
        Collection, and revel in the ethereal flavors that transcend the
        ordinary. Unearth the promo code and immerse yourself in a world of
        discounted delights, where each bite is a journey into the supernatural.
        Hurry, as this spectral offer awaits only the boldest of flavor
        adventurers!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {sliceDiscount.map((discount) => (
          <DiscountCard key={discount._id} discount={discount}></DiscountCard>
        ))}
      </div>
    </div>
  );
};

export default DiscountFood;
