const form = document.getElementById("gameForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let type = document.getElementById("type").value;
    let message = document.getElementById("message").value;

    let recommendation = "";

    if (type === "aaa") {
        recommendation = `I recommend you play these AAA games:
        <br>• Elden Ring – a massive open world RPG
        <br>• Red Dead Redemption 2 – a huge story-driven western (journey of westland <b>warning: very emotional end of game is like lesson</b>)
        <br>• Cyberpunk 2077 – futuristic open world RPG (journey of future <b>warning: emotional and fun</b>)
        <br>• The Last of Us Part II – post-apocalyptic action-adventure (journey of survival <b>warning: very emotional depend on your ending</b>)
        <br>• God of War (2018) – mythological action-adventure
        <br>• Horizon Zero Dawn – post-apocalyptic open world RPG
        <br>• Ghost of Tsushima – samurai action-adventure
        <br>• Assassin’s Creed Syndicate – historical action-adventure
        <br>• Marvel’s Spider-Man – superhero action-adventure
        <br>• Death Stranding – unique open world adventure
        <br>• Sekiro – challenging action-adventure with a focus on combat
        <br>• Final Fantasy VII Remake – reimagining of the classic JRPG
        <br>• Resident Evil Village – survival horror with a gripping story
        <br>• Call of Duty: Modern Warfare (2019) – intense first-person shooter
        <br>• Battlefield V – large-scale multiplayer shooter set in WWII (<b>warning: Only play if you can handle trauma</b>)`;
    }

    else if (type === "indie") {
        recommendation = `Try these indie games:
        <br>• Firewatch – emotional story adventure
        <br>• Hollow Knight – challenging exploration game
        <br>• Stardew Valley – relaxing farming simulator
        <br>• Return of the Obra Dinn – unique mystery game
        <br>• Celeste – challenging platformer with a touching story
        <br>• Hades – roguelike dungeon crawler with great storytelling
        <br>• Slay the Spire – addictive deck-building roguelike
        <br>• Disco Elysium – groundbreaking RPG with deep narrative
        <br>• Outer Wilds – space exploration game with a captivating story
        <br>• Undertale – quirky RPG with memorable characters`;
    }

    else if (type === "story") {
        recommendation = `Great story games:
        <br>• Firewatch
        <br>• Life is Strange
        <br>• What Remains of Edith Finch
        <br>• The Last of Us Part II (AAA with strong story – my personal favorite <b>warning: very emotional</b>)
        <br>• Red Dead Redemption 2 (AAA with strong story <b>warning: very emotional</b>)
        <br>• Cyberpunk 2077 (AAA with strong story <b>warning: very emotional</b>)`;
    }

    else {
        recommendation = "Please select a game type.";
    }

    result.innerHTML = `
    <h3>Hello ${name}!</h3>
    <p>${recommendation}</p>
    `;

    // Save data to localStorage
    let userData = {
        name: name,
        email: email,
        type: type,
        message: message
    };

    localStorage.setItem("gameUser", JSON.stringify(userData));

});

// Load stored data
window.onload = function () {

    let savedData = localStorage.getItem("gameUser");

    if (savedData) {

        let data = JSON.parse(savedData);

        result.innerHTML = `
        <h3>Welcome back ${data.name}!</h3>
        <p>Your last selected game type was: ${data.type}</p>
        `;

    }

};