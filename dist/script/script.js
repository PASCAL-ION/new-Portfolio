
var __awaiter=this&&this.__awaiter||function(e,i,a,s){return new(a=a||Promise)(function(n,t){function o(e){try{c(s.next(e))}catch(e){t(e)}}function r(e){try{c(s.throw(e))}catch(e){t(e)}}function c(e){var t;e.done?n(e.value):((t=e.value)instanceof a?t:new a(function(e){e(t)})).then(o,r)}c((s=s.apply(e,i||[])).next())})},__generator=this&&this.__generator||function(o,r){var c,i,a,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},l={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function e(n){return function(e){var t=[n,e];if(c)throw new TypeError("Generator is already executing.");for(;s=l&&t[l=0]?0:s;)try{if(c=1,i&&(a=2&t[0]?i.return:t[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,t[1])).done)return a;switch(i=0,(t=a?[2&t[0],a.value]:t)[0]){case 0:case 1:a=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,i=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(a=0<(a=s.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3]))s.label=t[1];else if(6===t[0]&&s.label<a[1])s.label=a[1],a=t;else{if(!(a&&s.label<a[2])){a[2]&&s.ops.pop(),s.trys.pop();continue}s.label=a[2],s.ops.push(t)}}t=r.call(o,s)}catch(e){t=[6,e],i=0}finally{c=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}}},button=document.querySelector(".responsiveMenuButton"),responsiveNav=document.querySelector(".responsiveNav"),projectImage=document.querySelector("#image"),projectTitle=document.querySelector("#title"),projectText=document.querySelector("#text"),projectGithubLink=document.querySelector("#githubLink"),carouselContainer=document.querySelector(".container"),dotsContainer=document.querySelector(".dots"),progressBar=document.querySelector(".dots .progress"),progressionPercentage=document.querySelector(".dots .percent"),jsonPath="./projects.json";function getData(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,fetch(jsonPath)];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}})})}null!=button&&button.addEventListener("click",function(){responsiveNav.classList.toggle("open")}),getData().then(function(e){e.forEach(function(e,t){carouselContainer.innerHTML+=' \n        <div class="slide">\n          <div class="card" id='.concat(t,">\n            <img src=").concat(e.image," alt=").concat(e.alt,' id="image">\n            <div class="projectSummary">\n              <h1 id="title">').concat(e.title,'</h1>\n              <p id="text">').concat(e.text,'</p>\n              <div id="githubLink">\n                <img src="../images/github-logo.png" alt="">\n                <a href="">Project Github</a>\n              </div>\n            </div>\n          </div>\n        </div>')});var e=document.querySelector(".slide"),t=document.querySelectorAll(".slide"),o=e.offsetWidth,r=t.length*o,c=(t.forEach(function(e,t){var n=document.createElement("li");n.classList.add("dot"),dotsContainer.appendChild(n),n.setAttribute("id","".concat(t)),n.addEventListener("click",function(){var n;n=t,c.forEach(function(e){var t=parseInt(e.id);t===n&&(e.classList.add("activeStep"),e.classList.remove("completed"),carouselContainer.scrollTo({left:375*n,behavior:"smooth"})),t<n&&(e.classList.add("completed"),e.classList.remove("activeStep")),n<t&&(e.classList.remove("activeStep"),e.classList.remove("completed"))})})}),document.querySelectorAll(".dot"));carouselContainer.addEventListener("scroll",function(){var n,e=carouselContainer.scrollLeft,t=(console.log("ScrollLeft : ",e),carouselContainer.clientWidth),e=Math.round(e/t);n=e,c.forEach(function(e,t){e.classList.toggle("activeStep",t===n),e.classList.toggle("completed",t<n)}),t=(n+1)*o,console.log("progressWidth : ",t),progressionPercentage.style.width="".concat(t/r*100,"%"),console.log("progressionPercentage : ",progressionPercentage.style.width="".concat(t/r*100,"%"))})}).catch(function(e){return console.log(e)});