function doGet(e) {
const htmlOutput = HtmlService.createTemplateFromFile("index").evaluate();
  htmlOutput
    .setTitle('vote管理')
    .setFaviconUrl("https://raw.githubusercontent.com/Gobousei/vote/main/icon_av.png");
  return htmlOutput;
}

function myFunction() {
  vote.myFunction();
}

function getScriptUrl() {
  var url = ScriptApp.getService().getUrl();
  return url;
}

function deletefunc(){
  vote.deletefunc();
}
function getAppUrl() {
  return ScriptApp.getService().getUrl();
}
