//! if    → şart doğruysa çalışır
//! else  → şart yanlışsa çalışır

//! if (şart) {
// *    // doğruysa
//* }
// !else {
//  *   // yanlışsa
// *}

// let number = Number(prompt("Bir sayı giriniz ->"));

// if (number > 0) {
//     console.log("pozitif");
// }
// else if (number == 0) {
//     console.log("Sıfır");
// }
// else {
//     console.log("Negatif");
// }


//! .length          → uzunluk
//! .toUpperCase()   → büyük harf
//! .toLowerCase()   → küçük harf
//! [x]              → karaktere erişme
//! .includes()      → içeriyor mu?
//! .trim()          → baş/son boşlukları temizler


// let name = "     mustafa    ";
// console.log(name.trim());
// console.log(name);





//* && → VE → ikisi de doğru olmalı
//* || → VEYA → biri doğru olsa yeter
//* !  → DEĞİL → tersini alır



//! switch → belirli değerleri kontrol eder
//! case   → olası değer
//! break  → switch'i durdurur
//! default → hiçbir case eşleşmezse


//! while → şart doğru olduğu sürece çalışır

//! while (şart) {
//!      tekrar eden kod
//! }


// let number = Number(prompt("Please enter a number betwen 1-9"));
// let toplam = 0;
// console.log(number);
// while (number <= 10) {
//     toplam += number;
//     number++;
// }

// console.log(toplam);



//!for → belirli sayıda tekrar yapmak için kullanılır.

//! for (başlangıç; şart; değişim) {
//!     // tekrar eden kod
//! }


// let number = Number(prompt("Please enter a number ->"));
// let toplam = 0;
// let sayılar = "";

// for (let i = 1; i <= number; i++) {
//     toplam += i;
//     sayılar += i + " ";
// }


// let ciftSayılar = "";
// console.log("Çift sayılar ;");
// for (let i = 1; i <= number; i++) {
//     if (i % 2 === 0) {
//         ciftSayılar += i + " ";
//     }
// }
// console.log("Sayılar-> " + sayılar);

// console.log("Çift sayılar-> " + ciftSayılar);

// console.log("Toplam->" + toplam);






//! break
//* ↓
//* Döngüyü tamamen bitirir.

//! continue
//* ↓
//* Sadece mevcut turu atlar.
//* Döngü devam eder.



// let number = Number(prompt("Please enter a number -> "));
// let breakerNumber = Number(prompt("Please enter a number for finish -> "));
// let besMulti = "";
// let numbers = "";
// for (let i = 1; i <= number; i++) {
//     if (i == breakerNumber) {
//         break;
//     }
//     if (i % 5 === 0) {
//         besMulti += i + " ";
//         continue;
//     }

//     numbers += i + " ";

// }

// console.log(besMulti);
// console.log("Sayılar-> " + numbers);






//! []             → Array oluşturur

//* array[0]       → ilk eleman
//* array[1]       → ikinci eleman

//? .length        → eleman sayısı

//? .push(x)       → sona eleman ekler
//? .pop()         → sondaki elemanı siler

//! for            → index ile dolaşabiliriz

//! for...of       → elemanları doğrudan dolaşır




// let numbers = [12, 7, 25, 4, 18, 31, 10, 6];
// let toplam = 0;
// let Ciftsayılar = "";
// let max = numbers[0];
// let sayılar = "";
// for (number of numbers) {
//     sayılar += number + " ";
// }
// for (let i of numbers) {
//     if (i % 2 === 0) {
//         Ciftsayılar += i + " ";
//     }
//     toplam += i
// }


// for (let number of numbers) {
//     if (number > max) {
//         max = number;
//     }
// }
// console.log("Numbers ->", sayılar);
// console.log("Toplam ->" + toplam);
// console.log("Max ->" + max);




//! push(x)       → sona ekler
//! pop()         → sondan siler

//! unshift(x)    → başa ekler
//! shift()       → baştan siler

//! includes(x)   → var mı? → true / false

//! indexOf(x)    → indexini bulur
//*                 yoksa -1


// let toplam = 0;
// let girdi = Number(prompt("Please enter a number ->"))


// for (let i = 1; i <= girdi; i++) {
//     toplam += i;
// }

// console.log(toplam);



//! while (true)
//! → sonsuz döngü oluşturur.

//! break
//! → döngüyü tamamen durdurur.

//! if / else
//! → koşula göre farklı kod çalıştırır.

//! while + break
//! → bir koşul gerçekleşene kadar işlemi sürdürebilmek için kullanılabilir.




// let age = Number(prompt("Please enter your age ->"));

// while (true) {
//     if (age < 18) {
//         console.log("Your age was ", age);
//         console.log("One year has passed !");
//         age++;
//         console.log("Now your age is", age);

//         console.log("---------------------");
//     }
//     else {
//         console.log("Your age is older than 18 you can pass ! ");
//         break;
//     }
// }






