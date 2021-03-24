<?php

namespace Database\Factories;

use App\Models\Comment;
use App\Models\Entity;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class CommentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Comment::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $user_count = User::all()->count();
        $entity_count = Entity::all()->count();

        return [
            //
            'user_id' => User::factory(),
            'entity_id' => $this->faker->numberBetween(1, $entity_count),
            'comment' => $this->faker->sentence(),
            'created_at' => $this->faker->dateTimeThisDecade('+0 year')/* ->format('Y-m-d H:i:s') */
        ];
    }
}
