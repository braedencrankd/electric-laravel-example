<?php

namespace Database\Seeders;

use App\Models\Foo;
use Illuminate\Database\Seeder;

class FooSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

        foreach ($names as $name) {
            Foo::create([
                'name' => $name,
                'value' => fake()->randomFloat(2, 0, 5),
            ]);
        }
    }
}
