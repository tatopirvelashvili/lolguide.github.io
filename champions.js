let cardSection = document.getElementById("card-section")
let nameInput = document.getElementById("name-input")
let roleInput = document.getElementById("role")
let searchBtn = document.getElementById("search-btn")
let minPrice = document.getElementById("price-input-min")
let maxPrice = document.getElementById("price-input-max")
let runeInfoArray = [
    { runeName: "Press The Attack", RuneInfo: "Press The Attack - ყოველი თქვენი მომდევნო დარტყმა ასუსტებს მოწინააღმდეგეს და აყენებს დამატებით ზიანს. ედება მოწინააღმდეგეს 3 ჯერ და ნაჩვენებია როგორც 3 დიდი ხაზი." },
    { runeName: "Lethal Tempo", RuneInfo: "Lethal Tempo - რაც უფრო დიდი ხანი ებრძვით მოწინააღმდეგეს მით უფრო იზრდება თქვენი დარტყმის სისწრაფე." },
    { runeName: "Fleet Footwork", RuneInfo: "Fleet Footwork - გაქვთ 100 ენერგიის წყარო პირველ დარტყმაზე, ეს ენერგია იცვლება გემატებათ სისწრაფე და სიცოცხლე." },
    { runeName: "Conqueror", RuneInfo: "Conqueror - თქვენი დარტყმები სტაკავს Conqueror-ს რაც გიზრდით Damages-ს." },
    { runeName: "Overheal", RuneInfo: "Overheal - აძლიერებს თქვენს Shield ეფექტებს 10%-ით. ასევე თქვენი სიცოცხლის რეგენერაცია და Lifesteal გადადის Shield-ში." },
    { runeName: "Triumph", RuneInfo: "Triumph - როცა კლავთ მოწინააღმდეგეს ან ეხმარებით თქვენიანს მის მოკვლაში უკან გიბრუნდებათ დაკარგული სიცოცხლის 12% და გეძლევათ 20 Gold." },
    { runeName: "Presence of Mind", RuneInfo: "Presence of mind - მონსტერების და გმირების მოკვლისას გემატებათ მანა ან ენერგია (დამოკიდებულია ჩემპიონზე)." },
    { runeName: "Legend Alacrity", RuneInfo: "Legend alacrity - გიმატებთ Attack speed-ს სტაკებად, ყოველი ჩემპიონის ან ეპიკური მონსტრის მოკვლისას გეძლევათ 1 სტაკი, სულ შეგიძლიათ აიღოთ 10 სტაკი." },
    { runeName: "Legend Tenacity", RuneInfo: "Legend Tenacity - გემატებათ გამძლეობა და ადის 10 სტაკამდე, ყოველი ჩემპიონის ან ეპიკური მონსტრის მოკვლისას გეძლევათ 1 სტაკი." },
    { runeName: "Legend Bloodline", RuneInfo: "Legend bloodline - გემატებათ Lifesteal და ადის 10 სტაკამდე, ყოველი ჩემპიონის ან ეპიკური მონსტრის მოკვლისას გეძლევათ 1 სტაკი." },
    { runeName: "Coup de Grace", RuneInfo: "Coup de grace - თქვენ აყენებთ 8%-ით მეტ ზიანს იმ გმირებს რომელთა სიცოცხლე ნაკლებია 40%-ზე." },
    { runeName: "Cut Down", RuneInfo: "Cut down - კარგია ტანკების წინააღმდეგ, რაც უფრო მეტი სიცოცხლე აქვს მოწინააღმდეგეს მით უფრო მეტ სიცოცხლეს აკლებთ პროცენტულად." },
    { runeName: "Last Stand", RuneInfo: "Last Stand - რაც უფრო ნაკლები სიცოცხლე გაქვთ მით უფრო მეტ ზიანს აყენებთ მოწინააღმდეგეს." },
    {
        runeName: "Electrocute",
        RuneInfo: "Electrocute - ნებისმიერი სახის დაზიანება , auto attack-ები თუ abilities-ები ამატებს სტეკს. როდესაც მესამე სტაკი დაემატება ოპონენტს აყენებს 30-180 დემეიჯს."
      },
    {
        runeName: "Predator",
        RuneInfo: "Predator - ამ რუნით როდესაც შეიძენთ ფეხსაცმელს 45%-ით სწრაფად შეგეძლებათ იმოძრაოთ მოწინააღმდეგისკენ, მას შემდეგ რაც გააძლიერებთ სისწრაფეს შემდეგი auto attack ან Ability მიაყენებს თქვენს ოპონენტს დამატებით 40-120 Adaptive Damage-ს, პლუს თქვენი AD-ის 20% და თქვენი AP-ის 10%."
      },
      {
        runeName: "Dark Harvest",
        RuneInfo: "Dark Harvest - როდესაც მოწინააღმდეგის სიცოცხლე ჩამოგყავთ 50%-ს ქვემოთ გეძლევათ სულის სტაკი, ყოველი სული გაძლევთ ბონუს Adaptive Damage-ს, (მუშაობს 40 წამში ერთხელ)."
      },
      {
        runeName: "Hail of Blades",
        RuneInfo: "Hail of Blades - ისტაკება Auto Attack-ებით და გაძლევს დამატებით 110% Attack Speed-ს (გრძელდება 3 წამის განმავლობაში)."
      },
      {
        runeName: "Cheap Shot",
        RuneInfo: "Cheap Shot - როდესაც მოწინააღმდეგის ჩემპიონს მოძრაობა დაქვეითებული აქვს (გასტანულია, გარუთულია) თქვენ მას უკეთებთ დამატებით True Damage-ს."
      },
      {
        runeName: "Taste of Blood",
        RuneInfo: "Taste of Blood - ეს რუნა საშუალებას გაძლევთ მოიმატოთ 18-30 HP, 20% AD ბონუსით და 10% AP ბონუსით. ის აღადგენს 0.9-1.75 HP-ს წამში."
      },
      {
        runeName: "Sudden Impact",
        RuneInfo: "Sudden Impact - ეს რუნა თქვენ ჩემპიონს მისცემს +7 Lethality-ს და +6 Magic Penetration-ს მაშინ როდესაც გამოიყენებთ Dash-ს ან Blink-ს."
      },
      {
        runeName: "Zombie Ward",
        RuneInfo: "Zombie Ward - ეს რუნა გთავაზობთ ward-ს მოწინააღმდეგის განადგურებული ward-ის სანაცვლოდ. ყოველი განადგურებულ Ward-ზე გემატებათ 1.2 Attack Damage და 2 Ability Power."
      },
      {
        runeName: "Ghost Poro",
        RuneInfo: "Ghost Poro - აქტიურდება მაშინ, როდესაც თქვენი ward-ები Cool Down-ზეა, ერთი წამით ბუჩქში დგომის შემდეგ მოჩვენება პორო გაჩნდება იქ, ისტაკება 10-მდე, 10 სტაკზე გექნებათ 18 Attack Damage და 30 Ability Power."
      },
      {
        runeName: "Eyeball Collection",
        RuneInfo: "Eyeball Collection - ყოველ მოკლულ ჩემპიონზე სტაკავთ Eyeball Collection-ს, თითოეულ სტაკზე გემატებათ 1.2 Attack Damage და 2 Ability Power. (ისტაკება 10-მდე)"
      },
      {
        runeName: "Treasure Hunter",
        RuneInfo: "Treasure Hunter - მოწინააღმდეგის მოკვლაზე/ასისტზე გეძლევათ Bounty Hunter-ის სტაკი რომელიც გაძლევთ დამატებით გოლდს"
      },
      {
        runeName: "Ingenious Hunter",
        RuneInfo: "Ingenious Hunter - გიმიცრებთ Cool Down-ს ნაყიდ აითემებზე 15% ით. ჩემპიონის მოკვლაზე გეძლევათ სტაკი და გიმცირდებათ დამატებით 5%-ით. (ისტაკება 6-მდე)"
      },
      {
        runeName: "Relentles Hunter",
        RuneInfo: "Relentless Hunter - ამ რუნით დასაწყისში თქვენ იღებთ 5 Out of Combat სისწრაფეს. ჩემპიონის მოკვლაზე გეძლევათ სტაკი და გემატებათ 8 Out of Combat სისწრაფე (მაქსიმუმი: 45)."
      },
      {
        runeName: "Ultimate Hunter",
        RuneInfo: "Ultimate Hunter - თქვენ გაკლდებათ 5% Cool down თქვენს Ultimate-ზე. ჩემპიონის მოკვლაზე გეძლევათ სტაკი. როდესაც მიაღწევთ 5 სტაკს, თქვენი Cool Down იქნება 25%-ით ნაკლები."
      },
    {
        runeName: "Summon Aery",
        RuneInfo: "Summon Aery - ოპონენტზე ზიანის მიყენების დროს გექნებათ 10-40 მდე დამატებითი დემეიჯი , ხოლო როცა თქვენიანს მიაყენებენ ზიანს თქვენ ადებთ 30-75 Shield-ს"
    },
    {
        runeName: "Arcane Comet",
        RuneInfo: "Arcane Comet - ოპონენტზე ილეთის გარტყმის შემდეგ 0.825 წამში ოპონენტს ესვრის კომეტას რომელიც აყენებს 30-100-მდე ზიანს"
    },
    {
        runeName: "Phase Rush",
        RuneInfo: "Phase Rush - ოპონენტზე ილეთის გარტყმის შემდეგ 0.825 წამში ოპონენტს ესვრის კომეტას რომელიც აყენებს 30-100-მდე ზიანს"
    },
];
let searchArray = [];
let cardArray = [
        { name: "Aatrox", role: "Top", imageLink: "", price: 6300, runes: { primary: "Conqueror", keystone: "Triumph", secondary: "Legend Tenacity",thirdly:"Last Stand", bonusRune1:"Bone Plating",bonusRune2:"Revitalize"} }, 
        { name: "Ahri", role: "Mid", imageLink: "IMAGE_URL_Ahri", price: 4800, runes: { primary: "Electrocute", keystone:"Taste of Blood", secondary: "Eyeball Collection", thirdly: "Ultimate Hunter", bonusRune1: "Minion Dematerializer", bonusRune2: "Cosmic Insight" } },
        { name: "Akali", role: "Mid", imageLink: "IMAGE_URL_Akali", price: 3150, runes: { primary: "Fleet Footwork", keystone: "Presence of Mind", secondary: "Legend Tenacity", thirdly: "Coup de Grace", bonusRune1: "Second Wind", bonusRune2: "Overgrowth" } },
        { name: "Akshan", role: "Mid", imageLink: "", price: 4800, runes: { primary: "Press the Attack", keystone: "Presence of Mind", secondary: "Legend Alacrity", thirdly: "Coup de Grace", bonusRune1: "Eyeball Collection", bonusRune2: "Treasure Hunter" } },
        { name: "Alistar", role: "Support", imageLink: "IMAGE_URL_Alistar", price: 1350, runes: { primary: "Aftershock", keystone: "Font of Life", secondary: "Conditioning", thirdly: "Revitalize", bonusRune1: "Hextech Flashtraption", bonusRune2: "Cosmic Insight" } },
        { name: "Amumu", role: "Jungle", imageLink: "IMAGE_URL_Amumu", price: 4500, runes: { primary: "Conqueror", keystone: "Triumph", secondary: "Legend Alacrity", thirdly: "Last Stand", bonusRune1: "Magical Footwear", bonusRune2: "Cosmic Insight" } },
        { name: "Anivia", role: "Mid", imageLink: "IMAGE_URL_Anivia", price: 3150, runes: { primary: "Electrocute", keystone: "Taste of Blood", secondary: "Eyeball Collection", thirdly: "Relentles Hunter", bonusRune1: "Presence of Mind", bonusRune2: "Coup de Grace" } },
        { name: "Annie", role: "Mid", imageLink: "IMAGE_URL_Annie", price: 450, runes: { primary: "Electrocute", keystone: "Taste of Blood", secondary: "Eyeball Collection", thirdly: "Relentles Hunter", bonusRune1: "Manaflow Band", bonusRune2: "Celerity" } },
        { name: "Aphelios", role: "ADC", imageLink: "IMAGE_URL_Aphelios", price: 6300, runes: { primary: "Fleet Footwork", keystone: "Overheal", secondary: "Legend Bloodline", thirdly: "Coup de Grace", bonusRune1: "Absolute Focus", bonusRune2: "Gathering Storm" } },
        { name: "Ashe", role: "ADC", imageLink: "IMAGE_URL_Ashe", price: 450, runes: { primary: "Lethal Tempo", keystone: "Presence of Mind", secondary: "Legend Alacrity", thirdly: "Coup de Grace", bonusRune1: "Biscuit Delivery", bonusRune2: "Approach Velocity" } },
        { name: "Aurelion Sol", role: "Mid", imageLink: "IMAGE_URL_AurelionSol", price: 4800, runes: { primary: "Arcane Comet", keystone: "Manaflow Band", secondary: "Transcendence", thirdly: "Gathering Storm", bonusRune1: "Magical Footwear", bonusRune2: "Minion Dematerializer" } },
        { name: "Azir", role: "Mid", imageLink: "IMAGE_URL_Azir", price: 4800, runes: { primary: "Conqueror", keystone: "Presence of Mind", secondary: "Legend Alacrity", thirdly: "Coup de Grace", bonusRune1: "Demolish", bonusRune2: "Bone Plating" } },
        { name: "Bard", role: "Support", imageLink: "IMAGE_URL_Bard", price: 6300, runes: { primary: "Guardian", keystone: "Font of Life", secondary: "Conditioning", thirdly: "Unflinching", bonusRune1: "Zombie Ward", bonusRune2: "Relentles Hunter" } },
        { name: "BelVeth", role: "Jungle", imageLink: "", price: 6300, runes: { primary: "Conqueror", keystone: "Triumph", secondary: "Legend Alacrity",thirdly:"Coup de Grace", bonusRune1:"Magical Footwear",bonusRune2:"Cosmic Insight"} },
        { name: "Blitzcrank", role: "Support", imageLink: "IMAGE_URL_Blitzcrank", price: 3150, runes: { primary: "Glacial Augment", keystone: "Hextech Flashtraption", secondary: "Biscuit Delivery", thirdly: "Cosmic Insight", bonusRune1: "Nimbus Cloak", bonusRune2: "Celerity" } },
        { name: "Brand", role: "Support", imageLink: "IMAGE_URL_Brand", price: 4800, runes: { primary: "Dark Harvest", keystone: "Taste of Blood", secondary: "Eyeball Collection", thirdly: "Relentles Hunter", bonusRune1: "Manaflow Band", bonusRune2: "Scorch" } },
        { name: "Braum", role: "Support", imageLink: "IMAGE_URL_Braum", price: 6300, runes: { primary: "Guardian", keystone: "Shield Bash", secondary: "Bone Plating", thirdly: "Unflinching", bonusRune1: "Font of Life", bonusRune2: "Revitalize" } },
        { name: "Caitlyn", role: "ADC", imageLink: "IMAGE_URL_Caitlyn", price: 4800, runes: { primary: "Fleet Footwork", keystone: "Presence of Mind", secondary: "Legend Bloodline", thirdly: "Coup de Grace", bonusRune1: "Triumph", bonusRune2: "Celerity" } },
        { name: "Camille", role: "Top", imageLink: "IMAGE_URL_Camille", price: 6300, runes: { primary: "Conqueror", keystone: "Triumph", secondary: "Legend Tenacity", thirdly: "Last Stand", bonusRune1: "Bone Plating", bonusRune2: "Revitalize" } },
        { name: "Cassiopeia", role: "Mid", imageLink: "IMAGE_URL_Cassiopeia", price: 4800, runes: { primary: "Phase Rush", keystone: "Nimbus Cloak", secondary: "Absolute Focus", thirdly: "Gathering Storm", bonusRune1: "Manaflow Band", bonusRune2: "Transcendence" } },
        { name: "ChoGath", role: "Top", imageLink: "IMAGE_URL_ChoGath", price: 1350, runes: { primary: "Grasp of the Undying", keystone: "Demolish", secondary: "Bone Plating", thirdly: "Overgrowth", bonusRune1: "Magical Footwear", bonusRune2: "Approach Velocity" } },
        { name: "Corki", role: "Mid", imageLink: "IMAGE_URL_Corki", price: 3150, runes: { primary: "Fleet Footwork", keystone: "Presence of Mind", secondary: "Legend Alacrity", thirdly: "Coup de Grace", bonusRune1: "Triumph", bonusRune2: "Celerity" } },
        { name: "Darius", role: "Top", imageLink: "IMAGE_URL_Darius", price: 4800, runes: { primary: "Conqueror", keystone: "Triumph", secondary: "Legend Tenacity", thirdly: "Last Stand", bonusRune1: "Second Wind", bonusRune2: "Unflinching" } },    
        { name: "Diana", role: "Mid", imageLink: "IMAGE_URL_Diana", price: 4800, runes: { primary: "Electrocute", keystone: "Sudden Impact", secondary: "Eyeball Collection", thirdly: "Treasure Hunter", bonusRune1: "Manaflow Band", bonusRune2: "Scorch" } },
        { name: "Mundo", role: "Top", imageLink: "IMAGE_URL_DrMundo", price: 1350, runes: { primary: "Grasp of the Undying", keystone: "Demolish", secondary: "Bone Plating", thirdly: "Revitalize", bonusRune1: "Magical Footwear", bonusRune2: "Approach Velocity" } },
        { name: "Evelyn", role: "Jungle", imageLink: "IMAGE_URL_Evelynn", price: 1350, runes: { primary: "Dark Harvest", keystone: "Sudden Impact", secondary: "Eyeball Collection", thirdly: "Treasure Hunter", bonusRune1: "Absolute Focus", bonusRune2: "Gathering Storm" } },
        { name: "Ezreal", role: "ADC", imageLink: "IMAGE_URL_Ezreal", price: 4800, runes: { primary: "Kleptomancy", keystone: "Magical Footwear", secondary: "Biscuit Delivery", thirdly: "Time Warp Tonic", bonusRune1: "Presence of Mind", bonusRune2: "Cut Down" } },
        { name: "Fiddlesticks", role: "Jungle", imageLink: "IMAGE_URL_Fiddlesticks", price: 1350, runes: { primary: "Dark Harvest", keystone: "Cheap Shot", secondary: "Eyeball Collection", thirdly: "Treasure Hunter", bonusRune1: "Nimbus Cloak", bonusRune2: "Transcendence" } },
        { name: "Fiora", role: "Top", imageLink: "IMAGE_URL_Fiora", price: 4800, runes: { primary: "Conqueror", keystone: "Triumph", secondary: "Legend Tenacity", thirdly: "Last Stand", bonusRune1: "Bone Plating", bonusRune2: "Revitalize" } },
        { name: "Fizz", role: "Mid", imageLink: "IMAGE_URL_Fizz", price: 4800, runes: { primary: "Electrocute", keystone: "Sudden Impact", secondary: "Eyeball Collection", thirdly: "Treasure Hunter", bonusRune1: "Magical Footwear", bonusRune2: "Cosmic Insight" } },
        { name: "Galio", role: "Mid", imageLink: "IMAGE_URL_Galio", price: 4800, runes: { primary: "Aftershock", keystone: "Shield Bash", secondary: "Bone Plating", thirdly: "Unflinching", bonusRune1: "Magical Footwear", bonusRune2: "Cosmic Insight" } },
        { name: "Gangplank", role: "Top", imageLink: "IMAGE_URL_Gangplank", price: 3150, runes: { primary: "Grasp of the Undying", keystone: "Demolish", secondary: "Bone Plating", thirdly: "Overgrowth", bonusRune1: "Magical Footwear", bonusRune2: "Cosmic Insight" } },
        { name: "Garen", role: "Top", imageLink: "IMAGE_URL_Garen", price: 450, runes: { primary: "Grasp of the Undying", keystone: "Demolish", secondary: "Bone Plating", thirdly: "Overgrowth", bonusRune1: "Legend Tenacity", bonusRune2: "Last Stand" } },
        { name: "Gnar", role: "Top", imageLink: "IMAGE_URL_Gnar", price: 4800, runes: { primary: "Press the Attack", keystone: "Triumph", secondary: "Legend Alacrity", thirdly: "Coup de Grace", bonusRune1: "Magical Footwear", bonusRune2: "Cosmic Insight" } },
        { name: "Gragas", role: "Jungle", imageLink: "IMAGE_URL_Gragas", price: 3150, runes: { primary: "Aftershock", keystone: "Font of Life", secondary: "Conditioning", thirdly: "Revitalize", bonusRune1: "Magical Footwear", bonusRune2: "Cosmic Insight" } },
        { name: "Graves", role: "Jungle", imageLink: "IMAGE_URL_Graves", price: 4800, runes: { primary: "Fleet Footwork", keystone: "Overheal", secondary: "Legend Bloodline", thirdly: "Coup de Grace", bonusRune1: "Sudden Impact", bonusRune2: "Treasure Hunter" } },
        { name: "Hecarim", role: "Jungle", imageLink: "IMAGE_URL_Hecarim", price: 4800, runes: { primary: "Phase Rush", keystone: "Nimbus Cloak", secondary: "Celerity", thirdly: "Waterwalking", bonusRune1: "Magical Footwear", bonusRune2: "Approach Velocity" } },
        { name: "Heimerdinger", role: "Mid", imageLink: "IMAGE_URL_Heimerdinger", price: 3150, runes: { primary: "Arcane Comet", keystone: "Manaflow Band", secondary: "Transcendence", thirdly: "Scorch", bonusRune1: "Perfect Timing", bonusRune2: "Cosmic Insight" } },
        { name: "Illaoi", role: "Top", imageLink: "IMAGE_URL_Illaoi", price: 4800, runes: { primary: "Grasp of the Undying", keystone: "Demolish", secondary: "Bone Plating", thirdly: "Overgrowth", bonusRune1: "Triumph", bonusRune2: "Legend Tenacity" } },
        { name: "Irelia", role: "Top", imageLink: "IMAGE_URL_Irelia", price: 4800, runes: { primary: "Conqueror", keystone: "Triumph", secondary: "Legend Alacrity", thirdly: "Coup de Grace", bonusRune1: "Magical Footwear", bonusRune2: "Cosmic Insight" } },
        { name: "Ivern", role: "Jungle", imageLink: "IMAGE_URL_Ivern", price: 6300, runes: { primary: "Guardian", keystone: "Font of Life", secondary: "Conditioning", thirdly: "Revitalize", bonusRune1: "Cheap Shot", bonusRune2: "Ingenious Hunter" } },
        { name: "Janna", role: "Support", imageLink: "IMAGE_URL_Janna", price: 1350, runes: { primary: "Summon Aery", keystone: "Manaflow Band", secondary: "Transcendence", thirdly: "Scorch", bonusRune1: "Font of Life", bonusRune2: "Revitalize" } },
        { name: "Jarvan", role: "Jungle", imageLink: "IMAGE_URL_JarvanIV", price: 4800, runes: { primary: "Aftershock", keystone: "Font of Life", secondary: "Conditioning", thirdly: "Revitalize", bonusRune1: "Triumph", bonusRune2: "Legend Tenacity" } },
        { name: "Jax", role: "Top", imageLink: "IMAGE_URL_Jax", price: 1350, runes: { primary: "Conqueror", keystone: "Triumph", secondary: "Legend Alacrity", thirdly: "Last Stand", bonusRune1: "Bone Plating", bonusRune2: "Revitalize" } },
        { name: "Jayce", role: "Top", imageLink: "IMAGE_URL_Jayce", price: 4800, runes: { primary: "Summon Aery", keystone: "Manaflow Band", secondary: "Transcendence", thirdly: "Scorch", bonusRune1: "Perfect Timing", bonusRune2: "Cosmic Insight" } },
        { name: "Jhin", role: "ADC", imageLink: "IMAGE_URL_Jhin", price: 6300, runes: { primary: "Dark Harvest", keystone: "Sudden Impact", secondary: "Eyeball Collection", thirdly: "Treasure Hunter", bonusRune1: "Presence of Mind", bonusRune2: "Coup de Grace" } },
        { name: "Jinx", role: "ADC", imageLink: "IMAGE_URL_Jinx", price: 6300, runes: { primary: "Lethal Tempo", keystone: "Presence of Mind", secondary: "Legend Alacrity", thirdly: "Coup de Grace", bonusRune1: "Overheal", bonusRune2: "Triumph" } },
        { name: "Kaisa", role: "ADC", imageLink: "IMAGE_URL_KaiSa", price: 6300, runes: { primary: "Fleet Footwork", keystone: "Overheal", secondary: "Legend Bloodline", thirdly: "Coup de Grace", bonusRune1: "Presence of Mind", bonusRune2: "Cut Down" } },
        { name: "Kalista", role: "ADC", imageLink: "IMAGE_URL_Kalista", price: 6300, runes: { primary: "Hail of Blades", keystone: "Cheap Shot", secondary: "Eyeball Collection", thirdly: "Treasure Hunter", bonusRune1: "Overheal", bonusRune2: "Legend Bloodline" } },
        { name: "Karma", role: "Support", imageLink: "IMAGE_URL_Karma", price: 3150, runes: { primary: "Summon Aery", keystone: "Manaflow Band", secondary: "Transcendence", thirdly: "Scorch", bonusRune1: "Font of Life", bonusRune2: "Revitalize" } },
        { name: "Karthus", role: "Mid", imageLink: "IMAGE_URL_Karthus", price: 3150, runes: { primary: "Dark Harvest", keystone: "Cheap Shot", secondary: "Eyeball Collection", thirdly: "Treasure Hunter", bonusRune1: "Presence of Mind", bonusRune2: "Cut Down" } },
        { name: "Kassadin", role: "Mid", imageLink: "IMAGE_URL_Kassadin", price: 3150, runes: { primary: "Fleet Footwork", keystone: "Presence of Mind", secondary: "Legend Tenacity", thirdly: "Coup de Grace", bonusRune1: "Magical Footwear", bonusRune2: "Cosmic Insight" } },
        { name: "Katarina", role: "Mid", imageLink: "IMAGE_URL_Katarina", price: 3150, runes: { primary: "Electrocute", keystone: "Sudden Impact", secondary: "Eyeball Collection", thirdly: "Treasure Hunter", bonusRune1: "Presence of Mind", bonusRune2: "Coup de Grace" } },
        { name: "Kayle", role: "Top", imageLink: "IMAGE_URL_Kayle", price: 450, runes: { primary: "Press the Attack", keystone: "Triumph", secondary: "Legend Alacrity", thirdly: "Coup de Grace", bonusRune1: "Magical Footwear", bonusRune2: "Cosmic Insight" } },
        { name: "Kayn", role: "Jungle", imageLink: "IMAGE_URL_Kayn", price: 6300, runes: { primary: "Dark Harvest", keystone: "Sudden Impact", secondary: "Eyeball Collection", thirdly: "Treasure Hunter", bonusRune1: "Electrocute", bonusRune2: "Ultimate Hunter" } },
        { name: "Kennen", role: "Top", imageLink: "IMAGE_URL_Kennen", price: 4800, runes: { primary: "Phase Rush", keystone: "Nimbus Cloak", secondary: "Transcendence", thirdly: "Gathering Storm", bonusRune1: "Presence of Mind", bonusRune2: "Legend Tenacity" } },
        { name: "Khazix", role: "Jungle", imageLink: "IMAGE_URL_KhaZix", price: 4800, runes: { primary: "Dark Harvest", keystone: "Sudden Impact", secondary: "Eyeball Collection", thirdly: "Treasure Hunter", bonusRune1: "Electrocute", bonusRune2: "Ultimate Hunter" } },
        { name: "Kindred", role: "Jungle", imageLink: "IMAGE_URL_Kindred", price: 6300, runes: { primary: "Hail of Blades", keystone: "Cheap Shot", secondary: "Eyeball Collection", thirdly: "Treasure Hunter", bonusRune1: "Legend Alacrity", bonusRune2: "Coup de Grace" } },
        { name: "Kled", role: "Top", imageLink: "IMAGE_URL_Kled", price: 6300, runes: { primary: "Press the Attack", keystone: "Triumph", secondary: "Legend Alacrity", thirdly: "Coup de Grace", bonusRune1: "Bone Plating", bonusRune2: "Revitalize" } },
        { name: "KogMaw", role: "ADC", imageLink: "IMAGE_URL_KogMaw", price: 4800, runes: { primary: "Lethal Tempo", keystone: "Presence of Mind", secondary: "Legend Alacrity", thirdly: "Coup de Grace", bonusRune1: "Overheal", bonusRune2: "Triumph" } },
        { name: "LeBlanc", role: "Mid", imageLink: "IMAGE_URL_LeBlanc", price: 3150, runes: { primary: "Electrocute", keystone: "Sudden Impact", secondary: "Eyeball Collection", thirdly: "Treasure Hunter", bonusRune1: "Presence of Mind", bonusRune2: "Coup de Grace" } },
        { name: "Lee Sin", role: "Jungle", imageLink: "IMAGE_URL_LeeSin", price: 4800, runes: { primary: "Conqueror", keystone: "Triumph", secondary: "Legend Tenacity", thirdly: "Last Stand", bonusRune1: "Eyeball Collection", bonusRune2: "Treasure Hunter" } },
        { name: "Leona", role: "Support", imageLink: "IMAGE_URL_Leona", price: 4800, runes: { primary: "Aftershock", keystone: "Shield Bash", secondary: "Bone Plating", thirdly: "Unflinching", bonusRune1: "Font of Life", bonusRune2: "Revitalize" } },
        { name: "Lillia", role: "Jungle", imageLink: "IMAGE_URL_Lillia", price: 6300, runes: { primary: "Phase Rush", keystone: "Nimbus Cloak", secondary: "Transcendence", thirdly: "Gathering Storm", bonusRune1: "Magical Footwear", bonusRune2: "Cosmic Insight" } },
        { name: "Lissandra", role: "Mid", imageLink: "IMAGE_URL_Lissandra", price: 4800, runes: { primary: "Electrocute", keystone: "Cheap Shot", secondary: "Eyeball Collection", thirdly: "Treasure Hunter", bonusRune1: "Presence of Mind", bonusRune2: "Coup de Grace" } },
        { name: "Lucian", role: "ADC", imageLink: "IMAGE_URL_Lucian", price: 4800, runes: { primary: "Press the Attack", keystone: "Triumph", secondary: "Legend Bloodline", thirdly: "Coup de Grace", bonusRune1: "Magical Footwear", bonusRune2: "Biscuit Delivery" } },
        { name: "Lulu", role: "Support", imageLink: "IMAGE_URL_Lulu", price: 4800, runes: { primary: "Summon Aery", keystone: "Manaflow Band", secondary: "Transcendence", thirdly: "Scorch", bonusRune1: "Font of Life", bonusRune2: "Revitalize" } },
        { name: "Lux", role: "Support", imageLink: "IMAGE_URL_Lux", price: 3150, runes: { primary: "Arcane Comet", keystone: "Manaflow Band", secondary: "Transcendence", thirdly: "Scorch", bonusRune1: "Font of Life", bonusRune2: "Revitalize" } },
        { name: "Malphite", role: "Top", imageLink: "IMAGE_URL_Malphite", price: 1350, runes: { primary: "Grasp of the Undying", keystone: "Demolish", secondary: "Bone Plating", thirdly: "Unflinching", bonusRune1: "Magical Footwear", bonusRune2: "Biscuit Delivery" } },
        { name: "Malzahar", role: "Mid", imageLink: "IMAGE_URL_Malzahar", price: 4800, runes: { primary: "Arcane Comet", keystone: "Manaflow Band", secondary: "Transcendence", thirdly: "Scorch", bonusRune1: "Presence of Mind", bonusRune2: "Coup de Grace" } },
        { name: "Maokai", role: "Top", imageLink: "IMAGE_URL_Maokai", price: 4800, runes: { primary: "Grasp of the Undying", keystone: "Demolish", secondary: "Bone Plating", thirdly: "Overgrowth", bonusRune1: "Presence of Mind", bonusRune2: "Legend Tenacity" } },
        { name: "Master Yi", role: "Jungle", imageLink: "IMAGE_URL_MasterYi", price: 450, runes: { primary: "Lethal Tempo", keystone: "Triumph", secondary: "Legend Alacrity", thirdly: "Coup de Grace", bonusRune1: "Eyeball Collection", bonusRune2: "Treasure Hunter" } },
        { name: "Miss Fortune", role: "ADC", imageLink: "IMAGE_URL_MissFortune", price: 3150, runes: { primary: "Dark Harvest", keystone:"Taste of Blood", secondary: "Eyeball Collection", thirdly: "Treasure Hunter", bonusRune1: "Presence of Mind", bonusRune2: "Cut Down" } },
        { name: "Mordekaiser", role: "Top", imageLink: "IMAGE_URL_Mordekaiser", price: 1350, runes: { primary: "Conqueror", keystone: "Triumph", secondary: "Legend Tenacity", thirdly: "Last Stand", bonusRune1: "Second Wind", bonusRune2: "Revitalize" } },
        { name: "Morgana", role: "Support", imageLink: "IMAGE_URL_Morgana", price: 1350, runes: { primary: "Summon Aery", keystone: "Manaflow Band", secondary: "Transcendence", thirdly: "Scorch", bonusRune1: "Font of Life", bonusRune2: "Revitalize" } },
        { name: "Nami", role: "Support", imageLink: "IMAGE_URL_Nami", price: 6300, runes: { primary: "Aery", keystone: "Manaflow Band", secondary: "Transcendence", thirdly: "Scorch", bonusRune1: "Font of Life", bonusRune2: "Revitalize" } },
        { name: "Nasus", role: "Top", imageLink: "IMAGE_URL_Nasus", price: 1350, runes: { primary: "Grasp of the Undying", keystone: "Demolish", secondary: "Conditioning", thirdly: "Overgrowth", bonusRune1: "Triumph", bonusRune2: "Legend Tenacity" } },
        { name: "Nautilus", role: "Support", imageLink: "IMAGE_URL_Nautilus", price: 4800, runes: { primary: "Aftershock", keystone: "Font of Life", secondary: "Conditioning", thirdly: "Unflinching", bonusRune1: "Revitalize", bonusRune2: "Shield Bash" } },
        { name: "Neeko", role: "Mid", imageLink: "IMAGE_URL_Neeko", price: 6300, runes: { primary: "Arcane Comet", keystone: "Manaflow Band", secondary: "Transcendence", thirdly: "Scorch", bonusRune1: "Presence of Mind", bonusRune2: "Coup de Grace" } },
        { name: "Nidalee", role: "Jungle", imageLink: "IMAGE_URL_Nidalee", price: 3150, runes: { primary: "Dark Harvest", keystone: "Sudden Impact", secondary: "Eyeball Collection", thirdly: "Treasure Hunter", bonusRune1: "Gathering Storm", bonusRune2: "Waterwalking" } },
        { name: "Nocturne", role: "Jungle", imageLink: "IMAGE_URL_Nocturne", price: 4800, runes: { primary: "Hail of Blades", keystone: "Sudden Impact", secondary: "Eyeball Collection", thirdly: "Treasure Hunter", bonusRune1: "Legend Alacrity", bonusRune2: "Coup de Grace" } },
        { name: "Nunu", role: "Jungle", imageLink: "IMAGE_URL_NunuWillump", price: 450, runes: { primary: "Aftershock", keystone: "Font of Life", secondary: "Conditioning", thirdly: "Unflinching", bonusRune1: "Magical Footwear", bonusRune2: "Cosmic Insight" } },
        { name: "Olaf", role: "Top", imageLink: "IMAGE_URL_Olaf", price: 3150, runes: { primary: "Conqueror", keystone: "Triumph", secondary: "Legend Tenacity", thirdly: "Last Stand", bonusRune1: "Eyeball Collection", bonusRune2: "Treasure Hunter" } },
        { name: "Orianna", role: "Mid", imageLink: "IMAGE_URL_Orianna", price: 4800, runes: { primary: "Arcane Comet", keystone: "Manaflow Band", secondary: "Transcendence", thirdly: "Gathering Storm", bonusRune1: "Presence of Mind", bonusRune2: "Coup de Grace" } },
        { name: "Ornn", role: "Top", imageLink: "IMAGE_URL_Ornn", price: 6300, runes: { primary: "Grasp of the Undying", keystone: "Demolish", secondary: "Conditioning", thirdly: "Overgrowth", bonusRune1: "Font of Life", bonusRune2: "Revitalize" } },
        { name: "Pantheon", role: "Top", imageLink: "IMAGE_URL_Pantheon", price: 3150, runes: { primary: "Conqueror", keystone: "Triumph", secondary: "Legend Tenacity", thirdly: "Last Stand", bonusRune1: "Eyeball Collection", bonusRune2: "Treasure Hunter" } },
        { name: "Poppy", role: "Top", imageLink: "IMAGE_URL_Poppy", price: 450, runes: { primary: "Aftershock", keystone: "Font of Life", secondary: "Conditioning", thirdly: "Unflinching", bonusRune1: "Revitalize", bonusRune2: "Shield Bash" } },
        { name: "Pyke", role: "Support", imageLink: "IMAGE_URL_Pyke", price: 6300, runes: { primary: "Hail of Blades", keystone: "Cheap Shot", secondary: "Eyeball Collection", thirdly: "Treasure Hunter", bonusRune1: "Legend Tenacity", bonusRune2: "Coup de Grace" } },
        { name: "Qiyana", role: "Mid", imageLink: "IMAGE_URL_Qiyana", price: 6300, runes: { primary: "Electrocute", keystone: "Sudden Impact", secondary: "Eyeball Collection", thirdly: "Treasure Hunter", bonusRune1: "Presence of Mind", bonusRune2: "Coup de Grace" } },
        { name: "Quinn", role: "Top", imageLink: "IMAGE_URL_Quinn", price: 6300, runes: { primary: "Hail of Blades", keystone: "Cheap Shot", secondary: "Eyeball Collection", thirdly: "Treasure Hunter", bonusRune1: "Legend Alacrity", bonusRune2: "Coup de Grace" } },
        { name: "Rakan", role: "Support", imageLink: "IMAGE_URL_Rakan", price: 6300, runes: { primary: "Guardian", keystone: "Font of Life", secondary: "Conditioning", thirdly: "Revitalize", bonusRune1: "Presence of Mind", bonusRune2: "Legend Tenacity" } },
        { name: "Rammus", role: "Jungle", imageLink: "IMAGE_URL_Rammus", price: 1350, runes: { primary: "Aftershock", keystone: "Font of Life", secondary: "Conditioning", thirdly: "Unflinching", bonusRune1: "Revitalize", bonusRune2: "Shield Bash" } },
        { name: "RekSai", role: "Jungle", imageLink: "IMAGE_URL_RekSai", price: 6300, runes: { primary: "Conqueror", keystone: "Triumph", secondary: "Legend Tenacity", thirdly: "Last Stand", bonusRune1: "Eyeball Collection", bonusRune2: "Treasure Hunter" } },
        { name: "Renekton", role: "Top", imageLink: "IMAGE_URL_Renekton", price: 4800, runes: { primary: "Conqueror", keystone: "Triumph", secondary: "Legend Tenacity", thirdly: "Last Stand", bonusRune1: "Eyeball Collection", bonusRune2: "Treasure Hunter" } },
        { name: "Rengar", role: "Jungle", imageLink: "IMAGE_URL_Rengar", price: 4800, runes: { primary: "Dark Harvest", keystone: "Sudden Impact", secondary: "Eyeball Collection", thirdly: "Treasure Hunter", bonusRune1: "Legend Alacrity", bonusRune2: "Coup de Grace" } },
        { name: "Riven", role: "Top", imageLink: "IMAGE_URL_Riven", price: 4800, runes: { primary: "Conqueror", keystone: "Triumph", secondary: "Legend Tenacity", thirdly: "Last Stand", bonusRune1: "Eyeball Collection", bonusRune2: "Treasure Hunter" } },
        { name: "Rumble", role: "Top", imageLink: "IMAGE_URL_Rumble", price: 4800, runes: { primary: "Arcane Comet", keystone: "Manaflow Band", secondary: "Transcendence", thirdly: "Gathering Storm", bonusRune1: "Presence of Mind", bonusRune2: "Coup de Grace" } },
        { name: "Ryze", role: "Mid", imageLink: "IMAGE_URL_Ryze", price: 450, runes: { primary: "Phase Rush", keystone: "Manaflow Band", secondary: "Transcendence", thirdly: "Scorch", bonusRune1: "Presence of Mind", bonusRune2: "Cut Down" } },
        { name: "Samira", role: "ADC", imageLink: "IMAGE_URL_Samira", price: 6300, runes: { primary: "Press the Attack", keystone: "Triumph", secondary: "Legend Bloodline", thirdly: "Coup de Grace", bonusRune1: "Presence of Mind", bonusRune2: "Cut Down" } },
        { name: "Sejuani", role: "Jungle", imageLink: "IMAGE_URL_Sejuani", price: 4800, runes: { primary: "Aftershock", keystone: "Font of Life", secondary: "Conditioning", thirdly: "Unflinching", bonusRune1: "Revitalize", bonusRune2: "Shield Bash" } },
        { name: "Senna", role: "ADC", imageLink: "IMAGE_URL_Senna", price: 6300, runes: { primary: "Glacial Augment", keystone: "Font of Life", secondary: "Conditioning", thirdly: "Revitalize", bonusRune1: "Presence of Mind", bonusRune2: "Legend Tenacity" } },
        { name: "Seraphine", role: "Support", imageLink: "IMAGE_URL_Seraphine", price: 6300, runes: { primary: "Aery", keystone: "Manaflow Band", secondary: "Transcendence", thirdly: "Scorch", bonusRune1: "Font of Life", bonusRune2: "Revitalize" } },
        { name: "Sett", role: "Top", imageLink: "IMAGE_URL_Sett", price: 6300, runes: { primary: "Conqueror", keystone: "Triumph", secondary: "Legend Tenacity", thirdly: "Last Stand", bonusRune1: "Eyeball Collection", bonusRune2: "Treasure Hunter" } },
        { name: "Shaco", role: "Jungle", imageLink: "IMAGE_URL_Shaco", price: 3150, runes: { primary: "Hail of Blades", keystone: "Sudden Impact", secondary: "Eyeball Collection", thirdly: "Treasure Hunter", bonusRune1: "Cheap Shot", bonusRune2: "Ultimate Hunter" } },
        { name: "Shen", role: "Top", imageLink: "IMAGE_URL_Shen", price: 3150, runes: { primary: "Grasp of the Undying", keystone: "Font of Life", secondary: "Conditioning", thirdly: "Unflinching", bonusRune1: "Revitalize", bonusRune2: "Second Wind" } },
        { name: "Shyvana", role: "Jungle", imageLink: "IMAGE_URL_Shyvana", price: 1350, runes: { primary: "Press the Attack", keystone: "Triumph", secondary: "Legend Alacrity", thirdly: "Coup de Grace", bonusRune1: "Eyeball Collection", bonusRune2: "Treasure Hunter" } },
        { name: "Singed", role: "Top", imageLink: "IMAGE_URL_Singed", price: 450, runes: { primary: "Aftershock", keystone: "Font of Life", secondary: "Conditioning", thirdly: "Unflinching", bonusRune1: "Revitalize", bonusRune2: "Second Wind" } },
        { name: "Sion", role: "Top", imageLink: "IMAGE_URL_Sion", price: 1350, runes: { primary: "Grasp of the Undying", keystone: "Demolish", secondary: "Conditioning", thirdly: "Overgrowth", bonusRune1: "Font of Life", bonusRune2: "Revitalize" } },
        { name: "Sivir", role: "ADC", imageLink: "IMAGE_URL_Sivir", price: 450, runes: { primary: "Press the Attack", keystone: "Triumph", secondary: "Legend Bloodline", thirdly: "Coup de Grace", bonusRune1: "Magical Footwear", bonusRune2: "Biscuit Delivery" } },
        { name: "Skarner", role: "Jungle", imageLink: "IMAGE_URL_Skarner", price: 4800, runes: { primary: "Phase Rush", keystone: "Nimbus Cloak", secondary: "Transcendence", thirdly: "Waterwalking", bonusRune1: "Magical Footwear", bonusRune2: "Cosmic Insight" } },
        { name: "Sona", role: "Support", imageLink: "IMAGE_URL_Sona", price: 3150, runes: { primary: "Summon Aery", keystone: "Manaflow Band", secondary: "Transcendence", thirdly: "Scorch", bonusRune1: "Presence of Mind", bonusRune2: "Cut Down" } },
        { name: "Soraka", role: "Support", imageLink: "IMAGE_URL_Soraka", price: 450, runes: { primary: "Summon Aery", keystone: "Manaflow Band", secondary: "Transcendence", thirdly: "Gathering Storm", bonusRune1: "Font of Life", bonusRune2: "Revitalize" } },
        { name: "Swain", role: "Mid", imageLink: "IMAGE_URL_Swain", price: 4800, runes: { primary: "Phase Rush", keystone: "Manaflow Band", secondary: "Transcendence", thirdly: "Scorch", bonusRune1: "Presence of Mind", bonusRune2: "Coup de Grace" } },
        { name: "Sylas", role: "Mid", imageLink: "IMAGE_URL_Sylas", price: 6300, runes: { primary: "Conqueror", keystone: "Triumph", secondary: "Legend Tenacity", thirdly: "Last Stand", bonusRune1: "Presence of Mind", bonusRune2: "Coup de Grace" } },
        { name: "Syndra", role: "Mid", imageLink: "IMAGE_URL_Syndra", price: 4800, runes: { primary: "Arcane Comet", keystone: "Manaflow Band", secondary: "Transcendence", thirdly: "Scorch", bonusRune1: "Presence of Mind", bonusRune2: "Coup de Grace" } },
        { name: "Tahm Kench", role: "Support", imageLink: "IMAGE_URL_TahmKench", price: 4800, runes: { primary: "Aftershock", keystone: "Font of Life", secondary: "Conditioning", thirdly: "Unflinching", bonusRune1: "Revitalize", bonusRune2: "Second Wind" } },
        { name: "Taliyah", role: "Jungle", imageLink: "IMAGE_URL_Taliyah", price: 3150, runes: { primary: "Hail of Blades", keystone: "Cheap Shot", secondary: "Eyeball Collection", thirdly: "Treasure Hunter", bonusRune1: "Nimbus Cloak", bonusRune2: "Waterwalking" } },
        { name: "Talon", role: "Mid", imageLink: "IMAGE_URL_Talon", price: 4800, runes: { primary: "Electrocute", keystone: "Sudden Impact", secondary: "Eyeball Collection", thirdly: "Treasure Hunter", bonusRune1: "Presence of Mind", bonusRune2: "Coup de Grace" } },
        { name: "Taric", role: "Support", imageLink: "IMAGE_URL_Taric", price: 4800, runes: { primary: "Aftershock", keystone: "Font of Life", secondary: "Conditioning", thirdly: "Unflinching", bonusRune1: "Revitalize", bonusRune2: "Shield Bash" } },
        { name: "Teemo", role: "Top", imageLink: "IMAGE_URL_Teemo", price: 1350, runes: { primary: "Arcane Comet", keystone: "Manaflow Band", secondary: "Transcendence", thirdly: "Scorch", bonusRune1: "Cheap Shot", bonusRune2: "Ultimate Hunter" } },
        { name: "Thresh", role: "Support", imageLink: "IMAGE_URL_Thresh", price: 4800, runes: { primary: "Guardian", keystone: "Font of Life", secondary: "Conditioning", thirdly: "Revitalize", bonusRune1: "Presence of Mind", bonusRune2: "Legend Tenacity" } },
        { name: "Tristana", role: "ADC", imageLink: "IMAGE_URL_Tristana", price: 1350, runes: { primary: "Lethal Tempo", keystone: "Triumph", secondary: "Legend Bloodline", thirdly: "Coup de Grace", bonusRune1: "Presence of Mind", bonusRune2: "Coup de Grace" } },
        { name: "Trundle", role: "Jungle", imageLink: "IMAGE_URL_Trundle", price: 4800, runes: { primary: "Press the Attack", keystone: "Triumph", secondary: "Legend Tenacity", thirdly: "Last Stand", bonusRune1: "Eyeball Collection", bonusRune2: "Treasure Hunter" } },
        { name: "Tryndamere", role: "Top", imageLink: "IMAGE_URL_Tryndamere", price: 1350, runes: { primary: "Lethal Tempo", keystone: "Triumph", secondary: "Legend Alacrity", thirdly: "Last Stand", bonusRune1: "Presence of Mind", bonusRune2: "Coup de Grace" } },
        { name: "Twisted Fate", role: "Mid", imageLink: "IMAGE_URL_TwistedFate", price: 1350, runes: { primary: "Arcane Comet", keystone: "Manaflow Band", secondary: "Transcendence", thirdly: "Gathering Storm", bonusRune1: "Presence of Mind", bonusRune2: "Cut Down" } },
        { name: "Twitch", role: "ADC", imageLink: "IMAGE_URL_Twitch", price: 3150, runes: { primary: "Lethal Tempo", keystone: "Triumph", secondary: "Legend Alacrity", thirdly: "Coup de Grace", bonusRune1: "Eyeball Collection", bonusRune2: "Treasure Hunter" } },
        { name: "Udyr", role: "Jungle", imageLink: "IMAGE_URL_Udyr", price: 1350, runes: { primary: "Conqueror", keystone: "Triumph", secondary: "Legend Tenacity", thirdly: "Last Stand", bonusRune1: "Eyeball Collection", bonusRune2: "Treasure Hunter" } },
        { name: "Urgot", role: "Top", imageLink: "IMAGE_URL_Urgot", price: 4800, runes: { primary: "Press the Attack", keystone: "Triumph", secondary: "Legend Alacrity", thirdly: "Last Stand", bonusRune1: "Eyeball Collection", bonusRune2: "Treasure Hunter" } },
        { name: "Varus", role: "ADC", imageLink: "IMAGE_URL_Varus", price: 4800, runes: { primary: "Lethal Tempo", keystone: "Triumph", secondary: "Legend Bloodline", thirdly: "Coup de Grace", bonusRune1: "Magical Footwear", bonusRune2: "Biscuit Delivery" } },
        { name: "Vayne", role: "ADC", imageLink: "IMAGE_URL_Vayne", price: 4800, runes: { primary: "Lethal Tempo", keystone: "Triumph", secondary: "Legend Alacrity", thirdly: "Last Stand", bonusRune1: "Presence of Mind", bonusRune2: "Cut Down" } },
        { name: "Veigar", role: "Mid", imageLink: "IMAGE_URL_Veigar", price: 1350, runes: { primary: "Arcane Comet", keystone: "Manaflow Band", secondary: "Transcendence", thirdly: "Gathering Storm", bonusRune1: "Presence of Mind", bonusRune2: "Cut Down" } },
        { name: "Vel'Koz", role: "Mid", imageLink: "IMAGE_URL_VelKoz", price: 4800, runes: { primary: "Arcane Comet", keystone: "Manaflow Band", secondary: "Transcendence", thirdly: "Scorch", bonusRune1: "Presence of Mind", bonusRune2: "Cut Down" } },
        { name: "Vi", role: "Jungle", imageLink: "IMAGE_URL_Vi", price: 4800, runes: { primary: "Press the Attack", keystone: "Triumph", secondary: "Legend Tenacity", thirdly: "Coup de Grace", bonusRune1: "Eyeball Collection", bonusRune2: "Treasure Hunter" } },
        { name: "Viktor", role: "Mid", imageLink: "IMAGE_URL_Viktor", price: 4800, runes: { primary: "Arcane Comet", keystone: "Manaflow Band", secondary: "Transcendence", thirdly: "Gathering Storm", bonusRune1: "Presence of Mind", bonusRune2: "Coup de Grace" } },
        { name: "Vladimir", role: "Mid", imageLink: "IMAGE_URL_Vladimir", price: 4800, runes: { primary: "Phase Rush", keystone: "Nimbus Cloak", secondary: "Transcendence", thirdly: "Gathering Storm", bonusRune1: "Presence of Mind", bonusRune2: "Cut Down" } },
        { name: "Volibear", role: "Jungle", imageLink: "IMAGE_URL_Volibear", price: 4800, runes: { primary: "Press the Attack", keystone: "Triumph", secondary: "Legend Alacrity", thirdly: "Coup de Grace", bonusRune1: "Revitalize", bonusRune2: "Unflinching" } },
        { name: "Warwick", role: "Jungle", imageLink: "IMAGE_URL_Warwick", price: 450, runes: { primary: "Press the Attack", keystone: "Triumph", secondary: "Legend Alacrity", thirdly: "Coup de Grace", bonusRune1: "Revitalize", bonusRune2: "Unflinching" } },
        { name: "Wukong", role: "Top", imageLink: "IMAGE_URL_Wukong", price: 4800, runes: { primary: "Conqueror", keystone: "Triumph", secondary: "Legend Tenacity", thirdly: "Last Stand", bonusRune1: "Magical Footwear", bonusRune2: "Cosmic Insight" } },
        { name: "Xayah", role: "ADC", imageLink: "IMAGE_URL_Xayah", price: 6300, runes: { primary: "Press the Attack", keystone: "Triumph", secondary: "Legend Alacrity", thirdly: "Coup de Grace", bonusRune1: "Presence of Mind", bonusRune2: "Cut Down" } },
        { name: "Xerath", role: "Mid", imageLink: "IMAGE_URL_Xerath", price: 4800, runes: { primary: "Arcane Comet", keystone: "Manaflow Band", secondary: "Transcendence", thirdly: "Gathering Storm", bonusRune1: "Presence of Mind", bonusRune2: "Coup de Grace" } },
        { name: "Xin Zhao", role: "Jungle", imageLink: "IMAGE_URL_XinZhao", price: 1350, runes: { primary: "Press the Attack", keystone: "Triumph", secondary: "Legend Alacrity", thirdly: "Coup de Grace", bonusRune1: "Revitalize", bonusRune2: "Unflinching" } },
        { name: "Yasuo", role: "Mid", imageLink: "IMAGE_URL_Yasuo", price: 4800, runes: { primary: "Conqueror", keystone: "Triumph", secondary: "Legend Bloodline", thirdly: "Coup de Grace", bonusRune1: "Nimbus Cloak", bonusRune2: "Gathering Storm" } },
        { name: "Yone", role: "Mid", imageLink: "IMAGE_URL_Yone", price: 6300, runes: { primary: "Conqueror", keystone: "Triumph", secondary: "Legend Alacrity", thirdly: "Last Stand", bonusRune1: "Nimbus Cloak", bonusRune2: "Gathering Storm" } },
        { name: "Yorick", role: "Top", imageLink: "IMAGE_URL_Yorick", price: 4800, runes: { primary: "Grasp of the Undying", keystone: "Demolish", secondary: "Conditioning", thirdly: "Overgrowth", bonusRune1: "Revitalize", bonusRune2: "Second Wind" } },
        { name: "Yuumi", role: "Support", imageLink: "IMAGE_URL_Yuumi", price: 6300, runes: { primary: "Summon Aery", keystone: "Manaflow Band", secondary: "Transcendence", thirdly: "Scorch", bonusRune1: "Font of Life", bonusRune2: "Revitalize" } },
        { name: "Zac", role: "Jungle", imageLink: "IMAGE_URL_Zac", price: 4800, runes: { primary: "Aftershock", keystone: "Font of Life", secondary: "Conditioning", thirdly: "Unflinching", bonusRune1: "Revitalize", bonusRune2: "Second Wind" } },
        { name: "Zed", role: "Mid", imageLink: "IMAGE_URL_Zed", price: 4800, runes: { primary: "Electrocute", keystone: "Sudden Impact", secondary: "Eyeball Collection", thirdly: "Treasure Hunter", bonusRune1: "Presence of Mind", bonusRune2: "Coup de Grace" } },
        { name: "Ziggs", role: "Mid", imageLink: "IMAGE_URL_Ziggs", price: 4800, runes: { primary: "Arcane Comet", keystone: "Manaflow Band", secondary: "Transcendence", thirdly: "Scorch", bonusRune1: "Presence of Mind", bonusRune2: "Cut Down" } },
        { name: "Zilean", role: "Support", imageLink: "IMAGE_URL_Zilean", price: 3150, runes: { primary: "Summon Aery", keystone: "Manaflow Band", secondary: "Transcendence", thirdly: "Scorch", bonusRune1: "Revitalize", bonusRune2: "Biscuit Delivery" } },
        { name: "Zoe", role: "Mid", imageLink: "IMAGE_URL_Zoe", price: 4800, runes: { primary: "Arcane Comet", keystone: "Manaflow Band", secondary: "Transcendence", thirdly: "Scorch", bonusRune1: "Presence of Mind", bonusRune2: "Cut Down" } },
        { name: "Zyra", role: "Support", imageLink: "IMAGE_URL_Zyra", price: 4800, runes: { primary: "Summon Aery", keystone: "Manaflow Band", secondary: "Transcendence", thirdly: "Scorch", bonusRune1: "Revitalize", bonusRune2: "Biscuit Delivery" } }

];

