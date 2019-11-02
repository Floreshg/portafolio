console.log("funcionando");
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCYY7tqRAt7tQK9COiZAGyJ4lXYp5SP9II",
  authDomain: "vueportafolio.firebaseapp.com",
  projectId: "vueportafolio"
});

var db = firebase.firestore();




//leer documentos

const datos = document.getElementById("datos");

db.collection("about").onSnapshot((querySnapshot) => {
  datos.innerHTML = '';
  querySnapshot.forEach((doc) => {
    /*   console.log(`${doc.id} => ${doc.data()}`);
      console.log(`${doc.data().name}`)
 */

 

    datos.innerHTML += /*html*/ `
     
     <table class="table text-center">
      
       <tbody>
         <tr>
           <td><h3 class="text-uppercase">${doc.data().title}</h3></td>

          <td>
           <button type="button" class="btn btn-small btn-floating waves-effect waves-light yellow" data-toggle="modal"data-target="#modaledit" onclick="editar('${doc.id}')">
           <i class="fas fa-edit"></i>
           </button>
           </td>
         </tr>
       </tbody>
     </table>
      `;

  });
});