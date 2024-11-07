const modules = {
  n1: `

    <header>
      <nav>
    <span class="circle logo"></span>
 

      </nav>
    </header>
	  <a href="index.html"><i>home</i><div>Головна</div></a>
	  <a href="codes.html"><i>touch_app</i><div>Коди</div></a>
	  <a href="combo.html"><i>widgets</i><div>Комбо</div></a>
	  <a href="https://t.me/meltygame_bot"><i>rocket_launch</i><div>Бот</div></a>
	  <a href="notcoin/index.html"><i>pan_tool</i><div>Тапалка</div></a>
    <div class="small-divider"></div>
    <label class="grey-text">Курси </label>
	  <a href="wigetBTC.html"><i><span class="material-symbols-outlined">show_chart</span></i><div>BTC</div></a>
	  <a href="wigetTON.html"><i><span class="material-symbols-outlined">show_chart</span></i><div>TON</div></a>
	  <a href="priceTAB.html"><i><span class="material-symbols-outlined">show_chart</span></i><div>TON price v.1</div></a>
	  <a href="priceTON.html"><i><span class="material-symbols-outlined">show_chart</span></i><div>TON price v.2</div></a>

	  

  `,
  n2: `
	
    <header><span class="circle logo"></span></header>
	  <a href="index.html"><i>home</i><label>Головна</label></a>
	  <a href="codes.html"><i>touch_app</i><label>Коди</label></a>
	  <a href="combo.html"><i>widgets</i><label>Комбо</label></a>
	  <a href="https://t.me/meltygame_bot"><i>rocket_launch</i><label>Бот</label></a>
	  <a href="notcoin/index.html"><i>pan_tool</i><label>Тапалка</label></a>

    <div class="divider"></div>
	<a href="wigetBTC.html"><i><span class="material-symbols-outlined">show_chart</span></i><label>BTC</label></a>
	<a href="wigetTON.html"><i><span class="material-symbols-outlined">show_chart</span></i><label>TON </label></a>
    <a href="priceTAB.html"><i><span class="material-symbols-outlined">show_chart</span></i><label>TON price v.1 </label></a>
    <a href="priceTON.html"><i><span class="material-symbols-outlined">show_chart</span></i><label>TON price v.2 </label></a>
	
  `,
    n3: `
<a href="index.html"><i>home</i><label>Головна</label></a>
	  <a href="codes.html"><i>touch_app</i><label>Коди</label></a>
	  <a href="combo.html"><i>widgets</i><label>Комбо</label></a>
	  <a href="https://t.me/meltygame_bot"><i>rocket_launch</i><label>Бот</label></a>
	  <a href="notcoin/index.html"><i>pan_tool</i><label>Тапалка</label></a>	
  `,
  n4: `
<nav>	
<h5 class="max center-align"></h5>
    		<button class="circle transparent s m" data-ui="#menu-menu">
          <i><span class="material-symbols-outlined">candlestick_chart</span></i><menu id="menu-menu" data-ui="menu-menu" class="no-wrap">
            <a href="wigetBTC.html" class="row"><i><span class="material-symbols-outlined">show_chart</span></i><div class="max">BTC wiget</div></a>
            <a href="wigetTON.html" class="row"><i><span class="material-symbols-outlined">show_chart</span></i><div class="max">TON wiget</div></a>
            <a href="priceTAB.html" class="row"><i><span class="material-symbols-outlined">show_chart</span></i><div class="max">TON price v.1</div></a>
			<a href="priceTON.html" class="row"><i><span class="material-symbols-outlined">show_chart</span></i><div class="max">TON price v.2</div></a>
          </menu>
        </button>
		
      <button class="transparent circle" onclick="updateTheme()"><i id="dark" style="display: none">light_mode</i><i id="light">dark_mode</i></button>
      <button class="transparent circle m l" onclick="refresh()"><i>refresh</i></button>
	  <button class="transparent circle " href="#" id="toggle-nav1"><i>home</i></button>		
   
      <button class="transparent circle" data-ui="#more3"><i>menu</i></button>
	  <dialog class="right small" id="more3" data-ui="#more3">
	  <header class="fixed">
	  <nav><h5 class="max">Templates</h5><button class="transparent circle"><i>close</i></button></nav>
	  </header>
	  <p>All templates listed below are only for tests purpose. Feel free to study them.</p>
	  <nav class="drawer max no-padding">
	  <a href="/gmail"><i>mail</i><span>Gmail</span></a><a href="/material-design-3"><i>refresh</i><span>Material.io</span></a>
	  <a href="/dynamic-colors"><i>format_paint</i><span>Material Dynamic Colors</span></a>
	  <a href="/music-player"><i>play_arrow</i><span>Music Player</span></a>
	  <a href="/netflix"><i>tv</i><span>Netflix</span></a><a href="/reddit"><i>open_in_new</i><span>Reddit</span></a>
	  <a href="/uber"><i>directions_car</i><span>Uber</span></a><a href="/youtube"><i>smart_display</i><span>Youtube</span></a>
	  <hr class="small">
	  <a href="https://codepen.io/search/pens?q=beercss" target="_blank"><i>code</i><span>Codepen</span></a>
	  </nav>
	  </dialog>
	  	  	 	  

    </nav>
  `
};

$(document).ready(function() { 
$('#nav-1').html(modules.n1); 
$('#nav-2').html(modules.n2); 
$('#nav-3').html(modules.n3);
$('#nav-4').html(modules.n4);

$('#toggle-nav1').click(function(event) { event.preventDefault(); 
$('#nav-1').toggle(); // Переключает видимость контента 
}); 
});