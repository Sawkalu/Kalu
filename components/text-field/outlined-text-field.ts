/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import '../field/outlined-field.js';

import {html, TemplateResult} from 'lit';
import {customElement} from 'lit/decorators.js';

import {styles as outlinedStyles} from './lib/outlined-styles.css.js';
import {OutlinedTextField} from './lib/outlined-text-field.js';
import {styles as sharedStyles} from './lib/shared-styles.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-outlined-text-field': MdOutlinedTextField;
  }
}

/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
@customElement('md-outlined-text-field')
export class MdOutlinedTextField extends OutlinedTextField {
  static override styles = [sharedStyles, outlinedStyles];

  /** @soyTemplate */
  protected override renderField(): TemplateResult {
    return html`
      <md-outlined-field
        class="md3-text-field__field"
        id=${this.fieldID}
        .disabled=${this.disabled}
        .error=${this.error}
        .label=${this.label}
        .populated=${Boolean(this.value)}
        .required=${this.required}
      >
        ${this.renderFieldContent()}
      </md-outlined-field>
    `;
  }
}
