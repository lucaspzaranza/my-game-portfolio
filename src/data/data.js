export const languages = {
  pt: 'pt',
  en: 'en'
};

export const headData = {
  pt: {
    title: 'Portfólio de Lucas Zaranza', 
    subtitle: 'Desenvolvedor de Jogos',
    description: 'Seja bem-vindo ao meu portfólio de jogos.'
  },
  en: {
    title: "Lucas Zaranza's Portfolio",
    subtitle: 'Indie Game Developer',
    description: 'Welcome to my game portfolio.'
  }
};

export const mainMenu = {
  pt: {
    title: 'Menu Principal',
    selectOption: 'Selecione uma opção',
    menuOptions: [
      {
        router: 'about',
        desc: 'Quem sou eu'
      },
      {
        router:'projects',
        desc: 'Meus Projetos'
      },
      {
        router: 'challenges',
        desc: 'Desafios vencidos'
      },
      {
        router: 'contact-info',
        desc: 'Informações para contato'
      }
    ]
  },
  en: {
    title: 'Main Menu',
    selectOption: 'Select an option',
    menuOptions: [
      {
        router: 'about',
        desc: 'About me'
      },
      {
        router:'projects',
        desc: 'My Projects'
      },
      {
        router: 'challenges',
        desc: 'Overcame challenges'
      },
      {
        router: 'contact-info',
        desc: 'Contact info'
      }
    ]
  }
}

export const aboutMe = {
  signature: 'Lucas P. Zaranza',
  pt: {
    title: 'Sobre mim',
    paragraphs: [
      'Desde criança sou apaixonado por jogos de videogame, não perdia uma jogatina de Super Mario ou Mega Man X. ' +
      'Aos 14 anos de idade eu descobri que era possível criar os meus próprios jogos utilizando o RPG Maker 2003. E assim surgiu uma paixão ' +
      'que rapidamente se tornou a busca por uma profissão: o desenvolvimento de jogos surgiu na minha história e nunca mais me deixou.',

      'Em 2013 eu descobri a engine Unity3D, um amigo me emprestou um livro que ensinava a fazer um Space Invaders com ela, e foi aí que eu tive ' +
      'os meus primeiros aprendizados com a engine. Passava horas e mais horas programando. Na época não haviam tantos tutoriais como hoje, então ' +
      'muita coisa eu tentei fazer do zero. Eu praticamente aprendi a programar criando jogos nessa plataforma.',

      'Desde então já se foram 8 anos, com alguns pequenos projetos lançados, freelances, muitas, muitas tentativas de ingressar nessa ' +
      'área de trabalho, e uma série de aprendizados a cada desafio encarado. Sonho um dia poder criar histórias e mundos fantásticos em que as ' +
      'pessoas possam além de se divertir, maravilhar-se com o que estão jogando. Mais que diversão, jogos também são arte.',

      'Muito prazer.'
    ]
  },
  en: {
    title: 'About me',
    paragraphs: [
      "Since I was a child I'm passionate about games, didn't lose a Super Mario or Mega Man X gameplay. At 14 years old I figured out I could " +
      'make my own games using a tool called RPG Maker 2003. And from so on a passion has surged and quickly it became a seek for a career: the game ' +
      'development world has showed up for me and never more got away from my history.',

      "In 2013 I found the Unity3D, a friend borrowed me a Unity beginners book which was teaching how to make a Space Invaders, and that was " +
      "my first learning phase with the engine. I spent hours and hours programming. At that time there wasn't so much tutorials like today, so I tried to " +
      'do many things from scratch. I practically learned how to code making games with this engine.',

      'Since then it has been passed 8 years, with some small projects launched, freelances, many, many attempts to join this work area, and a lot of ' +
      'lessons at each surpassed challenge. My dream is to create stories and wonderful universes where people may not only get fun, but be amazed ' +
      'with the game they are playing, either. More than fun, games are art too.',

      'Nice to meet you.'
    ]
  }
}

export const madeBy = {
  pt: 'Feito por Lucas Zaranza',
  en: 'Made by Lucas Zaranza'
}

export const backBtn = {
  pt: 'Voltar',
  en: 'Back'
}

