
console.log("funcionando");
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCYY7tqRAt7tQK9COiZAGyJ4lXYp5SP9II",
  authDomain: "vueportafolio.firebaseapp.com",
  projectId: "vueportafolio"
});

var db = firebase.firestore();

//add data

$('#saveData').click(function (event) {
  event.preventDefault();

  let nombre = $("#nombre").val().trim();
  let apellido = $("#apellido").val().trim();
  let fecha = $("#datepicker").val().trim();

  db.collection("users1").add({
      name: nombre,
      apellido: apellido,
      Fecha: fecha
    })
    .then(function (docRef) {

      console.log("Document written with ID: ", docRef.id);

      toastr.success(`ID: ${docRef.id}`, `Se añadio`);

      $("#nombre").val('');
      $("#apellido").val('');
      $("#datepicker").val('');


    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
      toastr.erro("No se añadio",error);
    });
})



//read data

const datos = document.getElementById("datos");

const idmodal = document.getElementById("modalID"); // para el id modal...

db.collection("users1").onSnapshot((querySnapshot) => {
  datos.innerHTML = '';



  querySnapshot.forEach((doc) => {
    /*   console.log(`${doc.id} => ${doc.data()}`);
      console.log(`${doc.data().name}`)
 */

    datos.innerHTML += /*html*/ `
     <tr>
    <!--<th scope="row">${doc.id}</th> -->
      <td>${doc.data().name}</td>
      <td>${doc.data().apellido}</td>
      <td>${doc.data().Fecha}</td>

      <td>
      <button type="button" class="btn btn-small btn-floating  waves-effect waves-light red" onclick="eliminar('${doc.id}')">
      <i class="fas fa-trash"></i>
      </button>
      <button type="button" class="btn btn-small btn-floating waves-effect waves-light yellow" data-toggle="modal"data-target="#modaledit" onclick="editar('${doc.id}','${doc.data().name}','${doc.data().apellido}','${doc.data().Fecha}')">
      <i class="fas fa-edit"></i>
      </button>
      </td>
  </tr>
      `;

    

  });
});

function eliminar(id) {
  swal({
      title: "Espera!",
      text: "Una vez eliminado, no podrá recuperarlo",
      icon: "warning",
      buttons: {
        confirm: {
          text: "Eliminar",
          value: true,
          visible: true,
          className: "btn btn-danger btn-rounded waves-effect waves-light",
          /*  closeModal: true, */
        },
        cancel: {
          text: "Cancelar",
          value: false,
          visible: true,
          className: "btn btn-light btn-rounded waves-effect waves-light ",
          /*   closeModal: true, */
        }
      },
      /*    dangerMode: true, */
      closeOnClickOutside: false,
      /* para que no salga de la ventana si no acepta */
      /* timer: 10000, tiempo en que demora para cerrarse si el usuario no hace nada */
    })
    .then((willDelete) => {
      if (willDelete) {
        db.collection("users1").doc(id).delete().then(function () {
            console.log("Document successfully deleted!", id);
            
        toastr.success(id, 'Se elimino');
          })
          .catch(function (error) {
            console.error("Error removing document: ", error);
           /*  swal("El registro", "No se pudo eliminar", "error"); */ //en caso haya un error al borrar con firebase
            toastr.error(id, 'error');
          });
          /* 
        swal("Se elimino el registro", {
          icon: "success",
          timer: 700,
          button: false,
        }); */

      } else {

        toastr.warning(id,'Fue cancelado');

      /*   swal("No se elimino el registro", {
          icon: "warning",
          timer: 700,
          button: false,
        });
         */
      }
    });
}


/*  
// lo normal como deberia ser

function eliminar(id){

  db.collection("users1").doc(id).delete().then(function() {
    console.log("Document successfully deleted!");
    swal("El registro", "Fue eliminado", "success");
  })
  
  .catch(function(error) {
    console.error("Error removing document: ", error);
    swal("El registro", "No se pudo eliminar", "error");
  });
  
}

 */


/*------------ update data---------------------*/

function editar(id, nombre, apellido, fecha) {

  /*   console.log(id,nombre,apellido,fecha); */

  /*  javascript
   document.getElementById('nombre-edit').value      = nombre;
    document.getElementById('apellido-edit').value    = apellido;
    document.getElementById('datepicker-edit').value  = fecha;

    let buttonEdit = document.getElementById('buttonEdit'); */


  document.getElementById('nombre-edit').value = nombre;
  document.getElementById('apellido-edit').value = apellido;
  document.getElementById('datepicker-edit').value = fecha;
  document.getElementById('modalID').val = modalID;
  modalID.innerHTML = id;

/*   $("#modalID").html(id); */


  let buttonEdit = document.getElementById('button-edit');

  /*   buttonEdit.innerHTML = "Editar";  */

  //jquery
  /*   nombre = $("#nombre-edit").val();
    apellido = $("#apellido-edit").val();
    fecha = $("#datepicker-edit").val(); */

  /*   let buttonEdit = $('#save-data');
   */

  /*   }); */




  /* 
   $(buttonEdit).click(function(){ */
  buttonEdit.onclick = function () {

    const washingtonRef = db.collection("users1").doc(id);


    const nombre = document.getElementById('nombre-edit').value.trim();
    const apellido = document.getElementById('apellido-edit').value.trim();
    const fecha = document.getElementById('datepicker-edit').value.trim();


    /* 
    let nombre    = document.getElementById('nombre-edit').value;
    let apellido  = document.getElementById('apellido-edit').value;
    let fecha     = document.getElementById('datepicker-edit').value;

     */
    /*     let  nombre = $("#nombre-edit").val();
        let  apellido = $("#apellido-edit").val();
        let  fecha = $("#datepicker-edit").val();
     */

    return washingtonRef.update({
        name: nombre,
        apellido: apellido,
        Fecha: fecha
      })
      .then(function () {
        console.log(id, "El documento se actualizo satisfactoriamente");
        toastr.success(id, 'Se actualizo');
       
        /*  buttonEdit.innerHTML = "Guardar"; */
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
        toastr.error('Hubo un error', error);
      });
  } /*  ) */
}
