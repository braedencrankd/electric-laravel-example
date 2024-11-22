<?php

it('returns a successful response', function () {
    $response = $this->get('/todos');

    $response->assertStatus(200);
});