import styles from './ConversationItem.module.css';
import {Avatar, Text, Divider} from '@chakra-ui/react';

export const ConversationItem = ({item})=>{
    const {firstname, lastname, Messages: {content, seen}} = item;

    return (
        <>
        <div className={styles.wrapper}>
            <div className={styles.avatar}>
                <Avatar bg='teal.500' src='https://bit.ly/broken-link' />
            </div>
            <div className={styles.info}>
                <Text fontSize='lg' color='teal'>{firstname} {lastname}</Text>
                <Text fontSize='sm' color='teal.400'>{content}</Text>
            </div>
            <div className={styles.status}>
                {!seen && <span bg="teal" className={styles.dot}></span>}
            </div>
        </div>
        <Divider/>
        </>
    );
}