<?php
$utm = htmlspecialchars($_SERVER['QUERY_STRING'], ENT_QUOTES, 'UTF-8');
$form_id = "a9SgG0kxAZ4KICTpGtIxxAXvH4wVrzK_YTpu_T9BOcI";

$iframe_url = "https://forms.zohopublic.com/sejalnagjee/form/VillaRenovationLP1/formperma/$form_id?zf_rszfm=1";

if (!empty($utm)) {
    $iframe_url .= '&' . $utm;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Zoho UTM PHP Test</title>
  <style>
    body { font-family: sans-serif; padding: 2rem; }
    iframe { border: none; width: 100%; height: 600px; }
  </style>
</head>
<body>

  <h1>Testing Zoho UTM Injection (PHP)</h1>

  <p>UTM Params Passed: <code><?= $utm ?: 'None' ?></code></p>

  <iframe
    src="<?= $iframe_url ?>"
    allow="geolocation;"
    loading="lazy"
    aria-label="Book an Appointment"
  ></iframe>

</body>
</html>
