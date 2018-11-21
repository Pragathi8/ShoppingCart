import 'popper.js';
import 'bootstrap';
const jQuery = require('jquery');

require('../../node_modules/bootstrap/scss/bootstrap.scss');
require('../scss/style.scss');

import {noOfItems} from './service';
import {createCart} from './service';
import {calculateTotal} from './service';

jQuery(document).ready(() => {
    createCart();
    noOfItems();
    calculateTotal();
});
