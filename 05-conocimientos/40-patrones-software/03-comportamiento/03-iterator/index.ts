import { Notification, NotificationsPending, TIterator } from "./iterator";

const notificationsPending = new NotificationsPending();
notificationsPending.add(
  new Notification("LOAD_INDIVIDUAL", { campaing: "Campaing 1" })
);
notificationsPending.add(
  new Notification("LOAD_GROUP", { campaing: "Campaing 2" })
);
notificationsPending.add(
  new Notification("LOAD_INDIVIDUAL", { campaing: "Campaing 3" })
);
notificationsPending.add(
  new Notification("LOAD_GROUP", { campaing: "Campaing 4" })
);

const iterator: TIterator<Notification> = notificationsPending.createIterator();

while (iterator.hasNext()) {
  const notification = iterator.next();
  console.log(notification);
}
