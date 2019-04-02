/**
 * Imports the Roast API URL from the config.
 */
import { LBS_CONFIG } from '../config.js';

export default {
    /*
     GET   /api/v1/brew-methods
     */
    getBrewMethods: function () {
        return axios.get(LBS_CONFIG.API_URL + '/brew-methods');
    }
}