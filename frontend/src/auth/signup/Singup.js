import styles from './Signup.module.css';
import { Input, Button } from '@chakra-ui/react';


export const Signup = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.head}>
                <div className={styles.title}>Signup</div>
                <div>Register if you don't have a username</div>
            </div>
            <div className={styles.form}>
                <Input placeholder='Username' size='lg' />
                <Button colorScheme='teal' size='lg'>
                    login
                </Button>
            </div>
        </div>
    );
};