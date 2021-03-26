<?php

namespace App\Http\Controllers;

use App\Models\Entity;
use Illuminate\Http\Request;
use Auth;

class EntityController extends Controller
{

    public function fetch(Request $request)
    {
        $entities = Entity::get();

        return $entities;
    }

    public function details(Request $request, $id)
    {

        $details = Entity::with(['favorites' => function ($query) {
            $query->where('user_id', Auth::id());
        }])->with('comments.user')->with('favorites.user')->findOrFail($id);

        return $details;
    }

    public function store(Request $request)
    {

        //Validate input
        $this->validate($request, [
            'name' => 'required|min:0|max:100',
            'region' => 'required',
            'photo' => 'required|min:0',
            'description' => 'required|min:0|max:250',
            'coords' => 'required',
            'category' => 'required',
            'rating' => 'required|numeric',
        ]);

        // create entity in DB
        $entity = new Entity;
        $entity->name = $request->name;
        $entity->region =  $request->region;
        $entity->photo =  $request->photo;
        $entity->description = $request->description;
        $entity->category = $request->category;
        $entity->rating = $request->rating;
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


    public function search($query)
    {

        return Entity::query()->where('name', 'LIKE', "%{$query}%")->orWhere('region', 'LIKE', "%{$query}%")->orWhere('category', 'LIKE', "%{$query}%")->get();
    }
}




