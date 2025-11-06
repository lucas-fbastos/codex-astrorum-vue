export function formatDate(dateString) {
  if (!dateString) return 'TBD';
  
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

export function getStatusColor(status) {
  if (!status){
    return 'bg-blue-500/20 text-blue-400 border border-blue-500/30';
  } 
  if ( status == "OK") {
    return 'bg-green-500/20 text-green-400 border border-green-500/30';
  }
  if (status == 'WARNING') {
    return 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30';
  }
  if (status == 'FAIL') {
    return 'bg-red-500/20 text-red-400 border border-red-500/30';
  }
  
  return 'bg-blue-500/20 text-blue-400 border border-blue-500/30';
}