// let dogruSifre = 1234;



// while (true) {
//     let Sifre = Number(prompt("Please enter your pasword"));
//     if (Sifre == dogruSifre) {
//         console.log("Giriş başarılı!");
//         break;
//     }
//     else {
//         console.log("Şifre yanlış!");
//     }
// }






//! do...while
//! → kodu önce çalıştırır, sonra koşulu kontrol eder.

//* do {
//*     // kod
//* } while (koşul);

//? while
//? → önce koşulu kontrol eder.

//! do...while
//! → en az 1 kez çalışır.



// let sayı;

// do {
//     sayı = Number(prompt("Please enter a number ->"));

//     if (sayı <= 0) {
//         console.log("Lütfen pozitif bir sayı giriniz!");
//     }

// } while (sayı <= 0);

// console.log("Pozitif bir sayı girdiniz!");




// let numbers = [1, 2, 3, 4, 5, 6];

// for (let number of numbers) {
//     console.log(number);
// }


// let isim = "Fatih";
// for (let harf of isim) {
//     if (harf == "a") {
//         continue;
//     }

//     console.log(harf);
// }




// let numbers = [1, 2, 3, 4, 5, 6, 13, 12];


// for (let number of numbers) {
//     if (number % 2 == 0) {
//         console.log(number);
//     }

// }



// let sayilar = [12, 5, 8, 20, 15, 7];
// let toplam = 0;


// for (let sayi of sayilar) {
//     toplam += sayi
// }

// console.log(toplam);



// let ogrenci = {
//     name: "Mustafa",
//     age: 18,
//     departmant: "Software engineer"
// };

// for (let key in ogrenci) {
//     console.log("Your key is ->", key, " /// And your property-> ", ogrenci[key]);

// }


//! for...of → ELEMANI verir
//! for...in → ANAHTARI / İNDEKSİ verir




// let ogrenci = {
//     isim: "Mustafa",
//     yas: 18,
//     bolum: "Yazılım Mühendisliği",
//     sinif: 1
// };



// for (let key in ogrenci) {
//     console.log(key, ": ", ogrenci[key]);
// }




// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         console.log(i, " x ", j, " = ", i * j);
//     }
// }





// let sayilar = [12, 45, 7, 89, 34, 21];
// let max = sayilar[0];
// for (let i = 0; i < sayilar.length; i++) {
//     if (max < sayilar[i]) {
//         max = sayilar[i];
//     }
// }
// console.log("Max ->", max);




// let sayilar = [15, 8, 23, 42, 6, 19];
// aranan = Number(prompt("Aradığınız sayıyı giriniz ->"));

// for (let i = 0; i < sayilar.length; i++) {
//     if (sayilar[i] === aranan) {
//         console.log("Aranan sayı bulundu !");
//         break;
//     }
//     else {
//         console.log("Aranan sayı bulunamadı !");

//     }
// }





// let ogrenciler = ["Ahmet", "Mehmet", "Mustafa", "Ali", "Hasan"];
// let aranan = prompt("Please enter word which one you searching ->");
// let sonuç = false;
// for (let ogrenci of ogrenciler) {
//     if (ogrenci === aranan) {
//         sonuç = true;
//         break;
//     }

// }

// if (sonuç == true) {
//     alert("Student was founded !");
//     console.log("Student was founded !");
// }
// else {
//     alert("Student wasn't founded !");
//     console.log("Student was founded !");
// }
// if (sonuç == false) {
//     alert("Student wasn't founded !")
// }







//! push()     → sona ekle
//! pop()      → sondan sil

//! unshift()  → başa ekle
//! shift()    → baştan sil


// let urunler = ["Ekmek", "Süt", "Yumurta"];

// urunler.push("Peynir");
// urunler.unshift("Çay");

// urunler.pop();
// urunler.shift();




// for (let urun of urunler) {
//     console.log(urun);
// }




//! includes() → var mı? true/false
//! indexOf()  → nerede? varsa index yoksa -1

// let meyveler = ["Elma", "Armut", "Muz"];

// for (let meyve of meyveler) {
//     console.log(meyve);
// }

// console.log(meyveler.includes("Elma"));
// console.log(meyveler.includes("Erik"));

// console.log(meyveler.indexOf("Armut"));
// console.log(meyveler.indexOf("Erik"));
// console.log(meyveler.indexOf("Ahmet"));







// let ogrenciler = ["Ahmet", "Mehmet", "Mustafa", "Ali", "Hasan"];
// let aranan = prompt("Aranan öğrenci ismi ->");
// let sonuc = false;
// let index = -1;
// for (let ogrenci of ogrenciler) {
//     if (ogrenciler.includes(aranan)) {
//         index = ogrenciler.indexOf(ogrenci);
//         sonuc = true;
//         break;
//     }


// }
// if (sonuc === false) {
//     console.log("Ögrenci doesn't founded!");
// }
// else {
//     console.log("Ögrenci does founded!");
//     console.log("index->", index);
// }





