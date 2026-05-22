# Inventory Dashboard - Google Apps Script

Modern Inventory Dashboard built with:

- Google Apps Script
- Google Spreadsheet
- HTML
- Bootstrap 5
- Vanilla JavaScript

This project provides a simple inventory management system with:

- Add Inventory
- Edit Inventory
- Delete Inventory
- Search & Filter
- Pagination
- Summary Cards
- Dark Mode
- Responsive UI

---

# Features

## Dashboard Summary

Display:

- Total Qty
- Total Articles
- Input Count
- Output Count
- Pending Count

---

## Inventory Table

Features:

- Search Product / Article / Season
- Filter by Status
- Pagination
- Edit Data
- Delete Data

---

## Form Features

### Add Inventory

Add new inventory data directly into Google Spreadsheet.

### Edit Inventory

Edit existing inventory data using a separate modal form.

---

## Dark Mode

Modern dark mode UI included.

---

# Spreadsheet Structure

Sheet Name:

DATA

Columns:

Column	Name
A	Id
B	Date
C	Season
D	Product Name
E	Article
F	Stage
G	Size
H	Qty
I	Lacking
J	Status
Project Structure
Code.gs
Index.html
JavaScript.html
Style.html
Installation Guide
1. Create Spreadsheet

Create a new Google Spreadsheet.

Rename spreadsheet to:

DATA

Rename first sheet to:

DATA
2. Prepare Spreadsheet Columns

Add headers:

Id
Date
Season
Product Name
Article
Stage
Size
Qty
Lacking
Status
3. Open Apps Script

Inside Spreadsheet:

Extensions → Apps Script
4. Create Files

Create:

Code.gs
Index.html
JavaScript.html
Style.html

Copy all project code into each file.

5. Update Spreadsheet ID

Inside Code.gs:

const SPREADSHEET_ID = "YOUR_SPREADSHEET_ID";

Replace with your spreadsheet ID.

Example:

https://docs.google.com/spreadsheets/d/THIS_IS_ID/edit
Deploy Web App
Steps
1. Click Deploy
Deploy → New Deployment
2. Select Type

Choose:

Web App
3. Execute As

Select:

Me
4. Who Has Access

Select:

Anyone

or

Anyone with the link
5. Deploy

Click:

Deploy

Authorize permissions if needed.

Important Notes
Always Redeploy After Code Changes

Every time you update code:

Deploy → Manage Deployments → Edit → Deploy

Otherwise changes will not appear.

Technologies Used
Google Apps Script
Google Spreadsheet
Bootstrap 5
JavaScript
HTML5
CSS3
UI Features
Responsive Design

Works on:

Desktop
Tablet
Mobile
Modern Dashboard

Includes:

Bootstrap Cards
Icons
Dark Mode
Hover Effects
Responsive Table
Future Improvements

Possible upgrades:

Export PDF
Export Excel
Login Authentication
Charts & Analytics
Multi User Role
Firebase Integration
Real-time Update
Image Upload
QR / Barcode Scanner
Author

Fathur Fakhriza

Informatics Graduate
Fullstack Developer Enthusiast

License

Free to use for learning and personal projects.
