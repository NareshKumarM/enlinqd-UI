export interface Reward{
    id:string;
    rewardeeName: string;
    productId:string;
    productName:string;
    productLogo:string;
    amount:number;
    rewardDate:Date|string;
    status:string;
}

export interface RewardBatch{
    id: string;
    name: string;
    date: Date|string;
    rewards: Reward[];
}