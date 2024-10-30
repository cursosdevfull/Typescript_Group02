class UserActivities {
  tasks = ["task1", "task2", "task3"];
}

class UserSalary {
  salaryByTask = 100;
  activities: UserActivities;

  constructor(activities: UserActivities) {
    this.activities = activities;
  }

  calculateSalary() {
    const userActivities = new UserActivities();
    const quantityTasks = this.activities.tasks.length;
    return quantityTasks * this.salaryByTask;
  }
}

const userActivities = new UserActivities();
const userSalary = new UserSalary(userActivities);
