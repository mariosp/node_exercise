import { useEffect, useState } from 'react';
import styles from './AddConversation.module.css';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersAction } from '../../store/actions/userAction';
import { selectedConversationAction } from '../../store/actions/conversationsAction';

export const AddConversation = ()=>{
    const dispatch = useDispatch();
    const users = useSelector(state=> state.user['users']);

    useEffect(()=>{
        dispatch(fetchUsersAction());
    }, []);

    const handleOnSelect = (item) => {
        dispatch(selectedConversationAction(item.id));
    }

    const pickerUsers = users.map(({id, firstname, lastname})=>({
        id,
        name: `${firstname} ${lastname}`
    }));

    return (
        <ReactSearchAutocomplete
            styling={{zIndex: 100}}
            items={pickerUsers}
            onSelect={handleOnSelect}
            placeholder='Start new conversation'
        />
    );
}