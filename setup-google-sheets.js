// Google Apps Script for Wedding Registration Form
// Copy this entire code to Google Apps Script

function doPost(e) {
  try {
    // Enable CORS
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type'
    };
    
    // Get the form data
    const formData = e.parameter;
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'province', 'relationship'];
    const missingFields = requiredFields.filter(field => !formData[field] || formData[field].trim() === '');
    
    if (missingFields.length > 0) {
      return ContentService
        .createTextOutput(JSON.stringify({ 
          status: 'error', 
          message: 'Missing required fields: ' + missingFields.join(', ') 
        }))
        .setMimeType(ContentService.MimeType.JSON)
        .setHeaders(headers);
    }
    
    // Get the active spreadsheet
    const spreadsheetId = '1ClZ5TtSu3babJjR-yBmZb7YSTRdRFcgSCbY5aZZY0X4'; // Your actual spreadsheet ID
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getSheetByName('Sheet1'); // Use the default sheet name
    
    if (!sheet) {
      return ContentService
        .createTextOutput(JSON.stringify({ 
          status: 'error', 
          message: 'Sheet "Sheet1" not found.' 
        }))
        .setMimeType(ContentService.MimeType.JSON)
        .setHeaders(headers);
    }
    
    // Prepare the data row to match your Google Sheet structure with timestamp
    const timestamp = new Date();
    const dataRow = [
      timestamp, // Timestamp (Column A)
      (formData.firstName + ' ' + formData.lastName).trim(), // Name (Column B)
      (formData.address + ', ' + formData.city + ', ' + formData.province + (formData.postalCode ? ', ' + formData.postalCode : '')).trim(), // Address (Column C)
      formData.phone || '', // Contact Number (Column D)
      formData.email || '', // Email Address (Column E)
      formData.facebook || '', // Facebook Profile (Column F)
      'Yes' // Confirmation (Column G) - Default to "Yes" since they're registering
    ];
    
    // Append the data to the sheet
    sheet.appendRow(dataRow);
    
    // Send email notification (optional)
    sendEmailNotification(formData);
    
    // Return success response
    return ContentService
      .createTextOutput('success')
      .setMimeType(ContentService.MimeType.TEXT)
      .setHeaders(headers);
      
  } catch (error) {
    console.error('Error in doPost:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'error', 
        message: 'Server error: ' + error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
  }
}

function doGet(e) {
  // Handle GET requests for testing
  return ContentService
    .createTextOutput('Wedding Registration Form API is running')
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
}

function setupSpreadsheet() {
  try {
    const spreadsheetId = '1ClZ5TtSu3babJjR-yBmZb7YSTRdRFcgSCbY5aZZY0X4'; // Your actual spreadsheet ID
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    
    // Get the existing sheet
    let sheet = spreadsheet.getSheetByName('Sheet1');
    if (!sheet) {
      sheet = spreadsheet.getActiveSheet();
    }
    
    // Set up headers to match your existing structure with timestamp
    const headers = [
      'Timestamp',
      'Name',
      'Address',
      'Contact Number',
      'Email Address',
      'Facebook Profile',
      'Confirmation'
    ];
    
    // Clear existing content and set headers
    sheet.clear();
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // Format headers
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#f3f4f6');
    headerRange.setBorder(true, true, true, true, true, true);
    headerRange.setFontColor('#374151');
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, headers.length);
    
    // Freeze the header row
    sheet.setFrozenRows(1);
    
    // Add some styling to the sheet
    sheet.setColumnWidth(1, 150); // Timestamp
    sheet.setColumnWidth(2, 150); // Name
    sheet.setColumnWidth(3, 300); // Address
    sheet.setColumnWidth(4, 130); // Contact Number
    sheet.setColumnWidth(5, 200); // Email Address
    sheet.setColumnWidth(6, 200); // Facebook Profile
    sheet.setColumnWidth(7, 100); // Confirmation
    
    Logger.log('Spreadsheet setup completed successfully!');
    return 'Spreadsheet setup completed successfully!';
    
  } catch (error) {
    Logger.log('Error in setupSpreadsheet: ' + error.toString());
    throw error;
  }
}

function sendEmailNotification(formData) {
  try {
    // Replace with your email address
    const recipientEmail = 'jaypasiliao@gmail.com'; // Update this with your preferred email
    
    const subject = 'New Wedding Registration - ' + formData.firstName + ' ' + formData.lastName;
    
    const body = `
New wedding registration received:

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}, ${formData.city}, ${formData.province}
Relationship: ${formData.relationship}
Number of Guests: ${formData.numberOfGuests}
Company: ${formData.company || 'N/A'}
Facebook: ${formData.facebook || 'N/A'}
Dietary Restrictions: ${formData.dietaryRestrictions || 'None'}
Message: ${formData.message || 'No message'}

Timestamp: ${new Date().toLocaleString()}
    `;
    
    MailApp.sendEmail(recipientEmail, subject, body);
    Logger.log('Email notification sent successfully');
    
  } catch (error) {
    Logger.log('Error sending email notification: ' + error.toString());
    // Don't throw error - email notification is optional
  }
}

function testConnection() {
  try {
    const spreadsheetId = '1ClZ5TtSu3babJjR-yBmZb7YSTRdRFcgSCbY5aZZY0X4'; // Your actual spreadsheet ID
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getSheetByName('Sheet1');
    
    if (sheet) {
      Logger.log('Connection test successful! Sheet found.');
      return 'Connection test successful! Sheet found.';
    } else {
      Logger.log('Connection test failed! Sheet not found.');
      return 'Connection test failed! Sheet not found.';
    }
    
  } catch (error) {
    Logger.log('Connection test error: ' + error.toString());
    return 'Connection test error: ' + error.toString();
  }
} 