$(function () {
	$(function () {
		$('#formValidate').submit(function () {
			/*$('.loading').html("<img src='./loading.gif' width='45'>");
             $('.loading').visible();*/

			 let btnEnviar = $("#btnsend");
			$.ajax({
				url: URLprotocol+"//"+URLdomain+"/sendmail.php", 
				/* url: 'sendmail.php', */
				type: 'POST',
				data: $("#formValidate").serialize(),
				
				beforeSend: function (data) {

					console.log(data)
					//	$("#btnsend").prop("disabled", true); 
					/* 		$('.loading').html("<img src='loading.gif' width='35'>"); */

					
					btnEnviar.val("Enviando..."); // Para input de tipo button
				


				},
				complete:function(data){
					/*
					* Se ejecuta al termino de la petición
					* */
					console.log(data);
				
				$(document).ready(function () {
					event.preventDefault();
					$(".submit").click(function () {
						/* $(".submit").addClass("disabled");
						*/
						$(".submit").attr("disabled");
						$(".submit").addClass("loading");
						/*setTimeout(function() {
						  $(".submit").addClass("hide-loading");
						  $(".done").addClass("finish");
									
						}, 3000);
								  */
						setTimeout(function () {
							$(".submit").removeClass("loading");
							/*
							$(".submit").removeClass("hide-loading");
							$(".done").removeClass("finish");
							$(".failed").removeClass("finish");
							*/
							$(".submit").removeAttr("disabled");
							/* 
							$(".submit").removeClass("disabled");
							*/
						}, 10000);
					})
				});

					//$('#formValidate').empty().append($('<h3 class="success">gracias<h3>'));	
				},
				success: function (data) {
					$('.mostrar').html(data); // muestra el popup
					console.log(data);

					
				},
				error: function(data){
					/*
					* Se ejecuta si la peticón ha sido erronea
					* */
					console.log(data);
					
					alert("Problemas al tratar de enviar el formulario");
				}

			});
			return false;
		});

	});

	$(function () {
		$('#formValidate').submit(function () {

			$.ajax({
				url: URLprotocol+"//"+URLdomain+"/sendcliente.php", 
			/*	url: 'sendcliente.php', */
				type: 'POST',
				data: $("#formValidate").serialize(),
				success: function (data) {
					console.log(data);
				}
			});
			return false;
		});
	});


});
