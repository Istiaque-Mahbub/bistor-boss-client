import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";


const SignUp = () => {
  const axiosPublic = useAxiosPublic()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const {creteUser,setUser,updateUserProfile} = useContext(AuthContext)
  const navigate = useNavigate();
  const onSubmit = (data) => {
    creteUser(data.email,data.password)
    .then(res=>{
      const user = res.user;
      setUser(user)
      updateUserProfile(data.name,data.photoURL)
      .then(res=>{
        // create user entry in the database
        const userInfo = {
          name : data.name,
          email : data.email
        }
        axiosPublic.post('/users',userInfo)
        .then(res=>{
          reset();
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User Created Successfully!",
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/')
          }
        })
        
      })
      .catch(err=>console.log(err.message))
    })
  
    
  }

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Signup</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                {errors.name && <span className="text-sm text-red-400">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="url" {...register("photoURL", { required: true })}  placeholder="Photo URL" className="input input-bordered" />
                {errors.photoURL && <span className="text-sm text-red-400">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

                })} name="email" placeholder="email" className="input input-bordered" />
                {errors.email?.type === 'required' && <span className="text-sm text-red-400">This field is required</span>}
                {errors.email?.type === 'pattern' && <span className="text-sm text-red-400">Must be valid email type</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password",
                  {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
                  })} name="password" placeholder="password" className="input input-bordered" />
                {errors.password?.type === 'required' && <span className="text-sm text-red-400">Password is required</span>}
                {errors.password?.type === 'minLength' && <span className="text-sm text-red-400">Password must be 6 characters</span>}
                {errors.password?.type === 'maxLength' && <span className="text-sm text-red-400">Password must be with in 20 characters</span>}
                {errors.password?.type === 'pattern' && <span className="text-sm text-red-400">Password must have one uppercase one lowercase one spacial character</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign Up" />
              </div>
            </form>
            <p className="text-sm text-center my-4">Already have an account? <Link to='/login'>Login</Link></p>
            <div className='mb-2 text-center'>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;