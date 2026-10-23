import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent],
})
export class BookingPage {
  currentStep = 0;
  selectedServiceIds = new Set<number>([0, 1]);

  services = [
    {
      id: 0,
      title: 'Oil & filter change',
      description: 'Full synthetic oil and filter',
      price: 65,
      duration: 40,
      icon: 'oil',
    },
    {
      id: 1,
      title: 'Tire rotation',
      description: 'Even wear. A smoother ride.',
      price: 24,
      duration: 20,
      icon: 'tire',
    },
    {
      id: 2,
      title: 'Brake inspection',
      description: 'Pads, rotors & fluid check',
      price: 35,
      duration: 30,
      icon: 'brake',
    },
    {
      id: 3,
      title: 'Battery check',
      description: 'Battery health & starting test',
      price: 20,
      duration: 15,
      icon: 'battery',
    },
  ];

  centers = [
    {
      name: 'Harbor Auto Care',
      distance: '1.4 mi away',
      rating: '4.9 (248 reviews)',
      price: '$89',
      badge: 'Recommended',
    },
    {
      name: 'Citywide Auto Service',
      distance: '18 mi away',
      rating: '4.7 (186 reviews)',
      price: '$99',
      badge: 'Open today',
    },
  ];

  selectedCenter = this.centers[0];
  selectedDate = 'Monday, October 26';
  selectedTime = '9:30 AM';

  dates = [
    { label: 'M', value: '1' },
    { label: 'T', value: '2' },
    { label: 'W', value: '3' },
    { label: 'T', value: '4' },
    { label: 'F', value: '5' },
    { label: 'S', value: '6' },
    { label: 'S', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
    { label: '10', value: '10' },
    { label: '11', value: '11' },
    { label: '12', value: '12' },
    { label: '13', value: '13' },
    { label: '14', value: '14' },
    { label: '15', value: '15' },
    { label: '16', value: '16' },
    { label: '17', value: '17' },
    { label: '18', value: '18' },
    { label: '19', value: '19' },
    { label: '20', value: '20' },
    { label: '21', value: '21' },
    { label: '22', value: '22' },
    { label: '23', value: '23' },
    { label: '24', value: '24' },
    { label: '25', value: '25' },
    { label: '26', value: '26', isSelected: true },
    { label: '27', value: '27' },
    { label: '28', value: '28' },
    { label: '29', value: '29' },
    { label: '30', value: '30' },
    { label: '31', value: '31' },
  ];

  timeSlots = ['9:00 AM', '9:30 AM', '10:30 AM', '11:00 AM', '1:00 PM', '2:30 PM'];

  get selectedServices() {
    return this.services.filter((service) => this.selectedServiceIds.has(service.id));
  }

  get selectedCount(): number {
    return this.selectedServices.length;
  }

  get subtotal(): number {
    return this.selectedServices.reduce((total, service) => total + service.price, 0);
  }

  get totalMinutes(): number {
    return this.selectedServices.reduce((total, service) => total + service.duration, 0);
  }

  toggleService(serviceId: number) {
    if (this.selectedServiceIds.has(serviceId)) {
      this.selectedServiceIds.delete(serviceId);
      return;
    }

    this.selectedServiceIds.add(serviceId);
  }

  findServiceCenter() {
    if (this.selectedServiceIds.size === 0) {
      return;
    }

    this.currentStep = 1;
  }

  chooseCenter(center: (typeof this.centers)[number]) {
    this.selectedCenter = center;
  }

  continueToTimeSelection() {
    this.currentStep = 2;
  }

  reviewBooking() {
    this.currentStep = 3;
  }

  confirmAppointment() {
    this.currentStep = 4;
  }

  selectDate(date: string) {
    this.selectedDate = 'Monday, October ' + date;
  }

  selectTime(time: string) {
    this.selectedTime = time;
  }
}
