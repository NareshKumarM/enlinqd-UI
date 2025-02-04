export class OrderRequest {
    id: string;
    denomination: number;
    currencyCode: string;
    deliveryMethod: string;
    recipientName: string;
    recipientEmail: string;
    fundingSourceId: string;
    campaignId?: string = null;
    externalId?: string = null;
    products: string[];
}