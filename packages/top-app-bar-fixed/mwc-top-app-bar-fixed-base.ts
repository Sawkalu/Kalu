/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

// Style preference for leading underscores.
// tslint:disable:strip-private-property-underscore

import {TopAppBarBase} from '@material/mwc-top-app-bar/mwc-top-app-bar-base';
import {passiveEventOptionsIfSupported} from '@material/mwc-top-app-bar/mwc-top-app-bar-base-base';
import MDCFixedTopAppBarFoundation from '@material/top-app-bar/fixed/foundation';

export class TopAppBarFixedBase extends TopAppBarBase {
  protected override mdcFoundation!: MDCFixedTopAppBarFoundation;

  protected override mdcFoundationClass = MDCFixedTopAppBarFoundation;

  protected override barClasses() {
    return {
      ...super.barClasses(),
      'mdc-top-app-bar--fixed': true,
    };
  }

  protected override registerListeners() {
    this.scrollTarget.addEventListener(
        'scroll', this.handleTargetScroll, passiveEventOptionsIfSupported);
  }

  protected override unregisterListeners() {
    this.scrollTarget.removeEventListener('scroll', this.handleTargetScroll);
  }
}
