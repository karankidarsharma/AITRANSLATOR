document.addEventListener("DOMContentLoaded", () => {
    const port = chrome.runtime.connect({ name: "sidepanel" });

    port.onMessage.addListener((msg) => {
        if (msg.type === "SHOW_SELECTION") {
            document.getElementById("translation-text").innerText = msg.text;
        }
    });
});
