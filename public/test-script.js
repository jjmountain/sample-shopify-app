const scriptJ = document.createElement('script');
scriptJ.src = "https://code.jquery.com/jquery-3.4.1.min.js";
scriptJ.type = "text/javascript";
scriptJ.onreadystatechange = handler;
scriptJ.onload = handler;
document.getElementsByTagName("head")[0].appendChild(scriptJ);

function handler() {
  const body = $('body');
  body.css({
    'position': 'relative'
  })


console.log('this is coming from test script api')

const header = $('header.site-header').parent();

header.prepend(`<div>Hello this is from public folder with jquery</div>`).css({'background-color': 'orange', 'text-align': 'center'});
}

// const header = document.querySelector('header.site-header').parentElement;

// header.insertAdjacentHTML('beforebegin',`<div style='background-color: orange; text-align: center;'> Hello this is from public folder</div>`)