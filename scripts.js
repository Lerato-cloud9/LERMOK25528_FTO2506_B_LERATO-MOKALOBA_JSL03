//Store all tasks in an Array
const tasks = [];

// Ask the user for the title and description of task 1
const task1Title = prompt("Enter task 1 title:");
const task1Description = prompt("Enter task 1 description:");

// Ask for the status of task 1 and convert it to lowercase
let task1Status = prompt(
  "Enter task 1 status (todo, doing, done):"
).toLowerCase();

// Keep asking until the user enters a valid status for task 1
while (
  task1Status !== "todo" &&
  task1Status !== "doing" &&
  task1Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task1Status = prompt(
    "Enter task 1 status (todo, doing, done):"
  ).toLowerCase();
}

//Store task 1 in the array as an object with ID
tasks.push({
  id: 1,
  title:task1Title,
  description: task1Description,
  status: task1Status,
})

// Repeat the same steps for task 2
const task2Title = prompt("Enter task 2 title:");
const task2Description = prompt("Enter task 2 description:");
let task2Status = prompt(
  "Enter task 2 status (todo, doing, done):"
).toLowerCase();

while (
  task2Status !== "todo" &&
  task2Status !== "doing" &&
  task2Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task2Status = prompt(
    "Enter task 2 status (todo, doing, done):"
  ).toLowerCase();
}

// Store task 2 in the array
tasks.push({
  id: 2,
  title: task2Title,
  description: task2Description,
  status: task2Status
});

// ===== Add up to 3 more tasks =====
let newTaskCount = 0;

while (newTaskCount < 3) {
    let addMore = prompt("Do you want to add another task? (yes/no)").toLowerCase();

}

  if (addMore === "yes") {
    // Ask for new task details
    const newTitle = prompt("Enter task " + (tasks.length + 1) + " title:");
    const newDescription = prompt("Enter task " + (tasks.length + 1) + " description:");
    let newStatus = prompt("Enter task " + (tasks.length + 1) + " status (todo, doing, done):").toLowerCase();
}
  
// Check if task1 is done, and log it if so
if (task1Status === "done") {
  console.log("Title: " + task1Title + ", status: " + task1Status);
}

//Validate status for new tasks
while (newStatus !== "todo" && newStatus !== "doing" && newStatus !== "done") {
      alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
      newStatus = prompt("Enter task " + (tasks.length + 1) + " status (todo, doing, done):").toLowerCase();
    }

     // Store new task in the array
    tasks.push({
      id: tasks.length + 1,
      title: newTitle,
      description: newDescription,
      status: newStatus
    });

    // Alert if task limit reached
if (newTaskCount === 3) {
  alert("There are enough tasks on your board, please check them in the console.");
}

// Log all tasks
console.log("=== All Tasks ===");
tasks.forEach(task => {
  console.log(`ID: ${task.id}, Title: ${task.title}, Description: ${task.description}, Status: ${task.status}`);
});


// Check if task2 is done, and log it if so
if (task2Status === "done") {
  console.log("Title: " + task2Title + ", status: " + task2Status);
}

// If neither task1 nor task2 is done, show a motivational message
if (task1Status !== "done" && task2Status !== "done") {
  console.log("No tasks completed, let's get to work!");
}
