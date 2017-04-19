import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgLetterAvatarComponent } from './ng-letter-avatar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgLetterAvatarComponent
  ],
  exports: [
    NgLetterAvatarComponent
  ]
})
export class NgLetterAvatarModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgLetterAvatarModule,
      providers: []
    };
  }
}
