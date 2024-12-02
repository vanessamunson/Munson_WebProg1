<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class LoginTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function testUserCanLoginWithValidCredentials()
    {
        // Create a user
        $user = User::factory()->create([
            'email' => 'test@example.com',
            'password' => bcrypt('password'), // Password must be hashed
        ]);

        // Attempt to log in
        $response = $this->post('login', [
            'email' => 'test@example.com',
            'password' => 'password',
        ]);

        // Assert the user is authenticated
        $this->assertAuthenticatedAs($user);

        // Assert ok
        $response->assertStatus(200);
    }
}
