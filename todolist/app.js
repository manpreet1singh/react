const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;


app.use(bodyParser.json());


let tasks = [];


app.get('/', (req, res) => {
    res.send('Welcome to the To-Do List application');
});

app.get('/tasks', (req, res) => {
    res.json(tasks);
});


app.post('/tasks', (req, res) => {
    const { task } = req.body;
    if (!task || typeof task !== 'string') {
        return res.status(400).json({ error: 'Invalid task format' });
    }
    const newTask = { id: tasks.length + 1, task };
    tasks.push(newTask);
    res.status(201).json(newTask);
});


app.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { task } = req.body;
    if (!task || typeof task !== 'string') {
        return res.status(400).json({ error: 'Invalid task format' });
    }
    const index = tasks.findIndex(t => t.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }
    tasks[index].task = task;
    res.json(tasks[index]);
});


app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const index = tasks.findIndex(t => t.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }
    const deletedTask = tasks.splice(index, 1);
    res.json(deletedTask[0]);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
