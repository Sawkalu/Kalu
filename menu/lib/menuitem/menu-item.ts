/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {property} from 'lit/decorators.js';

import {ListItemEl} from '../../../list/lib/listitem/list-item.js';
import {ARIARole} from '../../../types/aria.js';
import {CLOSE_REASON, DefaultCloseMenuEvent, isClosableKey, MenuItem} from '../shared.js';

/** Base class for menu item component. */
export class MenuItemEl extends ListItemEl implements MenuItem {
  override role: ARIARole = 'menuitem';
  @property({type: Boolean, attribute: 'md-menu-item', reflect: true})
  isMenuItem = true;
  @property({type: Boolean, attribute: 'keep-open-on-click'})
  keepOpenOnClick = false;

  protected override onClick() {
    if (this.keepOpenOnClick) return;

    this.dispatchEvent(
        new DefaultCloseMenuEvent(this, {kind: CLOSE_REASON.CLICK_SELECTION}));
  }

  protected override onKeydown(e: KeyboardEvent) {
    const keyCode = e.code;
    if (isClosableKey(keyCode)) {
      e.preventDefault();
      this.dispatchEvent(new DefaultCloseMenuEvent(
          this, {kind: CLOSE_REASON.KEYDOWN, key: keyCode}));
    }
  }
}
