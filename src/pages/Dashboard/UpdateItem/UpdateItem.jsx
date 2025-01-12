import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { FaUtensils } from "react-icons/fa";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const {name,recipe,category,price,_id} = useLoaderData();
    const { register, handleSubmit,reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();


    const onSubmit = async(data) => {
            console.log(data)
            //image upload in imgBB and then get url
            const imageFile = {image: data.image[0]}
            const res = await axiosPublic.post(image_hosting_api,imageFile,{
                headers:{
                    "content-type": "multipart/form-data"
                }
            })
            if(res.data.success){
                // now sent the menu item data with the image url
                const menuItem = {
                    name: data.name,
                    category : data.category,
                    price : parseFloat(data.price),
                    recipe: data.recipe,
                    image: res.data.data.display_url
                }
                 const menuRes = await axiosSecure.patch(`/menu/${_id}`,menuItem)
                 console.log(menuRes.data)
                 if(menuRes.data.modifiedCount>0){
                    reset()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title:  `${data.name} is updated to the menu`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                 }
            }
            // console.log(res.data)
        }
    return (
        <div>
            <SectionTitle heading='Update an Item' subHeading='refresh info'></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input type="text" defaultValue={name} placeholder="Recipe Name"
                            {...register("name", { required: true })}
                            className="input input-bordered w-full" />
                    </label>
                    <div className="flex gap-6  my-6">
                        {/* category */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select defaultValue={category} {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value='default'>Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </label>

                        {/* price */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input type="number" defaultValue={price} placeholder="Price"
                                {...register("price", { required: true })}
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* recipe details */}
                    <label className="form-control my-6">
                        <div className="label">
                            <span className="label-text">Recipe details</span>
                        </div>
                        <textarea defaultValue={recipe} {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                    </label>
                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className="btn">
                        Add Item <FaUtensils className="ml-2"></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;