//! find()       → koşula uyan elemanı verir
//! findIndex()  → koşula uyan elemanın index'ini verir

// let numbers = [10, 20, 30, 40, 50, 60, 52, 53, 41];

// let result = numbers.find(function (number) {
//     return number > 20;
// })

// let result = numbers.find(number => number > 20);
// console.log(result);




// let sayilar = [12, 7, 25, 3, 42, 18];

// let result = sayilar.find(function (number) {
//     return number > 20;

// })
// let index = sayilar.findIndex(function (number) {
//     return number > 20;
// })

// console.log(result);
// console.log(index);





//! find()
//* → koşula uyan İLK elemanı getirir.

//! filter()
//* → koşula uyan TÜM elemanları getirir.




// let sayilar = [5, 10, 23, 34, 45, 65, 25];
// let sonuc = sayilar.filter(function (number) {
//     return number >= 30;
// })

// console.log(sonuc);



// let sayilar = [12, 5, 28, 7, 35, 14, 42, 3];

// let sonuc = sayilar.filter(function (number) {
//     return number > 20;
// })

// console.log(sonuc);
// console.log(sonuc.length);










//! map() ne yapar?

//* Bir dizinin her elemanı üzerinde işlem yapar ve işlemlerin sonucundan yeni bir dizi oluşturur.




// let sayılar = [1, 2, 3, 4, 5, 6];

// let newsayilar = sayılar.map(function (sayı) {
//     return sayı * 2;
// })
// let newsayilar = sayılar.map(number => number * 2); //? bu kullanım candır 

// console.log(sayılar);
// console.log(newsayilar);




// let sayilar = [5, 10, 15, 20, 25];

// let newkare = sayilar.map(number => number * number);

// console.log(newkare);




//! reduce() → genellikle tek bir sonuç oluşturur.



// let sayilar = [15, 8, 23, 12, 7];

// let toplam = sayilar.reduce(function (toplam, number) {
//     return toplam + number;
// }, 0);


// console.log(toplam);




//! sort() → Diziyi sıralar.

//! sort((a, b) => a - b)
//! → Küçükten büyüğe

//! sort((a, b) => b - a)
//! → Büyükten küçüğe

//! sort() sayılarda tek başına kullanılırsa
//! sayıları metin gibi sıralayabilir.

//! sort() → Orijinal diziyi değiştirir.




// let sayilar = [45, 12, 78, 3, 29, 56];
// let newsayilar = [...sayilar];
// let newsayi = sayilar.sort(function (a, b) {
//     return a - b;
// })

// let newsayi2 = newsayilar.sort(function (a, b) {
//     return b - a;
// })
// console.log(newsayi);
// console.log(newsayi2);




// ! reverse()
// * Dizinin elemanlarının sırasını tersine çevirir.

// ! [ ...dizi ]
// * Dizinin kopyasını oluşturur.

// ! sort((a, b) => a - b)
// * Sayıları küçükten büyüğe sıralar.



// let sayilar = [10, 25, 5, 40, 15];


// let newsayilar = sayilar.reverse()
// console.log("Sayilar->", sayilar);
// console.log("NewSayılar->", newsayilar);





// ! join()
// * Dizinin elemanlarını tek bir string haline getirir.

// ! join("ayraç")
// * Elemanların arasına belirtilen ayırıcıyı koyar.

// ! join()
// * Ayraç verilmezse varsayılan olarak "," kullanılır.

// ! join(" - ")
// * Elemanları " - " ile birbirinden ayırır.

// * join() orijinal diziyi değiştirmez.



// let dersler = ["Matematik", "Programlama", "Fizik", "İngilizce"];

// let clgdersler = dersler.join("|");
// console.log(dersler.join("-"));
// console.log(clgdersler);
// console.log(dersler);







// ! slice()
// * Dizinin belirli bir bölümünü alır.

// ! slice(başlangıç, bitiş)
// * Başlangıç index'i dahil edilir, bitiş index'i dahil edilmez.

// ! slice(başlangıç)
// * Başlangıç index'inden dizinin sonuna kadar alır.

// ! slice(-2)
// * Dizinin sondan 2 elemanını alır.

// * slice() orijinal diziyi değiştirmez.
// * Sonuç olarak yeni bir dizi döndürür.





// let sayilar = [10, 20, 30, 40, 50, 60, 70];

// let newsayilar = sayilar.slice(1, 4);
// let newsayilar2 = sayilar.slice(-2)

// console.log(sayilar);
// console.log(newsayilar);
// console.log(newsayilar2);




// ! splice(başlangıç, silinecekElemanSayısı)
// * Belirtilen index'ten başlayarak eleman siler.

// ! splice(başlangıç, 0, eleman)
// * Eleman silmeden belirtilen konuma eleman ekler.

// ! splice(başlangıç, 1, yeniEleman)
// * Bir elemanı silip yerine yeni eleman koyabilir.

