import {Language} from "./languages";

interface Ii18n {
  [Language.en]: string;
  [Language.hu]: string;
}

export interface IAdvice {
  id: number,
  text: Ii18n,
  tags: Tag[]
}
export type Tag = "device" | "water" | "car" | "lifestyle" | "household";
export const advices: IAdvice[] = [
  {
    text: {
      [Language.en]: `Try not to use your phone / laptop below 20%, it will significantly increase your battery lifetime.`,
      [Language.hu]: "Próbáld a telefonod / laptopod használatát mellőzni 20% alatt, ezzel jelentősen megnöveled az akkumulátor élettartamát."
    },
    id: 1,
    tags: ["device"]
  },
  {
    text: {
      [Language.en]: `Use "fast charge" method only at emergency. It's significantly decrease your battery lifetime.`,
      [Language.hu]: `A "gyors töltés" funkciót csak vészhelyzet esetén használd. Jelentősen csökkenti az akkumulátorod élettartamát.`
    },
    id: 2,
    tags: ["device"]
  },
  {
    text: {
      [Language.en]: `Keep your phone / laptop temperature just right. Kept out of direct sunlight in summer and don't left outdoors in winter. Optimal temperature is between 0°C and 45°C.`,
      [Language.hu]: `Tartsd normál hőmérsékleten a telefonod / laptopod. Ne tartsd közvetlen napfényen nyáron és ne hagyd kint hosszabb ideig télen. Az optimális hőmérséklete 0℃ és 45℃ között van.`
    },
    id: 3,
    tags: ["device"]
  },
  {
    text: {
      [Language.en]: `Keep your phone / laptop temperature just right. Avoid prolonged video watching and game playing. When you feel that your device is hot for a longer time, take a break and let the device cool down.`,
      [Language.hu]: `Tartsd normál hőmérsékleten a telefonod / laptopod. Kerüld a hosszan tartó videónézéseket és játékoket, amikor érzed hogy már hosszabb ideje forró a telefonod / laptopod, tarts szünetet és hagyd hogy lehűljön.`
    },
    id: 4,
    tags: ["device"]
  },
  {
    text: {
      [Language.en]: `It's okay to have a shower only every second day, if it's not disturbing you nor your environment.`,
      [Language.hu]: "Elég két naponta zuhanyoznod, ha ez nem zavaró neked vagy a környezetednek."
    },
    id: 5,
    tags: ["water"]
  },
  {
    text: {
      [Language.en]: `Don't do the dishes until you have a full load. Your dishwasher uses 12 gallons of water whether it's full or half-empty.`,
      [Language.hu]: "Csak akkor indítsd be a mosogatógépet, ha tele van. Kb. 45 liter vizet fog felhasználni egy mosogatáshoz, akkor is ha tele van és akkor is ha csak félig."
    },
    id: 6,
    tags: ["water"]
  },
  {
    text: {
      [Language.en]: `Wash a full load of laundry. Your washing machine uses 40 gallons of water. Run it full, or adjust the water level to the size of your load.`,
      [Language.hu]: "Csak teljesen megtöltve használd a mosógépet. Kb. 150 liter vizet használ a gép egy mosáshoz, függetlenül attól mennyi ruha van benne. Kivéve ha olyan a mosógéped, hogy be tudod állítani mennyi ruhát mosol, így csak az ahhoz szükséges vízmennyiséget fogja felhaszálni."
    },
    id: 7,
    tags: ["water"]
  },
  {
    text: {
      [Language.en]: `Don't let the water run while you shave or brush your teeth. Turn it on only when you need it. Every minute the faucet runs, five gallons of water go down the drain.`,
      [Language.hu]: "Zárd el a csapot miközben fogat mosol vagy borotválkozol. Csak akkor nyisd meg, ha szükséged van a vízre. Minden percben, miközben a csap folyik, kb. 15 liter víz folyik le a lefolyón."
    },
    id: 8,
    tags: ["water"]
  },
  {
    text: {
      [Language.en]: `Recycle. If your community does not offer a recycling program, ask local officials to start one.`,
      [Language.hu]: "Gyűjtsd szelektíven a szemetet. Ha nincsenek szelektív kukák a környékeden, vedd fel a kapcsolatot a helyi megválasztott képviselőiddel és kérd meg őket hogy indítsanak programot."
    },
    id: 9,
    tags: ["household"]
  },
  {
    text: {
      [Language.en]: `Don't put hazardous materials in the trash. Save paints, pesticides, lawn chemicals, car batteries, waste oil and similar materials for your local household hazardous waste collection day.`,
      [Language.hu]: "Ne dobd a veszélyes hulladékot a sima szemetesbe. Tárold magadnál a kidobandó festékeket, rovarirtókat, kerti vegyszereket, elemeket, akkumulátorokat, használt olajat és hasonló anyagokat a következő lomtalanítási időszakig, amikor a hatóságok a veszélyes hulladékokat is begyűjtik a környékeden."
    },
    id: 10,
    tags: ["household"]
  },
  {
    text: {
      [Language.en]: `Don't buy more than you need. When it comes to lawn chemicals, pesticides, paints and other hazardous materials, buy a smaller package so you won't have leftovers to dispose of.`,
      [Language.hu]: "Csak annyit vásárolj amennyire szükséged van. Különösen amikor kerti vegyszereket, festékeket és egyéb veszélyes anyagokat szerzel be, próbálj kisebb csomagolást venni, hogy ne maradjon hulladékként."
    },
    id: 11,
    tags: ["household"]
  },
  {
    text: {
      [Language.en]: `Paper or plastic? Better yet, take a canvas bag to the grocery and re-use it each time you shop.`,
      [Language.hu]: "Papír vagy műanyag zacskó? Sokkal jobb ha veszel egy vászontáskát, és mindig viszed magaddal bevásárláshoz."
    },
    id: 12,
    tags: ["household"]
  },
  {
    text: {
      [Language.en]: `Use rechargeable batteries. Many batteries contain metals that are better kept out of landfills.`,
      [Language.hu]: "Használj újratölthetős elemet. A legtöbb elem olyan veszélyes fémeket tartalmaz, amiket jobb ha távol tartunk a hulladéklerakóktól."
    },
    id: 13,
    tags: ["household"]
  },
  {
    text: {
      [Language.en]: `Give it away, don't throw it away. Many charitable organizations accept donations of wearable clothing and gently used household items. Or you can sell it on classified advertisement websites, so you can earn some money from it.`,
      [Language.hu]: "Add tovább, ne dobd ki. Rengeteg jótékonysági szervezet van, akik átveszik adományként a használt ruháidat és megkímélt háztartási eszközeidet. Vagy add el apróhirdetési oldalakon és még pénzt is keresel vele."
    },
    id: 14,
    tags: ["household"]
  },
  {
    text: {
      [Language.en]: `Regularly and properly maintained vehicles get better gas mileage and emit fewer pollutants.`,
      [Language.hu]: "A rendszeresen, szakszerűen karbantartott autónak jobb a teljesítménye, kevesebbet fogyaszt és kevesebb káros anyagot is bocsát ki."
    },
    id: 15,
    tags: ["car"]
  },
  {
    text: {
      [Language.en]: `Don't top off your gas tank. Overfilling causes spills that release hydrocarbons and other toxic chemicals into the air and it can also damage your engine.`,
      [Language.hu]: `Sose töltsd túl a tankot. Az "első kattanás" utáni rátöltés túlcsordulást okozhat, ami szénhidrogének és egyéb mérgező gázok levegőbe jutását eredményezni, továbbá a motort is károsíthatja.`
    },
    id: 16,
    tags: ["car"]
  },
  {
    text: {
      [Language.en]: `Walk, bike or use mass-transit whenever you can. Vehicle traffic is a major contributor to smog.`,
      [Language.hu]: `Sétálj, biciklizz vagy használj tömegkezlekedést, amikor csak tudsz. A járműforgalom a szmog fő okozója.`
    },
    id: 17,
    tags: ["car", "lifestyle"]
  },
  {
    text: {
      [Language.en]: `Use a bucket when you wash the car, instead of the hose. Letting the water run while you work costs money and wastes water. Only use the hose to rinse.`,
      [Language.hu]: `Használj egy vizes vödröt autómosáshoz a slag helyett. Ha bekapcsolva bekapcsolva a slagot miközben takarítod a kocsit azzal pocsékolod a vizet és felesleges pénzkidobás is. Csak az öblítésre használd a slagot.`
    },
    id: 18,
    tags: ["car", "water"]
  },
  {
    text: {
      [Language.en]: `Don't burn your yard waste. It's illegal in many cases and releases mold spores, soot, and other contaminants that can aggravate allergies and cause respiratory problems.`,
      [Language.hu]: `Ne égesd el az udvari hulladékot. Sok esetben illegális és rendkívül káros anyagokat juttat a levegőbe: penész spórákat, kormot és egyéb szennyezőanyagokat, amik allergiás reakciókat és legzőszervi megbetegedéseket okoznak a környéken élőknél.`
    },
    id: 19,
    tags: ["household"]
  },
  {
    text: {
      [Language.en]: `Plant a tree. It gives you peace of mind and increases creativity. Trees also absorb carbon dioxide, a greenhouse gas.`,
      [Language.hu]: `Ültess fát a kertbe. Nyugalmat áraszt, serkenti a kreativitást és elnyeli az üvegházhatású szén-dioxidot.`
    },
    id: 20,
    tags: ["household", "lifestyle"]
  },
  {
    text: {
      [Language.en]: `At winter you pay for energy to heat up your environment. If you use hot objects smartly you need less energy: Don't drain off boiled water immediately after use (e.x. after bath or after cook), wait until the water cool down first.`,
      [Language.hu]: `Télen fizetsz az energiáért, amivel felfűtöd a környezeted. Ha a forró tárgyakat ügyesen használod, kevesebb energiára lesz szükséged: Ne ereszd le a forralt vizet rögtön használat után (pl. fürdés vagy főzés után), hagyd hogy kihűljön először.`
    },
    id: 21,
    tags: ["household"]
  }
];