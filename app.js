const greenhouseAssets = window.greenhouseAssets || {};

function greenhouseAsset(key, fallback) {
  return greenhouseAssets[key] || fallback;
}

const scenes = [
  {
    id: "bedroom",
    title: "The Cold Bedroom",
    summary: "Luna wakes up cold while rain taps at the window.",
    palette: "bedroom",
    intro: ["Es una mañana lluviosa.", "Luna está en su habitación.", "Tiene frío."],
    introEnglish: "It is a rainy morning. Luna is in her room. She is cold.",
    goal: "Find something warm for Luna.",
    pickups: ["blanket"],
    puzzle: {
      itemId: "blanket",
      targetId: "luna",
      success: ["Gracias.", "Ahora tengo calor."],
      successEnglish: "Thank you. Now I am warm.",
      hint: "Luna tiene frío. Busca algo suave y caliente.",
      english: "Luna is cold. Find something soft and warm."
    },
    hotspots: [
      {
        id: "luna",
        label: "Luna",
        type: "story",
        x: 45,
        y: 49,
        w: 15,
        h: 25,
        icon: "luna",
        lines: [
          "Luna tiene frío.",
          "Está temblando.",
          "Quiere una manta."
        ],
        englishLines: ["Luna is cold.", "She is shivering.", "She wants a blanket."],
        english: "Luna is cold and wants a blanket."
      },
      {
        id: "window",
        label: "ventana",
        type: "story",
        x: 68,
        y: 16,
        w: 18,
        h: 30,
        icon: "window",
        lines: [
          "La ventana está abierta.",
          "Entra aire frío.",
          "Afuera está lloviendo."
        ],
        englishLines: ["The window is open.", "Cold air comes in.", "Outside, it is raining."],
        english: "The window is open and cold air comes in."
      },
      {
        id: "blanket",
        label: "manta",
        type: "story",
        x: 24,
        y: 58,
        w: 18,
        h: 16,
        icon: "blanket",
        collectable: true,
        lines: [
          "Es una manta.",
          "La manta es suave.",
          "Luna usa la manta cuando tiene frío.",
          "La abuela hizo esta manta."
        ],
        englishLines: ["It is a blanket.", "The blanket is soft.", "Luna uses the blanket when she is cold.", "Grandma made this blanket."],
        english: "A soft blanket. Grandma made it."
      },
      {
        id: "cat",
        label: "gato",
        type: "curiosity",
        x: 12,
        y: 66,
        w: 13,
        h: 13,
        icon: "cat",
        lines: ["El gato duerme.", "El gato está muy tranquilo."],
        englishLines: ["The cat is sleeping.", "The cat is very calm."],
        english: "The cat is sleeping."
      },
      {
        id: "plant",
        label: "planta",
        type: "curiosity",
        x: 85,
        y: 54,
        w: 8,
        h: 18,
        icon: "plant",
        lines: ["Es una planta.", "La planta es verde."],
        englishLines: ["It is a plant.", "The plant is green."],
        english: "A green plant."
      },
      {
        id: "tea",
        label: "té",
        type: "lore",
        x: 58,
        y: 69,
        w: 8,
        h: 9,
        icon: "tea",
        lines: ["Es té caliente.", "Luna toma té cuando llueve."],
        englishLines: ["It is hot tea.", "Luna drinks tea when it rains."],
        english: "Hot tea. Luna drinks tea when it rains."
      }
    ]
  },
  {
    id: "breakfast",
    title: "Breakfast",
    summary: "A warm kitchen waits, but Luna is hungry.",
    palette: "kitchen",
    intro: ["Luna tiene hambre.", "La cocina huele bien."],
    introEnglish: "Luna is hungry. The kitchen smells good.",
    goal: "Give Luna breakfast.",
    pickups: ["toast", "apple"],
    puzzle: {
      itemId: "toast",
      targetId: "luna",
      success: ["Qué rico.", "Vamos al pueblo."],
      successEnglish: "How delicious. Let's go to town.",
      hint: "Luna tiene hambre. El pan tostado es perfecto.",
      english: "Luna is hungry. Toast is the best breakfast choice."
    },
    hotspots: [
      {
        id: "luna",
        label: "Luna",
        type: "story",
        x: 43,
        y: 47,
        w: 15,
        h: 25,
        icon: "luna",
        lines: ["Luna tiene hambre.", "Quiere desayunar."],
        englishLines: ["Luna is hungry.", "She wants to eat breakfast."],
        english: "Luna is hungry and wants breakfast."
      },
      {
        id: "toast",
        label: "pan",
        type: "story",
        x: 22,
        y: 62,
        w: 12,
        h: 11,
        icon: "toast",
        collectable: true,
        lines: ["Es pan tostado.", "El pan está caliente."],
        englishLines: ["It is toast.", "The bread is hot."],
        english: "Warm toast."
      },
      {
        id: "apple",
        label: "manzana",
        type: "curiosity",
        x: 34,
        y: 66,
        w: 9,
        h: 9,
        icon: "apple",
        collectable: true,
        lines: ["Es una manzana.", "La manzana es roja."],
        englishLines: ["It is an apple.", "The apple is red."],
        english: "A red apple."
      },
      {
        id: "milk",
        label: "leche",
        type: "curiosity",
        x: 69,
        y: 56,
        w: 9,
        h: 17,
        icon: "milk",
        lines: ["Es leche.", "La leche está fría."],
        englishLines: ["It is milk.", "The milk is cold."],
        english: "Cold milk."
      },
      {
        id: "coffee",
        label: "café",
        type: "lore",
        x: 80,
        y: 65,
        w: 10,
        h: 10,
        icon: "coffee",
        lines: ["Es café.", "El café es para la vecina."],
        englishLines: ["It is coffee.", "The coffee is for the neighbor."],
        english: "Coffee for the neighbor."
      },
      {
        id: "fridge",
        label: "refrigerador",
        type: "curiosity",
        x: 6,
        y: 33,
        w: 17,
        h: 42,
        icon: "fridge",
        lines: ["El refrigerador está frío.", "Hay comida en la cocina."],
        englishLines: ["The refrigerator is cold.", "There is food in the kitchen."],
        english: "The fridge is cold."
      }
    ]
  },
  {
    id: "key",
    title: "The Lost Key",
    summary: "The rain has stopped, but Luna cannot find her key.",
    palette: "garden",
    intro: ["La lluvia terminó.", "Luna quiere ir al pueblo.", "Pero no encuentra su llave."],
    introEnglish: "The rain ended. Luna wants to go to town. But she cannot find her key.",
    goal: "Find the hidden key.",
    pickups: ["key"],
    puzzle: {
      itemId: "key",
      targetId: "luna",
      success: ["Gracias.", "Ahora podemos ir al pueblo."],
      successEnglish: "Thank you. Now we can go to town.",
      hint: "Busca debajo de la maceta.",
      english: "Look under the flower pot."
    },
    hotspots: [
      {
        id: "luna",
        label: "Luna",
        type: "story",
        x: 48,
        y: 48,
        w: 15,
        h: 24,
        icon: "luna",
        lines: ["Luna busca su llave.", "Está un poco preocupada."],
        englishLines: ["Luna is looking for her key.", "She is a little worried."],
        english: "Luna is looking for her key."
      },
      {
        id: "pot",
        label: "maceta",
        type: "story",
        x: 25,
        y: 63,
        w: 12,
        h: 14,
        icon: "pot",
        reveals: "key",
        lines: ["Hay una maceta.", "La maceta se mueve.", "Una llave."],
        englishLines: ["There is a flower pot.", "The flower pot moves.", "A key."],
        english: "There is a flower pot. The flower pot moves. A key."
      },
      {
        id: "key",
        label: "llave",
        type: "story",
        x: 30,
        y: 77,
        w: 8,
        h: 6,
        icon: "key",
        collectable: true,
        hiddenUntil: "pot",
        lines: ["Es una llave.", "La llave es pequeña."],
        englishLines: ["It is a key.", "The key is small."],
        english: "A small key."
      },
      {
        id: "mailbox",
        label: "buzón",
        type: "curiosity",
        x: 70,
        y: 54,
        w: 13,
        h: 18,
        icon: "mailbox",
        lines: ["El buzón está cerrado.", "Hay una carta para Luna."],
        englishLines: ["The mailbox is closed.", "There is a letter for Luna."],
        english: "The mailbox is closed."
      },
      {
        id: "umbrella",
        label: "paraguas",
        type: "curiosity",
        x: 14,
        y: 43,
        w: 13,
        h: 27,
        icon: "umbrella",
        lines: ["Es un paraguas amarillo.", "El paraguas está seco."],
        englishLines: ["It is a yellow umbrella.", "The umbrella is dry."],
        english: "A yellow umbrella."
      },
      {
        id: "bike",
        label: "bicicleta",
        type: "lore",
        x: 78,
        y: 68,
        w: 16,
        h: 14,
        icon: "bike",
        lines: ["La bicicleta está junto a la casa.", "Carlos arregló la bicicleta ayer."],
        englishLines: ["The bicycle is next to the house.", "Carlos fixed the bicycle yesterday."],
        english: "The bike is beside the house. Carlos fixed it yesterday."
      }
    ]
  },
  {
    id: "cafe",
    title: "The Café",
    summary: "At the café, someone is waiting for the right drink.",
    palette: "cafe",
    intro: ["El café está lleno.", "Una persona espera su bebida."],
    introEnglish: "The cafe is full. Someone is waiting for their drink.",
    goal: "Serve café con leche.",
    pickups: ["coffee-milk", "tea-cup"],
    puzzle: {
      itemId: "coffee-milk",
      targetId: "customer",
      success: ["Café con leche.", "Muchas gracias."],
      successEnglish: "Coffee with milk. Thank you very much.",
      hint: "La persona quiere café con leche.",
      english: "The customer wants coffee with milk."
    },
    hotspots: [
      {
        id: "customer",
        label: "cliente",
        type: "story",
        x: 59,
        y: 45,
        w: 14,
        h: 26,
        icon: "customer",
        lines: ["La persona espera.", "Quiere café con leche."],
        englishLines: ["The person is waiting.", "They want coffee with milk."],
        english: "The customer is waiting for coffee with milk."
      },
      {
        id: "barista",
        label: "barista",
        type: "story",
        x: 31,
        y: 41,
        w: 13,
        h: 26,
        icon: "barista",
        lines: ["La barista prepara café.", "La taza está lista."],
        englishLines: ["The barista prepares coffee.", "The cup is ready."],
        english: "The barista is making coffee."
      },
      {
        id: "coffee-milk",
        label: "café con leche",
        type: "story",
        x: 43,
        y: 64,
        w: 10,
        h: 10,
        icon: "coffee",
        collectable: true,
        lines: ["Es café con leche.", "La bebida está caliente."],
        englishLines: ["It is coffee with milk.", "The drink is hot."],
        english: "Coffee with milk."
      },
      {
        id: "tea-cup",
        label: "té",
        type: "curiosity",
        x: 51,
        y: 64,
        w: 9,
        h: 10,
        icon: "tea",
        collectable: true,
        lines: ["Es té.", "El té huele a menta."],
        englishLines: ["It is tea.", "The tea smells like mint."],
        english: "Mint tea."
      },
      {
        id: "table",
        label: "mesa",
        type: "curiosity",
        x: 72,
        y: 69,
        w: 18,
        h: 13,
        icon: "table",
        lines: ["Hay una mesa pequeña.", "Dos amigos se sientan aquí."],
        englishLines: ["There is a small table.", "Two friends sit here."],
        english: "A small table."
      },
      {
        id: "menu",
        label: "menú",
        type: "lore",
        x: 13,
        y: 24,
        w: 15,
        h: 18,
        icon: "menu",
        lines: ["El menú dice café, leche y pan.", "Este café abre temprano."],
        englishLines: ["The menu says coffee, milk, and bread.", "This cafe opens early."],
        english: "The menu says coffee, milk, and bread."
      }
    ]
  },
  {
    id: "festival",
    title: "Festival Lantern",
    summary: "Evening arrives and the village decorates together.",
    palette: "festival",
    intro: ["Es de noche.", "El pueblo prepara una fiesta.", "Luna quiere ayudar."],
    introEnglish: "It is night. The town is preparing a festival. Luna wants to help.",
    goal: "Place the lantern for the festival.",
    pickups: ["lantern", "flower"],
    puzzle: {
      itemId: "lantern",
      targetId: "arch",
      success: ["La fiesta está lista.", "Todos están felices.", "Gracias, Luna."],
      successEnglish: "The festival is ready. Everyone is happy. Thank you, Luna.",
      hint: "La linterna brilla arriba, en el arco.",
      english: "The lantern should glow up on the arch."
    },
    hotspots: [
      {
        id: "luna",
        label: "Luna",
        type: "story",
        x: 44,
        y: 54,
        w: 14,
        h: 24,
        icon: "luna",
        lines: ["Luna está feliz.", "Quiere ayudar con la fiesta."],
        englishLines: ["Luna is happy.", "She wants to help with the party."],
        english: "Luna is happy and wants to help."
      },
      {
        id: "arch",
        label: "arco",
        type: "story",
        x: 36,
        y: 18,
        w: 30,
        h: 30,
        icon: "arch",
        lines: ["Hay un arco para la fiesta.", "El arco necesita luz."],
        englishLines: ["There is an arch for the party.", "The arch needs light."],
        english: "The festival arch needs light."
      },
      {
        id: "lantern",
        label: "linterna",
        type: "story",
        x: 22,
        y: 61,
        w: 11,
        h: 15,
        icon: "lantern",
        collectable: true,
        lines: ["Es una linterna.", "La linterna brilla en la noche."],
        englishLines: ["It is a lantern.", "The lantern shines in the night."],
        english: "A lantern that glows at night."
      },
      {
        id: "flower",
        label: "flor",
        type: "curiosity",
        x: 69,
        y: 65,
        w: 10,
        h: 10,
        icon: "flower",
        collectable: true,
        lines: ["Es una flor.", "La flor es para la mesa."],
        englishLines: ["It is a flower.", "The flower is for the table."],
        english: "A flower for the table."
      },
      {
        id: "drum",
        label: "tambor",
        type: "curiosity",
        x: 80,
        y: 58,
        w: 12,
        h: 14,
        icon: "drum",
        lines: ["Es un tambor.", "El tambor suena fuerte."],
        englishLines: ["It is a drum.", "The drum sounds loud."],
        english: "A drum."
      },
      {
        id: "fireflies",
        label: "luces",
        type: "lore",
        x: 10,
        y: 20,
        w: 18,
        h: 20,
        icon: "fireflies",
        lines: ["Hay luces pequeñas.", "Las luces bailan sobre las flores."],
        englishLines: ["There are little lights.", "The lights dance over the flowers."],
        english: "Tiny lights dance over the flowers."
      }
    ]
  },
  {
    id: "greenhouse",
    title: "The Sleepy Seedling",
    summary: "An AI-generated greenhouse level with image-backed characters and items.",
    palette: "greenhouse",
    backgroundImage: greenhouseAsset("background", "assets/greenhouse-background.png"),
    intro: ["En el invernadero, una plantita está triste.", "Luna quiere ayudar."],
    introEnglish: "In the greenhouse, a little plant is sad. Luna wants to help.",
    goal: "Find what the thirsty seedling needs.",
    pickups: ["watering-can", "sun-ribbon", "garden-book"],
    puzzle: {
      itemId: "watering-can",
      targetId: "seedling",
      success: ["La plantita bebe agua.", "Ahora está feliz."],
      successEnglish: "The little plant drinks water. Now it is happy.",
      hint: "La plantita tiene sed. Usa la regadera.",
      english: "The little plant is thirsty. Use the watering can."
    },
    hotspots: [
      {
        id: "greenhouse-luna",
        label: "Luna",
        type: "story",
        x: 44,
        y: 43,
        w: 14,
        h: 40,
        image: greenhouseAsset("luna", "assets/greenhouse-luna.png"),
        lines: ["Luna mira la plantita.", "Luna quiere ayudar."],
        englishLines: ["Luna looks at the little plant.", "Luna wants to help."]
      },
      {
        id: "seedling",
        label: "plantita",
        type: "story",
        x: 59,
        y: 57,
        w: 12,
        h: 25,
        image: greenhouseAsset("seedling", "assets/greenhouse-seedling.png"),
        lines: ["La plantita tiene sed.", "Sus hojas están caídas."],
        englishLines: ["The little plant is thirsty.", "Its leaves are drooping."]
      },
      {
        id: "watering-can",
        label: "regadera",
        type: "story",
        x: 28,
        y: 59,
        w: 15,
        h: 15,
        image: greenhouseAsset("wateringCan", "assets/greenhouse-watering-can.png"),
        collectable: true,
        lines: ["Es una regadera.", "La regadera tiene agua."],
        englishLines: ["It is a watering can.", "The watering can has water."]
      },
      {
        id: "sun-ribbon",
        label: "cinta",
        type: "curiosity",
        x: 70,
        y: 42,
        w: 11,
        h: 18,
        image: greenhouseAsset("sunRibbon", "assets/greenhouse-sun-ribbon.png"),
        collectable: true,
        lines: ["Es una cinta amarilla.", "La cinta parece un sol."],
        englishLines: ["It is a yellow ribbon.", "The ribbon looks like a sun."]
      },
      {
        id: "garden-book",
        label: "libro",
        type: "lore",
        x: 18,
        y: 42,
        w: 12,
        h: 18,
        image: greenhouseAsset("gardenBook", "assets/greenhouse-garden-book.png"),
        collectable: true,
        lines: ["Es un libro de jardín.", "El libro muestra flores."],
        englishLines: ["It is a garden book.", "The book shows flowers."]
      }
    ]
  }
];

