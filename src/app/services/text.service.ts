import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TextService {
  private texts: { en: string[], ru: string[] } = {
    en: [
      'I love front-end development because it lets me be creative and solve problems at the same time. I enjoy designing layouts, choosing colors, and making websites interactive. Seeing my code turn into something users can enjoy instantly is really rewarding. Front-end also challenges me to think carefully about user experience and performance, which makes every project interesting. In short, I love creating things that look good, work well, and make a difference for people.',
      'I love Java because it is powerful and versatile. Writing code in Java helps me think logically and solve complex problems. I enjoy building programs that work reliably and can run on different devices. Java’s strong structure and vast libraries make development easier and more interesting. In short, I love Java because it challenges me, teaches me discipline, and allows me to create useful and efficient applications.',
      'I love studying at SibSUTI because it gives me the chance to learn new technologies and improve my skills. The courses are challenging and interesting, and the professors support me in exploring my ideas. I enjoy working on projects, solving problems, and seeing my progress. Studying here also allows me to meet talented classmates and share knowledge. In short, I love SibSUTI because it helps me grow academically and personally.'
    ],
    ru: [
      'Я люблю фронтенд разработку, потому что она позволяет быть креативным и одновременно решать задачи. Мне нравится создавать макеты, подбирать цвета и делать сайты интерактивными. Видеть, как мой код превращается в что-то, что люди могут сразу использовать, очень приятно. Фронтенд также заставляет думать о пользовательском опыте и производительности, что делает каждый проект интересным. В общем, мне нравится создавать то, что выглядит хорошо, работает исправно и приносит пользу людям.',
      'Я люблю Джава, потому что это мощный и универсальный язык. Программирование на Java помогает мыслить логически и решать сложные задачи. Мне нравится создавать программы, которые работают надежно и могут запускаться на разных устройствах. Строгая структура Java и огромные библиотеки делают разработку проще и интереснее. В общем, я люблю Java за вызовы, дисциплину и возможность создавать полезные приложения.',
      'Я люблю учиться в СибГУТИ, потому что это даёт возможность изучать новые технологии и улучшать навыки. Курсы сложные и интересные, а преподаватели поддерживают исследования и идеи студентов. Мне нравится работать над проектами, решать задачи и видеть прогресс. Учёба здесь также позволяет познакомиться с талантливыми однокурсниками и обмениваться знаниями. В общем, я люблю СибГУТИ за академический и личностный рост.'
    ]
  };
  getRandomText(lang: 'en' | 'ru' = 'en'): string {
    const arr = this.texts[lang];
    const i = Math.floor(Math.random() * arr.length);
    return arr[i];
  }
}