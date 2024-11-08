export type ScheduleProperties = {
  readonly courseId: number;
  readonly teacherId: number;
  readonly dateStart: Date;
  readonly duration: number;
  readonly slogan: string;
  readonly description: string;
  readonly price: number;
  readonly requirements: string[];
  readonly topics: string[];
  readonly enabled: boolean;
};

export class Schedule {
  private scheduleId: number;
  private courseId: number;
  private teacherId: number;
  private dateStart: Date;
  private duration: number;
  private slogan: string;
  private description: string;
  private price: number;
  private requirements: string[];
  private topics: string[];
  private enabled: boolean;

  constructor(props: ScheduleProperties) {
    this.scheduleId = Math.random();
    this.courseId = props.courseId;
    this.teacherId = props.teacherId;
    this.dateStart = props.dateStart;
    this.duration = props.duration;
    this.slogan = props.slogan;
    this.description = props.description;
    this.price = props.price;
    this.requirements = props.requirements;
    this.topics = props.topics;
    this.enabled = props.enabled;
  }

  update(props: any) {
    Object.assign(this, props);
  }

  clone(): Schedule {
    const prototype = Object.create(this);
    Object.assign(prototype, this);
    Object.assign(prototype, { scheduleId: Math.random() });
    return prototype;
  }
}