const iconMarkup = {
  luna: `<span class="chibi luna"><i></i></span>`,
  customer: `<span class="chibi customer"><i></i></span>`,
  barista: `<span class="chibi barista"><i></i></span>`,
  window: `<span class="prop window"><i></i></span>`,
  blanket: `<span class="prop blanket"></span>`,
  cat: `<span class="prop cat"><i></i></span>`,
  plant: `<span class="prop plant"><i></i></span>`,
  tea: `<span class="prop cup tea"></span>`,
  toast: `<span class="prop toast"></span>`,
  apple: `<span class="prop apple"></span>`,
  milk: `<span class="prop milk"></span>`,
  coffee: `<span class="prop cup coffee"></span>`,
  fridge: `<span class="prop fridge"></span>`,
  pot: `<span class="prop pot"><i></i></span>`,
  key: `<span class="prop key"></span>`,
  mailbox: `<span class="prop mailbox"></span>`,
  umbrella: `<span class="prop umbrella"></span>`,
  bike: `<span class="prop bike"></span>`,
  table: `<span class="prop table"></span>`,
  menu: `<span class="prop menu"></span>`,
  arch: `<span class="prop arch"></span>`,
  lantern: `<span class="prop lantern"></span>`,
  flower: `<span class="prop flower"></span>`,
  drum: `<span class="prop drum"></span>`,
  fireflies: `<span class="prop fireflies"><i></i><b></b></span>`
};

