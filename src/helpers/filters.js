export function padZeros(value, count = 3) {
  return (value ?? '').toString().padStart(count, '0')
}

export function removeCharacter(value, char) {
  return (value ?? '').toString().replace(new RegExp(char, 'g'), ' ')
}

export function capitalize(value) {
  return (value ?? '')
    .toString()
    .replace(
      /\b\w/g,
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
}