// * splice() orijinal diziyi değiştirir.
// * slice() ise orijinal diziyi değiştirmez.





// let oyunlar = ["GTA", "Minecraft", "CS2", "FIFA", "RDR2"];



// oyunlar.splice(2, 1);
// oyunlar.splice(2, 1, "Valorant");
// oyunlar.splice(2, 0, "LoL");

// console.log(oyunlar);









// ! concat()
// * İki veya daha fazla diziyi birleştirir.

// ! dizi1.concat(dizi2)
// * dizi1 ve dizi2'yi birleştirip yeni bir dizi döndürür.

// ! dizi1.concat(dizi2, dizi3)
// * Birden fazla diziyi tek bir dizide birleştirir.

// * concat() orijinal dizileri değiştirmez.

//? ----------------

// ! concat()
// * İki veya daha fazla diziyi birleştirir.
// * Yeni bir dizi döndürür.
// * Orijinal dizileri değiştirmez.





// let frontend = ["HTML", "CSS", "JavaScript"];
// let backend = ["Node.js", "Express"];



// let tumTeknolojiler = frontend.concat(backend);

// console.log(frontend);
// console.log(backend);

// console.log(tumTeknolojiler);









// ! some()
// * Dizide en az bir elemanın koşulu sağlayıp sağlamadığını kontrol eder.
// * Sonuç olarak true veya false döndürür.

// ! some(function(eleman) { return koşul; })
// * Koşulu sağlayan en az bir eleman varsa true döner.
// * Hiçbir eleman koşulu sağlamıyorsa false döner.

// * some() koşul sağlandığında işlemi erken sonlandırabilir.
// * Orijinal diziyi değiştirmez.





// let notlar = [45, 62, 38, 75, 51];

// let result = notlar.some(function (number) {
//     return number > 50;
// })

// console.log(result);


// if (result === true) {
//     console.log("Var!");
// }
// else {
//     console.log("Yok!");
// }








// ! every()
// * Dizideki tüm elemanların koşulu sağlayıp sağlamadığını kontrol eder.
// * Sonuç true veya false döndürür.

// ! every(function(eleman) { return koşul; })
// * Tüm elemanlar koşulu sağlarsa true döner.
// * Bir tane bile koşulu sağlamazsa false döner.

// * some() → en az bir eleman
// * every() → tüm elemanlar

// * every() orijinal diziyi değiştirmez.





// let yaslar = [18, 21, 25, 30, 19];



// // let result = yaslar.every(function (yas) {
// //     return yas >= 18;

// // })
// let result = yaslar.every(yas => yas >= 18);

// if (result === true) {
//     console.log("Herkes 18 yaşından büyük veya eşit!");
// }
// else {
//     console.log("18 yaşından küçük en az  biri var!");
// }








// ! startsWith()
// * Bir string'in belirli bir ifadeyle başlayıp başlamadığını kontrol eder.
// * Sonuç true veya false olur.

// ! endsWith()
// * Bir string'in belirli bir ifadeyle bitip bitmediğini kontrol eder.
// * Sonuç true veya false olur.

// * Büyük/küçük harfe duyarlıdır.
// * Orijinal string'i değiştirmez.




// let email = "fatih@gmail.com";

// let isStart = email.startsWith("fatih");
// let isEnd = email.endsWith(".com");


// console.log(isStart);
// console.log(isEnd);






// ! trim()
// * String'in başındaki ve sonundaki boşlukları temizler.

// ! trimStart()
// * Sadece string'in başındaki boşlukları temizler.

// ! trimEnd()
// * Sadece string'in sonundaki boşlukları temizler.

// * String'in ortasındaki boşlukları silmez.
// * Orijinal string'i değiştirmez.





// let kullaniciAdi = prompt("please enter username -> ");
// console.log(kullaniciAdi);
// newkullaniciAdi = kullaniciAdi.trim();
// console.log(newkullaniciAdi);












// ! split()
// * Bir string'i belirlenen ayırıcıya göre parçalar ve diziye dönüştürür.

// ! split(" ")
// * String'i boşluklardan ayırır.

// ! split(",")
// * String'i virgüllerden ayırır.

// ! split("")
// * String'i karakterlerine ayırır.

// * split() yeni bir dizi oluşturur.
// * join() → Array'den String'e
// * split() → String'den Array'e




// let dersler = "Matematik,Programlama,Fizik,İngilizce";

// let diziDersler = dersler.split(",");

// console.log(diziDersler);

// let newDiziDersler = diziDersler.join(" - ");


// console.log(newDiziDersler);










// ! replace()
// * String içerisindeki eşleşen ilk ifadeyi değiştirir.

// ! replaceAll()
// * String içerisindeki eşleşen tüm ifadeleri değiştirir.

// ! replace("eski", "yeni")
// * "eski" ifadesini "yeni" ile değiştirir.

