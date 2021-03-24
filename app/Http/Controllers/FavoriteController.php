<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Favorite;
use App\Models\Entity;


class FavoriteController extends Controller
{

	public function update(Request $request)
    {
       

        // create new favorite in DB

        $favorite = new Favorite();
        $favorite->favorite = $request->input('favorite');
        $favorite->user_id = $request->input('user_id');
        $favorite->entity_id = $request->input('entity_id');


        $favorite->save();
    }


	public function fetch(Request $request, $id)
    {
		$favorite = Entity::with('favorites.user')->findOrFail($id);

        return $favorite;
    }

	public function addFavorite(){
		$user = Auth::user();
		$user->favorite = 1;
		return redirect('/');
	} 

	
	
}
