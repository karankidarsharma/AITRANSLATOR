let lastSelection = null
let currentPort = null

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "TranslationBox",
        title: "Translation Box",
        contexts: ["page", "selection", "image", "link"]
    })
})

chrome.contextMenus.onClicked.addListener( async (info, tab) => {
    if(info.menuItemId === "TranslationBox" && info.selectionText) {
        lastSelection = info.selectionText
      await chrome.sidePanel.open({tabId: tab.id})

      console.log(currentPort,"<<<<")
      if(currentPort){
        if(currentPort.name == "sidepanel" && lastSelection){
            currentPort.postMessage({type:"SHOW_SELECTION", text:lastSelection})
            console.log(lastSelection, '<<<,')
        }
      }
    }
})



chrome.runtime.onConnect.addListener((port) => {
    currentPort = port
    if(port.name === "sidepanel" && lastSelection)
        port.postMessage({type:"SHOW_SELECTION", text:lastSelection})
})

