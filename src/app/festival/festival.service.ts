// festival.service.ts
import { Injectable } from '@angular/core';
import { FESTIVALS, FestivalConfig } from './festival.config';

@Injectable({ providedIn: 'root' })
export class FestivalService {
  getTodayFestival(): FestivalConfig | null {
    const today = new Date();
    const todayStr = `${String(today.getMonth() + 1).padStart(2, '0')}-${String(
      today.getDate()
    ).padStart(2, '0')}`;

    return (
      FESTIVALS.find((f) =>
        f.end ? todayStr >= f.start && todayStr <= f.end : todayStr === f.start
      ) || null
    );
  }
}
