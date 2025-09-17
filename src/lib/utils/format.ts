export function formatNumberCompact(value: number): string {
  return Intl.NumberFormat(undefined, { notation: 'compact' }).format(value);
}

export function formatDate(value: Date | string, options?: Intl.DateTimeFormatOptions): string {
  const date = typeof value === 'string' ? new Date(value) : value;
  return Intl.DateTimeFormat(undefined, options ?? { year: 'numeric', month: 'short', day: 'numeric' }).format(date);
}

