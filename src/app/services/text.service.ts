import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TextService {
private texts: string[] = [
'angular is awesome ngular is awesomengular is awesomengular is awesomengular is awesomengular is awesomengular is awesomengular is awesomengular is awesomengular is awesomengular is awesomengular is awesomengular is awesomengular is awesome',
'rxjs makes async easy',
'dependency injection is powerful'
];


getRandomText(): string {
const i = Math.floor(Math.random() * this.texts.length);
return this.texts[i];
}
}