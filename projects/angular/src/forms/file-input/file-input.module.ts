/*
 * Copyright (c) 2016-2024 Broadcom. All Rights Reserved.
 * The term "Broadcom" refers to Broadcom Inc. and/or its subsidiaries.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClarityIcons, folderOpenIcon } from '@cds/core/icon';

import { ClrIconModule } from '../../icon/icon.module';
import { ClrCommonFormsModule } from '../common/common.module';
import { ClrFileInput } from './file-input';
import { ClrFileInputContainer } from './file-input-container';
import { ClrFileInputValidator } from './file-input-validator';
import { ClrFileInputValueAccessor } from './file-input-value-accessor';

@NgModule({
  imports: [CommonModule, ClrIconModule, ClrCommonFormsModule],
  declarations: [ClrFileInput, ClrFileInputContainer, ClrFileInputValidator, ClrFileInputValueAccessor],
  exports: [
    ClrCommonFormsModule,
    ClrFileInput,
    ClrFileInputContainer,
    ClrFileInputValidator,
    ClrFileInputValueAccessor,
  ],
})
export class ClrFileInputModule {
  constructor() {
    ClarityIcons.addIcons(folderOpenIcon);
  }
}
