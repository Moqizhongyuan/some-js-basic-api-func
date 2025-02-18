function dateFormat(date: Date, format: string): string {
  const year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDate();
  return format
    .replace(/yyyy/, year + "")
    .replace(/mm/, month + 1 + "")
    .replace(/dd/, day + "");
}
