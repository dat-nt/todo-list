import clsx from "clsx";
import styles from "./TaskControl.module.css";
import { useState } from "react";

function TaskControl({ onDeleteAll, onMarkAll, onClearAll, isAllDone }) {
    const [doneAll, setDoneAll] = useState(isAllDone);

    const handleClick = () => {
        if (!doneAll) {
            onMarkAll();
        }
        else {
            onClearAll();
        }
        setDoneAll(prev => !prev);
    }

    return (
        <div className={styles.container}>
            <button
                className={clsx(styles.btn, styles.markButton)}
                onClick={() => handleClick()}
            >
                {doneAll ? "Clear all mark" : "Mark all done"}
            </button>

            <button
                className={clsx(styles.btn, styles.deleteButton)}
                onClick={() => onDeleteAll()}
            >Delete all</button>
        </div>
    );
}

export default TaskControl;