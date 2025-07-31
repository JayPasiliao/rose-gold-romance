# Google Sheets Integration Setup Guide

This guide will help you set up the Google Sheets integration for the wedding registration form.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Wedding Guest Registrations"
4. Create a sheet named "Guest Registrations"
5. Copy the spreadsheet ID from the URL (the long string between /d/ and /edit)

## Step 2: Set up Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Create a new project
3. Name it "Wedding Registration Form"
4. Replace the default code with the content from `google-apps-script.js`
5. Replace `YOUR_SPREADSHEET_ID_HERE` with your actual spreadsheet ID

## Step 3: Deploy the Web App

1. Click "Deploy" → "New deployment"
2. Choose "Web app" as the type
3. Set the following:
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click "Deploy"
5. Copy the Web App URL

## Step 4: Update the React Component

1. Open `src/components/GoogleSheetsRegistration.tsx`
2. Replace `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL` with your actual Web App URL
3. Save the file

## Step 5: Test the Integration

1. Run your React app
2. Fill out the registration form
3. Submit the form
4. Check your Google Sheet to see if the data appears

## Step 6: Set up Spreadsheet Headers (One-time)

1. In Google Apps Script, run the `setupSpreadsheet()` function once
2. This will create the proper headers in your sheet

## Troubleshooting

### Common Issues:

1. **CORS Error**: Make sure your Web App is deployed with "Anyone" access
2. **Spreadsheet Not Found**: Double-check your spreadsheet ID
3. **Permission Denied**: Ensure the Apps Script has permission to access your sheet

### Testing the Web App URL:

You can test your Web App URL by visiting it in a browser. You should see:
"Wedding Registration Form API is running"

## Security Considerations

- The Web App URL will be public, but only POST requests with proper form data will be processed
- Consider adding additional validation in the Apps Script if needed
- You can restrict access to specific domains if required

## Data Structure

The Google Sheet will contain the following columns:
1. Timestamp
2. First Name
3. Last Name
4. Email
5. Phone
6. Address
7. City
8. Province
9. Postal Code
10. Facebook
11. Company
12. Relationship
13. Number of Guests
14. Dietary Restrictions
15. Message

## Optional Enhancements

1. **Email Notifications**: Add email notifications when new registrations are received
2. **Data Validation**: Add validation rules in the Apps Script
3. **Duplicate Prevention**: Check for existing email addresses
4. **Export Functionality**: Add functions to export data in different formats

## Support

If you encounter any issues:
1. Check the Google Apps Script logs
2. Verify your spreadsheet permissions
3. Test the Web App URL directly
4. Check browser console for any errors 