export interface PayoutPayload {
    sender_batch_header: PayoutSenderBatchHeader;
    items: PayoutItem[];
}

export interface PayoutSenderBatchHeader {
    sender_batch_id: string;
    recipient_type: string;
    email_subject: string;
    email_message: string;
}

export interface PayoutItem {
    amount: PayoutAmount;
    sender_item_id: number;
    recipient_wallet: string;
    receiver: string;
    recipient_type?: string;
    note?: string;
}

export interface PayoutAmount {
    value: number;
    currency: string;
}