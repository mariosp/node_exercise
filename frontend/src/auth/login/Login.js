import { useState } from 'react';
import styles from './Login.module.css';
import { Input, Button } from '@chakra-ui/react'


export const Login = () => {
    const [username, setUsername] = useState('');



    return (
        <div className={styles.wrapper}>
            <div className={styles.head}>
                <div className={styles.title}>Login</div>
                <div>Type your username to continue</div>
            </div>
            <div className={styles.form}>
                <Input placeholder='Username' size='lg' value={username} onChange={(e)=> setUsername(e.target.value)} />
                <Button colorScheme='teal' size='lg' isDisabled={!username}>
                    login
                </Button>
            </div>
        </div>
    );
};