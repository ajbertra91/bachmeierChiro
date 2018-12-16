import {bind} from 'hyperhtml';
import './bc-app/bc-app';

(function() {

  return bind(document.body)`
    <bc-app></bc-app>
  `;

})()