function CodeToHtml(name , role , imageLink , price) {
    return `        <div class="champions-card">
    <aside class="lane-aside">
        <article class="blue-assence-article">
            <p>${price}</p>
            <img class="blue-essence" src="./Photo/blue essence.png" alt="">
        </article>
        <img class="lane-image" src="./Photo/${role}.svg" alt="">
    </aside>
    <aside class="champions-card-info-aside">
        <article class="image-article">
            <img class="champion-img" src="./Photo/${name}.png" alt="">
        </article>
        <p class="name-p">${name}</p>
        <a type="button" class="runes-btn">ნახეთ რუნები</a>
    </aside>
</div>`
}

function HtmlAdder(name , role , imageLink , price) {
    cardSection.innerHTML += CodeToHtml(name,role,imageLink,price)
}

function AddCardsToHtml(){
    cardSection.innerHTML = ""
    if(nameInput.value === "" && roleInput.value === "any" && minPrice.value === "" && maxPrice.value === ""){
        for(let i = 0 ; i < cardArray.length ; i++){
            HtmlAdder(cardArray[i].name,cardArray[i].role,cardArray[i].imageLink,cardArray[i].price)
        }
    }
    else if(nameInput.value !== ""){
        searchArray = []
        for(let i = 0 ; i < cardArray.length ; i++){
           if(cardArray[i].name.toLowerCase().includes(nameInput.value.toLowerCase()) === true){
            HtmlAdder(cardArray[i].name,cardArray[i].role,cardArray[i].imageLink,cardArray[i].price)
            searchArray.push(cardArray[i])
           }
        }
    }
    else if(roleInput.value !== "any" && minPrice.value === "" && maxPrice.value === ""){
        searchArray = []
        for(let i = 0 ; i < cardArray.length ; i++){
            if(cardArray[i].role.toLowerCase() === roleInput.value.toLowerCase()){
             HtmlAdder(cardArray[i].name,cardArray[i].role,cardArray[i].imageLink,cardArray[i].price)
             console.log("It Works")
            searchArray.push(cardArray[i])
            }
         }
    }
    else if (minPrice.value !== "" && maxPrice.value !== "" && roleInput.value === "any"){
        searchArray = []
        for(let i = 0 ; i < cardArray.length ; i++){
            if(cardArray[i].price <= maxPrice.value && cardArray[i].price >= minPrice.value){
             HtmlAdder(cardArray[i].name,cardArray[i].role,cardArray[i].imageLink,cardArray[i].price)
             searchArray.push(cardArray[i])
            }
         }
    }
    else if (minPrice.value !== "" && maxPrice.value === "" && roleInput.value === "any"){
        searchArray = []
        for(let i = 0 ; i < cardArray.length ; i++){
            if(cardArray[i].price >= minPrice.value){
             HtmlAdder(cardArray[i].name,cardArray[i].role,cardArray[i].imageLink,cardArray[i].price)
             searchArray.push(cardArray[i])
            }
         }
    }
    else if (minPrice.value === "" && maxPrice.value !== "" && roleInput.value === "any"){
        searchArray = []
        for(let i = 0 ; i < cardArray.length ; i++){
            if(cardArray[i].price <= maxPrice.value){
             HtmlAdder(cardArray[i].name,cardArray[i].role,cardArray[i].imageLink,cardArray[i].price)
             searchArray.push(cardArray[i])
            }
         }
    }
    else if (minPrice.value !== "" && maxPrice.value !== "" && roleInput.value !== "any"){
        searchArray = []
        for(let i = 0 ; i < cardArray.length ; i++){
            if(cardArray[i].price <= maxPrice.value && cardArray[i].price >= minPrice.value && cardArray[i].role.toLowerCase() === roleInput.value.toLowerCase()){
             HtmlAdder(cardArray[i].name,cardArray[i].role,cardArray[i].imageLink,cardArray[i].price)
             searchArray.push(cardArray[i])
            }
         }
    }
    else if (minPrice.value !== "" && maxPrice.value === "" && roleInput.value !== "any"){
        searchArray = []
        for(let i = 0 ; i < cardArray.length ; i++){
            if(cardArray[i].price >= minPrice.value && cardArray[i].role.toLowerCase() === roleInput.value.toLowerCase()){
             HtmlAdder(cardArray[i].name,cardArray[i].role,cardArray[i].imageLink,cardArray[i].price)
             searchArray.push(cardArray[i])
            }
         }
    }
    else if (minPrice.value === "" && maxPrice.value !== "" && roleInput.value !== "any"){
        searchArray = []
        for(let i = 0 ; i < cardArray.length ; i++){
            if(cardArray[i].price <= maxPrice.value  && cardArray[i].role.toLowerCase() === roleInput.value.toLowerCase()){
             HtmlAdder(cardArray[i].name,cardArray[i].role,cardArray[i].imageLink,cardArray[i].price)
             searchArray.push(cardArray[i])
            }
         }
    }
}

