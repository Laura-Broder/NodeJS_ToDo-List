// init tasks array
const taskArray = [];

// define Task class
class ToDo {
  constructor(content, index) {
    this.content = content;
    this.index = index;
    this.done = false;
  }
  static addNewTask = (content) => {
    const index = taskArray.length;
    taskArray.push(new ToDo(content, index));
    return `Task #${index} was added.`;
  };
  static displayList = () => {
    taskArray.forEach((task, index) => {
      task.displayTask(index + 1, task.content, task.done);
    });
  };
  displayTask = (index, content, status) => {
    const taskStatus = status ? "Done" : "Open";
    console.log(index, ",", content, ",", taskStatus);
  };
  static deleteTask = (index) => {
    taskArray.splice(index - 1, 1);
    return `Task #${index} was deleted.`;
  };
  static markDone = (index) => {
    taskArray[index - 1].done = true;
    taskArray.push(taskArray[index - 1]);
    this.deleteTask(index);
    return `Task #${index} was marked Done.`;
  };
  static unMarkDone = (index) => {
    taskArray[index - 1].done = false;
    return `Task #${index} was unmarked Done.`;
  };
}

// function add new task and assign content

// add a new task
console.log(ToDo.addNewTask("Do the NodeJS ToDo list assignment"));

console.log(ToDo.addNewTask("Learn hooks"));
console.log(ToDo.addNewTask("Refactor Omri's assignment"));

ToDo.displayList();

console.log(ToDo.deleteTask(2));
console.log(ToDo.markDone(1));
console.log(ToDo.unMarkDone(2));
ToDo.displayList();
