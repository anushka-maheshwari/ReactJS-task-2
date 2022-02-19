import {Navigate, Outlet} from 'react-router-dom';
const useAuth=()=>{
    let isLogged=false;
    let user=localStorage.getItem('user');
    if(!user)
    {
        return false;
    }
    user=JSON.parse(user);
    if(user.username!=='' && user.email!=='' && user.password!=='')
    {
        isLogged=true;
    }
    return user && isLogged;
}
const ProtectRoute=()=>{
    const isAuth=useAuth();
    return isAuth?<Outlet/>: <Navigate to="/"/>
};
export default ProtectRoute;