AddCardsToHtml()

// Code For Runes

function runesInfoAdder(runeName){
    for(let i = 0 ; i < runeInfoArray.length ; i++){
        if(runeName === runeInfoArray[i].runeName){
            return runeInfoArray[i].RuneInfo
        }
    }
}

let runesBtn = document.querySelectorAll(".runes-btn")
let main = document.getElementById("main")

function RuneToHtml(name , primary , keystone , secondary , thirdly , bonusRune1 , bonusRune2 , role){
main.innerHTML = `<div class="runes-card">
    <aside class="runes-card-top-aside">
        <h3> <img class="lane-image-rune" src="./Photo/${role}.svg" alt="">${name} რუნები:</h3>
        <img class="runes-card-champion-face" src="./Photo/Champs/${name}.png" alt="">
    </aside>
    <aside class="runes-card-bottom-aside">
        <article class="rune-article">
            <p>მთავარი რუნა</p>
            <div class="runes-image-div">
                <img title="${runesInfoAdder(primary)}" class="rune-img" src="./Photo/${primary}.png" alt="">
                <img title="${runesInfoAdder(keystone)}" class="rune-img" src="./Photo/${keystone}.png" alt="">
                <img title="${runesInfoAdder(secondary)}" class="rune-img" src="./Photo/${secondary}.png" alt="">
                <img title="${runesInfoAdder(thirdly)}" class="rune-img" src="./Photo/${thirdly}.png" alt="">
            </div>
        </article>
        <article class="rune-article">
            <p>დამხმარე რუნა</p>
            <div class="runes-image-div">
                <img title="${runesInfoAdder(bonusRune1)}" class="rune-img" src="./Photo/${bonusRune1}.png" alt="">
                <img title="${runesInfoAdder(bonusRune2)}" class="rune-img" src="./Photo/${bonusRune2}.png" alt="">
            </div>
        </article>
    </aside>
    <aside class="runes-know-more">
    <a href="https://www.op.gg/champions/${name.toLowerCase()}/top/build?region=global&tier=platinum_plus">გაიგეთ მეტი</a>
    </aside>
</div>`
}


