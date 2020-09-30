const ToDoList = require("./index").ToDoList;
const ToDoItem = require("./index").ToDoItem;

describe("NodeJS_ToDo", () => {
  describe("init new task item", () => {
    it("init with no arguments", () => {
      const result = new ToDoItem();
      const expected = {
        content: "Empty task",
        done: false,
        index: 0,
      };
      expect(result).toEqual(expected);
    });
    it("init with content and index", () => {
      const result = new ToDoItem("test", 3);
      const expected = {
        content: "test",
        done: false,
        index: 3,
      };
      expect(result).toEqual(expected);
    });
  });
  describe("init new array", () => {
    it("init with empty array", () => {
      const newList = new ToDoList([]);
      const result = newList.taskArray.length;
      expect(result).toBe(0);
    });
    it("init with undefined array", () => {
      const newList = new ToDoList();
      const result = newList.taskArray.length;
      expect(result).toBe(0);
    });
    it("init with an array with one obj", () => {
      const testObj = { content: "test", done: false, index: 3 };
      const newList = new ToDoList([testObj]);
      const result = newList.taskArray.length;
      expect(result).toBe(1);
    });
  });
  describe("clearList", () => {
    it("clear an empty array", () => {
      const newList = new ToDoList();
      const result = newList.clearList();
      expect(result).toBe(0);
    });
    it("clear an empty array", () => {
      const testObj = { content: "test", done: false, index: 3 };
      const newList = new ToDoList([testObj]);
      const result = newList.clearList();
      expect(result).toBe(0);
    });
  });
  describe("addNewTask", () => {
    it("add a task with an empty string", () => {
      const newList = new ToDoList();
      const result = newList.addNewTask("");
      expect(result).toMatch("The task has no content");
    });
    it("add a task with undefined content", () => {
      const newList = new ToDoList();
      const result = newList.addNewTask();
      expect(result).toMatch("The task has no content");
    });
    it("add a new task to the array", () => {
      const newList = new ToDoList();
      const result = newList.addNewTask("test task");
      expect(result).toBe(1);
    });
  });

  describe("displayList", () => {
    it("display an empty array", () => {
      const newList = new ToDoList();
      const result = newList.displayList();
      expect(result).toMatch("No tasks in your list.");
    });
    it("display the list of tasks", () => {
      const testArray = [
        { content: "test1" },
        { content: "test2" },
        { content: "test3" },
      ];
      const newList = new ToDoList(testArray);
      const result = newList.displayList();
      const expected = testArray.length;
      expect(result.length).toBe(expected);
    });
  });

  describe("deleteTask", () => {
    it("delete an invalid index task", () => {
      const newList = new ToDoList();
      const result = newList.deleteTask(2);
      expect(result).toMatch("there is no such task number");
    });
    it("delete a task by index", () => {
      const testArray = [
        { content: "test1" },
        { content: "test2" },
        { content: "test3" },
      ];
      const newList = new ToDoList(testArray);
      const result = newList.deleteTask(1);
      expect(result).toBe(1);
    });
  });

  describe("markDone", () => {
    it("mark done of invalid task index", () => {
      const testArray = [
        { content: "test1" },
        { content: "test2" },
        { content: "test3" },
      ];
      const newList = new ToDoList(testArray);
      const result = newList.markDone(5);
      expect(result).toMatch("there is no such task number");
    });
    it("mark done on an already done task", () => {
      const testArray = [
        { content: "test1", done: true },
        { content: "test2" },
        { content: "test3" },
      ];
      const newList = new ToDoList(testArray);
      const result = newList.markDone(1);
      expect(result).toMatch("The task is already marked done");
    });
    it("mark done by task index", () => {
      const testArray = [
        { content: "test1" },
        { content: "test2" },
        { content: "test3" },
      ];
      const newList = new ToDoList(testArray);
      const result = newList.markDone(1);
      expect(result).toBe(1);
    });
  });

  describe("unMarkDone", () => {
    it("un-mark done of invalid task index", () => {
      const newList = new ToDoList();
      const result = newList.unMarkDone(1);
      expect(result).toMatch("there is no such task number");
    });
    it("un-mark a task that isn't done", () => {
      const testArray = [
        { content: "test1" },
        { content: "test2" },
        { content: "test3" },
      ];
      const newList = new ToDoList(testArray);
      const result = newList.unMarkDone(1);
      expect(result).toMatch("The task was not marked done yet");
    });
    it("un-mark a done task by index", () => {
      const testArray = [
        { content: "test1", done: true },
        { content: "test2" },
        { content: "test3" },
      ];
      const newList = new ToDoList(testArray);
      const result = newList.unMarkDone(1);
      expect(result).toBeTruthy();
    });
  });
});
