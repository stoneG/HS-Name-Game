javascript:!function(a,b){function c(){}function d(a){return"HS-namegame-"+a}function e(a,b){return'<div class="'+d(a)+'">'+(b||"")+"</div>"}function f(a,c){return b(e.apply(this,arguments)).css(i[a]||{})}function g(a){var b=a.length,c,d,e;if(b===0)return!1;while(--b)c=Math.floor(Math.random()*(b+1)),d=a[b],e=a[c],a[b]=e,a[c]=d;return a}function v(){l.hide(),b(this).detach(),b("."+d("scorecard")).hide(),k.append(n)}function w(){function z(){var e=[],h=[],i=Math.min(4,c.length);!function(){l={pic:null,name:null},v=[];if(i<1)return C();for(var d=0;d<i;d++){var j=c[d];e.push('<img src="'+a[j].pic+'" />'),h.push(f("name",j))}g(e),g(h);for(var d=0;d<i;d++)o.append(e[d]),p.append(h[d])}(),o.find("img").click(function(a){l.pic=b(this).attr("src"),l.$pic=b(this),l.name===null&&o.find("img").css("opacity",1).not(b(this)).fadeTo(250,.2),A()}),p.find("div."+d("name")).click(function(a){l.name=b(this).html(),l.$name=b(this),l.pic===null&&p.find("div."+d("name")).css("opacity",1).not(b(this)).fadeTo(250,.2),A()}),r.unbind("click").click(function(){o.children().detach(),p.children().detach(),r.detach(),z()})}function A(){return l.pic===null||l.name===null?!1:(l.$pic.detach(),l.$name.detach(),v.push(l),l={pic:null,name:null},o.find("img").add(p.find("div")).css("opacity",1),o.find("img").length===1?(l={pic:o.find("img").attr("src"),$pic:o.find("img"),name:p.find("div."+d("name")).html(),$name:p.find("div."+d("name"))},A(l)):o.find("img").length?!0:B())}function B(){for(var b=0,d=v.length;b<d;b++){if(a[v[b].name].pic===v[b].pic)a[v[b].name].right++,v[b].win=!0,o.append(f("correct").append(v[b].$pic).append(v[b].$name.prepend("✔ ")));else{a[v[b].name].wrong++,v[b].win=!1;var e;for(var g=0;g<d;g++)v[b].pic===a[v[g].name].pic&&(e=v[g].$name.clone());o.append(f("incorrect").append('<img src="'+a[v[b].name].pic+'" />').append(e.prepend("✖ ").css(i.wrongName)).append(v[b].$name))}j.push(v[b])}while(b--)c.shift();n.append(r)}function C(){var a=0;for(var c=0,d=j.length;c<d;c++)j[c].win&&a++;b("h1",k).first().remove();var e=j.length?"<h2>You got "+a+" right and "+(j.length-a)+" wrong.</h2>":"<h1>CONGRATULATIONS!</h1><h2>You know everybody in the selected batches.</h2>";n.append(f("scorecard",e)),j.length<1?n.append(t).append(s):n.append(q),h.setItem("HS",JSON.stringify(u))}var a={},c=[],e={},j=[],l={pic:null,name:null},v=[];m.find("input:checked").each(function(){e[b(this).val()]=!0});for(var w in u)if(e.hasOwnProperty(w))for(var x in u[w]){var y=u[w][x].right-u[w][x].wrong;u[w].hasOwnProperty(x)&&y<3&&(a[x]=u[w][x],c.push(x))}g(c),z()}"use strict",b("a.batch-emails").remove();var h=typeof localStorage=="undefined"?{getItem:c,setItem:c,removeItem:c}:localStorage,i={container:{background:"rgba(0,0,0,1)",position:"absolute",top:0,left:0,width:b(document).width(),height:b(document).height()},mainPage:{width:"600px",background:"#fff",margin:"20px auto",padding:"10px 50px 50px","border-radius":"5px"},batchCheckboxes:{margin:"10px 0"},board:{display:"table","font-size":"13px"},pics:{margin:"20px 0 0"},name:{border:"1px solid #aaa",background:"#eee",cursor:"pointer","text-align":"center","font-size":"14px",padding:"3px 0"},nextButton:{display:"block",position:"relative",bottom:0},correct:{"float":"left",background:"#00e837"},incorrect:{"float":"left",background:"#ed4044"},wrongName:{"text-decoration":"line-through"}},j=f("container"),k=f("mainPage","<h1>Learn Your Hackers!</h1>").appendTo(j),l=f("startContent").appendTo(k),m=b('<ul class="'+d("batchCheckboxes")+'"></ul>').css(i.batchCheckboxes).appendTo(l),n=f("board"),o=f("pics").appendTo(n),p=f("names").appendTo(n).css("clear","both"),q=b('<input type="submit" value="start game" />').appendTo(l),r=b('<input type="submit" value="next" />').css(i.nextButton),s=b('<input type="submit" value="reset" />').css(i.nextButton),t=b('<input type="submit" value="select different batches" />').css(i.nextButton),u=a.HS=JSON.parse(h.getItem("HS"))||{};b("#batches").children().each(function(){var a=b("ul",this).first(),c=a.prev().html();m.append('<li><input type="checkbox" name="batch" value="'+c+'" /><label>'+c+"</label></li>");var d=u[c]=u[c]||{};b("li.person",a).each(function(){var a=b(".name a",this).html();d[a]=d[a]||{pic:b("img",this).attr("src"),right:0,wrong:0}})}),m.find("input").first().click(),j.hide().appendTo(b("body")).fadeTo(250,1),q.click(v).click(w),b(document).on("keydown",function x(a){a.which===27&&j.fadeTo(250,0,function(){b(this).remove(),b(document).off("keydown",x)})}),b("html,body").animate({scrollTop:0},250)}(window,jQuery);