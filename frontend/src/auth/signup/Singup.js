import { useState } from 'react';
import styles from './Signup.module.css';
import { Input, Button, Select } from '@chakra-ui/react';
import { SingleDatepicker } from "chakra-dayzed-datepicker";

export const Signup = () => {
    const [form, setForm] = useState({
        username: '',
        firstname: '',
        lastname: '',
        birthday: new Date(),
        gender: 'N/A',
    });
    const isFormValid = Object.values(form).every(Boolean);

    const onChangeInputHandler = (e) =>{
        e['target']?
            setForm(prevState=> ({
                ...prevState,
                [e.target.name]: e.target.value
            })):
            setForm(prevState=> ({
                ...prevState,
                birthday: e,
            }));
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.head}>
                <div className={styles.title}>Sign up</div>
                <div>Register if you don't have a username</div>
            </div>
            <div className={styles.form}>
                <Input name='username' placeholder='Username' size='lg' value={form['username']} onChange={onChangeInputHandler}/>
                <Input name='firstname' placeholder='Firstname' size='lg' value={form['firstname']} onChange={onChangeInputHandler} />
                <Input name='lastname' placeholder='Lastname' size='lg' value={form['lastname']} onChange={onChangeInputHandler} />
                <SingleDatepicker
                    name='birthday'
                    configs={configs}
                    date={form['birthday']}
                    onDateChange={onChangeInputHandler}
                />
                <Select name='gender' size='lg' value={form['gender']} onChange={onChangeInputHandler}>
                    <option value='N/A'>N/A</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                </Select>
                
                <Button colorScheme='teal' size='lg' isDisabled={!isFormValid}>
                    Sign up
                </Button>
            </div>
        </div>
    );
};