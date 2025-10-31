let lastSelection = null
let currentPort = null
let lastTab = null

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
        
        chrome.storage.local.set({lastSelection})
        if(lastTab === null || lastTab != tab.id){
            await chrome.sidePanel.open({tabId: tab.id})
            lastTab = tab.id
        }
      

      if(currentPort){
        if(currentPort.name == "sidepanel" && lastSelection){
            currentPort.postMessage({type:"SHOW_SELECTION", text:lastSelection})
        }
      }
      else {
        console.log('This is not working', currentPort, lastSelection)
         connectPort ("sidepanel", "SHOW_SELECTION")
      }
    }
})

function connectPort (name, type) {


     if (currentPort && currentPort.name === name && lastSelection) {
    currentPort.postMessage({ type, text: lastSelection });
    return;
  }

    chrome.runtime.onConnect.addListener((port) => {
        currentPort = port
        if(port.name === name && lastSelection){
            port.postMessage({type:type, text:lastSelection})
        }

        port.onDisconnect.addListener(() => {
            if(currentPort == port){
                lastSelection = null
                currentPort = null
                lastTab = null
            }
        })


    })
}

  connectPort ("sidepanel", "SHOW_SELECTION")

