import { CardComponet } from "../components/CardComponet.js";
import{product} from "../data/product.js";
let renderArea = document.querySelector("#renderArea");

// RENDER PRODUCT
product
  .slice(0, 10)
  .map((product) => (renderArea.innerHTML += CardComponet(product)));
