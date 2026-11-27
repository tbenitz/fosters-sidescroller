// Local prompt planner. Tessera paints one object, not an entire scene.
const worlds=[
{re:/\b(space|astronaut|planet|galaxy|moon|cosmic|alien|rocket|starship|mars|saturn|solar)\b/i,hero:'astronaut',treasure:'golden star',plant:'purple ringed planet',friend:'friendly green alien',block:'gray metal floor tile',goal:'red rocket ship'},
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
export function planTheme(raw){const text=String(raw||'').toLowerCase().replace(/[-–—]/g,' ').trim();
// A location after a preposition outranks a hero word (e.g. dinosaurs on a candy planet).
const split=text.match(/\b(?:in|on|inside|at|exploring|visiting|through|under|among)\s+(.+)$/);
const location=split?.[1]||text;
let world=worlds.find(w=>w.re.test(location));if(location.includes('candy planet'))world=worlds[1];if(!world)world=worlds.find(w=>w.re.test(text));
const out={...fallback,...(world||{})};delete out.re;
const head=split?text.slice(0,split.index):text;
let subject=subjects.map(([r,n])=>({index:head.search(r),name:n})).filter(s=>s.index>=0).sort((a,b)=>a.index-b.index)[0]?.name;
if(!subject&&split){let candidate=head.replace(/^(?:a game (?:about|with) |a |an |the |my |cute |little )+/g,'').trim();if(/^[a-z]+(?: [a-z]+){0,2}$/.test(candidate))subject=candidate}
if(subject){const color=head.match(/\b(red|blue|green|pink|purple|yellow|orange|black|white|golden|brown|rainbow)\b/)?.[0];let modifier=world===worlds[0]&&subject!=='astronaut'?'astronaut':world===worlds[2]&&!['mermaid','shark','turtle','fish'].includes(subject)?'scuba diving':'';out.hero=[color||'cute',modifier,subject].filter(Boolean).join(' ')}
return out}
