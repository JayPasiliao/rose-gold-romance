# Your Google Sheets Integration Setup

Your Google Sheet is ready: https://docs.google.com/spreadsheets/d/1ClZ5TtSu3babJjR-yBmZb7YSTRdRFcgSCbY5aZZY0X4/edit

## Step 1: Set up Google Apps Script

1. **Go to Google Apps Script**: https://script.google.com
2. **Create New Project**: Click "New Project"
3. **Name it**: "Wedding Registration Form"
4. **Replace the code**: Delete everything and paste the entire content from `setup-google-sheets.js`
5. **Save**: Click the save icon (💾)

## Step 2: Deploy the Web App

1. **Click Deploy**: In the top menu, click "Deploy" → "New deployment"
2. **Choose Type**: Select "Web app"
3. **Configure Settings**:
   - **Execute as**: Me
   - **Who has access**: Anyone
4. **Click Deploy**
5. **Authorize**: Grant the necessary permissions when prompted
6. **Copy the Web App URL**: It will look like `https://script.google.com/macros/s/.../exec`

## Step 3: Update Your React Component

1. **Open**: `src/components/GoogleSheetsRegistration.tsx`
2. **Find this section** (around line 50):
   ```javascript
   // TODO: Uncomment and replace with actual Google Apps Script URL
   /*
   const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';
   ```
3. **Replace with your Web App URL**:
   ```javascript
   const scriptURL = 'YOUR_ACTUAL_WEB_APP_URL_HERE';
   ```
4. **Uncomment the Google Apps Script code** (remove the `/* */` around lines 50-80)
5. **Comment out the simulation code** (add `/* */` around the simulation section)

## Step 4: Test the Integration

1. **Run your app**: `npm run dev`
2. **Fill out the registration form**
3. **Submit the form**
4. **Check your Google Sheet** - data should appear automatically
5. **Check your email** - you should receive a notification

## Your Google Sheet Details

- **Spreadsheet ID**: `1ClZ5TtSu3babJjR-yBmZb7YSTRdRFcgSCbY5aZZY0X4`
- **Email Notifications**: Will be sent to `jaypasiliao@gmail.com`
- **Sheet Name**: "Guest Registrations" (will be created automatically)

## Optional Fields

The form is designed to handle optional fields gracefully:
- Facebook Account (optional)
- Company (optional)
- Postal Code (optional)
- Dietary Restrictions (optional)
- Special Message (optional)

## Troubleshooting

### If you get errors:
1. **Check Apps Script logs**: In Apps Script, go to "Executions" to see error details
2. **Test the Web App URL**: Visit it in a browser - should show "Wedding Registration Form API is running"
3. **Check browser console**: Press F12 to see any JavaScript errors

### If data doesn't appear in sheet:
1. **Run setupSpreadsheet()**: In Apps Script, run this function once to create the sheet
2. **Check permissions**: Make sure the Web App is deployed with "Anyone" access

## Quick Test

After setup, you can test by:
1. Filling out the form with test data
2. Submitting the form
3. Checking your Google Sheet for the new entry
4. Checking your email for the notification

Your integration is ready to go! 🎉 