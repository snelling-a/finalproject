<?php

namespace App\Http\Controllers;

use App\Models\Entity;
use Illuminate\Http\Request;

class EntityController extends Controller
{

    public function fetch(Request $request)
    {
        $entities = Entity::get();
        // dd($names);
        return $entities;
    }

    public function details(Request $request, $id)
    {
       
        $details = Entity::with('comments.user')->findOrFail($id);
       
        return $details;
    }

    public function store(Request $request)
    {

        //Validate input
        $this->validate($request, [
            'name' => 'required|min:0|max:100',
            'region' => 'required|min:0|max:100',
            'photo' => 'required|min:0',
            'description' => 'required|min:0|max:250',
            'coords' => 'required',
        ]);

        // create entity in DB
        $entity = new Entity;
        $entity->name = $request->name;
        $entity->region =  $request->region;
        $entity->photo =  $request->photo;
        $entity->description = $request->description;
        $entity->coordinates = json_encode($request->coords);


        $entity->save();

        return [
            'status' => 'success',
            'message' => 'Review was successfully saved'
        ];
    }

    public function destroy($id)
    {

        Entity::findOrFail($id)->delete();
    }

	public function favoritePost(Entity $entity)
	{
		Auth::user()->favorites()->attach($entity->id);

		return back();
	}

		public function unFavoritePost(Entity $entity)
	{
		Auth::user()->favorites()->detach($entity->id);

		return back();
	}

	public function search($query) { 
			// $query = $request->input('search');
			return Entity::query()->where('name', 'LIKE', "%{$query}%")->get();
    }
}
