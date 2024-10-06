export interface PayoutBatchDetail {
  total_items: number;
  total_pages: number;
  batch_header: BatchHeader;
  items: Item[];
  links: Link[];
}

export interface BatchHeader {
  payout_batch_id: string;
  batch_status: string;
  time_created: string;
  time_completed: string;
  time_closed: string;
  sender_batch_header: SenderBatchHeader;
  funding_source: string;
  amount: Amount;
  fees: Amount;
  currency_conversion: CurrencyConversion;
}

export interface SenderBatchHeader {
  sender_batch_id: string;
  email_subject: string;
  email_message: string;
}

export interface Item {
  payout_item_id: string;
  transaction_id: string;
  activity_id: string;
  transaction_status: string;
  payout_item_fee: Amount;
  payout_batch_id: string;
  payout_item: PayoutItem;
  currency_conversion: CurrencyConversion;
  time_processed: string;
  links: Link[];
}

export interface PayoutItem {
  recipient_type: string;
  amount: Amount;
  receiver: string;
  sender_item_id: string;
  recipient_wallet: string;
}

export interface CurrencyConversion {
  from_amount: Amount;
  to_amount: Amount;
  exchange_rate?: string;
}

export interface Amount {
  currency: string;
  value: string;
}

export interface Link {
  href: string;
  rel: string;
  method: string;
  encType: string;
}
