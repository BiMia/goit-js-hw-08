
import Player from '@vimeo/player';
const _ = require('lodash');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
// Salvare timp curent
player.on(
  'timeupdate',
  _.throttle(function ({ seconds }) {
    console.log('Salvez timpul curent:', seconds);
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000)
);
// Restaurare timp salvat
const savedTime = localStorage.getItem('videoplayer-current-time') || 0;
console.log('Restaurare timp salvat:', savedTime);
player.setCurrentTime(savedTime).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video's duration
            break;
        default:
            // some other error occurred
            break;
    }
});
