import {
  parseISO,
  formatDistanceToNow,
  isToday,
  differenceInCalendarDays,
  format,
} from "date-fns";
import { de } from "date-fns/locale";

/**
 * Converts an ISO date into a relative time string in German.
 * If the date is today, it returns 'heute'.
 * @param isoDate - ISO date string (e.g., '2024-11-20').
 * @returns Relative time string in German (e.g., 'vor 2 Tagen', or 'heute').
 */
export function getRelativeTime(isoDate: string): string {
  try {
    const date = parseISO(isoDate);

    if (isToday(date)) {
      return "heute";
    }

    const daysDifference = differenceInCalendarDays(new Date(), date);

    if (daysDifference === 1) {
      return "gestern";
    }

    date.setDate(date.getDate() + 1);

    const relativeTime = formatDistanceToNow(date, {
      addSuffix: true,
      locale: de,
    });

    return relativeTime;
  } catch {
    throw new Error("Invalid ISO date format");
  }
}

/**
 * Converts an ISO date into an absolute time string in German.
 * @param isoDate - ISO date string (e.g., '2024-11-20').
 * @returns Absolute time string in German (e.g., '18. November 2024').
 */
export function getAbsoluteTime(isoDate: string): string {
  try {
    const date = parseISO(isoDate);
    const absoluteTime = format(date, "d. MMMM yyyy", { locale: de });
    return absoluteTime;
  } catch {
    throw new Error("Invalid ISO date format");
  }
}
