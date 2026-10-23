import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonContent, IonItem, IonLabel, IonList } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, IonContent, IonList, IonItem, IonLabel, IonButton],
})
export class ProfilePage {
  profileItems = [
    'My vehicles',
    'Payment methods',
    'Notifications',
    'Support',
  ];
}
