
export interface PagingObject<T> {
    href: string;
    items: T[];
    limit: number;
    next: null;
    offset: number;
    previous: null;
    total: number;
}
