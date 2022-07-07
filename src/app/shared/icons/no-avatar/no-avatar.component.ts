import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-no-avatar-iocn',
  template: `<svg
    class="image-placeholder"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 190 190"
    preserveAspectRatio="none"
  >
    <g style="fill: var(--main-color);">
      <path
        d="M0,0v183.251c15.395-8.867,47.347-19.414,57.982-25.544c2.194-1.265,3.299-8.73,3.243-13.058 c-0.007-0.515,3.882-1.352,3.882-1.352s0.689-8.595,2.123-11.676c1.078-2.317-0.531-8.492-0.531-8.492s-6.87-10.665-7.961-19.637 c-0.623-5.118-3.994-7.443-4.226-9.03c-0.647-4.438-1.722-13.469-2.074-15.759c-0.181-1.18,3.892-5.539,3.892-5.539 s-5.023-32.298,2.407-43.443c7.43-11.145,39.804-25.475,57.318-23.352c0,0-8.532,4.867-0.531,10.615 c6.546,4.702,16.078,11.586,17.68,17.46c4.826,17.695-0.166,33.489,0.365,38.797c0,0,3.352,3.839,3.715,5.307 c1.089,4.41-1.818,17.7-4.152,19.531c-1.767,1.386-2,5.42-3.278,12.312c-0.627,3.384-1.756,3.824-6.369,12.207 c-1.152,2.092-1.221,5.73,0,10.615c0.531,2.123,0.623,8.975,0.623,8.975s5.962,2.601,5.746,8.539 c-0.249,6.876,4.034,8.264,11.063,11.181c12.098,5.019,36.709,14.589,49.081,21.778V0H0z"
      ></path>
      <polygon
        points="94.017,145.23 85.417,157.024 94.017,162.43 87.628,190 102.372,190 97.703,162.43 104.583,155.059 	"
      ></polygon>
    </g>
  </svg>`,
  styles: [
    `
      svg {
        display: block;
        width: 100%;
        height: 100%;

        fill: var(--main-color);
      }
    `,
  ],
})
export class NoAvatarIconComponent {}
