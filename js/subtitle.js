// script to generate random greetings

function changeSub(num) {
  document.getElementById("subtitle").innerText = say[num];
}

var say = [
  "Welcome.",
  "Hello!",
  "Does this even work?",
  "Welcome to my rad website",
  "Made with HTML!",
  "Now with buggy games!",
  "You get a cookie!",
  "Remember your manners!",
  "Dogs are cute",
  "Ok, and I know your address now!",
  "Beep boop! Are you a robot?",
  "Did you know I have a discord server?",
  "How many sides does a circle have?",
  "1 + 1 = 3",
  "You can read btw",
  "Made you look!",
  "Never gonna give you up, Never gonna let you down...",
  "Redbull gives you wings...",
  "What is your highscore on Swerve?",
  "Since 2018!",
  "Now with 2X more bugs!",
  "12345 is not a good password",
  "This took to long to make",
  "69 hehe funny number",
  "Ahhhhhhhhh",
  "Awesome!",
  "As seen on TV!",
  "doot doot",
  "100% Fresh!",
  "LOL",
  "Cold as ice!",
  "Why are you looking at me?",
  "Made in the US!",
  "Made by 3kh0!",
  "Reload the page NOW!",
  "Downloading your passwords...",
  "Running 3kh0.exe",
  "WARNING: You may lose braincells if you proceed!",
  "Please go away. Thx",
  "Made with GitHub!",
  "Made with VS code!",
  "This is a splash text!",
  "100% Orgainic!",
  "Now with Pac-Man!",
  "Now with Polybranch!",
  "Now with JavaScript!",
  "Do you bite your ice cream?",
  "Reddit: u/3kh0_reddit",
  "Discord: https://discord.gg/3kh0",
  "This was not ment to be seen. :o",
  "Does anyone know how to stand up?",
  "69420",
  "Me too bro.",
  "#Relatable",
  "2 + 2 is 4 - 1 is 3 Quick mafs",
  "Feels bad man.",
  "Now with games that are unblocked?",
  "Now with great games!",
  "How do you play tic-tac-toe?",
  "Fortnite is cringe",
  "You got games on your phone?",
  "I am not gonna say anything.",
  "Now with Minecraft!",
  "Welcome to v3.0!",
  "Your momma jokes are cringe",
  "Now with a new splash!",
  "You just dont get it do you?",
  "Powered by hamsters!",
  "*insert cool explosion*",
  "Efficiency is key",
  "New update???",
  "We have answers!",
  "aaaaaaaaaaaaaaaaaaa",
  "Yooooooooooooooooooooo",
  "Your ip is 69.420.69.420",
  "he on x-games mode",
  "Got to go fast!",
  "GAS GAS GAS GOTTA STEP ON THE GAS!",
  "3kh0.github.io would like to view your browser history",
  "For legal reasons, that's a joke!",
  "It has been 84 years...",
  "Made by Gucci, selling for $69420",
  "There is someone looking over your shoulder",
  "Electric!",
  "How many different ones are there?!?!",
  "NERDDDDDDDDDDDDDDDDDD",
  "My iPad passcode is 563543 btw",
  "Get out of my room, I'm not going to let you in!",
  "I'm not a robot!",
  "I'm not a human!",
  "Sponsered by RAID SHADOW LEGENDS!",
  "Sponsored by Honey!",
  "Sponsored by 3kh0!",
  "Sponsored by your mom!",
  "Sponsored by your dad!",
  "Sponsored by your mom's dad!",
  "Sponsored by your dad's mom!",
  "Sponsored by your mom's dad's mom!",
  "Sponsored by your dad's mom's dad!",
  "Sponsored by your mom's dad's mom's dad!",
  "Sponsored by your dad's mom's dad's mom!",
  "Sponsored by your mom's dad's mom's dad's mom!",
  "Sponsored by your dad's mom's dad's mom's dad!",
  "Sponsored by your mom's dad's mom's dad's mom's dad!",
  "Sponsored by your dad's mom's dad's mom's dad's mom!",
  "Sponsored by your mom's dad's mom's dad's mom's dad's mom!",
  "Sponsored by your dad's mom's dad's mom's dad's mom's dad!",
  "Sponsored by your mom's dad's mom's dad's mom's dad's mom's dad!",
  "Sponsored by your dad's mom's dad's mom's dad's mom's dad's mom!",
  "Sponsored by your mom's dad's mom's dad's mom's dad's mom's dad's mom!",
  "Sponsored by your dad's mom's dad's mom's dad's mom's dad's mom's dad!",
  "Sponsored by your mom's dad's mom's dad's mom's dad's mom's dad's mom's dad!",
  "Sponsored by your dad's mom's dad's mom's dad's mom's dad's mom's dad's mom!",
  "Sponsored by your mom's dad's mom's dad's mom's dad's mom's dad's mom's dad's mom!",
  "Sponsored by your dad's mom's dad's mom's dad's mom's dad's mom's dad's mom's dad!",
  "Sponsored by your dad's mom's dad's mom's dad's mom's dad's mom's dad's mom's dad's mom!",
  "Sponsored by your mom's dad's mom's dad's mom's dad's mom's dad's mom's dad's mom's dad!",
  "Sponsored by your dad's mom's dad's mom's dad's mom's dad's mom's dad's mom's dad's mom's dad!",
  "Sponsored by your mom's dad's mom's dad's mom's dad's mom's dad's mom's dad's mom's dad's mom!",
  "Sponsored by your dad's mom's dad's mom's dad's mom's dad's mom's dad's mom's dad's mom's dad's mom!",
  "Sponsored by your mom's dad's mom's dad's mom's dad's mom's dad's mom's dad's mom's dad's mom's dad!",
  "Sponsored by your dad's mom's dad's mom's dad's mom's dad's mom's dad's mom's dad's mom's dad's mom's dad!",
  "Sponsored by your mom's dad's mom's dad's mom's dad's mom's dad's mom's dad's mom's dad's mom's dad's mom!",
  "Piplup is cute",
  "3kh0 is a bozo",
  "Nothing has been said yet!",
  "I'm not a bird!",
  "I'm not a fish!",
  "I'm not a cat!",
  "I'm not a dog!",
  "I'm not a horse!",
  "I'm not a cow!",
  "I'm not a sheep!",
  "I'm not a goat!",
  "I'm not a chicken!",
  "I'm not a pig!",
  "I'm not a Piplup!",
  "I'm not a 3kh0!",
  "Powered by 128 Gigs of RAM!",
  "Powered by 1 Gig of RAM!",
  "I want to bite you!",
  "I want to eat you!",
  "I want to drink you!",
  "I want to devour you!",
  "I'm Slim Shady, yes, I'm the real Shady!",
  "I'm not a real Shady!",
  "I'll wear your granddad's clothes",
  "gooooooooooodbye",
  "You're a real jerk!",
  "w h a t",
  "what the dog doin?",
  "what are you doing?",
  "Math is kinda boring",
  "XD",
  "I'm gonna pop some tags",
  "Ka-ching!",
  "Kablam!",
  "Shoutout to 4chan!",
  "Shoutout to 4chan's mods! Wait, there are not any!",
  "thx stackoverflow!",
  "are you a gaemer?",
  "mom get out of my room i am playing minecraft!",
  "This is a test message!",
  "It is time to get funky!",
  "people like to barn fish?",
  "Why is the sky blue?",
  "Can you please burp?",
  "Some things are better left unspoken.",
  "What is your favorite color?",
  "What is your favorite animal?",
  "What is your favorite food?",
  "What is your favorite drink?",
  "What is your favorite band?",
  "What is your favorite song?",
  "What is your favorite movie?",
  "What is your favorite book?",
  "What is your favorite sport?",
  "What is your favorite game?",
  "What is your favorite TV show?",
  "What is your favorite TV character?",
  "SOMEONE PLEASE HELP ME!",
  "I'm a little teapot.",
  "I'm a little teapot, short and stout.",
  "We didn't start the fire! It was always burning, since the world's been turning!",
  "Don't worry, I'm not a firetruck.",
  "Don't ask questions if you can't handle the answers!",
  "I'm not a firetruck, I'm a firetruck.",
  "If you're not careful, you'll burn your house down.",
  "If you are using a computer, you are a computer.",
  "If you are using Microsoft Edge, you need some help.",
  "Living in space is like living in a hotel.",
  "Living in Spain without the S",
  "Living in Spain without the S is a bad idea.",
  "Shoutout to Piplup!",
  "Shoutout to 3kh0!",
  "Woo! /g/",
  "youtube.com/watch?v=dQw4w9WgXcQ",
  "youtube.com/c/shadrYT",
  '"Pretend inferiority and encourage his arrogance." －Sun Tzu',
  "Help im locked in a data center!",
  "5261796D6F6E6420486F6C74",
  "gif bezos",
  "God i just hate reality",
  "Please stop posting furry images.",
  "i wanted free vbucks :(",
  "i want to be a cat",
  "i want to be a dog",
  "i want to be a horse",
  "i want to be a cow",
  "i want to be a sheep",
  "i want to be a goat",
  "i want to be a chicken",
  "i want to be a pig",
  "i want to be a piplup",
  "i want to be a 3kh0",
  "i want to be a bozo",
  "i want to be a gaemer",
  "Is this the United Airlines costumer service center?",
  "we will steal your china and sell it to ip",
  "Never half-ass two things. Whole-ass one thing.",
  "bottem text",
  "top text",
  "Why do they call it oven if you oven the cold food of out hot eat the food",
  "furryegirl",
  "No fun allowed",
  "Your toes will be pulled tonight",
  "Someone was too lazy to give it a title",
  "i do love buying birth certificates from the black market! - Piplup",
  "'If you are trash go cry to Fortnite you loser' - Sun Tzu, Art of war",
  "undefined",
  "i wanted free vbucks :(",
  "Avocados \ud83e\udd51 from Mexico \ud83c\uddf2\ud83c\uddfd",
  "i realised i haven't blinked in like half an hour and now blinking feels uncomfortable",
  "reload for another message",
  "Boost the discord server for a very cool role!",
  "Why does the discord server exist",
  "I purchased a baby clown from the Russian terrorist black market.",
  "He stomped on his fruit loops and thus became a cereal killer.",
  "Technoblade never dies!",
  "And just to think I knew him before he was famous!",
  "Trust me, I did not copy Minecraft with this!",
  "It is everyday bro!",
  "That proves you are unusual",
  "What's my age again?",
  "If you think you are dumb, it is true",
  "This is the 5th time this week, and it's only Monday!",
  "You bum",
  "Roblox? Cringe!",
  "Toss the Turtle is pretty fun",
  "Mission failed, we will get them next time!",
  "NUKE INCOMING!",
  "I spent too much time making these",
  "Too cool for school!",
  "Pringles",
  "Oh heck nah!",
  "Hoo hoo hoo!",
  "Light mode eww!",
  "pretzels",
  "Please game responsibly",
  "burbur",
  "Apple bottom jeans!",
  "We out here!",
  "what a gaemer",
  "Please enjoy responsibly",
  "Can you really buy land on the moon?",
  "Breaking news! Your computer will blow up in 3...",
  "Gaming since 2020!",
  "Hacker man!",
  "Your fortune is...",
  "Let's just hope you dont get caught doing this...",
  "Site shutting down in  days...jk",
  "This is not the first time you did this...",
  "baba booey",
  "Can't stop me now!",
  "beans",
  "OwO",
  "UwU",
  "._.",
  "null",
  "It's over 100!",
  "Get to work!",
  "Cats or Dogs?",
  "[error] var braincells is to low",
  "DM Echo if you want to see your name here!",
  "shadrYT on top!",
  "Sub to shadrYT!",
  "Free robux! Wait who even plays that game eww",
  "Did you know that there are other JAWS movies, yeah they are bad!",
  "This is the 300th splash text!",
  "Extra credit be like",
  "Blue's Potatos are superior",
  "Have you ever had a dream that you, um, you had, your, you- you could, youll do, you- you wants, you, you could do so, you- youll do, you could- you, you want, you want them to do you so much you could do anything?",
  "[object Object]",
  "Error 404, Games not found",
  "To the person who invented zero, thanks for nothing",
  "Piplup gets no b*****s haha (-piplup's sister)",
  "mogus",
  "Toto, I've a feeling we're not in Kansas anymore",
  "You keep using that word. I do not think it means what you think it means.",
  "c h a o s",
  "a- amogu- *gets shot with laser*",
  "potato",
  "Ping: 87654ms",
  "Ping: 1ms",
  "69 x 21 + 420 + 911 - 760 = 2020",
  "Aspaceman is n o i c e",
  "With great power comes great need to take a nap. Wake me up later.",
  "I’m going to defeat you with the power of friendship! ... And this knife I found.",
  "If you can’t beat them, dress better than them",
  "Died and came back as a cowboy, I call that reintarnation.",
  "So what’s for dinner?",
  "#VoteForJude",
  "0.0",
  "Searching for nearby sushi restaraunts...",
  "The square root of 27 is 5.196152423.",
  "TikTok was just removed from existance!",
  "Ordered 420 pizzas from Pizza Hut!",
  "Did you know, not breathing means that you are not breathing!",
  "Sorry, I do not know what you are trying to do!",
  "Launching intercontinental ballistic missile. Target: Northwest Syria",
  "You can buy a flying bicycle, would you like to do so?",
  "You do want to invade Poland?",
  "If you microwave your phone it will become faster!",
  "There was a Roomba once that followed me around everwhere.",
  "For this emotion, I prescribe will chocolate.",
  "Did you know, you have over 50 assignments due by tomorrow that you have not started on.",
  "The meaning of life is in fact, chocolate.",
  "Ford F150. Holden Ute. GMC Sierra 3500. Lorry.",
  "Buying $GME Stock...",
  "Preordering tickets to Disney's 2021 Cruella",
  "Search results show you may have the black plague.",
  "amogus",
  "Funyuns are the greatest",
  "What the burger!",
  "1 in 4 Big Macs are lonely, you can fix this by downloading tinder",
  "Dominos > Pizza hut",
  "RagerYT",
  "Shad, Parrot will never notice you.",
  "HEEEEEEEEEEY",
  "HOOOOOOOOOOO",
  "ඞ",
  "real?",
  "ඞ amongus",
  "Now with over 200 games!",
  "Hello mario",
  "furryeboy",
  "Pin this if you love your fans",
  "use abnumality.github.io",
  "Graphic design is my passion.",
  "YOU'RE CRINGE!",
  "Spongebob, Spongebob, Patrick, Patrick, Squidward, Squidward, Sandy, Sandy",
  "Come join us, we murder and kidnapp people",
  "Save 50% off pizza when ordering online at dominos!!!",
  "There is no one in the basement!",
  "3kh0... 3kh0...   3kh0...   I think there's an echo in here",
  "No Introduction Needed",
  "I pledge allegiance, to the logo of the server of the communist states of 3kh0, into the communism, for which it stands, one nation, under 3kh0, indivisible, with communism and justice for some",
  "What's this do?",
  "E",
  "3kh0.github.io:  The best place for illegal activities",
  "Your voice sounds good when your not talking",
  "peanut",
  "Think fast chuckle nuts!",
  "its too late",
  "IIIII got the feeling in my bones",
  "Yugi: I destroy the moon",
  "Splash texts brought to you by the EchoDev Discord!",
  "Flippy flop flips go flip flop, floppy flip flops go flop flip",
  "Josh is the bean man",
  "Internet enabled!",
  "90% bug free!",
  "Technically good!",
  "5x more bugs!",
  "James, you are not the real echo",
  "Mike is murderous",
  "we will rule the world!",
  "your local gamestop",
  "bruh moment",
  "can you help me find my son?",
  "why.. just why?",
  "The Duolingo Owl is coming for you!",
  "I like your outfit",
  "Baby Shark doo doo doo",
  "YEAHHHHHHHHHHH!!!",
  "Why was the math book sad? Because it had too many problems.",
  "Why couldn't the bicycle stand up by itself? Because it was two-tired.",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "Why was the computer cold? Because it left its Windows open.",
  "Why did the cookie go to the doctor? Because it was feeling crumbly.",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "Why did the bee get in trouble at school? Because it had a buzzer on its test.",
  "Why couldn't the leopard play hide and seek? Because he was always spotted.",
  "Why was the math book sad? Because it had too many problems.",
  "Why did the banana go to the doctor? Because it wasn't peeling well.",
  "Written by ChatGPT!",
  "Welcome to our website! We hope you have a splashtastic time here.",
  "Get ready for an exciting adventure on our website. Buckle up and let's go!",
  "Thanks for stopping by! Our website is full of fun and interesting content just for you.",
  "We're glad you're here! Take a look around and discover all that our website has to offer.",
  "Come on in and make yourself at home! We have everything you need for a great online experience.",
  "We've been waiting for you! Take a look around and see what our website has in store for you.",
  "It's time to have some fun! Our website is full of exciting games.",
  "Welcome to the party! Our website is the place to be for all kinds of entertainment and information.",
  "Get ready for an unforgettable experience on our website. It's going to be a blast!",
  "Thanks for visiting! We have all sorts of goodies waiting for you on our website. Enjoy!",
  "That's it! I am taking your neck!",
  "ChatGPT knows...",
  "discord.gg/3kh0",
  "3kh0 on top!",
  "Wenomechainsama",
  "Tumajarbisaun",
  "Wifenlooof",
  "Eselifterbraun",
  "Zǎoshang hǎo zhōngguó",
  "Zǎoshang hǎo zhōngguó xiànzài wǒ yǒu BING CHILLING 🥶🍦",
  "What's up guys! It's Quandale Dingle here!",
  "RUUEHEHEHEHEHEEHE",
  "My name is Walter Hartwell White. I live at 308 Negra Aroya Lane, Albuquerque, New Mexico, 87104.",
  "I’m doing my first Official Donald J. Trump NFT collection right here and right now.",
  "Can you believe it guys? Christmas, just a week away. Christmas is in a week! Woohoo! I am so happy about this information. Christmas! Just a week away, oh wow. Can you believe it? Christmas! Just in a week! It got here so fast!",
  "I would like to nominate this award to my reformed orthodox rabbi, Bill Clinton.",
  "I am living in your walls.",
];
// pick a random greeting
var howmany = say.length;
var bRand = 0;
bRand = Math.random();
bRand = Math.floor(bRand * howmany);
sayWhat = say[bRand];
document.getElementById("subtitle").innerText = sayWhat;

function changeSplash(num) {
  document.getElementById("subtitle").innerText = say[num];
  var ret = "Set current splash to splash " + num + ", " + say[num];
  return ret;
}