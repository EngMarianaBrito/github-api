$(document).ready(function () {
    $.ajax({ 
        type: 'GET', 
        url:  BASE_URL + 'orgs/grupotesseract/public_members', 
        dataType: 'json',
        success: function (data) {       
            let members = []; 
            $.each(data, function(index, element) {
               members[index] = 
               `
               <div id="lista">
                    <div id="${element.login}" class="membro">
                        <img src="${element.avatar_url}"/>
                        <strong>${element.login}</strong>
                        <a class="myButton" href="user.html?user=${element.login}">Ver Perfil</a>
                    </div>
               </div>
                `;
            });
            for(var i = 0;members.length > i; i++) {
                $('.list').append(members[i]);
            } 

        }
        
    });
});