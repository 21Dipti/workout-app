import { TestBed } from '@angular/core/testing';
import { WorkoutService, Workout, User } from './workout.service';

describe('WorkoutService', () => {
  let service: WorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a workout and save it to local storage', () => {
    const workout: Workout = {
      name: 'John Doe',
      type: ['Cycling'],
      time: [30],
      total_time: 30
    };

    spyOn(localStorage, 'setItem');
    service.addWorkout(workout.name, workout.type[0], workout.time[0]);

    const storedWorkouts = JSON.parse(localStorage.getItem('workouts') || '[]');
    expect(storedWorkouts.length).toBeGreaterThan(0);
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('should load workouts from local storage', () => {
    const mockWorkouts: Workout[] = [
      {
        name: 'John Doe',
        type: ['Cycling'],
        time: [30],
        total_time: 30
      }
    ];

    localStorage.setItem('workouts', JSON.stringify(mockWorkouts));
    service.loadWorkouts();
    expect(service.getWorkouts()).toEqual(mockWorkouts);
  });
});
