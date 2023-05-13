/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {customElement} from 'lit/decorators';

import {styles as elevationOverlayStyles} from '../elevation/lib/elevation-overlay-styles.css';

import {ElevatedButton} from './lib/elevated-button';
import {styles as elevatedStyles} from './lib/elevated-styles.css';
import {styles as sharedStyles} from './lib/shared-styles.css';

declare global {
  interface HTMLElementTagNameMap {
    'md-elevated-button': MdElevatedButton;
  }
}

/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
@customElement('md-elevated-button')
export class MdElevatedButton extends ElevatedButton {
  static override styles =
      [elevationOverlayStyles, sharedStyles, elevatedStyles];
}
