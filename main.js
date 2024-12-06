$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();

        const tarefa = $('#nova-tarefa').val().trim();

        if (tarefa) {

            const novoItem = $(`
                <li>
                    <div class="tarefa">
                        <p>${tarefa}</p>
                    </div>
                </li>
            `);

            novoItem.hide().appendTo('ul').fadeIn();

            $('#nova-tarefa').val('');
        }
    });

    $('ul').on('click', '.tarefa', function() {
        $(this).toggleClass('riscada');
    });
});
