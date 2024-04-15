import clsx from 'clsx';
import styles from './Task.module.css';
import { useState } from 'react';

function Task({ name, isDone, onToggle, onDelete, onRename }) {

    const [editMode, setEditMode] = useState(false);

    return (
        <div className={clsx(styles.task, {
            [styles.done]: isDone
        })}
        >
            <input
                type="checkbox"
                className={styles.taskCheck}
                checked={isDone}
                onChange={() => onToggle(!isDone)}
            />

            {!editMode
                ?
                <p className={styles.taskName}>{name}</p>
                :
                <input
                    className={styles.editTask}
                    value={name}
                    autoFocus
                    onChange={(e) => onRename(e.target.value)}
                // onBlur={(e) => {
                //     setEditMode(false);
                // }}
                />
            }

            <button
                className={clsx(styles.btn, styles.editButton)}
                onClick={() => setEditMode(prev => !prev)}
            >
                {!editMode ? "Edit" : "Update"}
            </button>


            <button
                className={clsx(styles.btn, styles.deleteButton)}
                onClick={onDelete}
            >
                Delete
            </button>
        </div >
    );
}

export default Task;
