import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddWorkoutComponent } from './add-workout/add-workout.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutService } from './workout.service';
import { routes } from './app.routes';
import { UserGraphComponent } from './user-graph/user-graph.component';
import { BaseChartDirective } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    AddWorkoutComponent,
    WorkoutListComponent,
    UserGraphComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Import ReactiveFormsModule here
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
    BaseChartDirective,
  ],
  providers: [WorkoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
