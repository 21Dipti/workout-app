import { Routes } from '@angular/router';
import { AddWorkoutComponent } from './add-workout/add-workout.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { UserGraphComponent } from './user-graph/user-graph.component';

export const routes: Routes = [
  { path: 'workout-list', component: WorkoutListComponent },
  { path: 'addworkout', component: AddWorkoutComponent },
  {path: '', component: WorkoutListComponent},
  {path: 'getdetails/:name', component: UserGraphComponent}
];
