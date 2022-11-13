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
  declarations: [DropdownDirective, UserDataFormComponent],
  providers: [APP_PROVIDERS],
  imports: [
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
  ],
})
export class SharedModule {}
