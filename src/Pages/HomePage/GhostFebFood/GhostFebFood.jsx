import { useEffect, useState } from "react";

const GhostFevFood = () => {
  const [ghostFavFood, setOffer] = useState([]);

  useEffect(() => {
    fetch("https://ghost-food-server.vercel.app/allFood")
      .then((res) => res.json())
      .then((data) => {
        setOffer(data);
      });
  }, []);

  const sliceGhostFavFood = ghostFavFood.slice(0, 3);

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Favorite Ghost Foods
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sliceGhostFavFood.map((food, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md transition-all transform hover:bg-gray-400 hover:shadow-lg hover:scale-105"
            >
              <img
                src={food.img}
                alt={food.name}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-bold mb-2">{food.name}</h3>
              <p className="text-gray-600">{food.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GhostFevFood;
