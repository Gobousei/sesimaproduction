For Front-end developper
To develop, you must　deploying this section.
@under body tag
<?!= HtmlService.createHtmlOutputFromFile('leftscript').getContent(); ?>
@body
<button type="button" id="leftButton"  onclick="clickedleftButton()">左に投票する</button>
<button type="button" id="rightButton" onclick="clickedrightButton()">右に投票する</button>
