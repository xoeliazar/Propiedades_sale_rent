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
const saleSection = document.getElementById("salesSection");
for (let propiedad of propiedades_venta) {
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
  salesSection.innerHTML += template;
}
