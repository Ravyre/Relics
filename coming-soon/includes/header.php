<?php
/**
 * Template: displays all of the <head> section and everything up until <div class="content">
 */
?>

<?php
// config
require_once __DIR__ . ('/config.php');
?>

<!DOCTYPE html>
<html lang="en-gb" prefix="og: http://ogp.me/ns#">
  <head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-69351152-2"></script>
    <?php include __DIR__ . ('/schema.php'); ?>
    <!-- meta data -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#9e886f">
    <meta name="description" content="Relics is a tabletop skirmish game set in the broken and twisted world of Relicia.">
    <meta name="referrer" content="origin-when-crossorigin">
    <?php include __DIR__ . ('/social.php') ?>
    <title>Relics: The Sitch-punk Skirmish Game</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="manifest" href="manifest.json">
    <link rel="stylesheet" href="assets/css/style.min.css?v=1.1.0">
  </head>
  <body>