const state = {
  sceneIndex: Number(localStorage.getItem("luna.sceneIndex") || 0),
  selectedItemId: null,
  inventory: new Set(JSON.parse(localStorage.getItem("luna.inventory") || "[]")),
  completed: new Set(JSON.parse(localStorage.getItem("luna.completed") || "[]")),
  revealed: new Set(JSON.parse(localStorage.getItem("luna.revealed") || "[]")),
  clickCounts: {},
  hints: false,
  translated: false,
  currentEnglish: "",
  voice: true,
  lastUtterance: ""
};

const stage = document.querySelector("#scene-stage");
const caption = document.querySelector("#caption-text");
const speaker = document.querySelector("#speaker-name");
const englishHint = document.querySelector("#english-hint");
const sceneSummary = document.querySelector("#scene-summary");
const sceneList = document.querySelector("#scene-list");
const inventoryList = document.querySelector("#inventory-list");
const inventoryHelp = document.querySelector("#inventory-help");
const hintToggle = document.querySelector("#hint-toggle");
const speakToggle = document.querySelector("#speak-toggle");
const replayButton = document.querySelector("#replay-button");
const translateButton = document.querySelector("#translate-button");
const resetButton = document.querySelector("#reset-button");

function saveState() {
  localStorage.setItem("luna.sceneIndex", String(state.sceneIndex));
  localStorage.setItem("luna.inventory", JSON.stringify([...state.inventory]));
  localStorage.setItem("luna.completed", JSON.stringify([...state.completed]));
  localStorage.setItem("luna.revealed", JSON.stringify([...state.revealed]));
}

