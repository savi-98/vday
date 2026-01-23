(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.ngga-button');
                let btnB = document.querySelector('.boleh-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.ngga-button')?.textContent = "Wait... what?";
                document.querySelector('.boleh-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.boleh-button')?.removeEventListener("click", handleBoleh);
                document.querySelector('.ngga-button')?.removeEventListener("click", handleNgga);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "Are you sure?",
    "Really sure??",
    "Seriusan ni Raf?",
    "Rafa tolong pikirin lagi..",
    "First time nembak masa ditolak ",
    "Kalo kamu tolak, aku jadi sedboy",
    "Sedboy beneran...",
    "Pikirin sekali lagi...",
    "Ok fine, hak kamu...",
    "Bercanda! bilang boleh please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const nggaButton = document.querySelector('.ngga-button');
    const bolehButton = document.querySelector('.boleh-button');
    nggaButtontextContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(bolehButton).fontSize);
    bolehButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleBolehClick() {
    window.location.href = "boleh_page.html";
}
