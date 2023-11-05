import { useEffect } from 'react';
import styles from './ConversationList.module.css';
import { fetchConversations } from '../../store/actions/conversationsAction';
import { useDispatch, useSelector } from 'react-redux';
import { ConversationItem } from './conversation-item/ConversationItem';

export const ConversationList = () => {
    const dispatch = useDispatch();
    const conversationsList = useSelector(state=> state.conversations['items']);

    useEffect(()=> {
        dispatch(fetchConversations());
        const interval = setInterval(()=>dispatch(fetchConversations()), 5000);
        return ()=> {
            clearInterval(interval);
        }
    }, []);

    console.log(conversationsList)

    const renderList = conversationsList.map(item=> <ConversationItem key={item.id} item={item} />)
    return (
        <>
            {renderList}
        </>
    );
}