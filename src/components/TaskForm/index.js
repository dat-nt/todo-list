import { useRef, useState } from 'react';
import styles from './TaskForm.module.css';

function TaskForm({ onAdd }) {
    const [task, setTask] = useState('');
    const inputBox = useRef();

    const handleAdd = () => {
        if (task.trim()) {
            onAdd(task.trim());
            setTask('');
            inputBox.current.focus();
        }
    }

    return (
        <div className={styles.taskForm}>
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
                onClick={handleAdd}
            >
                Add
            </button>
        </div>
    );
}

export default TaskForm;
