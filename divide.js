const { isNullOrUndefined, isNumber } = require('./utils');

module.exports.divide = async (event) => {
  const body = JSON.parse(event.body);
  const { a, b } = body;
  if (isNullOrUndefined(a) || isNullOrUndefined(b)) { return { status: 400 } }
  if (!isNumber(a) || !isNumber(b)) { return { status: 400 } }
  return {
    statusCode: 200,
    body: JSON.stringify({ result: a / b }),
  };
};
