import logo from './logo.svg';
import './App.css';

//Colección de lugares turísticos registrados en un arreglo
const listaturismo = [
  {
    titulo: "Machu Picchu",
    imagen: "https://cdn.pixabay.com/photo/2012/11/28/09/55/machu-picchu-67585_640.jpg",
    precio: "$/.100",
    comprar: "Agregar"
  },
  {
    titulo: "Machu Picchu Templo de las Tres Ventanas",
    imagen: "https://cdn.pixabay.com/photo/2012/04/26/22/52/machu-picchu-43396_640.jpg",
    precio: "$/.200",
    comprar: "Agregar"
  },
  {
    titulo: "Machu Picchu-568726_640",
    imagen: "https://cdn.pixabay.com/photo/2014/12/15/07/13/machu-picchu-568726_640.jpg",
    precio: "$/.300",
    comprar: "Agregar"
  },
  {
    titulo: "Machu-Picchu-43392_640",
    imagen: "https://cdn.pixabay.com/photo/2012/04/26/22/50/machu-picchu-43392_640.jpg",
    precio: "$/.400",
    comprar: "Agregar"  
  },
  {
    titulo: "Choquequirao-one-of-the-best",
    imagen: "https://st4.depositphotos.com/1012959/30491/i/450/depositphotos_304917442-stock-photo-choquequirao-one-of-the-best.jpg",
    precio: "$/.500",
    comprar: "Agregar"
  },
  {
    titulo: "Photo-Inca-doorway",
    imagen: "https://st2.depositphotos.com/1473952/5531/i/600/depositphotos_55317245-stock-photo-inca-doorway.jpg",
    precio: "$/.600",
    comprar: "Agregar"
  },
  {
    titulo: "Chorros-de-agua",
    imagen: "https://hidraulicainca.files.wordpress.com/2011/07/chorros-de-agua.jpg",
    precio: "$/.700",
    comprar: "Agregar"
  },
  {
    titulo: "Pisac-Ruinas",
    imagen: "https://conocepisac.com/wp-content/uploads/2020/11/pisac-ruinas.jpg",
    precio: "$/.800",
    comprar: "Agregar"
  },
  {
    titulo: "Sacsayhauman-1",
    imagen: "https://www.inkacivilization.com/wp-content/uploads/2018/08/sacsayhauman-1.jpg",
    precio: "$/.900",
    comprar: "Agregar"
  },
  {
    titulo: "Cocalmayo",
    imagen: "http://www.radioquillabamba.com/web/wp-content/uploads/2018/08/cocalmayo.jpg",
    precio: "$/.1000",
    comprar: "Agregar"
  },
  {
    titulo: "Baños-Termales-Aguas-Calientes",
    imagen: "https://d30oa1noalw1jv.cloudfront.net/images/fgxeHPMVzTsgFSMsehvVZtoTlvEn4r-baos-termales-aguas-calientes/baos-termales-aguas-calientes.jpg",
    precio: "$/.1100",
    comprar: "Agregar"
  },
  {
    titulo: "Tren-que-cruza-el-pueblo-de-Aguas-Calientes-Peru-America-del-Sur",
    imagen: "https://c8.alamy.com/compes/e4a19a/tren-que-cruza-el-pueblo-de-aguas-calientes-peru-america-del-sur-e4a19a.jpg",
    precio: "$/.1200",
    comprar: "Agregar"
  },
  {
    titulo: "Machupicchu-by-car-Hidroelectrica",
    imagen: "https://www.machupicchumagico.com/sites/default/files/tours-machupicchu/machupicchu-by-car-hidroelectrica.jpg",
    precio: "$/.1300",
    comprar: "Agregar"
  },
  {
    titulo: "Piedra-de-Doce-Angulos",
    imagen: "https://www.hotelprincipecusco.com/wp-content/uploads/piedra-de-doce-angulos.webp",
    precio: "$/.1400",
    comprar: "Agregar"
  },
  {
    titulo: "Attractions Splice",
    imagen: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/ba/3c/f0.jpg",
    precio: "$/.1500",
    comprar: "Agregar"
  },
  {
    titulo: "Temple of the Sun in Ollantaytambo",
    imagen: "https://www.perurail.com/wp-content/uploads/2022/01/Remains-of-the-Temple-of-the-Sun-in-Ollantaytambo.jpg",
    precio: "$/.1600",
    comprar: "Agregar"
  }
];
const Tituloturismos=(props)=>{
  return( 
  <p style={{ textAlign:"center"}}>{props.user.titulo}</p>
  )
};
const ImagenesTurismos=(props)=>{
  return(
    <img src={props.user.imagen} alt={props.user.titulo}
      style={{width: "200px" }}
    />
  )
};
const PrecioTurismos=(props)=>{
  return(
  <h3 style={{textAlign:"center"}}>{props.user.precio}</h3>
  )
};
const ComprarTurismos=(props)=>{
  return(
    <button
      onClick={()=>alert("Solicite su Reservación")}
      style={{marginLeft: "70px" }}
    >
      {props.user.comprar}
    </button>
  )
};
const User=(props)=>{
  return(
    <div className="user-item">
      <Tituloturismos user={props.user} />
      <ImagenesTurismos user={props.user} />
      <PrecioTurismos user={props.user} />
      <ComprarTurismos user={props.user} />
    </div>
  )
};
const UsersList=(props)=>{
  const userList=props.list.map((user,i)=><User user={user} key={i}/>)
  return ( <div className="user-list">{userList}</div>
  )
};
const xtitulo="Turismos Relacionados con la Distracción";
const xcolor="blue";
function App() {
  return (
    <div className="App">
      <h1 className="titulo" style={{ color: xcolor }}>{xtitulo}</h1>
      <h1 className="titulo" style={{ color: xcolor }}>Guía Oficial de Turismo</h1>
      <UsersList list={listaturismo} />
    </div>
  )
}
export default App;
