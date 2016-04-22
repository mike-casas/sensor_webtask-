var request= require("request");
var five = require("johnny-five"); // library conect with Arduino
var board = new five.Board();

board.on("ready", function() {
  var motion = new five.Motion(7);  // pin 7, Arduino

  motion.on("calibrated", function() {
    console.log("calibrated");
  });

  motion.on("motionstart", function() {
    console.log("motionstart");
    request_webtask();
  });

  motion.on("motionend", function() {
    console.log("motionend");
  });
});


function request_webtask(){  // function request to Webtask
  params={
  "body": "please, Check the house",
  "title": "Motion at Main Home",
  "type": "note"
  };
  var url='https://webtask.it.auth0.com/api/run/wt-neneriostb-gmail_com-0/push-webtask?webtask_no_cache=1&body='+ params.body +'&title='+ params.title +'&type='+ params.type;
  request
  .get(url)
    .on('response', function(response) {
      console.log(response.statusCode);// 200
    });
}
