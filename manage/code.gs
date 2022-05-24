function doGet(e) {
const htmlOutput = HtmlService.createTemplateFromFile("index").evaluate();
  htmlOutput
    .setTitle('vote管理')
    .setFaviconUrl("https://raw.githubusercontent.com/Gobousei/vote/main/icon_av.png");
  return htmlOutput;
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
