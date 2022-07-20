let list = document.getElementsByClassName("content__list")[0];

let product1 = {
  img: "img/1.jpg",
  rating: 5,
  comments: 1,
  title: "СМАРТ-ЧАСЫ APPLE WATCH SERIES 7 GPS 41MM MIDNIGHT ALUMINIUM MIDNIGHT SPORT BAND MKMX3GK/A В ШЫМКЕНТЕ",
  lastprice: 254990,
  newprice: 3390,
  inStock: true,
  code: 485400,
  buyingoncredit:"в кредит",
  buyingonmoney: "купить"
};

let product2 = {
  img: "img/2.png",
  rating: 5,
  comments: 10,
  title: "СМАРТ-ЧАСЫ HUAWEI WATCH FIT ACTIVE BLACK В ШЫМКЕНТЕ",
  lastprice:49890,
  newprice: 4499,
  inStock: true,
  code: 470328,
  buyingoncredit:"в кредит",
  buyingonmoney: "купить"
};

let product3 = {
  img: "img/3.jpg",
  rating: 5,
  comments: 2,
  title: "СМАРТ-ЧАСЫ SAMSUNG GALAXY WATCH 3 STAINLESS 41MM BRONZE (SM-R850NZDACIS) В ШЫМКЕНТЕ",
  lastprice: 134090,
  newprice:99890,
  inStock: true,
  code: 477138,
  buyingoncredit:"в кредит",
  buyingonmoney: "купить"
};

let product4 = {
  img: "img/4.jpg",
  rating: 5,
  comments: 10,
  title: "СМАРТ-ЧАСЫ HUAWEI WATCH GT2 46MM SPORT В ШЫМКЕНТЕ",
  lastprice: 99890,
  newprice:89990,
  inStock: true,
  code: 768549,
  buyingoncredit:"в кредит",
  buyingonmoney: "купить"
};


let products = [];

products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);


for (let x of products) {
  // Создание структуры объекта

  // main container
  let div_ = document.createElement("div");
  div_.className = "content__item";

  // main img container
  let div_img = document.createElement("div");
  div_img.className = "content__img";

  // main img
  let img = document.createElement("img");
  img.src = x.img;
  div_img.append(img);

  // rating
  let div_rating = document.createElement("div");
  div_rating.className = "content__rating";

  let p1 = document.createElement("p");
  let p2 = document.createElement("p");

  p1.innerText = x.rating + " звезд";
  p2.innerText = x.comments + " отзывов";

  div_rating.append(p1);
  div_rating.append(p2);

  // title
  let div_title = document.createElement("div");
  div_title.className = "content__title";

  let a = document.createElement("a");
  a.innerText = x.title;
  a.href = "#";

  div_title.append(a);

  // pricing
  let div_price = document.createElement("div");
  div_price.className = "content__price";

  let h3 = document.createElemen1("h3");
  let h2 = document.createElemen1("h2");
  let p3 = document.createElement("p");
  let p4 = document.createElement("p");

  h3.innerText = x.lastprice + " ₸";
  h2.innerText = x.newprice + " ₸";

  if (x.inStock) {
    p3.innerText = "есть в наличии";
  } else {
    p3.innerText = "нет в наличии";
  }

  p4.innerText = "Код товара: " + x.code;

  div_price.append(h2);
  div_price.append(p3);
  div_price.append(p4);

  let div_buying = document.createElement("div");
  div_buying.className = "content__buying";

  let button =document.createElement("button");
  let button1 =document.createElement("button");
  button.innerText =x.buyingoncredit;
  button1.innerText =x.buyingonmoney;
 
  div_price.append(button);
  div_price.append(button1);

  // adding all elements in the content item
  div_.append(div_img);
  div_.append(div_rating);
  div_.append(div_title);
  div_.append(div_price);

  list.append(div_);
}