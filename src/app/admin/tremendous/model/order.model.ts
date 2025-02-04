export interface Order {
    id: string;
    external_id?: string | null;
    campaign_id?: string | null;
    created_at?: string;
    channel?: string;
    status?: string;
    payment: Payment;
    rewards: Reward[];
  }
  
  export interface Payment {
    subtotal: number;
    total: number;
    fees: number;
    discount: number;
  }
  
  export interface Reward {
    id: string;
    order_id: string;
    created_at: string;
    value: Value;
    delivery: Delivery;
    recipient: Recipient;
  }
  
  export interface Value {
    denomination: number;
    currency_code: string;
  }
  
  export interface Delivery {
    method: string;
    status: string;
  }
  
  export interface Recipient {
    email: string;
    name: string;
    phone?: string;
  }
  
  export interface Orders {
    orders: Order[];
    total_count: number;
  }