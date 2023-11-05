import { Divider, Avatar,Text } from '@chakra-ui/react';
import styles from './Header.module.css';


export const Header = ({firstname, lastname})=> {
    return (
        <>
            <div className={styles.container}>
                <Avatar bg='teal.500' src='https://bit.ly/broken-link' />
                <Text className={styles.name} color='teal' fontSize='2xl'>{firstname} {lastname}</Text>
            </div>
            <Divider/>
        </>
    );
}