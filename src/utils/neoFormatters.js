export function formatSize(neo) {
  const min = neo.estimatedDiameter?.kms?.estimatedDiameterMin;
  const max = neo.estimatedDiameter?.kms?.estimatedDiameterMax;
  
  if (min && max) {
    return `${min.toFixed(2)} - ${max.toFixed(2)} km`;
  }
  return 'N/A';
}

export function formatSpeed(neo) {
  const speed = neo.closeApproach?.[0]?.relativeVelocityKmph;
  
  if (speed) {
    return `${Math.round(speed).toLocaleString()} km/h`;
  }
  return 'N/A';
}

export function formatDiameter(neo) {
  const max = neo.estimatedDiameter?.kms?.estimatedDiameterMax;
  
  if (max) {
    return `${max.toFixed(2)} km`;
  }
  return 'N/A';
}

export function formatSizeDetail(neo) {
  const min = neo.estimatedDiameter?.kms?.estimatedDiameterMin;
  const max = neo.estimatedDiameter?.kms?.estimatedDiameterMax;
  
  if (min && max) {
    return `${min.toFixed(3)} - ${max.toFixed(3)} km`;
  }
  return 'N/A';
}

export function formatVelocity(neo) {
  const velocity = neo.closeApproach?.[0]?.relativeVelocityKmps;
  
  if (velocity) {
    return `${velocity.toFixed(2)} km/s`;
  }
  return 'N/A';
}

export function formatMissDistance(neo) {
  const distance = neo.closeApproach?.[0]?.missDistance?.kilometers;
  
  if (distance) {
    return `${Math.round(distance).toLocaleString()} km`;
  }
  return 'N/A';
}