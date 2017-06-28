$(document).ready(function(){
	$(".agregar").click(function(){
		var tarea = $("#tarea").val();
		$(".lista-tareas").prepend("<ul>");
		$("ul").addClass('task');
		$(".task").prepend("<li>"+ tarea +"</li>"); //agregando elemento a la lista
			$("#tarea").val(""); //limpiando input
	})
})