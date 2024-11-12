import {
  NotificationBase,
  NotificationByEmail,
  NotificationByPush,
  NotificationBySMS,
  TMessage,
} from "./decorator";

const message: TMessage = {
  name: "John Doe",
  text: "Hello, world!",
  email: "john@email.com",
  phone: "123456789",
};

const notification = new NotificationBase(message);
const notificationBySMS = new NotificationBySMS(notification);
const notificationByEmail = new NotificationByEmail(notificationBySMS);
const notificationByPush = new NotificationByPush(notificationByEmail);

notificationByPush.send();
