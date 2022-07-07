import { Component } from '@angular/core';

@Component({
  selector: 'app-plus-iocn',
  template: ` <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 283.46 283.46"
  >
    <path
      fill="white"
      class="cls-1"
      d="M141.73,283.46A141.73,141.73,0,1,1,283.46,141.73,141.73,141.73,0,0,1,141.73,283.46ZM63.5,121.87a19.86,19.86,0,1,0,.28,39.72c18.35,0,36.71.07,55.06-.05,2.53,0,3.11.74,3,3.1-.17,4.6-.06,9.22,0,13.83,0,13.93-.18,27.86.07,41.78a19.83,19.83,0,1,0,39.66-.71c0-18.17.07-36.34,0-54.51,0-2.75.61-3.52,3.45-3.49,18.35.13,36.71.2,55.06,0,8.38-.1,14.66-4.17,18-11.95,3.28-7.54,2.08-14.65-3.22-20.91-4.21-5-9.81-6.87-16.24-6.85-17.8.06-35.61,0-53.41.09-2.71,0-3.73-.5-3.7-3.54.16-18.08.08-36.16.08-54.24a19.88,19.88,0,1,0-39.74-.35q0,27.81,0,55.62c0,1.92-.47,2.51-2.45,2.48-9.4-.1-18.81,0-28.22,0C82,121.86,72.72,121.79,63.5,121.87Z"
      transform="translate(0 0)"
    />
  </svg>`,
  styles: [
    `
      svg {
        display: block;
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class PlusIconComponent {}