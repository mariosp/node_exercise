import { useDispatch, useSelector } from "react-redux";
import { MessageItem } from './message-item/MessageItem';
import styles from './MessageList.module.css';
import { updateMessageAction, selectedConversationAction } from "../../store/actions/conversationsAction";
import { useEffect, useRef } from "react";

export const MessageList = () => {
    const dispatch = useDispatch();
    const messages = useSelector(state => state.conversations['selectedConversationList']);
    const userId = useSelector(state => state.user['user'].id);
    const {id: selectedUserId} = useSelector(state=> state.user['selectedUser']) || {};
    const converationInterval = useRef(null);

    useEffect(()=> {
        if(converationInterval.current) {
            clearInterval(converationInterval.current);
        }
        converationInterval.current = setInterval(()=> dispatch(selectedConversationAction(selectedUserId)), 5000);
        return ()=> {
            clearInterval(converationInterval.current);
        }
    }, [selectedUserId]);
    
    const handleEdit = (messageId, editMessage, originalMessage) => {
       if(editMessage !== originalMessage) {
            dispatch(updateMessageAction(messageId, {content: editMessage}));
       }
    };

    const findOwnerMessageRead = messages.find(message=> message.sender === userId && message.seen === true);
    const renderList = messages.map(message => <MessageItem key={message.id + message.content} message={message} owner={userId === message.sender} showRead={message.id === findOwnerMessageRead.id} handleEdit={handleEdit}/>)

    return (
        <div className={styles.container}>
            {renderList}
        </div>
    );
}