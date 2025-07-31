# Quick Google Sheets Setup Guide

Follow these exact steps to set up the Google Sheets integration:

## Step 1: Create Google Sheet

1. **Open Google Sheets**: Go to https://sheets.google.com
2. **Create New Sheet**: Click "+" to create a new spreadsheet
3. **Name the Sheet**: Rename it to "Wedding Guest Registrations"
4. **Get Spreadsheet ID**: Copy the ID from the URL
   - URL looks like: `https://docs.google.com/spreadsheets/d/1ABC123...XYZ/edit`
   - Copy the part between `/d/` and `/edit`: `1ABC123...XYZ`

## Step 2: Set up Google Apps Script

1. **Open Apps Script**: Go to https://script.google.com
2. **Create New Project**: Click "New Project"
3. **Name Project**: "Wedding Registration Form"
4. **Replace Code**: Delete default code and paste the entire content from `setup-google-sheets.js`
5. **Update Spreadsheet ID**: Replace `YOUR_SPREADSHEET_ID_HERE` with your actual spreadsheet ID
6. **Update Email**: Replace `your-email@gmail.com` with your email address

## Step 3: Deploy the Web App

1. **Click Deploy**: In Apps Script, click "Deploy" → "New deployment"
2. **Choose Type**: Select "Web app"
3. **Configure Settings**:
   - **Execute as**: Me
   - **Who has access**: Anyone
4. **Deploy**: Click "Deploy"
5. **Authorize**: Grant necessary permissions
6. **Copy URL**: Copy the Web App URL

## Step 4: Update React Component

1. **Open File**: `src/components/GoogleSheetsRegistration.tsx`
2. **Find Line**: Look for the commented section with `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL`
3. **Replace URL**: Replace with your actual Web App URL
4. **Uncomment Code**: Remove the `/* */` comments around the Google Apps Script code
5. **Comment Simulation**: Add `/* */` around the simulation code

## Step 5: Test the Integration

1. **Run App**: `npm run dev`
2. **Fill Form**: Complete the registration form
3. **Submit**: Click "Register Attendance"
4. **Check Sheet**: Verify data appears in your Google Sheet
5. **Check Email**: Verify you receive email notifications

## Troubleshooting

### If you get CORS errors:
- Make sure Web App is deployed with "Anyone" access
- Check that the URL is correct

### If data doesn't appear in sheet:
- Run `setupSpreadsheet()` function in Apps Script
- Check Apps Script logs for errors

### If form shows error:
- Check browser console (F12) for error details
- Verify Web App URL is correct

## Quick Test Commands

In Google Apps Script, you can run these functions to test:

1. **Test Connection**: Run `testConnection()`
2. **Setup Sheet**: Run `setupSpreadsheet()`
3. **Test Web App**: Visit your Web App URL in browser

## Final Code Update

After getting your Web App URL, update this section in `GoogleSheetsRegistration.tsx`:

```javascript
// Replace this line:
const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';

// With your actual URL:
const scriptURL = 'https://script.google.com/macros/s/YOUR_ACTUAL_ID/exec';
```

That's it! Your form will now automatically save registrations to Google Sheets. 