import { Component } from '@angular/core';

@Component({
  selector: 'app-mouse-coordination',
  templateUrl: './mouse-coordination.component.html',
  styleUrls: ['./mouse-coordination.component.css']
})

export class MouseCoordinationComponent {

  event: MouseEvent;
    clientX = 0;
    clientY = 0;

    onEvent(event: MouseEvent): void {
        this.event = event;
    }

    coordinates(event: MouseEvent): void {
        this.clientX = event.clientX;
        this.clientY = event.clientY;
    }
    
}
