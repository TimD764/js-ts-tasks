/**
 * Calculate the distance between two points represented on the standard Planar coordinate system
 * with precision 2 decimal places
 * Each Point represented by object contains two property (X and Y)
 * @param {Object} firstPoint
 * @param {Object} secondPoint
 * @returns {number}
 */
module.exports.getDistance = function getDistance(firstPoint, secondPoint) {
  return Math.round(Math.sqrt(Math.abs((firstPoint.X - secondPoint.X) ** 2 + Math.abs(firstPoint.Y - secondPoint.Y) ** 2) )* 100) / 100;
};
