import api from './api';


class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]');
        this.cardboxEl = document.getElementById('divlista');

        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true) {
        if (loading === true) {
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando'));
            loadingEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEl);
        } else {
            document.getElementById('loading').remove();
        }
    };

    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if (repoInput.length === 0)
            return;

        this.setLoading();

        try {
            const response = await api.get(`api/${repoInput}`);
            
            for (let i = 0; i < response.data.length; i++) {
                const { nome, sobrenome, telefone, endereco:{ logradouro, numero, complemento, cidade, estado, cep } } = response.data[i];

                this.repositories.push({
                    nome,
                    sobrenome,
                    telefone,
                    logradouro,
                    numero,
                    complemento,
                    cidade,
                    estado,
                    cep,
                });
            }

            this.inputEl.value = '';
            this.render();
        } catch (err) {
            console.log(err);
            console.log('O repositório não existe!');
        }

        this.setLoading(false);
    }
    render() {
        this.cardboxEl.innerHTML = '';

        this.repositories.forEach(repo => {
            // let imgEl = document.createElement('img');
            // imgEl.setAttribute('src', repo.avatar_url);

            let cardbox = document.createElement('div');
            cardbox.setAttribute('class','card');

            let cardboximg = document.createElement('img');
            cardboximg.setAttribute('class','card-img-top');
            cardboximg.setAttribute('src','./img_avatar2.png');

            let cardbody = document.createElement('div');
            cardbody.setAttribute('class','card-body');

            let cardboxtitle = document.createElement('strong');
            cardboxtitle.setAttribute('class','card-tile');
            cardboxtitle.appendChild(document.createTextNode(`${repo.nome} ${repo.sobrenome}`));

            let cardboxtext = document.createElement('p');
            cardboxtext.setAttribute('class','card-text');
            cardboxtext.appendChild(document.createTextNode(`Endereço: ${repo.logradouro} Número: ${repo.numero}\n`));

            let cardboxtextcomplemento = document.createElement('p');
            cardboxtextcomplemento.appendChild(document.createTextNode(`Complemento: ${repo.complemento}`));
            cardboxtext.appendChild(cardboxtextcomplemento);

            let cardboxbutton = document.createElement('a');
            cardboxbutton.setAttribute('class','btn btn-primary');
            cardboxbutton.appendChild(document.createTextNode('Go somewhere'));

            cardbody.appendChild(cardboxtitle);
            cardbody.appendChild(cardboxtext);
            cardbody.appendChild(cardboxbutton);

            cardbox.appendChild(cardboximg);
            cardbox.appendChild(cardbody);

            this.cardboxEl.appendChild(cardbox);

        });
    };
}

new App();