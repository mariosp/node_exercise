import styles from './Conversations.module.css';
import { Profile } from './profile/Profile';
import { AddConversation } from './add-conversation/AddConversation';
import { ConversationList } from './conversation-list/ConversationList';

export const Conversations = () => {

return (
    <div className={styles.wrapper}>
        <div className={styles.profile}>
            <Profile/>
        </div>
        <div className={styles.add}>
            <AddConversation />
        </div>
        <div className={styles.conversations}>
            <ConversationList />
        </div>
    </div>
);
}