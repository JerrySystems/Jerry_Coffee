/* ==========================================================
   MENÚ EDITABLE DE JERRY COFFEE
   1) Para cambiar un nombre o precio, edita el arreglo MENU.
   2) Los precios se muestran exactamente como están escritos aquí.
   3) Para añadir una foto, sube el archivo a assets/productos/
      y escribe su ruta en "imagen", por ejemplo:
      imagen: "assets/productos/espresso.jpg"
   4) En GitHub Pages respeta mayúsculas/minúsculas en los nombres.
   5) Para añadir un artículo, copia uno de los objetos y cambia
      categoria, nombre, precio, descripcion e imagen.
   ========================================================== */

const MENU = [
  // ESPRESSO BASE
  { categoria: "Espresso base", nombre: "Espresso", precio: 45, imagen: "assets/productos/espresso.jpg", descripcion: "" },
  { categoria: "Espresso base", nombre: "Americano", precio: 50, imagen: "assets/productos/americano.jpg", descripcion: "" },
  { categoria: "Espresso base", nombre: "Latte", precio: 60, imagen: "assets/productos/latte.jpg", descripcion: "" },
  { categoria: "Espresso base", nombre: "Flat White", precio: 40, imagen: "assets/productos/flat-white.jpg", descripcion: "" },
  { categoria: "Espresso base", nombre: "Moka", precio: 65, imagen: "assets/productos/moka.jpg", descripcion: "" },
  { categoria: "Espresso base", nombre: "Cappuccino", precio: 55, imagen: "assets/productos/cappuccino.jpg", descripcion: "" },
  { categoria: "Espresso base", nombre: "Latte vainilla", precio: 70, imagen: "assets/productos/latte-vainilla.jpg", descripcion: "" },
  { categoria: "Espresso base", nombre: "Latte caramel", precio: 70, imagen: "assets/productos/latte-caramel.jpg", descripcion: "" },
  { categoria: "Espresso base", nombre: "Dirty chai", precio: 70, imagen: "assets/productos/dirty-chai.jpg", descripcion: "" },
  { categoria: "Espresso base", nombre: "Horchata latte", precio: 70, imagen: "assets/productos/horchata-latte.jpg", descripcion: "" },

  // TONIC'S
  { categoria: "Tonic's", nombre: "Naranja brew", precio: 75, imagen: "assets/productos/naranja-brew.jpg", descripcion: "" },
  { categoria: "Tonic's", nombre: "Maracuyá brew", precio: 75, imagen: "assets/productos/maracuya-brew.jpg", descripcion: "" },
  { categoria: "Tonic's", nombre: "Lima brew", precio: 70, imagen: "assets/productos/lima-brew.jpg", descripcion: "" },
  { categoria: "Tonic's", nombre: "Arandano brew", precio: 75, imagen: "assets/productos/arandano-brew.jpg", descripcion: "" },

  // YOGHURT BASE
  { categoria: "Yoghurt base", nombre: "Yoghurt fresa", precio: 75, imagen: "assets/productos/yoghurt-fresa.jpg", descripcion: "" },
  { categoria: "Yoghurt base", nombre: "Yoghurt mango", precio: 75, imagen: "assets/productos/yoghurt-mango.jpg", descripcion: "" },
  { categoria: "Yoghurt base", nombre: "Yoghurt taro", precio: 75, imagen: "assets/productos/yoghurt-taro.jpg", descripcion: "" },

  // NON-COFFEE
  { categoria: "Non-coffee", nombre: "Taro", precio: 65, imagen: "assets/productos/taro.jpg", descripcion: "" },
  { categoria: "Non-coffee", nombre: "Chocolate", precio: 60, imagen: "assets/productos/chocolate.jpg", descripcion: "" },
  { categoria: "Non-coffee", nombre: "Matcha", precio: 70, imagen: "assets/productos/matcha.jpg", descripcion: "" },
  { categoria: "Non-coffee", nombre: "Chai", precio: 65, imagen: "assets/productos/chai.jpg", descripcion: "" },
  { categoria: "Non-coffee", nombre: "Horchata", precio: 65, imagen: "assets/productos/horchata.jpg", descripcion: "" },

  // FRIOSI / FRAPPES
  { categoria: "Friosi / Frappes", nombre: "Taro / frappe.", precio: 75, imagen: "assets/productos/taro-frappe.jpg", descripcion: "" },
  { categoria: "Friosi / Frappes", nombre: "Dirty Chai.", precio: 75, imagen: "assets/productos/dirty-chai-frappe.jpg", descripcion: "" },
  { categoria: "Friosi / Frappes", nombre: "Chocolate", precio: 70, imagen: "assets/productos/chocolate-frappe.jpg", descripcion: "" },
  { categoria: "Friosi / Frappes", nombre: "Horchata latte", precio: 75, imagen: "assets/productos/horchata-latte-frappe.jpg", descripcion: "" },
  { categoria: "Friosi / Frappes", nombre: "Latte vainilla", precio: 75, imagen: "assets/productos/latte-vainilla-frappe.jpg", descripcion: "" },
  { categoria: "Friosi / Frappes", nombre: "Latte", precio: 65, imagen: "assets/productos/latte-frappe.jpg", descripcion: "" },
  { categoria: "Friosi / Frappes", nombre: "latte caramel", precio: 75, imagen: "assets/productos/latte-caramel-frappe.jpg", descripcion: "" },
  { categoria: "Friosi / Frappes", nombre: "Matcha / frappe.", precio: 75, imagen: "assets/productos/matcha-frappe.jpg", descripcion: "" },
  { categoria: "Friosi / Frappes", nombre: "Oreo (frappe)", precio: 75, imagen: "assets/productos/oreo-frappe.jpg", descripcion: "" },
  { categoria: "Friosi / Frappes", nombre: "Mazapan(frappe).", precio: 75, imagen: "assets/productos/mazapan-frappe.jpg", descripcion: "" },
  { categoria: "Friosi / Frappes", nombre: "Moka", precio: 70, imagen: "assets/productos/moka-frappe.jpg", descripcion: "" },
  { categoria: "Friosi / Frappes", nombre: "Matcha strawberry", precio: 75, imagen: "assets/productos/matcha-strawberry.jpg", descripcion: "" },
  { categoria: "Friosi / Frappes", nombre: "Matcha mango", precio: 75, imagen: "assets/productos/matcha-mango.jpg", descripcion: "" }
];

