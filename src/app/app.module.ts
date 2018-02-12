import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DndModule} from 'ng2-dnd';

import { AppComponent } from './app.component';
import { ColumnViewComponent } from './column-view/column-view.component';
import { ToDoPomodorosComponent } from './to-do-pomodoros/to-do-pomodoros.component';


@NgModule({
  declarations: [
    AppComponent,
    ColumnViewComponent,
    ToDoPomodorosComponent
  ],
  imports: [
    BrowserModule,
    DndModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
