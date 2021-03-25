<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::get('/user', "UserController@user");

Route::post('entity/store', "EntityController@store")->middleware('auth');
Route::get('entity/fetch', "EntityController@fetch");
Route::get('entity/search/{query}', "EntityController@search");
Route::get('details/{id}', "EntityController@details");
Route::post('/entity/{id}/destroy',  "EntityController@destroy")->middleware('can:admin');

Route::post('/comment/store', "CommentController@store");
Route::post('/comment/{id}/destroy',  "CommentController@destroy")->middleware('can:admin');

Route::get('/favorite/fetch', 'UserController@myFavorites')->middleware('auth');
Route::post('/favorite/update/{entity_id}', 'FavoriteController@update')->middleware('auth');