function currentScene() {
  return scenes[state.sceneIndex];
}

function speak(text) {
  state.lastUtterance = text;
  if (!state.voice || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "es-ES";
  utterance.rate = 0.86;
  utterance.pitch = 1.08;
  window.speechSynthesis.speak(utterance);
}

function showCaption(name, lines, english = "") {
  const text = Array.isArray(lines) ? lines.join(" ") : lines;
  state.translated = false;
  state.currentEnglish = english;
  speaker.textContent = name;
  caption.textContent = text;
  englishHint.textContent = english;
  englishHint.hidden = (!state.hints && !state.translated) || !english;
  translateButton.textContent = "Translate";
  translateButton.setAttribute("aria-pressed", "false");
  translateButton.disabled = !english;
  speak(text);
}

function renderSceneList() {
  sceneList.innerHTML = scenes
    .map((scene, index) => {
      const locked = index > 0 && scene.id !== "greenhouse" && !state.completed.has(scenes[index - 1].id);
      const active = index === state.sceneIndex;
      return `<button class="scene-step ${active ? "active" : ""}" data-scene="${index}" ${locked ? "disabled" : ""}>
        <span>${index + 1}</span>
        <b>${scene.title}</b>
      </button>`;
    })
    .join("");
}

function renderInventory() {
  const scene = currentScene();
  const items = [...state.inventory]
    .map((itemId) => {
      const item = scenes.flatMap((s) => s.hotspots).find((hotspot) => hotspot.id === itemId);
      if (!item) return "";
      const active = state.selectedItemId === item.id;
      return `<button class="inventory-item ${active ? "selected" : ""}" data-item="${item.id}">
        ${hotspotVisual(item)}
        <span>${item.label}</span>
      </button>`;
    })
    .join("");

  inventoryList.innerHTML = items || `<div class="empty-inventory">No items yet</div>`;
  inventoryHelp.textContent = state.selectedItemId
    ? `Selected: ${findHotspot(state.selectedItemId)?.label || state.selectedItemId}. Tap a scene target.`
    : scene.goal;
}

function findHotspot(id) {
  return scenes.flatMap((scene) => scene.hotspots).find((hotspot) => hotspot.id === id);
}

function hotspotVisual(hotspot) {
  if (hotspot.image) {
    return `<img class="asset-sprite" src="${hotspot.image}" alt="" draggable="false" />`;
  }
  return iconMarkup[hotspot.icon] || "";
}

function hotspotEnglish(hotspot, lineIndex) {
  return hotspot.englishLines?.[lineIndex] || hotspot.english || "";
}

function isHidden(hotspot) {
  return hotspot.hiddenUntil && !state.revealed.has(hotspot.hiddenUntil);
}

function renderStage() {
  const scene = currentScene();
  document.body.dataset.palette = scene.palette;
  sceneSummary.textContent = scene.summary;

  const hotspots = scene.hotspots
    .filter((hotspot) => !isHidden(hotspot))
    .map((hotspot) => {
      const collected = state.inventory.has(hotspot.id);
      const solved = state.completed.has(scene.id);
      const classes = ["hotspot", hotspot.type, collected ? "collected" : "", solved && hotspot.id === scene.puzzle.targetId ? "solved" : ""]
        .filter(Boolean)
        .join(" ");
      return `<button class="${classes}" data-hotspot="${hotspot.id}" style="left:${hotspot.x}%;top:${hotspot.y}%;width:${hotspot.w}%;height:${hotspot.h}%;">
        ${hotspotVisual(hotspot)}
        <span class="hotspot-label">${hotspot.label}</span>
      </button>`;
    })
    .join("");

  stage.innerHTML = `
    <div class="scene-backdrop scene-${scene.palette} ${scene.backgroundImage ? "image-scene" : ""}">
      ${scene.backgroundImage ? `<img class="scene-image" src="${scene.backgroundImage}" alt="" draggable="false" />` : ""}
      <div class="paper-texture"></div>
      <div class="sky"></div>
      <div class="room-line floor"></div>
      <div class="room-line wall"></div>
      <div class="rain-doodles"></div>
      ${state.completed.has(scene.id) ? `<div class="success-sparkles" aria-hidden="true"></div>` : ""}
      ${hotspots}
    </div>
  `;
}

function render() {
  renderSceneList();
  renderStage();
  renderInventory();
  const scene = currentScene();
  const intro = state.completed.has(scene.id) ? scene.puzzle.success : scene.intro;
  const introEnglish = state.completed.has(scene.id) ? scene.puzzle.successEnglish : scene.introEnglish;
  showCaption(scene.title, intro, introEnglish);
}

function onHotspotClick(hotspotId) {
  const scene = currentScene();
  const hotspot = scene.hotspots.find((item) => item.id === hotspotId);
  if (!hotspot) return;

  if (state.selectedItemId) {
    tryPuzzle(hotspot);
    return;
  }

  state.clickCounts[hotspot.id] = (state.clickCounts[hotspot.id] || 0) + 1;
  const lineIndex = Math.min(state.clickCounts[hotspot.id] - 1, hotspot.lines.length - 1);
  showCaption(hotspot.label, hotspot.lines[lineIndex], hotspotEnglish(hotspot, lineIndex));

  if (hotspot.reveals) {
    state.revealed.add(hotspot.id);
    saveState();
    renderStage();
  }

  if (hotspot.collectable && scene.pickups.includes(hotspot.id)) {
    state.inventory.add(hotspot.id);
    state.selectedItemId = hotspot.id;
    showCaption(hotspot.label, hotspot.lines[lineIndex], hotspotEnglish(hotspot, lineIndex));
    saveState();
    renderInventory();
    renderStage();
  }
}

function tryPuzzle(target) {
  const scene = currentScene();
  const puzzle = scene.puzzle;
  const selected = state.selectedItemId;
  if (selected === puzzle.itemId && target.id === puzzle.targetId) {
    state.completed.add(scene.id);
    state.inventory.delete(selected);
    state.selectedItemId = null;
    showCaption(scene.title, puzzle.success, puzzle.successEnglish);
    saveState();
    render();
    return;
  }

  showCaption(target.label, puzzle.hint, puzzle.english);
  state.selectedItemId = null;
  renderInventory();
}

stage.addEventListener("click", (event) => {
  const button = event.target.closest("[data-hotspot]");
  if (!button) return;
  onHotspotClick(button.dataset.hotspot);
});

sceneList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-scene]");
  if (!button) return;
  state.sceneIndex = Number(button.dataset.scene);
  state.selectedItemId = null;
  saveState();
  render();
});

