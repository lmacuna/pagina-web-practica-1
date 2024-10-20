const form = document.querySelector("form")


let expReg=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

form.addEventListener('submit',(e)=>{

    e.preventDefault()
  /*  let confirmacion= window.confirm("Deseas enviar este mensaje?")
   console.log(confirmacion) */
   const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
       
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: "Are you sure?",
    text: "Deseas enviar este mensaje??",
    icon: "info",
    background:"rgb(240,240,240)",
    color:"rgb(20,20,20)",
    showCancelButton: true,
    confirmButtonText: "Sí, enviar mensaje!",
    cancelButtonText: "Cancelo el envio!",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire({
        title: "Enviado!",
        text: "El mensaje se envio con correctamente.",
        icon: "success",
        timer:5000,
        showCancelButton: false,
        showConfirmButton:false
      });
      console.log(result)
      return(e.target.reset())
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "Envio cancelado",
        text: "Your imaginary file is safe :)",
        icon: "error",
        timer:5000,
        showCancelButton: false,
        showConfirmButton:false
      });
      console.log(result)
    }
  });
})


const inputEmail=document.querySelector("#email")

inputEmail.addEventListener('input',(e)=>{
   console.log(e.target.value)
   if(e.target.value){
           let emailValidacion=expReg.test(e.target.value)
           console.log(emailValidacion)
   }
})