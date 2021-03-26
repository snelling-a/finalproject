<?php

namespace Database\Seeders;

use Database\Factories\CommentFactory;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(AdminSeeder::class);
        $this->call(EntitiesSeeder::class);
        $this->call(CommentsSeeder::class);
    }
}
