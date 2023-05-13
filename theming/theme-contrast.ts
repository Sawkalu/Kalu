import {style as typography} from '@material/mwc-typography';
import {LitElement, css, customElement, html, property, query} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {ThemeCSSProperty} from './theme-css-property';

export type ContrastLevel = 'X' | 'AA' | 'AAA';

@customElement('theme-contrast')
export class ThemeContrast extends LitElement {
  static styles = [
    typography,
    css`
      :host {
        position: relative;
        display: flex;
        flex-direction: column;
      }

      ::slotted(*) {
        z-index: 1;
      }

      .contrast {
        position: absolute;
        top: 0.5rem;
        right: 1.5rem;
        height: calc(100% - 1rem);
        display: flex;
        align-items: center;
        border-right: 2px solid;
        padding-right: 2rem;
      }

      .contrast.fail {
        color: red;
      }

      .contrast.warn {
        color: orange;
      }

      .contrast.pass {
        color: green;
      }

      .contrast .mdc-typography--caption {
        font-weight: bold;
      }
    `
  ];

  @property()
  contrast?: string;
  @property()
  contrastLevel?: ContrastLevel;

  @query('slot')
  protected slotElement!: HTMLSlotElement;

  render() {
    const classes = {
      'fail': this.contrastLevel === 'X',
      'warn': this.contrastLevel === 'AA',
      'pass': this.contrastLevel === 'AAA'
    };

    return html`
      <div class="contrast ${classMap(classes)}">
        <strong class="mdc-typography--caption">${this.contrast}</strong>
      </div>
      <slot @change=${this.updateContrast} @slotchange=${this.updateContrast}></slot>
    `;
  }

  updateContrast() {
    const elements = this.slotElement.assignedElements({ flatten: true }).filter(this.isThemeCSSProperty);
    if (elements.length > 1) {
      const foreground = elements[0].value;
      const background = elements[1].value;
      const contrast = this.getContrast(foreground, background);
      let level: ContrastLevel;
      if (contrast >= 4.5) {
        level = 'AAA';
      } else if (contrast >= 3) {
        level = 'AA';
      } else {
        level = 'X';
      }

      this.contrast = `${contrast.toFixed(1)} ${level}`;
      this.contrastLevel = level;
    }
  }

  protected isThemeCSSProperty(element: Element): element is ThemeCSSProperty {
    return element instanceof ThemeCSSProperty;
  }

  protected getContrast(hex1: string, hex2: string) {
    // http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
    const lum1 = this.rgbToLuminance(this.hexToRgb(hex1));
    const lum2 = this.rgbToLuminance(this.hexToRgb(hex2));
    const lighterLum = Math.max(lum1, lum2);
    const darkerLum = Math.min(lum1, lum2);
    return (lighterLum + 0.05) / (darkerLum + 0.05);
  }

  protected hexToRgb(hex: string): [number, number, number] {
    hex = hex.replace('#', '');
    return [
      parseInt(hex.slice(0, 2), 16),
      parseInt(hex.slice(2, 4), 16),
      parseInt(hex.slice(4, 6), 16)
    ];
  }

  protected rgbToLuminance([r, g, b]: [number, number, number]) {
    // http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    return 0.2126 * this.getLuminanceComponent(r) +
      0.7152 * this.getLuminanceComponent(g) +
      0.0722 * this.getLuminanceComponent(b);
  }

  protected getLuminanceComponent(rgb: number) {
    const sRgb = rgb / 255;
    if (sRgb < 0.03928) {
      return sRgb / 12.92;
    } else {
      return Math.pow((sRgb + 0.055) / 1.055, 2.4);
    }
  }
}
