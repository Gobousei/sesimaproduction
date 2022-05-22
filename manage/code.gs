function doGet(e) {
const htmlOutput = HtmlService.createTemplateFromFile("index").evaluate();
  htmlOutput
    .setTitle('vote管理')
    .setFaviconUrl("https://raw.githubusercontent.com/Gobousei/vote/main/icon_av.png");
  return htmlOutput;
}

function myFunction() {
var ss_id = '1OWsC1SR0X6krZMF4G5hX4XMcx0BosOR_KBcdldZHskg';
var sh_name = 'シート1'; //スプレッドシートのシート名を指定
var sh = SpreadsheetApp.openById(ss_id).getSheetByName(sh_name);
var left = sh.getRange("E1");
var leftvalue = left.getValue();
var right = sh.getRange("E2");
var rightvalue = right.getValue();
console.log(leftvalue);
console.log(rightvalue);
var ss_id2 = '1OWsC1SR0X6krZMF4G5hX4XMcx0BosOR_KBcdldZHskg';
var sh_name2 = '結果'; //スプレッドシートのシート名を指定
var sh2 = SpreadsheetApp.openById(ss_id2).getSheetByName(sh_name2);
if(leftvalue>rightvalue){
var range = sh2.getRange("B10").setValue("左の勝利");
var delete1 = sh2.getRange("B9").setValue("結果：");
var hidari = sh2.getRange("C6").setValue(leftvalue);
var delete2 = sh2.getRange("B6").setValue("左の得票数：");
var migi = sh2.getRange("C7").setValue(rightvalue);
var delete3 = sh2.getRange("B7").setValue("右の得票数：");
}else if(leftvalue<rightvalue){
var range = sh2.getRange("B10").setValue("右の勝利");
var delete1 = sh2.getRange("B9").setValue("結果：");
var hidari = sh2.getRange("C6").setValue(leftvalue);
var delete2 = sh2.getRange("B6").setValue("左の得票数：");
var migi = sh2.getRange("C7").setValue(rightvalue);
var delete3 = sh2.getRange("B7").setValue("右の得票数：");
}else if(leftvalue=rightvalue){
  var ss_id2 = '1OWsC1SR0X6krZMF4G5hX4XMcx0BosOR_KBcdldZHskg';
var sh_name2 = '結果'; //スプレッドシートのシート名を指定
var sh2 = SpreadsheetApp.openById(ss_id2).getSheetByName(sh_name2);
var range = sh2.getRange("B10").setValue("同点");
var delete1 = sh2.getRange("B9").setValue("結果：");
var hidari = sh2.getRange("C6").setValue(leftvalue);
var delete2 = sh2.getRange("B6").setValue("左の得票数：");
var migi = sh2.getRange("C7").setValue(rightvalue);
var delete3 = sh2.getRange("B7").setValue("右の得票数：");
}
}

function getScriptUrl() {
  var url = ScriptApp.getService().getUrl();
  return url;
}

function deletefunc(){
   var ss_id2 = '1OWsC1SR0X6krZMF4G5hX4XMcx0BosOR_KBcdldZHskg';
var sh_name2 = '結果'; //スプレッドシートのシート名を指定
var sh2 = SpreadsheetApp.openById(ss_id2).getSheetByName(sh_name2);
var delete1 = sh2.getRange("B10").setValue(" ");
var delete2 = sh2.getRange("C6").setValue(" ");
var delete3 = sh2.getRange("C7").setValue(" ");
var delete2 = sh2.getRange("B6").setValue("”結果を表示”を押してください");
var delete3 = sh2.getRange("B7").setValue(" ");
var delete1 = sh2.getRange("B9").setValue(" ");
}
