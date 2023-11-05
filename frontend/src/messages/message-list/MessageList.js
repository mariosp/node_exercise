import { useDispatch, useSelector } from "react-redux";
import { MessageItem } from './message-item/MessageItem';
import styles from './MessageList.module.css';
import { updateMessageAction } from "../../store/actions/conversationsAction";

export const MessageList = () => {
    const dispatch = useDispatch();
    const messages = useSelector(state => state.conversations['selectedConversationList']);
    const userId = useSelector(state => state.user['user'].id);
    
    const handleEdit = (messageId, editMessage, originalMessage) => {
       if(editMessage !== originalMessage) {
            dispatch(updateMessageAction(messageId, {content: editMessage}));
       }
    };
    
    const renderList = messages.map(message => <MessageItem key={message.id} message={message} owner={userId === message.sender} handleEdit={handleEdit}/>)

    return (
        <div className={styles.container}>
            {renderList}
        </div>
    );
}