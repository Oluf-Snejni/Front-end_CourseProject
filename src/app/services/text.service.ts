import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TextService {
private texts: string[] = [
'I love front-end development because it lets me be creative and solve problems at the same time. I enjoy designing layouts, choosing colors, and making websites interactive. Seeing my code turn into something users can enjoy instantly is really rewarding. Front-end also challenges me to think carefully about user experience and performance, which makes every project interesting. In short, I love creating things that look good, work well, and make a difference for people. ',
'I love Java because it is powerful and versatile. Writing code in Java helps me think logically and solve complex problems. I enjoy building programs that work reliably and can run on different devices. Java’s strong structure and vast libraries make development easier and more interesting. In short, I love Java because it challenges me, teaches me discipline, and allows me to create useful and efficient applications. ',
'I love studying at SibSUTI because it gives me the chance to learn new technologies and improve my skills. The courses are challenging and interesting, and the professors support me in exploring my ideas. I enjoy working on projects, solving problems, and seeing my progress. Studying here also allows me to meet talented classmates and share knowledge. In short, I love SibSUTI because it helps me grow academically and personally. '
];


getRandomText(): string {
const i = Math.floor(Math.random() * this.texts.length);
return this.texts[i];
}
}