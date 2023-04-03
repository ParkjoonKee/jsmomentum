const images = [
  "angel-barnes-WTKN4sy4wTA-unsplash.jpg",
  "bryan-brittos-8YcbCO8xgak-unsplash.jpg",
  "cajeo-zhang-tpSt9PiGWj0-unsplash.jpg",
  "daniel-j-schwarz-meOCpxYZt_g-unsplash.jpg",
  "kristine-tanne-b8gOvy2kFVA-unsplash.jpg",
  "marcus-ganahl-XHGjIbydZto-unsplash.jpg",
  "matt-twyman-r3BkbAPcHHs-unsplash.jpg",
  "mike-l-GQe23-3-Lf8-unsplash.jpg",
  "patrick-stadler-mD_n5Rt3CCo-unsplash.jpg",
  "sara-groblechner-_xat41k_pl0-unsplash.jpg",
  "vidar-nordli-mathisen-SF2yQGSZ_Pg-unsplash.jpg",
];

const chosenImage = images[Math.floor(Math.random() * quotes.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
