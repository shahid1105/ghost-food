import { useEffect, useState } from "react";
import AllFoodTableRow from "./AllFoodTableRow";

const AllFood = () => {
  const [ghostFood, setGhostFood] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allFood")
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {ghostFood.map((ghostFood) => (
              <AllFoodTableRow
                key={ghostFood._id}
                ghostFood={ghostFood}
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
