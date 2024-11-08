import { Schedule, ScheduleProperties } from "./prototype";

const props: ScheduleProperties = {
  courseId: 1,
  teacherId: 1,
  dateStart: new Date(),
  duration: 1,
  slogan: "slogan",
  description: "description",
  price: 1,
  requirements: ["requirements"],
  topics: ["topics"],
  enabled: true,
};

const schedule = new Schedule(props);
console.log("schedule", schedule);

const schedule2: Schedule = schedule.clone();
schedule2.update({ dateStart: new Date("2025-01-10") });
console.log("schedule2", schedule2);
