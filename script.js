fetch('https://913ab826-ffc2-48c3-8904-f61880740555-00-3nbghcc7z12rf.kirk.replit.dev/db')
    .then(res => res.json())
    .then(dados => {
        let ongsHtml = '';
        for(let i = 0; i < dados.ongs.length; i++){

            let nome = dados.ongs[i].nome;
            let descricao = dados.ongs[i].descricao;
            let local = dados.ongs[i].local;
            let logo = dados.ongs[i].logo;
            let site = dados.ongs[i].site;

            ongsHtml += `
            <div class="col">
                <div class="card h-100 mx-4 mx-sm-2">
                    <img src="${logo}" class="card-img-top px-3" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${nome}</h5>
                        <p class="card-text"><span class="card-subtitle">O que faz?</span> ${descricao}</p>
                        <p class="card-text"><span class="card-subtitle">Atuação:</span> ${local}</p>
                    </div>
                    <a href="${site}" class="btn text-light card-footer">
                        Visite
                    </a>
                </div>
            </div>
            `;
        }

        document.getElementById('card-container').innerHTML = ongsHtml;

    })