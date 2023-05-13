import {css, customElement, html} from 'lit-element';
import {nothing} from 'lit-html';
import {guard} from 'lit-html/directives/guard';
import {fonts} from './theme-fonts';
import {ThemeCSSProperty} from './theme-css-property';

const fontWeightValues = [
  'normal',
  'bold',
  'lighter',
  'bolder',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  'inherit',
  'initial',
  'unset'
];

const textTransformValues = [
  'none',
  'capitalize',
  'uppercase',
  'lowercase',
  'full-width',
  'full-size-kana',
  'inherit',
  'initial',
  'unset'
];

@customElement('theme-css-property-font')
export class ThemeCSSPropertyFont extends ThemeCSSProperty {
  static importedFonts = new Set<string>();
  static styles = [
    ...ThemeCSSProperty.styles,
    css`
      input {
        padding: 0 0.5rem;
      }
    `
  ];

  renderValue() {
    if (this.name.includes('font-family')) {
      return this.renderFontFamilyValue();
    } else if (this.name.includes('font-size')) {
      return this.renderFontSizeValue();
    } else if (this.name.includes('line-height')) {
      return this.renderLineHeightValue();
    } else if (this.name.includes('font-weight')) {
      return this.renderFontWeightValue();
    } else if (this.name.includes('letter-spacing')) {
      return this.renderLetterSpacingValue();
    } else if (this.name.includes('text-transform')) {
      return this.renderTextTransformValue();
    } else {
      return nothing;
    }
  }

  renderFontFamilyValue() {
    return html`
      <select class="mdc-typography--caption" @change=${this.onFontFamilychange}>
        <option>--mdc-typography-font-family</option>
        ${guard(fonts, () => Array.from(fonts.entries()).map(([key, value]) => html`
          <option value=${key} ?selected=${this.value === value}>${value}</option>
        `))}
      </select>
    `;
  }

  renderFontSizeValue() {
    return this.renderRemInput();
  }

  renderLineHeightValue() {
    return this.renderRemInput();
  }

  renderFontWeightValue() {
    return this.renderSelectWith(fontWeightValues);
  }

  renderLetterSpacingValue() {
    return html`
      <input class="mdc-typography--caption"
        .value=${this.value.replace('em', '')}
        @change=${this.onLetterSpacingValueChange}
      ><span>em;</span>
    `;
  }

  renderTextTransformValue() {
    return this.renderSelectWith(textTransformValues);
  }

  renderRemInput() {
    return html`
      <input class="mdc-typography--caption" type="number"
        min="0"
        .value=${this.value.replace('rem', '')}
        @change=${this.onRemValueChange}
      ><span>rem;</span>
    `;
  }

  renderSelectWith(values: string[]) {
    return html`
      <select class="mdc-typography--caption" @change=${this.onInputChange}>
        ${guard(values, () => values.map(value => html`
          <option value=${value} ?selected=${this.value === value || !this.value && value === 'inherit'}>${value}</option>
        `))}
      </select>
    `;
  }

  renderVisualization() {
    return nothing;
  }

  protected onFontFamilychange(e: Event) {
    const select = e.target as HTMLSelectElement;
    const key = select.value;
    const value = fonts.get(key);
    if (value) {
      this.importFont(key);
    }

    this.updateValue(value || '');
  }

  protected importFont(key: string) {
    if (!ThemeCSSPropertyFont.importedFonts.has(key)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `https://fonts.googleapis.com/css?family=${key}:100,200,300,400,500,600,700,800,900&display=swap`;
      document.head.appendChild(link);
      ThemeCSSPropertyFont.importedFonts.add(key);
    }
  }

  protected onRemValueChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.updateValue(`${input.value}rem`);
  }

  protected onLetterSpacingValueChange(e: Event) {
    const input = e.target as HTMLInputElement;
    if (isNaN(Number(input.value))) {
      this.updateValue(input.value);
    } else {
      this.updateValue(`${input.value}em`);
    }
  }
}
