const inicioLink = document.getElementById("inicio");
const alquilerLink = document.getElementById("alquiler");
const ventaLink = document.getElementById("venta");
const btnVenta = document.getElementById("btnVenta");
const btnAlquiler = document.getElementById("btnAlquiler");

inicioLink.addEventListener("click", function () {
  window.location.href = "index.html";
});
alquilerLink.addEventListener("click", function () {
  window.location.href = "propiedades_alquiler.html";
});
ventaLink.addEventListener("click", function () {
  window.location.href = "propiedades_venta.html";
});
btnVenta.addEventListener("click", function () {
  window.location.href = "propiedades_venta.html";
});
btnAlquiler.addEventListener("click", function () {
  window.location.href = "propiedades_alquiler.html";
});

const propiedades_venta = [
  {
    nombre: " Mansion Hamptons",
    src: "https://media.revistaad.es/photos/60c2224cafd93bb56e45df39/master/w_1600%2Cc_limit/280927.jpg",
    descripcion:
      "Vive y vacaciona con tus celebridades favoritas. la playa y el campo. la vida que mereces",
    ubicacion: "456 Luxury Lane, Hamptons, CA 45678",
    habitaciones: 8,
    baños: 6,
    costo: 3000000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Mansion Palm Beach",
    src: "https://pic.le-cdn.com/thumbs/520x390/08/1/properties/Property-0069900ed9934d3f00dba4a7ec6e7ea3-93376005.jpg",
    descripcion:
      "Mansion palm beach. areas verdes y montañas para trekking. vive el lujo",
    ubicacion: "690 Mountain Road, Summit, CA 9876",
    habitaciones: 6,
    baños: 6,
    costo: 4000000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "La Geisha manor",
    src: "https://www.latercera.com/resizer/uV_84NFdBPjp00Fnz0mSY7PqA08=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/DK3BYE53PVFURF6ACPR77DTNQE.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: " Dirección. 101 Independence Avenue, S.E.. Washington, D.C.",
    habitaciones: 8,
    baños: 6,
    costo: 7000000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Mansion Moderna",
    src: "https://statics.forbesargentina.com/2022/09/crop/631f3d59d172b__400x260.webp",
    descripcion:
      "Estilo moderno y jovial. Mansion cerca del centro en exclusivo barrio.",
    ubicacion: " 180 North Michigan Ave., Suite 1500, Chicago, IL 60611",
    habitaciones: 6,
    baños: 4,
    costo: 5000000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Mansion frente al mar",
    src: "https://media.inmobalia.com/imgV1/B98Le8~d7M9tpu8aWgViz7fwjtL8p~ovHhzpkp6utVX0~MAGPpsuRM6YsiyMS1gQPgphhXDhW2s8Y6bJlfOhDx_l3nc~I_PnM~tnY_5_R4daMmcft9ZFgMCeQlViuldmmMJq2OQgptIli3tJueIk8lyNZBoxDs7aqXobf4XacddxT_Pidi3hSELABxlXrbM~i01GgpHl4OEboe07jUsxbSEjlk6sDyzziqmWZpTa~M~glCxUibh~ZGd14c6mc~qEzwAXCeANDAF72gqVsH0BZL537GzOUibufVGupBy~VrRL482ZltJ5RozPtwi7xFFhJd4Sq5940MSLQ9bOb4ZX4z0AoVlkuHRQ4YU0QkUDKuxe7rYYsnLt71JzXw--.jpg",
    descripcion: "Mansion frente al mar para disfrutar la naturaleza.",
    ubicacion: "5055 Wilshire Blvd., Suite 960, Los Angeles, CA 90036",
    habitaciones: 8,
    baños: 8,
    costo: 9000000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "The hills",
    src: "https://pic.le-cdn.com/thumbs/520x390/843/1/properties/Property-177a8e6217b4c5d95f378c1bba72bb84-128484899.jpg",
    descripcion:
      "Este casa/castillo ofrece una increible cantidad de habitaciones, con posibilidad de tocar la naturaleza a la salida de tu puerta",
    ubicacion: "8383 Willshire Blvd, Suite 956, Beverly Hills, CA 90211",
    habitaciones: 15,
    baños: 10,
    costo: 12000000,
    smoke: true,
    pets: true,
  },
];
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
const salesSection = document.getElementById("salesSection");
const rentSection = document.getElementById("rentSection");

htmlSales = "";
htmlRent = "";

console.log(propiedades_venta.length);

for (let i = 0; i < 3 && i < propiedades_venta.length; i++) {
  const propiedad = propiedades_venta[i];
  htmlSales += `<div class="col-md-4 mb-4">
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
}
salesSection.innerHTML = htmlSales;

for (let i = 0; i < 3 && i < propiedades_alquiler.length; i++) {
  const propiedad = propiedades_alquiler[i];
  htmlRent += `<div class="col-md-4 mb-4">
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
}
rentSection.innerHTML = htmlRent;
