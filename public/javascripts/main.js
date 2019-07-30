// import css for bundler
import '../css/style.css';

const { $, $$ } = require('./lib/bling');

// ! delete me ! //
$('.change-me').on('click', () => ($('.change-me').style.color = 'lime'));

console.log('works');
