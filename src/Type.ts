export interface InitialUserStatus {
    user: null | {
        uid: string;
        photo?: string;
        email: string;
        displayName: string;
    };
}
