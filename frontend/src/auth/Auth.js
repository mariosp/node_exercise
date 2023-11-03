import styles from './Auth.module.css';
import { Divider, useMediaQuery } from '@chakra-ui/react';
import { Login } from './login/Login';
import { Signup } from './signup/Singup';

export const Auth = () => {
    const [isMobile] = useMediaQuery('(width <= 40em)')
    return (
        <div className={styles.wrapper}>
            <Login/>
            <Divider orientation={isMobile? 'horizontal': 'vertical'} />
            <Signup/>
        </div>
    );
};