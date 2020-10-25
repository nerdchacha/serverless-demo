const AWS = require('aws-sdk');

module.exports.operation = async (event) => {
  const records = event.Records;
  const requests = records.map((record) => {
    const { result } = JSON.parse(record.body);
    const ses = new AWS.SES();
    return ses.sendEmail({
      Source: 'yatin.gera@qualitiasoft.com',
      Destination: {
        ToAddresses: ['yatin.gera@qualitiasoft.com'],
      },
      Message: {
        Body: {
          Text: { Data: `Thanks for using the calculator app. Your result is ${result}` }
        },
        Subject: { Data: 'Result' }
      },
    }).promise();
  });

  await Promise.all(requests);

};
