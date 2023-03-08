/* Este curriculum esta desarrollado de modo que cada vez que entras a la pagina trae y setea los datos de un random user distinto */
const generaUser = async() => {
    const respuesta = await fetch('https://randomuser.me/api/?nat=es,mx&exc=login,phone,registered&noinfo');
    const { results } = await respuesta.json();
    const persona = results[0];
    let date = new Date(persona.dob.date);
    console.log(persona);
    document.getElementById('name').textContent = persona.name.first + ' '+ persona.name.last;
    if (persona.gender == 'male'){
        document.getElementById('Genero').textContent ='Genero: Hombre'
    } else{
        document.getElementById('Genero').textContent ='Genero: Mujer'
    }
    document.getElementById('Email').textContent ='Email: '+persona.email;
    document.getElementById('Domicilio').textContent ='Localidad: '+persona.location.city+', '+persona.location.state+', '+persona.location.country
    document.getElementById('Direccion').textContent ='Direccion: '+persona.location.street.name+' '+persona.location.street.number
    document.getElementById('Postal').textContent = 'Codigo Postal: '+persona.location.postcode;
    document.getElementById('FechaNac').textContent ='Fecha de Nacimiento: '+date.getDay()+'/'+date.getMonth()+'/'+date.getFullYear()+' ('+ persona.dob.age + ' años'+')';
    document.getElementById('Telefono').textContent = 'Telefono: '+persona.cell;
    document.getElementById('foto').src = persona.picture.large;
}
generaUser();

window.addEventListener('scroll', function(){
        document.getElementById('menu').style.opacity=0.7;
    if(window.scrollY==0){
        document.getElementById('menu').style.opacity=1;
    }
})
