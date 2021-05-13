/**
 * Returns display date string in UTC timezone
 */
export const getDisplayDateFromUTC = (utcTimestamp: number): string => {
    if (!utcTimestamp) {
        return undefined;
    }
    const allString = new Date(utcTimestamp).toUTCString();
    const noWeekday = allString.split(', ')[1];
    const noTimeWithSuffix = noWeekday.split(':')[0];
    const noTimeNoSuffix = noTimeWithSuffix.slice(0, -2);
    return noTimeNoSuffix;
}
