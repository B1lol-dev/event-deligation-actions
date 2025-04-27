import { showAlert } from "../utils/showAlert";

export const Login = (username: string, password: string): string => {
  setTimeout(() => {
    const login_form = document.getElementById(
      "login_form"
    )! as HTMLFormElement;

    const login_username = login_form.querySelector(
      "#login_username"
    ) as HTMLInputElement;
    const login_password = login_form.querySelector(
      "#login_password"
    ) as HTMLInputElement;

    login_form.addEventListener("submit", (e: Event) => {
      e.preventDefault();

      if (!login_username.value && !login_password) {
        return null;
      }

      if (
        login_username.value !== username ||
        login_password.value !== password
      ) {
        showAlert("error", "username or password is incorrect!");
        return null;
      }

      login_username.value = "";
      login_password.value = "";
      showAlert("success", "Welcome!");
    });
  }, 0);

  return /*html*/ `
    <div class="min-h-screen flex flex-col items-center justify-center bg-[url(https://images7.alphacoders.com/131/1311860.jpeg)] bg-no-repeat bg-center bg-cover snap-center animate-[login-bg_5s_linear_infinite]">
        <div class="bg-transparent shadow-[0_4px_30px_#0000001a] backdrop-blur-[10px] border-1 border-white w-[400px] h-[450px] rounded-xl flex items-center justify-center flex-col">
            <form id="login_form">
                <h2 class="text-3xl font-bold text-white text-center">Login</h2>
                <div class="w-[310px] my-8 border-b-2 border-b-white relative">
                    <input id="login_username" type="text" required class="w-full h-[50px] bg-transparent outline-none text-base text-white pl-1 peer">
                    <span></span>
                    <label for="login_username" class="absolute top-[50%] left-[5px] translate-y-[-50%] text-base text-white pointer-events-none transition-all duration-200 peer-valid:top-[-5px] peer-focus:top-[-5px]">Username</label>
                </div>
                <div class="w-[310px] my-8 border-b-2 border-b-white relative">
                    <input id="login_password" type="password" required class="w-full h-[50px] bg-transparent outline-none text-base text-white pl-1 peer">
                    <span></span>
                    <label for="login_password" class="absolute top-[50%] left-[5px] translate-y-[-50%] text-base text-white pointer-events-none transition-all duration-200 peer-valid:top-[-5px] peer-focus:top-[-5px]">Password</label>
                </div>
                <div class="-mt-4 mb-4 text-sm text-white flex justify-between">
                    <label><input type="checkbox" class="mr-0.5"> Remember me?</label>
                    <a href="#" class="hover:underline">Forgot password?</a>
                </div>
                <button type="submit" class="h-[40px] w-full outline-none rounded-4xl bg-white text-base font-medium">Login</button>
                <p class="text-sm text-center mt-6 mb-2.5 text-white">Don't have an account? <a href="#" class="font-semibold hover:underline">Register</a></p>
            </form>
        </div>
    </div>
  `;
};
