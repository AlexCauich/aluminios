$(document).ready(function () {

    console.log("jQuery funciona");
    fetchJob();

    $('#register-form').submit(function (e) {
        const postDate = {
            name_job: $('#name_job').val(),
            name_service: $('#name_service').val(),
            phone: $('#phone').val(),
        };

        $.post('server/register.php', postDate, function(resp) {
            console.log(resp);
            fetchJob();
            $('#register-form').trigger('reset');
        });

        e.preventDefault();
        
    });

    function fetchJob() {
        $.ajax({
            url: 'server/register-list.php',
            type: 'GET',
            success: function(resp) {
                let registers = JSON.parse(resp);
                let template = '';
                registers.forEach(register => {
                    template += `
                    <tr datoID=${register.id_register}>
                        <td>${register.id_register}</td>
                        <td>${register.name_job}</td>
                        <td>${register.name_service}</td>
                        <td>${register.phone}</td>
                        <td>
                            <button class="comment-item btn btn-warning">Editar</button>
                            <button class="comment-delete btn btn-danger">Borrar</button>
                            <button class="comment-delete btn btn-success">Ver</button>
                        </td>
                    </td>

                    `
                });
                $('#list').html(template);
            }
        })
    }

});