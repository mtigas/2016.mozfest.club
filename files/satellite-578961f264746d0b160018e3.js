_satellite.pushAsyncScript(function(event, target, $variables){
  // changelog
// 8-02-2016 added script to asynchronously load GA tracker @mlemay
// 7-15-2016 add new tracker object for campaign @mlemay

// begin loading analytics.js asychronously
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
// end analytics.js load

// create tracker objects for GOP
ga('create', 'UA-78271234-1', 'auto', 'gop');
ga('gop.require', 'ecommerce');

// create tracker objects for Campaign team
ga('create', 'UA-60901920-1', 'auto', 'campaign');
ga('campaign.require', 'ecommerce');

//send transaction data if a transaction page
if(window.location.href.indexOf("thank-you") > -1 || window.location.href.indexOf("upsell") > -1){
  if(digitalData){
    if(digitalData.transaction){
      //build transaction
			var ua_transaction = {
	    'id': digitalData.transaction.purchaseID,
		  'affiliation': digitalData.transaction.total.donationType,
		  'revenue': parseFloat(digitalData.transaction.item[0].price.basePrice).toFixed(2),
		  'shipping': '0',
		  'tax': '0'
			}
      //send transaction to GA
      ga('campaign.ecommerce:addTransaction', ua_transaction);
      ga('campaign.ecommerce:send');
      
      //and send pageview
      ga('campaign.send', 'pageview');
      ga('gop.send', 'pageview');

      //set cookie with current transaction ID
			_satellite.setCookie('dtm_ua_transID', digitalData.transaction.purchaseID, 730);
    }
  }
}else{
  //just send a pageview
  ga('gop.send', 'pageview');
  ga('campaign.send', 'pageview');
};
});
