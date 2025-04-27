declare global {
  interface Window {
    setStyle: (property: string, value: string) => void;
  }
}

export const ParagraphStyleEditor = (): string => {
  setTimeout(() => {
    window.setStyle = (property: any, value: string): void => {
      document.getElementById("editable_paragraph")!.style[property] = value;
    };
  }, 0);

  return /*html */ `
    <div class="bg-gray-100 min-h-screen min-w-screen p-8 snap-center">
      <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 class="text-2xl font-bold mb-6 text-gray-800">Paragraph Style Editor</h1>

        <!-- Preview Area -->
        <div class="bg-gray-50 p-4 rounded-lg mb-6">
            <p id="editable_paragraph" class="p-4 border border-gray-300 rounded min-h-[100px]">
                This is an editable paragraph. Use the controls to change its style.
            </p>
        </div>

        <!-- Controls -->
        <div class="grid grid-cols-2 max-md:grid-cols-1 gap-6">
          <!-- Text Alignment -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h2 class="font-semibold mb-3 text-gray-700">Text Align</h2>
            <div class="flex space-x-2">
              <button onclick="window.setStyle('textAlign', 'left')" class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
                  Left
              </button>
              <button onclick="window.setStyle('textAlign', 'center')" class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
                  Center
              </button>
              <button onclick="window.setStyle('textAlign', 'right')" class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
                  Right
              </button>
              <button onclick="window.setStyle('textAlign', 'justify')" class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
                  Justify
              </button>
            </div>
          </div>

          <!-- Font Weight -->
          <div class="bg-gray-50 p-4 rounded-lg">
              <h2 class="font-semibold mb-3 text-gray-700">Font Weight</h2>
              <div class="flex space-x-2">
                  <button onclick="window.setStyle('fontWeight', 'normal')" class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
                      Normal
                  </button>
                  <button onclick="window.setStyle('fontWeight', 'bold')" class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
                      Bold
                  </button>
              </div>
          </div>

        </div>
      </div>
    </div>
  `;
};
