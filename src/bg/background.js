function showGAIcon(details) {
    if (details.frameId === 0) {
        // Top-level frame
        chrome.pageAction.show(details.tabId);
    }
}
var onlyOnCertainPages = {
    url: [{
        hostEquals: 'trello.com',
        pathContains: 'wdi',
        pathContains: 'calendar'
    }]
};
chrome.webNavigation.onCommitted.addListener(showGAIcon, onlyOnCertainPages);
chrome.webNavigation.onHistoryStateUpdated.addListener(showGAIcon, onlyOnCertainPages);