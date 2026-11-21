// let age = 20 ;


// console.log(age);

// // const isim = "Ahmet";
// // console.log(isim);

// // const pi =3.14 ;
// // console.log(pi);

// // console.log(typeof(age));
// // console.log(typeof(isim));
// // console.log(5 == "5");
// // console.log(5 ==="5");



// // if (age >= 21) {
// //     console.log("Yaşınız yeteri kadar büyük");
// // }else {
// //     console.log("Yaşınız yeteri kadar büyük");
// // }


// // gün = 7

// // switch(gün) {
// //     case 1 :
// //         console.log("Pazartesi");
// //         break;
// //     case 2 :
// //         console.log("Salı");
// //         break ;
// //     case 3 :
// //         console.log("Çarşampa");
// //         break ;
// //     case 4 :
// //         console.log("Perşembe");
// //         break ;
// //     case 5 :
// //         console.log("Cuma");
// //         break ;
// //     default :
// //         console.log("Haftasonu");
// // }



// // for (let i = 1 ; i < 6 ; i++) {
// //     if (i == 1 ){
// //         console.log(i);
// //         console.log("i if de kullanıldı !!");
// //         continue
// //     }
// //     console.log(i);
// // }



// // function selamVerme(ad = "Fatih") {
// //     console.log("Hello " + ad);
// // }
// // selamVerme()
// // selamVerme("Ali")


// // function toplama(a,b){
// //     return a + b ;
// // }

// // let toplamaSonuc = toplama(16,9)

// // if (toplamaSonuc == 24){
// //     console.log(toplamaSonuc);
// // }else{
// //     console.log("İstenilen Sayı ->" + toplamaSonuc);
// // }

// // function toplama2(...sayılar) {
// //     console.log(sayılar);
// // }



// // const kullanıcı = {
// //     ad : "Mustafa Fatih" ,
// //     soyad : "Çolakel",
// //     şehir : "Ankara",
// //     yaş : 18
// // };

// // console.log(kullanıcı.ad);
// // console.log(kullanıcı.şehir);
// // console.log(kullanıcı.yaş);

// // kullanıcı.iş = "Öğrenci";
// // console.log(kullanıcı.iş);

// // delete kullanıcı.şehir ;
// // console.log(kullanıcı.şehir);

// // const yazı = document.getElementById("yazı")



// // const div = document.createElement("div");
// // div.textContent="Hello World" ;
// // document.body.appendChild(div) ;

// window.addEventListener('load', (loadEvent) => {
//     console.log({ loadEvent });
//     const button = document.querySelector('button')
//     console.log(button);
//     if (button) {
//         button.addEventListener("click", (event) => {
//             console.log({ event });
//             alert("Clicked !!!");
//         });
//     }
// });

// let kullanıcıAdı;


// while (true) {
//     kullanıcıAdı = window.prompt("Kullanıcı adınızı nedir ?");
//     if (kullanıcıAdı == "Darktle") {
//         alert("Bodongodonk!!!");
//         console.log(kullanıcıAdı);
//         break;
//     } else {
//         alert("Bummm!!!")
//     }
//     console.log(kullanıcıAdı);
// }

// let username;

// document.getElementById("mySubmit").onclick = function () {
//     username = document.getElementById("myText").value;
//     console.log(username);
// }


// let kullanıcıAdı;

// document.getElementById("doğrulama").onclick = function () {
//     kullanıcıAdı = document.getElementById("benimGirdim").value;
//     console.log("Kullanıcı Adınız ->", kullanıcıAdı);
// }

// const title = document.querySelector("#mytitle");

// console.log(title.textContent);

// title.textContent = "Yine okuma Ali!!!"

// console.log(title.textContent);


// const p = document.createElement("averaj");
// p.textContent = "Averaj!!!"
// console.log(p.textContent);

// document.body.appendChild(p);

// const getSubmit = document.querySelector("#getSubmit");
// getSubmit.addEventListener("click", () => {
//     console.log("Submit edildi");
// })

// const myPassword = document.querySelector("#myPassword");

// myPassword.addEventListener("focus", () => {
//     console.log("Şifrenizi giriniz!");
// })


// const ticker1 = document.querySelector("#kontKutusu1");

// ticker1.addEventListener("change", () => {
//     console.log("Tiklendi");
// })

// const ticker2 = document.querySelector("#kontKutusu2");

// ticker2.addEventListener("change", () => {
//     console.log("Tiklendi");
// })

// const ticker3 = document.querySelector("#kontKutusu3");

// ticker3.addEventListener("change", () => {
//     console.log("Tiklendi");
// })

// const ticker4 = document.querySelector("#kontKutusu4");

// ticker4.addEventListener("change", () => {
//     console.log("Tiklendi");
// })


// const check = document.querySelector("#name");

// check.addEventListener("change", () => {
//     console.log("Tiklendi");
// })


// const mybutton = document.querySelector("#SubmitOfMine");

// mybutton.addEventListener("click", (event) => {
//     console.log(event.target);
// });


// const email = document.querySelector("#myEmail");

// email.addEventListener("click", (event) => {
//     console.log(event.target);
// });



// const form = document.querySelector("#form");
// const passWord = document.querySelector("#passWord");

// form.addEventListener("submit", (event) => {
//     console.log("Girilen Şifre ->", passWord.value);
//     event.preventDefault();

//     if (passWord.value === "") {
//         console.log("Şifre Boş Olamaz !");
//     }

//     if (9 > passWord.value > 3) {
//         console.log("Teşekkürler !!!");
//     } else {
//         console.log("istenilen uzunlukta değil");
//     }
// });


