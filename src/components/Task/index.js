import clsx from 'clsx';
import styles from './Task.module.css';
import { useState } from 'react';
import EditTask from '../EditTask';

function Task({ name, isDone, onToggle, onDelete, onRename }) {

    const [editMode, setEditMode] = useState(false);

    return (
        <div className={clsx(styles.task, { [styles.done]: isDone })}
        >
            <input
                type="checkbox"
                name={'check-' + name}
                className={styles.taskCheck}
                checked={isDone}
                onChange={() => onToggle(!isDone)}
            />

            <p className={styles.taskName}>{name}</p>

            <button
                className={clsx(styles.btn, styles.editButton, {
                    [styles.disabled]: isDone
                })}
                onClick={() => setEditMode(true)}
                disabled={isDone}
            >
                Edit
            </button>

            <button
                className={clsx(styles.btn, styles.deleteButton)}
                onClick={onDelete}
            >
                Delete
            </button>

            {editMode && (
                <EditTask
                    taskName={name}
                    setEditMode={setEditMode}
                    onRename={onRename}
                />
            )}

        </div >
    );
}

export default Task;
