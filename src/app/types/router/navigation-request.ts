export interface NavigationRequest {
    path: string[];
    queryParams?: any;
    extras: {
        replaceUrl?: boolean
    }
}
