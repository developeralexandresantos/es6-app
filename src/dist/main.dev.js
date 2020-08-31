"use strict";

var _api = _interopRequireDefault(require("./api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);

    this.repositories = [];
    this.formEl = document.getElementById('repo-form');
    this.inputEl = document.querySelector('input[name=repository]');
    this.cardboxEl = document.getElementById('divlista');
    this.frmsearchEl = document.getElementById('frmSearch');
    this.searchinputEl = document.getElementById('searchInput');
    this.registerHandlers();
  }

  _createClass(App, [{
    key: "registerHandlers",
    value: function registerHandlers() {
      var _this = this;

      this.formEl.onsubmit = function (event) {
        return _this.addRepository(event);
      };

      this.frmsearchEl.onsubmit = function (event) {
        return _this.searchRepository(event);
      };
    }
  }, {
    key: "setLoading",
    value: function setLoading() {
      var loading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (loading === true) {
        var loadingEl = document.createElement('span');
        loadingEl.appendChild(document.createTextNode('Carregando'));
        loadingEl.setAttribute('id', 'loading');
        this.formEl.appendChild(loadingEl);
      } else {
        document.getElementById('loading').remove();
      }
    }
  }, {
    key: "searchRepository",
    value: function () {
      var _searchRepository = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(event) {
        var searchInput, response, _response$data, nome, sobrenome, telefone, _response$data$endere, logradouro, numero, complemento, cidade, estado, cep;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                searchInput = this.searchinputEl.value;

                if (!(searchInput === 0)) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                _context.prev = 4;
                _context.next = 7;
                return _api["default"].get("api/findByName?nome=".concat(searchInput));

              case 7:
                response = _context.sent;
                _response$data = response.data, nome = _response$data.nome, sobrenome = _response$data.sobrenome, telefone = _response$data.telefone, _response$data$endere = _response$data.endereco, logradouro = _response$data$endere.logradouro, numero = _response$data$endere.numero, complemento = _response$data$endere.complemento, cidade = _response$data$endere.cidade, estado = _response$data$endere.estado, cep = _response$data$endere.cep;
                this.repositories.push({
                  nome: nome,
                  sobrenome: sobrenome,
                  telefone: telefone,
                  logradouro: logradouro,
                  numero: numero,
                  complemento: complemento,
                  cidade: cidade,
                  estado: estado,
                  cep: cep
                });
                this.searchinputEl.value = '';
                this.render();
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](4);
                console.log('Usuário não localizado.');

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 14]]);
      }));

      function searchRepository(_x) {
        return _searchRepository.apply(this, arguments);
      }

      return searchRepository;
    }()
  }, {
    key: "addRepository",
    value: function () {
      var _addRepository = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(event) {
        var repoInput, response, i, _response$data$i, nome, sobrenome, telefone, _response$data$i$ende, logradouro, numero, complemento, cidade, estado, cep;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                repoInput = this.inputEl.value;

                if (!(repoInput.length === 0)) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return");

              case 4:
                this.setLoading();
                _context2.prev = 5;
                _context2.next = 8;
                return _api["default"].get("api/".concat(repoInput));

              case 8:
                response = _context2.sent;

                for (i = 0; i < response.data.length; i++) {
                  _response$data$i = response.data[i], nome = _response$data$i.nome, sobrenome = _response$data$i.sobrenome, telefone = _response$data$i.telefone, _response$data$i$ende = _response$data$i.endereco, logradouro = _response$data$i$ende.logradouro, numero = _response$data$i$ende.numero, complemento = _response$data$i$ende.complemento, cidade = _response$data$i$ende.cidade, estado = _response$data$i$ende.estado, cep = _response$data$i$ende.cep;
                  this.repositories.push({
                    nome: nome,
                    sobrenome: sobrenome,
                    telefone: telefone,
                    logradouro: logradouro,
                    numero: numero,
                    complemento: complemento,
                    cidade: cidade,
                    estado: estado,
                    cep: cep
                  });
                }

                this.inputEl.value = '';
                this.render();
                _context2.next = 18;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](5);
                console.log(_context2.t0);
                console.log('O repositório não existe!');

              case 18:
                this.setLoading(false);

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[5, 14]]);
      }));

      function addRepository(_x2) {
        return _addRepository.apply(this, arguments);
      }

      return addRepository;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.repositories.forEach(function (repo) {
        // let imgEl = document.createElement('img');
        // imgEl.setAttribute('src', repo.avatar_url);
        var cardbox = document.createElement('div');
        cardbox.setAttribute('class', 'card');
        cardbox.setAttribute('id', 'card');
        var cardboximg = document.createElement('img');
        cardboximg.setAttribute('class', 'card-img-top');
        cardboximg.setAttribute('src', './img_avatar2.png');
        var cardbody = document.createElement('div');
        cardbody.setAttribute('class', 'card-body');
        var cardboxtitle = document.createElement('strong');
        cardboxtitle.setAttribute('class', 'card-tile');
        cardboxtitle.appendChild(document.createTextNode("".concat(repo.nome, " ").concat(repo.sobrenome)));
        var cardboxtext = document.createElement('p');
        cardboxtext.setAttribute('class', 'card-text');
        cardboxtext.appendChild(document.createTextNode("Endere\xE7o: ".concat(repo.logradouro, " N\xFAmero: ").concat(repo.numero, "\n")));
        var cardboxtextcomplemento = document.createElement('p');
        cardboxtextcomplemento.appendChild(document.createTextNode("Complemento: ".concat(repo.complemento)));
        cardboxtext.appendChild(cardboxtextcomplemento);
        var cardboxbutton = document.createElement('a');
        cardboxbutton.setAttribute('class', 'btn btn-primary');
        cardboxbutton.appendChild(document.createTextNode('Go somewhere'));
        cardbody.appendChild(cardboxtitle);
        cardbody.appendChild(cardboxtext);
        cardbody.appendChild(cardboxbutton);
        cardbox.appendChild(cardboximg);
        cardbox.appendChild(cardbody);

        _this2.cardboxEl.appendChild(cardbox);

        console.log(_this2.cardboxEl);
      });
    }
  }]);

  return App;
}();

new App();