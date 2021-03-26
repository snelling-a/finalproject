<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        User::create([
            'username' => 'martin',
            'role' => 'admin',
            'email' => 'martin@martin.com',
            'password' => Hash::make('martin'),
        ]);

        User::create([
            'username' => 'michael',
            'role' => 'admin',
            'email' => 'michael@michael.com',
            'password' => Hash::make('michael'),
        ]);

        User::create([
            'username' => 'samuel',
            'role' => 'admin',
            'email' => 'samuel@samuel.com',
            'password' => Hash::make('samuel'),
        ]);

        User::create([
            'username' => 'andrew',
            'role' => 'admin',
            'email' => 'andrew@andrew.com',
            'password' => Hash::make('andrew'),
        ]);
    }
}
