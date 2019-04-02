require('es6-promise').polyfill();

import Vue from 'vue';
import Vuex from 'vuex';
import { cafes } from './modules/cafes.js';
import { brewMethods } from './modules/brewMethods';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        cafes,
        brewMethods
    }
})