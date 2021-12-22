!function(){"use strict";$.popup=function(){var me=this,fn=function(e){return"function"==typeof e},setfn=function(e){return"function"==typeof e?e:null},isnull=function(e){return null===e},notnull=function(e){return!isnull(e)},undef=function(e){return"undefined"==typeof e},isstr=function(e){return"string"==typeof e},isobj=function(e){return null!=e&&"object"==typeof e},isempty=function(e){return 0===e.length?!0:!1},ucfirst=function(e){return e[0].toUpperCase()+e.substring(1)};if(isempty(arguments))return me.confirm=function(){var e=arguments,n=e[0],t=null,o=setfn(e[1]),i=setfn(e[2]);isstr(e[1])&&(t=e[1],o=setfn(e[2]),i=setfn(e[3]));var s=new $.popup({dialog:"confirm",title:t,content:n,onConfirm:o,onCancel:i});return s},me.prompt=function(){var e=arguments,n=e[0],t=null,o=null,i=setfn(e[1]),s=setfn(e[2]);isstr(e[1])&&(t=e[1],i=setfn(e[2]),s=setfn(e[3])),isstr(e[2])&&(o=e[2],i=setfn(e[3]),s=setfn(e[4]));var a=new $.popup({content:t,title:o,dialog:"prompt",prompt:{value:n},onConfirm:i,onCancel:s});return a},me.form=function(){var e=arguments,n=null,t=null,o=e[0],i=setfn(e[1]),s=setfn(e[2]);isstr(e[1])&&(n=e[1],i=setfn(e[2]),s=setfn(e[3])),isstr(e[2])&&(t=e[2],i=setfn(e[3]),s=setfn(e[4]));var a=new $.popup({content:n,title:t,dialog:"form",form:{content:o},onSubmit:i,onCancel:s});return a},me;var agent,options={},callback=arguments[1],elem=arguments[2],$container,$content,$title,$message,$toolbar,$outer,$prompt,$form,display;me.settings={},me.defaults={html:!0,position:"center",dialog:"alert",prompt:{value:null,addClass:null},form:{content:null,addClass:null},content:null,title:null,icon:null,iconPath:"images/icons/",buttons:{OK:{text:"OK",style:"default",addClass:null,action:null}},buttonDisplay:"inline",modal:!0,autoclose:!1,timeout:3e3,overlay:!0,opacity:null,closeEsc:!1,closeOverlay:!1,animated:!0,animateEntrance:"flipInX",animateClosing:"fadeOut",onLoad:function(){},onBuild:function(){},onShow:function(){},onClose:function(){},onHide:function(){},onConfirm:null,onSubmit:null,onCancel:null};var btn_defaults={text:null,style:"default",addClass:null,action:null};isstr(arguments[0])?(options.content=arguments[0],callback=arguments[1],isstr(arguments[1])&&(options.title=arguments[1],callback=arguments[2])):isobj(arguments[0])&&(options=arguments[0]),me.settings=$.extend({},me.defaults,options),"/"!=me.settings.iconPath.substr(-1)&&(me.settings.iconPath+="/");var build=function(){var container=$('<div class="pop-container modal"></div>'),overlay=$('<div class="pop-overlay"></div>'),fixer=$('<div class="pop-fixer"></div>'),outer=$('<div class="pop-outer"></div>'),content=$('<div class="pop-content"></div>'),icon=$('<div class="pop-icon"></div>'),img=$("<img />"),title=$('<h1 class="pop-title"></h1>'),message=$('<div class="pop-message"></div>'),form=$('<form class="pop-form"></form>'),row=$('<div class="pop-row"></div>'),prompt=$('<input class="pop-prompt" />'),toolbar=$('<div class="pop-toolbar"></div>'),button=$('<a href="#" class="pop-button"></a>');$.support.leadingWhitespace||(agent="msie8",container.addClass("msie8")),eval("/*@cc_on !@*/false")&&9===document.documentMode&&(agent="msie9",container.addClass("msie9")),container.append(overlay).append(fixer.append(outer)),outer.append(content.append(title).append(message)).append(toolbar.addClass(me.settings.buttonDisplay)),notnull(me.settings.position)&&container.addClass(me.settings.position),notnull(me.settings.title)&&title.html(me.settings.title),notnull(me.settings.content)&&message.html(me.settings.content),notnull(me.settings.icon)&&(img.attr("src",me.settings.iconPath+me.settings.icon),content.prepend(icon.append(img))),0==me.settings.html&&(message.html($("<div></div>").text(me.settings.content).html()),title.html($("<div></div>").text(me.settings.title).html())),0==me.settings.modal&&(container.removeClass("modal"),overlay.remove()),1==me.settings.closeOverlay&&overlay.on("click",function(){me.close()}),notnull(me.settings.opacity)&&(overlay.fadeTo(0,parseFloat(me.settings.opacity)),"msie8"==agent&&overlay.addClass("opacity-"+100*me.settings.opacity.toFixed(1))),0==me.settings.overlay&&(overlay.remove(),("msie9"==agent||"msie8"==agent)&&container.addClass("ie-overlay-false")),1==me.settings.closeEsc&&$(document).keydown(function(e){if(e=e||window.event,27==e.keyCode){var n=$("body").find(".pop-container").last(),t=n.data("popup").instance;1==t.settings.closeEsc&&n.hasClass("shown")&&t.close()}}),1==me.settings.autoclose&&setTimeout(function(){me.close()},me.settings.timeout),"confirm"==me.settings.dialog&&(me.defaults.buttons={confirm:{text:"Confirm",style:"danger",addClass:null,action:function(){if(fn(me.settings.onConfirm)){var e=me.settings.onConfirm.call(me,$container);!1!==e&&me.close()}else me.close();return!1}},cancel:{text:"Cancel",style:"default",addClass:null,action:function(){if(fn(me.settings.onCancel)){var e=me.settings.onCancel.call(me,$container);!1!==e&&me.close()}else me.close();return!1}}},me.settings=$.extend({},me.defaults,options)),"prompt"==me.settings.dialog&&($.each(me.settings.prompt,function(e,n){"value"==e?prompt.val(n):"addClass"==e?prompt.addClass(n):prompt.attr(e,n)}),message.append(form.append(row.append(prompt))),form.on("submit",function(){if(fn(me.settings.onConfirm)){var e=me.settings.onConfirm.call(me,$container,prompt);!1!==e&&me.close()}else me.close();return!1}),me.defaults.buttons={confirm:{text:"Confirm",style:"danger",addClass:null,action:function(){if(fn(me.settings.onConfirm)){var e=me.settings.onConfirm.call(me,$container,prompt);!1!==e&&me.close()}else me.close();return!1}},cancel:{text:"Cancel",style:"default",addClass:null,action:function(){if(fn(me.settings.onCancel)){var e=me.settings.onCancel.call(me,$container,prompt);!1!==e&&me.close()}else me.close();return!1}}},$prompt=prompt,me.settings=$.extend({},me.defaults,options)),"form"==me.settings.dialog&&($.each(me.settings.form,function(e,n){"content"==e?form.html(n):"addClass"==e?form.addClass(n):form.attr(e.toLowerCase(),n)}),message.append(form),form.on("submit",function(){if(fn(me.settings.onSubmit)){var e=me.settings.onSubmit.call(me,$container,form);if(0==e)return!1}}),me.defaults.buttons={submit:{text:"Submit",style:"danger",addClass:null,action:function(){return form.submit(),!1}},cancel:{text:"Cancel",style:"default",addClass:null,action:function(){if(fn(me.settings.onCancel)){var e=me.settings.onCancel.call(me,$container,form);!1!==e&&me.close()}else me.close();return!1}}},$form=form,me.settings=$.extend({},me.defaults,options)),me.settings.buttons!==!1&&$.each(me.settings.buttons,function(e){var n={},t=button.clone();if(isobj(this)){var n=$.extend({},btn_defaults,this);$.each(n,function(n,o){"text"==n?t.html(isnull(o)?ucfirst(e):o):"addClass"==n?t.addClass(o):"style"==n?t.addClass(o.toLowerCase()):"prepend"==n?t.prepend(o):"append"==n?t.append(o):"action"!==n&&t.attr(n.toLowerCase(),o)})}else fn(this)&&(t.html(ucfirst(e)),n.action=this);t.attr("rel","btn-"+e),t.on("click",function(e){if(e.preventDefault(),fn(n.action)){var o=null;"alert"==me.settings.dialog?o=n.action.call(me,$container,t):"confirm"==me.settings.dialog?o=n.action.call(me,$container,t):"prompt"==me.settings.dialog?o=n.action.call(me,$container,$prompt,t):"form"==me.settings.dialog&&(o=n.action.call(me,$container,$form,t)),!1!==o&&me.close()}else!1!==n.action&&me.close()}).appendTo(toolbar)}),container.data("popup",{instance:me}),$("body").append(container),$container=container,$content=content,$title=title,$message=message,$toolbar=toolbar,$outer=outer;var show=me.settings.onBuild.call(me,$container);show!==!1&&me.show()};return me.show=function(){if("shown"==display)return me;if(isnull(me))return null;var e=me.settings.animated,n=me.settings.animateEntrance,t=me.settings.onShow;return display="shown",e?(notnull(n)&&me.animate(n),$container.addClass("shown").fadeIn(function(){t.call(me,$container)})):($container.addClass("shown").fadeIn(0),t.call(me,$container)),me},me.hide=function(){if("hidden"==display)return me;var e=me.settings.onHide,n=e.call(me,$container),t=me.settings.animated;return n!==!1&&(display="hidden",t?$container.fadeOut(400,function(){$(this).removeClass("shown")}):$container.fadeOut(0).removeClass("shown")),me},me.close=function(){if("closed"==display)return me;var e=me.settings.animated,n=me.settings.animateClosing,t=(me.settings.onClose,me.settings.onClose.call(me,$container));return t!==!1&&("hidden"==display&&($container.remove(),me=null),display="closed",e?notnull(n)&&(me.animate(n),$container.fadeOut(400,function(){$(this).removeClass("shown").remove(),me=null})):($container.removeClass("shown").remove(),me=null)),me},me.exit=function(){return $("body").find(".pop-container").each(function(){var e=$(this).data("popup").instance;e.close()}),me},me.closeAll=function(){me.exit()},me.animate=function(e,n){var t="webkitAnimationEnd oanimationend msAnimationEnd animationend";return $outer.addClass(e+" animated"),$outer.bind(t,function(){$outer.removeClass(e+" animated"),fn(n)&&n.call(me,$container),$outer.unbind(t)}),me},me.bounce=function(e){return me.animate("bounce",e),me},me.shake=function(e){return me.animate("shake",e),me},me.pulse=function(e){return me.animate("pulse",e),me},me.rubberBand=function(e){return me.animate("rubberBand",e),me},me.wobble=function(e){return me.animate("wobble",e),me},me.swing=function(e){return me.animate("swing",e),me},me.flash=function(e){return me.animate("flash",e),me},me.tada=function(e){return me.animate("tada",e),me},me.getDefaults=function(){return me.defaults},me.getSettings=function(){return me.settings},me.width=function(e,n){return"undefined"==typeof e?$content.outerWidth():(e=parseInt(e,10),0==n?$content.outerWidth(e):$content.animate({width:e},300,function(){fn(n)&&n.call(me,$container)}),me)},me.height=function(e,n){return"undefined"==typeof e?$content.outerHeight()+$toolbar.outerHeight():(e=parseInt(e,10)-$toolbar.outerHeight(),0==n?$content.outerHeight(e+$toolbar.outerHeight()):$content.animate({height:e},300,function(){fn(n)&&n.call(me,$container)}),me)},me.resize=function(e,n,t){$container.removeClass("fullscreen"),0==t?me.width(e,!1).height(n,!1):(me.width(e).height(n),fn(t)&&t.call(me,$container))},me.revert=function(e){if($container.removeClass("fullscreen"),0==e)$content.css({height:"",width:""});else{var n=$content.height(),t=$content.width(),o=$content.css("height","auto").outerHeight(),i=$content.css("width","auto").outerWidth();$content.height(n).width(t),$content.animate({width:i},function(){$content.animate({height:o},function(){$content.css({width:"",height:""}),fn(e)&&e.call(me,$container)})})}return me},me.fullscreen=function(e){var n=$(window).width(),t=$(window).height();return $container.addClass("fullscreen"),0==e?me.width(n,!1).height(t,!1):(me.width(n).height(t),fn(e)&&e.call(me,$container)),me},me.position=function(e){return undef(e)?me.settings.position:(e=e.toLowerCase(),$container.removeClass(me.settings.position).addClass(e),me.settings.position=e,me)},me.content=function(e,n){return undef(e)?me.settings.content:e==me.settings.content?me:(0==n?$message.html(e):$message.fadeOut(200,function(){$message.html(e).fadeIn(200)}),me.settings.content=e,me)},me.title=function(e,n){return undef(e)?me.settings.title:e==me.settings.title?me:(0==n?$title.html(e):$title.fadeOut(200,function(){$title.html(e).fadeIn()}),void(me.settings.title=e))},me.buttons=function(){var e={};return $.each(me.settings.buttons,function(n){e[n]=$toolbar.find("a[rel=btn-"+n+"]")}),e},me.autoclose=function(e,n){undef(e)&&(e=me.settings.timeout),setTimeout(function(){if(fn(n)){var e=n.call(me,$container);e!==!1&&me.close()}else me.close()},e)},me.onShow=function(e){return fn(e)&&(me.settings.onShow=e),me},me.onClose=function(e){return fn(e)&&(me.settings.onClose=e),me},me.onHide=function(e){return fn(e)&&(me.settings.onHide=e),me},me.onConfirm=function(e){var n=me.settings.dialog;return undef(e)?(fn(me.settings.onConfirm)&&("confirm"==n&&me.settings.onConfirm.call(me,$container),"prompt"==n&&me.settings.onConfirm.call(me,$container,$prompt)),me):(fn(e)&&(me.settings.onConfirm=e),me)},me.onSubmit=function(e){return undef(e)?(fn(me.settings.onSubmit)&&me.settings.onSubmit.call(me,$container,$form),me):(fn(e)&&(me.settings.onSubmit=e),me)},me.onCancel=function(e){var n=me.settings.dialog;return undef(e)?(fn(me.settings.onCancel)&&("confirm"==n&&me.settings.onCancel.call(me,$container),"prompt"==n&&me.settings.onCancel.call(me,$container,$prompt),"form"==n&&me.settings.onCancel.call(me,$container,$form)),me):(fn(e)&&(me.settings.onCancel=e),me)},me.settings.onLoad.call(me),build(),fn(callback)&&callback.call(me,$container),this}}(jQuery);