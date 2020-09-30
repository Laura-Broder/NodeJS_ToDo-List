// init tasks array
let taskArray = [];

// define Task class
class ToDo {
  constructor(content, index) {
    this.content = content;
    this.index = index;
    this.done = false;
  }
  static addNewTask = (content) => {
    // if content is empty
    if (content === "") {
      return "The task has no content";
    }
    const index = taskArray.length;
    return taskArray.push(new ToDo(content, index));
  };
  static displayList = () => {
    // if list is empty
    if (taskArray.length === 0) {
      return "No tasks in your list.";
    }
    taskArray.forEach((task, index) => {
      task.displayTask(index + 1, task.content, task.done);
    });
    return taskArray.length;
  };
  displayTask = (index, content, status) => {
    // check index is in the array
    // no need to check because the calling function is checking it
    const taskStatus = status ? "Done" : "Open";
    console.log(index, ",", content, ",", taskStatus);
  };
  static deleteTask = (index) => {
    // check index is in the array
    if (!taskArray[index - 1]) {
      return "there is no such task number";
    }
    return taskArray.splice(index - 1, 1).length;
  };
  static clearList = () => {
    taskArray = [];
    return taskArray.length;
  };
  static markDone = (index) => {
    // check index is in the array
    if (!taskArray[index - 1]) {
      return "there is no such task number";
    }
    if (taskArray[index - 1].done) {
      return "The task is already marked done";
    }
    taskArray[index - 1].done = true;
    taskArray.push(taskArray[index - 1]);
    return this.deleteTask(index);
  };
  static unMarkDone = (index) => {
    // check index is in the array
    if (!taskArray[index - 1]) {
      return "there is no such task number";
    }
    if (!taskArray[index - 1].done) {
      return "The task was not marked done yet";
    }
    taskArray[index - 1].done = false;
    return !taskArray[index - 1].done;
  };
}
module.exports = {
  taskArray,
  ToDo,
};

// function add new task and assign content

// add a new task
// console.log(ToDo.addNewTask("Do the NodeJS ToDo list assignment"));

// console.log(ToDo.addNewTask("Learn hooks"));
// console.log(ToDo.addNewTask("Refactor Omri's assignment"));

// ToDo.displayList();

// console.log(ToDo.deleteTask(2));
// console.log(ToDo.markDone(1));
// console.log(ToDo.unMarkDone(2));
// ToDo.displayList();
