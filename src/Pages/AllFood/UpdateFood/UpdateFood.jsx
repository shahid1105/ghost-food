import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateFood = () => {
  const updateGhostFood = useLoaderData();
  console.log(updateGhostFood);

  const { _id, description, availableQuantity, price, img } =
    updateGhostFood || {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const updateFood = (updateFood) => {
    // console.log(updateFood);

    fetch(`http://localhost:5000/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateFood),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Updated ghost food successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="bg-base-200 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 mt-8">
        Update Ghost Food
      </h1>
      <form onSubmit={handleSubmit(updateFood)}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="form-control">
            <label htmlFor="price" className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              defaultValue={price}
              type="text"
              {...register("price", { required: "Price is required" })}
              placeholder="Price"
              className="input input-bordered"
            />
            {errors.price && <p>{errors.price.message}</p>}
          </div>

          <div className="form-control">
            <label htmlFor="availableQuantity" className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="text"
              defaultValue={availableQuantity}
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
              defaultValue={img}
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
              defaultValue={description}
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
            value="Update Ghost Food"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateFood;
