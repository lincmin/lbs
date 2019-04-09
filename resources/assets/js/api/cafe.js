import { LBS_CONFIG } from '../config.js';

export default {
    /**
    * GET /api/v1/cafes
    */
    getCafes: function () {
        return axios.get(LBS_CONFIG.API_URL + '/cafes');
    },
    /**
     * GET /api/v1/cafes/{cafeID}
     */
    getCafe: function (cafeID) {
        return axios.get(LBS_CONFIG.API_URL + '/cafes/' + cafeID);
    },
    /**
    * POST /api/v1/cafes
    */
    postAddNewCafe: function (name, locations, website, description, roaster) {
        return axios.post(LBS_CONFIG.API_URL + '/cafes', {
            name: name,
            locations: locations,
            website: website,
            description: description,
            roaster: roaster
        })
    },
    /**
    * POST  /api/v1/cafes/{cafeID}/like
    */
    postLikeCafe: function (cafeID) {
        return axios.post(LBS_CONFIG.API_URL + '/cafes/' + cafeID + '/like');
    },

    /**
    * DELETE /api/v1/cafes/{cafeID}/like
    */
    deleteLikeCafe: function (cafeID) {
        return axios.delete(LBS_CONFIG.API_URL + '/cafes/' + cafeID + '/like');
    }
}