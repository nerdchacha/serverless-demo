const AWS = require('aws-sdk');
const { isNullOrUndefined, isNumber } = require('./utils');

module.exports.operation = async (event) => {
  const body = JSON.parse(event.body);
  const { a, b } = body;
  if (isNullOrUndefined(a) || isNullOrUndefined(b)) { return { status: 400 } }
  if (!isNumber(a) || !isNumber(b)) { return { status: 400 } }
  const result = a - b;

  const sqs = new AWS.SQS();
  const { QUEUE_URL } = process.env;
  await sqs.sendMessage({ MessageBody: JSON.stringify({ result }), QueueUrl: QUEUE_URL }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ result }),
  };
};
