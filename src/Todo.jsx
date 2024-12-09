import './Todo.css'

function Todo() {
  return (
    <div class="todo-app">
      <h1>To-Do List</h1>
      <input type="text" id="task-input" />
      <button id="add-task-btn">Add Task</button>
      <ul id="task-list"></ul>
      <div class="pomodoro-timer">
        <h2>Pomodoro Timer</h2>
        <span id="timer-display">25:00</span>
        <button id="start-timer-btn">Start</button>
        <button id="pause-timer-btn">Pause</button>
      </div>
    </div>
  );
}

export default Todo;
