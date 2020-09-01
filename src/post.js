import api from './api';


class Post {
    constructor() {
        this.repositories = [];

        // this.formularioCadastroEl = document.getElementById('cadastrofuncionario');

        this.registerPostHandlers();
    }

    registerPostHandlers() {
        // this.formularioCadastroEl.onsubmit = event => this.saveToRepository(event);
    }

    // setLoading(loading = true) {
    //     if (loading === true) {
    //         let loadingEl = document.createElement('img');
    //         loadingEl.setAttribute('src', './h6viz.gif');
    //         loadingEl.setAttribute('id', 'loading');
    //         loadingEl.style.display = 'block';
    //         loadingEl.style.marginLeft = 'auto';
    //         loadingEl.style.marginRight = 'auto';

    //         this.formEl.appendChild(loadingEl);
    //     } else {
    //         document.getElementById('loading').remove();
    //     }
    // };

    async saveToRepository(event) {
        event.preventDefault();
        alert('Está funcionando!');
    }

}

new Post();