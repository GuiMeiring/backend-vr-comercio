const express = require('express');
const server = express();
require('dotenv');

const port = process.env.PORT || 3000;

const products = [
    {
        id: 1,
        name: "Oculos de Realidade Virtual Oculus Quest 2, 256GB, Branco",
        price: 6599.92,
        mark:"Oculos",
        portion: 7764.61,
        description: {
            color: "Branco",
            particulars:"Hardware de próximo nível - Faça com que cada movimento conte com um processador extremamente rápido e nossa tela de mais alta resolução Jogos All-In-One - Com compatibilidade com versões anteriores, você pode explorar novos títulos e antigos favoritos na extensa biblioteca de conteúdo da Quest Entretenimento imersivo - obtenha o melhor lugar da casa para shows ao vivo, filmes inovadores, eventos exclusivos e muito mais Configuração fácil - basta abrir a caixa, configurar o aplicativo do smartphone e pular para a realidade virtual. Nenhum PC ou console necessário. Requer acesso sem fio à Internet e o aplicativo Oculus (download gratuito) para configurar o dispositivo Tela Premium - capture todos os detalhes com uma tela impressionante que apresenta 50% mais pixels do que a Quest original Controle final - controladores Oculus Touch redesenhados transportam seus movimentos diretamente para a RV com controles intuitivos Compatível com PC VR - Entre em incríveis títulos Oculus Rift conectando um cabo Oculus Link a um PC de jogos compatível. Oculus Link Cable vendido separadamente Som cinematográfico 3D - Ouça em todas as direções com alto-falantes integrados que oferecem áudio posicional 3D cinematográfico",
            display:"LCD",
            vision: "Visão de 100 graus",
            ram:"6 GB",
            storage:"256 GB",
            resolution:"1.832 x 1.920 pixels, 90 Hz"
        }
    },
    {
        id: 2,
        name: "Oculos de Realidade Virtual Oculus GO, 512GB, Cinza",
        price: 11646.97,
        mark:"Oculus",
        portion: 14348.28,
        description: {
            color: "Cinza",
            particulars:"HARDWARE - Não requer PC - Configure o aplicativo Oculus para celular e explore, assista e jogue em realidade virtual imediatamente. Não é necessário ter fios nem um computador.RASTREAMENTO - Três graus de liberdade - Com 3DoF, o headset rastreia os movimentos da cabeça e os converte em realidade virtual para visualização em 360°. É recomendado jogar sentado. Não é necessário usar sensores externos. CONTROLES - Controle único - Esse controle leve reconhece o movimento das mãos e as ações de apontar e clicar, aperfeiçoando a navegação na realidade virtual.ALÇA PARA CABEÇA - Alça macia - Fácil de ajustar e projetada para ser imperceptível. A alça macia oferece conforto e leveza para todas as pessoas.SOM - Áudio espacial - Spatial audio cinematográfico integrado diretamente ao headset, permitindo que você ouça tudo ao seu redor. A porta de áudio de 3,5 mm permite jogar com ou sem fones de ouvido",
            display:"LCD",
            processor: "Visão de 101 graus",
            ram:"6 GB",
            storage:"128 GB",
            resolution:"1280 x 1440 pixels, 90 Hz"

        }
    },
    {
        id: 3,
        name: "Oculos de Realidade Virtual HTC Vive Cosmos Elite Headset, Preto",
        price: 9199.92,
        mark:"HTC",
        portion: 10823.44,
        description: {
            color: "Preto",
            particulars:"Experimente a melhor qualidade de imersão com maior resolução e fidelidade de lente no mais alto conforto.Jogue e mova-se com segurança com rastreamento de estação base extremamente preciso. (* Estações-base vendidas separadamente.)Flexível e robusto, personalize seu VIVE Cosmos Elite com placas frontais e add-ons.",
            display:"LCD",
            vision: "Visão 110 graus",
            ram:"4 GB de RAM ou mais",
            storage:"256 GB",
            resolution:"1440 x 1700 pixels por olho (2880 x 1700 pixels combinados), 90 Hz"

        }
    },
    {
        id: 4,
        name: "Oculos de Realidade Virtual Oculos Quest 3, Branco",
        price: 4487.67,
        mark:"Oculos",
        portion: 5464.20,
        description: {
            color: "Branco",
            particulars:"Hardware de próximo nível - Faça com que cada movimento conte com um processador extremamente rápido e nossa tela de mais alta resolução Jogos All-In-One - Com compatibilidade com versões anteriores, você pode explorar novos títulos e antigos favoritos na extensa biblioteca de conteúdo da Quest Entretenimento imersivo - obtenha o melhor lugar da casa para shows ao vivo, filmes inovadores, eventos exclusivos e muito mais Configuração fácil - basta abrir a caixa, configurar o aplicativo do smartphone e pular para a realidade virtual. Nenhum PC ou console necessário. Requer acesso sem fio à Internet e o aplicativo Oculus (download gratuito) para configurar o dispositivo Tela Premium - capture todos os detalhes com uma tela impressionante que apresenta 50% mais pixels do que a Quest original Controle final - controladores Oculus Touch redesenhados transportam seus movimentos diretamente para a RV com controles intuitivos Compatível com PC VR - Entre em incríveis títulos Oculus Rift conectando um cabo Oculus Link a um PC de jogos compatível. Oculus Link Cable vendido separadamente Som cinematográfico 3D - Ouça em todas as direções com alto-falantes integrados que oferecem áudio posicional 3D cinematográfico.",
            display:"LCD",
            vision: "Visão de 110 graus",
            ram:"6 GB",
            storage:"128 GB",
            resolution:"1440 x 1700 pixels por olho (2880 x 1700 pixels combinados), 120 Hz"

        }
        
    },
    {
        id: 5,
        name: "Oculos de Realidade Virtual Oculus Rift S, Preto",
        price: 9562.41,
        mark:"Oculos",
        portion: 11249.89,
        description: {
            color: "Preto",
            particulars:"Melhor biblioteca de jogos de realidade virtual: exploda, arraste e voe pela melhor biblioteca de jogos de realidade virtual. Oculus Rift S permite que você jogue centenas de jogos e exclusividades já disponíveis na loja Oculus, com muito mais por vir. Óptica aprimorada: Enfrente a concorrência com lentes de última geração e uma tela mais nítida - Ótica aprimorada oferece cores brilhantes, vivas e reduzidas Efeito 'porta de tela'. Design ergonômico: mantenha sua cabeça no jogo graças a uma faixa de cabeça de halo redesenhada com a velocidade em mente - Rift S permanece segura e confortavelmente no lugar com um giro rápido da roda de ajuste, para que possa pegar ou dobrar tome suas reações mais rápidas.Controladores de toque Oculus: seus golpes, arremessos e agarramentos aparecem em RV com precisão intuitiva e realista, transportando suas mãos e gestos direto para o jogo. Rastreamento Oculus Insight: Oculus Insight traduz seus movimentos em RV, não importa para onde você está olhando e fornece rastreamento em escala de sala sem sensores externos.",
            display:"LCD",
            vision: "Visão de 100 graus",
            ram:"8GB",
            storage:"256 GB",
            resolution:"1440 x 1700 pixels por olho (2880 x 1700 pixels combinados), 90 Hz"

        }
    },
    {
        id: 6,
        name: "Oculos de Realidade Virtual PlayStation®VR2, 256GB, Branco",
        price: 4409.99,
        mark:"Sony",
        portion: 4900.99,
        description: {
            color: "Branco",
            particulars:"Experimente a próxima geração de jogos de realidade virtual com imagens 4K HDR impressionantes, jogos que definem o gênero e sensações únicas com o inovador headset PlayStation VR2 e controle PlayStation VR2 Sense™.",
            display:"OLED",
            vision: "Visão de 360 graus",
            ram:"8GB",
            storage:"256 GB",
            resolution:" 2000 x 2040 por olho, 120 Hz"

        }
        
    }
];

server.get('/products', (req, res) => {
    const simplifiedProducts = products.map(product => ({
        id: product.id,
        name: product.name,
        price: product.price,
        mark: product.mark,
        portion: product.portion
    }));
    res.json(simplifiedProducts);
});

server.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(product => product.id === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Produto não encontrado' });
    }
});

server.listen(port, "0.0.0.0", () =>{
    console.info("Servidor rodando na porta " + port);
})
