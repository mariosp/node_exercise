import { useEffect } from 'react';
import styles from './ConversationList.module.css';
import { fetchConversationsAction } from '../../store/actions/conversationsAction';
import { useDispatch, useSelector } from 'react-redux';
import { ConversationItem } from './conversation-item/ConversationItem';
import { Text } from '@chakra-ui/react'

export const ConversationList = () => {
    const dispatch = useDispatch();
    const conversationsList = useSelector(state=> state.conversations['items']);

    useEffect(()=> {
        dispatch(fetchConversationsAction());
        const interval = setInterval(()=>dispatch(fetchConversationsAction()), 5000);
        return ()=> {
            clearInterval(interval);
        }
    }, []);

    const renderList = conversationsList.map(item=> <ConversationItem key={item.id} item={item} />)

    return (
        <>
        {renderList.length ?
            renderList:
            <Text className={styles.empty} fontSize='xl' color='teal'>No conversations</Text>
        }
        </>
    );
}