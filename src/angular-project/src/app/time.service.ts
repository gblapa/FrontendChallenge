// time.service.ts
import { Injectable } from '@angular/core';
import { Time } from './models/time.model';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
   times: Time[] = [];

  constructor() {
    this.loadTimesFromLocalStorage();
  }

  private loadTimesFromLocalStorage() {
    const storedTimes = localStorage.getItem('times');
    if (storedTimes) {
      this.times = JSON.parse(storedTimes);
    }
  }

  private saveTimesToLocalStorage() {
    localStorage.setItem('times', JSON.stringify(this.times));
  }


  getTimes(): Time[] {
    return this.times;
  }

  setTimes(times: Time[]): void {
    this.times = times;
  }

  addTime(newTime: Time): void {
    this.times.push(newTime);
  }

  updateTimes(updatedTime: Time): void {
    const index = this.times.findIndex(t => t.id === updatedTime.id);
    if (index !== -1) {
      this.times[index] = updatedTime;
    }
  }

  clearTimes(): void {
    this.times = [];
  }
}