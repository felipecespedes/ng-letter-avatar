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

Template:

```xml
<ng-letter-avatar name="name"></ng-letter-avatar>
```

`.ts` file:

```ts
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
