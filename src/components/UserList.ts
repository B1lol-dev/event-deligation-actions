interface IUserListUser {
  id: number;
  firstName: string;
  lastName: string;
}

type IUserList = Array<IUserListUser>;

export const UserList = (users: IUserList): string => {
  setTimeout(() => {
    const user_list_form = document.getElementById(
      "user_list_form"
    ) as HTMLFormElement;

    user_list_form.addEventListener("submit", (e: Event) => {
      e.preventDefault();

      const firstName = user_list_form.children[0] as HTMLInputElement;
      const lastName = user_list_form.children[1] as HTMLInputElement;

      if (firstName.value || lastName.value) {
        return;
      }

      users.push({
        id: users.length + 1,
        firstName: firstName.value,
        lastName: lastName.value,
      });

      firstName.value = "";
      lastName.value = "";

      const tableBody = document.getElementById(
        "user_list_tbody"
      ) as HTMLTableElement;

      tableBody.innerHTML = users
        .map(
          (user) => /*html*/ `
          <tr class="bg-gray-200 odd:bg-gray-300 transition duration-150 cursor-pointer hover:bg-gray-400">
            <td class="border border-transparent px-4 py-2">${user.id}</td>
            <td class="border border-transparent px-4 py-2">${user.firstName}</td>
            <td class="border border-transparent px-4 py-2">${user.lastName}</td>
          </tr>
        `
        )
        .join("");
    });
  }, 0);

  return /*html*/ `
    <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-bl from-pink-300 via-red-400 to-blue-700 snap-center">
        <table class="table-auto rounded-md overflow-hidden max-w-[650px] w-full">
          <thead class="bg-white">
            <tr>
              <th class="text-left border border-transparent px-4 py-2">N</th>
              <th class="text-left border border-transparent px-4 py-2">First Name</th>
              <th class="text-left border border-transparent px-4 py-2">Last Name</th>
            </tr>
          </thead>
          <tbody id="user_list_tbody">
            ${users
              .map(
                (user) => /*html*/ `
                  <tr class="bg-gray-200 odd:bg-gray-300 transition duration-150 cursor-pointer hover:bg-gray-400">
                    <td class="border border-transparent px-4 py-2">${user.id}</td>
                    <td class="border border-transparent px-4 py-2">${user.firstName}</td>
                    <td class="border border-transparent px-4 py-2">${user.lastName}</td>
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
        <form id="user_list_form" class="flex items-center justify-center gap-2 bg-white p-3 rounded-lg mt-5 max-w-[650px] w-full">
          <input type="text" placeholder="first name" class="px-3 text-lg max-w-[200px]">
          <input type="text" placeholder="last name" class="px-3 text-lg max-w-[200px]">

          <button type="submit">
            <span>Create</span>
          </button>
        </form>
    </div>
  `;
};
