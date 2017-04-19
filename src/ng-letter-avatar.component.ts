import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-letter-avatar',
  template: `
    <div class="letter-avatar" [style.backgroundColor]="color" [style.height]="getSize()"
      [style.width]="getSize()" [class.round]="round" [class.border]="border">
      <p>{{getTextToDisplay()}}</p>
    </div>
  `,
  styles: [`
    .letter-avatar {
      display: table;
      text-align: center;
    }

    .letter-avatar p {
      color: white;
      display: table-cell;
      font-weight: bold;
      vertical-align: middle;
    }

    .letter-avatar.round {
      border-radius: 50%;
    }

    .letter-avatar.border {
      border: 1px solid #c0c0c0;
    }
  `]
})
export class NgLetterAvatarComponent implements OnInit {

  @Input() public name: string;

  @Input() public color: string;

  @Input() public size: number;

  @Input() public round: boolean;

  @Input() public border: boolean;

  constructor() {
  }

  ngOnInit() {
    this.color = this.color || this.generateRandomColor();
    this.size = this.size || 60;
    this.round = this.round !== undefined ? this.round : true;
    this.border = this.border !== undefined ? this.border : true;
  }

  getTextToDisplay(): string {
    let textToDisplay: string;
    if (this.name) {
      textToDisplay = this.name.trim().split(' ').map(value => value.charAt(0)).join('');
    }

    return textToDisplay;
  }

  getSize(): string {
    return this.size + 'px';
  }

  private generateRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

}
