/*! updated; 10-10-2016 08:04 PM */

!function($){function setHLSProp(){var url=config&&config.params&&config.params.parentEmbedUrl?config.params.parentEmbedUrl:API.getQuery("ref")||null;url&&url.indexOf("twitter.com")>-1&&$.extend(!0,config,{hls:{enabled:!1}})}function setConfigMode(mode){var url=config&&config.params&&config.params.parentEmbedUrl?config.params.parentEmbedUrl:API.getQuery("ref")||null;mode=url&&url.indexOf("twitter.com")>-1?"html":mode,"html"===mode&&$.extend(!0,config,{moat:{data:{partnerCode:"foxima87313513"}},mode:API.setPlayerMode(mode)})}function setPlayerNameProp(){var playerName=function(){var ret=null,qvar=API.getVar("playerName",!0);return ret=qvar?qvar:config.params&&config.params.playerName?config.params.playerName:pageVars.playerName}();$.extend(!0,config,{flash:{vars:{core_player_name:playerName,core_omniture_player_name:playerName}},mediaanalytics:{fields:{pageName:{type:"value",value:playerName}}},name:playerName})}function setSharePanel(mode){/html/.test(mode)&&"undefined"==typeof config.sharepanel&&isTouchDevice()&&$.extend(!0,config,{sharepanel:{enabled:!1}})}function isTouchDevice(){var ret=!1;return akamai&&akamai.amp&&akamai.amp.utils&&akamai.amp.utils.Utils&&akamai.amp.utils.Utils.isTouchDevice&&akamai.amp.utils.Utils.isTouchDevice()&&(ret=!0),ret}function setParentEmbedUrl(){var url=config&&config.params&&config.params.parentEmbedUrl?config.params.parentEmbedUrl:null;if(!url)try{window.location!==window.parent.location&&(url=document.referrer)}catch(err){log("[AMP.setParentEmbedUrl] failed to get parent referrer")}url&&$.extend(!0,config,{params:{parentEmbedUrl:url}})}function forceAutoPlay(autoplay){if(autoplay)$.extend(!0,config,{flash:{vars:{auto_play_override:!0}}});else if(null===autoplay)try{delete config.autoplay}catch(err){}}function getUID(){return custom_config&&custom_config.uid?custom_config.uid:!1}function initializedHandler(){if(passEventAsMessage({type:"playerReady",data:config}),amp.ads&&(amp.ads.addEventListener("companion",function(data){passEventAsMessage({type:"ads_companion",data:{companions:data&&data.data&&data.data.companions?data.data.companions:!1}})}),amp.ads.addEventListener("started",function(data){passEventAsMessage({type:"ads_started",data:!0})}),amp.ads.addEventListener("ended",function(data){passEventAsMessage({type:"ads_ended",data:!0})}),amp.ads.addEventListener("error",function(){amp.evaluateBinding("#{window.createShowPersonality(media.category)}"),amp.evaluateBinding("#{window.createShowCategory(media.category)}"),amp.evaluateBinding("#{window.createShowName(media.category)}"),amp.evaluateBinding("#{window.createShowSection(media.category)}")}),amp.ads.addEventListener("play",function(data){passEventAsMessage({type:"playTriggered",data:data.data||!0})})),amp.autoadvance&&amp.autoadvance.addEventListener("advance",function(data){passEventAsMessage({type:"advance",data:!0})}),amp.recommendations&&amp.recommendations.addEventListener("selected",function(data){passEventAsMessage({type:"selected",data:data.data||data})}),amp.addEventListener("play",function(data){passEventAsMessage({type:"playTriggered",data:data.data||!0})}),amp.addEventListener("ended",function(data){passEventAsMessage({type:"ended",data:data.data||!0})}),amp.addEventListener("pause",function(data){passEventAsMessage({type:"pause",data:data.data||!0})}),amp.sharepanel){var feedData=!1;amp.sharepanel.addEventListener("share",function(data){var shareData=data.data||data;feedData=feedData?feedData:amp.feed.getData(),shareData._FEED_DATA=feedData;var customShareURL=API.getVar("shareURL")||!1,customShareTitle=API.getVar("shareTitle")||!1;if(customShareURL&&(shareData._SHARE_URL=customShareURL),customShareTitle){var tmp=$("<span></span>").html(customShareTitle);customShareTitle=tmp.text(),shareData._SHARE_TITLE=customShareTitle}"embed"===shareData.provider?API.showShareEmbedOverlay(shareData):"share"!==shareData.provider?passEventAsMessage({type:"share",data:shareData}):"share"===shareData.provider&&$.inArray("small",API.getVar("configParam",!0))>-1&&(shareData._PLAYER_TYPE="small",passEventAsMessage({type:"share",data:shareData}))})}FOX_EventHandler.addHandler("amp.getCurrentTimeUTC",function(){$.loadAttempt(150,50,function(){return"function"==typeof amp.getVideo&&amp.getVideo()&&!isNaN(amp.getVideo().getCurrentTimeUTC())?!0:!1},function(){passEventAsMessage({type:"currentTimeUTC",data:amp.getVideo().getCurrentTimeUTC()})}),$.loadAttempt(150,50,function(){return"function"==typeof amp.getMediaElement&&amp.getMediaElement()&&!isNaN(amp.getMediaElement().getCurrentTimeUTC())?!0:!1},function(){passEventAsMessage({type:"currentTimeUTC",data:amp.getMediaElement().getCurrentTimeUTC()})})}),FOX_EventHandler.addHandler("amp.currentTime",function(){$.loadAttempt(150,50,function(){return"function"!=typeof amp.getCurrentTime||isNaN(amp.getCurrentTime())?!1:!0},function(){passEventAsMessage({type:"currentTime",data:amp.getCurrentTime()})})}),FOX_EventHandler.addHandler("amp.setPlayerProperty",function(info){$.loadAttempt(150,50,function(){return"function"==typeof amp.getMediaElement&&"function"==typeof amp.getMediaElement().setPlayerProperty?!0:!1},function(){amp.getMediaElement().setPlayerProperty(info.name,info.data)})})}function passEventAsMessage(event,logOFF){var data={eventData:event.data,type:event.type,uid:getUID()};logOFF||log("[AMP.Event.iframe.embed] POST: ",event.type," | Data: ",event.data),FOX_EventHandler.sendMessage("parent",event.type,data)}function createCategoryString(categories,tag){var items=[];categories=categories||[];for(var i=0;i<categories.length;i++){var item=categories[i];if(startsWith(item,tag)){var cat=item.replace(tag,"");cat=cat.split("/")[0],-1===$.inArray(cat,items)&&items.push(cat);break}}return items.join(",")}function startsWith(str,val){var ret=!1;if($.isArray(val)){for(var i=0;i<val.length;i++)if(0===str.indexOf(val[i])){ret=!0;break}}else"string"==typeof str&&(ret=0===str.indexOf(val)?!0:!1);return ret}function log(){var loggerON=!0;if(loggerON&&window.console)try{return console.log.apply(console,arguments)}catch(err){console.log(arguments)}}if(function(){var s=document.createElement("script");s.type="text/javascript",s.async=!0,s.src="//s0.2mdn.net/instream/video/client.js",(document.getElementsByTagName("head")||document.getElementsByTagName("body"))[0].appendChild(s)}(),window.Visitor){new Visitor("17FC406C5357BA6E0A490D4D@AdobeOrg",{trackingServer:"metrics.foxnews.com",trackingServerSecure:"smetrics.foxnews.com",marketingCloudServer:"metrics.foxnews.com",marketingCloudServerSecure:"smetrics.foxnews.com"})}window.videoHeartbeatContext=1;var version=FOX_Video_Instance.Config.bundleVersion,API=FOX_AkamaiVideo.API,DST=window.AKAMAI_TIME_HELPER?AKAMAI_TIME_HELPER.isDST():!1;API.setVersion(version),window.pageVars=API.getPageVars();var s=document.createElement("script");s.type="text/javascript",s.async=!1,s.src=pageVars.bundleUrl,(document.getElementsByTagName("head")||document.getElementsByTagName("body"))[0].appendChild(s);var _is_embed=window.location.search.indexOf("_fx=y")>-1||window._fox_player_embed?!0:!1,_embed_fired=_is_embed?!1:!0,config={autoplay:!1,feed:{url:pageVars.feed},flash:{vars:{live_timestamp_timezone_offset:DST&&DST.val?"-4":"-5"}},params:{adparamSDMAX:"#{window.getAdParams_SDMax(media)}",adparamSZ:"#{window.getAdParams_SZ(media)}",paramIsLive:"#{window.isLive(media.category)}",section:"#{window.createShowSection(media.category)}",eVar32:"#{window.createShowName(media.category)}",prop32:"#{window.createShowName(media.category)}",eVar33:"#{window.createShowCategory(media.category)}",prop33:"#{window.createShowCategory(media.category)}",eVar34:"#{window.createShowPersonality(media.category)}",prop34:"#{window.createShowPersonality(media.category)}"},autoadvance:{enabled:!1},mediaanalytics:{dimensions:{device:"#{player.mode}"}},rules:{PDL_LOW:{label:"Android 4 or Kindle Fire HD avoid HLS and get PDL_MED_LOW",regexp:"Android 4"}}};pageVars.hostname&&(config.params.hostname=pageVars.hostname),pageVars.mode&&(config.mode=pageVars.mode);var custom_config=!1,FOX_EventHandler=new EventMessageHandler({prefix:FOX_Video_Instance.Config.events.prefix});FOX_EventHandler.addHandler("FOXVIDEO.IFRAME.Embed",function(dataset){var data=dataset.info?dataset.info:dataset;dataset.omtrVals&&API.setOmniture&&window.videoHeartbeatContext&&(log("[VideoPlayer.Embed] Omniture Values From Parent: ",dataset.omtrVals.merged),API.setOmniture(dataset.omtrVals)),custom_config=data;var mergeObj=data&&data.config?data.config:data?data:{};$.extend(!0,config,mergeObj),data.feed_domain&&(config.feed.url="//"+data.feed_domain+config.feed.url),_embed_fired=!0}),window.loadHandler=function(event){$.loadAttempt(150,50,function(){return _embed_fired&&window.akamai&&window.akamai.amp&&window.akamai.amp.AMP?!0:!1},function(){var playbackMode=akamai.amp.utils.Utils.getPlaybackMode();setConfigMode(config.mode||playbackMode),setSharePanel(config.mode||playbackMode),setParentEmbedUrl(),setPlayerNameProp(),setHLSProp(),forceAutoPlay("undefined"==typeof config.autoplay?!1:config.autoplay),log("[VideoPlayer.Embed] Config: ",config),akamai.amp.AMP.loadDefaults(pageVars.configUrl,function(){window.amp=akamai.amp.AMP.create("akamai-media-player",config,initializedHandler)})})},FOX_EventHandler.addHandler("amp.pause",function(){$.loadAttempt(150,50,function(){return"function"==typeof amp.pause?!0:!1},function(){amp.pause(),passEventAsMessage({type:"currentPauseState",data:!0})})}),FOX_EventHandler.addHandler("amp.play",function(){$.loadAttempt(150,50,function(){return"function"==typeof amp.play?!0:!1},function(){amp.play(),passEventAsMessage({type:"currentPauseState",data:!1})})}),FOX_EventHandler.addHandler("getCurrentPauseState",function(){$.loadAttempt(150,50,function(){return"function"==typeof amp.getPaused?!0:!1},function(){passEventAsMessage({type:"currentPauseState",data:amp.getPaused()})})}),FOX_EventHandler.addHandler("amp.mute",function(){$.loadAttempt(150,50,function(){return"function"==typeof amp.mute?!0:!1},function(){amp.mute(),passEventAsMessage({type:"currentVolume",data:amp.getVolume()})})}),FOX_EventHandler.addHandler("amp.unmute",function(){$.loadAttempt(150,50,function(){return"function"==typeof amp.unmute?!0:!1},function(){amp.unmute(),passEventAsMessage({type:"currentVolume",data:amp.getVolume()})})}),FOX_EventHandler.addHandler("amp.getVolume",function(){$.loadAttempt(150,50,function(){return"function"==typeof amp.unmute?!0:!1},function(){passEventAsMessage({type:"currentVolume",data:amp.getVolume()})})}),FOX_EventHandler.addHandler("feed.url",function(data){log("[AMP.Event.iframe.embed] RECEIVE: feed.url | Data: ",data),amp.feed.setURL(data),amp.play()}),FOX_EventHandler.addHandler("feed.data",function(data){log("[AMP.Event.iframe.embed] RECEIVE: feed.data | Data: ",data),amp.feed.setData(data)}),FOX_EventHandler.addHandler("amp.setCurrentTime",function(data){if(data&&"number"==typeof data.s){var current=0;$.loadAttempt(function(){var ret=!1;return"function"!=typeof amp.getCurrentTime||isNaN(amp.getCurrentTime())||amp.getCurrentTime()>current&&"function"==typeof amp.setCurrentTime&&(ret=!0),ret},function(){amp.setCurrentTime(data.s)})}});var allowedAEP=["mediaPlayerShareRequest"];window.AEP={jsCallbackHandler:function(id,type,data){type&&$.inArray(type,allowedAEP)>-1&&(data={eventData:data||!1,type:type,uid:getUID()},FOX_EventHandler.sendMessage("parent","Flash.AEP.jsCallbackHandler",data))}},window.getAdParams_SDMax=function(media){var sdmax=0,query="",AMPMedia=amp&&amp.feed&&"function"==typeof amp.feed.getData?amp.feed.getData():!1,AMPDuration=function(m){var duration=m&&m.channel&&m.channel.item&&m.channel.item["media-group"]&&m.channel.item["media-group"]["media-content"]&&m.channel.item["media-group"]["media-content"][0]&&m.channel.item["media-group"]["media-content"][0]["@attributes"]&&!isNaN(m.channel.item["media-group"]["media-content"][0]["@attributes"].duration)?m.channel.item["media-group"]["media-content"][0]["@attributes"].duration:!1;return duration}(AMPMedia),duration="boolean"!=typeof AMPDuration?AMPDuration:media&&media.duration?media.duration:!1;return duration=isNaN(duration)?-1:parseFloat(duration),-1===duration?sdmax=90:45>=duration?sdmax=45:duration>45&&180>=duration?sdmax=60:duration>180&&600>=duration&&(sdmax=90),sdmax&&(query=1e3*sdmax),query},window.getAdParams_SZ=function(media){var sz=["1001x1001"];window.akamai&&window.akamai.amp&&window.akamai.amp.utils&&window.akamai.amp.utils.Utils&&"flash"===window.akamai.amp.utils.Utils.getPlaybackMode()&&sz.push("1920x1080");var val=sz.join("|");return val},window.isLive=function(categories){for(var ret="false",cat=categories||[],x=0;x<cat.length;x++)if(cat[x].indexOf("live_stream")>-1){ret="true";break}return ret},window.createShowCategory=function(category){for(var modified=[],i=0;i<category.length;i++){var item=category[i];startsWith(item,"special")||startsWith(item,"settings")||-1!==$.inArray(item,modified)||modified.push(item)}var ret=modified.join(",");return ret},window.createShowName=function(category){var ret=createCategoryString(category,"on_air/");return"personality"===ret&&(ret=""),ret},window.createShowPersonality=function(category){var ret=createCategoryString(category,"personality/");return ret||(ret=createCategoryString(category,"on_air/personality/")),ret},window.createShowSection=function(category){log(" "),log("#######################################"),log("# [AMP.createShowSection] media data: ",category);var val=function(){for(var ret=!1,i=0;i<category.length;i++){var item=category[i];if(0===item.indexOf("primary_")){ret=item.replace("primary_","");break}}return ret}();return val?(("partner_content"===val||"personality"===val)&&(val="null"),log("# [AMP.createShowSection] value: "+val)):(val=function(){var ret="",common=["full_episode","hot_topics","on_air","partner_content","personality","promotion","settings","special","web_exclusives","3play_processed"],foxnews=["cleartv","business","latino","mobile","odd_news"],foxbiz=["events","exclusive","government","politics"];foxnews=foxnews.concat(common),foxbiz=foxbiz.concat(common);for(var i=0;i<category.length;i++){var item=category[i];if("foxnews"===pageVars.domain&&!startsWith(item,foxnews)){ret=item.split("/")[0];break}if("foxbusiness"===pageVars.domain&&!startsWith(item,foxbiz)){ret=item.split("/")[0];break}val||(ret="false")}return ret}(),log("# [AMP.createShowSection] value: "+val)),log("#######################################"),val},window.replaceNonAplha=function(str){return str.replace(/[^a-z0-9]/gi,":")}}(jQuery);