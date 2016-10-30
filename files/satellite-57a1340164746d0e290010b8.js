_satellite.pushAsyncScript(function(event, target, $variables){
  (function(){
        var w = window, d = document;
        w['st']=function() {
          w['st'].commands = w['st'].commands || [];
          w['st'].commands.push(arguments);
        };
        var s = d.createElement('script'); s.async = 1;
        s.src = '//c1.rfihub.net/js/smarttag.js';
        var f = d.getElementsByTagName('script')[0];
        f.parentNode.insertBefore(s, f);
        st('identify', '27382');
        st('smarttagid', '64906733');
        st('launch');
    })();
});
