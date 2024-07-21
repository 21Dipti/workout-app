import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkoutService } from '../workout.service';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-user-graph',
  standalone: true,
  imports: [CommonModule, FormsModule, BaseChartDirective],
  templateUrl: './user-graph.component.html',
  styleUrls: ['./user-graph.component.css']
})
export class UserGraphComponent implements OnInit {
  workouttypes: string[] = [];
  times: number[] = [];
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: []
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };
  public lineChartLegend: boolean = true;
  public chartTitle: string = '';
  public chartDescription: string = '';

  constructor(private workoutService: WorkoutService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const nameParam = params.get('name');
      if (nameParam !== null) {
        this.getdetails(nameParam);
      } else {
        console.error('Name parameter is missing');
      }
    });
  }

  getdetails(user: string): void {
    let workouts = this.workoutService.getWorkouts();
    let workout = workouts.find(workout => workout.name === user);
    if (workout) {
      this.times = workout.time;
      this.workouttypes = workout.type;

      this.lineChartData = {
        labels: this.workouttypes,
        datasets: [
          {
            data: this.times,
            label: 'Workout Duration',
            fill: true,
            tension: 0.5,
            borderColor: 'rgba(75,192,192,1)',
            backgroundColor: 'rgba(75,192,192,0.2)',
          }
        ]
      };

      this.chartTitle = `${user}'s Workout Data`;
      this.chartDescription = `This chart shows the workout durations for ${user}.`;
    }
  }
}