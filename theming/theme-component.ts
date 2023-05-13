import {LitElement, css, customElement, html, property} from 'lit-element';
import './theme-header';

@customElement('theme-component')
export class ThemeComponent extends LitElement {
  static styles = [
    css`
      :host {
        display: inline-block;
        margin: 1rem;
      }

      theme-header {
        margin-bottom: 1rem;
      }

      .components {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `
  ];

  @property()
  name = '';
  @property()
  href = '';

  render() {
    return html`
      <theme-header .title=${this.name} href=${this.href}></theme-header>
      <div class="components">
        <slot></slot>
      </div>
    `;
  }
}