const CATEGORY_ORDER = ["Espresso base", "Non-coffee", "Tonic's", "Yoghurt base", "Friosi / Frappes"];
let activeCategory = "Todas";
let searchTerm = "";

const money = value => "$" + value;
const groupsEl = document.getElementById("menu-groups");
const filtersEl = document.getElementById("category-filters");
const searchEl = document.getElementById("menu-search");

// Referencias del modal
const modal = document.getElementById("product-modal");
const modalImg = document.getElementById("modal-image");
const modalPlaceholder = document.getElementById("modal-placeholder");
const modalCategory = document.getElementById("modal-category");
const modalName = document.getElementById("modal-name");
const modalPrice = document.getElementById("modal-price");
const modalDesc = document.getElementById("modal-description");

// Abrir modal con la información completa
function openModal(item) {
  if (!modal) return;

  if (modalCategory) modalCategory.textContent = item.categoria;
  if (modalName) modalName.textContent = item.nombre;
  if (modalPrice) modalPrice.textContent = money(item.precio);
  if (modalDesc) {
    modalDesc.textContent = item.descripcion || "Preparado al momento con ingredientes seleccionados de Jerry Coffee.";
  }

  if (modalImg && modalPlaceholder) {
    if (item.imagen) {
      modalImg.src = item.imagen;
      modalImg.alt = item.nombre;
      modalImg.style.display = "block";
      modalPlaceholder.style.display = "none";
      modalImg.onerror = () => {
        modalImg.style.display = "none";
        modalPlaceholder.style.display = "grid";
      };
    } else {
      modalImg.style.display = "none";
      modalPlaceholder.style.display = "grid";
    }
  }

  modal.classList.add("is-active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

// Cerrar modal y regresar
function closeModal() {
  if (!modal) return;
  modal.classList.remove("is-active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// Listeners de cierre
if (modal) {
  const closeBtn = modal.querySelector(".modal-close-btn");
  const backdrop = modal.querySelector(".modal-backdrop");

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.classList.contains("modal-hint")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-active")) {
      closeModal();
    }
  });
}

function renderFilters() {
  if (!filtersEl) return;
  const categories = ["Todas", ...CATEGORY_ORDER.filter(category => MENU.some(item => item.categoria === category))];
  filtersEl.innerHTML = "";
  categories.forEach(category => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-button" + (activeCategory === category ? " active" : "");
    button.textContent = category;
    button.setAttribute("aria-pressed", String(activeCategory === category));
    button.addEventListener("click", () => {
      activeCategory = category;
      renderFilters();
      renderMenu();
    });
    filtersEl.appendChild(button);
  });
}

