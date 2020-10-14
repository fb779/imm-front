export interface Coupon {
  code: string;
  percent: number;
  activation: Date;
  expiration: Date;
  _id?: string;
  share?: Share[];
  group?: string;
  description?: string;
  state?: boolean;
}

interface Share {
  to: any;
  from: any;
}
