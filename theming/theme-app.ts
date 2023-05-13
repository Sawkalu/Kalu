import '@material/mwc-button';
import '@material/mwc-checkbox';
import '@material/mwc-fab';
import '@material/mwc-icon-button';
import '@material/mwc-linear-progress';
import '@material/mwc-list';
import '@material/mwc-list/mwc-list-item';
import {Menu} from '@material/mwc-menu';
import '@material/mwc-radio';
import '@material/mwc-select';
import '@material/mwc-slider';
import '@material/mwc-switch';
import '@material/mwc-tab';
import '@material/mwc-tab-bar';
import '@material/mwc-textfield';
import {TopAppBar} from '@material/mwc-top-app-bar';
import '@material/mwc-top-app-bar';
import {style as typographyStyle} from '@material/mwc-typography';
import {LitElement, css, customElement, html, property, query} from 'lit-element';
import './theme-component';
import './theme-contrast';
import './theme-css-property';
import './theme-css-property-font';
import './theme-css-property-shape';
import './theme-header';

@customElement('theme-app')
export class ThemeApp extends LitElement {
  static styles = [
    typographyStyle,
    css`
      :host {
        /* Default theme */
        --mdc-theme-background: #ffffff;
        --mdc-theme-primary: #6200ee;
        --mdc-theme-on-primary: #ffffff;
        --mdc-theme-secondary: #018786;
        --mdc-theme-on-secondary: #ffffff;
        --mdc-theme-error: #b00020;
        --mdc-theme-on-error: #ffffff;
        --mdc-theme-surface: #ffffff;
        --mdc-theme-on-surface: #000000;
        --mdc-shape-small: 4px;
        --mdc-shape-medium: 4px;
        --mdc-shape-large: 0;
        --mdc-typography-font-family: Roboto;
        --mdc-typography-headline1-font-size: 6rem;
        --mdc-typography-headline1-line-height: 6rem;
        --mdc-typography-headline1-font-weight: 300;
        --mdc-typography-headline1-letter-spacing: -0.015625em;
        --mdc-typography-headline1-text-transform: inherit;
        --mdc-typography-headline2-font-size: 3.75rem;
        --mdc-typography-headline2-line-height: 3.75rem;
        --mdc-typography-headline2-font-weight: 300;
        --mdc-typography-headline2-letter-spacing: -0.00833333em;
        --mdc-typography-headline2-text-transform: inherit;
        --mdc-typography-headline3-font-size: 3rem;
        --mdc-typography-headline3-line-height: 3rem;
        --mdc-typography-headline3-font-weight: 400;
        --mdc-typography-headline3-letter-spacing: normal;
        --mdc-typography-headline3-text-transform: inherit;
        --mdc-typography-headline4-font-size: 2.125rem;
        --mdc-typography-headline4-line-height: 2.5rem;
        --mdc-typography-headline4-font-weight: 400;
        --mdc-typography-headline4-letter-spacing: 0.00735294em;
        --mdc-typography-headline4-text-transform: inherit;
        --mdc-typography-headline5-font-size: 1.5rem;
        --mdc-typography-headline5-line-height: 2rem;
        --mdc-typography-headline5-font-weight: 400;
        --mdc-typography-headline5-letter-spacing: normal;
        --mdc-typography-headline5-text-transform: inherit;
        --mdc-typography-headline6-font-size: 1.25rem;
        --mdc-typography-headline6-line-height: 2rem;
        --mdc-typography-headline6-font-weight: 500;
        --mdc-typography-headline6-letter-spacing: 0.0125em;
        --mdc-typography-headline6-text-transform: inherit;
        --mdc-typography-subtitle1-font-size: 1rem;
        --mdc-typography-subtitle1-line-height: 1.75rem;
        --mdc-typography-subtitle1-font-weight: 400;
        --mdc-typography-subtitle1-letter-spacing: 0.009375em;
        --mdc-typography-subtitle1-text-transform: inherit;
        --mdc-typography-subtitle2-font-size: 0.875rem;
        --mdc-typography-subtitle2-line-height: 1.375rem;
        --mdc-typography-subtitle2-font-weight: 500;
        --mdc-typography-subtitle2-letter-spacing: 0.00714286em;
        --mdc-typography-subtitle2-text-transform: inherit;
        --mdc-typography-body1-font-size: 1rem;
        --mdc-typography-body1-line-height: 1.5rem;
        --mdc-typography-body1-font-weight: 400;
        --mdc-typography-body1-letter-spacing: 0.03125em;
        --mdc-typography-body1-text-transform: inherit;
        --mdc-typography-body2-font-size: 0.875rem;
        --mdc-typography-body2-line-height: 1.25rem;
        --mdc-typography-body2-font-weight: 400;
        --mdc-typography-body2-letter-spacing: 0.0178571em;
        --mdc-typography-body2-text-transform: inherit;
        --mdc-typography-caption-font-size: 0.75rem;
        --mdc-typography-caption-line-height: 1.25rem;
        --mdc-typography-caption-font-weight: 400;
        --mdc-typography-caption-letter-spacing: 0.0333333em;
        --mdc-typography-caption-text-transform: inherit;
        --mdc-typography-button-font-size: 0.875rem;
        --mdc-typography-button-line-height: 2.25rem;
        --mdc-typography-button-font-weight: 500;
        --mdc-typography-button-letter-spacing: 0.0892857em;
        --mdc-typography-button-text-transform: uppercase;
        --mdc-typography-overline-font-size: 0.75rem;
        --mdc-typography-overline-line-height: 2rem;
        --mdc-typography-overline-font-weight: 500;
        --mdc-typography-overline-letter-spacing: 0.166667em;
        --mdc-typography-overline-text-transform: uppercase;

        display: flex;
      }

      aside,
      main {
        overflow: auto;
      }

      aside {
        max-width: 36rem;
        padding: 0 1.5rem 1rem;
        border-right: 1px solid lightgray;
      }

      main {
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        background: var(--mdc-theme-background);
      }

      mwc-linear-progress {
        width: 100%;
      }
    `
  ];

