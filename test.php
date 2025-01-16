<?php
declare(strict_types=1);

require 'vendor/autoload.php';

$token = "833f50904ce0c04b16be7b367ebc56c3179f74f6";
$secret = "5d56c667e6562e44f3c9a98a446b1c2bbb95f1f6";

$test = new Dadata\DadataClient($token, $secret);

$response = $test->clean("name", "шагов аликсандр валерьевич");
var_dump($response);