for(let i = 0 ; i < runesBtn.length ; i++){
runesBtn[i].addEventListener("click" , function(){
    main.innerHTML = "";
    RuneToHtml(cardArray[i].name,cardArray[i].runes.primary,cardArray[i].runes.keystone,cardArray[i].runes.secondary,cardArray[i].runes.thirdly,cardArray[i].runes.bonusRune1,cardArray[i].runes.bonusRune2,cardArray[i].role)
    main.style.display = "flex"
    main.style.width = "100%";
    main.style.height = "100vh"
    main.style.background = `url(./Photo/teemo-background-2.jpg) no-repeat center center fixed`
    main.style.justifyContent = "center"
    main.style.alignItems = "center"       
})
}


searchBtn.addEventListener("click",function(){
    AddCardsToHtml()
    let runesBtn = document.querySelectorAll(".runes-btn")
    let main = document.getElementById("main")
    
        for(let i = 0 ; i < runesBtn.length ; i++){
        runesBtn[i].addEventListener("click" , function(){
            main.innerHTML = "";
            RuneToHtml(searchArray[i].name,searchArray[i].runes.primary,searchArray[i].runes.keystone,searchArray[i].runes.secondary,searchArray[i].runes.thirdly,searchArray[i].runes.bonusRune1,searchArray[i].runes.bonusRune2,searchArray[i].role)
            main.style.display = "flex"
            main.style.width = "100%";
            main.style.height = "100vh"
            main.style.background = `url(./Photo/teemo-background-2.jpg) no-repeat center center fixed`
            main.style.justifyContent = "center"
            main.style.alignItems = "center"       
        })
        }
});


