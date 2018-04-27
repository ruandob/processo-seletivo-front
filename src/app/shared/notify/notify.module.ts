import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { NotifyComponent } from './notify.component';
import { NotifyConfig } from './notify.config';

@NgModule({
  imports: [CommonModule],
  declarations: [NotifyComponent],
  exports: [NotifyComponent],
  entryComponents: [NotifyComponent]
})
export class NotifyModule {
  public static forRoot(): ModuleWithProviders {
    return {ngModule: NotifyModule, providers: [NotifyConfig]};
  }
}
