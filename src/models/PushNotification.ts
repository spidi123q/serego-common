export interface PushNotification {
  from: string;
  notification: {
    body: string;
    title: string;
  };
  priority: string;
}
