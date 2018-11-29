"use strict";

chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.local.set({ "iq": "http://iq15.informasoftware.com/webiq", "patterns": [ "div.content" ] });
});

chrome.browserAction.onClicked.addListener(function(tab) {
	var action_url = chrome.storage.get["iq"];
	chrome.tabs.create({url: action_url, active: true, openerTabId: tab.id});
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	chrome.tabs.query(
		{currentWindow: true, active : true},   
		function(tabs) {
			tabs.forEach(function (tab) {
				if (request.enable == true) {
					chrome.browserAction.enable(request.tabId);
				} else {
					chrome.browserAction.disable(request.tabId);
				}		
			});
		});
});

