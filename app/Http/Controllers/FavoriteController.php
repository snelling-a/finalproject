<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Favorite;
use App\Models\Entity;
use Auth;

class FavoriteController extends Controller
{

	public function update(Request $request, $entity_id)
    {
		Entity::findOrFail($entity_id);
		$favorite = Favorite::where('user_id', Auth::id())->where('entity_id', $entity_id)->first();
		
		// if favorite exists, delete 
		if ($favorite) {
			$favorite->delete();
			return ['status'=>'deleted'];
		} else {
			
		
        // create new favorite in DB
        $favorite = new Favorite();
        $favorite->favorite = 1;
        $favorite->user_id = Auth::id();
        $favorite->entity_id = $entity_id;


        $favorite->save();
		return ['status'=>'created'];
		}
    }
}
