import {Component, DestroyRef, inject, OnInit, signal} from '@angular/core';
import {interval, map, tap} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {INTERVAL_CLOCK_MEDIUM} from '../../constants';

@Component({
  selector: 'app-clock',
  imports: [],
  templateUrl: './clock.html',
  styleUrl: './clock.scss',
})
export class Clock implements OnInit {
  public readonly currentTime = signal<string>('');
  public readonly currentDay = signal<string>('');

  private readonly destroyRef = inject(DestroyRef);

  public ngOnInit(): void {
    this.initClockStream();
    this.initCurrentDate();
  }

  public initCurrentDate(): void {
    const now = new Date();

    const formattedDate = now.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    this.currentDay.set(formattedDate);
  }

  private initClockStream(): void {
    interval(INTERVAL_CLOCK_MEDIUM).pipe(
      map(() => new Date()),
      map((date: Date) => date.toLocaleTimeString()),
      tap((time) => this.currentTime.update(() => time)),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe();
  }

}
