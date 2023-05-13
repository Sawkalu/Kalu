/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {customElement} from 'lit/decorators.js';

import {styles as listItemStyles} from '../list/lib/listitem/list-item-styles.css.js';

import {MenuItemEl} from './lib/menuitem/menu-item.js';
import {styles as privateProps} from './lib/menuitem/menu-item-private-styles.css.js';
import {styles} from './lib/menuitem/menu-item-styles.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-menu-item': MdMenuItem;
  }
}

/** */
@customElement('md-menu-item')
export class MdMenuItem extends MenuItemEl {
  static override styles = [privateProps, listItemStyles, styles];
}
