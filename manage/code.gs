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
if(leftvalue>rightvalue){
  var ss_id2 = '1OWsC1SR0X6krZMF4G5hX4XMcx0BosOR_KBcdldZHskg';
var sh_name2 = '結果'; //スプレッドシートのシート名を指定
var sh2 = SpreadsheetApp.openById(ss_id2).getSheetByName(sh_name2);
var range = sh2.getRange("B10").setValue("左の勝利");
var hidari = sh2.getRange("C6").setValue(leftvalue);
var migi = sh2.getRange("C7").setValue(rightvalue);
}else{
  var ss_id2 = '1OWsC1SR0X6krZMF4G5hX4XMcx0BosOR_KBcdldZHskg';
var sh_name2 = '結果'; //スプレッドシートのシート名を指定
var sh2 = SpreadsheetApp.openById(ss_id2).getSheetByName(sh_name2);
var range = sh2.getRange("B10").setValue("左の勝利");
var hidari = sh2.getRange("C6").setValue(leftvalue);
var migi = sh2.getRange("C7").setValue(rightvalue);
}
}
