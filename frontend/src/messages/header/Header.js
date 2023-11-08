import { Divider, Avatar,Text } from '@chakra-ui/react';
import styles from './Header.module.css';
import { useMediaQuery, IconButton } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';


export const Header = ({firstname, lastname, close})=> {
    const [isMobile] = useMediaQuery('(width <= 40em)');

    return (
        <>
            <div className={!isMobile? styles.container : styles.mobile}>
                <Avatar bg='teal.500' src='https://bit.ly/broken-link' />
                <Text className={styles.name} color='teal' fontSize='2xl'>{firstname} {lastname}</Text>
                {isMobile && 
                    <IconButton
                        onClick={close}
                        variant='outline'
                        colorScheme='teal'
                        aria-label='Back button'
                        fontSize='2em'
                        icon={<ArrowBackIcon />}
                    />
                } 
            </div>
            <Divider/>
        </>
    );
}