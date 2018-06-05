<?php
/**
 * ServiceWorker
 */
?>

<script>
  if('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.min.js')
             .then(function(reg) {
               console.log('Service Worker Registered', reg);
             }) .catch(function(err) {
               console.log('Service Worker failed to register', err);
             })
  }
</script>
