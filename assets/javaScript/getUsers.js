//Detalhamento do usuário

$(document).ready(function () {
    var url = new URL(window.location);
    var user = url.searchParams.get("user");

    $.ajax({ 
        type: 'GET', 
        url:  BASE_URL + 'users/' + user , 
        dataType: 'json',
        success: function (data) { 
            var members = [];
            var dataFormatada = data.created_at.replace(/(\d*)-(\d*)-(\d*).*/, '$3-$2-$1');
            members = `<h1>Nome:</h1>${data.name}(@${data.login})
              
            <img src="${data.avatar_url}"/>
             <p>Criado em : ${dataFormatada}</p>
             <h1>Seguidores:</h1>
            <h2>${data.followers}</h2>
            <h1>Repositorios:</h1>
            <h2>${data.public_repos}</h2>
            `; 
            console.log(members);
    
                $('.user').append(members);        
        }     
    });
});         