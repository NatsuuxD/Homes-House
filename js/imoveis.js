const imoveisDB = [
    {
        "id": 1,
        "url_foto": "img/1.jpg",
        "nome": "Sobrado lindo",
        "cidade": "Piracicaba",
        "estado": "São paulo",
        "favorito": false,
        "lugar": "casa",
        "adicionais": [
            {
                "chave": "Quartos disponiveis",
                "valor": 6
            },
            {
                "chave": "Piscina",
                "valor": "Sim"
            }
        ]
    },

    {
        "id": 2,
        "url_foto": "img/2.jpg",
        "nome": "Kitnet",
        "cidade": "Piracicaba",
        "estado": "São paulo",
        "favorito": false,
        "lugar": "apartamento",
        "adicionais":[
            {
                "chave": "Banheiro",
                "valor": 6
            }

        ]
    },


    {
        "id": 3,
        "url_foto": "img/3.jpg",
        "nome": "Casamata",
        "cidade": "Piracicaba",
        "estado": "São paulo",
        "favorito": false,
        "lugar": "casa",
        "adicionais":[
            {
                "chave": "Quartos",
                "valor": 10
            },
            {
                "chave": "Quintal",
                "valor": "Muito grande"
            },
            {
                "chave": "Arvores",
                "valor": "bastante"
            }
        ]
    },

    {
        "id": 4,
        "url_foto": "img/4.jpg",
        "nome": "Praiana",
        "cidade": "Sumare",
        "estado": "Bahia",
        "favorito": false,
        "lugar": "casa",
        "adicionais":[
            {
                "chave": "Quartos",
                "valor": 8
            },
            {
                "chave": "Varanda",
                "valor": "Muito barato"
            },
            {
                "chave": "Arvores",
                "valor": "bastante"
            }
        ]
    },

    {
        "id": 5,
        "url_foto": "img/5.jpg",
        "nome": "Casa moderna",
        "cidade": "Pernambuco",
        "estado": " Brasilia",
        "favorito": false,
        "lugar": "casa",
        "adicionais":[
            {
                "chave": "Quartos",
                "valor": 7
            },
            {
                "chave": "Lavanderia",
                "valor": "Muito boa"
            },
            {
                "chave": "Piscina",
                "valor": "Funda"
            }
        ]
    },
    {
        "id": 6,
        "url_foto": "img/6.jpg",
        "nome": "Casa chique",
        "cidade": "Salvador",
        "estado": "São paulo",
        "favorito": false,
        "lugar": "casa",
        "adicionais":[
            {
                "chave": "Quartos",
                "valor": 12
            },
            {
                "chave": "Quintal",
                "valor": "Muito grande"
            },
            {
                "chave": "2 piscina",
                "valor": "medio"
            }
        ]
    },
    {
        "id": 7,
        "url_foto": "img/7.jpg",
        "nome": "Casa bem vibes",
        "cidade": "Piracicamirim",
        "estado": "São vincete",
        "favorito": false,
        "lugar": "casa",
        "adicionais":[
            {
                "chave": "Quartos",
                "valor": 4
            },
            {
                "chave": "Quintal",
                "valor": "Muito grande"
            },
            {
                "chave": "Arvores",
                "valor": "bastante"
            }
        ]
    },

    {
        "id": 8,
        "url_foto": "img/8.jpg",
        "nome": "Casa futurista",
        "cidade": "Pira",
        "estado": "paulo",
        "favorito": false,
        "lugar": "casa",
        "adicionais":[
            {
                "chave": "Quartos",
                "valor": 6
            },
            {
                "chave": "Quintal",
                "valor": "Muito grande"
            },
            {
                "chave": "Parquinho",
                "valor": "grande"
            }
        ]
    },
    {
        "id": 9,
        "url_foto": "img/9.jpg",
        "nome": "Casa na cidade",
        "cidade": "Piracicaba",
        "estado": "São paulo",
        "favorito": false,
        "lugar": "apartamento",
        "adicionais":[]
    },
    {
        "id": 10,
        "url_foto": "img/10.jpg",
        "nome": "Casa no meio do nada",
        "cidade": "Charqueada",
        "estado": "Uberlandia",
        "favorito": false,
        "lugar": "casa",
        "adicionais":[
            {
                "chave": "Quartos",
                "valor": 7
            },
            {
                "chave": "Quintal",
                "valor": "Muito grande"
            },
            {
                "chave": "Piscina",
                "valor": "2"
            }
        ]
    }

]

function buscarTodosIoveis() {
    return imoveisDB
}

function buscarImovelPeloId(id) {
    for (let i=0; i < imoveisDB.length; i ++) {
        const imv = imoveisDB[i];
        
        if (imv.id == id) {
            return imv
        }
    }
}


