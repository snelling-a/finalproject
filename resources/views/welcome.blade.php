<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/site.webmanifest">

    <title>HikeCzech</title>
</head>

<body>
    <div id="app"></div>
    <script>const app_config = {!! json_encode(["REACT_APP_GOOGLE_API_KEY" => env("REACT_APP_GOOGLE_API_KEY")]) !!}</script>
    <script src="{{ mix('js/app.js') }}" defer></script>
    
</body>

</html>

