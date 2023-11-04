import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAction } from '../../store/actions/userAction';


export const useAuth = ()=> {
    const dispatch = useDispatch();
    const user = useSelector(state=> state.user['user']);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const user = sessionStorage.getItem('user');
        if(user){
            const userObj = JSON.parse(user);
            checkUsername(userObj.username);
        }
    }, []);

    useEffect(()=>{
        if(user) {
            sessionStorage.setItem('user', JSON.stringify(user));
        } else {
            sessionStorage.removeItem('user');
        }
        setLoading(false);
    }, [user]);

    const checkUsername = (username)=> {
        setLoading(true);
        dispatch(userLoginAction(username));
    }

    return {
        loading,
        authed: !!user,
    }
}