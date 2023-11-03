import styles from './Login.module.css';
import { Input, Button } from '@chakra-ui/react'


export const Login = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.head}>
                <div className={styles.title}>Login</div>
                <div>Type your username to continue</div>
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