export function daysAgo(n: number) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString();
}

export function daysFromNow(n: number) {
  return daysAgo(-n);
}

export function hoursAgo(n: number) {
  const d = new Date();
  d.setHours(d.getHours() - n);
  return d.toISOString();
}

export function daysFromNowAt(n: number, hour: number, minute = 0) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  d.setHours(hour, minute, 0, 0);
  return d.toISOString();
}
