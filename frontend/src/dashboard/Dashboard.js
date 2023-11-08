import styles from './Dashboard.module.css';
import { Conversations } from '../conversations/Conversations';
import { Messages } from '../messages/Messages';
import { Divider, useMediaQuery } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


export const Dashboard = ()=> {
    const [isMobile] = useMediaQuery('(width <= 40em)');
    const [openMessage, setOpenMessage] = useState(false);
    const selectedUser = useSelector(state=> state.user['selectedUser']);
    
    useEffect(()=> {
        selectedUser && setOpenMessage(true);
    }, [selectedUser]);

    const closeMessage = ()=> {
        setOpenMessage(false);
    }

    return(
        <>
        {!isMobile ?
            <div className={styles.container}>
                <div className={styles.conversations}>
                    <Conversations />
                </div>
                <Divider orientation='vertical'/>
                <div className={styles.messages}>
                    <Messages />
                </div>
            </div> :
            <div className={styles.mobile}>
                {!openMessage?
                    <Conversations /> : <Messages close={closeMessage}/>
                }
            </div>
        }
        </>
    );
};