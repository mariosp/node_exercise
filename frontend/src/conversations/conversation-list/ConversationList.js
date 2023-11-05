import { useEffect } from 'react';
import styles from './ConversationList.module.css';
import { fetchConversationsAction, selectedConversationAction } from '../../store/actions/conversationsAction';
import { useDispatch, useSelector } from 'react-redux';
import { ConversationItem } from './conversation-item/ConversationItem';
import { Text } from '@chakra-ui/react'

export const ConversationList = () => {
    const dispatch = useDispatch();
    const conversationsList = useSelector(state=> state.conversations['items']);
    const selectedUserId = useSelector(state=> state.user['selectedUser'].id);

    useEffect(()=> {
        dispatch(fetchConversationsAction());
        const interval = setInterval(()=>dispatch(fetchConversationsAction()), 5000);
        return ()=> {
            clearInterval(interval);
        }
    }, []);

    const onClick = (id) => dispatch(selectedConversationAction(id));

    const renderList = conversationsList.map(item=> <ConversationItem key={item.id} item={item} onClick={()=> onClick(item.id)} selected={item.id === selectedUserId} />)

    return (
        <>
        {renderList.length ?
            renderList:
            <Text className={styles.empty} fontSize='xl' color='teal'>No conversations</Text>
        }
        </>
    );
}