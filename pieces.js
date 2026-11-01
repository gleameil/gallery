// The Galleries — piece data (shape: see pieces.schema.ts)
// Data chores applied vs. first Metadata-wing export:
//   • src normalized to img/{id}-1024.webp convention (srcset derives -400/-2048)
//   • width/height: used for aspect-ratio reservation (inch values give the
//     correct ratio; replace with pixel dims at leisure)
//   • C6 state src given img/ prefix — TODO confirm exported filename
//   • "&#39;" entity in AV24 ekphrasis → ’

const PIECES = [
{
  id: "C10", title: "The Tree of Life",
  image: { src: "img/C10-1024.webp", alt: "colorful tree with different kinds of fruit: bananas, dates, purple globes, stars, faces, and similar", width: 20, height: 16 },
  date: "2014", medium: "acrylic on canvas", dimensions: "20 × 16",
  fate: { kind: "curated", where: "bedroom" },
  axes: { era: "bookstore era", month: "December", subjects: ["tree"], series: ["Tree of Life"], rooms: ["Imagination", "Completion"] },
  card: {
    exposition: "As a small child I had a dream of a tree with many different kinds of fruit; I've been drawing and painting this tree ever since, not so much because I was haunted by it as because I loved the idea of a beautiful and significant dream (most of mine were boring or terrifying), so I chose to make it prophetic: it developed meaning in my Evernostian mythology as the Tree of Life — not the Judeo-Christian one, or not quite, or not only.",
    ekphrasis: [{ voice: "Artist", date: "Spring 2010", text: "I cannot describe the Tree of Life here; I will give you a few of the sorts of things you might or might not see if you visit it.  Someday I'll make the traditional, systematic attempt on the tree itself, root by root, leaf by leaf, fruit by fruit, discussing its thousand levels, the sap that sustains it, its knots and wounds, the insects tunneling in its wood and the animals wrangling among its branches, the progress of pollen from flower to flower and the honeys of the bees that carry it.  But bear in mind that many of its lesser companions already beggar description: a tree with doves for fruit, happily roosting and flying about the tree, but at the same time also white flowers and sweet white nutty berries, and a tree that has pink flowers and roots in clouds as well as the white ground you approach it on, which extends its roots throughout creation. The Tree of Life is found with them in the realm of unending summer and perpetual day.  A gold fence cages it, and even if it lets you catch it you must then cross the fence, a task whose difficulties most of the few who have attempted it and described their failure found to be as indescribable as they were insurmountable. Here is one adventurer's account, which others have endorsed as at least an image of the truth despite the wealth of idiosyncratic detail: the fence has hundreds of many-eyed guardians, one for each gold fencepost, its own particular emblem at the top of that post, and the image of its own sort of eye engraved all along that post, ready to appear when you brush against it however slightly and pierce you with every glance from every eye, which takes the form of a spear, shaped and barbed uniquely, every sight and turn, catching from you a new name, a new aspect, a new body part, with every look, and each is twisted and wrought into its area of the fence, until you are transfixed into the design: a suspended and incomplete form of the real penalty for trespassing, for which the gatekeepers on their rounds will eventually liberate your fragmented awarenesses, a penalty they claim (untruly, I believe, if it's the fruit you came for) is a genuine, though the cruelest, fulfillment of your desire.  The elder carries a sword that burns with the flat fire sun on gold, which is the last recorded remnant of the sun here, because the Tree and the sky have encompassed everything it was.  The fire is what lets the sword cut you free.  It only strengthens and hardens the fence itself while you, imperfect, are washed from it.  The younger gatekeeper holds a chain, an endless gold chain drawn up from between the Tree's roots.  He binds you with it, assesses you, and finds the place among the Tree's massive roots and lower trunk where you belong, often the place you came from, and holds you there (perhaps a single piece of bark, the Tree is larger than it ever was) for the elder to pin you with his sword through your heart, setting up a fire within you, assuring that you will be returned intact and whole as you weren't even when you arrived, which is to say wholly within their plane and subject to them.  It then remains only for you to hang wailing and fading until every last perspective of every last guardian has done away with you.  No blood, no harm, likely as not no memories.   The sky is flat behind the Tree.  Not flat like a solid plane of sky blue, it's still intangible, but there is absolutely an end to it in this place.  The branches of the tree touch the far reaches of the sky, there is no depth to the blue anymore, nowhere you could travel.  This is the extremity of the sky, this is the far ends of reality in all directions.  Really, once you are inside the gate, what happens to space is hard to express.  There is only one direction, and that is toward the tree, and what is behind it, which is this extreme of all space.  From this conjunction, the tree to the sky, like from a contradiction or a division by zero, every kind of fruitfulness emerges, the tree is the structure and reality, and all leftovers are taken care of in perfect, unbroken, careless, and contemptuous infinity.  There is nowhere else left for things to come from, this is the absolute of daylight.   You may not notice that this conjunction is the wellspring of all things.  Here, for example, pour birds, an unending stream of birds, out into the world, if you come to it on the right day with the right eyes.  Or water.  From the outside, usually, the tree is all locked up in its fence and its protections, stiff barrier number one, all gold and sectioning, locked, wrought, bound.  But since anything can emerge, everything that breaks down the gate also comes.   Here--one day, in the future, when some mighty liberation comes to pass at the end of things, or a new beginning--or perhaps every moment, all the time--floods leap out around the tree and break open the gate and flow out to the whole world, breaking the fine gold locks and the links of the chain, quenching the fire of the sword, opening and leveling and making a mockery of the rules.  The petals of flowers to everyone, seeds, life to everyone who will swim up or eddy in, the tree itself being stripped at every moment and growing anew to replace what was taken.  That flow of water is why we have oceans at all.  But you will see that gate and not the floods.   There is in most senses nothing beyond the Tree.  It is nonetheless possible, with a possibility hedged by every kind of impossibility, to pass further north still, from perpetual day to eternal night, where the earth meets the stars and the fruit that grows is something else entirely." }]
  },
  favorite: 1
},
{
  id: "AV24", title: "Firebird",
  image: { src: "img/AV24-1024.webp", alt: "the yellow-eyed, crested head of a red bird looking at two fruitlike, moonlike spheres and a falling red feather", width: 1024, height: 767 },
  date: "2014", medium: "acrylic on canvas", dimensions: "12 × 9",
  fate: { kind: "curated", where: "bedroom" },
  axes: { era: "bookstore era", month: "December", subjects: ["firebird"], series: ["Firebirds"], rooms: ["Beyond", "Red", "Out", "Encounter", "Imagination"] },
  card: {
    exposition: "Summer 2014, I painted this (a favorite attempt at portraying a firebird, the being that makes my protagonist real), based on a reference image of a rhea (incongruously enough, a relative of the ostrich and the emu, also flightless), endowed with a fictitious crest. To my eye, most of the time, at least, the textures are the star, but something grabs me about the brash awkward oddity of the whole thing.",
    ekphrasis: [{ voice: "Artist", date: "2010", text: "A firebird is a humble bird. Its lookalikes, namesakes, descendants are a rich and varied aviary of great golden lovely things, caught and prized, granting wishes, crying pearls, singing to lull the living and wake the dead, dying and being reborn in flames. It is not reborn. It just is. It is occasionally sought by lovers of knowledge, not the wisest, though—not unless they want to be caught in an answer clear and hard as diamond that will only either petrify or shatter. Its claws are naturally ivory-white, but because it is old as ages, they have been stained and scratched so much they’re like tree roots. Its feathers are a harder thing to describe. They are fire, but fire not only made solid but given the green smells of damp earth and, when not made to burn, its coolness too—but mixed with the liquidness of lava. In face, size, and shape, each bird is different. Each, though, has the same large, fixed and brilliant yellow eyes. Its calls are rare and keen, likelier to cleave or shake than speak or enchant. It may hunt, but it never eats. The prey will look up for death and find itself held disinterestedly in the clear-seeing yellow eyes, not inimical and closed ones, and passes through a quick rake of fire that will at worst unravel it, scatter or remake without ending. It is perhaps a frightening exchange but, on a larger view, a game of one. Firebirds quite seldom hunt humans. The firebird is among the first and roughest boilings over of nature, and only knows how to maintain it." }]
  },
  favorite: 2
},
{
  id: "AV25", title: "The Waterfall",
  image: { src: "img/AV25-1024.webp", alt: "dense, expressionistic painting of a nude woman in a waterfall surrounded by a garden", width: 11, height: 14 },
  date: "2018", medium: "acrylic and gel pen on canvas", dimensions: "11 × 14",
  fate: { kind: "curated", where: "bedroom" },
  axes: { era: "bookstore era", month: "June", subjects: ["garden"], rooms: ["Between", "Green", "In", "Encounter", "Imagination"] },
  card: { exposition: "Painted this as an image of ecstasy — a waterfall in a lush and leafy chaos in August 2018, and added gel pen to it in 2023. I associate it, however, with the month of June." },
  twoHand: { layers: ["artist added gel pen texture four years later"] },
  favorite: 3
},
{
  id: "Q59", title: "Exit",
  image: { src: "img/Q59-1024.webp", alt: "wide-eyed, haunted-looking long-haired girl with \"Exit\" sign prominent behind her", width: 11.5, height: 16 },
  date: "2005", medium: "charcoal on paper", dimensions: "11.5 × 16",
  fate: { kind: "kept" },
  axes: { era: "AP year", month: "October", subjects: ["self-portrait"], series: ["Self-portraits"], rooms: ["Between", "Encounter", "Something Else"] },
  lineage: [{ to: "Q60", relation: "same-session" }],
  card: { exposition: "Self-portrait capturing and exaggerating a \"big mood\" (as they say) from my senior year of high school — omnidirectional paralyzed dread; the \"Exit\" sign appeared through coincidence but I knew it belonged immediately." },
  favorite: 4
},
{
  id: "Q60", title: "Elf",
  image: { src: "img/Q60-1024.webp", alt: "three-quarters view of girl's face in charcoal", width: 11.5, height: 16 },
  date: "2005", medium: "charcoal on paper", dimensions: "11.5 × 16",
  fate: { kind: "kept" },
  axes: { era: "AP year", month: "October", subjects: ["self-portrait"], series: ["Self-portraits"], rooms: ["Beyond", "Out", "Encounter", "Something Else"] },
  lineage: [{ to: "Q59", relation: "same-session" }],
  card: { exposition: "Self-portrait done at the same time in my senior year of high school as \"Exit,\" capturing a wild and sidelong facet I hoped my personality contained." },
  favorite: 5
},
{
  id: "B11", title: "Sun Dude",
  image: { src: "img/B11-1024.webp", alt: "Paper cutout of colorfully patterned figure crowned with the sun", width: 6, height: 8 },
  date: "~2016", medium: "Copic marker on paper", dimensions: "6 × 8",
  fate: { kind: "curated", where: "basement book nook" },
  axes: { era: "bookstore era", month: "June", subjects: ["sun", "sun dude"], series: ["Girl in the Dark Room"], rooms: ["Between", "Yellow", "In", "Encounter", "Imagination"] },
  card: { exposition: "One of many attempts to illustrate a tiny literary fairy tale of mine, from 2016 or thereabouts, later turned into a cutout for reasons I forget (though he became something like a bookmark)." },
  twoHand: { layers: ["cutout"] },
  favorite: 6
},
{
  id: "C3", title: "Heat Without Light",
  image: { src: "img/C3-1024.webp", alt: "dark silhouette standing against a topsy-turvy landscape including a woman, a lion, a mouse, fire, and insects", width: 15, height: 25 },
  date: "2022", medium: "Copic marker, gel pen, oil pastel, and pencil on cardboard", dimensions: "15 × 25",
  fate: { kind: "curated", where: "bedroom" },
  axes: { era: "software era", month: "August", subjects: ["figure drawing", "month"], series: ["Brodart cardboard"], rooms: ["Within", "Red", "Progress", "Something Else"] },
  card: { exposition: "This August 2022 piece aims to express a variety of emotions and ideas I associate with August; orientation deliberately unstable." },
  favorite: 9
},
{
  id: "C11",
  image: { src: "img/C11-1024.webp", alt: "densely textured multimedia abstract art in green and purple, whose scratchboard effects resolve at points into a ladder, a cat, and a jester", width: 25, height: 15 },
  date: "2022", medium: "crayon, oil pastel, pastel, Crayola marker, scratchboard on cardboard", dimensions: "25 × 15",
  fate: { kind: "kept" },
  axes: { era: "software era", month: "March", subjects: ["ladder", "jester", "cat"], rooms: ["Between", "Green", "Out", "Progress", "Something Else"] },
  card: { exposition: "An afternoon or so's delighted work in 2022, this piece is all about texture and I prefer details highlighting the approximately representational bits to the work as a whole. Felt inspired by Klee. Hope to incorporate into March book cover. May use individual pieces of it as physical covers for handmade books." },
  favorite: 10
},
{
  id: "C6",
  image: { src: "img/C6-1024.webp", alt: "sunlike flower, vine, and butterfly carved through white oil paint revealing pastel hues", width: 18, height: 12 },
  states: [{ label: "color state, 2021", image: { src: "img/C6-2021.jpg", alt: "field of pink, yellow, peach, blue, and pale green etched through to reveal different kinds of flowers in the pattern of a sun with rays" }, medium: "Copic marker, crayon, oil pastel, sunscreen, scratchboard", date: "2021" }],
  date: "2023", medium: "Copic marker, crayon, oil pastel, sunscreen, and oil on paper", dimensions: "18 × 12",
  fate: { kind: "destroyed", patternRetained: true, date: "2026" },
  axes: { era: "software era", month: "May", subjects: ["flowers", "sun", "butterfly", "vine"], rooms: ["Between", "May", "Yellow", "In", "Encounter", "Imagination"] },
  card: { exposition: "Colored layer drawn in 2021; scratched through oil pastel to crayon and marker underneath; white oil paint added and scratched through in 2023; meant to express the spirit of May and be a part of net art associated with that month (text mostly written, bits of code exist); hope it will serve as an inspiration for future art." },
  twoHand: { layers: ["oil paint added 2023"] },
  favorite: 11
},
{
  id: "AD5",
  image: { src: "img/AD5-1024.webp", alt: "Densely textured neon gel pen portrait of stubborn-chinned woman with hair back", width: 8.5, height: 9.5 },
  date: "2016", medium: "gel pen on paper", dimensions: "~8.5 × 9.5 cutout from 8.5 × 11",
  fate: { kind: "kept" },
  axes: { era: "bookstore era", month: "August", subjects: ["self-portrait"], rooms: ["Beyond", "Orange", "Out", "Desolation"] },
  card: { exposition: "Self-portrait, almost certainly from a photograph, as something like an exercise on printer paper that I ended up liking intensely. A bit fierce, unpleasant, and elsewhere." },
  twoHand: { layers: ["cut silhouette out in 2023"] },
  favorite: 12
}
];

const WINGS = [
  { slug: "first-hanging", name: "The First Hanging",
    thesis: "The artist's own order: seven hundred works compared two at a time until a sequence held. This wall is its top.",
    query: { sort: "favorite" } }
];
