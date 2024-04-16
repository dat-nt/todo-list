import { useState, useEffect, useRef } from 'react';
import styles from './EditTask.module.css';

function EditTask({ taskName, onRename, setEditMode }) {
    const [inputName, setInputName] = useState(taskName);
    const editFormRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputName.trim()) {
            onRename(inputName.trim());
            setEditMode(false);
        }
        else {
            alert('Task can not be blank!');
        }
    }

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                setEditMode(false);
            }
        };

        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Xử lí click ra ngoài edit form thì tắt editmode
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (editFormRef && !editFormRef.current.contains(e.target)) {
                setEditMode(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);

        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <form
            ref={editFormRef}
            className={styles.editForm}
            onSubmit={handleSubmit}
        >
            <input
                className={styles.editInput}
                name='rename'
                autoFocus
                value={inputName}
                onChange={e => setInputName(e.target.value)} />
            <button
                type='submit'
                className={styles.updateButton}
            >Update</button>
        </form>
    );
}

export default EditTask;