import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonCard, IonCardContent, IonChip, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.page.html',
  styleUrls: ['./appointments.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, IonContent, IonCard, IonCardContent, IonChip, IonButton],
})
export class AppointmentsPage {
  appointments = [
    { title: 'Brake inspection', date: 'Tue, 10:00 AM', time: '10:00', status: 'Confirmed', color: 'success' },
    { title: 'Oil change', date: 'Thu, 2:30 PM', time: '14:30', status: 'Pending', color: 'warning' },
    { title: 'Battery check', date: 'Sat, 11:00 AM', time: '11:00', status: 'Completed', color: 'primary' },
  ];
}
