import { useRef, useState } from 'react';
import styles from './TaskForm.module.css';

function TaskForm({ onAdd }) {
    const [task, setTask] = useState('');
    const inputBox = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            onAdd(task.trim());
            setTask('');
            inputBox.current.focus();
        }
    }

    return (
        <form
            className={styles.taskForm}
            onSubmit={e => handleSubmit(e)}
        >
            <input
                ref={inputBox}
                name='input-task'
                className={styles.taskInput}
                placeholder="Enter your task ..."
                value={task}
                onChange={e => setTask(e.target.value)}
            />
            <button
                type='submit'
                className={styles.addButton}
            >Add</button>
        </form>
    );
}

export default TaskForm;
