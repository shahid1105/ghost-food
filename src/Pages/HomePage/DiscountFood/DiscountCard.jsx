const DiscountCard = ({ discount }) => {
  const { name, img } = discount || {};
  return (
    <div className="transition-all transform hover:scale-105 bg-slate-500">
      <div className="card w-full bg-base-100 shadow-xl rounded-[40px]">
        <figure>
          <img className="w-72 h-72" src={img} alt="food" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">30 % OFF</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountCard;
