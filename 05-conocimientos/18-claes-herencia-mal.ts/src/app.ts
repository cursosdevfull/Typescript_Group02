class UserActivities {
  tasks = ["task1", "task2", "task3"];
}

class UserSalary {
  salaryByTask = 100;

  calculateSalary() {
    const userActivities = new UserActivities();
    const quantityTasks = userActivities.tasks.length;
    return quantityTasks * this.salaryByTask;
  }
}

/* class UserActivities {
  tasks = ["task1", "task2", "task3"];
}

class UserSalary extends UserActivities {
  totalTasks = this.tasks.length;
} */
