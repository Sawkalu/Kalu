import '@material/mwc-icon';
import {style as typographyStyle} from '@material/mwc-typography';
import {LitElement, css, customElement, html, property} from 'lit-element';
import {nothing} from 'lit-html';
import {ifDefined} from 'lit-html/directives/if-defined';

@customElement('theme-header')
export class ThemeHeader extends LitElement {
  static styles = [
    typographyStyle,
    css`
      :host {
        display: flex;
        align-items: center;
      }

      a,
      mwc-icon {
        color: rgba(0, 0, 0, 0.54);
      }

      a {
        --mdc-typography-button-line-height: 3rem;

        display: flex;
        align-items: center;
        flex: 1;
      }

      a:hover,
      a:focus {
        text-decoration: none;
      }

      mwc-icon {
        --mdc-icon-size: 1rem;

        padding: 0 0.5rem;
      }

      mwc-icon:first-child {
        padding-right: 0.5rem;
      }

      a mwc-icon {
        padding-left: 0.5rem;
      }
    `
  ];

  @property()
  title = '';
  @property()
  href?: string;
  @property()
  leadingIcon?: string;

  render() {
    return html`
      <a class="mdc-typography--button" href=${ifDefined(this.href)} target=${ifDefined(this.href && '_target')}>
        ${this.leadingIcon ? html`<mwc-icon>${this.leadingIcon}</mwc-icon>` : nothing}
        ${this.title}
        ${this.href ? html`<mwc-icon>open_in_new</mwc-icon>` : nothing}
      </a>
    `;
  }
}
