import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from './chat.service';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {
   MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
} from '@angular/material';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {};

@NgModule({
  imports: [
    CommonModule,
      FormsModule,
      PerfectScrollbarModule,
      MatFormFieldModule,
      MatInputModule,
      MatChipsModule,
  ],
  declarations: [ChatDialogComponent],
    exports: [ChatDialogComponent],
  providers: [
      {
          provide: PERFECT_SCROLLBAR_CONFIG,
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      },
      ChatService]
})
export class ChatModule { }
