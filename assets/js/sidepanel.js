import{ translateText } from "./api.js";
document.addEventListener("DOMContentLoaded",  () => {
 loadPanel()
});


async function loadPanel(){

  const port = chrome.runtime.connect({ name: "sidepanel" });
  const languageFrom = document.getElementById('language-select-from')
  const languageTo = document.getElementById('language-select-to')

  const defaults = { languageFrom: "en", languageTo: "en" };
 const result =  await chrome.storage.local.get(["languageFrom", "languageTo"])

 var translateFrom = result.languageFrom || defaults.languageFrom
  var translateTo = result.languageTo || defaults.languageTo
  languageFrom.value = translateFrom
  languageTo.value = translateTo
   
     





  const btn = document.getElementById("start-translate");
  const loader =  document.getElementById('loader')
  const resultBox = document.getElementById("translation-text")
  const fontControl =  document.getElementById('font-control')
  const fontSelect =  document.getElementById('fontSelect')
  let settings = JSON.parse(localStorage.getItem('settings'))
  const {fontSize, fontFamily} = settings ? settings : {fontSize:'12', fontFamily:'Verdana'}
  const notice = document.getElementById('notice')
  const {lastSelection} = await chrome.storage.local.get("lastSelection")
  let localTranslator = false
    let translator;

  // when panel loads

  resultBox.style.fontSize = fontSize+'px'
  document.body.style.fontFamily = fontFamily
  fontControl.value = fontSize
  fontSelect.value = fontFamily

  btn.addEventListener("click", async () => {
  
    btn.style.display = 'none';
   loader.style.display = 'inline-block'




   const avail = await Translator.availability({
    sourceLanguage: translateFrom,
    targetLanguage: translateTo,
  }); 



if(avail == 'unavailable'){
  const apiTranslateText = await translateText(lastSelection, translateTo)
  if(apiTranslateText != 'error'){
      loader.style.display = 'none'
       resultBox.style.display = 'block'
         document.getElementById("translation-text").innerText = apiTranslateText;
 
     
  }else{
     loader.style.display = 'none'
     notice.style.display = 'block'
     alert('language is unavailabe! Please choose some other language!')
  }
  
}

   try{

     if (avail === "downloadable" || avail === "available") {
      localTranslator = true
       translator = await Translator.create({
         sourceLanguage: translateFrom,
         targetLanguage: translateTo,
         monitor(m) {
           m.addEventListener("downloadprogress", (e) => {
             console.log(`Downloading model: ${Math.round(e.loaded * 100)}%`);
           });
         },
       });
 
       await translator.ready; 
       console.log("Translator ready....");
       
      
 
       const result = await translator.translate(lastSelection);
       loader.style.display = 'none'
       resultBox.style.display = 'block'
         document.getElementById("translation-text").innerText = result;
 
     }
   }
   catch (err) {
    console.error(err)
    loader.style.display = 'none'
    alert('Language not available! unable to download.')    
   }

    port.onMessage.addListener(async (msg) => {
      if (msg.type === "SHOW_SELECTION" && translator) {
        loader.style.display = 'inline-block'
         resultBox.innerText ='';
        const result = await translator.translate(msg.text);
       resultBox.innerText = result;
        loader.style.display = 'none'
      }else{

        loader.style.display = 'inline-block'
        resultBox.innerText ='';
        const apiTranslateText = await translateText(lastSelection, translateTo)
        resultBox.innerText = apiTranslateText ;
        loader.style.display = 'none'

      }
    });
  });

  document.getElementById('settings-icon').addEventListener('click', function(){
    document.querySelector('.tool-panel').classList.add('active');
  })

  //update font size here!!
  fontControl.addEventListener('change', function(e){
    resultBox.style.fontSize = e.target.value+'px'
    console.log(e.target.value)
    localStorage.setItem('settings', JSON.stringify({fontSize:e.target.value, fontFamily}))
  })
  fontSelect.addEventListener('change', function(e){
    document.body.style.fontFamily = e.target.value
    console.log(e.target.value)
    localStorage.setItem('settings', JSON.stringify({fontSize, fontFamily:e.target.value}))
  })


document.getElementById('close-tools').addEventListener('click', () => {
    document.querySelector('.tool-panel').classList.remove('active');
})

// saveing the lagnuage
const selectionBox = [languageFrom, languageTo]

selectionBox.map((item) => {
    item.addEventListener('change', function(e){
      let currentVal = e.target.value
      let currentName = e.target.name
      let storeValue = currentName == 'languageFrom' ? {languageFrom:currentVal} : {languageTo : currentVal}
      currentName === "languageFrom"? translateFrom = currentVal   : translateTo = currentVal;
      btn.style.display = 'block'
      chrome.storage.local.set(storeValue)
      notice.style.display = 'none'
      translator && (translator = null)
      
    })
})


}