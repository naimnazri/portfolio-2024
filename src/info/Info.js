//import self from "../img/self.png"
import naim from "../img/naim.png";
import digitalcard from "../img/digitalbusinesscard.png";
//import mock2 from "../img/mock2.png"
//import mock3 from "../img/mock3.png"
//import mock4 from "../img/mock4.png"
//import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

//export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
//export let colors = ["rgb(0,0,0)", "rgb(255,255,255)"];
//export let colors = ["rgb(16,24,32)", "rgb(242,170,76)"];
//export let colors = ["rgb(16,24,32)", "rgb(255,255,255)"];
export let colors = ["rgb(148,179,207)", "rgb(45,41,38)"];

/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Naim",
  lastName: "Nazri",
  initials: "nn", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Frontend Developer",
  selfPortrait: naim, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🌎",
      text: "based in Malaysia",
    },
    {
      emoji: "💼",
      text: "Frontend Developer at Deloitte",
    },
    {
      emoji: "📧",
      text: "nazrinaim@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://www.facebook.com/naimnazri97",
      icon: "fa fa-facebook",
      label: "facebook",
    },
    {
      link: "https://www.instagram.com/naimnazri/",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/naimnazri",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/naim-nazri-ba30a5174/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://x.com/nazrinaim79",
      icon: "fa fa-twitter",
      label: "twitter",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Naim. I'm a frontend developer at Deloitte. I studied Software Engineering at UPSI, I enjoy long walks at the park, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
  skills: {
    proficientWith: [
      "javascript",
      "wordpress",
      "laravel",
      "react",
      "git",
      "github",
      "bootstrap",
      "html5",
      "css3",
      "php",
    ],
    exposedTo: ["nodejs"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "gaming",
      emoji: "🎮",
    },
    {
      label: "jogging",
      emoji: "🏃",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Digital Business Card",
      live: "https://digital-business-card.namix.space", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/naimnazri/digital_business_card.git", // this should be a link to the **repository** of the project, where the code is hosted.
      image: digitalcard,
    },
  ],
};
