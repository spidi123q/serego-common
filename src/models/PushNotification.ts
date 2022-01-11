export interface IPushNotification {
  from: string;
  notification: {
    body: string;
    title: string;
  };
  priority: string;
}
