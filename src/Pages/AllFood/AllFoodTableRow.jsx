import { Link } from "react-router-dom";

const AllFoodTableRow = ({ ghostFood }) => {
  const { _id, name, subCategory, availableQuantity, price, SellerName, img } =
    ghostFood || [];
  // console.log(ghostFood);
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td className="py-2 px-4">
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{SellerName}</div>
          </div>
        </div>
      </td>
      <td className="py-2 px-4">{name}</td>
      <td className="py-2 px-4">{subCategory}</td>
      <td className="py-2 px-4">{price}</td>
      <td className="py-2 px-4">{availableQuantity}</td>
      <td className="py-2 px-4">
        <Link to={`/details/${_id}`}>
          <button className="btn btn-sm">Details</button>
        </Link>
      </td>
    </tr>
  );
};

export default AllFoodTableRow;
