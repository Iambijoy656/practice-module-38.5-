// ১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে

// console.log("This is my first 1 message");
// console.log("This is my second 2 message");
// console.log("This is my third 3 message");
// setTimeout(doSomething, 3000);
// console.log("This is my fifth 5 message");

// function doSomething() {
//     console.log("This is my forth 4 message")
// }



// console.log("This is my first 1 message");
// console.log("This is my second 2 message");
// console.log("This is my third 3 message");
// setTimeout(() => console.log("This is my forth 4 message"), 3000);
// console.log("This is my fifth 5 message");


// ২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও

// const showPrompt = () => {
//     const stringNumber = prompt('Give me a Number');
//     const convertInt = parseFloat(stringNumber);
//     const total = convertInt + 200;
//     console.log(total);
//     alert(`Total number is : ${total}`);


// }

// ৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও 


const askQuestion = () => {
    const decision = confirm('are you see your website location?');

    if (decision === true) {
        console.log(location.href);
    } else {
        console.log('Ok bye')
    }

}