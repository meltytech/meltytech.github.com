baseUrl = "https://widgets.cryptocompare.com/";
var scripts = document.getElementsByTagName("script");
var embedder = scripts[ scripts.length - 1 ];
var cccTheme = {"General":{"background":"#1c1b1e","borderColor":"#545454","borderRadius":"4px 4px 0 0"},"Header":{"background":"#000","color":"#FFF"},"Followers":{"background":"#f7931a","color":"#FFF","borderColor":"#e0bd93","counterBorderColor":"#fdab48","counterColor":"#f5d7b2"},"Data":{"priceColor":"#FFF","infoLabelColor":"#CCC","infoValueColor":"#CCC"},"Chart":{"fillColor":"rgba(86,202,158,0.5)","borderColor":"#56ca9e"},"Conversion":{"background":"#000","color":"#999"}};
(function (){
var appName = encodeURIComponent(window.location.hostname);
if(appName==""){appName="local";}
var s = document.createElement("script");
s.type = "text/javascript";
s.async = false;
var theUrl = baseUrl+'serve/v1/coin/chart?fsym=XRP&tsym=USD';
s.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
embedder.parentNode.appendChild(s);
})();