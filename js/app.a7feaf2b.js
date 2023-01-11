(function(t){function e(e){for(var s,l,i=e[0],r=e[1],c=e[2],p=0,u=[];p<i.length;p++)l=i[p],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&u.push(n[l][0]),n[l]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);d&&d(e);while(u.length)u.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,i=1;i<a.length;i++){var r=a[i];0!==n[r]&&(s=!1)}s&&(o.splice(e--,1),t=l(l.s=a[0]))}return t}var s={},n={app:0},o=[];function l(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=s,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(a,s,function(e){return t[e]}.bind(null,s));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var d=r;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container",attrs:{id:"app"}},[t._m(0),e("div",{staticClass:"d-lg-flex"},[t._m(1),e("div",{staticClass:"dashboard-content mt-4"},[e("div",[e("SummeryReport"),e("h5",{staticClass:"card-heading"},[t._v("Analytics Overview")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-8 col-lg-70 mb-3"},[e("ProgressChart")],1),e("div",{staticClass:"col-lg-4 col-lg-30 mb-3"},[e("div",{staticClass:"card card-body h-100"},[e("h5",{staticClass:"card-subheading"},[t._v("Cost Breakdown")]),e("DoughnutChart")],1)])]),e("LineChart",{staticClass:"mb-3"}),e("div",{staticClass:"page-seperator"},[t._v("Orders Report")]),e("OrdersReport"),e("div",{staticClass:"page-seperator"},[t._v("Print on Demand Report ")]),e("PrintOnDemandReport",{staticClass:"mb-4"}),e("div",{staticClass:"page-seperator"},[t._v("Profit Report")]),e("ProfitReport"),e("div",{staticClass:"page-seperator"},[t._v("Marketing Report")]),e("MarketingReport",{staticClass:"mb-4"}),e("div",{staticClass:"page-seperator"},[t._v("Metrics Report")]),e("MetricsReport")],1),e("Footer")],1)])])},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-white",staticStyle:{height:"58px",display:"flex","align-items":"center",padding:"0 40px"}},[e("div",{staticStyle:{"font-size":"24px","font-weight":"700","font-family":"'Poppins'"}},[t._v("Logo")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-fill border-right bg-secondary",staticStyle:{opacity:"0.4","margin-right":"15px",width:"200px"}},[e("div")])}],l=function(){var t=this,e=t._self._c;return e("Doughnut",{attrs:{"chart-options":t.chartOptions,"chart-data":t.chartData,"chart-id":t.chartId,"dataset-id-key":t.datasetIdKey,plugins:t.plugins,"css-classes":t.cssClasses,height:t.height,width:t.width,styles:t.styles}})},i=[],r=(a("14d9"),a("7b97"));const c=(t,e)=>{const a=document.getElementById(e);let s=a.querySelector("ul");return s||(s=document.createElement("ul"),s.classList.add("chart-line-legend"),s.style.display="flex",s.style.flexDirection="row",s.style.flexWrap="wrap",s.style.justifyContent="center",s.style.gap="10px",s.style.margin=0,s.style.marginBottom="0",s.style.padding=0,a.appendChild(s)),s},d={id:"htmlLegend",afterUpdate(t,e,a){const s=c(t,a.containerID);while(s.firstChild)s.firstChild.remove();const n=t.options.plugins.legend.labels.generateLabels(t);n.forEach(e=>{const a=document.createElement("li");a.style.display="flex",a.style.flexDirection="row",a.style.alignItems="center";const n=document.createElement("div");n.classList.add("legend-content"),n.style.alignItems="center",n.style.cursor="pointer",n.style.display="flex",n.style.flexDirection="row",n.style.alignItems="center",n.style.fontSize="12px",n.style.fontWeight="500",n.style.marginLeft="10px",n.onclick=()=>{const{type:a}=t.config;"pie"===a||"doughnut"===a?t.toggleDataVisibility(e.index):t.setDatasetVisibility(e.datasetIndex,!t.isDatasetVisible(e.datasetIndex)),t.update()};const o=document.createElement("span");o.style.background=e.fillStyle,o.style.outline="1px solid "+e.strokeStyle,o.style.borderRadius="50%",o.style.display="flex",o.style.alignItems="center",o.style.justifyContent="center",o.style.marginRight="5px",o.style.width="17px",o.style.height="17px";const l=document.createElement("span");l.style.backgroundColor=e.hidden?"":e.strokeStyle,l.style.borderRadius="10px",l.style.display="inline-block",l.style.height="9px",l.style.width="9px",o.appendChild(l);const i=document.createElement("p");i.style.color=e.fontColor,i.style.margin=0,i.style.padding=0,i.style.userSelect="none";const r=document.createTextNode(e.text);i.appendChild(r);const c=document.createElement("span");c.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="15.384" height="15.384" viewBox="0 0 15.384 15.384" fill="currentColor">\n      <g>\n          <path d="M0,0H15.384V15.384H0Z" fill="none" />\n          <path d="M1.652,9.629A5.64,5.64,0,1,1,9.629,1.652,5.64,5.64,0,1,1,1.652,9.629ZM.9,5.641A4.738,4.738,0,1,0,5.641.9,4.743,4.743,0,0,0,.9,5.641ZM5.128,7.692V5.128a.513.513,0,0,1,1.025,0V7.692a.513.513,0,1,1-1.025,0Zm0-4.1a.513.513,0,1,1,.513.513A.513.513,0,0,1,5.128,3.59Z" transform="translate(2.051 2.051)" />\n      </g>\n  </svg>',c.style.width="18px",c.style.height="18px",c.style.marginLeft="5px",c.style.display="flex",c.style.cursor="pointer",c.style.color="#B8BED9",n.appendChild(o),n.appendChild(i),a.appendChild(n),a.appendChild(c),s.appendChild(a)})}};var p=a("f9a4"),u=a("b166"),m=a("2cf3");const g=function(t){let e=document.getElementById("chartjs-tooltip");const a=t.chart.canvas;e||(e=document.createElement("div"),e.id="chartjs-tooltip",e.innerHTML="<table></table>",t.chart.canvas.parentElement.appendChild(e));const s=t.tooltip;if(0===s.opacity)return void(e.style.opacity=0);function n(t){return t.lines}e.classList.remove("above","below","no-transform"),s.yAlign?e.classList.add(s.yAlign):e.classList.add("no-transform");let o=e.querySelector("table");if(s.body){const t=s.title||[],e=s.body.map(n);let a="<thead>";t.forEach((function(t){t=Object(u["a"])(Object(m["a"])(t,"PPpp",new Date),"MMMM, yyyy"),a+='<tr><th style="font-size: 16px; text-align: center; padding-bottom: 16px; font-weight: 600">'+t+"</th></tr>"})),a+="</thead><tbody>",e.forEach((function(t,e){let n=t[0]||"",o=t[1]||"";const l=s.labelColors[e];let i="color:"+l.borderColor;i+="; display: block; font-size: 25px; line-height: 12px";let r=`<span style="${i}">&bull;</span><span style="flex-grow: 1; margin-left: 6px">${n}</span><span style="font-weight:600; margin-left: 10px ">${o}</span>`;a+=`<tr><td style="display: flex; align-items: center; padding-bottom: 5px">${r}</td></tr>`})),a+="</tbody>",o.innerHTML=a}const l=t.chart.canvas.getBoundingClientRect(),{offsetLeft:i,offsetTop:r}=a,c=p["a"](s.options.bodyFont);e.style.display="block",e.style.backgroundColor="white",e.style.boxShadow="0px 3px 6px #00000030",e.style.borderRadius="6px",e.style.border="0.2px solid #B8BED947",e.style.opacity=1,e.style.position="absolute",e.style.left=i+s.caretX+20+"px",l.width/2<s.caretX&&(e.style.left=i+s.caretX-o.offsetWidth-35+"px"),e.style.top=r+s.height/2+"px",e.style.font=c.string,e.style.padding=s.padding+"px "+s.padding+"px",e.style.pointerEvents="none",e.style.transition="opacity 0.1s ease-in-out, top 0.1s ease-in-out, left 0.1s ease-in-out",e.style.padding="8px",e.style.width="max-content"},f=function(t){const e="chartjs-doughnut-tooltip";let a=document.getElementById(e);const s=t.chart.canvas;a||(a=document.createElement("div"),a.id=e,a.classList.add("chart-pie-tooltip"),a.innerHTML='<div class="legend-content"></div>',s.parentElement.style.position="relative",s.parentElement.appendChild(a));const n=t.chart.tooltip;if(0===n.opacity)return;if(n.body){const t=n.body.map(t=>t.lines);let e="";t.forEach((function(t,a){let s=t[0]||"",o=t[1]||"";const l=n.labelColors[a];e+=`<div style="color: ${l.backgroundColor}; font-size: 15px; line-height: 1; margin-bottom: 10px;">${s}</div>`,e+=`<div style="color: #283977; font-size: 16px; line-height: 1">${o}</div>`})),a.innerHTML=`<div class="legend-content">${e}</div>`}const o=parseInt(n.dataPoints[0].dataset.cutout||"55%"),l=p["a"](n.options.bodyFont);a.style.display="flex",a.style.justifyContent="center",a.style.alignItems="center",a.style.textAlign="center",a.style.opacity=1,a.style.position="absolute",a.style.inset=`${(100-o)/2+10}% ${(100-o)/2+5}%`,a.style.font=l.string,a.style.fontWeight=600,a.style.pointerEvents="none",a.style.transition="opacity 0.1s ease-in-out, top 0.1s ease-in-out, left 0.1s ease-in-out"},b={afterDraw:t=>{t.tooltip._active&&t.tooltip._active.length&&t.tooltip.getActiveElements().length||(t.tooltip.setActiveElements([{datasetIndex:0,index:0}]),t.update())}};var h=a("dd61");h["e"].register(h["q"],h["r"],h["g"],h["a"],h["d"]);var y=function(){return Math.round(9e5*Math.random()+100)};const v=[{label:"Revenue",color:"#283977"},{label:"Net Profit",color:"#55efc4"},{label:"Marketing Costs",color:"#ff9e0e"},{label:"COGS & POD Costs",color:"#0058ff"},{label:"Other Costs",color:"#ff607b"}],_=v.map(t=>t.label),C={backgroundColor:v.map(t=>t.color),data:v.map(()=>y()),borderRadius:5,cutout:"70%",hoverBorderWidth:0,hoverOffset:15};var x={name:"DoughnutChart",components:{Doughnut:r["a"]},props:{chartId:{type:String,default:"doughnut-chart"},datasetIdKey:{type:String,default:"label"},width:{type:Number,default:-1},height:{type:Number,default:-1},cssClasses:{default:"",type:String},styles:{type:Object,default:()=>{}},plugins:{type:Array,default:()=>[b]}},data(){return{chartData:{labels:_,datasets:[C]},chartOptions:{responsive:!0,maintainAspectRatio:!1,showAllTooltips:!0,layout:{padding:{top:7,bottom:7}},plugins:{tooltip:{enabled:!1,external:f,callbacks:{label:function(t){let e=[t.label||""];return null!==t.parsed&&e.push(new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t.parsed)),e}}},legend:{display:!1}},interaction:{mode:"nearest",intersect:!0}}}}},w=x,M=a("2877"),k=Object(M["a"])(w,l,i,!1,null,null,null),S=k.exports,P=function(){var t=this,e=t._self._c;return e("footer",{staticClass:"text-grey"},[e("div",{staticClass:"py-5 text-center d-flex justify-content-center align-items-center"},[e("svg",{staticStyle:{width:"20px",height:"20px","margin-right":"5px"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"15.384",height:"15.384",viewBox:"0 0 15.384 15.384",fill:"currentColor"}},[e("g",[e("path",{attrs:{id:"Grid",d:"M0,0H15.384V15.384H0Z",fill:"none"}}),e("path",{attrs:{id:"Mask",d:"M1.652,9.629A5.64,5.64,0,1,1,9.629,1.652,5.64,5.64,0,1,1,1.652,9.629ZM.9,5.641A4.738,4.738,0,1,0,5.641.9,4.743,4.743,0,0,0,.9,5.641ZM5.128,7.692V5.128a.513.513,0,0,1,1.025,0V7.692a.513.513,0,1,1-1.025,0Zm0-4.1a.513.513,0,1,1,.513.513A.513.513,0,0,1,5.128,3.59Z",transform:"translate(2.051 2.051)"}})])]),t._m(0)]),e("div",{staticClass:"page-seperator-border"}),t._m(1)])},D=[function(){var t=this,e=t._self._c;return e("p",{staticClass:"mb-0"},[t._v("Learn more about "),e("a",{attrs:{href:"#"}},[t._v("Financial Dashboard")]),t._v(".")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"py-3 px-5"},[e("p",{staticClass:"mb-0 text-center text-lg-left"},[t._v("@ Copyright Syncost. All rights reserved.")])])}],O={},V=Object(M["a"])(O,P,D,!1,null,null,null),R=V.exports,A=function(){var t=this,e=t._self._c;return e("simplebar",{staticClass:"card card-body"},[e("h5",{staticClass:"card-heading"},[t._v("Overview")]),e("div",{staticClass:"chart-line-wrapper"},[e("div",{attrs:{id:"legend-container"}}),e("LineChartGenerator",{staticStyle:{height:"500px"},attrs:{id:"my-chart-id","chart-options":t.chartOptions,plugins:t.plugins,"chart-data":t.chartData}})],1)])},T=[],I=a("8d3b"),j=a("368d");a("8e16");h["e"].register(h["q"],h["r"],h["g"],h["i"],h["j"],h["d"],h["l"],h["p"]);var L=function(){return Math.round(900*Math.random()+100)};const Y=["2022-01-01","2022-02-01","2022-03-01","2022-04-01","2022-05-01","2022-06-01","2022-07-01","2022-08-01","2022-09-01","2022-10-01","2022-11-01","2022-12-01"],B=function(t,e){return{label:t,backgroundColor:e,borderColor:e,pointHoverBorderColor:e,pointBorderWidth:3,pointRadius:-1,pointBorderColor:e,pointBackgroundColor:"white",pointHoverBackgroundColor:"white",pointHoverRadius:5,pointHoverBorderWidth:3,data:Y.map(()=>L())}},E=[{label:"Revenue",color:"#283977"},{label:"Net Profit",color:"#55efc4"},{label:"Marketing Costs",color:"#ff9e0e"},{label:"COGS & POD Costs",color:"#0058ff"},{label:"Other Costs",color:"#ff607b"}].map(t=>B(t.label,t.color));h["e"].defaults.font.family='"Segoe UI", Tahoma, Geneva, Verdana, sans-serif';var U={name:"LineChart",components:{LineChartGenerator:j["a"],simplebar:I["a"]},data(){return{chartData:{labels:Y,datasets:E},chartOptions:{elements:{line:{tension:.4}},pointDotRadius:1,pointDotStrokeWidth:8,pointHitDetectionRadius:20,responsive:!0,maintainAspectRatio:!1,stacked:!1,interaction:{mode:"index",intersect:!1},scales:{y:{ticks:{padding:20,font:{size:14,weight:"bold",family:"'Poppins', sans-serif"},color:"#7E84A3",stepSize:200},beginAtZero:!0,grid:{drawBorder:!1}},x:{ticks:{color:"#7E84A3"},grid:{display:!1},type:"time",time:{unit:"month",displayFormats:{month:"MMM",quarter:"MMM YYYY",millisecond:"MMM YYYY",second:"MMM YYYY",minute:"MMM YYYY",hour:"MMM YYYY",day:"MMM YYYY",week:"MMM YYYY",year:"MMM YYYY"}}}},plugins:{htmlLegend:{containerID:"legend-container"},legend:{display:!1,labels:{usePointStyle:!0}},tooltip:{titleColor:"black",titleAlign:"center",titleMarginBottom:12,titleFont:{weight:"bold",size:18},bodyColor:"black",bodySpacing:5,bodyFont:{size:14},footerColor:"black",backgroundColor:"white",borderColor:"black",borderWidth:1,usePointStyle:!0,boxPadding:10,enabled:!1,external:g,callbacks:{label:function(t){let e=[t.dataset.label||""];return null!==t.parsed.y&&e.push(new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}).format(t.parsed.y)),e}}}}},plugins:[d]}}},Z=U,H=Object(M["a"])(Z,A,T,!1,null,null,null),F=H.exports,N=function(){var t=this,e=t._self._c;return e("LongCardMini",{attrs:{"is-dark-mode":!0,items:t.items}})},G=[];const $=function(t=1e5){const e=Math.round(Math.random()*t*9+t),a=new Intl.NumberFormat("en-US",{currency:"USD",style:"currency"}).format(e);return{value:e,formatedValue:a}},z=function(){let t=Math.round(90*Math.random()+10);return t<50&&(t*=-1),t};var W=function(){var t=this,e=t._self._c;return e("div",{staticClass:"long-mini-card row"},t._l(t.items,(function(s,n){return e("div",{key:n,staticClass:"long-mini-card-item",class:[t.columnClassName]},[e("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:s.tooltip||""},expression:"{ content: item.tooltip || '' }"}],staticClass:"card card-body card-mini card-mini-wide",class:{"card-mini-dark":t.isDarkMode}},[e("div",{staticClass:"card-content d-flex justify-content-center"},["printify"===s.logo?e("img",{staticStyle:{width:"20px",height:"20px","margin-top":"-3px","margin-right":"5px"},attrs:{src:a("8c34"),alt:"logo"}}):t._e(),"printful"===s.logo?e("img",{staticStyle:{width:"25px",height:"25px","margin-top":"-4px","margin-right":"5px"},attrs:{src:a("c2de"),alt:"logo"}}):t._e(),e("div",{staticClass:"text-center"},[e("div",{staticClass:"card-mini-title text-grey",style:[s.logo&&{fontWeight:"600",fontSize:"100%"}]},[t._v(t._s(s.label))]),e("div",{staticClass:"card-mini-amount mt-2"},[t._v(t._s(s.amount))])]),e("div",{staticClass:"card-mini-icon text-grey d-none"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"15.384",height:"15.384",viewBox:"0 0 15.384 15.384",fill:"currentColor"}},[e("g",[e("path",{attrs:{d:"M0,0H15.384V15.384H0Z",fill:"none"}}),e("path",{attrs:{d:"M1.652,9.629A5.64,5.64,0,1,1,9.629,1.652,5.64,5.64,0,1,1,1.652,9.629ZM.9,5.641A4.738,4.738,0,1,0,5.641.9,4.743,4.743,0,0,0,.9,5.641ZM5.128,7.692V5.128a.513.513,0,0,1,1.025,0V7.692a.513.513,0,1,1-1.025,0Zm0-4.1a.513.513,0,1,1,.513.513A.513.513,0,0,1,5.128,3.59Z",transform:"translate(2.051 2.051)"}})])])])])])])})),0)},q=[],X={name:"LongCardMini",props:{isDarkMode:{type:Boolean,default:!1},items:{type:Array,default:()=>[]}},computed:{itemsCount(){return this.items.length},columnClassName(){let t="";return this.itemsCount<3?t+=12/this.itemsCount:t+=4,t="col-12 col-sm-"+t,this.isFullWidth?"":t}}},J=X,K=Object(M["a"])(J,W,q,!1,null,null,null),Q=K.exports;function tt(t,e){return et({title:t,content:e})}function et(t){return`<div>\n    <div class="tooltip-title">${t.title}</div>\n    <div class="tooltip-content">${t.content}</div>\n</div>`}var at={revenue:tt("Revenue","<p><span>Includes: </span>Sales, Shipping charges, Taxes</p><p><span>Deducts: </span>Refund and Discounts</p>"),transaction_fees:tt("Transactions fees","<p><span>It is a flat amount + Percentage rate deducted per order that paid by PayPal, Shopify Payments, 3rd payment gateway or other Payment methods</span></p>"),sales:tt("Sales","<p><span>The Total of Product Price * Quantity</span></p>"),repeated_customers:tt("Repeated Customers","<p><span>The percentage (%) of the customers has been purchased multiples times from your store</span></p>"),refunds:tt("Refunds","<p><span>The total Refunds.</span></p><p>Refunds are counted by <span>Transaction Date</span>. You can change that to be counted by <span>order</span> date from Performance in settings</p>"),ad_spend_per_order:tt("Ad Spend Per Order","<p><span>Marketing costs / Total orders</span></p>"),shipping_charge:tt("Shipping charge","<p><span>Shipping charge per order * Total orders</span></p>"),avg_order_profit:tt("Avg. Order Profit","<p><span>Net Profit / Total orders</span></p>"),tiktok_ads:tt("TikTok Ads","<p><span>The total Campaigns Spend.</span></p><p>You can deduct specific campaign spending from the total through the TikTok Ads page.</p>"),google_ads:tt("Google Ads","<p><span>The total Campaigns Spend.</span></p><p>You can deduct specific campaign spending from the total through the Google Ads page.</p>"),facebook_ads:tt("Facebook Ads","<p><span>The total Campaigns Spend.</span></p><p>You can deduct specific campaign spending from the total through the Facebook Ads page.</p>"),avg_order_value:tt("Avg. Order value","<p><span>Revenue / Total orders</span></p>"),net_profit:tt("Net Profit","<p><span>Includes: </span>Revenue & Tips</p><p><span>Deducts: </span>COGS, POD Costs, Marketing Costs , taxes Refunds, Discounts, Custom cost, Transactions fees, Shipping & Handing fees.</p>"),marketing_costs:tt("Marketing costs","<p><span>Includes: </span>Facebook ads, Google Ads, and TikTok ads</p>"),printify_total_costs:tt("Printify Total Costs","<p><span>Including: </span>Production cost, Shipping Cost, Taxes.</p><p>Printify counted shipping surcharge into shipping cost and counted digital fee into production cost.</p><p>Production cost = Product cost</p>"),cogs_pod_total_costs:tt("COGS & POD Total Costs",'<p><span>Includes: </span>COGS, Printify Costs, and Printful Costs</p>\n    <ul class="list-group list-group-flush">\n      <li class="list-group-item d-flex justify-content-between"><span>COGS</span><span>$19,794.97</span></li>\n      <li class="list-group-item d-flex justify-content-between"><span>Printify Total Costs</span><span>$8,432.76</span></li>\n      <li class="list-group-item d-flex justify-content-between"><span>Printful Total Costs</span><span>$729,673,83</span></li>\n    </ul>'),printiful_total_costs:tt("Printiful Total Costs",'<p><span>Including: </span>Production cost, Shipping Cost, Taxes, Digitization and Shipping surcharge</p><p>Printify <span class="muted">counted shipping surcharge into shipping cost and counted digital fee into production cost.</span></p><p class="muted">Production cost = Product cost</p>')};const st=1e5;var nt={name:"MarketingReport",components:{LongCardMini:Q},data(){return{items:[{label:"Facebook Ads",amount:$(st).formatedValue,percentage:z(),tooltip:at.facebook_ads},{label:"Google Ads",amount:$(st).formatedValue,percentage:z(),tooltip:at.google_ads},{label:"TikTok Ads",amount:z()+"%",percentage:z(),tooltip:at.tiktok_ads}]}}},ot=nt,lt=Object(M["a"])(ot,N,G,!1,null,null,null),it=lt.exports,rt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},t._l(t.items,(function(t,a){return e("div",{key:a,staticClass:"col-lg-3 col-sm-6 mb-4"},[e("CardItem",{attrs:{index:a,item:t}})],1)})),0)},ct=[],dt=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:t.item.tooltip||""},expression:"{ content: item.tooltip || '' }"}]},[e(t.tag,{tag:"component",staticClass:"card",class:{"card-mini-dark":t.isDarkMode,"card-mini-list-scroll":t.item.child_items},style:[t.item.is_toggle_btn&&!1===t.item.enabled&&{"background-color":"#ffffff2e"}]},[e("div",{staticClass:"card-body card-mini"},[e("div",{staticClass:"card-mini-icon text-grey d-none"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"15.384",height:"15.384",viewBox:"0 0 15.384 15.384",fill:"currentColor"}},[e("g",[e("path",{attrs:{d:"M0,0H15.384V15.384H0Z",fill:"none"}}),e("path",{attrs:{d:"M1.652,9.629A5.64,5.64,0,1,1,9.629,1.652,5.64,5.64,0,1,1,1.652,9.629ZM.9,5.641A4.738,4.738,0,1,0,5.641.9,4.743,4.743,0,0,0,.9,5.641ZM5.128,7.692V5.128a.513.513,0,0,1,1.025,0V7.692a.513.513,0,1,1-1.025,0Zm0-4.1a.513.513,0,1,1,.513.513A.513.513,0,0,1,5.128,3.59Z",transform:"translate(2.051 2.051)"}})])])]),e("div",{staticClass:"d-flex justify-content-between card-mini-title-wrapper"},[e("div",{staticClass:"card-mini-title text-grey"},[t._v(t._s(t.item.label))]),t.item.is_toggle_btn?e("label",{staticClass:"switch",attrs:{for:"card-mini-checkbox-"+t.index}},[e("input",{attrs:{type:"checkbox",id:"card-mini-checkbox-"+t.index},domProps:{checked:t.item.enabled},on:{change:function(e){t.item.enabled=e.target.checked}}}),e("div",{staticClass:"slider round"})]):t.item.percentage?e("div",{staticClass:"card-mini-percentage ml-1",class:[t.item.percentage>=0?"text-green":"text-red"]},[e("span",[t._v(t._s(t.item.percentage)+"%")]),e("svg",{staticClass:"ml-1",class:{"rotate-180":t.item.percentage<0},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10.345",height:"10.345",viewBox:"0 0 10.345 10.345",fill:"currentColor"}},[e("path",{attrs:{id:"Path_10522","data-name":"Path 10522",d:"M6.651,0H3.326a.665.665,0,0,0,0,1.33h1.72L.195,6.181a.665.665,0,1,0,.94.94L5.986,2.271v1.72a.665.665,0,1,0,1.33,0V.665A.665.665,0,0,0,6.651,0Z",transform:"matrix(0.695, -0.719, 0.719, 0.695, 0, 5.263)"}})])]):t._e()]),e("div",{staticClass:"d-flex justify-content-between align-items-end mt-2"},[e("div",{staticClass:"card-mini-amount"},[t._v(t._s(t.item.amount))]),t.item.symbol?e("div",{staticClass:"card-mini-currency text-grey"},[t._v(t._s(t.item.symbol))]):t._e()]),t.item.child_items?e("div",{staticClass:"card-mini-list"},[e("ul",t._l(t.item.child_items,(function(a,s){return e("li",{key:s},[e("span",[t._v(t._s(a.label))]),e("span",[t._v(t._s(a.amount))])])})),0)]):t._e()])])],1)},pt=[],ut={name:"CardItem",components:{simplebar:I["a"]},props:{index:{type:Number,default:1},isDarkMode:{type:Boolean,default:!1},item:{type:Object,default:()=>({})}},computed:{tag(){return this.item.child_items?"simplebar":"div"}}},mt=ut,gt=Object(M["a"])(mt,dt,pt,!1,null,null,null),ft=gt.exports;const bt=1e5;var ht={name:"MetricsReport",data(){return{items:[{label:"Ad Spend Per Order",amount:$(100).formatedValue,percentage:z(),symbol:"USD",is_toggle_btn:!1,enabled:!1,tooltip:at.ad_spend_per_order},{label:"Avg. Order Value",amount:$(bt).formatedValue,percentage:z(),symbol:"USD",is_toggle_btn:!1,enabled:!1,tooltip:at.avg_order_value},{label:"Avg. Profit Value",amount:$(bt).formatedValue,percentage:z(),symbol:"USD",is_toggle_btn:!1,enabled:!1,tooltip:at.avg_order_profit},{label:"Repeat Customer",amount:z()+"%",percentage:z(),symbol:$(10).value+" Customers",is_toggle_btn:!1,enabled:!1,tooltip:at.repeated_customers}]}},components:{CardItem:ft}},yt=ht,vt=Object(M["a"])(yt,rt,ct,!1,null,null,null),_t=vt.exports,Ct=function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-9"},[e("div",{staticClass:"row"},t._l(t.items,(function(t,a){return e("div",{key:a,staticClass:"col-lg-4 col-sm-6 mb-4"},[e("CardItem",{attrs:{index:a,item:t}})],1)})),0)]),e("div",{staticClass:"col-lg-3"},[e("div",{staticClass:"row"},t._l(t.customItems,(function(t,a){return e("div",{key:a,staticClass:"col-lg-12 col-sm-6 mb-4"},[e("CardItem",{attrs:{index:a,item:t}})],1)})),0)])])},xt=[];const wt=1e5;var Mt={name:"OrdersReport",components:{CardItem:ft},data(){return{items:[{label:"Orders",amount:$(wt).value,percentage:z(),symbol:"",is_toggle_btn:!1,enabled:!1},{label:"Sales",amount:$(wt).formatedValue,percentage:z(),symbol:"USD",is_toggle_btn:!1,enabled:!1,tooltip:at.sales},{label:"Transactions fees",amount:$(wt).formatedValue,percentage:z(),symbol:"USD",is_toggle_btn:!1,enabled:!1,tooltip:at.transaction_fees},{label:"Tax Charged",amount:$(wt).formatedValue,percentage:z(),symbol:"USD",is_toggle_btn:!0,enabled:!0},{label:"Shipping Charged",amount:$(wt).formatedValue,percentage:z(),symbol:"USD",is_toggle_btn:!1,enabled:!1,tooltip:at.shipping_charge},{label:"Shipping Costs",amount:$(wt).formatedValue,percentage:z(),symbol:"USD",is_toggle_btn:!1,enabled:!1},{label:"Discounts",amount:$(wt).formatedValue,percentage:z(),symbol:"USD",is_toggle_btn:!1,enabled:!1},{label:"Refunds",amount:$(wt).formatedValue,percentage:z(),symbol:"USD",is_toggle_btn:!1,enabled:!1,tooltip:at.refunds},{label:"Handing fees",amount:$(wt).formatedValue,percentage:z(),symbol:"USD",is_toggle_btn:!1,enabled:!1}],customItems:[{label:"Custom costs",amount:$(wt).formatedValue,percentage:z(),symbol:"USD",is_toggle_btn:!0,enabled:!1,tooltip:at.order,child_items:[{label:"Software Subscriptions",amount:$(wt).formatedValue},{label:"Payroll",amount:$(wt).formatedValue},{label:"Rent",amount:$(wt).formatedValue},{label:"Internet Services",amount:$(wt).formatedValue},{label:"Company Car",amount:$(wt).formatedValue},{label:"Supplies, ecx product cost",amount:$(wt).formatedValue},{label:"Offline Advertising",amount:$(wt).formatedValue},{label:"Legal fees",amount:$(wt).formatedValue},{label:"Phone bills",amount:$(wt).formatedValue},{label:"Equipment",amount:$(wt).formatedValue},{label:"bank fees and Interest",amount:$(wt).formatedValue},{label:"Utilities",amount:$(wt).formatedValue},{label:"Other",amount:$(wt).formatedValue}]},{label:"Tips",amount:$(wt).formatedValue,percentage:z(),symbol:"USD",is_toggle_btn:!1,enabled:!1}]}}},kt=Mt,St=Object(M["a"])(kt,Ct,xt,!1,null,null,null),Pt=St.exports,Dt=function(){var t=this,e=t._self._c;return e("LongCardMini",{attrs:{"is-dark-mode":!0,items:t.items}})},Ot=[];const Vt=1e5;var Rt={name:"PrintOnDemandReport",components:{LongCardMini:Q},data(){return{items:[{label:"Printify Total Costs",amount:$(Vt).formatedValue,logo:"printify",tooltip:at.printify_total_costs},{label:"Printful Total Costs",amount:$(Vt).formatedValue,logo:"printful",tooltip:at.printiful_total_costs}]}}},At=Rt,Tt=Object(M["a"])(At,Dt,Ot,!1,null,null,null),It=Tt.exports,jt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},t._l(t.items,(function(t,a){return e("div",{key:a,staticClass:"col-lg-3 col-sm-6 mb-4"},[e("CardItem",{attrs:{index:a,item:t,"is-dark-mode":!0}})],1)})),0)},Lt=[];const Yt=1e5;var Bt={name:"ProfitReport",data(){return{items:[{label:"Net Profit",amount:$(Yt).formatedValue,percentage:z(),symbol:"USD",is_toggle_btn:!1,enabled:!1,tooltip:at.net_profit},{label:"Gross Profit",amount:$(Yt).formatedValue,percentage:z(),symbol:"USD",is_toggle_btn:!1,enabled:!1},{label:"Net Margin",amount:z()+"%",percentage:z(),symbol:"USD",is_toggle_btn:!1,enabled:!1},{label:"Gross Margin",amount:z()+"%",percentage:z(),symbol:"USD",is_toggle_btn:!1,enabled:!1}]}},components:{CardItem:ft}},Et=Bt,Ut=Object(M["a"])(Et,jt,Lt,!1,null,null,null),Zt=Ut.exports,Ht=function(){var t=this,e=t._self._c;return e("simplebar",{ref:"alBox",staticClass:"card card-body h-100"},[e("div",{staticClass:"al-box-container"},[e("div",{staticClass:"al-box"},[e("ul",{staticClass:"al-box-list"},t._l(t.datasets,(function(a,s){return e("li",{key:s,class:{"flex-fill":2===s}},[2===s?e("div",{staticClass:"al-box-list-float"},[e("div",{staticClass:"al-box-list-float-wrapper"},[e("div",{staticClass:"al-box-list-float-title"},[t._v(t._s(a.label))]),e("div",{staticClass:"al-box-list-float-subtitle"},[t._v(t._s(a.formatedValue))])])]):e("div",{staticClass:"al-box-list-content"},[e("div",{staticClass:"al-box-list-title"},[t._v(t._s(a.formatedValue))]),e("div",{staticClass:"al-box-list-subtitle",style:{color:a.color}},[t._v(t._s(a.label))])])])})),0)]),e("div",{staticStyle:{display:"flex","margin-top":"15px","margin-bottom":"10px"}},t._l(t.stackdatasets,(function(a,s){return e("div",{key:s,style:[t.stackdatasets.length===s+1&&{flex:1},{marginLeft:0!==s?"-4px":"",display:"block",backgroundColor:a.color,borderRadius:"8px",height:"8px",width:a.percentage}]})})),0)])])},Ft=[],Nt=(a("13d5"),function(){const t=Math.round(8e4*Math.random()+2e4),e=new Intl.NumberFormat("en-US",{currency:"USD",style:"currency"}).format(t);return{value:t,formatedValue:e}}),Gt={name:"ProgressBar",components:{simplebar:I["a"]},data(){return{datasets:[{label:"Net Profit",color:"#55efc4",...Nt(),is_box:!1},{label:"Marketing Costs",color:"#ff9e0e",...Nt(),is_box:!1},{label:"Revenue",color:"#283977",...Nt(),is_box:!0},{label:"COGS & POD Costs",color:"#0058ff",...Nt(),is_box:!1},{label:"Other Costs",color:"#ff607b",...Nt(),is_box:!1}]}},computed:{stackdatasets(){const t=this.datasets.filter(t=>!t.is_box).reduce((t,e)=>t+e.value,0);return this.datasets.filter(t=>!t.is_box).map(e=>(e.percentage=100/t*e.value+"%",e))},floatboxdataset(){return this.datasets.find(t=>t.is_box)}},mounted(){const t=this.$refs.alBox,e=function(){const e=t.$el.querySelector(".simplebar-content-wrapper");e.scrollTo(e.scrollWidth/2-e.offsetWidth/2+parseFloat(e.children[0].style.paddingLeft)/2,0)};window.addEventListener("resize",e),window.addEventListener("load",e)}},$t=Gt,zt=Object(M["a"])($t,Ht,Ft,!1,null,null,null),Wt=zt.exports,qt=function(){var t=this,e=t._self._c;return e("div",[e("h5",{staticClass:"card-heading"},[t._v("Summary Report")]),e("div",{},[e("simplebar",{staticClass:"card card-body mb-3"},[e("div",{staticClass:"summary-wrapper"},t._l(t.summery_reports,(function(a,s){return e("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:a.tooltip||""},expression:"{ content: item.tooltip || '' }"}],key:s,staticClass:"summary-item",class:{"border-l-1":0!==s}},[e("div",{staticClass:"summary-subtitle"},[e("span",[t._v(t._s(a.label))]),e("span",{staticClass:"summary-icon d-none"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"15.384",height:"15.384",viewBox:"0 0 15.384 15.384",fill:"currentColor"}},[e("g",[e("path",{attrs:{d:"M0,0H15.384V15.384H0Z",fill:"none"}}),e("path",{attrs:{d:"M1.652,9.629A5.64,5.64,0,1,1,9.629,1.652,5.64,5.64,0,1,1,1.652,9.629ZM.9,5.641A4.738,4.738,0,1,0,5.641.9,4.743,4.743,0,0,0,.9,5.641ZM5.128,7.692V5.128a.513.513,0,0,1,1.025,0V7.692a.513.513,0,1,1-1.025,0Zm0-4.1a.513.513,0,1,1,.513.513A.513.513,0,0,1,5.128,3.59Z",transform:"translate(2.051 2.051)"}})])])])]),e("div",{staticClass:"summary-title"},[t._v(t._s(a.value.formatedValue))]),e("div",{staticClass:"summary-percentage",class:[a.percentage>=0?"text-green":"text-red"]},[e("span",[t._v(t._s(a.percentage)+"%")]),e("svg",{staticClass:"summary-percentage-icon ml-1",class:{"rotate-180":a.percentage<0},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a.75.75 0 01-.75-.75V4.66L7.3 6.76a.75.75 0 11-1.1-1.02l3.25-3.5a.75.75 0 011.1 0l3.25 3.5a.75.75 0 01-1.1 1.02l-1.95-2.1v12.59A.75.75 0 0110 18z","clip-rule":"evenodd"}})])])])})),0)])],1)])},Xt=[],Jt={name:"SummeryReport",components:{simplebar:I["a"]},data(){return{summery_reports:[{label:"Revenue",color:"#283977",value:$(),percentage:z(),tooltip:at.revenue},{label:"Net Profit",color:"#55efc4",value:$(),percentage:z(),tooltip:at.net_profit},{label:"Marketing Costs",color:"#ff9e0e",value:$(),percentage:z(),tooltip:at.marketing_costs},{label:"COGS & POD Costs",color:"#0058ff",value:$(),percentage:z(),tooltip:at.cogs_pod_total_costs},{label:"Other Costs",color:"#ff607b",value:$(),percentage:z(),tooltip:""}]}}},Kt=Jt,Qt=Object(M["a"])(Kt,qt,Xt,!1,null,null,null),te=Qt.exports,ee={name:"App",components:{LineChart:F,ProgressChart:Wt,DoughnutChart:S,SummeryReport:te,OrdersReport:Pt,ProfitReport:Zt,MarketingReport:it,PrintOnDemandReport:It,MetricsReport:_t,Footer:R},data(){return{isContainerFluid:!1}}},ae=ee,se=Object(M["a"])(ae,n,o,!1,null,null,null),ne=se.exports,oe=a("003c"),le=(a("5716"),a("f138"),a("78a7"),{themes:{tooltip:{placement:"bottom",html:!0,autoSize:!0}}});s["a"].config.productionTip=!1,s["a"].use(oe["a"],le),new s["a"]({render:t=>t(ne)}).$mount("#app")},"78a7":function(t,e,a){},"8c34":function(t,e,a){t.exports=a.p+"img/printify.20c7c989.svg"},c2de:function(t,e,a){t.exports=a.p+"img/printful.750b15bc.svg"}});
//# sourceMappingURL=app.a7feaf2b.js.map