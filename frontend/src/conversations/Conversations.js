import styles from './Conversations.module.css';
import { Profile } from './profile/Profile';
import { Divider } from '@chakra-ui/react';

export const Conversations = () => {

return (
    <div className={styles.wrapper}>
        <div className={styles.profile}><Profile/></div>
        <Divider/>
        <div className={styles.conversations}>Conversations</div>
    </div>
);
}