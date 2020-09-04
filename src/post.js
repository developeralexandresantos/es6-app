import api from './api';

class Post {
    constructor() {
        this.repositories = [];

        this.formularioCadastroEl = document.getElementById('cadastrofuncionario');
        this.mymodal = document.getElementById('mymodal');
        this.btnclosemodalEl = document.getElementById('btnclosemodal');
        this.span = document.getElementsByClassName("close")[0];

        this.registerPostHandlers();
    }

    registerPostHandlers() {
        this.formularioCadastroEl.onsubmit = event => this.saveToRepository(event);
        this.span.onclick = () => mymodal.style.display = "none";
        this.btnclosemodalEl.onclick = () => this.mymodal.style.display = "none";
    }

    async saveToRepository(event) {
        event.preventDefault();
        var formulario = {};
        var elementos = document.querySelectorAll("input, select, textarea");
        let saida = {};
        for (let i = 0; i < elementos.length; i++) {
            const element = elementos[i];
            var name = element.name;
            var value = element.value;
            if (name) {
                formulario[(name)] = value;
            }
        }

        const {nome, sobrenome, telefone, logradouro, numero = 101, 
        complemento = "NA", cidade, estado, cep } = formulario;

        saida = {
            nome,
            sobrenome,
            telefone,
            endereco: {
                logradouro,
                numero,
                complemento,
                cidade,
                estado,
                cep,
            }
        }

        const json = JSON.stringify(saida);

            try{
            const response = await api.post(`api/save`, json, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            this.mymodal.style.display = 'block';

            this.formularioCadastroEl.reset();

        } catch(err) {
            alert('Não foi possível gravar seu registro... tente novamente mais tarde.')
        }
        
    }

}

new Post();