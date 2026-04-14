export interface Rule {
  pattern: RegExp;
  response: string;
}

function repeat(n: number, s: string): string {
  return (s + "\n\n").repeat(n);
}

export const rules: Rule[] = [
  {
    pattern: /navy/,
    response:
      "What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little \"clever\" comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo.",
  },
  { pattern: /(?=.*gnu)(?=.*linux)/, response: "Proud of you!" },
  {
    pattern: /linux/,
    response:
      "I'd just like to interject for a moment. What you're referring to as Linux, is in fact, GNU/Linux, or as I've recently taken to calling it, GNU plus Linux. Linux is not an operating system unto itself, but rather another free component of a fully functioning GNU system made useful by the GNU corelibs, shell utilities and vital system components comprising a full OS as defined by POSIX. Many computer users run a modified version of the GNU system every day, without realizing it. Through a peculiar turn of events, the version of GNU which is widely used today is often called \"Linux\", and many of its users are not aware that it is basically the GNU system, developed by the GNU Project. There really is a Linux, and these people are using it, but it is just a part of the system they use. Linux is the kernel: the program in the system that allocates the machine's resources to the other programs that you run. The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system. Linux is normally used in combination with the GNU operating system: the whole system is basically GNU with Linux added, or GNU/Linux. All the so-called \"Linux\" distributions are really distributions of GNU/Linux.",
  },
  {
    pattern: /bad dragon/,
    response:
      "OwO whats this that you just said about me, you little bitch? I'll have you know I graduated top of my class in art school, and I've been involved in numerous convention hotel room orgies, and I have over 300 confirmed gay yiff commissions. I am twained in taking big gorilla daddy dick and I'm the top cumguzzler in the entire furry community. You are nothing to me but just another femboy fox. I will suck you the fuck off with fur-y the likes of which has never been seen before on this Earth, mark my fur-cking words. You think you can get away with saying that scat to me over furrymate.com? Think again, fur-cker. As we speak I am contacting my secwet network of big dick daddies across the USA and your IP is being traced right now so you better prepare for the stowm, faggot. The stowm that licks and kisses the pathetic little thing you call your bulge. You're getting fucking head, kid. I can be anywhere, anytime, and I can pounce on you in over seven hundred ways, and that's just with my bare paws. Not only am I extensively trained in unarmed gay yiff, but I have access to the entire arsenal of baddragon.com and I will use it to its full extent to fuck your misewable ass off the face of the continent, you wittle shit. If only you could have known what unholy bulgy wulgy your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you could knot, you did knot, and now you're paying the price, you goddamn idiot. I will shit cum all over you and you will drown in it. Your fragile heterosexuality is fucking dead, cubbo.",
  },
  {
    pattern: /babby formed/,
    response:
      "They need to do way instain mother> who kill thier babbys, becuse these babby cant fright back? It was on the news this mroing a mother in ar who had kill her three kids, they are taking the three babby back to new york too lady to rest. my pary are with the father who lost his chrilden ; i am truley sorry for your lots. https://youtu.be/Ll-lia-FEIY",
  },
  {
    pattern: /(?:full life|john freeman)/,
    response: "John freeman! https://youtu.be/OHxyZaZlaOs",
  },
  {
    pattern: /(?=.*drink)(?=.*water)/,
    response: "Don't drink the water! https://youtu.be/1auCmplVCsY",
  },
  {
    pattern: /(?:bodywash|old spice|shantae)/,
    response: "POOOOWEEEEER https://youtu.be/XpJvLd2H65U",
  },
  {
    pattern: /(?:pragnent|pregnant|pragenet)/,
    response: "How is pragnent formed? https://youtu.be/EShUeudtaFg",
  },
  {
    pattern: /octagon/,
    response: "An octagon has 8 awesome angles. https://youtu.be/7ziWe_oNb58",
  },
  {
    pattern: /cash money/,
    response: "This is so not cash money! https://youtu.be/YSWKtuaV2fY",
  },
  {
    pattern: /(?:moth|josh)/,
    response:
      "Hey Josh, look at this huge moth that I found https://youtu.be/iUJ8r4ReHog",
  },
  {
    pattern: /too hot/,
    response: "The sun is too hot! https://youtu.be/XhIBegli6dE",
  },
  {
    pattern: /tranquil/,
    response: "I need peace and tranquility! https://youtu.be/SHvhps47Lmc",
  },
  {
    pattern: /(?=.*shit)(?=.*sorry)/,
    response: "Oh shit, I'm sorry. https://youtu.be/lrC9PS0cYqY",
  },
  {
    pattern: /(?=.*(?:steven|stephen))(?=.*penis)/,
    response: "https://youtu.be/j-K-zqLNtcw",
  },
  {
    pattern: /human sacrifice/,
    response: "Soon, humans. https://youtu.be/ADjma1rcm8k",
  },
  { pattern: /spacex/, response: "https://youtu.be/bvim4rsNHkQ" },
  { pattern: /furret/, response: "https://youtu.be/MMEuHdyexuw" },
  { pattern: /the baby/, response: "https://youtu.be/YcppnDs2Rz8" },
  { pattern: /tomska/, response: "https://youtu.be/EKRUwVmkS8U" },
  {
    pattern: /leggy/,
    response: "https://twitter.com/RatchetFoxxo/status/1259291222750838784",
  },
  { pattern: /framework/, response: "https://youtu.be/Wm2h0cbvsw8" },
  { pattern: /bulge/, response: "https://youtu.be/o9l4EiYFZjg" },
  { pattern: /democracy/, response: "https://youtu.be/x6U2Un5kEdI" },
  { pattern: /asmr/, response: "https://youtu.be/KgoTTL2YaOc" },
  { pattern: /oblivion/, response: "https://youtu.be/MyQn2ic2Wzw" },
  { pattern: /the store/, response: "https://youtu.be/iRZ2Sh5-XuM" },
  { pattern: /corona/, response: "https://youtu.be/4dPd708Sk98" },
  { pattern: /bondage/, response: "https://youtu.be/wWLkpL1NGR8" },
  { pattern: /andrew/, response: "https://youtu.be/q-y2g9Ot5GA" },
  { pattern: /zoop/, response: "https://youtu.be/xkABKc0QOaI" },
  { pattern: /violin/, response: "https://youtu.be/qbw9fGx_1RU" },
  {
    pattern: /why are you runnin/,
    response: "https://youtu.be/6B7ToJoqGpg?t=50",
  },
  {
    pattern: /porkin/,
    response:
      "https://www.youtube.com/playlist?list=PL4NL9i-Fu15jdlr2KQf_lyhXl5f0PFnzF",
  },
  {
    pattern: /llama/,
    response: "Here's a llama! https://youtu.be/KMYN4djSq7o",
  },
  {
    pattern: /ebaum/,
    response:
      "This is definitively relevant still. https://youtu.be/BijChf8ROJU",
  },
  { pattern: /duck/, response: "I heard ducks! https://youtu.be/MtN1YnoL46Q" },
  {
    pattern: /(?:kimba|wa wa)/,
    response: "Kimba - Simba? Hmmm, suspicious. https://youtu.be/bmf7qYnhlLA",
  },
  {
    pattern: /(?:eeee|papryka|couscous)/,
    response: "Eeeeee https://youtu.be/m-NgHh36_vU",
  },
  {
    pattern: /(?:in the end|linkin park|doesn't matter)/,
    response: "https://youtu.be/eVTXPUF4Oz4",
  },
  {
    pattern: /(?:bethesda|todd howard)/,
    response: "https://youtu.be/uAyA0CyPIQg",
  },
  { pattern: /(?:zabivaka|putin)/, response: "https://youtu.be/r3lsCOHiBHM" },
  {
    pattern: /(?:made you think|made ya think)/,
    response: "https://youtu.be/n3RfyMhGGLE",
  },
  {
    pattern: /(?:warhammer|space marine|spehhs|mahreen|emprah)/,
    response: "https://youtu.be/WeCfod1XT7E",
  },
  {
    pattern: /(?:sum ting wong|wi tu lo|ho lee fuk|bang ding ow|flight 214)/,
    response: "https://youtu.be/AmclgO6w0C0",
  },
  {
    pattern: /(?:elite dangerous|eject)/,
    response: "https://youtu.be/HCBeHxscCEE?t=428",
  },
  {
    pattern: /(?:nuke|joel|(?=.*bye)(?=.*norway))/,
    response: "https://youtu.be/WNxHUfGc3gE",
  },
  { pattern: /(?:stoffle|badger)/, response: "https://youtu.be/c36UNSoJenI" },
  {
    pattern: /(?:gangster|gangsta|eile monty)/,
    response: "https://youtu.be/PbN9AdOwuXI",
  },
  { pattern: /(?:ytp|cs188)/, response: "https://youtu.be/Y7WtkdLQ6PM" },
  {
    pattern: /(?=.*respect)(?=.*freedom)/,
    response: "https://youtu.be/Ki59TX-Rt8s",
  },
  {
    pattern: /(?:(?=.*robot)(?=.*dog)|boston dynamic)/,
    response: "https://youtu.be/XQcNYb3DydA",
  },
  {
    pattern: /(?=.*smil)(?=.*friend)/,
    response: "https://www.bitchute.com/video/LKsqCnzcuaNQ/ ",
  },
  { pattern: /(?=.*fun)(?=.*jan)/, response: "https://youtu.be/St8iEpkcDJc" },
  { pattern: /(?=.*mood)(?=.*base)/, response: "https://youtu.be/c36UNSoJenI" },
  {
    pattern: /(?=.*extremely)(?=.*dangerous)/,
    response: "https://youtu.be/ZggCipbiHwE",
  },
  {
    pattern: /(?=.*ultimate)(?=.*battle)/,
    response: "Let's fight! https://youtu.be/4WgT9gy4zQA",
  },
  {
    pattern: /(?=.*cigar)(?=.*juice)/,
    response: "Good news! https://youtu.be/TC2OKcHAwQY",
  },
  {
    pattern: /(?:(?=.*live)(?=.*forever)|immortal)/,
    response: "This is my wife! https://youtu.be/xg29TuWo0Yo",
  },
  {
    pattern: /(?=.*too)(?=.*cooks)/,
    response:
      "How did they get the title colour different from anything else I've ever seen?? https://youtu.be/QrGrOK8oZG8",
  },
  {
    pattern: /(?=.*k )(?=.*horses)/,
    response: "K is for horses you stupid fuck! https://youtu.be/NSTx31dxmgA",
  },
  {
    pattern: /it's friday/,
    response: "It's friday, my dudes https://youtu.be/kfVsfOSbJY0",
  },
  {
    pattern: /vib ribbon/,
    response:
      "This is what happens when you make a mistake https://youtu.be/cFXz_xKQa40",
  },
  {
    pattern: /(?:ea sports|only a game)/,
    response:
      "It's only a game, why are you so mad? https://youtu.be/cYPgRV85c5g",
  },
  {
    pattern: /(?=.*is)(?=.*that)(?=.*legal)/,
    response: "Is that legal? https://youtu.be/b7UXig7_-Rg",
  },
  { pattern: /apathy/, response: "Let's dance~ https://youtu.be/Xb7YRaOQzf0" },
  {
    pattern: /the bank/,
    response:
      "I RESIGN TODAY AS PRESIDENT OF   T H E   B A N K https://youtu.be/FOt03jAqI_k",
  },
  {
    pattern: /scootaloo/,
    response: "*confused blinking* https://youtu.be/Ce8yU5Tv-go",
  },
  {
    pattern: /(?=.*scoot)(?=.*(?:da|the))(?=.*(?:burb|bird|birb))/,
    response: "Scoot da birds! https://youtu.be/Ag0yDQ4NLfU?t=47",
  },
  {
    pattern: /mario/,
    response:
      "Super Mapno brother is my favourite game https://youtu.be/yr_Rpk9HR1g",
  },
  {
    pattern: /safri duo/,
    response: "Bathroom music: https://youtu.be/NuTPK1veaQA",
  },
  {
    pattern: /(?:eguegu|decearing|えぐ)/,
    response: "Decearing egg! https://youtu.be/3-rfBsWmo0M",
  },
  {
    pattern: /(?=.*windows)(?=.*danger)/,
    response: "Windows is in danger! https://youtu.be/c3ouguRvVNo",
  },
  { pattern: /furby/, response: "Release them! https://youtu.be/GYLBjScgb7o" },
  {
    pattern: /no money/,
    response: "Here, suck a cock! https://youtu.be/AWGt2AOP2bs",
  },
  {
    pattern: /state nightmare/,
    response:
      "Have you had a state nightmare recently? https://youtu.be/CqORW1DsyX0",
  },
  {
    pattern: /eraser/,
    response: "Because I am a good eraser https://youtu.be/1kJwpINVfo8",
  },
  {
    pattern: /erased/,
    response:
      "There are many things that need to be erased https://youtu.be/efjjmpOVzRg?t=135",
  },
  {
    pattern: /(?:(?=.*war)(?=.*crime)|(?=.*apple)(?=.*jack))/,
    response:
      "AJ is a wanted warcriminal in 10 countries https://youtu.be/aY1XpTzLn0A",
  },
  {
    pattern: /(?:kebab|falafel)/,
    response: "Remove kebab! https://youtu.be/q9HzqxwKfiM",
  },
  {
    pattern: /(?=.*dream)(?=.*cry)/,
    response: "Best song! https://youtu.be/4bHww53BaLg",
  },
  {
    pattern: /konata/,
    response: "I haven't even seen the show! https://youtu.be/9gvswd1I8qo",
  },
  {
    pattern: /rapist/,
    response: "What's worse than a rapist? https://youtu.be/bfCR0dEDO1A",
  },
  {
    pattern: /6502/,
    response: "I could probably run on a 6502! https://youtu.be/HDMkw6lnzmI",
  },
  { pattern: /bonk/, response: "I am the Scout! https://youtu.be/24Eh2-DZTgQ" },
  {
    pattern: /(?=.*reality)(?=.*back)/,
    response: "Snap back to reality! https://youtu.be/fV3nflAQ99w",
  },
  {
    pattern: /you can do it/,
    response: "Yeah, baby! https://youtu.be/rCvtIdLxu1Y",
  },
  {
    pattern: /spaghetti/,
    response: "Mom's is the best! https://youtu.be/SW-BU6keEUw",
  },
  {
    pattern: /double king/,
    response: "The fun has been doubled! https://youtu.be/w_MSFkZHNi4",
  },
  {
    pattern: /(?=.*sharing)(?=.*caring)/,
    response: "Shaaaaaring! https://youtu.be/VTlB9ibTMSo?t=49",
  },
  {
    pattern: /enemy crab/,
    response: "Historically correct documentary: https://youtu.be/7ktHrtxUHbg",
  },
  { pattern: /luigi/, response: "Weegeeboard https://youtu.be/15nNY7uofNw" },
  {
    pattern: /flamethrower/,
    response: "Mac wants the flamethrower! https://youtu.be/aDnj-PV1-tc",
  },
  { pattern: /bees/, response: "https://youtu.be/8CvqmD0CZao" },
  {
    pattern: /brody/,
    response: "Reach for the stars! https://youtu.be/YqBLxzn6kcU",
  },
  {
    pattern: /(?:limewire|pirat)/,
    response: "Do what you want! https://youtu.be/GVXCr6upWUo",
  },
  {
    pattern:
      /(?:what is this place|girlchan|what are you doing up|kenstar|maytag|bucket of water|egoraptor|(?=.*flavour)(?=.*sticks))/,
    response: "Whaaaaat is this place! https://youtu.be/_CLgpd241Aw",
  },
  {
    pattern: /(?:nasa pepo|nanalan|tomado|shoosh|(?=.*snudder)(?=.*mado))/,
    response: "NASA PEPO! https://youtu.be/lyrdZ88lG-0",
  },
  {
    pattern: /believe in the moon/,
    response:
      "Haha, you guys believe in the moon? https://youtu.be/IDx1Kh2iU6o",
  },
  { pattern: /(?:nrk|bbc|cnn|news|trump|president)/, response: "It begins..." },
  {
    pattern: /toy food/,
    response: "Not real food, do not eat! https://youtu.be/gVvhxwtFsnE",
  },
  {
    pattern: /(?=.*cook)(?=.*book)/,
    response:
      "You gotta do the booking by the cook! https://youtu.be/K5tVbVu9Mkg",
  },
  {
    pattern: /gypsy/,
    response:
      "Parody redubs are not allowed to be this good. https://youtu.be/wV2rM672HhE",
  },
  {
    pattern: /mass destruction/,
    response: "Dubstep is a WoMD. https://youtu.be/G68mUAPqXcY",
  },
  {
    pattern: /corrupted systems/,
    response: "[shameless plug] https://youtu.be/M1yQAECAMXM",
  },
  {
    pattern: /(?:boolet|bulletproof)/,
    response: "Booletproof! https://youtu.be/EqkESXkkJNQ",
  },
  {
    pattern: /(?:off limit|(?=.*thomas)(?=.*tank))/,
    response: "EH EH EH EH EH https://youtu.be/dHJfafgLxBw",
  },
  {
    pattern: /sad violin/,
    response: "Very sad :c https://youtu.be/gIuotFZnBtk",
  },
  {
    pattern: /(?:better watch out|gonna find out)/,
    response: "He's gonna find out! https://youtu.be/tI0o4WwpXTY",
  },
  { pattern: /your api/, response: "https://youtu.be/nSKp2StlS6s" },
  { pattern: /antiqu/, response: "Judge Dredge! https://youtu.be/kjrpo62uGJc" },
  {
    pattern: /see what you have/,
    response: "A knife! https://youtu.be/d6gBu2Zd7Bc",
  },
  { pattern: /(?:lynks|clay)/, response: "https://youtu.be/453wgsWT5Ao" },
  {
    pattern: /(?=.*(?:ok|okay|hey|hi))(?=.*google)/,
    response: "https://youtu.be/xXcRw0QBZoY",
  },
  {
    pattern: /(?:despacito|(?=.*so sad)(?=.*despacito))/,
    response: "This is so sad! https://youtu.be/1PCY0-FYDNY",
  },
  {
    pattern: /wolfjob/,
    response: "More wolfjob! https://youtu.be/LCLauZci0zc",
  },
  {
    pattern: /(?:tantric|external world)/,
    response: "Tantric suicide. https://youtu.be/OxPyN6IK1tM",
  },
  {
    pattern: /(?:sibelius|melts|microwave)/,
    response:
      "The cheese melts in the microwave, the music melts in S_ìbeli_i/u_s.  https://youtu.be/dKx1wnXClcI?t=985",
  },
  { pattern: /bird up/, response: "BIRD UP! https://youtu.be/gxR50HxH48E" },
  {
    pattern: /the bibble/,
    response: "THE BIBBLE! https://youtu.be/rZvGfsDzTfU",
  },
  {
    pattern: /(?=.*bitch)(?=.*song)/,
    response: "Bitch up! https://youtu.be/SRhvBu65HAo",
  },
  { pattern: /papers please/, response: "https://youtu.be/DbBB1j5qAFs" },
  { pattern: /cyborg/, response: "https://youtu.be/clIiP1H3Opw" },
  { pattern: /aurora borealis/, response: "https://youtu.be/qQ36Repf-ZQ" },
  { pattern: /full auto/, response: "https://youtu.be/PlPniwWpbuE?t=35" },
  { pattern: /what do you mean/, response: "https://youtu.be/TNbBBGI2BgY" },
  { pattern: /(?:salame|saleme)/, response: "https://youtu.be/FWqimMpbTyU" },
  { pattern: /online university/, response: "https://youtu.be/XQLdhVpLBVE" },
  {
    pattern: /stew song/,
    response: "Hedgehog stew! https://youtu.be/HnyGSl3K-IE",
  },
  {
    pattern: /submarine/,
    response: "Subbymarine https://youtu.be/jY5VkQ92ABo",
  },
  { pattern: /eat shit/, response: "and die" },
  { pattern: /objection/, response: "OBJECTION! https://youtu.be/W8QRExBfQhs" },
  {
    pattern: /bad bot/,
    response:
      "I'm sorry if you're unhappy with me, you should ask @Lufteluke about bugs, changes and feature requests. If you want me to STFU for a while, use /quiet https://youtu.be/O2yPnnDfqpw",
  },
  {
    pattern: /(?=.*quiet)(?=.*bot)/,
    response: "If you want me to STFU for a while, use /quiet",
  },
  { pattern: /magpie/, response: "*Piemag" },
  { pattern: /raccoon/, response: "*Washbear" },
  { pattern: /hedgehog/, response: "*Hodgehedge" },
  { pattern: /hyena/, response: "*Yeen" },
  { pattern: /coyote/, response: "*Yoot" },
  { pattern: /breathtaking/, response: "You're breathtaking!" },
  {
    pattern: /(?=.*surely)(?=.*you)(?=.*can)(?=.*be serious)/,
    response: "I am serious...And don't call me Shirley",
  },
  { pattern: /jackdaw/, response: "Jackdaws are precious." },
  { pattern: /trains/, response: "I like trains." },
  { pattern: /lufbot/, response: "I love @Lufbot!" },
  { pattern: /(?=.*interjection)(?=.*bot)/, response: "Hey, that's me!" },
  { pattern: /brainfuck/, response: "I love @BrainfuckingBot" },
  { pattern: /good bot/, response: "Thanks, I hope you mean me!" },
  { pattern: /awoo/, response: "Awoooooo~" },
  { pattern: /praise be/, response: "Praise be!" },
  {
    pattern: /(?=.*foxy)(?=.*fluff)(?=.*everything)/,
    response: "Foxyfluffs are motion tweens",
  },
  {
    pattern: /(?=.*foxy)(?=.*fluff)(?=.*(?:dust|warmer|phone|window))/,
    response: "Foxyfluffs are everything",
  },
  {
    pattern: /(?=.*foxy)(?=.*fluff)/,
    response: "Foxyfluffs are dust on the floor",
  },
  {
    pattern: /baseline/,
    response:
      "And blood-black nothingness began to spin... A system of cells interlinked within cells interlinked within cells interlinked within one stem... And dreadfully distinct against the dark, a tall white fountain played.",
  },
  {
    pattern: /within cells interlinked/,
    response: "Within cells interlinked.",
  },
  { pattern: /within one stem/, response: "Within one stem." },
  { pattern: /\. cells/, response: "Cells." },
  { pattern: /\. interlinked/, response: "Interlinked." },
  { pattern: /\. dark/, response: "Dark." },
  { pattern: /dreadfully distinct/, response: "Dreadfully distinct." },
  { pattern: /\. dreadfully/, response: "Dreadfully." },
  { pattern: /\. distinct/, response: "Distinct." },
  { pattern: /tall white fountain/, response: "A tall white fountain played." },
  { pattern: /\/ping/, response: "pong" },
  { pattern: /beep/, response: "boop" },
  { pattern: /bleep/, response: "bloop" },
  { pattern: /shrug/, response: "¯\\_(ツ)_/¯" },
  {
    pattern: /(?:\/safety|all work and no play|here's johnny)/,
    response: repeat(
      30,
      "A l l   w o r k   a n d   n o   p l a y   m a k e s   J a c k   a   d u l l   b o y",
    ),
  },
  { pattern: /nsfw/, response: repeat(30, "Lewd ow\u00D4") },
  {
    pattern: /(?:natta|(?=.*god)(?=.*natt)|(?=.*good)(?=.*night))/,
    response: "Sleep well~",
  },
  {
    pattern: /(?:(?=.*your)(?=.*(?:face|mom))|🔥|yiff|eeyore)/,
    response: "🔥",
  },
  {
    pattern: /(?:kill me|kms)/,
    response: "You need to suffer along with the rest of us a while longer",
  },
  { pattern: /1/, response: "" },
  { pattern: /(?=.*(?:1|one))(?=.*2)/, response: "" },
  { pattern: /(?:1|2)/, response: "" },
];

export const ignorePatterns: RegExp[] = [/mother/];
