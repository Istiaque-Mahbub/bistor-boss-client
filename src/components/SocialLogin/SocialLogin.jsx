import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(res=>{
            console.log(res)
            const userInfo ={
                email:res.user?.email,
                name:res.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
              navigate('/')
            })
        })
        .catch(err=>console.log(err))
    }
    return (
        <div>
            <div className="divider"></div>
            <button onClick={handleGoogleSignIn} className="btn">
                <FaGoogle></FaGoogle>
                Google
            </button>
        </div>
    );
};

export default SocialLogin;