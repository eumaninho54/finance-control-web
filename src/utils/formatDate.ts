export const formatDate = (date: Date): string => {
  const day = new Date(date).getDate().toString().padStart(2, '0')
  const month = new Date(date).getMonth().toString().padStart(2, '0')
  const year = new Date(date).getFullYear()
  
  return `${day}/${month}/${year}`
}