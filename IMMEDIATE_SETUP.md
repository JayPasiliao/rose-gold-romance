# IMMEDIATE SETUP - Get Google Sheets Working Now!

## Step 1: Create Google Apps Script (5 minutes)

1. **Open Google Apps Script**: https://script.google.com
2. **Click "New Project"**
3. **Name it**: "Wedding Registration Form"
4. **Delete the default code** and paste the entire content from `setup-google-sheets.js`
5. **Click Save** (💾 icon)

## Step 2: Deploy Web App (3 minutes)

1. **Click "Deploy"** in the top menu
2. **Click "New deployment"**
3. **Choose "Web app"**
4. **Configure**:
   - **Execute as**: Me
   - **Who has access**: Anyone
5. **Click "Deploy"**
6. **Authorize** when prompted (click "Continue" and "Allow")
7. **Copy the Web App URL** (looks like: `https://script.google.com/macros/s/.../exec`)

## Step 3: Update React Component (2 minutes)

1. **Open**: `src/components/GoogleSheetsRegistration.tsx`
2. **Find line 50**: Look for `const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';`
3. **Replace** with your actual Web App URL:
   ```javascript
   const scriptURL = 'https://script.google.com/macros/s/YOUR_ACTUAL_ID/exec';
   ```
4. **Save the file**

## Step 4: Test (2 minutes)

1. **Fill out the registration form**
2. **Submit**
3. **Check your Google Sheet** - data should appear!

## Troubleshooting

### If you get "Script not found":
- Make sure you copied the entire code from `setup-google-sheets.js`
- Check that you saved the Apps Script project

### If you get CORS errors:
- Make sure Web App is deployed with "Anyone" access
- Check that the URL is correct

### If data doesn't appear in sheet:
- Run `setupSpreadsheet()` function in Apps Script once
- Check Apps Script logs for errors

## Your Google Sheet Details

- **Spreadsheet ID**: `1ClZ5TtSu3babJjR-yBmZb7YSTRdRFcgSCbY5aZZY0X4`
- **Sheet Name**: Sheet1
- **Columns**: Name, Address, Contact Number, Email Address, Facebook Profile, Confirmation

## Quick Test

After setup, test by:
1. Filling form with: "John Doe", "john@email.com", "123-456-7890"
2. Submitting form
3. Checking your Google Sheet for the new entry

That's it! Your form will now save directly to Google Sheets! 🎉 