import { useEffect, useState } from 'react';
import { Divider,Textarea,IconButton } from '@chakra-ui/react';
import styles from './ChatBar.module.css';
import {ChatIcon} from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux';
import { createMessageAction } from '../../store/actions/conversationsAction';

export const ChatBar = ()=>{
    const dispatch = useDispatch();
    let [value, setValue] = useState('');
    const isLoading = useSelector(state=>state.conversations['createMessageLoading']);

    useEffect(()=>{
        setValue('');
    },[isLoading])

    const handleClick = ()=>{
        dispatch(createMessageAction(value));
    };

    return (
        <>
            <Divider />
            <div className={styles.wrapper}>
                <Textarea
                    isDisabled={isLoading}
                    value={value}
                    onChange={e=>setValue(e.target.value)}
                    placeholder='Type your message'
                    size='md'
                    onKeyUp={e=> {
                        if (e.key === 'Enter') {
                            handleClick();
                        }
                     }}
                />
                <IconButton
                    isDisabled={isLoading || !value}
                    isLoading={isLoading}
                    onClick={handleClick}
                    className={styles.button}
                    colorScheme='teal'
                    aria-label='Search database'
                    icon={<ChatIcon />}
                />
            </div>
        </>
    );
}