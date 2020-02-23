
module.exports.getDate = getdate;

function getdate(){
var today = new Date();

var options = {
  weekday: 'long',
  day: 'numeric',
  month: 'long'
}
var day = today.toLocaleDateString("en-US",options);

return day;
}

module.exports.getDay = getday;
function getday(){
var today = new Date();

var options = {
  weekday: 'long',
}
var day = today.toLocaleDateString("en-US",options);

return day;
}
