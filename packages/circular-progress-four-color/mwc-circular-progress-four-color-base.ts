/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import {CircularProgressBase} from '@material/mwc-circular-progress/mwc-circular-progress-base';
import {html, TemplateResult} from 'lit-element';

/** @soyCompatible */
export class CircularProgressFourColorBase extends CircularProgressBase {
  /** @soyTemplate */
  protected renderIndeterminateContainer(): TemplateResult {
    return html`
      <div class="mdc-circular-progress__indeterminate-container">
        <div class="mdc-circular-progress__spinner-layer mdc-circular-progress__color-1">
          ${this.renderIndeterminateSpinnerLayer()}
        </div>
        <div class="mdc-circular-progress__spinner-layer mdc-circular-progress__color-2">
          ${this.renderIndeterminateSpinnerLayer()}
        </div>
        <div class="mdc-circular-progress__spinner-layer mdc-circular-progress__color-3">
          ${this.renderIndeterminateSpinnerLayer()}
        </div>
        <div class="mdc-circular-progress__spinner-layer mdc-circular-progress__color-4">
          ${this.renderIndeterminateSpinnerLayer()}
        </div>
      </div>`;
  }
}
