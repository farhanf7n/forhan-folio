import { DateTime } from 'luxon';

export function formatDate(date: Date): string {
  return DateTime.fromJSDate(date).toFormat('yyyy-MM-dd');
}
