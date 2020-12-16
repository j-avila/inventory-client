const getPercentage = (percentToGet, number) =>
  Math.abs((percentToGet / 100) * number - number)
export default getPercentage
