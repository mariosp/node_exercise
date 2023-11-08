import styles from './ConversationItem.module.css';
import { Avatar, Text, Divider } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

export const ConversationItem = ({item, onClick, selected})=>{
    const {firstname, lastname, SentMessages = [], ReceivedMessages = []} = item;
    const [contentPreview, setContentPreview] = useState('');

    useEffect(()=> {
        if(SentMessages[0]?.timestampsent > ReceivedMessages[0]?.timestampsent) {
            setContentPreview(SentMessages[0]?.content)
        } else {
            setContentPreview(ReceivedMessages[0]?.content);
        }
    }, [SentMessages, ReceivedMessages]);

    const showUnseenMessages = SentMessages[0]?.seen === false;

    return (
    <>
        <div className={!selected? styles.wrapper : `${styles.wrapper} ${styles.selected}`} onClick={onClick}>
            <div className={styles.avatar}>
                <Avatar bg='teal.500' src='https://bit.ly/broken-link' />
            </div>
            <div className={styles.info}>
                <Text fontSize='lg' color='teal'>{firstname} {lastname}</Text>
                <Text fontSize='sm' color='teal.400'>
                    {contentPreview}
                    </Text>
            </div>
            <div className={styles.status}>
                {showUnseenMessages && <span bg="teal" className={styles.dot}></span>}
            </div>
        </div>
        <Divider/>
    </>
    );
}