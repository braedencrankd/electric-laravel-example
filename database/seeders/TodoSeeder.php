<?php

namespace Database\Seeders;

use App\Models\Todo;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class TodoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Todo::create([
            'text' => 'Sample todo 1',
            'completed' => false,
        ]);

        Todo::create([
            'text' => 'Sample todo 2',
            'completed' => true,
        ]);
    }
}