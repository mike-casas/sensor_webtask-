var request = require('request');


module.exports = function (ctx, done) {
  var options = {
  	url: 'https://api.pushbullet.com/v2/pushes',
    method: 'POST',
  	headers : {
      'Access-Token': ctx.data.SECRET, // access token Api pushbullet
      'Content-Type': 'application/json',
  	},
    json: true,
    body:{   // params of messages
          "title":ctx.data.title,
          "body": ctx.data.body,
          "type": ctx.data.type
        },
  };

  request(options, function (err, res, body) {
    if (err) {
      done(null, 'error');
    }
      done(null, 'success');
      console.log(body);
  });
};