// * replace() ve replaceAll() orijinal string'i değiştirmez.
// * Büyük/küçük harfe duyarlıdır.



// let mesaj = "Merhaba Mustafa. Mustafa bugün JavaScript çalışıyor.";

// let oOmesaj = mesaj.replace("Mustafa", "Fatih");

// let allmesaj = mesaj.replaceAll("Mustafa", "Fatih");

// console.log(oOmesaj);
// console.log(allmesaj);









// ! charAt()
// * String'in belirtilen index'indeki karakteri döndürür.
// * Negatif index desteklemez.
// * Geçersiz index'te "" döndürür.

// ! at()
// * String'in belirtilen index'indeki karakteri döndürür.
// * Negatif index destekler.
// * -1 son karakteri, -2 sondan ikinci karakteri verir.
// * Geçersiz index'te undefined döndürür.

// * String indexleri 0'dan başlar.


// let isim = "Fatih";

// console.log(isim.charAt(0));
// console.log(isim.charAt(3));


// console.log(isim.at(0));




// let kelime = "JavaScript";

// console.log(kelime.charAt(0));
// console.log(kelime.charAt(4));
// console.log(kelime.at(-1));
// console.log(kelime.at(-3));











// ! substring()
// * String'in belirli bir bölümünü almak için kullanılır.
// * İlk parametre başlangıç index'idir.
// * İkinci parametre bitiş index'idir.
// * Bitiş index'i dahil edilmez.
// * İkinci parametre verilmezse sona kadar devam eder.
// * Orijinal string'i değiştirmez.









// ! indexOf()
// * String içinde aranan ilk eşleşmenin index'ini verir.
// * Bulamazsa -1 döndürür.

// ! lastIndexOf()
// * String içinde aranan son eşleşmenin index'ini verir.
// * Bulamazsa -1 döndürür.

// * String indexleri 0'dan başlar.
// * Büyük/küçük harfe duyarlıdır.



// let word = "Ahmaeta";

// console.log(word.indexOf("a"));
// console.log(word.indexOf("A"));

// console.log(word.lastIndexOf("a"));



// let mesaj = "JavaScript öğreniyorum ve JavaScript yazıyorum.";

// console.log(mesaj.indexOf("JavaScript"));
// console.log(mesaj.lastIndexOf("JavaScript"));

// console.log(mesaj.indexOf("öğreniyorum"));
// console.log(mesaj.indexOf("Pyhton"));











// ! includes()
// * String'in içinde belirli bir ifade olup olmadığını kontrol eder.
// * Varsa true, yoksa false döndürür.
// * Büyük/küçük harfe duyarlıdır.
// * String'i değiştirmez.




// let word = "JavaScript öğreniyorum ve web geliştirme yapıyorum.";

// let search = prompt("Please enter what you want to search -> ");


// if (word.includes(search)) {
//     console.log("Searching word is in the list !");
// }
// else {
//     console.log("Searching word isn't in the list !");
// }









// ! toUpperCase()
// * String'deki tüm harfleri büyük harfe dönüştürür.
// * Orijinal string'i değiştirmez.

// ! toLowerCase()
// * String'deki tüm harfleri küçük harfe dönüştürür.
// * Orijinal string'i değiştirmez.

// * Her iki method da yeni bir string döndürür.




// let userName = prompt("Please enter your userName -> ");

// console.log(userName.toUpperCase());
// console.log(userName);
// console.log(userName.toLowerCase());





// ! repeat()
// * String'i belirtilen sayı kadar tekrarlar.
// * Yeni bir string döndürür.
// * Orijinal string'i değiştirmez.
// * repeat(0) boş string ("") döndürür.
// * Tekrar sayısı negatif olamaz.





// let userName = prompt("Kullanıcı adınızı girin -> ");
// let tekrar = Number(prompt("Kaç kere gösterilsin -> "));

// let userName1 = userName.trim();
// let userName2 = userName1.toLowerCase();
// let userName3 = userName2.length;
// console.log(userName3);
// console.log(userName2);
// console.log("---------");
// console.log(userName2.repeat(tekrar));











// ! padStart()
// * String'in başına karakter ekleyerek belirlenen uzunluğa tamamlar.
// * İlk parametre hedef toplam uzunluktur.
// * İkinci parametre eklenecek karakterdir.

// ! padEnd()
// * String'in sonuna karakter ekleyerek belirlenen uzunluğa tamamlar.
// * İlk parametre hedef toplam uzunluktur.
// * İkinci parametre eklenecek karakterdir.

// * Orijinal string'i değiştirmez.





// let time = prompt("Time -> ");
// let min = prompt("Minute -> ");


// if (time.length <= 2) {
//     time = time.padStart(2, "0");
// }

// if (min.length <= 2) {
//     min = min.padStart(2, "0");
// }


// console.log(time, ":", min);







