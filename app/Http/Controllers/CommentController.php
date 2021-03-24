<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(Request $request)
    {
        $this->validate($request, [
            'comment' => 'required|string|min:0|max:250'
        ]);
        $user_id = $request->input('user_id');
        $entity_id = $request->input('entity_id');


        // create new comment in DB

        $comment = new Comment();
        $comment->comment = $request->input('comment');
        $comment->user_id = $request->input('user_id');
        $comment->entity_id = $request->input('entity_id');


        $comment->save();
    }


    public function destroy($id)
    {

        Comment::findOrFail($id)->delete();
    }
}
