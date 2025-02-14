<?php

$availableLanguages = ['es', 'ca', 'en'];
$defaultLanguage = 'es';

if (!empty($_COOKIE['lang']) && in_array($_COOKIE['lang'], $availableLanguages)) {
    header("Location: /" . $_COOKIE['lang'], true, 302);
    exit;
}

$userLanguages = explode(',', $_SERVER['HTTP_ACCEPT_LANGUAGE']);

$languageList = [];
foreach ($userLanguages as $language) {
    $parts = explode(';q=', $language);
    $languageCode = substr($parts[0], 0, 2);

    if (in_array($languageCode, $availableLanguages)) {
        $quality = isset($parts[1]) ? (float)$parts[1] : 1;
        $languageList[] = ['language' => $languageCode, 'q' => $quality];
    }
}

usort($languageList, function ($a, $b) {
    return $b['q'] <=> $a['q'];
});

$userLanguage = !empty($languageList[0]) ? $languageList[0]['language'] : $defaultLanguage;

header("Location: /" . $userLanguage, true, 302);
exit;
