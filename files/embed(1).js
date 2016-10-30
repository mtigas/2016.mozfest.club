    (function(){

      var location_path = (function(){
        var ret = "";

        ret = document.location.hostname;

        if (typeof window.top.location !== "undefined") {
          try {
            ret = window.top.location.hostname;
          } catch(err) {
            // do nothing
          }
        }

        ret = (typeof ret === "string") ? ret.replace("www.", "") : "";

        return ret;

      }());

      var xcf_path = (function(){
        var ret = "";
        if (/radio\.foxnews/.test(location_path)) {
          ret = "radio.foxnews";
        }
        return ret;
      }());

      var location_referrer = (function(){

        var loc = window.location,
          url = loc.protocol + "//" + (loc.host || loc.hostname) + loc.pathname;
        return encodeURIComponent(url);

      }());

  var iframe = '<iframe src="//video.foxnews.com/v/video-embed.html?video_id=5185344100001${loc}${ref}${xcf}" width="466" height="263" marginwidth="0" marginheight="0" frameborder="0" scrolling="no"></iframe>';
  iframe = iframe.replace('$\{loc\}','&loc='+location_path);
  iframe = iframe.replace('$\{xcf\}','&_xcf='+xcf_path);
  iframe = iframe.replace('$\{ref\}','&ref='+location_referrer);
  document.write(iframe);

  }());