// Functional declaration
function filterHighPriorityTasks(tasks, threshold) {
    // Anonymous function within filterHighPriorityTasks
    const filteredTasks = tasks.filter(function(task) {
        // Arrow function within the anonymous function
        return task.priority > threshold;
    });
    return filteredTasks;
}

// Example usage
const tasks = [
    { name: 'Task 1', priority: 3 },
    { name: 'Task 2', priority: 5 },
    { name: 'Task 3', priority: 2 },
    { name: 'Task 4', priority: 4 },
    { name: 'Task 5', priority: 1 }
];
const threshold = 3;
const highPriorityTasks = filterHighPriorityTasks(tasks, threshold);
console.log(highPriorityTasks);
