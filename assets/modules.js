const modules = {
  
    n0: `
  	    <dialog id="dialog-max" class="max">
  <nav>
    <button class="circle transparent">
      <i>check_box</i>
    </button>
    <button class="circle transparent">
      <i>brush</i>
    </button>
    <button class="circle transparent">
      <i>mic</i>
    </button>
    <button class="circle transparent">
      <i>image</i>
    </button>
	    		<button class="circle transparent" data-ui="#menu-menu">
          <i><span class="material-symbols-outlined">candlestick_chart</span></i><menu id="menu-menu" data-ui="menu-menu" class="no-wrap">
            <a href="widget_tw_chart_mini.html" class="row"><i><span class="material-symbols-outlined">candlestick_chart</span></i><div class="max">Mini Chart</div></a>
            <a href="widget_tw_chart_advanced.html" class="row"><i><span class="material-symbols-outlined">candlestick_chart</span></i><div class="max">Advanced Chart</div></a>
            <a href="widget_tw_chart_personal.html" class="row"><i><span class="material-symbols-outlined">candlestick_chart</span></i><div class="max">Personal Chart</div></a>
			<a href="widget_tw_chart_heatmap.html" class="row"><i><span class="material-symbols-outlined">candlestick_chart</span></i><div class="max">Heatmap</div></a>
          </menu>
        </button>
	 <button class="transparent circle" onclick="updateTheme()"><i id="dark" style="display: none">light_mode</i><i id="light">dark_mode</i></button>
      <button class="transparent circle" onclick="refresh()"><i>refresh</i></button>
    <div class="max"></div>

  </nav>
  
  
  
  
  
     
	  
	  
	  
	  
      <nav class="right-align">
        <button data-ui="#dialog-max" class="border">Cancel</button>
        <button data-ui="#dialog-max">Confirm</button>
      </nav>
   </dialog>   
  `,  
  
  
  n1: `

    <header>
      <nav>
    <span class="circle logo"></span>
 

      </nav>
    </header>
	  <a href="index.html"><i>home</i><div>Головна</div></a>
	  <a href="codes.html"><i>touch_app</i><div>Коди</div></a>
	  <a href="combo.html"><i>widgets</i><div>Комбо</div></a>	  
	  <a href="game.html"><i>pan_tool</i><div>Тапалка</div></a>
      <a href="#" data-ui="#dialog-max"><i>menu</i><div>Больше</div></a>
	  
	  
	     

  

  


  

  

	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
    <div class="small-divider"></div>
    <label class="grey-text">TradingView Widget</label>
	  <a href="widget_tw_chart_mini.html"><i><span class="material-symbols-outlined">candlestick_chart</span></i><div>Mini Chart</div></a>
	  <a href="widget_tw_chart_advanced.html"><i><span class="material-symbols-outlined">candlestick_chart</span></i><div>Advanced Chart</div></a>
	  <a href="widget_tw_chart_personal.html"><i><span class="material-symbols-outlined">candlestick_chart</span></i><div>Personal Chart</div></a>
	  <a href="widget_tw_chart_heatmap.html"><i><span class="material-symbols-outlined">candlestick_chart</span></i><div>Heatmap</div></a>
      <a href="widget_tw_chart_portfolio_1.html"><i><span class="material-symbols-outlined">candlestick_chart</span></i><div>Portfolio 1</div></a>
      <a href="widget_tw_chart_mini_week.html"><i><span class="material-symbols-outlined">candlestick_chart</span></i><div>Mini Chart Week</div></a>
      <a href="widget_tw_chart_mini_month.html"><i><span class="material-symbols-outlined">candlestick_chart</span></i><div>Mini Chart Month</div></a>	  
      <a href="widget_tw_chart_mini_year.html"><i><span class="material-symbols-outlined">candlestick_chart</span></i><div>Mini Chart Year</div></a>	  

  `,
  n2: `
	
    <header><span class="circle logo"></span></header>
	  <a href="index.html"><i>home</i><label>Головна</label></a>
	  <a href="codes.html"><i>touch_app</i><label>Коди</label></a>
	  <a href="combo.html"><i>widgets</i><label>Комбо</label></a>
	  <a href="game.html"><i>pan_tool</i><label>Тапалка</label></a>
      <a href="#" data-ui="#dialog-max"><i>menu</i><div>Больше</div></a>
    <div class="divider"></div>
	<a href="widget_tw_chart_mini.html"><i><span class="material-symbols-outlined">candlestick_chart</span></i><label>Mini</label></a>
	<a href="widget_tw_chart_advanced.html"><i><span class="material-symbols-outlined">candlestick_chart</span></i><label>Advanced</label></a>
    <a href="widget_tw_chart_personal.html"><i><span class="material-symbols-outlined">candlestick_chart</span></i><label>Personal</label></a>
    <a href="widget_tw_chart_heatmap.html"><i><span class="material-symbols-outlined">candlestick_chart</span></i><label>Heatmap</label></a>
	<a href="widget_tw_chart_portfolio_1.html"><i><span class="material-symbols-outlined">candlestick_chart</span></i><label>Portfolio 1</label></a>
	
  `,
    n3: `
<a href="index.html"><i>home</i><label>Головна</label></a>
	  <a href="codes.html"><i>touch_app</i><label>Коди</label></a>
	  <a href="combo.html"><i>widgets</i><label>Комбо</label></a>
	  <a href="game.html"><i>pan_tool</i><label>Тапалка</label></a>
      <a href="#" data-ui="#dialog-max"><i>menu</i><div>Больше</div></a>  
  `,
  n4: `
<nav> 


<h5 class="max center-align"></h5>
    		<button class="circle transparent s m" data-ui="#menu-menu">
          <i><span class="material-symbols-outlined">candlestick_chart</span></i><menu id="menu-menu" data-ui="menu-menu" class="no-wrap">
            <a href="widget_tw_chart_mini.html" class="row"><i><span class="material-symbols-outlined">candlestick_chart</span></i><div class="max">Mini Chart</div></a>
            <a href="widget_tw_chart_advanced.html" class="row"><i><span class="material-symbols-outlined">candlestick_chart</span></i><div class="max">Advanced Chart</div></a>
            <a href="widget_tw_chart_personal.html" class="row"><i><span class="material-symbols-outlined">candlestick_chart</span></i><div class="max">Personal Chart</div></a>
			<a href="widget_tw_chart_heatmap.html" class="row"><i><span class="material-symbols-outlined">candlestick_chart</span></i><div class="max">Heatmap</div></a>
          </menu>
        </button>
		
      <button class="transparent circle" onclick="updateTheme()"><i id="dark" style="display: none">light_mode</i><i id="light">dark_mode</i></button>
      <button class="transparent circle m l" onclick="refresh()"><i>refresh</i></button>
		
   
      <button class="transparent circle" data-ui="#more3"><i>menu</i></button>
	  <dialog class="right small" id="more3" data-ui="#more3">
	  <header class="fixed">
	  <nav><h5 class="max">Ресурси</h5><button class="transparent circle"><i>close</i></button></nav>
	  </header>
	  <p></p>
	  <nav class="drawer max no-padding">
	  <a href="https://coinmarketcap.com" target="_blank"><i>web</i><span>Coinmarketcap</span></a>
      <a href="https://www.tradingview.com/chart/" target="_blank"><i>web</i><span>Tradingview</span></a>
	  <a href="https://www.cryptocompare.com" target="_blank"><i>web</i><span>Cryptocompare</span></a>
	  <hr class="small">
	  <a href="https://dropstab.com/p/main-sqp8u3e9cf" target="_blank"><i>code</i><span>Portfolio</span></a>
	  </nav>
	  </dialog>
	  	 	  

    </nav>
  `
};

$(document).ready(function() { 
$('#nav-0').html(modules.n0);
$('#nav-1').html(modules.n1); 
$('#nav-2').html(modules.n2); 
$('#nav-3').html(modules.n3);
$('#nav-4').html(modules.n4);

$('#toggle-nav1').click(function(event) { event.preventDefault(); 
$('#nav-1').toggle(); // Переключает видимость контента 
}); 
});









