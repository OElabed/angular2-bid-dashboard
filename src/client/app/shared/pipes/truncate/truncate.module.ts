import { NgModule } from '@angular/core';

import { TruncateWordsPipe } from './truncate-words.pipe';
import { TruncateCharactersPipe } from './truncate-characters.pipe';

@NgModule({
    imports: [],
    declarations: [TruncateWordsPipe, TruncateCharactersPipe],
    exports: [TruncateWordsPipe, TruncateCharactersPipe]
})
export class TruncateModule {
}
