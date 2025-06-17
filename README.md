Zoho Form Embed + Tracking Script

This script is added to each landing page to:

    Embed the correct Zoho form.

    Track UTM parameters (like campaign, source, medium) from the page URL.

    Fire a Google Ads conversion when the form is successfully submitted.

How it Works
1. Embeds the Zoho form

The script injects an iframe containing a specific form from your Zoho Forms account.
2. Captures UTM parameters

If a visitor arrives from an ad with tracking parameters in the URL (e.g. ?utm_source=google&utm_campaign=launch), the script captures those values and appends them to the form link so Zoho can store them with the submission.
3. Sends a conversion event to Google Ads

Once the form is submitted, the script listens for a signal from Zoho and fires the following Google Ads event:
