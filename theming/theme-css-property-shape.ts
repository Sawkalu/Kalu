import {css, customElement, html} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {ThemeCSSProperty} from './theme-css-property';

@customElement('theme-css-property-shape')
export class ThemeCSSPropertyShape extends ThemeCSSProperty {
  static styles = [
    ...ThemeCSSProperty.styles,
    css`
      input {
        width: 3rem;
        padding: 0 0.5rem;
        text-align: right;
      }

      .shape {
        border: 1px solid;
        background: lightgray;
        width: 3rem;
        height: 1.5rem;
        margin: 0.25rem 0;
      }

      .shape::after {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .shape.small {
        border-radius: var(--mdc-shape-small);
      }

      .shape.small::after {
        content: 'S';
      }

      .shape.medium {
        border-radius: var(--mdc-shape-medium);
      }

      .shape.medium::after {
        content: 'M';
      }

      .shape.large {
        border-radius: var(--mdc-shape-large);
      }

      .shape.large::after {
        content: 'L';
      }
    `
  ];

  renderValue() {
    return html`
      <input class="mdc-typography--caption" type="number"
        min="0"
        .value=${this.value.replace('px', '')}
        @change=${this.onInputChange}
      ><span>px;</span>
    `;
  }

  renderVisualization() {
    const classes = {
      small: this.name.includes('small'),
      medium: this.name.includes('medium'),
      large: this.name.includes('large')
    };

    return html`<span class="shape mdc-typography--caption ${classMap(classes)}"></span>`;
  }

  protected onInputChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.updateValue(`${input.value}px`);
  }
}
