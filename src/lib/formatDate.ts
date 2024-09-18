export function formatDate(dateString?: string) {
  if (!dateString) return null;
  let parts = dateString.split('-')
  let hasDay = parts.length > 2

  return new Date(`${dateString}Z`).toLocaleDateString('ru-RU', {
    day: hasDay ? 'numeric' : undefined,
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

export const formattedDate = ((seconds:number) => {
  const date = new Date(seconds * 1000);
  const day = date.getDate().toString().padStart(2, '0'); // Получаем день с ведущим нулем
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Получаем месяц (нумерация с 0, поэтому +1)
  const year = date.getFullYear(); // Получаем год
  return `${year}-${month}-${day}`;
})