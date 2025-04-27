interface IUserInfo {
  name: string;
  age: number;
  location?: string;
  hobbies?: string[];
  interests?: string[];
  skills?: string[];
  education?: string[];
  experience?: string[];
  projects?: string[];
  achievements?: string[];
  languages?: string[];
  certifications?: string[];
}

export const UserInfo = (user: IUserInfo): string => {
  return /*html*/ `
    <div class="min-h-screen relative z-0 flex flex-col items-center justify-center snap-center bg-black bg-no-repeat bg-center bg-cover">
        <div id="user_card" class="flex flex-col items-center justify-center bg-white p-5 rounded-md shadow-md relative">
            <h1 class="text-2xl mb-3">${user.name}</h1>
            <div class="flex flex-col items-center justify-center rounded-md shadow-lg transition-all duration-200 h-0 overflow-hidden bg-gray-200">
                <div class="p-5">
                    <p><b>Age</b>: ${user.age}</p>
                    <p><b>Location</b>: ${user.location}</p>
                    <p><b>Hobbies</b>: ${user.hobbies?.join(", ")}</p>
                    <p><b>Interests</b>: ${user.interests?.join(", ")}</p>
                    <p><b>Skills</b>: ${user.skills?.join(", ")}</p>
                    <p><b>Education</b>: ${user.education?.join(", ")}</p>
                    <p><b>Experience</b>: ${user.experience?.join(", ")}</p>
                    <p><b>Projects</b>: ${user.projects?.join(", ")}</p>
                    <p><b>Achievements</b>: ${user.achievements?.join(", ")}</p>
                    <p><b>Languages</b>: ${user.languages?.join(", ")}</p>
                    <p><b>Certifications</b>: ${user.certifications?.join(
                      ", "
                    )}</p>
                </div>
            </div>
            <button type="button" onclick="this.previousElementSibling.classList.toggle('h-[300px]!'); this.children[0].innerText=this.previousElementSibling.className.includes('h-[300px]!') ? 'See less' : 'See more'">
              <span>See more</span>
            </button>
        </div>
    </div>
    `;
};
