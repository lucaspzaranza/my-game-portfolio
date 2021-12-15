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

export const myProjects = {
  pt: {
    title: 'Meus Projetos',
    select: 'Selecione um projeto',
    projects: [
      {
        name: 'Protótipo Super Bomberman 4',        
      },
      {
        name: 'Flappy Bird',        
      },
      {
        name: 'Roleta',        
      },
      {
        name: 'Caça-níqueis',        
      },
      {
        name: 'Jogo da Memória',        
      },
      {
        name: 'Penosas Strike',        
      },
      {
        name: 'Doom of The Penosas',        
      },
      {
        name: 'Jogo da Cobrinha',        
      },
      {
        name: 'Protótipo Diep.io',        
      },
      {
        name: 'Teclado Virtual do Macbook',        
      }
    ]
  },
  en: {
    title: 'My Projects',
    select: 'Select a project',
    projects: [
      {
        name: 'Super Bomberman 4 Prototype',        
      },
      {
        name: 'Flappy Bird',        
      },
      {
        name: 'Roulette Game',        
      },
      {
        name: 'Slot Machine',        
      },
      {
        name: 'Matching Game',        
      },
      {
        name: 'Penosas Strike',        
      },
      {
        name: 'Doom of The Penosas',        
      },
      {
        name: 'Snake',        
      },
      {
        name: 'Diep.io Prototype',        
      },
      {
        name: 'Macbook Virtual Keyboard',        
      }
    ]
  }
}