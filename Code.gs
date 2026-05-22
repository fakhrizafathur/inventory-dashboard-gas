function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('Inventory Dashboard');
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

const SPREADSHEET_ID = "12Z-i2KFPXbtDpbT9asZyVkisoq8vrt9hUKQJlr-zmrc";
const SHEET_NAME = "DATA";

function getSheet() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) throw new Error("Sheet DATA tidak ditemukan");
  return sheet;
}

function getData() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName(SHEET_NAME);

  const lastRow = sheet.getLastRow();
  const lastCol = sheet.getLastColumn();

  if (lastRow < 2) return [];

  const values = sheet.getRange(2, 1, lastRow - 1, lastCol).getValues();

  const result = values.map((row, i) => ({
    rowIndex: i + 2,
    id: row[0],
    date: row[1] ? Utilities.formatDate(new Date(row[1]), "GMT+7", "yyyy-MM-dd") : "",
    season: row[2],
    product: row[3],
    article: row[4],
    stage: row[5],
    size: row[6],
    qty: Number(row[7]) || 0,
    lacking: row[8],
    status: row[9] || ""
  }));

  return JSON.parse(JSON.stringify(result)); // 🔥 IMPORTANT FIX
}

function saveData(form) {
  const sheet = getSheet();
  const lastRow = sheet.getLastRow();

  sheet.appendRow([
    lastRow,
    form.date,
    form.season,
    form.product,
    form.article,
    form.stage,
    form.size,
    form.qty,
    form.lacking,
    form.status
  ]);

  return true;
}

function updateData(form) {
  const sheet = getSheet();

  sheet.getRange(form.rowIndex, 1, 1, 10).setValues([[
    form.id,
    form.date,
    form.season,
    form.product,
    form.article,
    form.stage,
    form.size,
    form.qty,
    form.lacking,
    form.status
  ]]);

  return true;
}

function deleteData(rowIndex) {
  getSheet().deleteRow(rowIndex);
  return true;
}

function getSummary() {
  const data = getData();
  const uniqueArticles = new Set();
  let totalQty = 0;
  let input = 0;
  let output = 0;
  let pending = 0;

  data.forEach(item => {
    uniqueArticles.add(item.article);
    totalQty += Number(item.qty) || 0;

    const status = (item.status || "").toLowerCase();

    if (status === "input") input++;
    else if (status === "output") output++;
    else if (status === "pending") pending++;
  });

  return { totalArticle: uniqueArticles.size,totalQty, input, output, pending };
}