const heroes = document.getElementById("heroes");
const f_skill = document.getElementById("first-skill");
const s_skill = document.getElementById("second-skill");
const t_skill = document.getElementById("three-skill");
const ulta = document.getElementById("ulta");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomHeroes() {
    let list = ["Storm Spirit", "Magnus", "Medusa", "Phoenix", "Alchemic", "Arc Warden", "Mirana", "Draw Ranger", "Ursa", "Ember Spirit", "Earth Spirit", "Marci", "Techies", "Templar Assasian", "Phantom Assasian", "Spirit Breaker", "Dawnbreaker", "Crystal Maiden", "Void Spirit", "Void", "Chen", "Pugna", "Pudge", "Sniper", "Terrorblade", "Clockwerk", "Jaggernaut", "Shadow Shaman", "Slardar", "Keep of Light", "Wraight King", "Shadow Fiend", "Windranger", "Axe", "Abbadon", "Zeus", "Witch Doctor", "Sven", "Riki", "Batrider", "Outword Devaider", "Sand King", "Qeen of Pain", "Bane", "Huscar", "Tiny", "Lone Druid", "Lucan", "Viper", "Spectre", "Bounty Hunter", "Lina", "Lich", "Monkey King", "Tinker", "Enchatress"];
    return list[getRandomInt(list.length)]
}

function emptyButtonFunction() {
    main_panel = document.getElementById("main-panel");
    main_panel.innerHTML += `
        <div class="main-panel w-block"> 
            <button>1</button>
            <button>1</button>
            <button>1</button>
            <button>1</button>

        </div>
    `;

}

function generateHero() {
    heroes.innerHTML = "";
    f_skill.innerHTML = "";
    s_skill.innerHTML = "";
    t_skill.innerHTML = "";
    ulta.innerHTML = "";

    heroes.innerHTML = getRandomHeroes();
    f_skill.innerHTML += getRandomHeroes();
    s_skill.innerHTML += getRandomHeroes();
    t_skill.innerHTML += getRandomHeroes();
    ulta.innerHTML += getRandomHeroes();
}

function clearInfoHero() {
    heroes.innerHTML = "Hero";
    f_skill.innerHTML = "1. Skill";
    s_skill.innerHTML = "2. Skill";
    t_skill.innerHTML = "3. Skill";
    ulta.innerHTML = "Ulta";
}

const createHeroButton = document.getElementById("Button");
createHeroButton.addEventListener("click", generateHero);

const deleteHeroButton = document.getElementById("button-clear");
deleteHeroButton.addEventListener("click", clearInfoHero)

const emptyButton = document.getElementById("button-empty");
emptyButton.addEventListener("click", emptyButtonFunction);