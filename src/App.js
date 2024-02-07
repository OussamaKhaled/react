import React from "react";
import "./App.css";

function App() {
const user = {
name: "Pablo Escobar",
jobTitle: "Drug dealer",
about:
"Passionate about web development and creating awesome user experiences.",
email: "pablo@gmail.com",
phone: "+200 612454",
skills: ["Cocaine","HTML", "CSS", "JavaScript", "React"],
photoURL:
"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Pablo_Escobar_Mug.jpg/260px-Pablo_Escobar_Mug.jpg", // Replace with your photo URL
};

return (
<div className="App">
<header className="App-header">
<img src={user.photoURL} alt="Profile" />
<h1>{user.name}</h1>
<p>{user.jobTitle}</p>
</header>

<section className="App-content">
<h2>About Me</h2>
<p>{user.about}</p>

<h2>Contact Information</h2>
<ul>
<li>Email: {user.email}</li>
<li>Phone: {user.phone}</li>
</ul>

<h2>Skills</h2>
<ul>
{user.skills.map((skill, index) => (
<li key={index}>{skill}</li>
))}
</ul>
</section>
</div>
);
}

export default App;