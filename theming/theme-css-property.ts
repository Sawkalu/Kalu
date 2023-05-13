import {style as typography} from '@material/mwc-typography';
import {LitElement, TemplateResult, css, customElement, html, property} from 'lit-element';
import {nothing} from 'lit-html';

@customElement('theme-css-property')
export class ThemeCSSProperty extends LitElement {
  static styles = [
    typography,
    css`
      :host {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 1.5rem;
      }

      code {
        --mdc-typography-font-family: 'Roboto Mono';
      }

      input,
      select {
        --mdc-typography-caption-font-weight: bold;

        box-sizing: border-box;
        background: none;
        border: 1px solid lightgray;
        border-radius: 4px;
      }

      input[type="color"] {
        width: 3rem;
        height: 1.5rem;
        padding: 0;
        border: none;
      }
    `
  ];

  @property()
  name = '';
  root: HTMLElement = this;

  get value() {
    return getComputedStyle(this).getPropertyValue(this.name).trim();
  }

  render() {
    return html`
      <code class="mdc-typography--caption">${this.renderName()}${this.renderValue()}</code>
      ${this.renderVisualization()}
    `;
  }

  renderName() {
    return html`<span class="name">${this.name}:</span>`;
  }

  renderValue(): TemplateResult | typeof nothing {
    return html`<strong class="value">&nbsp;${this.value};</strong>`;
  }

  renderVisualization(): TemplateResult | typeof nothing {
    return html`
      <input type="color" .value=${this.value} @change=${this.onInputChange}>
    `;
  }

  updateValue(value: string) {
    if (value) {
      this.root.style.setProperty(this.name, value);
    } else {
      this.root.style.removeProperty(this.name);
    }

    this.requestUpdate();
    this.dispatchEvent(new CustomEvent('change', {
      bubbles: true,
      composed: true
    }));
  }

  protected onInputChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.updateValue(input.value);
  }
}
