import { useSelector } from 'react-redux';
import styles from './Messages.module.css';
import { Text } from '@chakra-ui/react';
import { Header } from './header/Header';


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
                </div>
                <div className={styles.chat}>
                </div>
            </> :
            <Text className={styles.empty} color='teal' fontSize='2xl'>Select conversation</Text>

        }   
        </>
    );
}