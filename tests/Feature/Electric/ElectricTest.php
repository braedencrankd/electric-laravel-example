<?php

use App\Models\Todo;
use Illuminate\Support\Facades\Http;

beforeEach(function () {
  $this->artisan('migrate');
});

it('can connect to the electric shape server', function () {
  $response = Http::get(env('APP_URL') . ':3000/v1/health');
  expect($response->successful())->toBeTrue();
});

it('can see see data from the electric shape server', function () {
  $response = Http::get(env('APP_URL') . ':3000/v1/shape?table=todos&offset=-1');
  expect(count($response->json()))->toBeGreaterThan(0);
});