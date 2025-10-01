import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-toaster',
  imports: [Toast, ButtonModule, Ripple, AvatarModule],
  templateUrl: './toaster.html',
  styleUrl: './toaster.css',
  providers: [MessageService]
})
export class Toaster {
  @Input() title: string = "";
  @Input() description: string = "";
  constructor(private messageService: MessageService) { }

  visible: boolean = false;

  showConfirm() {
    if (!this.visible) {
      this.messageService.add({ key: 'confirm', sticky: true, severity: 'success', summary: `${this.description}` });
      this.visible = true;
    }
  }

  onConfirm() {
    this.messageService.clear('confirm');
    this.visible = false;
  }

  onReject() {
    this.messageService.clear('confirm');
    this.visible = false;
  }
}
