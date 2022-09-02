function doGet(e) {
  let page = e.parameter.page;
  if (!page) {
    page = 'index';
  }
const htmlOutput = HtmlService.createTemplateFromFile(page).evaluate();
  htmlOutput
    .setTitle('vote')
    .setFaviconUrl("https://raw.githubusercontent.com/Gobousei/vote/main/icon_av.png");
  return htmlOutput;
}
function deletepro(){
  var userProperties = PropertiesService.getUserProperties();
  userProperties.deleteProperty('voted');
}
function getAppUrl() {
  return ScriptApp.getService().getUrl();
}

function leftclick() {
  var hasId =   PropertiesService.getUserProperties().getProperty('voted');
  Logger.log(hasId);
  if (hasId == null){
  const user_id ="左"
    //スプレッドシートに格納される順番
    const data = [[
      user_id,
      new Date(),
    ]];
    const app = SpreadsheetApp.openById('1f_u5ApB3MD7Rj4mqR_hKwBd6ZFkCZUAMjrvGeffDvCY');
    const sheet = app.getSheetByName('シート1');
    const insertRow = sheet.getDataRange().getLastRow() + 1;
    const insertCol = 1;
    const insertRowNum = data.length;
    const insertColNum = data[0].length;
    const insertRange = sheet.getRange(insertRow, insertCol,insertRowNum,insertColNum);
    //スプレッドシートに書きこむAPI
    insertRange.setValues(data);
   PropertiesService.getUserProperties().setProperty('voted',1);
  }else{
    console.log("記録されませんでした")
  }
  }
  function rightclick() {
  var hasId =   PropertiesService.getUserProperties().getProperty('voted');
  Logger.log(hasId);
  if (hasId == null){
  const user_id ="右"
  var address = Session.getActiveUser().getUserLoginId();
    //スプレッドシートに格納される順番
    const data = [[
      user_id,
      new Date(),
      address
    ]];
    const app = SpreadsheetApp.openById('1f_u5ApB3MD7Rj4mqR_hKwBd6ZFkCZUAMjrvGeffDvCY');
    const sheet = app.getSheetByName('シート1');
    const insertRow = sheet.getDataRange().getLastRow() + 1;
    const insertCol = 1;
    const insertRowNum = data.length;
    const insertColNum = data[0].length;
    const insertRange = sheet.getRange(insertRow, insertCol,insertRowNum,insertColNum);
    //スプレッドシートに書きこむAPI
    insertRange.setValues(data);
   PropertiesService.getUserProperties().setProperty('voted',1);
  }else{
    console.log("登録できませんでした")
  }
  }
  
