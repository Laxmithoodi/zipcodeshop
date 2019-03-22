import { NgModule } from '@angular/core';

import { ZipcodeshopSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [ZipcodeshopSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [ZipcodeshopSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ZipcodeshopSharedCommonModule {}
