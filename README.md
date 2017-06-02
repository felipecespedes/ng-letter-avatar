# ng-letter-avatar

## Installation

To install this library, run:

```bash
$ npm install ng-letter-avatar --save
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import NgLetterAvatarModule
import { NgLetterAvatarModule } from 'ng-letter-avatar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify NgLetterAvatarModule as an import
    NgLetterAvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once `NgLetterAvatarModule` is imported, you can use its component:

```xml
<ng-letter-avatar [name]="name"></ng-letter-avatar>
```

`.ts` file:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: 'my-app.html',
  styles: ['my-app.scss']
})
export class NgLetterAvatarComponent {
  
  public name = 'Karl Marx';
  
}
```

You can pass the following properties to the component:

* [name]: The name that's going to be displayed. type: string
* [color]: A valid HTML color. type: string | default: a random color
* [size]: The size of the letter avatar in pixels. type: number | dafault: 60
* [round]: Whether is rounded or not. type: boolean | default: true
* [border]: Whether to show a border or not. type: boolean | default: true

```xml
<ng-letter-avatar [name]="name" [color]="color" [size]="size" [round]="round" [border]="border"></ng-letter-avatar>
```

`.ts` file:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: 'my-app.html',
  styles: ['my-app.scss']
})
export class NgLetterAvatarComponent {
  
  public name = 'Karl Marx';
  public color = '#ff00ff';
  public size = 40;
  public round = false;
  public border = false;
  
}
```

## Screenshots

![Screenshot](/screenshots/screenshot_1.png "Screenshot")

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## Authors

* **Felipe Céspedes** - *felipecespedespisso@gmail.com* - [Viwell](https://github.com/viwell)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
