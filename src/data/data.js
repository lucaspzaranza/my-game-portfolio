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
          "Em 2014 eu tive o meu primeiro emprego onde eu tinha que desenvolver pequenos jogos que seriam utilizados em eventos de empresas, confraternizações. Esse foi o primeiro projeto profissional que eu cheguei a fazer, mas ele nunca foi utilizado em evento algum, já utilizavam outra versão do produto. Tanto que não cheguei nem a implementar nenhum menu, ficou somente a mecânica do jogo.",
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
          "Eiiitaaa Mainhaaa!! Esse Lorem ipsum é só na sacanageeem!! E que abundância meu irmão viuu!! Assim você vai matar o papai. Só digo uma coisa, Domingo ela não vai! Danadaa!! Vem minha odalisca, agora faz essa cobra coral subir!!! Pau que nasce torto, Nunca se endireita. Tchannn!! Tchannn!! Tu du du pááá! Eu gostchu muitchu, heinn! danadinha! Mainhaa! Agora use meu lorem ipsum ordinária!!! Olha o quibeee! rema, rema, ordinária!.", 
          "Você usa o Lorem Ipsum tradicional? Sabe de nada inocente!! Conheça meu lorem que é Tchan, Tchan, Tchannn!! Txu Txu Tu Paaaaa!! Vem, vem ordinária!! Venha provar do meu dendê que você não vai se arrepender. Só na sacanageeem!! Eu gostchu muitchu, heinn! Eitchaaa template cheio de abundância danadaaa!! Assim você mata o papai hein!? Etâaaa Mainhaaaaa...me abusa nesse seu layout, me gera, me geraaaa ordinária!!! Só na sacanagem!!!! Venha provar do meu dendê Tu du du pááá!."
        ]
      },
      {
        id: 6,
        name: 'Jogo da Memória',
        description: [
          "Eiiitaaa Mainhaaa!! Esse Lorem ipsum é só na sacanageeem!! E que abundância meu irmão viuu!! Assim você vai matar o papai. Só digo uma coisa, Domingo ela não vai! Danadaa!! Vem minha odalisca, agora faz essa cobra coral subir!!! Pau que nasce torto, Nunca se endireita. Tchannn!! Tchannn!! Tu du du pááá! Eu gostchu muitchu, heinn! danadinha! Mainhaa! Agora use meu lorem ipsum ordinária!!! Olha o quibeee! rema, rema, ordinária!.", 
          "Você usa o Lorem Ipsum tradicional? Sabe de nada inocente!! Conheça meu lorem que é Tchan, Tchan, Tchannn!! Txu Txu Tu Paaaaa!! Vem, vem ordinária!! Venha provar do meu dendê que você não vai se arrepender. Só na sacanageeem!! Eu gostchu muitchu, heinn! Eitchaaa template cheio de abundância danadaaa!! Assim você mata o papai hein!? Etâaaa Mainhaaaaa...me abusa nesse seu layout, me gera, me geraaaa ordinária!!! Só na sacanagem!!!! Venha provar do meu dendê Tu du du pááá!."
        ]
      },
      {
        id: 7,
        name: 'Teclado Virtual do Macbook',
        description: [
          "Eiiitaaa Mainhaaa!! Esse Lorem ipsum é só na sacanageeem!! E que abundância meu irmão viuu!! Assim você vai matar o papai. Só digo uma coisa, Domingo ela não vai! Danadaa!! Vem minha odalisca, agora faz essa cobra coral subir!!! Pau que nasce torto, Nunca se endireita. Tchannn!! Tchannn!! Tu du du pááá! Eu gostchu muitchu, heinn! danadinha! Mainhaa! Agora use meu lorem ipsum ordinária!!! Olha o quibeee! rema, rema, ordinária!.", 
          "Você usa o Lorem Ipsum tradicional? Sabe de nada inocente!! Conheça meu lorem que é Tchan, Tchan, Tchannn!! Txu Txu Tu Paaaaa!! Vem, vem ordinária!! Venha provar do meu dendê que você não vai se arrepender. Só na sacanageeem!! Eu gostchu muitchu, heinn! Eitchaaa template cheio de abundância danadaaa!! Assim você mata o papai hein!? Etâaaa Mainhaaaaa...me abusa nesse seu layout, me gera, me geraaaa ordinária!!! Só na sacanagem!!!! Venha provar do meu dendê Tu du du pááá!."
        ]
      },
      {
        id: 8,
        name: 'Penosas Strike',
        description: [
          "Eiiitaaa Mainhaaa!! Esse Lorem ipsum é só na sacanageeem!! E que abundância meu irmão viuu!! Assim você vai matar o papai. Só digo uma coisa, Domingo ela não vai! Danadaa!! Vem minha odalisca, agora faz essa cobra coral subir!!! Pau que nasce torto, Nunca se endireita. Tchannn!! Tchannn!! Tu du du pááá! Eu gostchu muitchu, heinn! danadinha! Mainhaa! Agora use meu lorem ipsum ordinária!!! Olha o quibeee! rema, rema, ordinária!.", 
          "Você usa o Lorem Ipsum tradicional? Sabe de nada inocente!! Conheça meu lorem que é Tchan, Tchan, Tchannn!! Txu Txu Tu Paaaaa!! Vem, vem ordinária!! Venha provar do meu dendê que você não vai se arrepender. Só na sacanageeem!! Eu gostchu muitchu, heinn! Eitchaaa template cheio de abundância danadaaa!! Assim você mata o papai hein!? Etâaaa Mainhaaaaa...me abusa nesse seu layout, me gera, me geraaaa ordinária!!! Só na sacanagem!!!! Venha provar do meu dendê Tu du du pááá!."
        ]
      },
      {
        id: 9,
        name: 'Math Factory',
        description: [
          "Eiiitaaa Mainhaaa!! Esse Lorem ipsum é só na sacanageeem!! E que abundância meu irmão viuu!! Assim você vai matar o papai. Só digo uma coisa, Domingo ela não vai! Danadaa!! Vem minha odalisca, agora faz essa cobra coral subir!!! Pau que nasce torto, Nunca se endireita. Tchannn!! Tchannn!! Tu du du pááá! Eu gostchu muitchu, heinn! danadinha! Mainhaa! Agora use meu lorem ipsum ordinária!!! Olha o quibeee! rema, rema, ordinária!.", 
          "Você usa o Lorem Ipsum tradicional? Sabe de nada inocente!! Conheça meu lorem que é Tchan, Tchan, Tchannn!! Txu Txu Tu Paaaaa!! Vem, vem ordinária!! Venha provar do meu dendê que você não vai se arrepender. Só na sacanageeem!! Eu gostchu muitchu, heinn! Eitchaaa template cheio de abundância danadaaa!! Assim você mata o papai hein!? Etâaaa Mainhaaaaa...me abusa nesse seu layout, me gera, me geraaaa ordinária!!! Só na sacanagem!!!! Venha provar do meu dendê Tu du du pááá!."
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
          "In 2014 I had my first job where I had to develop small games which will be used in corporative events, confraternizations, and so on. This was the first professional game project I've done, but it never came to be used in any event, they were already using another version of the game. I didn't even implement any menu interface, leaving the game mechanics only.",
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
          "Cut the cheese hard cheese cheese and biscuits. Goat who moved my cheese cottage cheese macaroni cheese fromage frais everyone loves fromage chalk and cheese. Emmental cauliflower cheese fromage manchego roquefort swiss cream cheese cream cheese. St. agur blue cheese bocconcini everyone loves port-salut emmental cheesy feet when the cheese comes out everybody's happy queso. Caerphilly cottage cheese mozzarella.",
          "Bavarian bergkase emmental cheese strings. Cow roquefort cheese and wine croque monsieur cottage cheese cheese triangles cheddar parmesan. Fondue stilton melted cheese croque monsieur cheesecake the big cheese camembert de normandie cheddar. Monterey jack fondue cheese and biscuits macaroni cheese cheese and biscuits paneer lancashire."
        ]
      },
      {
        id: 6,
        name: 'Match Game',
        description: [
          "Cut the cheese hard cheese cheese and biscuits. Goat who moved my cheese cottage cheese macaroni cheese fromage frais everyone loves fromage chalk and cheese. Emmental cauliflower cheese fromage manchego roquefort swiss cream cheese cream cheese. St. agur blue cheese bocconcini everyone loves port-salut emmental cheesy feet when the cheese comes out everybody's happy queso. Caerphilly cottage cheese mozzarella.",
          "Bavarian bergkase emmental cheese strings. Cow roquefort cheese and wine croque monsieur cottage cheese cheese triangles cheddar parmesan. Fondue stilton melted cheese croque monsieur cheesecake the big cheese camembert de normandie cheddar. Monterey jack fondue cheese and biscuits macaroni cheese cheese and biscuits paneer lancashire."
        ]
      },
      {
        id: 7,
        name: 'Macbook Virtual Keyboard ',
        description: [
          "Cut the cheese hard cheese cheese and biscuits. Goat who moved my cheese cottage cheese macaroni cheese fromage frais everyone loves fromage chalk and cheese. Emmental cauliflower cheese fromage manchego roquefort swiss cream cheese cream cheese. St. agur blue cheese bocconcini everyone loves port-salut emmental cheesy feet when the cheese comes out everybody's happy queso. Caerphilly cottage cheese mozzarella.",
          "Bavarian bergkase emmental cheese strings. Cow roquefort cheese and wine croque monsieur cottage cheese cheese triangles cheddar parmesan. Fondue stilton melted cheese croque monsieur cheesecake the big cheese camembert de normandie cheddar. Monterey jack fondue cheese and biscuits macaroni cheese cheese and biscuits paneer lancashire."
        ]
      },
      {
        id: 8,
        name: 'Penosas Strike',
        description: [
          "Cut the cheese hard cheese cheese and biscuits. Goat who moved my cheese cottage cheese macaroni cheese fromage frais everyone loves fromage chalk and cheese. Emmental cauliflower cheese fromage manchego roquefort swiss cream cheese cream cheese. St. agur blue cheese bocconcini everyone loves port-salut emmental cheesy feet when the cheese comes out everybody's happy queso. Caerphilly cottage cheese mozzarella.",
          "Bavarian bergkase emmental cheese strings. Cow roquefort cheese and wine croque monsieur cottage cheese cheese triangles cheddar parmesan. Fondue stilton melted cheese croque monsieur cheesecake the big cheese camembert de normandie cheddar. Monterey jack fondue cheese and biscuits macaroni cheese cheese and biscuits paneer lancashire."
        ]
      },
      {
        id: 9,
        name: 'Math Factory',
        description: [
          "Cut the cheese hard cheese cheese and biscuits. Goat who moved my cheese cottage cheese macaroni cheese fromage frais everyone loves fromage chalk and cheese. Emmental cauliflower cheese fromage manchego roquefort swiss cream cheese cream cheese. St. agur blue cheese bocconcini everyone loves port-salut emmental cheesy feet when the cheese comes out everybody's happy queso. Caerphilly cottage cheese mozzarella.",
          "Bavarian bergkase emmental cheese strings. Cow roquefort cheese and wine croque monsieur cottage cheese cheese triangles cheddar parmesan. Fondue stilton melted cheese croque monsieur cheesecake the big cheese camembert de normandie cheddar. Monterey jack fondue cheese and biscuits macaroni cheese cheese and biscuits paneer lancashire."
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