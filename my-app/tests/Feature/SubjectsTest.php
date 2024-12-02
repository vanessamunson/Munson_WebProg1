<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class SubjectsTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    use RefreshDatabase;

    public function testAuthenticatedUserCanViewSubjects()
    {
        // Create a user
        $user = User::factory()->create();

        // Seed the database with subjects if required (use factories or seeders)
        $subjects = \App\Models\Subject::factory()->count(5)->create();

        // Act as the authenticated user
        $response = $this->actingAs($user)->get('/subjects');

        // Assert the status and data
        $response->assertStatus(200);
        $response->assertJsonCount(5); // Assuming the response contains all subjects
    }

    public function testUnauthenticatedUserCannotViewSubjects()
    {
        $response = $this->get('/subjects');
        $response->assertRedirect('/login'); // Or the route you redirect unauthenticated users to
    }

    public function testAuthenticatedUserCanViewSpecificSubject()
{
    $user = User::factory()->create();
    $subject = \App\Models\Subject::factory()->create();

    $response = $this->actingAs($user)->get("/subjects/{$subject->id}");

    $response->assertStatus(200);
    $response->assertJson([
        'id' => $subject->id,
        'name' => $subject->name, // Adjust keys to match your data structure
    ]);
}

public function testCannotViewNonExistentSubject()
{
    $user = User::factory()->create();

    $response = $this->actingAs($user)->get('/subjects/999'); // Non-existent ID
    $response->assertStatus(404);
}
}