function myFunction() {
var ss_id = '1f_u5ApB3MD7Rj4mqR_hKwBd6ZFkCZUAMjrvGeffDvCY';
var sh_name = 'シート1'; //スプレッドシートのシート名を指定
var sh = SpreadsheetApp.openById(ss_id).getSheetByName(sh_name);
var left = sh.getRange("E1");
var leftvalue = left.getValue();
var right = sh.getRange("E2");
var rightvalue = right.getValue();
console.log(leftvalue);
console.log(rightvalue);
var ss_id2 = '1f_u5ApB3MD7Rj4mqR_hKwBd6ZFkCZUAMjrvGeffDvCY';
var sh_name2 = '結果'; //スプレッドシートのシート名を指定
var sh2 = SpreadsheetApp.openById(ss_id2).getSheetByName(sh_name2);
if(leftvalue>rightvalue){
  var sh_name3 = '設定'; //スプレッドシートのシート名を指定
var sh3 = SpreadsheetApp.openById(ss_id2).getSheetByName(sh_name3);
var number1 = sh3.getRange("B6").getValue();
var number2 = sh3.getRange("B3").getValue();
var number3 = sh3.getRange("C3").getValue();
var result = sh3.getRange("B9").getValue();
var range = sh2.getRange("B10").setValue(result);
var delete1 = sh2.getRange("B9").setValue("結果：");
var hidari = sh2.getRange("C6").setValue(leftvalue);
var delete2 = sh2.getRange("B6").setValue(number2 + number1);
var migi = sh2.getRange("C7").setValue(rightvalue);
var delete3 = sh2.getRange("B7").setValue(number3 + number1);
}else if(leftvalue<rightvalue){
 var sh_name3 = '設定'; //スプレッドシートのシート名を指定
var sh3 = SpreadsheetApp.openById(ss_id2).getSheetByName(sh_name3);
var number1 = sh3.getRange("B6").getValue();
var number2 = sh3.getRange("B3").getValue();
var number3 = sh3.getRange("C3").getValue();
var result = sh3.getRange("B12").getValue();
var range = sh2.getRange("B10").setValue(result);
var delete1 = sh2.getRange("B9").setValue("結果：");
var hidari = sh2.getRange("C6").setValue(leftvalue);
var delete2 = sh2.getRange("B6").setValue(number2 + number1);
var migi = sh2.getRange("C7").setValue(rightvalue);
var delete3 = sh2.getRange("B7").setValue(number3 + number1);
}else if(leftvalue=rightvalue){
  var ss_id2 = '1f_u5ApB3MD7Rj4mqR_hKwBd6ZFkCZUAMjrvGeffDvCY';
var sh_name2 = '結果'; //スプレッドシートのシート名を指定
var sh2 = SpreadsheetApp.openById(ss_id2).getSheetByName(sh_name2);
var sh_name3 = '設定'; //スプレッドシートのシート名を指定
var sh3 = SpreadsheetApp.openById(ss_id2).getSheetByName(sh_name3);
var number1 = sh3.getRange("B6").getValue();
var number2 = sh3.getRange("B3").getValue();
var number3 = sh3.getRange("C3").getValue();
var range = sh2.getRange("B10").setValue("同点");
var delete1 = sh2.getRange("B9").setValue("結果：");
var hidari = sh2.getRange("C6").setValue(leftvalue);
var delete2 = sh2.getRange("B6").setValue(number2 + number1);
var migi = sh2.getRange("C7").setValue(rightvalue);
var delete3 = sh2.getRange("B7").setValue(number3 + number1);
}
}
function deletefunc(){
   var ss_id2 = '1f_u5ApB3MD7Rj4mqR_hKwBd6ZFkCZUAMjrvGeffDvCY';
var sh_name2 = '結果'; //スプレッドシートのシート名を指定
var sh2 = SpreadsheetApp.openById(ss_id2).getSheetByName(sh_name2);
var number2 = sh2.getRange("C6").getValue();
var number3 = sh2.getRange("C7").getValue();
var delete1 = sh2.getRange("F6").setValue(number2);
var delete2 = sh2.getRange("G6").setValue(number3);
var delete1 = sh2.getRange("B10").setValue(" ");
var delete2 = sh2.getRange("C6").setValue(" ");
var delete3 = sh2.getRange("C7").setValue(" ");
var delete2 = sh2.getRange("B6").setValue("投票中・・・");
var delete3 = sh2.getRange("B7").setValue(" ");
var delete1 = sh2.getRange("B9").setValue(" ");
var sh_name = 'シート1'; //スプレッドシートのシート名を指定
var sh3 = SpreadsheetApp.openById(ss_id2).getSheetByName(sh_name);
var delete1 = sh3.deleteColumn(1)
var delete1 = sh3.deleteColumn(1)
var delete1 = sh3.deleteColumn(1)
var delete1 = sh3.deleteColumn(1)
var delete1 = sh3.deleteColumn(1)
sh3.insertColumnsAfter(1,5)
var write1 = sh3.getRange("D1").setValue("左");
var write1 = sh3.getRange("D2").setValue("右");
var write1 = sh3.getRange("E1").setValue('=COUNTIF(A3:A,"左")');
var write1 = sh3.getRange("E2").setValue('=COUNTIF(A3:A,"右")');
  var userProperties = PropertiesService.getUserProperties();
  userProperties.deleteProperty('voted');
}

function getScriptUrl() {
  var url = ScriptApp.getService().getUrl();
  return url;
}
