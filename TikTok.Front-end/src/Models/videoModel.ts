export interface VideoModel
{
    id: Number;
    title: string;
    isPrivate: boolean;
    videoUrl: string;
    views: Number;
    publishDate: Date;
    userId: Number;
}

export interface CreateVideoModel
{
    title: string;
    views: Number;
    isPrivate: boolean;
    videoUrl: string;
    publishDate: Date;
    userId: Number;
}

export interface EditVideoModel
{
    id: Number;
    title: string;
}