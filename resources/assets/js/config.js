var api_url = '';
var gaode_maps_js_api_key = '';

switch (process.env.NODE_ENV) {
  case 'development':
    api_url = 'http://lbs.test/api/v1';
    break;
  case 'production':
    api_url = 'http://lbs.test/api/v1';
    break;
}

export const LBS_CONFIG = {
  API_URL: api_url,
  GAODE_MAPS_JS_API_KEY: gaode_maps_js_api_key
}