import { Component, Input, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info-block-head',
  templateUrl: './info-block-head.component.html',
  styleUrls: ['./info-block-head.component.scss'],
})
export class InfoBlockHeadComponent implements OnInit {
  @Input() headIcon = faEnvelope;
  @Input() headTitle = '';
  @Input() headPlaceholder = 'test title';

  constructor() {}

  ngOnInit(): void {}
}
