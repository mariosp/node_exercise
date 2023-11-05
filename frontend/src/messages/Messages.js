import { useSelector } from 'react-redux';
import styles from './Messages.module.css';
import { Text } from '@chakra-ui/react';
import { Header } from './header/Header';
import { ChatBar } from './chat-bar/ChatBar';
import { MessageList } from './message-list/MessageList';


export const Messages = ()=>{
    const selectedUser = useSelector(state=> state.user['selectedUser']);

    return (
        <>
        {selectedUser? 
            <>
                <div className={styles.header}>
                    <Header firstname={selectedUser.firstname} lastname={selectedUser.lastname}/>
                </div>
                <div className={styles.messages}>
                    <MessageList />
                </div>
                <div className={styles.chat}>
                    <ChatBar key={selectedUser.id} selectedUserId={selectedUser.id} />
                </div>
            </> :
            <Text className={styles.empty} color='teal' fontSize='2xl'>Select conversation</Text>

        }   
        </>
    );
}