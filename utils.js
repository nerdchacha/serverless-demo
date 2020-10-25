const isNullOrUndefined = (input) => input === null || input === undefined;

const isNumber = (input) => typeof input === 'number';

module.exports = { isNullOrUndefined, isNumber };
