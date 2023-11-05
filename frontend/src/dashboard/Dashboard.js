import styles from './Dashboard.module.css';
import { Conversations } from '../conversations/Conversations';
import { Messages } from '../messages/Messages';
import { Divider } from '@chakra-ui/react';


export const Dashboard = ()=> {

return (
    <div className={styles.container}>
        <div className={styles.conversations}>
            <Conversations />
        </div>
        <Divider orientation='vertical'/>
        <div className={styles.messages}>
            <Messages />
        </div>
    </div>
);
};