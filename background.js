chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "sayHello",
        title: "say hello karan",
        contexts: ["page", "selection", "image", "link"]
    })
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if(info.menuItemId === "sayHello" && info.selectionText) {
        console.log(info, tab)
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            func: (text) => alert(text),
            args: [info.selectionText]
        })
    }
})