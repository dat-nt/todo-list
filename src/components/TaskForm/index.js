import { useRef, useState } from 'react';
import styles from './TaskForm.module.css';

function TaskForm({ onAdd }) {
    const [task, setTask] = useState('');
    const inputBox = useRef();

    const handleAdd = (e) => {
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
            onSubmit={e => handleAdd(e)}
        >
            <input
                ref={inputBox}
                className={styles.taskInput}
                type="text"
                placeholder="Enter your task ..."
                value={task}
                onChange={e => setTask(e.target.value)}
            />
            <button
                className={styles.addButton}
                onClick={e => handleAdd(e)}
            >
                Add
            </button>
        </form>

    );
}

export default TaskForm;
