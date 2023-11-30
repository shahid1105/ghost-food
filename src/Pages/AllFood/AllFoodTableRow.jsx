import { Link } from "react-router-dom";

const AllFoodTableRow = ({ ghostFood, ghostFoods, setGhostFood }) => {
  const { _id, name, subCategory, availableQuantity, price, SellerName, img } =
    ghostFood || [];
  // console.log(ghostFood);

  const handleDelete = (_id) => {
    const proceed = confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/delete/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remaining = ghostFoods.filter(
              (ghostFood) => ghostFood._id !== _id
            );
            setGhostFood(remaining);
          }
        });
    }
  };
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
      <td>
        <Link to={`/update/${_id}`}>
          <button className="btn btn-sm">Update</button>
        </Link>
      </td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-square btn-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default AllFoodTableRow;
