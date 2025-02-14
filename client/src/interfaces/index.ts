export interface IEmployee {
  _id: string;
  firstName: string;
  lastName: string;
  position: string;
  image: string;
  gender: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface IAnnouncement {
  _id: string;
  content: string;
  about: string;
  employee: IEmployee;
  createdAt: Date;
  updatedAt: Date;
}

export interface IQuiz {
  _id: string;
  title: string;
  course: string;
  topic: string;
  due_to_day: string;
  due_to_hour: string;
}
