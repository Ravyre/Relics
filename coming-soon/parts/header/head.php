<?php
/**
 * Template: displays all of the <head> section and everything up until <div class="content">
 */
?>

<?php $dir = __DIR__ ?>

<!DOCTYPE html>
<html lang="en-gb" prefix="og: http://ogp.me/ns#">
  <head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-69351152-2"></script>
    <?php include $dir . ('/schema.php'); ?>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#0065ad">
    <meta name="description" content="Relics is a tabletop skirmish game set in the world of Relicia. Relicia is a broken world, fought over by unique factions you’ll not see in any other game.">
    <meta name="referrer" content="origin-when-crossorigin">
    <?php include $dir . ('/social.php') ?>
    <title>Relics: The Sitch-punk Skirmish Game</title>
    <link rel="shortcut icon" href="<?php $dir ?>favicon.ico" type="image/x-icon">
    <link rel="manifest" href="<?php $dir ?>manifest.json">
    <link rel="stylesheet" href="<?php $dir ?>assets/css/style.min.css?v=1.1.0">
  </head>
  <body>
