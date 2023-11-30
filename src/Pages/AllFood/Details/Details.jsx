import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  console.log(details);
  const {
    name,
    sellerEmail,
    SellerName,
    subCategory,
    rating,
    availableQuantity,
    description,
    price,
    img,
  } = details || {};

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <p className="text-xl font-bold text-fuchsia-700">Seller: </p>
            <p>
              {" "}
              <span className="font-bold text-2xl">{SellerName}</span>
            </p>
            <p className="text-xl font-bold text-fuchsia-700">Seller Gmail: </p>
            <p className="font-bold text-2xl">{sellerEmail}</p>
          </div>
          <div className="text-center lg:text-left">
            <p className="font-bold text-4xl px-8 mb-4">Description:</p>
            <p className=" px-8">{description}</p>
          </div>

          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img className="pt-12" src={img} alt="food" />
            </figure>
            <div className="card-body">
              <h2 className="card-title items-center text-4xl font-bold">
                {name}
              </h2>
              <div className="flex">
                <p className="text-orange-600 font-bold">
                  price: <span>${price}</span>
                </p>
                <p className="text-orange-600 font-bold">
                  Quantity: {availableQuantity}
                </p>
              </div>
              <p className="font-bold">Sub Category: {subCategory}</p>
              <p className="text-center mt-2 mr-2">
                <Rating
                  readonly
                  placeholderRating={rating}
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                  fullSymbol={<FaStar></FaStar>}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
