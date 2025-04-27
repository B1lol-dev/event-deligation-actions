import "./style.css";

// components
import { Counter } from "./components/Counter";
import { UserInfo } from "./components/UserInfo";
import { UserList } from "./components/UserList";
import { Login } from "./components/Login";
import { ParagraphStyleEditor } from "./components/ParagraphStyleEditor";

const root = document.getElementById("app")!;

const user = {
  name: "John Doe",
  age: 25,
  location: "New York",
  hobbies: ["Reading", "Traveling", "Cooking"],
  interests: ["Technology", "Music"],
  skills: ["JavaScript", "TypeScript", "React", "Redux"],
  education: ["Harvard University"],
  experience: ["Software Engineer at Facebook", "Intern at Google"],
  projects: ["Personal Portfolio", "E-commerce Website"],
  achievements: ["Employee of the Month", "Hackathon Winner"],
  languages: ["English", "Spanish"],
  certifications: ["AWS Certified Developer", "Google Analytics Certified"],
};

const users = [
  { id: 1, firstName: "John", lastName: "Doe" },
  { id: 2, firstName: "Jane", lastName: "Smith" },
  { id: 3, firstName: "Alice", lastName: "Johnson" },
];

root.innerHTML = /*html*/ `
  <div class="snap-mandatory snap-y h-screen overflow-y-scroll">
    ${Counter(0)}
    ${UserInfo(user)}
    ${UserList(users)}
    ${Login("john32", "123456")}
    ${ParagraphStyleEditor()}
  </div>
`;
