import { Component} from '@angular/core';
import { WorkoutService } from '../workout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.css']
})
export class AddWorkoutComponent {

  constructor(private workoutService: WorkoutService, private router: Router) {}

  addwork(event: Event) {
    event.preventDefault();

    const nameInput = document.getElementById('name') as HTMLInputElement;
    const workoutTypeInput = document.getElementById('workoutType') as HTMLInputElement;
    const minutesInput = document.getElementById('minutes') as HTMLInputElement;

    const name = nameInput.value;
    const workoutType = workoutTypeInput.value;
    const minutes = parseInt(minutesInput.value, 10);

    console.log('Form Submitted!');
    console.log('Name:', name);
    console.log('Workout Type:', workoutType);
    console.log('Minutes:', minutes);

    this.workoutService.addWorkout(name, workoutType, minutes);
    
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl('workout-list');
    });
    
  }
}
