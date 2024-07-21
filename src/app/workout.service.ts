import { Injectable } from '@angular/core';

export interface Workout {
  name: string;
  type: string[];
  time: number[];
  total_time: number;
}

export interface User {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private oldWorkouts: Workout[] = [];
  private workouts: Workout[] = [];
  private users: User[] = [];

  private oldWorkoutsAdded: boolean = false;

  constructor() {
    this.loadWorkouts();
    if (!this.oldWorkoutsAdded) {
      this.addOldWorkout('John Doe', 'Running', 30);
      this.addOldWorkout('John Doe', 'Cycling', 45);
      this.addOldWorkout('Jane Smith', 'Running', 30);
      this.addOldWorkout('Jane Smith', 'Swimming', 50);
      this.addOldWorkout('Mike Johnson', 'Cycling', 35);
      this.addOldWorkout('Mike Johnson', 'Yoga', 55);
      this.oldWorkoutsAdded = true;
      this.saveWorkouts();
    }
  }

  addOldWorkout(name: string, type0: string, time0: number): void {
    let user = this.users.find(user => user.name === name);
    if (!user) {
      user = { name };
      this.users.push(user);
    }

    let workout = this.oldWorkouts.find(workout => workout.name === name);
    if (!workout) {
      workout = {
        name,
        type: [type0],
        time: [time0],
        total_time: time0
      };
      this.oldWorkouts.push(workout);
      this.workouts.push(workout); // Also add to the main workouts list
    } else {
      workout.type.push(type0);
      workout.time.push(time0);
      workout.total_time += time0;
    }
  }

  addWorkout(name: string, type0: string, time0: number): void {
    let user = this.users.find(user => user.name === name);
    if (!user) {
      user = { name };
      this.users.push(user);
    }

    let workout = this.workouts.find(workout => workout.name === name);
    if (!workout) {
      workout = {
        name,
        type: [type0],
        time: [time0],
        total_time: time0
      };
      this.workouts.push(workout);
    } else {
      workout.type.push(type0);
      workout.time.push(time0);
      workout.total_time += time0;
    }

    this.saveWorkouts();
  }

  getWorkouts(): Workout[] {
    return this.workouts;
  }

  getUsers(): User[] {
    return this.users;
  }

  private saveWorkouts(): void {
    localStorage.setItem('workouts', JSON.stringify(this.workouts));
    localStorage.setItem('users', JSON.stringify(this.users));
    localStorage.setItem('oldWorkoutsAdded', JSON.stringify(this.oldWorkoutsAdded));
  }

  private loadWorkouts(): void {
    const storedWorkouts = localStorage.getItem('workouts');
    const storedUsers = localStorage.getItem('users');
    const storedOldWorkoutsAdded = localStorage.getItem('oldWorkoutsAdded');
    if (storedWorkouts) {
      this.workouts = JSON.parse(storedWorkouts);
    }
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
    if (storedOldWorkoutsAdded) {
      this.oldWorkoutsAdded = JSON.parse(storedOldWorkoutsAdded);
    }
  }
}
