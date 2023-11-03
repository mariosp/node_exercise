import { useState } from 'react';
import styles from './Login.module.css';
import { Input, Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { userLoginAction } from '../../store/actions/userAction';


export const Login = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.user['loginError']);
    const isLoading = useSelector(state => state.user['loginLoading']);
    const [username, setUsername] = useState('');

    const handleLogin = ()=>{
        dispatch(userLoginAction(username));
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.head}>
                <div className={styles.title}>Login</div>
                <div>Type your username to continue</div>
            </div>
            <div className={styles.form}>
                <Input placeholder='Username' size='lg' value={username} onChange={(e)=> setUsername(e.target.value)} />
                {error && <p>{error}</p>}
                <Button colorScheme='teal' size='lg' isDisabled={!username || isLoading} onClick={handleLogin}>
                    login
                </Button>
            </div>
        </div>
    );
};