function createCard(item) {
  const card = document.createElement("article");
  card.className = "menu-card";
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Ver ${item.nombre} en tamaño completo`);

  card.addEventListener("click", () => openModal(item));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal(item);
    }
  });

  const imageWrap = document.createElement("div");
  imageWrap.className = "product-image-wrap";

  const placeholder = document.createElement("div");
  placeholder.className = "image-placeholder";
  placeholder.textContent = "Jerry Coffee";
  imageWrap.appendChild(placeholder);

  if (item.imagen) {
    const image = document.createElement("img");
    image.className = "product-image";
    image.src = item.imagen;
    image.alt = item.nombre;
    image.loading = "lazy";
    image.addEventListener("load", () => { placeholder.hidden = true; });
    image.addEventListener("error", () => { image.remove(); });
    imageWrap.appendChild(image);
  }

  const info = document.createElement("div");
  info.className = "product-info";
  const top = document.createElement("div");
  top.className = "product-top";
  const name = document.createElement("h4");
  name.className = "product-name";
  name.textContent = item.nombre;
  const price = document.createElement("span");
  price.className = "product-price";
  price.textContent = money(item.precio);
  top.append(name, price);
  info.appendChild(top);

  if (item.descripcion) {
    const description = document.createElement("p");
    description.className = "product-description";
    description.textContent = item.descripcion;
    info.appendChild(description);
  }
  card.append(imageWrap, info);
  return card;
}

function renderMenu() {
  if (!groupsEl) return;
  const filtered = MENU.filter(item => {
    const matchesCategory = activeCategory === "Todas" || item.categoria === activeCategory;
    const matchesSearch = (item.nombre + " " + item.categoria).toLocaleLowerCase("es").includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  groupsEl.innerHTML = "";
  if (!filtered.length) {
    const empty = document.createElement("p");
    empty.className = "no-results";
    empty.textContent = "No encontramos bebidas con esa búsqueda. Intenta con otro nombre.";
    groupsEl.appendChild(empty);
    return;
  }

  const categories = activeCategory === "Todas" ? CATEGORY_ORDER : [activeCategory];
  categories.forEach(category => {
    const items = filtered.filter(item => item.categoria === category);
    if (!items.length) return;
    const section = document.createElement("section");
    section.className = "menu-group";
    const heading = document.createElement("div");
    heading.className = "group-heading";
    const title = document.createElement("h3");
    title.textContent = category;
    heading.appendChild(title);
    const grid = document.createElement("div");
    grid.className = "menu-grid";
    items.forEach(item => grid.appendChild(createCard(item)));
    section.append(heading, grid);
    groupsEl.appendChild(section);
  });
}

if (searchEl) {
  searchEl.addEventListener("input", event => {
    searchTerm = event.target.value.trim().toLocaleLowerCase("es");
    renderMenu();
  });
}

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

renderFilters();
renderMenu();
