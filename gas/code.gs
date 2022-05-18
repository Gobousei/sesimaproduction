function doGet(e) {
const htmlOutput = HtmlService.createTemplateFromFile("index").evaluate();
  htmlOutput
    .setTitle('vote')
    .setFaviconUrl("https://raw.githubusercontent.com/Gobousei/vote/main/icon_av.png");
  return htmlOutput;
}
function getAppUrl() {
  return ScriptApp.getService().getUrl();
}
function leftclick() {
  const user_id ="左"
    //スプレッドシートに格納される順番
    const data = [[
      user_id,
      new Date()
    ]];
    const app = SpreadsheetApp.openById('1OWsC1SR0X6krZMF4G5hX4XMcx0BosOR_KBcdldZHskg');
    const sheet = app.getSheetByName('シート1');
    const insertRow = sheet.getDataRange().getLastRow() + 1;
    const insertCol = 1;
    const insertRowNum = data.length;
    const insertColNum = data[0].length;
    const insertRange = sheet.getRange(insertRow, insertCol,insertRowNum,insertColNum);
    //スプレッドシートに書きこむAPI
    insertRange.setValues(data);
  }
  function rightclick() {
  const user_id ="右"
    //スプレッドシートに格納される順番
    const data = [[
      user_id,
      new Date()
    ]];
    const app = SpreadsheetApp.openById('1OWsC1SR0X6krZMF4G5hX4XMcx0BosOR_KBcdldZHskg');
    const sheet = app.getSheetByName('シート1');
    const insertRow = sheet.getDataRange().getLastRow() + 1;
    const insertCol = 1;
    const insertRowNum = data.length;
    const insertColNum = data[0].length;
    const insertRange = sheet.getRange(insertRow, insertCol,insertRowNum,insertColNum);
    //スプレッドシートに書きこむAPI
    insertRange.setValues(data);
  }
