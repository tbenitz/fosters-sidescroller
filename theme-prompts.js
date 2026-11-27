// Local prompt planner. Tessera paints one object, not an entire scene.
const worlds=[
{re:/\b(space|astronauts?|planets?|galaxy|moon|cosmic|aliens?|martians?|extraterrestrials?|rockets?|starships?|mars|saturn|solar)\b/i,hero:'astronaut',treasure:'golden star',plant:'purple ringed planet',friend:'friendly green alien',block:'gray metal floor tile',goal:'red rocket ship'},
{re:/\b(candy|chocolate|sweets|cookie|cake|donut|doughnut|lollipop|ice cream|cupcake)\b/i,hero:'gingerbread person',treasure:'wrapped candy',plant:'swirly lollipop',friend:'smiling gummy bear',block:'pink frosted wafer tile',goal:'striped candy cane flag'},
{re:/\b(underwater|ocean|sea|reef|aquatic|mermaid|shark|fish|dolphin|submarine)\b/i,hero:'little scuba diver',treasure:'shiny pearl',plant:'pink coral',friend:'friendly orange seahorse',block:'blue stone tile',goal:'yellow submarine'},
{re:/\b(forest|woodland|jungle|rainforest|tree|nature|garden|magic|magical|fairy|enchanted)\b/i,hero:'little forest explorer',treasure:'glowing pink crystal',plant:'green oak tree',friend:'friendly rabbit',block:'mossy stone tile',goal:'golden castle door'},
{re:/\b(dinosaur|dinosaurs|dino|dinos|prehistoric|jurassic|t rex|trex)\b/i,hero:'little green dinosaur',treasure:'fossil egg',plant:'prehistoric fern',friend:'baby triceratops',block:'brown rock tile',goal:'striped explorer flag'},
{re:/\b(snow|ice|winter|arctic|frozen|penguin)\b/i,hero:'little penguin',treasure:'blue snowflake',plant:'snowy pine tree',friend:'white arctic fox',block:'blue ice tile',goal:'red finish flag'},
{re:/\b(desert|sand|pyramid|egypt|western|cowboy)\b/i,hero:'little explorer',treasure:'gold coin',plant:'green cactus',friend:'friendly lizard',block:'sandstone brick tile',goal:'golden pyramid'},
{re:/\b(pirate|pirates|ship|beach|island|tropical)\b/i,hero:'little pirate',treasure:'gold treasure chest',plant:'palm tree',friend:'colorful parrot',block:'wooden plank tile',goal:'pirate ship'},
{re:/\b(robot|robots|factory|cyber|future|futuristic|city|tech)\b/i,hero:'friendly robot',treasure:'glowing battery',plant:'neon streetlamp',friend:'tiny floating robot',block:'steel panel tile',goal:'glowing portal'},
{re:/\b(castle|knight|dragon|medieval|princess|kingdom|unicorn)\b/i,hero:'little knight',treasure:'golden crown',plant:'pink flower',friend:'friendly baby dragon',block:'gray castle brick tile',goal:'castle gate'},
{re:/\b(farm|barn|country|tractor)\b/i,hero:'little farmer',treasure:'red apple',plant:'sunflower',friend:'baby chicken',block:'wooden plank tile',goal:'red barn'},
{re:/\b(volcano|lava|fire|volcanic)\b/i,hero:'little explorer',treasure:'red ruby',plant:'black volcanic rock',friend:'orange salamander',block:'dark basalt tile',goal:'golden flag'}
];
const subjects=[
[/\b(cat|cats|kitty|kitten|kittens)\b/i,'cat'],[/\b(dog|dogs|puppy|puppies)\b/i,'dog'],[/\b(dinosaur|dinosaurs|dino|dinos|t rex|trex)\b/i,'dinosaur'],[/\b(unicorn|unicorns)\b/i,'unicorn'],[/\b(robot|robots)\b/i,'robot'],[/\b(dragon|dragons)\b/i,'dragon'],[/\b(penguin|penguins)\b/i,'penguin'],[/\b(fox|foxes)\b/i,'fox'],[/\b(bunny|bunnies|rabbit|rabbits)\b/i,'rabbit'],[/\b(frog|frogs)\b/i,'frog'],[/\b(bear|bears)\b/i,'bear'],[/\b(panda|pandas)\b/i,'panda'],[/\b(monkey|monkeys)\b/i,'monkey'],[/\b(axolotl|axolotls)\b/i,'axolotl'],[/\b(turtle|turtles)\b/i,'turtle'],[/\b(shark|sharks)\b/i,'shark'],[/\b(mermaid|mermaids)\b/i,'mermaid'],[/\b(princess|princesses)\b/i,'princess'],[/\b(knight|knights)\b/i,'knight'],[/\b(pirate|pirates)\b/i,'pirate'],[/\b(astronaut|astronauts)\b/i,'astronaut'],[/\b(ghost|ghosts)\b/i,'ghost'],[/\b(duck|ducks)\b/i,'duck'],[/\b(hamster|hamsters)\b/i,'hamster'],[/\b(bee|bees)\b/i,'bee'],[/\b(squirrel|squirrels)\b/i,'squirrel'],[/\b(owl|owls)\b/i,'owl'],[/\b(mouse|mice)\b/i,'mouse'],[/\b(elephant|elephants)\b/i,'elephant'],[/\b(lion|lions)\b/i,'lion'],[/\b(tiger|tigers)\b/i,'tiger']
];
const fallback={hero:'little adventurer',treasure:'golden coin',plant:'green tree',friend:'friendly bunny',block:'brown stone tile',goal:'checkered finish flag'};

