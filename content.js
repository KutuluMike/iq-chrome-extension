"use strict";

chrome.runtime.sendMessage({ enable: false });

window.onload = function() {
	var patterns = chrome.storage.local.get["patterns"];
	patterns.forEach(function(pattern) {
		if (document.querySelector(pattern) != null) {
			chrome.runtime.sendMessage({ enable: true });
		}
	});
}