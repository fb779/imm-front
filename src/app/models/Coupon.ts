export interface Coupon {
  code: string;
  percent: number;
  activation: Date;
  expiration: Date;
  _id?: string;
  share?: string[];
  group?: string;
  description?: string;
  state?: boolean;
}
