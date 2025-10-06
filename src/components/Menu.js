import Swal from "sweetalert2";
import recipes from "../recipes";

export default function Menu() {
  const handleOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, order it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Ordered!",
          text: "Your order is being processed.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>Specials</h2>
        <button>Order Menu</button>
      </div>
      <div className="cards">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="menu-items">
            <img src={recipe.image} alt={recipe.title} />
            <div className="menu-content">
              <div className="heading">
                <h4>{recipe.title}</h4>
                <p className="price">${recipe.price}</p>
              </div>
              <p className="description">{recipe.description}</p>
              <button
                className="orderbtn"
                onClick={() => handleOrder(recipe.id)}
              >
                Order a delivery <span>­ ⛟ </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
