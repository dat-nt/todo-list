import clsx from "clsx";
import styles from "./TaskControl.module.css";

function TaskControl({ onDeleteAll, onMarkAll }) {
    return (
        <div className={styles.container}>
            <button
                className={clsx(styles.btn, styles.markButton)}
                onClick={() => onMarkAll()}
            >Mark all done</button>

            <button
                className={clsx(styles.btn, styles.deleteButton)}
                onClick={() => onDeleteAll()}
            >Delete all</button>
        </div>
    );
}

export default TaskControl;