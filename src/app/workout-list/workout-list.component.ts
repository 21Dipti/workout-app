import { Component, OnInit } from '@angular/core';
import { WorkoutService, Workout, User } from '../workout.service';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {
  userData: User[] = [];
  workoutData: Workout[] = [];
  workouttypes: string[] = [];
  times: number[] = [];
  filteredData: Workout[] = [];
  page: number = 1;
  itemsPerPage: number = 5; // Example items per page

  constructor(private workoutService: WorkoutService) { }

  ngOnInit() {
    this.workoutData = this.workoutService.getWorkouts();
    this.filteredData = this.workoutData;
    this.userData = this.workoutService.getUsers();
    this.filterWorkouts();
  }

  filterWorkouts() {
    this.displayPage(this.page);
  }

  displayPage(page: number) {
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const pageData = this.filteredData.slice(startIndex, endIndex);
  
    const tbody = document.getElementsByTagName('tbody')[0]; // Assuming there's only one tbody element
    tbody.innerHTML = ''; // Clear existing rows
  
    for (let index = 0; index < pageData.length; index++) {
      const ele0 = document.createElement('tr');
      ele0.innerHTML = `
        <td><a href='getdetails/${pageData[index].name}'>${pageData[index].name}</a></td>
        <td>${pageData[index].type.join(', ')}</td>
        <td>${pageData[index].type.length}</td>
        <td>${pageData[index].total_time}</td>
      `;
      tbody.appendChild(ele0);
    }
  }

  getdetails(user: string): void {
    alert("clicked")
    let workouts = this.workoutService.getWorkouts();
    let workout = workouts.find(workout => workout.name === user)
    if (workout) {
      this.times = workout.time
      this.workouttypes = workout.type
      for (let index = 0; index < this.workouttypes.length; index++) {
        console.log(this.workouttypes[index], this.times[index])
      }

    }
  }
  changePage(page: number) {
    if (page > 0 && page <= Math.ceil(this.workoutData.length / this.itemsPerPage)) {
      this.page = page;
      this.filterWorkouts();
    }
  }

  nextPage() {
    if (this.page * this.itemsPerPage < this.workoutData.length) {
      this.changePage(this.page + 1);
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.changePage(this.page - 1);
    }
  }
  onSearchChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const filterValue = target.value.toLowerCase();
    if (filterValue !== '') {
      this.filteredData = this.workoutData.filter(workout =>
        workout.type.some(type => type.toLowerCase().includes(filterValue))
      );
      // Clear and update the table
      const tbody0 = document.getElementsByTagName('tbody')[0]; // Assuming there's only one tbody element
      tbody0.innerHTML = ''; // Clear existing rows
      console.log(this.filteredData)
      for (let index = 0; index < this.filteredData.length; index++) {
        const ele0 = document.createElement('tr');
        ele0.innerHTML = `
      <td><a href='getdetails/${this.filteredData[index].name}'>${this.filteredData[index].name}</a></td>
      <td>${this.filteredData[index].type.join(', ')}</td>
      <td>${this.filteredData[index].type.length}</td>
      <td>${this.filteredData[index].total_time}</td>
    `;
        tbody0.appendChild(ele0);
      }

      this.page = 1; // Reset to first page
      this.displayPage(this.page);
    }
    else{
      this.filteredData = this.workoutData;
      this.filterWorkouts();
    }
  } 
  onNameSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    const filterValue = target.value;
    if (filterValue !== '') {
      this.filteredData = this.workoutData.filter(workout =>
        workout.name.includes(filterValue)
      );
      // Clear and update the table
      const tbody0 = document.getElementsByTagName('tbody')[0]; 
      tbody0.innerHTML = ''; 
      console.log(this.filteredData)
      for (let index = 0; index < this.filteredData.length; index++) {
        const ele0 = document.createElement('tr');
        ele0.innerHTML = `
      <td><a href='getdetails/${this.filteredData[index].name}'>${this.filteredData[index].name}</a></td>
      <td>${this.filteredData[index].type.join(', ')}</td>
      <td>${this.filteredData[index].type.length}</td>
      <td>${this.filteredData[index].total_time}</td>
    `;
        tbody0.appendChild(ele0);
      }

      this.page = 1; // Reset to first page
      this.displayPage(this.page);
    }
    else{
      this.filteredData = this.workoutData;
      this.filterWorkouts();
    }
  } 
}