export const playerStatus = {
  pt: {
    title: 'Ficha técnica',
    unity: 'Unity Engine',
    coding: 'Programação (C#)',
    creativity: 'Criatividade',
    teamWork: 'Trabalho em equipe',
    gameDesign: 'Game Design',
    pixelArt: 'Pixel Art',
    gameAudio: 'Áudio para games'
  },
  en: {
    title: 'Player status',
    unity: 'Unity Engine',
    coding: 'Coding (C#)',
    creativity: 'Creativity',
    teamWork: 'Teamwork',
    gameDesign: 'Game Design',
    pixelArt: 'Pixel Art',
    gameAudio: 'Game Audio'
  }
}

export const playerInfo = {
  email: 'lucaszaranza@gmail.com',
  pt: {
    age: 'Idade: 28 anos',
    local: 'Fortaleza, CE, Brasil',
  },
  en: {
    age: 'Age: 28 years old',
    local: 'Fortaleza, CE, Brazil',
  }
}

export const yearMade = {
  pt: 'Ano',
  en: 'Year'
}

export const myProjectsYears = [
  2014,
  2014,
  2014,
  2015,
  2015,
  2015,
  2017,
  2018,
  2019,
  2020,
  2021,
  2021
]

export const myProjectsData = {
  pt: {
    title: 'Meus Projetos',
    select: 'Escolha um projeto',
    data: [
      {
        id: 1,
        name: 'Protótipo Super Bomberman 4',
        description: [
          "Quando eu comecei a estudar Unity eu achei melhor tentar copiar um jogo que eu já conhecesse bem pra focar apenas na programação e não ter que lidar com detalhes de game design ou de criação de gráficos, já que eu poderia apenas pegá-los na internet. Escolhi então o Super Bomberman 4, um clássico do Super Nintendo que eu jogo até hoje.",
          "Foi com esse projeto que eu tive meus primeiros aprendizados na engine da Unity e em programação, onde eu coloquei em prática pela primeira vez fora da faculdade os conceitos de Orientação a Objeto, Herança, Tipos Genéricos, dentre outras capacidades da linguagem C#.",
          "Pela falta de experiência, esse foi um projeto em que eu levei meses pra conseguir reproduzir pelo menos a mecânica básica do jogador. Eu desconhecia muitas funcionalidades que a Unity já trazia na sua API e acabei tentando reinventar a roda, por exemplo, tentando criar uma forma de detectar a distância da bomba até a parede e medir a extensão das explosões sem saber que ela possuía uma funcionalidade chamada Raycasting em que calculava essa distância pra mim.",
          "Hoje eu olho para o código e percebo também que poderia ter feito as coisas de uma maneira muito mais simples e eficaz, vejo também que a escolha de um game com tantas mecânicas como Super Bomberman 4 não foi uma escolha acertada, deveria ter escolhido algo como Super Mario, mas na época eu não tinha experiência o suficiente nem de programação nem de planejamento pra avaliar essas questões. Foi um tipo de choque, mas extremamente divertido. Eu amei ter feito esse Bomberman."
        ]
      },
      {
        id: 2,
        name: 'Roleta',
        description: [
          "Em 2014 eu tive o meu primeiro emprego numa empresa chamada Touch Midia (não existe mais) onde eu tinha que desenvolver pequenos jogos que seriam utilizados em eventos de empresas, confraternizações. Esse foi o primeiro projeto profissional que eu cheguei a fazer, mas ele nunca foi utilizado em evento algum, já utilizavam outra versão do produto. Tanto que não cheguei nem a implementar nenhum menu, ficou somente a mecânica do jogo.",
          "Infelizmente eu perdi os dados do repositório e do projeto Unity do game."
        ]
      },
      {
        id: 3,
        name: 'Flappy Bird',    
        description: [
          "Fazia pouco tempo do sucesso do Flappy Bird, e eu estava fazendo um tutorial no YouTube para conseguir replicar o FlappyBird na Unity. Pessoal do meu trabalho achou interessante levar essa ideia aos eventos deles.",
          "Fizemos então algumas adaptações na dificuldade do jogo, já que ele é extremamente difícil (e irritante) e adicionamos algumas funcionalidades pra captação dos dados dos clientes. Como eu fiz o game seguindo vídeo tutoriais não tive dificuldades de implementar a mecânica. O que foi mais complicado foi ter criado um sistema de Ranking para gerar competição entre os participantes do evento e distribuição de prêmios.",
        ]
      },
      {
        id: 4,
        name: 'Catch Game',
        description: [
          "Esse foi outro jogo que eu fiz seguindo tutoriais para aprender a utilizar a Unity. Também sem grandes dificuldades, mas mais uma vez precisei implementar interface de menus de rankings e captação de dados dos jogadores, o que deu um pouco mais de trabalho. Por serem eventos que usavam telas touch, precisei encontrar uma forma de abrir o teclado virtual do windows para utilização das telas sem teclado físico.",
        ]
      },
      {
        id: 5,
        name: 'Caça-Níqueis',
        description: [
          "Nessa empresa em que eu trabalhei também tinha um jogo de caça-níqueis que era utilizado para sorteio de prêmios. Ela era programada pra sempre sair algum prêmio como chaveiros, copos, kits de maguiagem, ingressos, etc. Mas a empresa queria utilizar uma versão que fosse mais fácil de customizar os gráficos de acordo com o evento, e que fosse uma solução feita na Unity. Tive então que criar uma do zero.",
          "Esse foi um dos projetos que eu mais gostei de ter feito, levei cerca de dois a três meses pra fazer. Aqui eu já tinha mais experiência com a Unity, então me sentia seguro pra fazer tudo do zero, e assim o fiz. Foi bem interessante pensar na lógica pra movimentar os slots do caça-níqueis e implementá-la. Fazer a mecânica da alavanca foi um pouco difícil também. Depois tive que implementar a customização dos gráficos. É um projeto que me traz bastante satisfação até hoje."
        ]
      },
      {
        id: 6,
        name: 'Jogo da Memória',
        description: [
          "Outro projeto em que eu trabalhei na Touch Midia foi a criação de um jogo da memória. Esse eu cheguei a ver pessoalmente a utilização em eventos, fiquei bastante feliz em ver as pessoas se divertindo com algo que eu criei com tanto empenho.",
          "Foi legal criar a rotação das cartas ao serem clicadas, apesar de bastante simples, ficou realista. Fora isso, tive que criar também sistema de Ranking, captação de dados dos jogadores e sistema de atualização de gráficos assim como no jogo de caça-níqueis."
        ]
      },
      {
        id: 7,
        name: 'Teclado Virtual do Macbook',
        description: [
          "Os projetos da Touch Midia por serem utilizados em telas touch faziam uso constante do teclado virtual do windows, mas eu me sentia incomodado com a forma de implementação dessa funcionalidade. Alguns scripts estavam me dando alguns problemas com a resolução da tela, e eu tinha receio da solução não funcionar daqui a algum tempo e me preocupava pelo fato de não funcionar em sistemas Android. Achei melhor então criar meu próprio teclado virtual simplificado e exportá-lo como um pacote para utilizar em qualquer projeto que eu quisesse.",
          "Na época eu já não trabalhava mais na Touch Midia mas ainda os utilizava pra customização de alguns eventos que precisavam desses jogos. Quis fazer também para testar a utilização de alguns conceitos da Unity, como a utilização dos eventos. ",
          "O projeto foi um sucesso e o utilizo até hoje nesses jogos touch."
        ]
      },
      {
        id: 8,
        name: 'Penosas Strike',
        description: [
          "Em 2017 eu tinha pedido demissão do meu emprego em que trabalhava com .NET pra me dedicar exclusivamente ao desenvolvimento dos meus jogos. Me preparei por alguns meses no final de 2017, e foi nesse período que eu fiz o teclado virtual, em seguida fiz de 2018 um ano sabático em que me dediquei em horário comercial ao desenvolvimento de um indie game.",
          "Enquanto procurava referências para o tipo de jogo eu iria fazer, me deparei com uma fase bônus do jogo Sunset Riders, onde o jogador tinha que mirar nos bandidos para ganhar pontos extras, e pensei: porque não fazer um jogo em que o jogador precise mirar e atirar em alguma coisa, mas em vez de usar um direcional, utilizar o toque do celular? Foi daí que nasceu o conceito do Penosas Strike.",
          "Levei cerca de 9 meses (quase uma gravidez xD) pra fazer o projeto inteiro: programação, arte, adicionar trilha sonora, publicar na Play Store, etc. Foi bastante desafiador em vários momentos. O que foi mais difícil de fazer foi a trajetória que os pombos iriam percorrer na tela: tive que utilizar curvas de bézier e criar splines pra criar essa trajetória. Envolveu noções de cálculo matemático, derivadas, tangentes... tive que pesquisar um script que trazia essa implementação e fiz umas adaptações voltadas ao meu projeto.",
          "Outro desafio foi criar a pixel art do jogo, algo que eu nunca tinha feito na vida. Foi bastante trabalhoso, e tive que adaptar muita coisa por conta da minha inexperiência na área.",
          "Como se não bastasse, nesses 9 meses o meu computador e meu notebook queimaram, e eu fiquei com dores horríveis no meu ombro direito, que é o ombro do braço que eu uso pra escrever e usar o mouse. E como eu não estava trabalhando, não tinha renda pra mandar consertar os computadores nem pra pagar médico pra me tratar do ombro. Sem dúvidas o Penosas Strike foi meu trabalho mais difícil de terminar, mas foi o único que eu consegui chegar até o final e completá-lo.",
          "Um ano depois eu adicionei ao jogo uma skin de natal. Não tinha muita experiência acumulada além da que eu tive ao criar a pixel art padrão do jogo, mas parece que com o tempo que tinha passado eu havia firmado aquela experiência melhor em mim, e por isso senti menos dificuldade com a skin de natal, que ficou até bem melhor que a padrão.",
          "Infelizmente não tive lucro nenhum com o jogo, só prejuízo financeiro, mas pelo menos ficou registrado na minha biografia como a minha maior experiência (frustrada) trabalhando na indústria de	jogos."
        ]
      },
      {
        id: 9,
        name: 'Math Factory',
        description: [
          "Depois do fracasso do Penosas Strike eu caí na real de que precisava arrumar um emprego e pagar as contas. Deixei os jogos por um tempo e fui trabalhar numa escola como cuidador de uma criança especial. Eu o ajudava a fazer as lições, a prestar atenção na aula, tirava suas dúvidas, levava ao banheiro... era como que o pai da criança em horário escolar. Não tinha nada a ver comigo, mas foi o que eu consegui pra pagar as contas e ajudar em casa.",
          "A criança tinha muitas dificuldades com matemática, que é a minha matéria preferida, e eu sempre gostei de ensinar os assuntos que eu domino. Mas percebi que ensiná-lo da forma tradicional não surtiria efeito, e vi também que ele amava jogos de computador. Resolvi então unir tudo isso numa ideia só e criei uma solução gamificada para ensiná-lo a realizar as operações básicas, como adição, subtração, multiplicação e divisão. ",
          "Tirei o mês de Julho, mês que eu estava de férias, pra fazer um protótipo do jogo. Tive bastante trabalho pra fazer o gerenciamento dos slots ao inserir um novo número, e percebi que talvez a Unity não fosse a melhor ferramenta pra desenvolver aquele tipo de mecânica que envolva mais elementos de UI que elementos de física, talvez um framework JavaScript como o React fosse mais adequado. Vi também que pela altura do ano, talvez a minha solução não fosse ser tão útil para a criança, tendo em vista que ela iria se deparar com assuntos mais avançados que soma e subtração na matemática, apesar das dúvidas dela estarem nesse nível mais elementar. Então resolvi deixar o jogo como estava somente com a adição e subtração.",
          "Nas poucas vezes que usei o jogo com ele, percebi que foi útil sim, mas não sei dizer se o ajudou a entender como funcionam as operações. Quem sabe se eu tivesse detalhado mais, colocado cores, animações, mais elementos visuais, ele tivesse entendido melhor. De qualquer forma, gostei bastante do resultado e da ideia geral. Ensinar matemática de uma forma gamificada é algo que me interessa bastante, que eu acho que consigo fazer bem, e tenho em mente em algum momento da minha vida eu trabalhar com isso."
        ]
      },
      {
        id: 10,
        name: 'Doom of The Penosas',
        description: [
          "Eiiitaaa Mainhaaa!! Esse Lorem ipsum é só na sacanageeem!! E que abundância meu irmão viuu!! Assim você vai matar o papai. Só digo uma coisa, Domingo ela não vai! Danadaa!! Vem minha odalisca, agora faz essa cobra coral subir!!! Pau que nasce torto, Nunca se endireita. Tchannn!! Tchannn!! Tu du du pááá! Eu gostchu muitchu, heinn! danadinha! Mainhaa! Agora use meu lorem ipsum ordinária!!! Olha o quibeee! rema, rema, ordinária!.", 
          "Você usa o Lorem Ipsum tradicional? Sabe de nada inocente!! Conheça meu lorem que é Tchan, Tchan, Tchannn!! Txu Txu Tu Paaaaa!! Vem, vem ordinária!! Venha provar do meu dendê que você não vai se arrepender. Só na sacanageeem!! Eu gostchu muitchu, heinn! Eitchaaa template cheio de abundância danadaaa!! Assim você mata o papai hein!? Etâaaa Mainhaaaaa...me abusa nesse seu layout, me gera, me geraaaa ordinária!!! Só na sacanagem!!!! Venha provar do meu dendê Tu du du pááá!."
        ]
      },
      {
        id: 11,
        name: 'Jogo da Cobrinha',
        description: [
          "Eiiitaaa Mainhaaa!! Esse Lorem ipsum é só na sacanageeem!! E que abundância meu irmão viuu!! Assim você vai matar o papai. Só digo uma coisa, Domingo ela não vai! Danadaa!! Vem minha odalisca, agora faz essa cobra coral subir!!! Pau que nasce torto, Nunca se endireita. Tchannn!! Tchannn!! Tu du du pááá! Eu gostchu muitchu, heinn! danadinha! Mainhaa! Agora use meu lorem ipsum ordinária!!! Olha o quibeee! rema, rema, ordinária!.", 
          "Você usa o Lorem Ipsum tradicional? Sabe de nada inocente!! Conheça meu lorem que é Tchan, Tchan, Tchannn!! Txu Txu Tu Paaaaa!! Vem, vem ordinária!! Venha provar do meu dendê que você não vai se arrepender. Só na sacanageeem!! Eu gostchu muitchu, heinn! Eitchaaa template cheio de abundância danadaaa!! Assim você mata o papai hein!? Etâaaa Mainhaaaaa...me abusa nesse seu layout, me gera, me geraaaa ordinária!!! Só na sacanagem!!!! Venha provar do meu dendê Tu du du pááá!."
        ]
      },
      {
        id: 12,
        name: 'Diep.io (Protótipo)',
        description: [
          "Eiiitaaa Mainhaaa!! Esse Lorem ipsum é só na sacanageeem!! E que abundância meu irmão viuu!! Assim você vai matar o papai. Só digo uma coisa, Domingo ela não vai! Danadaa!! Vem minha odalisca, agora faz essa cobra coral subir!!! Pau que nasce torto, Nunca se endireita. Tchannn!! Tchannn!! Tu du du pááá! Eu gostchu muitchu, heinn! danadinha! Mainhaa! Agora use meu lorem ipsum ordinária!!! Olha o quibeee! rema, rema, ordinária!.", 
          "Você usa o Lorem Ipsum tradicional? Sabe de nada inocente!! Conheça meu lorem que é Tchan, Tchan, Tchannn!! Txu Txu Tu Paaaaa!! Vem, vem ordinária!! Venha provar do meu dendê que você não vai se arrepender. Só na sacanageeem!! Eu gostchu muitchu, heinn! Eitchaaa template cheio de abundância danadaaa!! Assim você mata o papai hein!? Etâaaa Mainhaaaaa...me abusa nesse seu layout, me gera, me geraaaa ordinária!!! Só na sacanagem!!!! Venha provar do meu dendê Tu du du pááá!."
        ]
      }
    ]
  },
  en: {
    title: 'My Projects',
    select: 'Select a project',
    data: [
      {
        id: 1,
        name: 'Super Bomberman 4 Prototype',
        description: [
          "When I started to study Unity I thought it'd be better to copy a game I used to know better to focus in programming and I would not have to deal with game design or art stuff issues, since I'd be able to find them on the Internet. I chose then the Super Bomberman 4, a Super Nintendo classic that I like to play until nowadays.",
          "It was with this project that I had my first Unity and computer programming lessons, where I put into practice outside the college environment the concepts of Object Orientation, Inheritance, Generic Types, and other C# features.", 
          "Due the lack of experience, this was a project which it took me a lot of effort and time to make at least the basic player mechanics. I didn't know several Unity API functionalities, and so I ended by trying to reivent the wheel, for example, trying to create a way to return the distance from the bomb to the hit wall and get the explosion extension with it, without noticing Unity has a feature called Raycasting which calculates it to me.",
          "Today I look to the code and realize I should've done things in an easier and better way, I see either choosing a game with so many mechanics like Bomberman wasn't an accurate choice, I should have chosen something like Super Mario, but at that time I had no coding and planning experience enough to evaluate these questions. That was a kind of shock for me... but extremely funny. I loved to do the Bomberman."
        ]
      },
      {
        id: 2,
        name: 'Roulette Game',
        description: [
          "In 2014 I had my first job in a company called Touch Midia (doesn't exist anymore) where I had to develop small games which will be used in corporative events, confraternizations, and so on. This was the first professional game project I've done, but it never came to be used in any event, they were already using another version of the game. I didn't even implement any menu interface, leaving the game mechanics only.",
          'Unfortunately I lost all the repository and the Unity Editor project data.'
        ]
      },
      {
        id: 3,
        name: 'Flappy Bird',    
        description: [
          "The Flappy Bird game were making success by a few time ago, and I was making the game following a YouTube tutorial which was teaching how to do the game in Unity. The guys from my job thought that use this game at the events would be a good deal.",
          "We made then some adaptations on the game difficulty, since it is extremely hard (and annoying!), we've added some features to client contact info captation, and we were ready to go. As the game were made following a tutorial, I had no great dificulties on the game development. The hard part was to create a ranking system to make people contest between them and manage the prize distribution.",
          "Sadly I lost the project repository and Unity project data too."
        ]
      },
      {
        id: 4,
        name: 'Catch Game',
        description: [
          "This was one more game I made following up Unity YouTube tutorials to learn how to use the game engine. I had no great difficulties either, but one more time I needed to implement menu interface and ranking system to client data retrieving, and that gave me a little more work to do. As the events used touch screens, I needed to find a way to open the Windows Virtual Keyboard to use the screens without use a physical keyboard.",
        ]
      },
      {
        id: 5,
        name: 'Slot Machine',
        description: [
          "At the company I worked it had a slot machine game which was used to prize raffling. It was programmed to the player always earn a prize like keychains, cups, make-up kits, tickets, and so on. But the company wanted to used a version of the game which were easier to customize the game graphics acoording to the event, and which was a Unity solution game. I had to create my own slot machine version.",
          "This was one of the projects I appreciated the most the development, it took me two or three months to make. At that time I was more experienced with Unity, so I felt more confident to make it from scratch, and so I did. That was very interesting to think on the logic to move the slots from the machine and implement it. Make the handler movement mechanic was a little bit hard to do too. Later I had to implement the graphic customization, prize amount control, and UI client data retrieving. I liked the result a lot."
        ]
      },
      {
        id: 6,
        name: 'Match Game',
        description: [
          "One more project I had worked on at Touch Midia was the creation of a card matching game. This one I saw with my own eyes people playing it inside an event, I got very proud by seeing people getting fun with something I created with so much effort.",
          "It was cool to create the card flip rotation when they got clicked, despite the simplicity it turned out a quite realistic thing. Beyond that, I had to create the ranking system, player personal data retrieving, and graphics customization just like the slot machine game."
        ]
      },
      {
        id: 7,
        name: 'Macbook Virtual Keyboard ',
        description: [
          "By the fact the Touch Midia projects were used on touch screens, frequently the windows virtual keyboard was necessary to be called inside the projects. But I felt annoyed with the way of using this feature in the games. Some scripts was causing resolution and windowing screen issues, and I've feared the solution will stop working at some point in the future, and I worried because it didn't work on Android systems. I decided to create my own simplified virtual keyboard and export it as a Unity package to reuse in any project I'd wish.",
          "At that time I wasn't working at Touch Midia anymore, but I still used those games to customize on private events. I wanted to make the virtual keyboard too to test the utilization of some Unity concepts like event triggering.",
          "The project was a success and I used it until today on these touch games."          
        ]
      },
      {
        id: 8,
        name: 'Penosas Strike',
        description: [
          "In 2017 I had quit my job where I worked with .NET to focus entirely to the development of my games. I prepared myself for a couple of months at the rest of 2017, and it was at that period I made the virtual keyboard, and so I made 2018 a gap year where I was going to develop my first indie game.",
          "While I searched references to what kind of game I was going to do, I came across with a bonus stage from the game Sunset Riders, where the player must aim the bandits to earn extra points, and thought: why not make a game where the player has to aim and shoot something, but instead using the directional, use the phone touch? It was from there the concept of Penosas Strike has born.",
          "I spent 9 months (almost a baby xD) to craft the entire project: coding, art, soundtrack adding, and launch at PlayStore. That was very challenging at a lot of moments. The hardest thing I had to do was the pigeon navigation track which they will fly on the screen: had to use bezier splines to create these tracks. It envolved math calculus, derivatives and tangents... had to look for a script who makes it to me and I altered some functionalities to fit better on my project.",
          "Another hard task I had to accomplish was drawing the pixel art, somethig I've never done before in my life. It was very difficult, and I had to adjust a lot of things due my lack of experience with pixel art.",
          "As if it were not enough, during those 9 months my notebook and computer got broken, and I got several aches on my right shoulder, which was the side of my body I use to write and move the mouse. As I was not working on a paid job, I had no money to fix my devices and do the shoulder treatment. Without any doubts the Penosas Strike was the hardest and heaviest project I've got to finish, and the only one I've made it to the end and achieved the finish goal.",
          "One year later I added a Christmas Skin to the game. I had no pixel art experience beyond the experience I've earned by making the game art, but it seemed like all that experience had been settle inside me, and because of this I felt less difficult to do the Christmas Skin, which became prettier and better than the default skin."
        ]
      },
      {
        id: 9,
        name: 'Math Factory',
        description: [
         "After the failure of Penosas Strike I stop daydreaming and realized I had to get a job to pay the bills. I left the games for a while and went to work on a school as a disabled child caregiver. I helped him to do the lessons, pay attention os classes, answer his questions, take him to bathroom... I was like the child's father during scholar period. It had no business with me, but that was what I've achieved to pay the bills and help in the house finances." ,
         "The child had many difficulties with math, which is my favorite subject, and I always appreciated to teach people the subjects I'm good at. But I noticed teaching him on the usual way would not make any effect on him, and I noticed he used to like a lot of computer games. So I decided to join all these circunstances into one idea and I created a gamified math teaching solution to teach him how to perform the four math fundamental operations, like addition, subtraction, multiplication and division.",
         "I spent the entire July month, which was when I was in my vacations, to do the game prototype. I had several issues to do the slot management when  the player inputs a new number, and I started to think maybe Unity wasn't a the best tool to develop that kind of mechanic which envolves more UI elements than physics elements, maybe a JavaScript framework like React might fit better. I saw either by the year elapsed time that, maybe my solution wouldn't be that useful to the child, since he was going to learn more advanced subjects than addition and subtraction, despite his doubts still be at that basic level though. So I decided leave the game as it was with addition and subtraction only.",
         "By the few times I used the game with him I noticed it was useful, but I can't say if it helped him to understand how these basic operations work. Who knows if I had detailed more, put more colors, animations and other visual effects he should understood more. Anyway, I liked the result and the big idea of the game concept. Teach math in a gamified way is something which interests me a lot, I think I can do it well, and I have in my mind in any moment of my life I should work with it."
        ]
      },
      {
        id: 10,
        name: 'Doom of The Penosas',
        description: [
          "Cut the cheese hard cheese cheese and biscuits. Goat who moved my cheese cottage cheese macaroni cheese fromage frais everyone loves fromage chalk and cheese. Emmental cauliflower cheese fromage manchego roquefort swiss cream cheese cream cheese. St. agur blue cheese bocconcini everyone loves port-salut emmental cheesy feet when the cheese comes out everybody's happy queso. Caerphilly cottage cheese mozzarella.",
          "Bavarian bergkase emmental cheese strings. Cow roquefort cheese and wine croque monsieur cottage cheese cheese triangles cheddar parmesan. Fondue stilton melted cheese croque monsieur cheesecake the big cheese camembert de normandie cheddar. Monterey jack fondue cheese and biscuits macaroni cheese cheese and biscuits paneer lancashire."
        ]
      },
      {
        id: 11,
        name: 'Snake Game',
        description: [
          "Cut the cheese hard cheese cheese and biscuits. Goat who moved my cheese cottage cheese macaroni cheese fromage frais everyone loves fromage chalk and cheese. Emmental cauliflower cheese fromage manchego roquefort swiss cream cheese cream cheese. St. agur blue cheese bocconcini everyone loves port-salut emmental cheesy feet when the cheese comes out everybody's happy queso. Caerphilly cottage cheese mozzarella.",
          "Bavarian bergkase emmental cheese strings. Cow roquefort cheese and wine croque monsieur cottage cheese cheese triangles cheddar parmesan. Fondue stilton melted cheese croque monsieur cheesecake the big cheese camembert de normandie cheddar. Monterey jack fondue cheese and biscuits macaroni cheese cheese and biscuits paneer lancashire."
        ]
      },
      {
        id: 12,
        name: 'Diep.io Prototype',
        description: [
          "Cut the cheese hard cheese cheese and biscuits. Goat who moved my cheese cottage cheese macaroni cheese fromage frais everyone loves fromage chalk and cheese. Emmental cauliflower cheese fromage manchego roquefort swiss cream cheese cream cheese. St. agur blue cheese bocconcini everyone loves port-salut emmental cheesy feet when the cheese comes out everybody's happy queso. Caerphilly cottage cheese mozzarella.",
          "Bavarian bergkase emmental cheese strings. Cow roquefort cheese and wine croque monsieur cottage cheese cheese triangles cheddar parmesan. Fondue stilton melted cheese croque monsieur cheesecake the big cheese camembert de normandie cheddar. Monterey jack fondue cheese and biscuits macaroni cheese cheese and biscuits paneer lancashire."
        ]
      }
    ]
  }
}

