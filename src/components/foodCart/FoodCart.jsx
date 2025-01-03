import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const FoodCart = ({item}) => {
    const {name,image,recipe,price,_id} = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const handleAddToCart = food =>{
      if(user && user.email){
        //sent cart item to the database
        const cartItem = {
          menuId: _id,
          email:user.email,
          name,
          image,
          price
        }
        axiosSecure.post('/carts',cartItem)
        .then(res=>{
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
      }
      else{
        Swal.fire({
          title: "You are not login",
          text: "Please login to add to the cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login!"
        }).then((result) => {
          if (result.isConfirmed) {
            //send the user to the login page
            navigate('/login',{state:{from: location}})
          }
        });
      }
    }
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
  
    <img
      src={image}
      alt={`image of ${name}`} />
  </figure>
  <p className='absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white'>${price}</p>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-center">
      <button onClick={()=>handleAddToCart(item)}
      className="btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-4">Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCart;