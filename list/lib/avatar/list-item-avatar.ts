/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {html, LitElement, nothing, TemplateResult} from 'lit';
import {property} from 'lit/decorators.js';

// tslint:disable-next-line:enforce-comments-on-exported-symbols
export class ListItemAvatar extends LitElement {
  /**
   * The image `src` for the avatar
   */
  @property() avatar = '';

  /**
   * The image `alt`.
   */
  @property() altText = '';

  /**
   * The image `loading` attribute.
   */
  @property() loading: 'eager'|'lazy' = 'eager';

  override render(): TemplateResult {
    return html`
       <img
          src="${this.avatar}"
          alt="${this.altText || nothing}"
          loading="${this.loading}"
        class="md3-list-item__avatar" />
     `;
  }
}
