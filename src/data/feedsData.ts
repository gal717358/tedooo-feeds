export interface FeedsDataType {
  data: {
    avatar: string;
    comments: number;
    date: string;
    didLike: boolean;
    id: string;
    images: string[];
    likes: number;
    premium: boolean;
    shopId: string;
    shopName: string;
    text: string;
    userId: string;
    username: string;
  }[];
}

export type FeedType = {
  avatar: string;
  comments: number;
  date: string;
  didLike: boolean;
  id: string;
  images: string[];
  likes: number;
  premium: boolean;
  shopId: string;
  shopName: string;
  text: string;
  userId: string;
  username: string;
};
