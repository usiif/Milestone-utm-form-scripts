<div id="zf_div_fZUO1Sf7RJDsdiaY3n04EGKgz0M5NhLCmInCl91-C8E"></div>
<script type="text/javascript">
(function() {
  try {
    function getUTMParams() {
      const params = new URLSearchParams(window.location.search);
      const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
      const utmParams = utmKeys
        .map(key => {
          const val = params.get(key);
          return val ? `${key}=${encodeURIComponent(val)}` : null;
        })
        .filter(Boolean)
        .join('&');
      return utmParams ? '&' + utmParams : '';
    }

    var f = document.createElement("iframe");
    f.src = 'https://forms.zohopublic.com/sejalnagjee/form/LandscapingLP/formperma/fZUO1Sf7RJDsdiaY3n04EGKgz0M5NhLCmInCl91-C8E?zf_rszfm=1' + getUTMParams();
    f.style.border = "none";
    f.style.height = "469px";
    f.style.width = "90%";
    f.style.transition = "all 0.5s ease";
    f.setAttribute("aria-label", 'Schedule Your Free Consultation');
    f.setAttribute("allow", "geolocation;");
    f.setAttribute("loading", "lazy");

    var d = document.getElementById("zf_div_fZUO1Sf7RJDsdiaY3n04EGKgz0M5NhLCmInCl91-C8E");
    d.appendChild(f);

    window.addEventListener('message', function(event) {
      var evntData = event.data;
      if (typeof evntData === 'string') {
        var zf_ifrm_data = evntData.split("|");
        if (zf_ifrm_data.length === 3 && zf_ifrm_data[2] === 'sent') {
          gtag('event', 'conversion', {
            'send_to': 'AW-841566858/6QcwCMKZvfIYEIqVpZED'
          });
        }
        if (zf_ifrm_data.length === 2 || zf_ifrm_data.length === 3) {
          var zf_perma = zf_ifrm_data[0];
          var zf_ifrm_ht_nw = (parseInt(zf_ifrm_data[1], 10) + 15) + "px";
          var iframe = d.getElementsByTagName("iframe")[0];
          if ((iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0) {
            var prevHeight = iframe.style.height;
            var zf_tout = zf_ifrm_data.length === 3;
            if (prevHeight !== zf_ifrm_ht_nw) {
              if (zf_tout) {
                setTimeout(() => { iframe.style.height = zf_ifrm_ht_nw; }, 500);
              } else {
                iframe.style.height = zf_ifrm_ht_nw;
              }
            }
          }
        }
      }
    }, false);
  } catch (e) {
    console.error("Zoho Form error:", e);
  }
})();
</script>
