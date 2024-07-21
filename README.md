# Workout Tracker

This project is a workout tracking application built with Angular. It allows users to track their workout activities, view workout statistics, and filter workout data based on user names and workout types. The application utilizes local storage to persist data.

## Features

1. **Track Workouts**
   - Add new workout sessions for users.
   - Store workout data including workout type, duration, and total time.

2. **View Workouts**
   - Display a list of users and their workout details.
   - Paginate through the list of workouts.

3. **Filter Workouts**
   - Filter workouts by user name.
   - Filter workouts by workout type.

4. **Display Graphs**
   - Display workout data in graphical format using Chart.js.
   - Show different types of workouts and their durations.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Angular CLI installed globally (`npm install -g @angular/cli`).

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/workout-tracker.git
cd workout-tracker
```

2. Install dependencies:

```bash
npm install
```

3. Run the application:

```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`.

## Usage

### Adding Workouts

- Navigate to the "Add Workout" page.
- Enter the user's name, workout type, and duration.
- Click "Add Workout" to save the workout data.

### Viewing Workouts

- Navigate to the "Workout List" page.
- View the list of users and their workout details.
- Use the pagination buttons to navigate through the list.

### Filtering Workouts

- Use the "Search by Name" input to filter workouts by user name.
- Use the "Filter by Workout Type" input to filter workouts by workout type.

### Viewing Graphs

- Click on the name in the list and the webpage will load displaying the graphs.

## Code Structure

- `src/app/workout.service.ts`: Service for managing workout data and user information.
- `src/app/workout-list/workout-list.component.ts`: Component for displaying and filtering the list of workouts.
- `src/app/user-graph/user-graph.component.ts`: Component for displaying workout data in graphical format.

## Styling

The application uses Tailwind CSS for styling. The necessary Tailwind CSS classes are applied directly in the HTML files.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

