// Google Apps Script Code for Wedding Registration Form
// Deploy this as a web app to handle form submissions

function doPost(e) {
  try {
    // Get the form data
    const formData = e.parameter;
    
    // Get the active spreadsheet (replace with your actual spreadsheet ID)
    const spreadsheetId = 'YOUR_SPREADSHEET_ID_HERE';
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getSheetByName('Guest Registrations');
    
    // Prepare the data row
    const timestamp = new Date();
    const dataRow = [
      timestamp, // Timestamp
      formData.firstName || '',
      formData.lastName || '',
      formData.email || '',
      formData.phone || '',
      formData.address || '',
      formData.city || '',
      formData.province || '',
      formData.postalCode || '',
      formData.facebook || '',
      formData.company || '',
      formData.relationship || '',
      formData.numberOfGuests || '1',
      formData.dietaryRestrictions || '',
      formData.message || ''
    ];
    
    // Append the data to the sheet
    sheet.appendRow(dataRow);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', message: 'Registration submitted successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Handle GET requests (optional - for testing)
  return ContentService
    .createTextOutput('Wedding Registration Form API is running')
    .setMimeType(ContentService.MimeType.TEXT);
}

// Function to set up the spreadsheet headers (run this once)
function setupSpreadsheet() {
  const spreadsheetId = 'YOUR_SPREADSHEET_ID_HERE';
  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  const sheet = spreadsheet.getSheetByName('Guest Registrations');
  
  // Set up headers
  const headers = [
    'Timestamp',
    'First Name',
    'Last Name',
    'Email',
    'Phone',
    'Address',
    'City',
    'Province',
    'Postal Code',
    'Facebook',
    'Company',
    'Relationship',
    'Number of Guests',
    'Dietary Restrictions',
    'Message'
  ];
  
  // Clear existing content and set headers
  sheet.clear();
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format headers
  sheet.getRange(1, 1, 1, headers.length)
    .setFontWeight('bold')
    .setBackground('#f3f4f6')
    .setBorder(true, true, true, true, true, true);
  
  // Auto-resize columns
  sheet.autoResizeColumns(1, headers.length);
  
  Logger.log('Spreadsheet setup completed!');
} 