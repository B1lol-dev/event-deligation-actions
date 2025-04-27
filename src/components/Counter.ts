export const Counter = (count: number): string => {
  const updateCount = () => {
    const counterElm = document.getElementById("counter_button")?.children[1]
      ?.children[0]! as HTMLButtonElement;
    if (counterElm) {
      counterElm.textContent = count.toString();
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
    <div class="min-h-screen flex flex-col items-center justify-center bg-blue-950 snap-center relative">
      <button type="button" id="counter_button" class="z-1 shadow-md scale-150 skew-x-5">
        <span class="counter_button_back"></span>
        <span class="counter_button_front"><p class="text-white">${count}</p></span>
      </button>
      <div class="absolute h-[600px] w-[750px] skew-x-20 bg-amber-700 bottom-40">
        <div class="h-[calc(100%+170px)] w-[50px] bg-amber-700 -skew-x-20 absolute top-0 -translate-x-[140px]"></div>
        <div class="h-[calc(100%+170px)] w-[50px] bg-amber-700 -skew-x-20 absolute top-0 right-0 -translate-x-[140px]"></div>
        <div class="h-[calc(100%+170px)] w-[50px] bg-amber-700 -skew-x-20 absolute bottom-0 translate-y-full -translate-x-[140px]"></div>
        <div class="h-[calc(100%+170px)] w-[50px] bg-amber-700 -skew-x-20 absolute bottom-0 right-0 translate-y-full -translate-x-[140px]"></div>
      </div>
    </div>
    `;
};
