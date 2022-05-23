For Front-end developer
To develop, you must　deploying this section.

@head
<title>vote</title>
@under body tag
<?!= HtmlService.createHtmlOutputFromFile('leftscript').getContent(); ?>

@body
<button type="button" id="leftButton"  onclick="clickedleftButton()">左に投票する</button>
<button type="button" id="rightButton" onclick="clickedrightButton()">右に投票する</button>

And you can change "this page" of index.html only.
"this page" = 

日本語で失礼します。
ページのUIを開発される開発者様、変更する際には次の部品を組み込んでください。尚、＠～　は設置する場所を示しています。

@headタグ内
<title>vote</title>

@bodyタグ直下
<?!= HtmlService.createHtmlOutputFromFile('leftscript').getContent(); ?>

@bodyタグ内好きな場所
<button type="button" id="leftButton"  onclick="clickedleftButton()">左に投票する</button>
<button type="button" id="rightButton" onclick="clickedrightButton()">右に投票する</button>

UIを開発する際は、”ここのページ”の中の、index.htmlファイルのみを編集してください。
”ここのページ” =
