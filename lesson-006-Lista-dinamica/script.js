$(document).ready(function(){
    //Recebendo valor
    $('#button').click(function(){
    	//Criando váriavel e add valor do input.
        var toAdd = $('input[name=checkListItem]').val();
        //Add valor da váriavel na div list.
        $('.list').append("<div class='item'>"+toAdd+"</div>");
    });
    //Removendo itens.
    $(document).on('click','.item',function(){
        $(this).remove();
    });
});