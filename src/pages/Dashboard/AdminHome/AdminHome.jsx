import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import imgRevenue from '../../../assets/icons8-revenue.gif'
import imgUser from '../../../assets/icons8-users-50.png'
import imgOrders from '../../../assets/icons8-delivery-50.png'
import imgMenuItems from '../../../assets/icons8-restaurant-menu-64.png'


const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()
    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    })
    return (
        <div>
            <h2 className="text-3xl">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user?.displayName : "Back!!"
                }
            </h2>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <img src={imgRevenue} alt="" />
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">{stats.revenue}</div>
                    
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <img src={imgUser} alt="" />
                    </div>
                    <div className="stat-title">Customers</div>
                    <div className="stat-value">{stats.users}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <img src={imgMenuItems} alt="" />
                    </div>
                    <div className="stat-title">Menu Items</div>
                    <div className="stat-value">{stats.menuItems}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <img src={imgOrders} alt="" />
                    </div>
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">{stats.orders}</div>
                    
                </div>
            </div>
        </div>
    );
};

export default AdminHome;