// let ad = prompt("İsim -> ");
// let city = prompt("Şehir -> ");
// ad = ad.trim();
// city = city.trim();
// if (ad.length < 10) {
//     ad = ad.padEnd(10, " ");
// }
// if (city.length < 15) {
//     city = city.padEnd(15, " ");
// }


// console.log(ad);
// console.log(ad.length);


// console.log(city);
// console.log(city.length);




// ! slice()
// * String'in belirli bir bölümünü alır.
// * İlk parametre başlangıç index'idir.
// * İkinci parametre bitiş index'idir.
// * Bitiş index'i dahil edilmez.
// * Negatif index kullanılabilir.
// * Orijinal string'i değiştirmez.




// let ad = prompt("Ad -> ");
// let soyad = prompt("Soyad -> ");


// ad = ad.trim();
// soyad = soyad.trim();

// ad = ad.toLowerCase();
// soyad = soyad.toLowerCase();

// let kullanıcıAdı = ad.slice(0, 3);
// let kullanıcıAdıSon = soyad.slice(-3);

// console.log(ad);
// console.log(soyad);

// let userName = kullanıcıAdı + kullanıcıAdıSon;

// console.log(userName);





// ! split()
// * String'i belirlenen ayırıcıya göre parçalayıp array'e dönüştürür.
// * Ayırıcı olarak boşluk, virgül, tire vb. kullanılabilir.
// * split("") kullanılırsa karakterlere ayrılır.
// * Orijinal string'i değiştirmez.




// let mesaj = prompt("Bir cümle girin -> ");


// let parcalıMesaj = mesaj.split(" ");

// console.log(parcalıMesaj[0]);
// console.log(parcalıMesaj.length);

// console.log(parcalıMesaj.join("-"));








// let mesaj = prompt("Mesajınızı girin -> ");

// console.log(mesaj);

// mesaj = mesaj.trim();
// mesaj = mesaj.replace("aptal", "***");
// mesaj = mesaj.replaceAll("salak", "***");

// console.log(mesaj);




// ! startsWith()
// * String'in belirli bir ifadeyle başlayıp başlamadığını kontrol eder.
// * Sonuç true veya false olur.
// * Büyük/küçük harfe duyarlıdır.

// ! endsWith()
// * String'in belirli bir ifadeyle bitip bitmediğini kontrol eder.
// * Sonuç true veya false olur.
// * Büyük/küçük harfe duyarlıdır.

// * Bu methodlar orijinal string'i değiştirmez.



// let url = prompt("URL -> ");

// url = url.trim();

// if (url.startsWith("https://") && url.endsWith(".com")) {
//     console.log("Geçerli URL!");
// }
// else {
//     console.log("Geçersiz URL!");
// }









// ! match()
// * String içerisinde belirli bir ifadeyi arar.
// * Eşleşme varsa eşleşen bilgiyi döndürür.
// * Eşleşme yoksa null döndürür.
// * Regex (RegExp) ile birlikte de kullanılabilir.

// ? Basit kullanım:
// ? let sonuc = metin.match("aranan");

// ? Regex kullanımı:
// ? let sonuc = metin.match(/aranan/);



// let mesaj = prompt("Mesaj -> ");
// let lowerMesaj = mesaj.toLowerCase();
// if (lowerMesaj.match("javascript")) {
//     alert("JavaScript bulundu !");
// }
// else {
//     alert("JavaScript bulunamadı!");
// }
// console.log(mesaj);







// ! search()
// * String içerisinde belirli bir ifadeyi arar.
// * Eşleşme varsa başlangıç index numarasını döndürür.
// * Eşleşme yoksa -1 döndürür.
// * Büyük/küçük harfe duyarlıdır.

// ? let sonuc = metin.search("aranan");

// ? let sonuc = metin.search(/aranan/);


















// ! function
// * Belirli bir işi yapan kod bloğudur.
// * Fonksiyon bir kere tanımlanır, istediğimiz kadar çağrılabilir.

// ! Fonksiyon tanımlama
//! function fonksiyonAdi() {

//*     // yapılacak işlemler

//* }

// ! Fonksiyon çağırma
// * Fonksiyonu çalıştırmak için parantezleriyle çağırırız.

// ? fonksiyonAdi();

// ! Fonksiyon birden fazla kez çağrılabilir.

// ? fonksiyonAdi();
// ? fonksiyonAdi();
// ? fonksiyonAdi();




// function selamla() {
//     console.log("Merhaba!");
// }

// selamla();


// function selamla() {
//     console.log("Merhaba Fatih !");
//     console.log("JavaScript öğrenmeye devam !");
// }

// selamla();
// selamla();
// selamla();


// ! Parameter
// * Fonksiyona dışarıdan bilgi gönderir.

// ! Kullanımı
// ? function selamla(isim) {
// ?     console.log(isim);
// ? }

// ! Argument
// * Fonksiyona gönderilen gerçek değerdir.

// ! Kullanımı
// ? selamla("Mustafa");

// function selamla(name) {
//     console.log("Merhaba " + name);
// }

