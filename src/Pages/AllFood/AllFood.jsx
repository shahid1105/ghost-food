import { useEffect, useState } from "react";
import AllFoodTableRow from "./AllFoodTableRow";

const AllFood = () => {
  const [ghostFoods, setGhostFood] = useState([]);

  useEffect(() => {
    fetch("https://ghost-food-server.vercel.app/allFood")
      .then((res) => res.json())
      .then((data) => {
        setGhostFood(data);
      });
  }, []);
  return (
    <div>
      <div>
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Food image</th>
              <th>Seller</th>
              <th>FoodName</th>
              <th>SubCategory</th>
              <th>Price</th>
              <th>AvailableQuantity</th>
              <th>Details</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {ghostFoods.map((ghostFood) => (
              <AllFoodTableRow
                key={ghostFood._id}
                ghostFood={ghostFood}
                ghostFoods={ghostFoods}
                setGhostFood={setGhostFood}
              ></AllFoodTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllFood;
