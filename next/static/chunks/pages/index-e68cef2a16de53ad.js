(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5728:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(1266)}])},6546:function(a,b,c){"use strict";c.d(b,{Z:function(){return k}});var d=c(5893),e=c(1163),f=c(1664),g=c.n(f),h=c(9008),i=c.n(h),j=[{id:1,title:"Главная",path:"/"},{id:2,title:"Окна и двери",path:"/opens"},{id:3,title:"Стеклопакеты",path:"/windows"},{id:4,title:"Цены",path:"/prices"}];function k(a){var b=a.children,c=a.title,f=(0,e.useRouter)().pathname;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i(),{children:(0,d.jsx)("title",{children:null!=c?c+" | ЦПИ-СПб":"Дешёвые окна | ЦПИ-СПб"})}),(0,d.jsxs)("div",{className:"layout",children:[(0,d.jsxs)("header",{className:"content",children:[(0,d.jsx)("img",{src:"",alt:"",className:"img-logo"}),(0,d.jsx)("nav",{children:j.map(function(a){var b=a.id,c=a.title,e=a.path;return(0,d.jsx)(g(),{href:e,children:(0,d.jsx)("a",{className:f===e?"nav-item active":"nav-item",children:c})},b)})}),(0,d.jsxs)("div",{className:"contacts",children:[(0,d.jsx)("div",{className:"contact phone",children:"+7 (777) 777-77-77"}),(0,d.jsx)("div",{className:"contact mail",children:"mail@mail.ru"})]}),(0,d.jsx)("div",{className:"btn btn-header",children:"Заказать расчёт"})]}),(0,d.jsx)("main",{children:b})]})]})}},1266:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return k}});var d=c(5893),e=c(6546),f=c(7294),g=[{id:1,src:"/static/slides/slide1.png",alt:""},{id:2,src:"/static/slides/slide4.png",alt:""},{id:3,src:"/static/slides/slide1.png",alt:""},{id:4,src:"/static/slides/slide4.png",alt:""},],h=function(){var a=function(a){l(Math.round(document.querySelector(".slide").getBoundingClientRect().width)*a),i(a);var b=Math.round(document.querySelector(".slide").getBoundingClientRect().width)*a;document.querySelector(".slides").style.marginLeft=-1*Math.round(b)+"px"},b=function(){if(h+1<document.querySelectorAll(".slide").length){l(Math.round(k)+Math.round(document.querySelector(".slide").getBoundingClientRect().width));var a=Math.round(k)+Math.round(document.querySelector(".slide").getBoundingClientRect().width);console.log(a),document.querySelector(".slides").style.marginLeft=-1*Math.round(a)+"px",i(h+1)}else document.querySelector(".slides").style.marginLeft="0px",l(0),i(0)},c=function(){if(h-1>=0){var a=Math.round(k)-Math.round(document.querySelector(".slide").getBoundingClientRect().width);console.log(a),document.querySelector(".slides").style.marginLeft=-1*Math.abs(Math.round(a))+"px",l(a),i(h-1)}else document.querySelector(".slides").style.marginLeft=-1*Math.abs((document.querySelectorAll(".slide").length-1)*Math.round(document.querySelector(".slide").getBoundingClientRect().width))+"px",console.log(-((document.querySelectorAll(".slide").length-1)*Math.round(document.querySelector(".slide").getBoundingClientRect().width)*1)),l((document.querySelectorAll(".slide").length-1)*Math.round(document.querySelector(".slide").getBoundingClientRect().width)),i(document.querySelectorAll(".slide").length-1)},e=(0,f.useState)(0),h=e[0],i=e[1],j=(0,f.useState)(0),k=j[0],l=j[1],m=(0,f.useState)(0);return m[0],m[1],(0,d.jsxs)("div",{className:"slider",children:[(0,d.jsx)("div",{className:"slide-control prev",onClick:function(){c()},children:(0,d.jsx)("img",{src:"/static/arrows/arrow-prev.svg",alt:"",className:"slide-control-arrow"})}),(0,d.jsx)("div",{className:"slider__content",children:(0,d.jsx)("div",{className:"slides",children:g.map(function(a){var b=a.id,c=a.src,e=a.alt;return(0,d.jsx)("img",{src:c,alt:e,className:"slide"},b)})})}),(0,d.jsx)("div",{className:"slide-control next",onClick:function(){b()},children:(0,d.jsx)("img",{src:"/static/arrows/arrow-next.svg",alt:"",className:"slide-control-arrow"})}),(0,d.jsx)("div",{className:"slider__navigation",children:g.map(function(b,c){var e;return e=c,(0,d.jsx)("div",{className:h===e?"slider__nav selected":"slider__nav",onClick:function(){a(e)}},e)})})]})},i=c(1664),j=c.n(i);function k(){return(0,d.jsxs)(e.Z,{title:"Главная",children:[(0,d.jsxs)("div",{className:"content",children:[(0,d.jsxs)("div",{className:"welcome-text",children:[(0,d.jsx)("h2",{className:"welcome-title",children:"Производство пластиковых, алюминиевых и деревянных окон в Санкт-Петербурге"}),(0,d.jsx)("div",{className:"welcome-par",children:"“Центр Промышленных Инноваций - СПб” приветствует Вас"})]}),(0,d.jsxs)("div",{className:"welcome-win",children:[(0,d.jsxs)("div",{className:"welcome-win-card",children:[(0,d.jsx)("img",{className:"welcome-win-card-img",src:"/static/dev_logo.png",alt:"dev logo"}),(0,d.jsx)("div",{className:"welcome-win-card-text",children:"Пластиковые окна"})]}),(0,d.jsxs)("div",{className:"welcome-win-card",children:[(0,d.jsx)("img",{className:"welcome-win-card-img",src:"/static/dev_logo.png",alt:"dev logo"}),(0,d.jsx)("div",{className:"welcome-win-card-text",children:"Алюминиевые окна"})]}),(0,d.jsxs)("div",{className:"welcome-win-card",children:[(0,d.jsx)("img",{className:"welcome-win-card-img",src:"/static/dev_logo.png",alt:"dev logo"}),(0,d.jsx)("div",{className:"welcome-win-card-text",children:"Деревянные окна"})]}),(0,d.jsxs)("div",{className:"welcome-win-card",children:[(0,d.jsx)("img",{className:"welcome-win-card-img",src:"/static/dev_logo.png",alt:"dev logo"}),(0,d.jsx)("div",{className:"welcome-win-card-text",children:"Дерево-алюминиевые окна"})]})]})]}),(0,d.jsx)(h,{}),(0,d.jsxs)("div",{className:"content",children:[(0,d.jsx)(j(),{href:"/sills",children:(0,d.jsxs)("div",{className:"category big",children:[(0,d.jsx)("img",{src:"/static/categories/sills.png",alt:"Подоконники",className:"category-img"}),(0,d.jsx)("div",{className:"category-name",children:"Подоконники"})]})}),(0,d.jsx)(j(),{href:"/",children:(0,d.jsxs)("div",{className:"category big",children:[(0,d.jsx)("img",{src:"/static/dev_logo.png",alt:"Подоконники",className:"category-img"}),(0,d.jsx)("div",{className:"category-name",children:"Стеклопакеты"})]})}),(0,d.jsx)(j(),{href:"/wos",children:(0,d.jsxs)("div",{className:"category big",children:[(0,d.jsx)("img",{src:"/static/categories/wos.jpg",alt:"Подоконники",className:"category-img"}),(0,d.jsx)("div",{className:"category-name",children:"Системы открывания окон"})]})}),(0,d.jsx)(j(),{href:"/drainages",children:(0,d.jsxs)("div",{className:"category min",children:[(0,d.jsx)("img",{src:"/static/categories/drainages.jpg",alt:"Подоконники",className:"category-img"}),(0,d.jsx)("div",{className:"category-name",children:"Водоотливы"})]})}),(0,d.jsx)(j(),{href:"/slopes",children:(0,d.jsxs)("div",{className:"category min",children:[(0,d.jsx)("img",{src:"/static/categories/slopes.jpg",alt:"Подоконники",className:"category-img"}),(0,d.jsx)("div",{className:"category-name",children:"Откосы"})]})}),(0,d.jsx)(j(),{href:"/mosqnets",children:(0,d.jsxs)("div",{className:"category min",children:[(0,d.jsx)("img",{src:"/static/categories/mosqnets.png",alt:"Подоконники",className:"category-img"}),(0,d.jsx)("div",{className:"category-name",children:"Москитные сетки"})]})}),(0,d.jsx)(j(),{href:"/fittings",children:(0,d.jsxs)("div",{className:"category min",children:[(0,d.jsx)("img",{src:"/static/categories/fittings.jpg",alt:"Подоконники",className:"category-img"}),(0,d.jsx)("div",{className:"category-name",children:"Фурнитура/ручки"})]})})]}),(0,d.jsxs)("div",{className:"content",children:[(0,d.jsx)("div",{className:"title",children:"Наши партнёры"}),(0,d.jsxs)("div",{className:"partner-imgs",children:[(0,d.jsx)("img",{src:"/static/partners/partner1.png",alt:"РОСАТОМ",className:"partner"}),(0,d.jsx)("img",{src:"/static/partners/partner2.png",alt:"КОНТУР",className:"partner"}),(0,d.jsx)("img",{src:"/static/partners/partner3.png",alt:"АРГОС",className:"partner"}),(0,d.jsx)("img",{src:"/static/partners/partner4.png",alt:"B2B Center",className:"partner"}),(0,d.jsx)("img",{src:"/static/partners/partner5.png",alt:"Фабрикант",className:"partner"}),(0,d.jsx)("img",{src:"/static/partners/partner6.svg",alt:"ТИТАН2",className:"partner"}),(0,d.jsx)("img",{src:"/static/partners/partner7.png",alt:"",className:"partner"})]})]})]})}}},function(a){a.O(0,[814,774,888,179],function(){var b;return a(a.s=5728)}),_N_E=a.O()}])