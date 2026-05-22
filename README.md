# Inventory Dashboard - Google Apps Script

A modern, lightweight inventory management dashboard built using **Google Apps Script** and **Google Spreadsheet**, with a responsive UI powered by **Bootstrap 5** and **Vanilla JavaScript**.

---

## 🚀 Overview

This project provides a simple yet powerful inventory management system that runs entirely on Google infrastructure.

It is designed for learning purposes and small-scale inventory tracking.

---

## ✨ Features

### 📊 Dashboard Summary

Displays key inventory metrics:

* Total Quantity
* Total Articles
* Input Count
* Output Count
* Pending Count

---

### 📦 Inventory Management

* ➕ Add new inventory data
* ✏️ Edit existing inventory
* ❌ Delete inventory records
* 🔍 Search by Product / Article / Season
* 🎯 Filter by Status
* 📄 Pagination support

---

### 🧾 Form Features

* Add inventory via modal form
* Edit inventory via separate modal
* Validation ready structure

---

### 🌙 UI/UX Features

* Dark Mode support
* Responsive design (Desktop, Tablet, Mobile)
* Modern dashboard layout
* Bootstrap cards & icons
* Hover effects for better UX

---

## 🏗️ Tech Stack

* Google Apps Script
* Google Spreadsheet
* HTML5
* CSS3
* Bootstrap 5
* Vanilla JavaScript

---

## 📁 Project Structure

```
├── Code.gs
├── Index.html
├── JavaScript.html
├── Style.html
```

---

## 📊 Spreadsheet Structure

### 📄 Sheet Name

```
DATA
```

### 📌 Columns

| Column | Field Name   |
| ------ | ------------ |
| A      | Id           |
| B      | Date         |
| C      | Season       |
| D      | Product Name |
| E      | Article      |
| F      | Stage        |
| G      | Size         |
| H      | Qty          |
| I      | Lacking      |
| J      | Status       |

---

## ⚙️ Installation Guide

### 1. Create Spreadsheet

* Create a new Google Spreadsheet
* Rename spreadsheet file to: **DATA**
* Rename first sheet to: **DATA**

---

### 2. Setup Columns

Add headers in row 1:

```
Id | Date | Season | Product Name | Article | Stage | Size | Qty | Lacking | Status
```

---

### 3. Open Apps Script

Go to:

```
Extensions → Apps Script
```

---

### 4. Create Project Files

Create the following files:

* Code.gs
* Index.html
* JavaScript.html
* Style.html

Paste the corresponding code into each file.

---

### 5. Set Spreadsheet ID

In `Code.gs`, update:

```javascript
const SPREADSHEET_ID = "YOUR_SPREADSHEET_ID";
```

Replace with your actual spreadsheet ID:

```
https://docs.google.com/spreadsheets/d/THIS_IS_ID/edit
```

---

## 🚀 Deployment Guide

### 1. Deploy Web App

* Click **Deploy**
* Select **New Deployment**
* Choose type: **Web App**

---

### 2. Execution Settings

* Execute as: **Me**

---

### 3. Access Settings

* Who has access:

  * Anyone
  * or Anyone with the link

---

### 4. Deploy

Click **Deploy** and authorize permissions if required.

---

## ⚠️ Important Notes

* Every code change requires redeployment:

  ```
  Deploy → Manage Deployments → Edit → Deploy
  ```
* Otherwise changes will not reflect on the web app.

---

## 🔮 Future Improvements

Potential enhancements:

* Export to PDF
* Export to Excel
* Authentication system
* Charts & analytics dashboard
* Multi-user roles
* Firebase integration
* Real-time updates
* Image upload support
* QR / Barcode scanner

---

## 👨‍💻 Author

**Fathur Fakhriza**
Informatics Graduate
Fullstack Developer Enthusiast

---

## 📄 License

This project is free to use for learning and personal projects.
