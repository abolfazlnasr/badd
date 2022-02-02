const urlFilters = [
	"*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*",
	"*://*.kaprila.com/*",
	"*://*.yektanet.com/*",
	"*://*.farakav.com/*",
	"*://*.mediaad.org/*",
	"*://*.sanjagh.pro/*",
	"*://*.tapsell.ir/*",
	"*://*.raykaad.com/*",
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: urlFilters },
    ["blocking"]
)