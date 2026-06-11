async function translateText() {

    let text = document.getElementById("inputText").value;
    let source = document.getElementById("sourceLang").value;
    let target = document.getElementById("targetLang").value;

    let url =
    `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${source}&tl=${target}&dt=t&q=${encodeURIComponent(text)}`;

    try {

        let response = await fetch(url);
        let data = await response.json();

        document.getElementById("outputText").value =
        data[0][0][0];

    } catch(error) {

        document.getElementById("outputText").value =
        "Translation Failed";
    }
}
function copyText() {

    let text =
    document.getElementById("outputText").value;

    navigator.clipboard.writeText(text);

    let message =
    document.getElementById("copyMessage");

    message.innerHTML =
    "✅ Copied Successfully!";

    setTimeout(() => {

        message.innerHTML = "";

    }, 2000);
}

function speakText() {

    let text =
    document.getElementById("outputText").value;

    let targetLang =
    document.getElementById("targetLang").value;

    let speech =
    new SpeechSynthesisUtterance(text);

    speech.lang = targetLang;

    speechSynthesis.speak(speech);
}
function clearText() {

    document.getElementById("inputText").value = "";

    document.getElementById("outputText").value = "";

    document.getElementById("copyMessage").innerHTML = "";
}
function swapLanguages() {

    let source =
    document.getElementById("sourceLang");

    let target =
    document.getElementById("targetLang");

    let temp = source.value;

    source.value = target.value;

    target.value = temp;
}