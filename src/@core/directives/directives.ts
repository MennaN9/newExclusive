import { NgModule } from '@angular/core';

import { FeatherIconDirective } from '../directives/core-feather-icons/core-feather-icons';
import { RippleEffectDirective } from '../directives/core-ripple-effect/core-ripple-effect.directive';
import { PasteDirective } from './BlockPaste/Paste.directive';
import { NumbersOnlyDirective } from './number-only/numbers-only.directive';
import { TimesDirective } from './Times/time.directive';

@NgModule({
  declarations: [RippleEffectDirective, FeatherIconDirective ,NumbersOnlyDirective ,PasteDirective , TimesDirective],
  exports: [RippleEffectDirective, FeatherIconDirective ,NumbersOnlyDirective ,PasteDirective,TimesDirective]
})
export class CoreDirectivesModule { }
