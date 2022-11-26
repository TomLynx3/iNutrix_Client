import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MissingTranslationHandlerFactory,
  TranslateServiceFactory,
  TranslationLoaderFactory,
  TranslationParserFactory,
} from 'src/app/utilities/i18n/factory';
import {
  MissingTranslationHandler,
  TranslateLoader,
  TranslateModule,
  TranslateParser,
  TranslateService,
} from '@ngx-translate/core';
import { CustomIconModule } from '@ibabylondev/custom-icon';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDataFormComponent } from 'src/app/components/user-data-form/user-data-form.component';
import { DropdownDirective } from 'src/app/directives/dropdown.directive';
import { ConfirmationDialogComponent } from 'src/app/components/confirmation-dialog/confirmation-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MomentPipe } from 'src/app/utilities/pipes/moment.pipe';

export const APP_PROVIDERS = [
  {
    provide: MissingTranslationHandler,
    useFactory: MissingTranslationHandlerFactory,
  },
  {
    provide: TranslateLoader,
    useFactory: TranslationLoaderFactory,
  },
  {
    provide: TranslateParser,
    useFactory: TranslationParserFactory,
  },
  {
    provide: TranslateService,
    useFactory: TranslateServiceFactory,
    deps: [TranslateLoader, TranslateParser, MissingTranslationHandler],
  },
];

@NgModule({
  declarations: [
    DropdownDirective,
    UserDataFormComponent,
    ConfirmationDialogComponent,
    MomentPipe,
  ],
  providers: [APP_PROVIDERS],
  imports: [
    MatDialogModule,
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslationLoaderFactory,
      },

      parser: {
        provide: TranslateParser,
        useFactory: TranslationParserFactory,
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useFactory: MissingTranslationHandlerFactory,
      },
    }),
    CustomIconModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],

  exports: [
    TranslateModule,
    CustomIconModule,
    ReactiveFormsModule,
    DropdownDirective,
    UserDataFormComponent,
    ConfirmationDialogComponent,
    MatDialogModule,
    MomentPipe,
  ],
})
export class SharedModule {}