// selamla("Ahmet");



// function add(sayi1, sayi2) {
//     console.log(sayi1 + sayi2);
// }

// add(5, 4);



// function studentİnformation(name, age, department) {
//     console.log("Name : " + name);
//     console.log("Age : " + age);
//     console.log("Department : " + department);
// }

// studentİnformation("Ahmet", 18, "Software Engineer");








// ! return
// * Fonksiyonun sonucunu dışarıya gönderir.
// * return sonrası fonksiyon durur.

// ! Kullanımı
// ? function topla(a, b) {
// ?     return a + b;
// ? }

// ? let sonuc = topla(5, 3);
// ? console.log(sonuc);



// function dikdortgenHacim(genislik, yükseklik, derinlik) {
//     return genislik * yükseklik * derinlik;
// }

// let result = dikdortgenHacim(4, 5, 6);
// console.log("Alan -> " + result);







// ! Default Parameter
// * Parametreye değer verilmezse kullanılacak varsayılan değerdir.

// ! Kullanımı
// ? function selamla(isim = "Misafir") {
// ?     console.log("Merhaba " + isim);
// ? }

// ? selamla("Mustafa");
// ? selamla();





// function selamla(isim = "Fatih") {
//     console.log("Merhaba " + isim);
// }

// selamla();
// selamla("Ahmet");



// let yarıçap = Number(prompt("Yarıçapı giriniz -> "));
// //* pi*r*r
// function daireAlan(yarıçap, pi = 3.14) {
//     return yarıçap * yarıçap * pi;

// }

// let result = daireAlan(yarıçap);
// console.log(result);








// ! Arrow Function
// * Fonksiyonları daha kısa yazma yöntemidir.

// ! Kullanımı
// ? const selamla = () => {
// ?     console.log("Merhaba");
// ? };

// ? selamla();


// let r = Number(prompt("r yi gir -> "));
// const topla = (r, pi = 3.14) => {
//     return r * r * pi;
// }
// console.log(topla(r));




// ! Kısa return
// * Tek satırlık arrow function'da {} ve return yazmadan sonuç döndürülür.

// ! Kullanımı
// ? const topla = (a, b) => a + b;

// ? console.log(topla(5, 3));


// let a = Number(prompt("Sayı giriniz -> "));

// const kareAl = (a) => a * a;

// console.log(kareAl(a));








// ! Callback
// * Bir fonksiyonu başka bir fonksiyona parametre olarak vermektir.

// ! Kullanımı
// ? function calistir(fonksiyon) {
// ?     fonksiyon();
// ? }

// ? function selamla() {
// ?     console.log("Merhaba");
// ? }

// ? calistir(selamla);


// let sayi = Number(prompt("Sayı -> "));

// function kareAl(sayi) {
//     return sayi * sayi;
// }
// function islmeYap(sayi, fonksiyon) {
//     return fonksiyon(sayi);
// }

// let result = islmeYap(sayi, kareAl);
// console.log(result);







// ! Callback
// * Bir fonksiyonu başka bir fonksiyona parametre olarak göndeririz.

// ? function islemYap(sayi, fonksiyon) {
// ?     return fonksiyon(sayi);
// ? }

// ? const kareAl = (sayi) => sayi * sayi;

// ? console.log(islemYap(5, kareAl));


// let sayi = Number(prompt("Please enter a number -> "));

// const multipliesByTwo = (a) => a * 2;

// function islmeYap(sayi, fonksiyon) {
//     return fonksiyon(sayi);
// }
// console.log(islmeYap(sayi, multipliesByTwo));








// ! Object
// * Key-value şeklinde veri tutar.

// ! Kullanımı
// ? const ogrenci = {
// ?     name: "Mustafa",
// ?     age: 18,
// ?     department: "Software Engineering"
// ? };

// ! Property'e erişim
// ? console.log(ogrenci.name);
// ? console.log(ogrenci.age);



// const student = {
//     name: "Ahmet",
//     age: 18,
//     department: "Software Engineering"
// };

// console.log(student.age);
// console.log(student.name);
// console.log(student.department);




// const car = {
//     marka: "Ford",
//     model: "Sakso",
//     yil: 2009,
//     fiyat: 350000
// };

// console.log(car.marka);
// console.log(car.model);
// console.log(car.yil);
// console.log(car.fiyat);









// ! Property değiştirme
// * Mevcut property'nin değerini değiştirir.

// ? car.fiyat = 400000;

// ! Property ekleme
// * Object'e yeni bir property ekler.

// ? car.renk = "Siyah";





// const car = {
//     marka: "Ford",
//     model: "Sakso",
//     yil: 2009,
//     fiyat: 350000
// };


// car.renk = "Silver";
// car.fiyat = 360000;
// console.log(car.renk);
// console.log(car.fiyat);




// ! Object Method
// * Object'in içinde bulunan fonksiyondur.

