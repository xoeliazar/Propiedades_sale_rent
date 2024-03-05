const inicioLink = document.getElementById("inicio");
const alquilerLink = document.getElementById("alquiler");
const ventaLink = document.getElementById("venta");

const btnInicio = document.getElementById("btnInicio");

inicioLink.addEventListener("click", function () {
  window.location.href = "index.html";
});
alquilerLink.addEventListener("click", function () {
  window.location.href = "propiedades_alquiler.html";
});
ventaLink.addEventListener("click", function () {
  window.location.href = "propiedades_venta.html";
});
btnInicio.addEventListener("click", function () {
  window.location.href = "index.html";
});

const propiedades_alquiler = [
  {
    nombre: "Casa en zona urbana",
    src: "https://filesblog.technavio.org/wp-content/webp-express/webp-images/uploads/2018/12/Online-House-Rental-Sites-672x372.jpg.webp",
    descripcion:
      "Amplio espacio cerca de parques y del centro. vibra con la vida nocturna.",
    ubicacion: " 123 Main Street, Anytown, CA 91234",
    habitaciones: 4,
    baños: 2,
    costo: 4500,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Villa Hermosa",
    src: "https://www.avail.co/wp-content/uploads/2022/11/can-i-rent-my-house-out-if-i-still-have-a-mortgage.jpg",
    descripcion:
      "Acogedora casa en el bosque. para el disfrute de la familia en la naturaleza",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    baños: 2,
    costo: 4000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Happy Village",
    src: "https://www.trulia.com/pictures/thumbs_4/zillowstatic/fp/b44bcee36dc7d7498bd1c5f5b8233d1c-full.jpg",
    descripcion: "Hermosa comunidad. casas amplias y diseño clasico",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 6,
    baños: 4,
    costo: 7500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Texas Style",
    src: "https://ssl.cdn-redfin.com/photo/rent/fcc0c8e0-d4e1-42cb-b521-7aa9972bb6b1/islphoto/genIsl.0_1.jpg",
    descripcion: "Casa estilo tejano. disfruta la naturaleza y la vida.",
    ubicacion: "123 Regal Avenue, Prestige Suburb, CA 45678",
    habitaciones: 4,
    baños: 2,
    costo: 6500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa suburbios",
    src: "https://homefinderimages.s3.amazonaws.com/cms/articles/1007/1571163764.8921_rental-home.jpg",
    descripcion: "Casa de dos pisos en los suburbios. vivir en paz",
    ubicacion: "Highrise Street, Skyview City, CA 56789",
    habitaciones: 4,
    baños: 4,
    costo: 4000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Solid Buildt",
    src: "https://rentpath-res.cloudinary.com/$img_current/t_3x2_webp_lg/t_unpaid/646ed5178c7adbfbbfe99852046c6c93",
    descripcion:
      "Acogedora casa en construccion de ladrillos para una familia que esta comenzando",
    ubicacion: "89 Summit Street, Summit Peaks, CA 23456",
    habitaciones: 4,
    baños: 3,
    costo: 2000,
    smoke: false,
    pets: true,
  },
];

const rentPlace = document.getElementById("rentPlace");
for (let propiedad of propiedades_alquiler) {
  const template = `<div class="col-md-4 mb-4">
    <div class="card">
    <img
      src="${propiedad.src}"
      class="card-img-top"
      alt="Imagen del departamento"
    />
    <div class="card-body">
      <h5 class="card-title">
        ${propiedad.nombre}
      </h5>
      <p class="card-text">
        ${propiedad.descripcion}
      </p>
      <p>
        <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
      </p>
      <p>
        <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
        <i class="fas fa-bath"></i> ${propiedad.baños} Baños
      </p>
      <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
      
      ${
        propiedad.smoke
          ? '<p class="smoking text-success"><i class="fas fa-smoking"></i> Permitido Fumar</p>'
          : '<p class="noSmoking text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
      }
      ${
        propiedad.pets
          ? '<p class="pets text-success"><i class="fas fa-paw"></i> Mascotas Permitidas</p>'
          : '<p class="noPets text-danger"><i class="fas fa-ban"></i> No se permiten Mascotas</p>'
      }
    </div>
   </div>
  </div>
    `;
  rentPlace.innerHTML += template;
}
