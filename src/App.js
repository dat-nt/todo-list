import { useEffect, useState } from 'react';
import Task from './components/Task';
import TaskForm from './components/TaskForm';

function App() {
    const [tasks, setTasks] = useState(() => {
        const storageTasks = JSON.parse(localStorage.getItem('tasks')) ?? [];
        return storageTasks;
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks]);

    const addTask = (taskName) => {
        setTasks(prev => {
            return [...prev, { name: taskName, isDone: false }];
        })
    }

    const updateTaskDone = (index, isDone) => {
        setTasks(prev => {
            const newTasks = [...prev]
            newTasks[index].isDone = isDone;
            return newTasks;
        })
    }

    const deleteTask = (indexToDelete) => {
        setTasks(prev => {
            const newTasks = prev.filter((task, index) => indexToDelete !== index);
            return newTasks;
        })
    }

    const renameTask = (renameIndex, newName) => {
        setTasks(prev => {
            const newTasks = [...prev]
            newTasks[renameIndex].name = newName;
            return newTasks;
        })
    }

    const totalTask = tasks.length;
    const numberTaskDone = tasks.filter(task => task.isDone).length;

    const getMessage = () => {
        const percentage = numberTaskDone / totalTask * 100;
        if (percentage === 0) {
            return "😅 Try to do at least one task! 🙏";
        }
        if (percentage === 100) {
            return "😎 You have done all the tasks. Great! 🍸";
        }
        return "😉 Keep it going! 💪";
    }

    return (
        <div className="app">
            <div className="appHeader">
                <h1>TO DO LIST</h1>
                {totalTask !== 0 ?
                    <>
                        <h2>{numberTaskDone}/{totalTask} complete</h2>
                        <h3>{getMessage()}</h3>
                    </>
                    : <h3>Please add a new task.</h3>
                }
            </div>

            <TaskForm
                onAdd={addTask}
            />

            {tasks.map((task, index) => (
                <Task
                    key={index}
                    {...task}
                    onToggle={(isDone) => updateTaskDone(index, isDone)}
                    onDelete={() => deleteTask(index)}
                    onRename={newName => renameTask(index, newName)}
                />
            ))}
        </div>
    );
}

export default App;
