<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class RegisterTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function testUserCanRegisterSuccessfully()
{
    $data = [
        'name' => 'Test User',
        'race' => 'Khajiit',
        'hall' => 'Attainment',
        'email' => 'invalid-email',
        'password' => 'password',
        'password_confirmation' => 'password',
        'dept_id' => 6,
        'emphasis_id' => 3
    ];

    // Make POST request to /register
    $response = $this->post('register', $data);

    // Assert the response status
    $response->assertStatus(201);

    // Assert the user exists in the database
    $this->assertDatabaseHas('users', [
        'email' => 'test@example.com',
    ]);
}
}
