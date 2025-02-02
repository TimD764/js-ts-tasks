type Unit = 'm' | 'mi' | 'gr' | 'pound' | 'C' | 'K';

type TemperatureUnit = 'C' | 'K';
type DistanceUnit = 'm' | 'mi';
type WeightUnit = 'gr' | 'pound';

const WEIGHT_RATIO = 453.592;
const DISTANCE_RATIO = 1609.34;
const TEMPERATURE_DIFFERENCE = 273.15;

function isUnit(value: string): value is Unit {
  return ['m', 'mi', 'gr', 'pound', 'C', 'K'].includes(value);
}

function isTemperatureUnit(value: Unit): value is TemperatureUnit {
  return ['C', 'K'].includes(value);
}

function isDistanceUnit(value: Unit): value is DistanceUnit {
  return ['m', 'mi'].includes(value);
}

function isWeightUnit(value: Unit): value is WeightUnit {
  return ['gr', 'pound'].includes(value);
}

function fixFormatting(value: number): number {
  return parseFloat(value.toFixed(2));
}

/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {boolean}
 */
module.exports.converter = function (value: number, from: string, to: string): number {
  if (!isUnit(from) || !isUnit(to)) {
    throw new Error('Provided values are not among units.');
  }

  switch (true) {
    case isTemperatureUnit(from) && isTemperatureUnit(to):
      if (from === 'C' && to === 'K') return fixFormatting(value + TEMPERATURE_DIFFERENCE);
      if (from === 'K' && to === 'C') return fixFormatting(value - TEMPERATURE_DIFFERENCE);
      break;
    case isDistanceUnit(from) && isDistanceUnit(to):
      if (from === 'm' && to === 'mi') return fixFormatting(value / DISTANCE_RATIO);
      if (from === 'mi' && to === 'm') return fixFormatting(value * DISTANCE_RATIO);
      break;
    case isWeightUnit(from) && isWeightUnit(to):
      if (from === 'gr' && to === 'pound') return fixFormatting(value / WEIGHT_RATIO);
      if (from === 'pound' && to === 'gr') return fixFormatting(value * WEIGHT_RATIO);
      break;
    default:
      throw new Error(`Conversion between ${from} and ${to} units is not possible.`);
  }

  return fixFormatting(value);
};