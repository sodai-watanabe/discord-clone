export interface InitialUserStatus {
    user: null | {
        uid: string;
        photo?: string;
        email: string;
        displayName: string;
    };
}

export interface InitialChannelStatus {
    channelId: string | null;
    channelName: string | null;
}


