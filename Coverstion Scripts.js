<script>
  document.addEventListener("DOMContentLoaded", function () {
    // WhatsApp Click
    const whatsapp = document.getElementById("whatsappBtn"); //PLEASE UPDATE THE ID TO MATCH 
    if (whatsapp) {
      whatsapp.addEventListener("click", function (e) {
        e.preventDefault();
        const url = whatsapp.href;
        gtag('event', 'conversion', {
          'send_to': 'AW-841566858/8-YYCKji7_gYEIqVpZED',
          'event_callback': function () {
            window.location = url;
          }
        });
      });
    }

    // Phone Click
    const phone = document.getElementById("callBtn"); // PLEASE UPDATE THE ID TO MATCH
    if (phone) {
      phone.addEventListener("click", function (e) {
        e.preventDefault();
        const url = phone.href;
        gtag('event', 'conversion', {
          'send_to': 'AW-841566858/ZHR5CMWZvfIYEIqVpZED',
          'event_callback': function () {
            window.location = url;
          }
        });
      });
    }

    // Zoho Form Submission
    window.addEventListener('message', function (event) {
      const evntData = event.data;
      if (typeof evntData === 'string') {
        const zf_data = evntData.split("|");
        if (zf_data.length === 3 && zf_data[2] === 'sent') {
          gtag('event', 'conversion', {
            'send_to': 'AW-841566858/6QcwCMKZvfIYEIqVpZED'
          });
        }
      }
    }, false);
  });
</script>