  @property()
  menuOpen = false;
  @query('mwc-menu')
  menu!: Menu;
  @query('#menu-button')
  menuButton!: HTMLElement;
  @query('mwc-top-app-bar')
  topAppBar!: TopAppBar;
  @property()
  iconButtonOff = false;

  render() {
    return html`
      <aside>
        <h1 class="mdc-typography--headline5">Material Theme Generator</h1>
        <p class="mdc-typography--body2">
          Build a Material Design using CSS custom properties, or upload an image to generate a theme based on the image.
        </p>
        <theme-header
          title="Color Scheme"
          href="https://material.io/design/color/the-color-system.html#tools-for-picking-colors"
          leadingicon="colorize"
        ></theme-header>
        <theme-css-property name="--mdc-theme-background" .root=${this}></theme-css-property>
        <theme-contrast>
          <theme-css-property name="--mdc-theme-primary" .root=${this}></theme-css-property>
          <theme-css-property name="--mdc-theme-on-primary" .root=${this}></theme-css-property>
        </theme-contrast>
        <theme-contrast>
          <theme-css-property name="--mdc-theme-secondary" .root=${this}></theme-css-property>
          <theme-css-property name="--mdc-theme-on-secondary" .root=${this}></theme-css-property>
        </theme-contrast>
        <theme-contrast>
          <theme-css-property name="--mdc-theme-error" .root=${this}></theme-css-property>
          <theme-css-property name="--mdc-theme-on-error" .root=${this}></theme-css-property>
        </theme-contrast>
        <theme-contrast>
          <theme-css-property name="--mdc-theme-surface" .root=${this}></theme-css-property>
          <theme-css-property name="--mdc-theme-on-surface" .root=${this}></theme-css-property>
        </theme-contrast>
        <theme-header
          title="Shape System"
          href="https://material.io/design/color/the-color-system.html#tools-for-picking-colors"
          leadingicon="border_style"
        ></theme-header>
        <theme-css-property-shape name="--mdc-shape-small" .root=${this}></theme-css-property-shape>
        <theme-css-property-shape name="--mdc-shape-medium" .root=${this}></theme-css-property-shape>
        <theme-css-property-shape name="--mdc-shape-large" .root=${this}></theme-css-property-shape>
        <theme-header
          title="Typography Scale"
          href="https://material.io/design/color/the-color-system.html#tools-for-picking-colors"
          leadingicon="text_fields"
        ></theme-header>
        <theme-css-property-font name="--mdc-typography-font-family" .root=${this}></theme-css-property-font>
        <details>
          <summary>
            <span class="mdc-typography--headline1">Headline 1</span>
          </summary>
          <theme-css-property-font name="--mdc-typography-headline1-font-family" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-headline1-font-size" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-headline1-line-height" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-headline1-font-weight" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-headline1-letter-spacing" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-headline1-text-transform" .root=${this}></theme-css-property-font>
        </details>
        <details>
          <summary>
            <span class="mdc-typography--headline2">Headline 2</span>
          </summary>
          <theme-css-property-font name="--mdc-typography-headline2-font-family" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-headline2-font-size" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-headline2-line-height" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-headline2-font-weight" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-headline2-letter-spacing" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-headline2-text-transform" .root=${this}></theme-css-property-font>
        </details>
        <details>
          <summary>
            <span class="mdc-typography--headline3">Headline 3</span>
          </summary>
          <theme-css-property-font name="--mdc-typography-headline3-font-family" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-headline3-font-size" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-headline3-line-height" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-headline3-font-weight" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-headline3-letter-spacing" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-headline3-text-transform" .root=${this}></theme-css-property-font>
        </details>
        <details>
          <summary>
            <span class="mdc-typography--headline4">Headline 4</span>
          </summary>
          <theme-css-property-font name="--mdc-typography-headline4-font-family" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-headline4-font-size" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-headline4-line-height" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-headline4-font-weight" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-headline4-letter-spacing" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-headline4-text-transform" .root=${this}></theme-css-property-font>
        </details>
        <details>
          <summary>
            <span class="mdc-typography--headline5">Headline 5</span>
          </summary>
          <theme-css-property-font name="--mdc-typography-headline5-font-family" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-headline5-font-size" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-headline5-line-height" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-headline5-font-weight" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-headline5-letter-spacing" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-headline5-text-transform" .root=${this}></theme-css-property-font>
        </details>
        <details>
          <summary>
            <span class="mdc-typography--headline6">Headline 6</span>
          </summary>
          <theme-css-property-font name="--mdc-typography-headline6-font-family" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-headline6-font-size" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-headline6-line-height" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-headline6-font-weight" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-headline6-letter-spacing" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-headline6-text-transform" .root=${this}></theme-css-property-font>
        </details>
        <details>
          <summary>
            <span class="mdc-typography--subtitle1">Subtitle 1</span>
          </summary>
          <theme-css-property-font name="--mdc-typography-subtitle1-font-family" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-subtitle1-font-size" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-subtitle1-line-height" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-subtitle1-font-weight" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-subtitle1-letter-spacing" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-subtitle1-text-transform" .root=${this}></theme-css-property-font>
        </details>
        <details>
          <summary>
            <span class="mdc-typography--subtitle2">Subtitle 2</span>
          </summary>
          <theme-css-property-font name="--mdc-typography-subtitle2-font-family" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-subtitle2-font-size" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-subtitle2-line-height" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-subtitle2-font-weight" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-subtitle2-letter-spacing" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-subtitle2-text-transform" .root=${this}></theme-css-property-font>
        </details>
        <details>
          <summary>
            <span class="mdc-typography--body1">Body 1</span>
          </summary>
          <theme-css-property-font name="--mdc-typography-body1-font-family" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-body1-font-size" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-body1-line-height" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-body1-font-weight" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-body1-letter-spacing" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-body1-text-transform" .root=${this}></theme-css-property-font>
        </details>
        <details>
          <summary>
            <span class="mdc-typography--body2">Body 2</span>
          </summary>
          <theme-css-property-font name="--mdc-typography-body2-font-family" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-body2-font-size" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-body2-line-height" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-body2-font-weight" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-body2-letter-spacing" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-body2-text-transform" .root=${this}></theme-css-property-font>
        </details>
        <details>
          <summary>
            <span class="mdc-typography--caption">Caption</span>
          </summary>
          <theme-css-property-font name="--mdc-typography-caption-font-family" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-caption-font-size" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-caption-line-height" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-caption-font-weight" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-caption-letter-spacing" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-caption-text-transform" .root=${this}></theme-css-property-font>
        </details>
        <details>
          <summary>
            <span class="mdc-typography--button">Button</span>
          </summary>
          <theme-css-property-font name="--mdc-typography-button-font-family" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-button-font-size" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-button-line-height" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-button-font-weight" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-button-letter-spacing" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-button-text-transform" .root=${this}></theme-css-property-font>
        </details>
        <details>
          <summary>
            <span class="mdc-typography--overline">Overline</span>
          </summary>
          <theme-css-property-font name="--mdc-typography-overline-font-family" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-overline-font-size" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-overline-line-height" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-overline-font-weight" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-overline-letter-spacing" .root=${this}></theme-css-property-font>
          <theme-css-property-font name="--mdc-typography-overline-text-transform" .root=${this}></theme-css-property-font>
        </details>
      </aside>
      <main>
        <theme-component name="Button" href="https://material.io/design/components/buttons.html">
          <mwc-button raised label="Button"></mwc-button>
          <mwc-button label="Button"></mwc-button>
          <mwc-button outlined label="Button"></mwc-button>
        </theme-component>
        <theme-component name="Top App Bar" href="https://material.io/design/components/app-bars-top.html">
          <mwc-top-app-bar>
            <mwc-icon-button icon="menu" slot="navigationIcon"></mwc-icon-button>
            <div slot="title">Headline 6</div>
            <mwc-icon-button icon="share" slot="actionItems"></mwc-icon-button>
            <mwc-icon-button icon="bookmark" slot="actionItems"></mwc-icon-button>
            <mwc-icon-button icon="search" slot="actionItems"></mwc-icon-button>
          </mwc-top-app-bar>
        </theme-component>
        <theme-component name="Drawer" href="https://material.io/design/components/navigation-drawer.html">
        </theme-component>
        <theme-component name="Menu" href="https://material.io/design/components/menus.html">
          <mwc-button id="menu-button" label="Open Menu" @click=${() => this.menuOpen = true}></mwc-button>
          <mwc-menu absolute activatable .open=${this.menuOpen} @closed=${() => this.menuOpen = false}>
            <mwc-list-item>Body 2</mwc-list-item>
            <mwc-list-item>Body 2</mwc-list-item>
            <mwc-list-item>Body 2</mwc-list-item>
            <mwc-list-item>Body 2</mwc-list-item>
          </mwc-menu>
        </theme-component>
        <theme-component name="Linear Progress" href="https://material.io/design/components/progress-indicators.html#linear-progress-indicators">
          <mwc-linear-progress indeterminate></mwc-linear-progress>
        </theme-component>
        <theme-component name="Switch" href="https://material.io/design/components/selection-controls.html#switches">
          <mwc-switch></mwc-switch>
          <mwc-switch checked></mwc-switch>
        </theme-component>
        <theme-component name="Checkbox" href="https://material.io/design/components/selection-controls.html#checkboxes">
          <mwc-checkbox></mwc-checkbox>
          <mwc-checkbox checked></mwc-checkbox>
        </theme-component>
        <theme-component name="Radio Button" href="https://material.io/design/components/selection-controls.html#radio-buttons">
          <mwc-radio name="radio"></mwc-radio>
          <mwc-radio name="radio" checked></mwc-radio>
        </theme-component>
        <theme-component name="Icon Button" href="https://material.io/design/components/buttons.html#toggle-button">
          <mwc-icon-button
            icon=${this.iconButtonOff ? 'music_off' : 'music_note'}
            @click=${this.toggleIconButton}
          ></mwc-icon-button>
        </theme-component>
        <theme-component name="Select" href="https://material.io/develop/web/components/input-controls/select-menus/">
          <mwc-select outlined label="Pick a Food Group">
            <mwc-list-item></mwc-list-item>
            <mwc-list-item value="grains">Grains</mwc-list-item>
            <mwc-list-item value="vegetables">Vegetables</mwc-list-item>
            <mwc-list-item value="fruit">Fruit</mwc-list-item>
          </mwc-select>
          <mwc-select label="Pick a Food Group">
            <mwc-list-item></mwc-list-item>
            <mwc-list-item value="grains">Grains</mwc-list-item>
            <mwc-list-item value="vegetables">Vegetables</mwc-list-item>
            <mwc-list-item value="fruit">Fruit</mwc-list-item>
          </mwc-select>
        </theme-component>
        <theme-component name="List" href="https://material.io/design/components/lists.html">
          <mwc-list>
            <mwc-list-item graphic="icon" twoline>
              <mwc-icon slot="graphic">child_care</mwc-icon>
              <span>Subtitle 1</span>
              <span slot="secondary">Body 2</span>
            </mwc-list-item>
            <li divider role="separator"></li>
            <mwc-list-item graphic="icon" twoline>
              <mwc-icon slot="graphic">child_care</mwc-icon>
              <span>Subtitle 1</span>
              <span slot="secondary">Body 2</span>
            </mwc-list-item>
            <li divider role="separator"></li>
            <mwc-list-item graphic="icon" twoline>
              <mwc-icon slot="graphic">child_care</mwc-icon>
              <span>Subtitle 1</span>
              <span slot="secondary">Body 2</span>
            </mwc-list-item>
          </mwc-list>
        </theme-component>
        <theme-component name="FAB" href="https://material.io/design/components/buttons-floating-action-button.html">
          <mwc-fab extended icon="edit" label="Button"></mwc-fab>
          <mwc-fab icon="favorite"></mwc-fab>
          <mwc-fab mini icon="add"></mwc-fab>
        </theme-component>
        <theme-component name="Text Field" href="https://material.io/design/components/text-fields.html">
          <mwc-textfield outlined label="Label" helper="Assistive text" helperpersistent icontrailing="visibility"></mwc-textfield>
          <mwc-textfield label="Label" helper="Assistive text" helperpersistent icontrailing="visibility"></mwc-textfield>
        </theme-component>
        <theme-component name="Tabs" href="https://material.io/design/components/tabs.html">
          <mwc-tab-bar>
            <mwc-tab label="Button"></mwc-tab>
            <mwc-tab label="Button"></mwc-tab>
            <mwc-tab label="Button"></mwc-tab>
          </mwc-tab-bar>
        </theme-component>
        <theme-component name="Slider" href="https://material.io/design/components/sliders.html">
          <mwc-slider step="1" pin markers min="1" max="10" value="5"></mwc-slider>
        </theme-component>
        <theme-component name="Snackbar" href="https://material.io/design/components/snackbars.html">
        </theme-component>
        <theme-component name="Dialog" href="https://material.io/design/components/dialogs.html">
        </theme-component>
      </main>
    `;
  }

  firstUpdated() {
    this.menu.anchor = this.menuButton;
    this.topAppBar.updateComplete.then(() => {
      this.topAppBar.shadowRoot!.querySelector<HTMLElement>('.mdc-top-app-bar')!.style.position = 'relative';
    });
  }

  protected toggleIconButton() {
    this.iconButtonOff = !this.iconButtonOff;
  }
}
