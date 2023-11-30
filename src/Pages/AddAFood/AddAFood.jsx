import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddAFood = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addAFood = (data) => {
    console.log(data);

    fetch("https://ghost-food-server.vercel.app/allFood", {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);

        if (response.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Add a ghost food successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="bg-base-200 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 mt-8">
        Add A Ghost Food
      </h1>
      <form onSubmit={handleSubmit(addAFood)}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="form-control">
            <label htmlFor="name" className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Food Name"
              className="input input-bordered"
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div className="form-control">
            <label htmlFor="price" className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              {...register("price", { required: "Price is required" })}
              placeholder="Price"
              className="input input-bordered"
            />
            {errors.price && <p>{errors.price.message}</p>}
          </div>
          <div className="form-control">
            <label htmlFor="SellerName" className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              {...register("SellerName", {
                required: "Seller Name is required",
              })}
              placeholder="Seller Name"
              className="input input-bordered"
            />
            {errors.SellerName && <p>{errors.SellerName.message}</p>}
          </div>
          <div className="form-control">
            <label htmlFor="sellerEmail" className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              type="text"
              {...register("sellerEmail", {
                required: "Seller Email is required",
              })}
              placeholder="Seller Email"
              className="input input-bordered"
            />
            {errors.sellerEmail && <p>{errors.sellerEmail.message}</p>}
          </div>

          <div className="form-control">
            <label htmlFor="rating" className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              {...register("rating", { required: "Rating is required" })}
              placeholder="Rating"
              className="input input-bordered"
            />
            {errors.rating && <p>{errors.rating.message}</p>}
          </div>

          <div className="form-control">
            <label htmlFor="subCategory" className="label">
              <span className="label-text">Sub Category</span>
            </label>
            <select
              name="subCategory"
              {...register("subCategory", {
                required: "Sub Category is required",
              })}
              className="input input-bordered"
            >
              <option value="RegularFood">Regular Food</option>
              <option value="PhantomPie">Phantom Pie</option>
              <option value="HauntingHashBrowns">Haunting Hash Browns</option>
              <option value="ApparitionAlfredo">Apparition Alfredo</option>
              <option value="PoltergeistPopsicles">
                Poltergeist Popsicles
              </option>
            </select>
            {errors.subCategory && <p>{errors.subCategory.message}</p>}
          </div>

          <div className="form-control">
            <label htmlFor="availableQuantity" className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="text"
              name="availableQuantity"
              placeholder="Available Quantity"
              {...register("availableQuantity", {
                required: "Available Quantity is required",
                pattern: {
                  value: /^[0-9]*$/,
                  message: "Please enter a valid quantity.",
                },
              })}
              className="input input-bordered"
            />
            {errors.availableQuantity && (
              <p>{errors.availableQuantity.message}</p>
            )}
          </div>

          <div className="form-control">
            <label htmlFor="img" className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="img"
              placeholder="Photo URL"
              {...register("img", {
                required: "Photo URL is required",
                pattern: {
                  value: /^(http|https):\/\/.*\.(jpg|jpeg|png|gif)$/,
                  message: "Please enter a valid image URL.",
                },
              })}
              className="input input-bordered"
            />
            {errors.img && <p>{errors.img.message}</p>}
          </div>

          <div className="form-control">
            <label htmlFor="description" className="label">
              <span className="label-text">Details Description</span>
            </label>
            <textarea
              placeholder="Details Description"
              name="description"
              {...register("description", {
                required: "Description is required",
              })}
              id=""
              cols="10"
              rows="5"
              className="border-spacing-1 shadow-md p-6"
            ></textarea>
            {errors.description && <p>{errors.description.message}</p>}
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-outline"
            type="submit"
            value="Add A Ghost Food"
          />
        </div>
      </form>
    </div>
  );
};

export default AddAFood;
