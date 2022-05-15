function doGet(e) {
const htmlOutput = HtmlService.createTemplateFromFile("index").evaluate();
  htmlOutput
    .setTitle('your vote')
    .setFaviconUrl("https://raw.githubusercontent.com/Gobousei/vote/main/icon_av.png");
  return htmlOutput;
}

function getAppUrl() {
  return ScriptApp.getService().getUrl();
}
function doSubmitAjax(req) {
    const params = req.parameters;
    const resObj = {};
    insertRecord(params);
    return resObj;
  }
    function insertRecord(param){
    let reservationTime = 0;
    const fromDate = new Date(param.calendar_date_from +' ' + param.calendar_time_from);
    const toDate = new Date(param.calendar_date_to + ' ' + param.calendar_time_to);

    //スプレッドシートに格納される順番
    const data = [[
      param.user_id, 
      new Date()
    ]];
    //連携するスプレッドシートのID
    const app = SpreadsheetApp.openById('1f_u5ApB3MD7Rj4mqR_hKwBd6ZFkCZUAMjrvGeffDvCY');
    const sheet = app.getSheetByName('database');
    const insertRow = sheet.getDataRange().getLastRow() + 1;
    const insertCol = 1;
    const insertRowNum = data.length;
    const insertColNum = data[0].length;
    const insertRange = sheet.getRange(insertRow, insertCol,insertRowNum,insertColNum);
    //スプレッドシートに書きこむAPI
    insertRange.setValues(data);
  }
