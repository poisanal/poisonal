<html>
<jsp:useBean id="cb" scope="session" class="colors.ColorGameBean" />
<jsp:setProperty name="cb" property="*" />
<%
cb.processRequest();
%>

<body bgcolor=<%= cb.getColor1() %>>
<font size=6 color=<%= cb.getColor2() %>>
<p>

<% if (cb.getHint()==true) { %>

<p> Hint #1: Vampires prey at night!
<p><p> Hint #2: Nancy without the n.

<% } %>

<% if  (cb.getSuccess()==true) { %>

<p> CONGRATULATIONS!!
<% if  (cb.getHintTaken()==true) { %>

<p>( although I know you cheated and peeked into the hints)

<% } %>

<% } %>

<p> Total attempts so far: <%= cb.getAttempts() %>
<p>

<p>

<form method=POST action=colrs.jsp>

Color; #1: <input type=text name= color1 size=16>

<br>

Color; #2: <input type=text name= color2 size=16>

<p>

<input type=submit name=action value="Submit">
<input type=submit name=action value="Hint">

</form>

</font>
</body>
</html>
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


