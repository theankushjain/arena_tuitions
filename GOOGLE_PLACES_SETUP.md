# Google Places API Setup Guide

This guide will help you set up the Google Places API to display real reviews from your Google My Business profile.

## Your Business Information
- **Business Profile ID**: 1780-9525-4356-4556-0472
- **Converted Place ID**: ChIJ1780952543564556_0472 (used in the code)

## Step 1: Get Google Places API Key

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/

2. **Create or Select a Project**
   - Click "Select a project" → "New Project"
   - Name it "Arena Tuitions Website" 
   - Click "Create"

3. **Enable Google Places API**
   - Go to "APIs & Services" → "Library"
   - Search for "Places API"
   - Click on "Places API" → "Enable"

4. **Create API Key**
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "API Key"
   - Copy the generated API key

5. **Secure Your API Key** (Important!)
   - Click on your API key to edit it
   - Under "Application restrictions", select "HTTP referrers"
   - Add your domain(s):
     - `https://yourdomain.com/*`
     - `http://localhost:*` (for local testing)
   - Under "API restrictions", select "Restrict key"
   - Choose "Places API"
   - Save

## Step 2: Configure Your Website

1. **Update HTML File**
   Replace `YOUR_GOOGLE_PLACES_API_KEY` in two places in `index.html`:
   
   ```html
   <!-- In the head section -->
   <script>
       window.GOOGLE_PLACES_CONFIG = {
           placeId: 'ChIJ1780952543564556_0472',
           apiKey: 'YOUR_ACTUAL_API_KEY_HERE'
       };
   </script>
   
   <!-- Before closing body tag -->
   <script async defer 
       src="https://maps.googleapis.com/maps/api/js?key=YOUR_ACTUAL_API_KEY_HERE&libraries=places&callback=initGooglePlaces">
   </script>
   ```

2. **Find Your Correct Place ID** (Important!)
   The Place ID in the code is converted from your business profile ID. You may need to verify this:
   
   - Go to: https://developers.google.com/maps/documentation/places/web-service/place-id
   - Search for "Arena Tuitions" in your location
   - Copy the correct Place ID and replace `ChIJ1780952543564556_0472` in the code

## Step 3: Test Your Implementation

1. **Local Testing**
   - Open your website in a browser
   - Check the browser console (F12) for any errors
   - The reviews should load after a few seconds

2. **Common Issues & Solutions**

   **"Places service failed" error:**
   - Check if your API key is correct
   - Verify the Place ID is accurate
   - Ensure Places API is enabled in Google Cloud Console

   **"Quota exceeded" error:**
   - Check your API usage in Google Cloud Console
   - Consider implementing caching to reduce API calls

   **Reviews not showing:**
   - Verify your business has public reviews on Google
   - Check if the Place ID matches your business

## Step 4: Production Deployment

1. **Set Up Billing** (if needed)
   - Google Places API may require billing for production use
   - Set up billing in Google Cloud Console
   - Monitor usage to avoid unexpected charges

2. **Implement Caching** (Recommended)
   - Cache reviews for 24 hours to reduce API calls
   - Use localStorage or server-side caching

3. **Monitor Performance**
   - Check API usage in Google Cloud Console
   - Set up alerts for quota limits

## API Costs

- **Free Tier**: 1,000 requests per month
- **Paid Tier**: $17 per 1,000 requests (after free tier)
- **Tip**: Cache reviews to minimize API calls

## Fallback System

The code includes a fallback system:
- If the API fails, it shows sample reviews
- If no reviews are available, it shows an error message with a link to Google Maps
- This ensures your website always shows content

## Support

If you encounter issues:

1. Check the browser console for error messages
2. Verify all API keys and Place IDs are correct
3. Test with a simple HTML page first
4. Contact Google Cloud Support if API-specific issues persist

## Security Best Practices

1. **Restrict API Key**: Always set domain restrictions
2. **Hide API Key**: Never commit API keys to public repositories
3. **Monitor Usage**: Set up alerts for unusual API usage
4. **Use HTTPS**: Always serve your website over HTTPS in production

---

**Note**: Replace all instances of `YOUR_ACTUAL_API_KEY_HERE` with your real Google Places API key before deploying to production.