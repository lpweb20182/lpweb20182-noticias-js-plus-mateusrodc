var noticias = [];

function atualizarLista(noticia) {
    var lista = document.getElementById('noticias-recentes-list');
    var li = document.createElement('li');
    var data_noticia = new Date(Date.parse(noticia.data));
    var data_atual = new Date().getTime();
    li.setAttribute('id', 'noticia-' + noticia.id);
    li.setAttribute('class', 'noticia');
    if (data_noticia <= data_atual && data_noticia != null){
        li.innerHTML = '<p class="titulo" onclick="mostrarNoticia(' + noticia.id + ')">'
            + noticia.titulo
            + '</p>'
            + '<p class="conteudo">'
            + noticia.conteudo
            + '<br>'
            + noticia.nome
            + '<br>'
            + noticia.email
            + '<br>'
            + noticia.data
            + '<br>'
            + '<span>------------------</span>'
            + '<br>'
            + '<button onclick="ocultarNoticia(' + noticia.id + ')">Fechar</button>';
            + '</p>';
        lista.appendChild(li);
    }
}

function salvar(form) {
    var titulo = document.getElementById('frm-titulo').value;
    var conteudo = document.getElementById('frm-conteudo').value;
    var nome = document.getElementById('frm-nome').value;
    var email = document.getElementById('frm-email').value;
    var data = document.getElementById('frm-data').value;
    var noticia = {
        id: noticias.length,
        titulo: titulo,
        conteudo: conteudo,
        nome: nome,
        email: email,
        data: new Date(Date.parse(data))
    };
    noticias.push(noticia);
    noticias.sort((noticia1,noticia2) => noticia2.data-noticia1.data);
    console.log(noticias)
    var myList = document.getElementById('noticias-recentes-list');
    myList.innerHTML = '';
    
    for (var i = 0; i < noticias.length; i++){
        atualizarLista(noticias[i]);
    }
    //atualizarLista(noticia);
    form.reset();
}

function mostrarNoticia(id) {
    var li = document.getElementById('noticia-' + id);
    for (var i = 0; i < li.childNodes.length; i++) {
        var node = li.childNodes[i];
        if (node.getAttribute('class') == 'conteudo') {
            node.setAttribute('style', 'display:inline');
        }
    }
}

function ocultarNoticia(id) {
    var li = document.getElementById('noticia-' + id);
    for (var i = 0; i < li.childNodes.length; i++) {
        var node = li.childNodes[i];
        if (node.getAttribute('class') == 'conteudo') {
            node.setAttribute('style', 'display:none');
        }
    }
}