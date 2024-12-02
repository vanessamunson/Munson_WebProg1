<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Subject>
 */
class SubjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->word(),
            'level_id' => $this->faker->numberBetween(1, 5),
            'dept_id' => $this->faker->numberBetween(1, 6),
            'credits' => $this->faker->numberBetween(1, 10),
            'description' => $this->faker->sentence(),
            'obligatory' => $this->faker->boolean(),
            'facultative' => $this->faker->boolean(),
            'lecturer_id' => $this->faker->numberBetween(1, 11)
        ];
    }
}
