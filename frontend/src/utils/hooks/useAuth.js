import { useEffect, useState,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAction } from '../../store/actions/userAction';


export const useAuth = ()=> {
    const dispatch = useDispatch();
    const user = useSelector(state=> state.user['user']);
    const didMount = useRef(false);
    const [authed, setAuthed] = useState('PENDING');

    useEffect(()=>{
        const user = sessionStorage.getItem('user');
        if(user){
            const userObj = JSON.parse(user);
            dispatch(userLoginAction(userObj.username));
        } else {
            setAuthed('FALSE');
        }
    }, []);

    useEffect(()=>{
        if (didMount.current) {
            userStateUpdate();
          } else {
            didMount.current = true;
          }
    }, [user]);


    const userStateUpdate = ()=>{
        if(user) {
            sessionStorage.setItem('user', JSON.stringify(user));
            setAuthed('TRUE');
        } else if(!user) {
            sessionStorage.removeItem('user');
            setAuthed('FALSE');
        }
    }

    return {
        authed: authed,
    }
}