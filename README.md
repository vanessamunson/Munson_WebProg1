<h1>College of Winterhold Student Portal</h1>
<p>
  This project is made for web programming I class, and is built around a database I created for fun based on Skyrim's perk trees and College of Winterhold. All the "classes" in the 
  database are perks in the mage skill tree, and the amount of skill points they require to unlock correspond to their level in the school. The names of the levels are the names for 
  the "difficulty" of a spell in Skyrim, or how much magicka it will consume to cast. The data for the students and professors are accurate to how they're portrayed in the game, 
  including their rank, department, level, race, and hall. I had a blast designing this project, so I hope you can see it in my work.
</p>

<h2>Tools Used</h2>
<p>I was required to show my knowledge of PHP, HTML, CSS, and optionally JavaScript in my project. In order to use PHP, my professor and I agreed that I could use Laravel.</p>
<p>Stack:</p>
<ul>
  <li>Laravel Breeze</li>
  <li>Inertia with React</li>
  <li>MySQL</li>
</ul>
<p>
  I have made projects with Laravel and Angular before, but I used React this time to gain experience with it since it's incredibly popular, and I could employ JavaScript. 
  The database connection was with MySQL because it's my favorite.
</p>

<h2>Project Structure</h2>
<p>
  I included the csv files from my external database to show my tables since I have limited migrations. The /public/images folder in the root directory contains a few custom images, including the 
  college logo which I created. Inside the app directory, there components, pages, and the main two layouts -- guest and authenticated. The models for the main tables contain some relationships for
  ease of access in the controllers, and I was sure to include password hashing as well.
</p>

<h2>Functionality</h2>
<p>This project includes CRUD methods for the main user and subject tables.</p>

<h3>Users</h3>
<h4>Logging In and Registration</h4>
<p>
  If the user is signed in upon entry to the site, they will be directed to the dashboard. Otherwise, they will be prompted to either log in or sign up. When they log in, they can choose to stay signed 
  in. If they sign up, they have multiple fields that are mandatory to fill, and their password will be hashed when it is stored. The user will get a session token that will keep them logged in.
</p>

<h4>Updating and Deletion</h4>
<p>
  The user can open a dropdown by hovering over their username in the top right of the navbar. From there, they can open a user dashboard where they can edit their information or 
  delete their account. They can also simply log out from this dashboard.
</p>

<h3>Subjects</h3>
<h4>Registration</h4>
<p>
  After navigating to the "register for subject" section, the student can search for subjects to register for using filters at the top of the page. When no filters are chosen, the subjects 
  shown will be of any level either from the user's own department, or facultative courses from other departments. The results are paginated, so I had to make the filters stay across the page 
  refresh as the user moves between the pages. The subjects are shown in rows in a table, and each row contains a button to let the student view the subject to get more information. When this 
  button is clicked, a modal will appear with the course's available times, its lecturer, and its entire description. This data is fetched by utilizing the table relationships defined within the models.
  A user is unable to register for a subject time if they already have.
</p>

<h4>Deregistration</h4>
<p>
  If the student navigates to the "registered subjects" section, they can see a table of the subjects that they are currently registered for, and they have the option to deregister for them. 
  If they click the red "drop" button next to the subject they want to drop, then a modal will appear to confirm their selection. If they continue, then it will be dropped from the subject_times table.
</p>

<h2>Future Updates</h2>
<p>
  I think that the controller and page for the main subjects table is a bit messy, so I'd like to improve them. I think I can combine some methods in the controller to make them less redundant. I am 
  interested in expanding the functionality to include an admin login that can update students' grades and attendance. 
</p>

<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>


