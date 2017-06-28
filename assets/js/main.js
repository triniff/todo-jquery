$(document).ready(function(){
	$(".agregar").click(function(){
		var tarea = $("#tarea").val();
		var id = "test5";
		$(".tareas-agregadas").append('<div><input type="checkbox" class="check"'+ 'id="test5"' +'/><label for="test5">'+ tarea +'</label></div>'); //agregando elemento a la lista
			$("#tarea").val(""); //limpiando input

		/*	var container = $('#tareas-agregadas');
			var inputs = container.find('input');
		   	var id = inputs.length+1;

		   $('#tareas-agregadas').append('<input />', { type: 'checkbox', id: 'cb'+id, value:tarea });
		   $('#tareas-agregadas').append('<label />', { 'for': 'cb'+id, text: tarea });*/
	})
})