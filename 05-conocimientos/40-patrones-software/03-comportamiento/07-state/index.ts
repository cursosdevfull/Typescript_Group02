import { Notification, ReadAndProcessNotification } from "./state";

const readAndProcessNotification = new ReadAndProcessNotification();
readAndProcessNotification.handle(
  new Notification("LOAD_INDIVIDUAL01", { products: ["Product01"] })
);

readAndProcessNotification.busy();

readAndProcessNotification.handle(
  new Notification("LOAD_INDIVIDUAL02", { products: ["Product02"] })
);
