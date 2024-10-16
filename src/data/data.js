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
      'Desde criança sou apaixonado por jogos de videogame, nunca perdi uma jogatina de Super Mario ou Mega Man X. ' +
      'Aos 14 anos de idade eu descobri que era possível criar os meus próprios jogos utilizando o RPG Maker 2003. E assim surgiu uma paixão ' +
      'que rapidamente virou a busca por uma profissão: tornar-se um desenvolvedor de jogos virou um objetivo de vida pra mim.',

      'Em 2013 eu descobri a engine Unity3D, um amigo me emprestou um livro que ensinava a fazer um Space Invaders com ela, e foi aí que eu tive ' +
      'os meus primeiros aprendizados com a plataforma. Passava horas e mais horas programando. Na época não haviam tantos tutoriais como hoje, então ' +
      'muita coisa eu tentei fazer do zero. Boa parte do meu aprendizado em programação se deu nessa época.',
      
      'Sonho um dia poder criar histórias e mundos fantásticos em que as pessoas possam, além de se divertir, ' +
      'maravilhar-se com o que estão jogando. Mais que diversão, jogos também são arte.',

      'Já se foram cerca de 10 anos de trajetória. Sigo atualmente como desenvolvedor freelancer.',

      'Muito prazer.'
    ]
  },
  en: {
    title: 'About me',
    paragraphs: [
      "Since I was a child I'm passionate about games, I never lost a Super Mario or Mega Man X gameplay. At 14 years old I figured out I could " +
      'make my own games using a tool called RPG Maker 2003. And from so on a passion has surged and quickly it became a seek for a career: the game ' +
      'development world has showed up for me and never more got away from my history.',

      "In 2013 I found the Unity3D, a friend borrowed me a Unity beginners book which was teaching how to make a Space Invaders, and that was " +
      "my first learning phase with the engine. I spent hours and hours programming. At that time there wasn't so much tutorials like today, so I tried to " +
      'do many things from scratch. I practically learned how to code making games with this engine.',

      'My dream is to create stories and wonderful universes where people may not only get fun, but be amazed ' +
      'with the game they are playing, either. More than fun, games are art too.',

      "It's been about 10 years on the road. Nowadays I'm acting as a freelancer developer.",

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
    gameAudio: 'Áudio'
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
  email: 'E-mail: lucaszaranza@gmail.com',
  pt: {
    age: 'Idade: 31 anos',
    local: 'De: Fortaleza, Ceará, Brasil',
  },
  en: {
    age: 'Age: 31 years old',
    local: 'From: Fortaleza, Ceará, Brazil',
  }
}

export const yearMade = {
  pt: 'Ano',
  en: 'Year'
}

export const myProjectsData = {
    title: {
      pt: 'Meus Projetos',
      en: 'My Projects'
    },
    select: {
      pt: 'Escolha um projeto',
      en: 'Select a project'
    },
    data: [
      {
        id: 1,
        year: 2013,
        links: {
          repo: 'https://github.com/lucaspzaranza/bomberman4-prototype',
          demo: '',
          youtube: 'https://youtu.be/8B40uRATfOY'
        },
        texts: {
          name: {
            pt: 'Protótipo Super Bomberman 4',
            en: 'Super Bomberman 4 Prototype'
          },
          description:{
            pt: [
              "Quando eu comecei a estudar Unity eu achei melhor tentar copiar um jogo que eu já conhecesse bem pra focar apenas na programação e não ter que lidar com detalhes de game design ou de criação de gráficos, já que eu poderia apenas pegá-los na internet. Escolhi então o Super Bomberman 4, um clássico do Super Nintendo que eu jogo até hoje.",
              "Foi com esse projeto que eu tive meus primeiros aprendizados na engine da Unity e em programação, onde eu coloquei em prática pela primeira vez fora da faculdade os conceitos de Orientação a Objeto, Herança, Tipos Genéricos, dentre outras capacidades da linguagem C#.",
              "Pela falta de experiência, esse foi um projeto em que eu levei meses pra conseguir reproduzir pelo menos a mecânica básica do jogador, e ainda assim o jogo ficou cheio de bugs. Eu desconhecia muitas funcionalidades que a Unity já trazia na sua API e acabei tentando reinventar a roda, por exemplo, tentando criar uma forma de detectar a distância da bomba até a parede e medir a extensão das explosões sem saber que ela possuía uma funcionalidade chamada Raycasting em que calculava essa distância pra mim.",
              "Hoje eu olho para o código e percebo também que poderia ter feito as coisas de uma maneira muito mais simples e eficaz, vejo também que a escolha de um game com tantas mecânicas como Super Bomberman 4 não foi uma escolha acertada, deveria ter escolhido algo como Super Mario, mas na época eu não tinha experiência o suficiente nem de programação nem de planejamento pra avaliar essas questões. Foi um tipo de choque, mas extremamente divertido. Eu amei ter feito esse Bomberman.",
              "Por conta dos tantos bugs do projeto não consegui hospedá-lo."
            ],
            en: [
              "When I started to study Unity I thought it'd be better to copy a game I used to know better, focus in programming and I would not have to deal with game design or art stuff issues, since I'd be able to find them on the Internet. I chose then the Super Bomberman 4, a Super Nintendo classic I like to play until nowadays.",
              "It was with this project that I had my first Unity and computer programming lessons, where I put into practice outside the college environment the concepts of Object Orientation, Inheritance, Generic Types, and other C# features.", 
              "Due the lack of experience, this was a project which it took me a lot of effort and time to make at least the basic player mechanics, and it still got very messy and with several bugs. I didn't know several Unity API functionalities, and so I ended by trying to reivent the wheel, for example, trying to create a way to return the distance from the bomb to the hit wall and get the explosion extension with it, without noticing Unity has a feature called Raycasting which calculates it to me.",
              "Today I look to the code and realize I should've done things in an easier and better way, I see either choosing a game with so many mechanics like Bomberman wasn't an accurate choice, I should have chosen something like Super Mario, but at that time I had no coding and planning experience enough to evaluate these questions. That was a kind of shock for me... but extremely funny. I loved to do the Bomberman.",
              "Because of the many bugs the project has I couldn't host it in any place."
            ]
          }
        }       
      },
      {
        id: 2,
        year: 2014,
        links: {
          repo: '',
          demo: '',
          youtube: 'https://youtu.be/FGZL7OehB9A'
        },
        texts: {
          name: {
            pt: 'Roleta',
            en: 'Roulette Game'
          },
          description: {
            pt: [
              "Em 2014 eu tive o meu primeiro emprego numa empresa chamada Touch Midia (não existe mais) onde eu tinha que desenvolver pequenos jogos que seriam utilizados em eventos de empresas, confraternizações, etc. Esse foi o primeiro projeto profissional que eu cheguei a fazer, mas ele nunca foi utilizado em evento algum, já utilizavam outra versão do produto. Tanto que não cheguei nem a implementar nenhum menu, ficou somente a mecânica do jogo.",
              "Infelizmente eu perdi os dados do repositório e do projeto Unity do game."
            ],
            en: [
              "In 2014 I had my first job in a company called Touch Midia (doesn't exist anymore) where I had to develop small games which will be used in corporative events, confraternizations, and so on. This was the first professional game project I've done, but it never came to be used in any event, they were already using another version of the game. I didn't even implement any menu interface, leaving the game mechanics only.",
              "Unfortunately I lost all the repository and the Unity Editor project data."
            ]
          }
        }
      },
      {
        id: 3,
        year: 2014,
        links: {
          repo: 'https://github.com/lucaspzaranza/flappy-bird',
          demo: 'https://lucaspzaranza.github.io/flappy-bird-webgl/',
          youtube: 'https://youtube.com/shorts/vNJFnJMritI'
        },
        texts: {
          name: {
            pt: 'Flappy Bird',
            en: 'Flappy Bird'
          },
          description: {
            pt: [
              "Fazia pouco tempo do sucesso do Flappy Bird, e eu estava fazendo um tutorial no YouTube para conseguir replicar o Flappy Bird na Unity. Pessoal do meu trabalho achou interessante levar essa ideia aos eventos deles.",
              "Eu tinha perdido o repositório do projeto criado na época, então 2024 eu resolvi recriar o projeto do zero.",
              "Projeto adaptado para telas de celulares."
            ],
            en: [
              "The Flappy Bird game were making success by a few time ago, and I was making the game following a YouTube tutorial which was teaching how to do the game in Unity. The guys from my job thought that use this game at the events would be a good deal.",
              "I've lost the project repo created at that time, so I decided to recreate it from scratch at year 2024.",
              "Project Resolution adapted for mobile screens."
            ]
          }
        }
      },
      {
        id: 4,
        year: 2015,
        name: 'Catch Game',
        links: {
          repo: '',
          demo: '',
          youtube: 'https://youtu.be/3AfEJQc_e-0'
        },
        texts: {
          name: {
            pt: 'Catch Game',
            en: 'Catch Game'
          },
          description: {
            pt: [
              "Esse foi outro jogo que eu fiz seguindo tutoriais para aprender a utilizar a Unity. Também sem grandes dificuldades, mas mais uma vez precisei implementar interface de menus de rankings e captação de dados dos jogadores, o que deu um pouco mais de trabalho. Por serem eventos que usavam telas touch, precisei encontrar uma forma de abrir o teclado virtual do windows para utilização das telas sem teclado físico.",
              "Sem repositório também, desculpem-me."
            ],
            en: [
              "This was one more game I made following up Unity YouTube tutorials to learn how to use the game engine. I had no great difficulties either, but one more time I needed to implement menu interface and ranking system to client data retrieving, and that gave me a little more work to do. As the events used touch screens, I needed to find a way to open the Windows Virtual Keyboard to use the screens without use a physical keyboard.",
              "No repository too, I'm sorry."
            ]
          }
        }
      },
      {
        id: 5,
        year: 2015,
        links: {
          repo: 'https://github.com/lucaspzaranza/slot-machine',
          demo: 'https://lucaspzaranza.github.io/slot-machine-page/',
          youtube: 'https://youtu.be/Di7geb4OCGo'
        },
        texts: {
          name: {
            pt: 'Caça-Níqueis',
            en: 'Slot Machine'
          },
          description: {
            pt: [
              "Nessa empresa em que eu trabalhei também tinha um jogo de caça-níqueis que era utilizado para sorteio de prêmios. Ela era programada pra sempre sair algum prêmio como chaveiros, copos, kits de maquiagem, ingressos, etc. Mas a empresa queria utilizar uma versão que fosse mais fácil de customizar os gráficos de acordo com o evento, e que fosse uma solução feita na Unity. Tive então que criar uma do zero.",
              "Esse foi um dos projetos que eu mais gostei de ter feito, levei cerca de dois a três meses pra fazer. Aqui eu já tinha mais experiência com a Unity, então me sentia seguro pra fazer tudo do zero, e assim o fiz. Foi bem interessante pensar na lógica pra movimentar os slots do caça-níqueis e implementá-la. Fazer a mecânica da alavanca foi um pouco difícil também. Depois tive que implementar a customização dos gráficos. É um projeto que me traz bastante satisfação até hoje."
            ],
            en: [
              "In the company I worked we had a slot machine game which was used to prize raffling. It was programmed to the player always earn a prize like keychains, cups, make-up kits, tickets, and so on. But the company wanted to used a version of the game which were easier to customize the game graphics acoording to the event, and which was a Unity solution game. I had to create my own slot machine version.",
              "This was one of the projects I appreciated the most the development, it took me two or three months to make. At that time I was more experienced with Unity, so I felt more confident to make it from scratch, and so I did. That was very interesting to think on the logic to move the slots from the machine and implement it. Make the handler movement mechanic was a little bit hard to do too. Later I had to implement the graphic customization, prize amount control, and UI client data retrieving. I liked the result a lot."
            ]
          } 
        },
      },
      {
        id: 6,
        year: 2015,
        links: {
          repo: 'https://github.com/lucaspzaranza/jogo-memoria',
          demo: 'https://lucaspzaranza.github.io/jogo-memoria-page/',
          youtube: 'https://youtu.be/-EBzBFItrHs'
        },
        texts:{
          name: {
            pt: 'Jogo da Memória',
            en: 'Match Game'
          },
          description: {
            pt: [
              "Outro projeto em que eu trabalhei na Touch Midia foi a criação de um jogo da memória. Esse eu cheguei a ver pessoalmente a utilização em eventos, fiquei bastante feliz em ver as pessoas se divertindo com algo que eu criei com tanto empenho.",
              "Foi legal criar a rotação das cartas ao serem clicadas, apesar de bastante simples, ficou realista. Fora isso, tive que criar também sistema de Ranking, captação de dados dos jogadores e sistema de atualização de gráficos assim como no jogo de caça-níqueis."
            ],
            en: [
              "One more project I had worked on at Touch Midia was the creation of a card matching game. This one I saw with my own eyes people playing it inside an event, I got very proud by seeing people getting fun with something I created with so much effort.",
              "It was cool to create the card flip rotation when they got clicked, despite the simplicity it turned out a quite realistic thing. Beyond that, I had to create the ranking system, player personal data retrieving, and graphics customization just like the slot machine game."
            ]
          }
        }
      },
      {
        id: 7,
        year: 2017,
        links: {
          repo: 'https://github.com/lucaspzaranza/virtual-keyboard-unity-package',
          demo: 'https://lucaspzaranza.github.io/unity-virtual-keyboard-page/',
          youtube: 'https://youtu.be/2O_RLLSMs_c'
        },
        texts: {
          name: {
            pt: 'Teclado Virtual do Macbook',
            en: 'Macbook Virtual Keyboard'
          },
          description: {
            pt: [
              "Os projetos da Touch Midia por serem utilizados em telas touch faziam uso constante do teclado virtual do windows, mas eu me sentia incomodado com a forma de implementação dessa funcionalidade. Alguns scripts estavam me dando alguns problemas com a resolução da tela, e eu tinha receio da solução não funcionar daqui a algum tempo e me preocupava pelo fato de não funcionar em sistemas Android. Achei melhor então criar meu próprio teclado virtual simplificado e exportá-lo como um pacote para utilizar em qualquer projeto que eu quisesse.",
              "Na época eu já não trabalhava mais na Touch Midia mas ainda os utilizava pra customização de alguns eventos que precisavam desses jogos. Quis fazer também para testar a utilização de alguns conceitos da Unity, como a utilização dos eventos. ",
              "O projeto foi um sucesso e o utilizo até hoje nesses jogos touch."
            ],
            en: [
              "By the fact the Touch Midia projects were used on touch screens, frequently the windows virtual keyboard was necessary to be called inside the projects. But I felt annoyed with the way of using this feature in the games. Some scripts was causing resolution and windowing screen issues, and I've feared the solution will stop working at some point in the future, and I worried because it didn't work on Android systems. I decided to create my own simplified virtual keyboard and export it as a Unity package to reuse in any project I'd wish.",
              "At that time I wasn't working at Touch Midia anymore, but I still used those games to customize on private events. I wanted to make the virtual keyboard too to test the utilization of some Unity concepts like event triggering.",
              "The project was a success and I use it until today on these touch games."          
            ]
          }
        }
      },
      {
        id: 8,
        year: 2018,
        links: {
          repo: 'https://github.com/lucaspzaranza/penosas-strike',
          demo: 'https://play.google.com/store/apps/details?id=com.SacroCuore.PenosasStrike&hl=pt_BR&gl=US',
          youtube: 'https://www.youtube.com/watch?v=1BwDvgHKpX4'
        },
        texts: {
          name: {
            pt: 'Penosas Strike',
            en: 'Penosas Strike'
          },
          description: {
            pt: [
              "Em 2017 eu tinha pedido demissão do meu emprego em que trabalhava com .NET pra me dedicar exclusivamente ao desenvolvimento dos meus jogos. Me preparei por alguns meses no final de 2017, e foi nesse período que eu fiz o teclado virtual, em seguida fiz de 2018 um ano sabático em que me dediquei em horário comercial ao desenvolvimento de um indie game.",
              "Enquanto procurava referências para o tipo de jogo que eu iria fazer, me deparei com uma fase bônus do jogo Sunset Riders, onde o jogador tinha que mirar nos bandidos para ganhar pontos extras, e pensei: porque não fazer um jogo em que o jogador precise mirar e atirar em alguma coisa, mas em vez de usar um direcional, utilizar o toque do celular? Foi daí que nasceu o conceito do Penosas Strike.",
              "Levei cerca de 9 meses (quase uma gravidez xD) pra fazer o projeto inteiro: programação, arte, adicionar trilha sonora, publicar na Play Store, etc. Foi bastante desafiador em vários momentos. O que foi mais difícil de fazer foi a trajetória que os pombos iriam percorrer na tela: tive que utilizar curvas de bézier e criar splines pra criar essa trajetória. Envolveu noções de cálculo matemático, derivadas, tangentes... tive que pesquisar um script que trazia essa implementação e fiz umas adaptações voltadas ao meu projeto.",
              "Outro desafio foi criar a pixel art do jogo, algo que eu nunca tinha feito na vida. Foi bastante trabalhoso, e tive que adaptar muita coisa por conta da minha inexperiência na área.",
              "Como se não bastasse, nesses 9 meses o meu computador e meu notebook queimaram, e eu fiquei com dores horríveis no meu ombro direito, que é o ombro do braço que eu uso pra escrever e usar o mouse. E como eu não estava trabalhando, não tinha renda pra mandar consertar os computadores nem pra pagar médico pra me tratar do ombro. Sem dúvidas o Penosas Strike foi meu trabalho mais difícil de terminar, mas foi o único projeto autoral que eu consegui chegar até o final e completá-lo.",
              "Um ano depois eu adicionei ao jogo uma skin de natal. Não tinha muita experiência acumulada além da que eu tive ao criar a pixel art padrão do jogo, mas parece que com o tempo que tinha passado eu havia firmado aquela experiência melhor em mim, e por isso senti menos dificuldade com a skin de natal, que ficou até bem melhor que a padrão.",
              "Infelizmente não tive lucro nenhum com o jogo, só prejuízo financeiro, mas pelo menos ficou registrado na minha biografia como a minha maior experiência (frustrada) trabalhando na indústria de	jogos."
            ],
            en: [
              "In 2017 I had quit my job where I worked with .NET to focus entirely to the development of my games. I prepared myself for a couple of months at the rest of 2017, and it was at that period I made the virtual keyboard, and so I made 2018 a gap year where I was going to develop my first indie game.",
              "While I searched references to what kind of game I was going to do, I came across with a bonus stage from the game Sunset Riders, where the player must aim the bandits to earn extra points, and thought: why not make a game where the player has to aim and shoot something, but instead using the directional, use the phone touch? It was from there the concept of Penosas Strike has born.",
              "I spent 9 months (almost a baby xD) to craft the entire project: coding, art, soundtrack adding, and launch at PlayStore. That was very challenging at a lot of moments. The hardest thing I had to do was the pigeon navigation track which they will fly on the screen: had to use bezier splines to create these tracks. It envolved math calculus, derivatives and tangents... had to look for a script who makes it to me and I altered some functionalities to fit better on my project.",
              "Another hard task I had to accomplish was drawing the pixel art, somethig I've never done before in my life. It was very difficult, and I had to adjust a lot of things due my lack of experience with pixel art.",
              "As if it were not enough, during those 9 months my notebook and computer got broken, and I got several aches on my right shoulder, which was the side of my body I use to write and move the mouse. As I was not working on a paid job, I had no money to fix my devices and do the shoulder treatment. Without any doubts the Penosas Strike was the hardest and heaviest project I've got to finish, and the only indie game I've made it to the end and achieved the finish goal.",
              "One year later I added a Christmas Skin to the game. I had no pixel art experience beyond the experience I've earned by making the game art, but it seemed like all that experience had been settle inside me, and because of this I felt less difficult to do the Christmas Skin, which became prettier and better than the default skin."
            ]
          }
        }
      },
      {
        id: 9,
        year: 2019,
        links: {
          repo: 'https://github.com/lucaspzaranza/math-factory',
          demo: 'https://lucaspzaranza.github.io/math-factory-page/',
          youtube: 'https://youtu.be/R5HU1G4pQrA'
        },
        texts: {
          name: {
            pt: 'Math Factory',
            en: 'Math Factory'
          },
          description: {
            pt: [
              "Depois do fracasso do Penosas Strike eu caí na real de que precisava arrumar um emprego e pagar as contas. Deixei os jogos por um tempo e fui trabalhar numa escola como cuidador de uma criança especial. Eu o ajudava a fazer as lições, a prestar atenção na aula, tirava suas dúvidas, levava ao banheiro... era como que o pai da criança em horário escolar.",
              "A criança tinha dificuldades com matemática, que é a minha matéria preferida, e eu sempre gostei de ensinar os assuntos que eu domino. Mas percebi que ensiná-lo da forma tradicional não surtiria efeito, e vi também que ele amava jogos de computador. Resolvi então unir tudo isso numa ideia só e criei uma solução gamificada para ensiná-lo a realizar as operações básicas, como adição, subtração, multiplicação e divisão. ",
              "Tirei o mês de Julho, mês que eu estava de férias, pra fazer um protótipo do jogo. Tive bastante trabalho pra fazer o gerenciamento dos slots ao inserir um novo número, e percebi que talvez a Unity não fosse a melhor ferramenta pra desenvolver aquele tipo de mecânica que envolva mais elementos de UI que elementos de física, talvez um framework JavaScript como o React fosse mais adequado. Vi também que pela altura do ano, talvez a minha solução não fosse ser tão útil para a criança, tendo em vista que ela iria se deparar com assuntos mais avançados que soma e subtração na matemática, apesar das dúvidas dela estarem nesse nível mais elementar. Então resolvi deixar o jogo como estava somente com a adição e subtração.",
              "Nas poucas vezes que usei o jogo com ele, percebi que foi útil sim, mas não sei dizer se o ajudou a entender como funcionam as operações. Quem sabe se eu tivesse detalhado mais, colocado cores, animações, mais elementos visuais, ele tivesse entendido melhor. De qualquer forma, gostei bastante do resultado e da ideia geral. Ensinar matemática de uma forma gamificada é algo que me interessa bastante, que eu acho que consigo fazer bem, e tenho em mente em algum momento da minha vida eu trabalhar com isso."
            ],
            en: [
              "After the failure of Penosas Strike I stopped daydreaming and realized I had to get a job to pay the bills. I left the games for a while and went to work on a school as a disabled child caregiver. I helped him to do the lessons, pay attention os classes, answer his questions, take him to bathroom... I was like the child's father during scholar period. It had no business with me, but that was what I've achieved to pay the bills and help in the house finances." ,
              "The child had many difficulties with math, which is my favorite subject, and I always appreciated to teach people the subjects I'm good at. But I noticed teaching him on the usual way would not make any effect on him, and I noticed he used to like a lot of computer games. So I decided to join all these circunstances into one idea and I created a gamified math teaching solution to teach him how to perform the four math fundamental operations, like addition, subtraction, multiplication and division.",
              "I spent the entire July month, which was when I was in my vacations, doing the game prototype. I had several problems to do the slot management when  the player inputs a new number, and I started to think maybe Unity wasn't the best suitable tool to develop that kind of mechanic which envolves more UI elements than physics elements, maybe a JavaScript framework like React would fit better. I saw either by the year elapsed time that, maybe my solution wouldn't be that useful to the child, since he was going to learn more advanced subjects than addition and subtraction, despite his doubts still be at that basic level though. So I decided leave the game as it was with addition and subtraction only.",
              "By the few times I used the game with him I noticed it came handy, but I can't say if it helped him to understand how these basic operations work. Who knows if I had detailed more, put more colors, animations and other visual effects he should understood more. Anyway, I liked the result and the big idea of the game concept. Teach math in a gamified way is something which interests me a lot, I think I can do it well, and I have in my mind in any moment of my life I should work with it."
             ]
          }
        }
      },
      {
        id: 10,
        year: 2020,
        links: {
          repo: 'https://github.com/lucaspzaranza/doom-of-the-penosas',
          demo: 'https://lucaspzaranza.github.io/doom-of-the-penosas-page/',
          youtube: 'https://youtu.be/AWoCwXdrGpw'
        },
        texts: {
          name: {
            pt: 'Doom of the Penosas',
            en: 'Doom of the Penosas'
          },
          description: {
            pt: [
              "Em 2020 eu tirei do papel uma ideia que mantive guardada desde 2016 mas nunca tinha arriscado fazer. É um projeto shoot'em up, com escopo grande, com mecânica multiplayer, fases, algo que levaria anos pra fazer, e nunca tentei ao menos criar um protótipo. Mas eu arrisquei iniciar o projeto e ver até onde eu iria chegar.",
              "Acontece que eu estava insatisfeito no meu trabalho na escola, queria voltar a trabalhar com TI, e se eu usasse meu tempo livre pra fazer o jogo ao invés de estudar outras ferramentas mais usadas no mercado de TI, tais como frameworks frontend, banco de dados, backend, etc, eu nunca iria arrumar um emprego, já que também as oportunidades pra entrar no ramo dos jogos são mais escassas, e eu queria sair daquela escola o quanto antes. Acabei pausando o desenvolvimento do protótipo por alguns meses pra me dedicar aos estudos até que conseguisse alguma vaga na área.",
              "Em 2021 eu consegui voltar pra área de TI, então retornei ao desenvolvimento do protótipo. Mas o tamanho do escopo do projeto me fez questionar várias vezes se eu deveria estar fazendo aquilo ao invés de estudar e melhorar minhas habilidades pros empregos que eu estava conseguindo e ganhar mais dinheiro. Acabei parando novamente pra focar nessa área.",
              "O maior desafio do desenvolvimento desse protótipo tem sido sem dúvidas implementar o sistema multiplayer, coisa que eu nunca tinha feito na minha vida. Escolhi o framework Mirror devido a sua simplicidade, mas ainda assim tive dificuldades devido minha inexperiência. Estou conseguindo obter resultado e devo isso aos estudos de desenvolvimento web, que me fizeram entender mais da teoria de Cliente e Servidor, requisições, etc. Se por um lado eu ter parado de desenvolver jogos me atrasou no desenvolvimento dos meus projetos, por outro me tornou um programador melhor e capaz de encarar projetos mais avançados como esse.",
              "Não tenho previsão de retornar ao desenvolvimento desse jogo, mas ainda quero voltar e lançar ao menos uma demo jogável, quem sabe também adicionar algum pixel art, já que os sprites estão todos com imagens temporárias que eu peguei de outros games. Não irei parar de desenvolver jogos, é a minha maior paixão e ambição profissional, mas preciso focar no que está me dando dinheiro atualmente, que tem sido desenvolvimento de sistemas web, e vejo que ali eu também encontro coisas que me interessam, tais como React, e que eu posso fazer carreira ali caso não venha a dar certo no ramo dos jogos.",
              "Para testar use um joystick de XBox, ou no teclado use WASD como direcionais, barra de espaço para pular e usar o paraquedas, CTRL para tiro primário, Shift para tiro secundário, e Q ou E para mudar de ítem especial."
            ],
            en: [
              "In 2020 I put it out of the paper a game concept I was keeping since 2016 which I never had tried to do. It's a shoot'em up project, large scope, with multiplayer system, stages, something which will take me years doing all by myself, and I never tried at least to do a prototype. But I resolved to take the risk and start the project and see until where I could go.",
              "But it turns out I was unhappy at my school job, I wanted to go back to IT, and if I used my free time to develop a game instead study web development, I'd never find a job, since the game dev opportunities always seemed so rare to me, and I wanted to quit my job as soon as possible. I left the game development behind for a couple of months to focus on studying until I find a job on IT.",
              "In 2021 I got a job on IT, so I returned the prototype development. But due the large project scope, I wondered a lot of times if I shouldn't focus on what was giving me money, leveling up my skills, rather than develop a project with no deadlines to achieve which I was doing only for fun purposes. I decided then stop one more time the development and focus on web dev.",
              "The biggest struggle this prototype has brought to me was to do the multiplayer system, something I've never done before. I chose the Mirror framework due it's simplicity, but I was still struggling with that due my lack of experience. I'm doing quite ok, and I owe that to my web dev learning, which gave me background knowledge to Client and Server dynamic and requests as well. If on the one hand studying these delayed my game roadmap, on the other hand I became a better programmer and capable of face and develop more advanced projects like this.",
              "I have no intention to go back to the game dev of this project soon, but I still want to return and launch at least a playable demo, who knows draw some pixel art to it, since the game sprites are entirely fulfilled with temporary sprites from other classic games. I will not give up making games, it's my biggest passion and professional ambition, but I need to focus on what is paying me more money currently, and that's the system development, a career who has some good areas too, like frontend dev with React, for example, and where I can trace a good and steady career growth just in case the game dev never becomes a reality in my life.",
              "To test the demo use a XBox Joystick, or on the keyboard use the WASD keys to move and aim, spacebar to jump and use the parachute, CTRL to primary shot, Shift to secondary shot, and Q or E to change the special item."
            ]
          }
        }
      },
      {
        id: 11,
        year: 2021,
        links: {
          repo: 'https://github.com/lucaspzaranza/snake-project',
          demo: 'https://lucaspzaranza.github.io/snake-project-page/',
          youtube: 'https://youtu.be/IKWWVx8-zis'
        },
        texts: {
          name: {
            pt: 'Jogo da Cobrinha',
            en: 'Snake game'
          },
          description: {
            pt: [
              "Esse foi um protótipo desenvolvido num processo seletivo em que eu tinha que mostrar o quanto eu conseguia fazer de um jogo da cobrinha em 1h. Evidente que não deu tempo de fazer tudo, mas eles me deram até o final do dia pra mostrar o jogo completo, e assim o fiz.",
              "Nunca me deram uma resposta, nem mesmo negativa, e isso já faz alguns meses. Acho que ficaram tão boquiabertos e maravilhados com o projeto que morreram todos de tanta emoção."
            ],
            en: [
              "This was a project made to a corporate selection process where I had to show how much I could make from a snake game in one hour. Of course I couldn't finish it, but they gave me until the end of the day to send them the project complete, and so I did.",
              "They never sent me any feedback, not even to say I was not approved, and it's been a few months since that. I guess they were so astonished and wondered with the project that they died of so much emotion."
            ]
          }
        }
      },
      {
        id: 12,
        year: 2021,
        links: {
          repo: 'https://github.com/lucaspzaranza/diep.io-challenge',
          demo: '',
          youtube: 'https://youtu.be/U4VpCUv47qw'
        },
        texts: {
          name: {
            pt: 'Protótipo do Diep.io',
            en: 'Diep.io Prototype'
          },
          description: {
            pt: [
              "Esse também foi um protótipo desenvolvido num processo seletivo em que eu tinha que fazer uma cópia do Diep.io utilizando sistema multiplayer, o prazo era de uma semana. Por conta do meu trabalho e de um freelance que eu tive que fazer, acabei tendo menos tempo que o que eu gostaria de ter tido pra fazer o jogo, mas ainda assim consegui terminá-lo no prazo estipulado.",
              "Assim como no jogo anterior, nesse projeto eu também nunca obetive resposta alguma. Não sei o que acontece nessas processos seletivos, pelo visto meu charme é maior do que eu imaginava e eu acabo deixando todos sem palavras."
            ],
            en: [
              "This project was made during a selection process too, where I had to do a copy of the Diep.io game using multiplayer system, the deadline was one week. Due my job and a freelance I had to do, I had such a short time to make the game, but luckily I finished the game on the week deadline.",
              "Just like the previous project, I didn't received any feedbacks. I don't know what happens during these selection processes, seems like my charm is bigger than I thought and I end by letting everyone speechless."
            ]
          }
        }
      },
      {
        id: 13,
        year: 2022,
        links: {
          repo: 'https://github.com/lucaspzaranza/fucking-bomberman-remake',
          demo: 'https://lucaspzaranza.github.io/super-bomberman4-remake-page/',
          youtube: 'https://youtu.be/u_16YhfG-js'
        },
        texts: {
          name: {
            pt: 'Remake Super Bomberman 4',
            en: 'Remake Super Bomberman 4'
          },
          description: {
            pt: [
              "Tirei o começo do ano de 2022 pra refazer o primeiro projeto Unity que eu fiz sozinho, que foi o Bomberman 4 em 2013 pra 2014. Fiquei curioso pra me testar e ver minha evolução desses tempos pra cá. Naquela época levei em torno de 6 meses pra fazer. Dessa vez, enxugando um pouco mais o escopo do projeto eu levei 2 semanas e meio. Consegui até deixar algumas coisas bem melhores que antes. O projeto anterior estava com tantos bugs que era impossivel de exportar para uma versão WebGL, dessa vez foi possível. Fiquei bastante satisfeito com o resultado."
            ],
            en: [
              "I took the beginning of the 2022 year to remake my first Unity project I built alone, the Super Bomberman 4, made in 2013 to 2014. I was curious and eager to test myself and see my evolution since that time. The first time it took from me 6 months to do the prototype. This time, cleaning the scope a little bit, it took from me two and a half weeks. The first project was so messy I couldn't even publish it to a WebGL version, but this time I did it. I've left things better than before. I appreciated the result a lot."
            ]
          }
        }
      },
      { 
        id: 14,
        year: 2022,
        links: {
          repo: 'https://github.com/lucaspzaranza/ab-carteira-identidade',
          demo: 'https://lucaspzaranza.github.io/ab-carteira-identidade-webgl/',
          youtube: ''
        },
        texts: {
          name: {
            pt: 'Carteira de Identidade',
            en: 'Identity Card'
          },
          description: {
            pt: [
              "Em 2022 eu peguei um projeto como freelancer para desenvolver uma série de jogos educativos. Esse é o projeto para que elas conheçam uma Carteira de Identidade.",
              "A dificuldade desse projeto foi a responsividade para telas mobile, então é como se cada projeto fosse um 2 em 1. A depender do dispositivo, um projeto totalmente novo é carregado para se ajustar à responsividade das telas.",
            ],
            en: [
              "In 2022 I got a project as a freelancer to develop a series of educational games. This is the project to present the Identity Card to the children.",
              "The main project difficulty was the responsivity to mobile screens, therefore it was as if each project was a 2 in 1."
            ]
          }
        }
      },
      {
        id: 15,
        year: 2022,
        links: {
          repo: 'https://github.com/lucaspzaranza/AprendeBrasil_Emocionometro',
          demo: 'https://lucaspzaranza.github.io/ab-emocionometro-webgl/',
          youtube: ''
        },
        texts: {
          name: {
            pt: 'Emocionômetro',
            en: 'Emotionmeter'
          },
          description: {
            pt: ["Um desses projetos consistia em criar um medidor de emoções para que as crianças pudessem dar nome aos seus sentimentos."],
            en: ["One of these projects consisted creating an emotion meter which allow children to name their feelings."]
          }
        }
      },
      {
        id: 16,
        year: 2022,
        links: {
          repo: 'https://github.com/lucaspzaranza/AprendeBrasil-InstaFiltros',
          demo: 'https://lucaspzaranza.github.io/ab-insta-filtros-webgl/',
          youtube: ''
        },
        texts: {
          name: {
            pt: 'Insta Filtros',
            en: 'Insta Filters'
          },
          description: {
            pt: ["Projeto para as crianças se divertirem utilizando diversos filtros divertidos. Foi bastante difícil fazer a comunicação com a câmera em dispositivos iOS num projeto WebGL."],
            en: ["Project for children have fun using some funny filters in their faces. It was hard do make the communication with the camera in iOS devices in a WebGL project."]
          }
        }
      },
      {
        id: 17,
        year: 2022,
        links: {
          repo: 'https://github.com/lucaspzaranza/jogo-da-malha',
          demo: 'https://lucaspzaranza.github.io/ab-jogo-da-malha-webgl/',
          youtube: ''
        },
        texts: {
          name: {
            pt: 'Jogo da Malha',
            en: 'Mesh Game'
          },
          description: {
            pt: ["Joguinho que consiste em ligar vários pontos através da malha."],
            en: ["This game consist in linking points throughout the mesh."]
          }
        }
      },
      {
        id: 18,
        year: 2022,
        links: {
          repo: 'https://github.com/lucaspzaranza/ab-letra-cursiva',
          demo: 'https://lucaspzaranza.github.io/ab-letra-cursiva-webgl/',
          youtube: ''
        },
        texts: {
          name: {
            pt: 'Letra Cursiva',
            en: 'Cursive Letter'
          },
          description: {
            pt: ["Esse projeto serve pras crianças praticarem a escrita das letras do alfabeto. Foi trabalhoso de fazer porque não fiz o projeto desde o início, tive que dar manutenção no código que outra pessoa já tinha começado a fazer."],
            en: ["This project serves for children practice the alphabet letters writing. It was difficult to make becuse I didn't start the project from scractch, so I had to give maintenance into the code made by another person."]
          }
        }
      },
      {
        id: 19,
        year: 2022,
        links: {
          repo: 'https://github.com/lucaspzaranza/Aprende-Brasil-Quebra-Cabecas',
          demo: 'https://lucaspzaranza.github.io/ab-quebra-cabeca-webgl/',
          youtube: ''
        },
        texts: {
          name: {
            pt: 'Jogo de Quebra-cabeça',
            en: 'Puzzle Time'
          },
          description: {
            pt: ["Tive que desenvolver também um jogo de quebra-cabeças. Esse projeto trouxe alguns desafios, tais como detectar que o quebra-cabeça estava montado e a possibilidade de dar zoom através do movimento de pinça na versão mobile."],
            en: ["I had to develop a puzzle game too. This project brought me a couple of challenges, such as how to detect the puzzle was complete, and how to zoom with the pinch gesture on mobile devices."]
          }
        }
      },
      {
        id: 20,
        year: 2022,
        links: {
          repo: 'https://github.com/lucaspzaranza/ab-realidade-x-fantasia',
          demo: 'https://lucaspzaranza.github.io/ab-realidade-fantasia-webgl/',
          youtube: ''
        },
        texts: {
          name: {
            pt: 'Realidade x Fantasia',
            en: 'Reality x Fantasy'
          },
          description: {
            pt: ["Esse game traz a história de alguns personagens e pede para o jogador dizer se são histórias de personagens reais ou fictícios. O desafio foi como adicionar o vídeo do Homem-Aranha para dispositivos iOS. Tive que implementar como uma animação da Unity e sincroniza o áudio com a animação."],
            en: ["This games brings the history of some characters and asks for the player tell if they are real or fictional characters histories. The struggle was how to add the Spiderman video into iOS devices. Had to implement as a Unity animation and synchronize the audio with the animation."]
          }
        }
      },
      {
        id: 21,
        year: 2022,
        links: {
          repo: 'https://github.com/lucaspzaranza/ab-supermarket-unity',
          demo: 'https://lucaspzaranza.github.io/ab-supermarket-webgl/',
          youtube: ''
        },
        texts: {
          name: {
            pt: 'Jogo do Supermercado',
            en: 'Supermarket Game'
          },
          description: {
            pt: ["Jogo bilíngue para que as crianças aprendessem a contagem de diversas frutas."],
            en: ["Bilingual game for children learn the count of a sort os fruits."]
          }
        }
      },
      {
        id: 22,
        year: 2023,
        links: {
          repo: 'https://github.com/lucaspzaranza/hermit-crab-game-test',
          demo: 'https://lucaspzaranza.github.io/procedural-runner-2D/',
          youtube: 'https://youtu.be/rGbzTRhfKTw'
        },
        texts: {
          name: {
            pt: 'Runner Infinito 2D',
            en: '2D Infinity Runner'
          },
          description: {
            pt: ["Jogo desenvolvido em um processo seletivo em que deram os assets de imagem para mim e me deram uma semana pra desenvolver um game mobile com aqueles assets.",
                 "Recomendado testar a demo em algum dispositivo móvel devido sua resolução."],
            en: ["A developed game in an interview process in which they gave me the image assets and gave me 1 week to make a mobile game with those assets.",
                 "Recommended using a mobile device for testing the demo due its resolution."]
          }
        }
      },
      {
        id: 23,
        year: 2024,
        links: {
          repo: '',
          demo: 'https://lucaspzaranza.github.io/limpa-copo-webgl/',
          youtube: ''
        },
        texts: {
          name: {
            pt: 'Jogo de Limpar Copo',
            en: "Cup Cleaning Game"
          },
          description: {
            pt: [
              "Projeto freelance feito para uma ação do Dia Mundial da Água.",
              "Recomendado testar a demo em algum dispositivo móvel devido sua resolução."
            ],
            en: [
              "Freelance project made for an event related with the World Water Day.",
              "Recommended using a mobile device for testing the demo due its resolution."
              ]
          }
        }
      },
      {
        id: 24,
        year: 2024,
        links: {
          repo: 'https://github.com/lucaspzaranza/quizz-game',
          demo: 'https://lucaspzaranza.github.io/love-quizz/',
          youtube: ''
        },
        texts: {
          name: {
            pt: 'Quiz do Amor',
            en: "Valentine's Quiz"
          },
          description: {
            pt: [
              "Projeto freelance que eu fiz para um evento do dia dos namorados.",
              "Recomendado testar a demo em algum dispositivo móvel devido sua resolução."
            ],
            en: [
              "Freelance project I made for a Valentine's Day event.",
              "Recommended using a mobile device for testing the demo due its resolution."
              ]
          }
        }
      }
    ]
}

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

export const contactInfo = {
  pt: {
    title: 'Informações para contato',
    subtitle: 'Você me encontra através dos seguintes links:'
  },
  en: {
    title: 'Contact Info',
    subtitle: 'You can contact me by the following links:'
  }
}