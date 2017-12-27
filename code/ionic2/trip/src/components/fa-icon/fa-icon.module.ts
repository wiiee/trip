import { NgModule } from "@angular/core";
import { FaIconComponent } from "./fa-icon.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
      FaIconComponent
    ],
    imports: [
      CommonModule
    ],
    exports: [
        FaIconComponent
    ]
  })
  export class FaIconModule {}