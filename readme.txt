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
"this page" = https://script.google.com/home/projects/1C6x3NgNgpgOA3_Cw3kmD5YM0iDRzN-t4xjc20O8gQKyumdVX_POJByDo/edit

caution! this site only visit by .okayama-c.ed.jp accounts

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
”ここのページ” =　https://script.google.com/home/projects/1C6x3NgNgpgOA3_Cw3kmD5YM0iDRzN-t4xjc20O8gQKyumdVX_POJByDo/edit

！注意！　このページは岡山県立学校のアカウントでしか入ることができません。