inventoryList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-item]");
  if (!button) return;
  const id = button.dataset.item;
  state.selectedItemId = state.selectedItemId === id ? null : id;
  const hotspot = findHotspot(id);
  showCaption(hotspot.label, hotspot.lines[0], hotspotEnglish(hotspot, 0));
  renderInventory();
});

hintToggle.addEventListener("click", () => {
  state.hints = !state.hints;
  hintToggle.textContent = state.hints ? "Hints on" : "Hints off";
  hintToggle.setAttribute("aria-pressed", String(state.hints));
  englishHint.hidden = (!state.hints && !state.translated) || !englishHint.textContent;
});

speakToggle.addEventListener("click", () => {
  state.voice = !state.voice;
  speakToggle.textContent = state.voice ? "Voice on" : "Voice off";
  speakToggle.setAttribute("aria-pressed", String(state.voice));
  if (!state.voice && "speechSynthesis" in window) window.speechSynthesis.cancel();
});

replayButton.addEventListener("click", () => {
  if (state.lastUtterance) speak(state.lastUtterance);
});

translateButton.addEventListener("click", () => {
  if (!state.currentEnglish) return;
  state.translated = !state.translated;
  englishHint.hidden = (!state.hints && !state.translated) || !englishHint.textContent;
  translateButton.textContent = state.translated ? "Hide translation" : "Translate";
  translateButton.setAttribute("aria-pressed", String(state.translated));
});

resetButton.addEventListener("click", () => {
  state.sceneIndex = 0;
  state.selectedItemId = null;
  state.inventory.clear();
  state.completed.clear();
  state.revealed.clear();
  state.clickCounts = {};
  saveState();
  render();
});

render();
