const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");
gallery.classList.add("list");

const container = document.createElement("div");

container.classList.add("cont");
container.classList.add("card-set");
gallery.append(container);

const pictures = images
  .map((image) => `
    <li class="item">
      <img src="${image.url}" alt="${image.alt}" width="300">
    </li>
  `).join("");

  container.insertAdjacentHTML("beforeend", pictures);



