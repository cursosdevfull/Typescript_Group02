type TDate = string | Date | null | undefined;
type TDateNonNull = NonNullable<TDate>;

class UserApp {
  userId: number;
  name: string;
  createdAt: NonNullable<TDate>;
  updatedAt: TDate;
  deletedAt: TDate;

  constructor(userId: number, name: string) {
    this.userId = userId;
    this.name = name;
    this.createdAt = new Date();
  }

  getCreatedAt(): NonNullable<TDate> {
    return this.createdAt;
  }
}
