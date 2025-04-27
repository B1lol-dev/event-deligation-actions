export const Counter = (count: number): string => {
  const updateCount = () => {
    const button = document.getElementById("counter_button")
      ?.children[1] as HTMLButtonElement;
    if (button) {
      button.textContent = count.toString();
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
      <button type="button" id="counter_button">
        <span class="counter_button_back"></span>
        <span class="counter_button_front">${count}</span>
      </button>
    </div>
    `;
};
