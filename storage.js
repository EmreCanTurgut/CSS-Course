date= new Date();
date.setDate(12)
date.setMonth(1)

start= new Date(2024,0,1)
end = new Date(2025,0,1)
farkMilisaniye=end-start
fark=Math.floor(farkMilisaniye/(1000*60*60*24));
console.log(fark)
console.log(date.getMonth())
console.log(date.getDate())

console.log(date.toLocaleDateString('tr-TR'))
console.log(date.toLocaleTimeString('tr-TR'))

str="java mükemmelbir dildir java aman"
str=str.replaceAll("java","typesc")
    console.log(str)

    str="40"
console.log(str)
console.log(Number(str))
console.log(parseFloat(str))
console.log(parseInt(str))
console.log(str.toString())


let sayi=[5,12,8,130,44]
console.log(sayi.find((s)=>s > 10))

let sayi=[5,12,8,130,44]
console.log(sayi.sort((a ,b)=> a-b))


let urunler = [
    {id: 1, isim: "Laptop", fiyat: 1000},
    {id: 2, isim: "Telefon", fiyat: 500},
    {id: 3, isim: "Tablet", fiyat: 300}
  ];
  urunler.forEach((urun)=>console.log("isim "+urun.isim+" id "+urun.id+" fiyat "+urun.fiyat))



  let sayilar = [10, 20, 30];

let toplam = sayilar.reduce((acc, val) => acc + val, 0);
//reduce acc kısmı tekarar çağırımlara en sonki hailyle aktarırılı val dizideki elemanları sırayla alır
console.log(toplam); // 60
