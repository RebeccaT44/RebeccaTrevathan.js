// Rebecca Trevathan
const Info = "My name is";
var Name ="Rebecca";

Name = "Beck"
console.log(Info, Name)


const firstName = "Rebecca"
const lastName = "Trevathan"
const fullName = "Rebecca Trevathan"
console.log(`My first name is ${firstName} and my last name is ${lastName}, so my full name is ${fullName}`)

var x = 329500000;
var y = 20940000000000;
var z = y / x;
console.log(z);
// Population: https://www.google.com/search?q=us+population+2020&rlz=1C1CHBF_enUS813US813&oq=us&aqs=chrome.1.69i59l2j69i57j69i60j69i65l2j69i60j69i65.2132j0j7&sourceid=chrome&ie=UTF-8
//GDP: https://www.google.com/search?q=us+gross+domestic+product+2020&rlz=1C1CHBF_enUS813US813&sxsrf=AOaemvKIPgueQpouEtCXQQCYCo6A6a01Dw%3A1635814436504&ei=JIyAYd_mHeW5qtsP8_y4yAI&oq=us+&gs_lcp=Cgdnd3Mtd2l6EAEYATIECCMQJzIECCMQJzIECAAQQzIKCAAQgAQQhwIQFDIECAAQQzIECAAQQzIICAAQgAQQsQMyBAgAEEMyCwguEIAEEMcBENEDMggIABCABBCxAzoHCCMQsAMQJzoHCAAQRxCwAzoHCAAQsAMQQ0oECEEYAFDh_QFY4f0BYO2LAmgCcAJ4AIABZ4gBZ5IBAzAuMZgBAKABAcgBCsABAQ&sclient=gws-wiz

let str = "My dog is great"
if (str.length >= 10) {
  console.log("long");
} else {
  console.log("short");
}

let str = "Be quiet"
if (str.length <= 10) {
  console.log("short");
} else {
  console.log("long");
}

//I tried my best with this part but no matter what I tried, I couldn't get it to come up. I even went back over the lectures and all the codecademy and FreeCodeCamp activities.

//A javascript object is a form of variable that can contain multiple values.
const book = {type:"paperback", pages: "500", genre: "fantasy"}
//A javascript array a listing of multiple items that can be looped through.
const books = ["Lord of the Flies", "The Book Thief", "Rebecca of Sunnybrook Farm"]