export const myProjectsLinks = [
  {
    id: 1,
    repo: '',
    demo: '',
    youtube: ''
  },
  {
    id: 2,
    repo: '',
    demo: '',
    youtube: ''
  },
  {
    id: 3,
    repo: '',
    demo: '',
    youtube: ''
  },
  {
    id: 4,
    repo: '',
    demo: '',
    youtube: ''
  },
  {
    id: 5,
    repo: 'https://github.com/lucaspzaranza/slot-machine',
    demo: 'https://lucaspzaranza.github.io/slot-machine-page/',
    youtube: ''
  },
  {
    id: 6,
    repo: 'https://github.com/lucaspzaranza/jogo-memoria',
    demo: 'https://lucaspzaranza.github.io/jogo-memoria-page/',
    youtube: ''
  },
  {
    id: 7,
    repo: '',
    demo: '',
    youtube: ''
  },
  {
    id: 8,
    repo: 'https://github.com/lucaspzaranza/penosas-strike',
    demo: 'https://play.google.com/store/apps/details?id=com.SacroCuore.PenosasStrike&hl=pt_BR&gl=US',
    youtube: 'https://www.youtube.com/watch?v=1BwDvgHKpX4'
  },
  {
    id: 9,
    repo: '',
    demo: '',
    youtube: ''
  },
  {
    id: 10,
    repo: '',
    demo: '',
    youtube: ''
  },
  {
    id: 11,
    repo: 'https://github.com/lucaspzaranza/snake-project',
    demo: 'https://lucaspzaranza.github.io/snake-project-page/',
    youtube: ''
  },
  {
    id: 12,
    repo: 'https://github.com/lucaspzaranza/diep.io-challenge',
    demo: '',
    youtube: ''
  }
]  

export const closeBtn = {
  pt: 'Fechar',
  en: 'Close'
}

export const projectLinksButtons = {
  pt: {
    github: 'Meu Github',
    demo: 'Jogar!',
    youtube: 'Youtube'
  },
  en: {
    github: 'My repo',
    demo: 'Play me!',
    youtube: 'Watch me!'
  }
}