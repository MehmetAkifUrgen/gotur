function date() {
  return (
    new Date().toLocaleDateString('tr-TR') +
    ' ' +
    new Date().toLocaleTimeString('tr-TR', {
      hour12: false,
      hour: 'numeric',
      minute: 'numeric',
      timeZoneName: 'short',
      timeZone: 'GMT+3',
    })
  );
}

export default date;
