
import styles from './MessageItem.module.css';
import {
    Editable,
    EditableTextarea,
    EditablePreview,
  } from '@chakra-ui/react'

export const MessageItem = ({message, owner, handleEdit, showRead})=>{
    const { id, content } = message;
    
    return (
        <>
        <div className={owner? `${styles.speech} ${styles.right}`: `${styles.speech} ${styles.left}`}>
            <Editable defaultValue={content} isDisabled={!owner} onSubmit={(nextValue)=> handleEdit(id, nextValue, content)}>
                <EditablePreview />
                <EditableTextarea />
            </Editable>  
        {showRead && <span bg="teal" className={styles.dot}></span>}
        </div>
        </>
    );
}