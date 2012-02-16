/*
* $ lightbox_me
* By: Buck Wilson
* Version : 2.3
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
(function(a){a.fn.lightbox_me=function(k){return this.each(function(){function h(){var l=c[0].style;b.destroyOnClose?c.add(d).remove():c.add(d).hide();b.parentLightbox&&b.parentLightbox.fadeIn(200);g.remove();c.undelegate(b.closeSelector,"click");a(window).unbind("reposition",i);a(window).unbind("reposition",e);a(window).unbind("scroll",e);a(document).unbind("keyup",j);f&&l.removeExpression("top");b.onClose()}function j(a){(27==a.keyCode||27==a.DOM_VK_ESCAPE&&0==a.which)&&b.closeEsc&&h()}function i(){a(window).height()<
a(document).height()?(d.css({height:a(document).height()+"px"}),g.css({height:a(document).height()+"px"})):(d.css({height:"100%"}),f&&(a("html,body").css("height","100%"),g.css("height","100%")))}function e(){var d=c[0].style;c.css({left:"50%",marginLeft:-1*(c.outerWidth()/2),zIndex:b.zIndex+3});if(c.height()+80>=a(window).height()&&("absolute"!=c.css("position")||f)){var e=a(document).scrollTop()+40;c.css({position:"absolute",top:e+"px",marginTop:0});f&&d.removeExpression("top")}else c.height()+
80<a(window).height()&&(f?(d.position="absolute",b.centered?(d.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),d.marginTop=0):(e=b.modalCSS&&b.modalCSS.top?parseInt(b.modalCSS.top):0,d.setExpression("top","((blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+
e+') + "px"'))):b.centered?c.css({position:"fixed",top:"50%",marginTop:-1*(c.outerHeight()/2)}):c.css({position:"fixed"}).css(b.modalCSS))}var b=a.extend({},a.fn.lightbox_me.defaults,k),d=a(),c=a(this),g=a('<iframe id="foo" style="z-index: '+(b.zIndex+1)+';border: none; margin: 0; padding: 0; position: absolute; width: 100%; height: 100%; top: 0; left: 0; filter: mask();"/>'),f=a.browser.msie&&7>a.browser.version;b.showOverlay&&(d=0<a(".js_lb_overlay:visible").length?a('<div class="lb_overlay_clear js_lb_overlay"/>'):
a('<div class="'+b.classPrefix+'_overlay js_lb_overlay"/>'));if(f){var m=/^https/i.test(window.location.href||"")?"javascript:false":"about:blank";g.attr("src",m);a("body").append(g)}a("body").append(c.hide()).append(d);b.showOverlay&&(i(),d.css({position:"absolute",width:"100%",top:0,left:0,right:0,bottom:0,zIndex:b.zIndex+2,display:"none"}),d.hasClass("lb_overlay_clear")||d.css(b.overlayCSS));b.showOverlay?d.fadeIn(b.overlaySpeed,function(){e();c[b.appearEffect](b.lightboxSpeed,function(){i();e();
b.onLoad()})}):(e(),c[b.appearEffect](b.lightboxSpeed,function(){b.onLoad()}));b.parentLightbox&&b.parentLightbox.fadeOut(200);a(window).resize(i).resize(e).scroll(e).keyup(j);b.closeClick&&d.click(function(a){h();a.preventDefault});c.delegate(b.closeSelector,"click",function(a){h();a.preventDefault()});c.bind("close",h);c.bind("reposition",e)})};a.fn.lightbox_me.defaults={appearEffect:"fadeIn",appearEase:"",overlaySpeed:250,lightboxSpeed:300,closeSelector:".close",closeClick:!0,closeEsc:!0,destroyOnClose:!1,
showOverlay:!0,parentLightbox:!1,onLoad:function(){},onClose:function(){},classPrefix:"lb",zIndex:999,centered:!1,modalCSS:{top:"40px"},overlayCSS:{background:"black",opacity:0.3}}})(jQuery);