export interface IPushToken {
  _id: string;
  deviceId?: string;
  deviceName: string;
  token: string;
  platform: string;
  userId: string;
}

export type PushTokenEdit = Omit<IPushToken, "userId" | "_id">;
