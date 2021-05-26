<h1 align="center">Mark</h1>
<p align="center">a minimalist grade tracker</p>
<div align="center">
  <img src="https://img.shields.io/tokei/lines/github/j985chen/grade-tracker" />
  <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/j985chen/grade-tracker">
  <a href="https://www.codefactor.io/repository/github/j985chen/grade-tracker">
    <img src="https://img.shields.io/codefactor/grade/github/j985chen/grade-tracker" />
  </a>
</div>

---

### Installation
1. Clone the repo
2. Run `npm download`
3. Run `npm start` to start the front-end server
4. `cd` into the `backend` folder
5. Run `nodemon server` to start the back-end server

### Features
- Adding/removing grades of different weights from multiple courses
- Organizing courses by term
- Calculating overall term averages
- User authentication (ish)

#### Coming soon
- Term/course renaming
- Move backend + frontend ports to a .env file
- Conversion to 4-point GPA scale
- Dark mode 😎

### Dependencies
Currently, this grade tracker uses:
- The MERN (`MongoDB`, `Express`, `React`, `Node.js`) stack
- `axios` for HTTP requests
- `Mongoose` for MongoDB object modeling
- `react-table` for the grade tables
- `Font Awesome 5` for some cool icons


