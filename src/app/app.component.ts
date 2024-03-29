import { Component, HostListener, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  list: any = [];

  constructor() {}

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    this.clearStyleAndTagsWhenPasteTest(event);
  }

  ngOnInit(): void {}

  private clearStyleAndTagsWhenPasteTest(event: any) {
    event.preventDefault();
    console.log(event);
    var text = (event.originalEvent || event).clipboardData.getData(
      'text/plain'
    );
    document.execCommand('insertHTML', false, text);
  }
}
