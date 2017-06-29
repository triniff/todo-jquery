$(document).ready(function(){
 	$.fn.enterKey = function (fnc) { //funcion para cuando hagas enter se accione lo demas
	    return this.each(function () {
	        $(this).keypress(function (ev) {
	            var keycode = (ev.keyCode ? ev.keyCode : ev.which);
	            if (keycode == '13') {
	                fnc.call(this, ev);
	            }
	        })
	    })
	}
	$("#tarea").enterKey(function (e) {
		$(this).trigger("enterEvent");
		e.preventDefault();
    	var tarea = $("#tarea").val();
		if (tarea == "") {
			alert("Tienes que agregar una tarea");
		}else{
			var nuevaTarea = '<div><input type="checkbox" class="check"/><label>'+ tarea +'</label> <button class="remove btn" > Eliminar </button> </div>';
			$(".tareas-agregadas").append(nuevaTarea); //agregando elemento a la lista
			$("#tarea").val(""); //limpiando input
		}
		$(".remove").click(function(){ //Eliminando tareas
			$(this).parent("div").remove();
		})
		$( "input" ).click(function(){ //Cuando esta completada se pasa a la otra clase
			var padre = $(this).parent("div");
			$(".tareas-completadas").append(padre);			
		} )
	})
	

})