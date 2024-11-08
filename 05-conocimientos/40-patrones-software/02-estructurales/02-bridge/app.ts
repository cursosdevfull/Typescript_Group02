import { TQueue } from "./abstract";
import { NotificationNewCampaign, RabbitMQ } from "./implementation";

//const repository: TQueue = new Kafka();
const repository: TQueue = new RabbitMQ();
const notificationNewCampaign = new NotificationNewCampaign(repository);

const message = {
  campaign_year: 202318,
  country_iso: "PE",
  campaign_name: "Campaña navideña",
};

notificationNewCampaign.sentMessage(JSON.stringify(message));
