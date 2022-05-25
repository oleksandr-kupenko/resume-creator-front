import { Component } from '@angular/core';

@Component({
  selector: 'app-close-iocn',
  template: `<svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 36 36"
  >
    <style>
      .st0 {
        fill: #d97b7b;
      }
    </style>
    <path
      class="st0"
      d="M18 0C8.06 0 0 8.06 0 18s8.06 18 18 18 18-8.06 18-18S27.94 0 18 0zm0 33C9.73 33 3 26.27 3 18S9.73 3 18 3s15 6.73 15 15-6.73 15-15 15z"
    />
    <path
      class="st0"
      d="M25.06 10.94c-.585-.587-1.534-.587-2.12 0L18 15.88l-4.94-4.94c-.585-.586-1.534-.586-2.12 0-.294.292-.44.676-.44 1.06s.146.768.44 1.06L15.88 18l-4.94 4.94c-.586.585-.586 1.534 0 2.12.292.294.676.44 1.06.44s.768-.146 1.06-.44L18 20.12l4.94 4.94c.585.586 1.534.586 2.12 0s.586-1.535 0-2.12L20.12 18l4.94-4.94c.586-.585.586-1.535 0-2.12z"
    />
  </svg>`,
  styles: [
    `
      svg {
        .st0 {
          transition: 0.2s;
        }

        &:hover {
          .st0 {
            fill: red;
          }
        }
      }
    `,
  ],
})
export class CloseIconComponent {}
