export function formatDateCreated(created_at: string) {
  const created = new Date(created_at);
  
  const dataFormatDayString = created.toLocaleDateString('en-IN',{year: 'numeric', month: 'long', day: 'numeric'});

  return dataFormatDayString;
}