// ! Kullanımı
// ? const car = {
// ?     marka: "Ford",
// ?     bilgi() {
// ?         console.log("Bu bir araba.");
// ?     }
// ? };

// ? car.bilgi();




// const student = {
//     name: "Ahmet",
//     department: "Software Engineering",
//     bilgi() {
//         console.log("Name :" + student.name + "\nDepartment : ", student.department);
//     }
// };

// student.bilgi();







// ! this
// * Object methodu içinde object'in kendisine erişmek için kullanılır.

// ? const car = {
// ?     marka: "Ford",
// ?     model: "Focus",
// ?
// ?     bilgi() {
// ?         console.log(this.marka);
// ?         console.log(this.model);
// ?     }
// ? };




// const person = {
//     name: "Mustafa",
//     age: 18,
//     city: "Aksaray",
//     bilgi() {
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.city);
//     }
// }

// person.bilgi();









// ! return
// * Methodun sonucunu dışarı döndürür.

// ! this
// * Object'in kendi property'lerine erişir.

// ? const person = {
// ?     name: "Mustafa",
// ?     bilgi() {
// ?         return this.name;
// ?     }
// ? };
// ?
// ? console.log(person.bilgi());


// const product = {
//     name: "Table",
//     price: 200,
//     quantity: 0,
//     totalPrice() {
//         return this.price * this.quantity;
//     }
// }

// console.log(product.totalPrice());


// product.quantity = Number(prompt("Please enter quantity of table -> "));
// console.log(product.totalPrice());




//! Greeting Builder Problemi çözümü !
// let firstName = prompt("Please enter your name -> ");
// let lastName = prompt("Please enter your surname -> ");
// let timeOfDay = prompt("Please enter the time of day (GM / GA / GE) -> ");


// function formatName(firstName, lastName) {
//     return firstName + " " + lastName;
// }

// function getGreeting(timeOfDay) {
//     if (timeOfDay == "GM") {
//         return "Good Morning" + " ";
//     }
//     else if (timeOfDay == "GA") {
//         return "Good Afternoon" + " ";
//     }
//     else {
//         return "Good Evening" + " ";
//     }
// }


// function createGreeting(firstName, lastName, timeOfDay) {
//     return formatName(firstName, lastName) + ", " + getGreeting(timeOfDay);
// }


// let result = createGreeting(firstName, lastName, timeOfDay);
// console.log(result);




//! Number Checker (Roadmap) Çözümü !


// let number = Number(prompt("Please enter a number (not 1)-> "));


// function isPositive(number) {
//     return number > 0;
// }


// function isNegative(number) {
//     return number < 0;
// }


// function isZero(number) {
//     return number === 0;
// }



// function isEven(number) {
//     return number % 2 === 0;
// }

// function isPrime(number) {
//     if (number > 1) {
//         let prime = true;
//         for (let i = 2; i < number; i++) {
//             if (number % i === 0) {
//                 prime = false;
//             }

//         }
//         return prime;
//     }
//     else {
//         return false;
//     }
// }


// function describeNumber(number) {
//     return {
//         isPositive: isPositive(number),
//         isNegative: isNegative(number),
//         isZero: isZero(number),
//         isEven: isEven(number),
//         isPrime: isPrime(number)
//     };
// }

// console.log(describeNumber(number));





//! Roadmap Price Calculator Problem Solution !


// price ne kadar 
// discount indirim
// tax vergi

// const price = 1000;

// const discountPercent = 25;

// const taxPercent = 40;

// let itemAdet = Number(prompt("How many you'll buy -> "));


// function calculateDiscount(price, discountPercent) {

//     return (price * discountPercent) / 100;

// }


// function calculateTax(priceAfterDiscount, taxPercent) {

//     return (priceAfterDiscount * taxPercent) / 100;

// }


// function calculateFinalPrice(price, discountPercent, taxPercent, itemAdet) {

//     return (
//         price
//         - calculateDiscount(price, discountPercent)
//         + calculateTax(
//             price - calculateDiscount(price, discountPercent),
//             taxPercent
//         )
//     ) * itemAdet;

// }


// function createPriceSummary(price, discountPercent, taxPercent, itemAdet) {

//     return {

//         price: price,

//         discount: calculateDiscount(price, discountPercent),

//         tax: calculateTax(
//             price - calculateDiscount(price, discountPercent),
//             taxPercent
//         ),

//         finalPrice: calculateFinalPrice(
//             price,
//             discountPercent,
//             taxPercent,
//             itemAdet
//         )

//     };

// }


// console.log(
//     createPriceSummary(
//         price,
//         discountPercent,
//         taxPercent,
//         itemAdet
//     )
// );







//! leetcode Palindrom Numbers Solution !!!

// let x = Number(prompt("Please enter a number"));

// let ters = Number(String(x).split("").reverse().join(""));
// result = true
// if (x === ters) {
//     result = true;
// }
// else {
//     result = false;
// }

// console.log(result);








