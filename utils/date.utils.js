export function FormatDate(date) {
  return `${String(date.getDate()).padStart(2, "0")}-${String(
    date.getMonth() + 1
  ).padStart(2, "0")}-${date.getFullYear()}`;
}

export function GetDateMinusDays(date, day) {
  return new Date(
    `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() - day}`
  );
}
