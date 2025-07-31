# Google Apps Script Troubleshooting

## Issue: Web App URL Shows Sign-in Page

If your Web App URL shows a Google sign-in page instead of working, follow these steps:

## Step 1: Check Web App Deployment Settings

1. **Go to Google Apps Script**: https://script.google.com
2. **Open your project**: "Wedding Registration Form"
3. **Click "Deploy"** → **"Manage deployments"**
4. **Click the pencil icon** (edit) next to your deployment
5. **Check these settings**:
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
6. **Click "Update"**

## Step 2: Test the Web App URL

1. **Copy your Web App URL**: `https://script.google.com/macros/s/AKfycbzM3-M1fO-HPou8i1Y8ORhPwfF0TTS7zmIeRRuXfHMlezwTHJPR24QB9V-Pog1k4A/exec`
2. **Open in browser**
3. **You should see**: "Wedding Registration Form API is running"
4. **If you see sign-in page**: The deployment settings need to be fixed

## Step 3: Re-deploy if Needed

If the settings are wrong:

1. **Delete the current deployment**
2. **Click "Deploy"** → **"New deployment"**
3. **Choose "Web app"**
4. **Set**:
   - **Execute as**: Me
   - **Who has access**: Anyone
5. **Click "Deploy"**
6. **Copy the new URL**

## Step 4: Update React Component

If you get a new URL, update this line in `GoogleSheetsRegistration.tsx`:

```javascript
const scriptURL = 'YOUR_NEW_WEB_APP_URL';
```

## Step 5: Test the Integration

1. **Fill out the registration form**
2. **Submit the form**
3. **Check your Google Sheet** for new entries
4. **Check your email** for notifications

## Common Issues & Solutions

### "Script not found" error:
- Make sure you copied the entire code from `setup-google-sheets.js`
- Check that you saved the Apps Script project

### CORS errors:
- Make sure "Who has access" is set to "Anyone"
- Check that the URL is correct

### Data doesn't appear in sheet:
- Run `setupSpreadsheet()` function in Apps Script once
- Check Apps Script logs for errors

## Quick Test

Test your Web App URL by visiting it directly. You should see:
"Wedding Registration Form API is running"

If you see anything else, the deployment needs to be fixed. 