export function getFormattedDate(
  date: string | Date,
  options?: Record<string, any>
): string {
  const _date = new Date(date)

  const formattedDate = new Intl.DateTimeFormat('ru-RU', {
    dateStyle: 'short',
    ...options
  }).format(_date)

  return formattedDate
}
