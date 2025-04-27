export const Counter = (count: number): string => {
  const updateCount = () => {
    const button = document.getElementById(
      "counter_button"
    ) as HTMLButtonElement;
    if (button) {
      button.textContent = `Count is: ${count}`;
    }
  };

  setTimeout(() => {
    const button = document.getElementById(
      "counter_button"
    ) as HTMLButtonElement;
    if (button) {
      button.addEventListener("click", () => {
        count += 1;
        updateCount();
      });

      button.addEventListener("dblclick", () => {
        count = 0;
        updateCount();
      });
    }
  }, 0);

  return /*html*/ `
    <div class="min-h-screen flex flex-col items-center justify-center bg-blue-950 snap-center">
      <button type="button" class="bg-purple-500 text-white px-5 py-3 rounded-md transition-all duration-100 text-xl font-semibold hover:opacity-90 active:scale-95" id="counter_button">Count is: ${count}</button>
    </div>
    `;
};
