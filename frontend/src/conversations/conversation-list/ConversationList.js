import { useEffect } from 'react';
import styles from './ConversationList.module.css';
import { fetchConversations } from '../../store/actions/conversationsAction';
import { useDispatch } from 'react-redux';

export const ConversationList = () => {
    const dispatch = useDispatch();

    useEffect(()=> {
        console.log("RENDERED")
        dispatch(fetchConversations());
    }, []);
    
    return (<>

    </>);
}