import styles from './Dashboard.module.css';
import { Conversations } from '../conversations/Conversations';


export const Dashboard = ()=> {

return (
    <div className={styles.container}>
        <div className={styles.conversations}>
            <Conversations />
        </div>
        <div className={styles.messages}>
            Messages
        </div>
    </div>
);
};