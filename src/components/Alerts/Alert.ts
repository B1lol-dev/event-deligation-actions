export const AlertSuccess = (text: string): string => {
  return /*html*/ `
    <div class="fixed top-5 left-[50%] bg-green-400 -translate-x-[50%] px-5 py-3 z-50 max-w-[500px] w-full rounded-md flex justify-between items-center">
        <h1 class="text-2xl text-white">${text}</h1>
        <button type="button" onclick="this.parentElement.remove()" class="text-white p-5 text-xl">x</button>
    </div>
  `;
};
export const AlertWarn = (text: string): string => {
  return /*html*/ `
    <div class="fixed top-5 left-[50%] bg-orange-400 -translate-x-[50%] px-5 py-3 z-50 max-w-[500px] w-full rounded-md flex justify-between items-center">
        <h1 class="text-2xl text-white">${text}</h1>
        <button type="button" onclick="this.parentElement.remove()" class="text-white p-5 text-xl">x</button>
    </div>
  `;
};
export const AlertError = (text: string): string => {
  return /*html*/ `
    <div class="fixed top-5 left-[50%] bg-red-500 -translate-x-[50%] px-5 py-3 z-50 max-w-[500px] w-full rounded-md flex justify-between items-center">
        <h1 class="text-2xl text-white">${text}</h1>
        <button type="button" onclick="this.parentElement.remove()" class="text-white p-5 text-xl">x</button>
    </div>
  `;
};
