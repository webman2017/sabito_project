var color = function(e){
    $(".extra>svg>path").attr("fill", e);
 };
 $(document).ready(function(){
    if($("body").css("background-color") == "rgb(255, 255, 255)" || $("body").css("background-color") == "rgb(245, 247, 250)") {
       $(".extra>svg>path").attr("fill", "#000");
    }
 });
 
 let items = ["ZEzMpdj", "ZEzMpdj", "ZEzMpdj","ZEzMpdj", "LYPqaME", "OBPJKK", "KKPeOPm", "qBWVMop", "PoYepvR", "bpxgWZ", "evxZpZ", "MJKNJZ", "XPQyMo", "JXVpgp", "YNPaaQ", "QmXOOR", "MQRGOe", "zBLGYN", "mGGPXj", "VEZvdg", "XNQaym", "oXpWbd", "oPOVOL", "bqjBMv", "bvpprw", "oaWdOm", "bvgWrO", "ZMbLNM", "eZQKEr", "xywaoW", "yKOMmV", "YNyKpd", "ygNVYM", "QpwZqJ", "rNBZZqv", "gPmNwv", "pJjOGW", "Kxygqv", "QyBKvW", "azVXym", "obyLPe", "dNKKOw", "VPLgaV", "pNZzMg", "qJNRaL", "yNvKpp", "wgwdzr", "WNeEgZx", "LYPBQvW", "GRgZExW", "YzPxWyW", "LYEjxyG"];
 let num = ["one", "two", "three", "four", "five", "six"];
 let randomItem = `<a class="u-random" href="https://codepen.io/z-/details/${items[Math.floor(Math.random() * items.length)]}" target="_blank"><div class="u-card fas fa-dice-${num[Math.floor(Math.random() * num.length)]}"></div></a>`
 var button = button || false;
 
 if(window.location.href.indexOf("fullcpgrid") == -1 /*Small on pages*/ && window.location.href.indexOf("debug") /*...debug, mentioned for whenever I forget how to read code*/ == -1 && window.location.href.indexOf("fullembedgrid") == -1 /*Focused/details*/) { //Don't show on these pages
    document.body.innerHTML +=
    `<link href="https://codepen.io/z-/pen/a8e37caf2a04602ea5815e5acedab458.css" rel="stylesheet"><div style=position:fixed;bottom:-5rem;right:-5rem; id=user-button><div class=u-icons style=position:absolute;z-index:950;top:50%;left:50%;width:0;height:0%;opacity:0;><a href=https://twitter.com/Osorpenke target=_blank><div class="u-card fab fa-twitter"></div></a><a href=https://codepen.io/z- target=_blank><div class="u-card fab fa-codepen"></div></a>${randomItem}</div><div class="u-card u-main"style=position:relative;z-index:1000;width:4rem;height:4rem;display:grid;place-items:center;background:var(--user-button-background)><img alt=""style="height:100%; width:100%;"src=https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/happy.svg>${button?`<iframe frameborder=0 src=https://codepen.io/z-/posts/></iframe>`:``}</div></div>` //https://codepen.io/z-/pen/37f471adc6c5dba134cac86a34c93a61
 }//https://i.imgur.com/DZ3sYcD.png
 
 //fullcpgrid/a8e37caf2a04602ea5815e5acedab458