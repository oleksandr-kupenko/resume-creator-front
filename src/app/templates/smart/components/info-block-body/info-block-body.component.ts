import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info-block-body',
  templateUrl: './info-block-body.component.html',
  styleUrls: ['./info-block-body.component.scss'],
})
export class InfoBlockBodyComponent implements OnInit {
  @Input() isEditMode = false;
  @Input() infoContent: InfoBlockData[] = [
    {
      rows: [
        {
          placeholder: 'Company name',
          value: '',
          date: { from: '', to: '' },
          isTitle: true,
        },
        {
          placeholder: 'Position',
          value: '',
        },
        {
          placeholder:
            'Description (Try to list your achievements rather than just job responsibilities)',
          value: '',
        },
      ],
    },
    {
      rows: [
        {
          placeholder: 'Company name',
          value: '',
          date: { from: '', to: '' },
          isTitle: true,
        },
        {
          placeholder: 'Position',
          value: '',
        },
        {
          placeholder:
            'Description (Try to list your achievements rather than just job responsibilities)',
          value: '',
        },
      ],
    },
    {
      isDefaultItemForExample: true,
      rows: [
        {
          placeholder: 'Company name',
          value: '',
          date: { from: '', to: '' },
          isTitle: true,
        },
        {
          placeholder: 'Position',
          value: '',
        },
        {
          placeholder:
            'Description (Try to list your achievements rather than just job responsibilities)',
          value: '',
        },
      ],
    },
  ];

  public checkIcon = faCheckCircle;

  private defaultItem!: InfoBlockData;

  constructor() {}

  ngOnInit(): void {
    this.setDefaultItem();
  }

  public handleDelete(index: number, event: Event) {
    event.stopPropagation();
    this.infoContent.splice(index, 1);
  }

  public handleAddItem() {
    this.infoContent.push(this.defaultItem);
  }

  private setDefaultItem() {
    this.defaultItem = {
      ...this.infoContent.find((item) => item.isDefaultItemForExample),
      isDefaultItemForExample: false,
    } as InfoBlockData;
  }
}

export interface InfoBlockData {
  isDefaultItemForExample?: boolean;
  rows: InfoBlockDataRow[];
}

export interface InfoBlockDataRow {
  placeholder: string;
  value: string;
  date?: { from: Date | string; to: Date | string };
  isTitle?: boolean;
}
