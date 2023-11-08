import styles from './Profile.module.css';
import {useDispatch, useSelector} from 'react-redux';
import { Button,Text } from '@chakra-ui/react';
import {userLogoutAction} from '../../store/actions/userAction';
import {resetConversatonStateAction} from '../../store/actions/conversationsAction';

export const Profile = () => {
    const dispatch = useDispatch();
    const { firstname } = useSelector(state=> state.user['user']) || {};

    const logout = () =>{

        dispatch(resetConversatonStateAction());
        dispatch(userLogoutAction());
    }

    return (
        <>
            <Text as='b' color='teal' fontSize='xl'>Hi, {firstname}</Text>
            <Button colorScheme='teal' variant='outline' onClick={logout}>
                Logout
            </Button>
        </>
    );
}