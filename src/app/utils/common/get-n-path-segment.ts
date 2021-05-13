export const getNPathSegment = (path: string, n: number): string => {
    return (path || '').split('/')[n];
}