// A subject not in the dictionary is still retained, rather than silently replaced.
const extras=[
[/\b(lizards?|geckos?|iguanas?|chameleons?|reptiles?)\b/i,'lizard'],
[/\b(martians?|aliens?|extraterrestrials?)\b/i,'Martian alien'],
[/\b(zombies?)\b/i,'zombie'],[/\b(vampires?)\b/i,'vampire'],[/\b(wizards?)\b/i,'wizard'],
[/\b(potatoes?)\b/i,'potato'],[/\b(bananas?)\b/i,'banana'],[/\b(pizzas?)\b/i,'pizza'],
[/\b(octopus|octopuses|octopi)\b/i,'octopus'],[/\b(squids?)\b/i,'squid'],
[/\b(skeletons?)\b/i,'skeleton'],[/\b(monsters?)\b/i,'monster'],
[/\b(crocodiles?|alligators?)\b/i,'crocodile'],[/\b(snakes?)\b/i,'snake'],
[/\b(raccoons?)\b/i,'raccoon'],[/\b(sloths?)\b/i,'sloth'],[/\b(cap ybaras?|capybaras?)\b/i,'capybara'],
[/\b(koalas?)\b/i,'koala'],[/\b(giraffes?)\b/i,'giraffe'],[/\b(horses?|ponies?)\b/i,'horse'],
[/\b(chickens?)\b/i,'chicken'],[/\b(cows?)\b/i,'cow'],[/\b(pigs?)\b/i,'pig'],
[/\b(butterfl(?:y|ies))\b/i,'butterfly'],[/\b(spiders?)\b/i,'spider'],
[/\b(ninjas?)\b/i,'ninja'],[/\b(superheroes?|superhero)\b/i,'superhero'],
[/\b(snowmen|snowman)\b/i,'snowman'],[/\b(gingerbread (?:man|men|person))\b/i,'gingerbread person']
];
const mars={hero:'little astronaut',treasure:'glowing green space crystal',plant:'red Martian rock formation',friend:'green Martian alien',block:'red rocky Mars terrain tile',goal:'silver flying saucer'};
const colorRE=/\b(red|blue|green|pink|purple|yellow|orange|black|white|golden|brown|rainbow)\b/;
const stop=/\b(world|land|planet|level|game|adventure|place|city|forest|kingdom|ocean|desert|space|jungle|island)\b/;
function singular(v){return v.replace(/\b(\w+)ies$/,'$1y').replace(/\b(\w+(?:ch|sh|x|ss))es$/,'$1').replace(/\b(\w{3,}[^sui])s$/,'$1')}
function subjectOf(chunk,allowUnknown=true){const clean=chunk.trim().replace(/^(?:(?:a|an|the|my|some|cute|little|friendly|scary|evil|giant|tiny)\s+)+/,'').replace(/\b(?:game|adventure) (?:about|with)\s*/,'');let match=[...subjects,...extras].map(([r,n])=>({index:clean.search(r),name:n})).filter(s=>s.index>=0).sort((a,b)=>a.index-b.index)[0];if(match)return {name:match.name,known:true};let candidate=clean.replace(colorRE,'').replace(/[^a-z0-9' ]/g,' ').trim().replace(/\s+/g,' ');if(allowUnknown&&candidate&&candidate.split(' ').length<=4&&!stop.test(candidate))return {name:singular(candidate),known:false};return null}
export function planTheme(raw){
const text=String(raw||'').toLowerCase().replace(/[-–—]/g,' ').replace(/\b(?:a game|a world|an adventure) (?:about|with|where)\s+/,'').trim();
const locationMatch=text.match(/\b(?:in|on|inside|at|exploring|visiting|through|under|among|across)\s+(.+)$/);
const location=locationMatch?.[1]||'';
const scene=locationMatch?text.slice(0,locationMatch.index).trim():text;
const versus=scene.match(/\b(?:fighting|fight(?:s)?|battling|battle(?:s)?|vs\.?|versus|against|chasing|chase(?:s)?|escaping from|running from|defeating|saving|rescuing|befriending|playing with|and)\s+(.+)$/);
const lead=versus?scene.slice(0,versus.index).trim():scene;
const rival=versus?subjectOf(versus[1]):null;
const explicitMars=/\b(mars|martians?)\b/.test(location)||(!location&&/\b(mars|martians?)\b/.test(scene));
function findWorld(t){if(/\b(candy|chocolate|sweets|cookie|cake|donut|doughnut|lollipop|ice cream|cupcake)\b/.test(t))return worlds[1];return worlds.find(w=>w.re.test(t))}
const world=explicitMars?mars:findWorld(location)||findWorld(scene);
const out={...fallback,...(world||{})};delete out.re;
const hero=subjectOf(lead,!!versus||!!location||!world);
if(hero){const color=lead.match(colorRE)?.[0];let mod=(world===worlds[0]||world===mars)&&!['astronaut','Martian alien'].includes(hero.name)?'astronaut':world===worlds[2]&&!['mermaid','shark','turtle','fish','octopus','squid'].includes(hero.name)?'scuba diving':'';out.hero=[color||'cute',mod,hero.name].filter(Boolean).join(' ')}
if(rival){const color=versus[1].match(colorRE)?.[0];out.friend=[color||(rival.name==='Martian alien'?'green':'cartoon'),rival.name].join(' ')}
// For unfamiliar settings, do not fabricate a generic scene and claim it was understood.
// Retain the extracted characters; ask the child to review the remaining guesses.
let review=!world||(!hero&&!!versus)||!!(hero&&!hero.known)||!!(rival&&!rival.known);
if(!world&&location){let loc=location.replace(/^(?:a|an|the)\s+/,'').trim();if(loc.split(' ').length<=4){out.plant=loc+' decoration';out.block=loc+' floor tile';out.goal=loc+' doorway'}}
if(!world&&!hero&&text){out.hero=text.slice(0,70);review=true}
return {...out,review,setting:world===mars?'mars':world===worlds[0]?'space':world===worlds[1]?'candy':world===worlds[2]?'ocean':world===worlds[3]?'forest':null}
}
