<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function(){
    Route::get('/user', function( Request $request ){
        return $request->user();
    });

    /*
     |-------------------------------------------------------------------------------
     | Get All Cafes
     |-------------------------------------------------------------------------------
     | URL:            /api/v1/cafes
     | Controller:     API\CafesController@getCafes
     | Method:         GET
     | Description:    Gets all of the cafes in the application
    */
    Route::get('/cafes','API\CafesController@getCafes');

     /*
     |-------------------------------------------------------------------------------
     | Adds a New Cafe
     |-------------------------------------------------------------------------------
     | URL:            /api/v1/cafes
     | Controller:     API\CafesController@postNewCafe
     | Method:         POST
     | Description:    Adds a new cafe to the application
    */
    Route::post('/cafes','API\CafesController@postNewCafe');

     /*
     |-------------------------------------------------------------------------------
     | Get An Individual Cafe
     |-------------------------------------------------------------------------------
     | URL:            /api/v1/cafes/{id}
     | Controller:     API\CafesController@getCafe
     | Method:         GET
     | Description:    Gets an individual cafe
    */
    Route::get('/cafes/{id}','API\CafesController@getCafe');

    /*
    |-------------------------------------------------------------------------------
    | 获取所有冲泡方法
    |-------------------------------------------------------------------------------
    | 请求URL: /api/v1/brew-methods
    | 控制器:  API\BrewMethodsController@getBrewMethods
    | 请求方法: GET
    | API描述: 获取应用中的所有冲泡方法
    */
    Route::get('/brew-methods', 'API\BrewMethodsController@getBrewMethods');

    // 喜欢咖啡店
    Route::post('/cafes/{id}/like', 'API\CafesController@postLikeCafe');
    // 取消喜欢咖啡店
    Route::delete('/cafes/{id}/like', 'API\CafesController@deleteLikeCafe');
});