export function FormatDate(date) {
  return date.toISOString().slice(0, 10);
}

export function GetDateMinusDays(date, day) {
  return new Date(date - day * 24 * 60 * 60 * 1000);
}
