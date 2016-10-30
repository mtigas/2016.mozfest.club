_satellite.pushAsyncScript(function(event, target, $variables){
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '792990610817458',{
  	em: _satellite.getVar("email"),
    fn: _satellite.getVar("firstName"),
    ln: _satellite.getVar("lastName"),
    ct: _satellite.getVar("city"),
    st: _satellite.getVar("state"),
    zp: _satellite.getVar("zip"),
    ph: _satellite.getVar("phoneNumber")
});
fbq('init', '774802512634441');
fbq('track', "PageView");
});
