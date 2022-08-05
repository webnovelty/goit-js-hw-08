import Player from '@vimeo/player';
var throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');

const player = new Player(iframe);
const dataSave = function (data) {
	localStorage.setItem("videoplayer-current-time", data.seconds);
}
player.on('timeupdate', throttle(dataSave, 1000));

player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function () {
}).catch(function (error) {
	switch (error.name) {
		case 'RangeError':
			break;
		default:
			break;
	}
});


