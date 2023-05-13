/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {html, LitElement, TemplateResult} from 'lit';
import {property, state, queryAsync} from 'lit/decorators';
import {ClassInfo, classMap} from 'lit/directives/class-map';
import {ifDefined} from 'lit/directives/if-defined';
import {live} from 'lit/directives/live';

import {redispatchEvent} from '../../controller/events';
import {FormController, getFormValue} from '../../controller/form-controller';
import {ariaProperty} from '../../decorators/aria-property';
import {Field} from '../../field/lib/field';

import {TextFieldFoundation} from './foundation';
import {TextFieldState} from './state';

/** @soyCompatible */
export abstract class TextField extends LitElement implements TextFieldState {
  static override shadowRootOptions:
      ShadowRootInit = {mode: 'open', delegatesFocus: true};

  // TextFieldState
  @property({type: Boolean, reflect: true}) disabled = false;
  @property({type: Boolean, reflect: true}) error = false;
  @property({type: String}) label?: string;
  @property({type: Boolean, reflect: true}) required = false;
  @property({type: String}) value = '';

  // ARIA
  // TODO(b/210730484): replace with @soyParam annotation
  @property({type: String, attribute: 'data-aria-label', noAccessor: true})
  @ariaProperty
  override ariaLabel!: string;

  // FormElement
  get form() {
    return this.closest('form');
  }

  @property({type: String, reflect: true}) name = '';

  [getFormValue]() {
    return this.value;
  }

  // <input> properties
  @property({type: String, reflect: true}) placeholder = '';
  @property({type: Boolean, reflect: true}) readonly = false;
  @property({type: String, reflect: true}) type = 'text';

  protected abstract readonly field: Promise<Field>;
  @state()
  protected fieldID = 'field';
  @queryAsync('.md3-text-field__input')
  protected readonly input!: Promise<HTMLInputElement>;

  protected foundation = new TextFieldFoundation({state: this});

  constructor() {
    super();
    this.addController(new FormController(this));
  }

  /** @soyTemplate */
  override render(): TemplateResult {
    return html`
      <span class="md3-text-field ${classMap(this.getRenderClasses())}">
        ${this.renderField()}
      </span>
    `;
  }

  /** @soyTemplate */
  protected getRenderClasses(): ClassInfo {
    return {};
  }

  /** @soyTemplate */
  protected abstract renderField(): TemplateResult;

  /** @soyTemplate */
  protected renderFieldContent(): TemplateResult {
    return html`
      <input
        class="md3-text-field__input"
        aria-invalid=${this.error}
        aria-label=${ifDefined(this.ariaLabel)}
        aria-labelledby="field"
        .disabled=${this.disabled}
        .placeholder=${this.placeholder}
        .readonly=${this.readonly}
        .required=${this.required}
        .type=${this.type}
        .value=${live(this.value)}
        @blur=${this.handleBlur}
        @change=${this.redispatchEvent}
        @focus=${this.handleFocus}
        @input=${this.handleInput}
      >
    `;
  }

  protected async handleBlur() {
    (await this.field).focused = false;
  }

  protected async handleFocus() {
    (await this.field).focused = true;
  }

  protected handleInput(event: InputEvent) {
    this.value = (event.target as HTMLInputElement).value;
    this.redispatchEvent(event);
  }

  // TODO(b/209811542): check l2w compatibility
  protected redispatchEvent = redispatchEvent.bind(this);
}
