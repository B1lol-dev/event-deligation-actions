declare global {
  interface Window {
    setStyle: (property: string, value: string) => void;
    setCustomProperty: () => void;
    resetStyles: () => void;
  }
}

export const ParagraphStyleEditor = (): string => {
  setTimeout(() => {
    window.setStyle = (property: any, value: string): void => {
      document.getElementById("editable_paragraph")!.style[property] = value;
    };

    window.setCustomProperty = () => {
      const custom_property_name = document.getElementById(
        "custom_property_name"
      ) as HTMLInputElement;
      const custom_property_value = document.getElementById(
        "custom_property_value"
      ) as HTMLInputElement;

      if (custom_property_name && custom_property_value) {
        window.setStyle(
          custom_property_name.value,
          custom_property_value.value
        );

        // Clear the inputs
        custom_property_name.value = "";
        custom_property_value.value = "";
      }
    };

    window.resetStyles = () => {
      const paragraph = document.getElementById(
        "editable_paragraph"
      ) as HTMLParagraphElement;
      paragraph.style = "";
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

          <!-- Font Style -->
          <div class="bg-gray-50 p-4 rounded-lg">
              <h2 class="font-semibold mb-3 text-gray-700">Font Style</h2>
              <div class="flex space-x-2">
                  <button onclick="window.setStyle('fontStyle', 'normal')" class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
                      Normal
                  </button>
                  <button onclick="window.setStyle('fontStyle', 'italic')" class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
                      Italic
                  </button>
              </div>
          </div>

          <!-- Text Color -->
          <div class="bg-gray-50 p-4 rounded-lg">
              <h2 class="font-semibold mb-3 text-gray-700">Text Color</h2>
              <div class="grid grid-cols-4 gap-2">
                  <button onclick="window.setStyle('color', 'black')" class="w-full h-8 bg-black hover:opacity-80 rounded"></button>
                  <button onclick="window.setStyle('color', 'red')" class="w-full h-8 bg-red-500 hover:opacity-80 rounded"></button>
                  <button onclick="window.setStyle('color', 'blue')" class="w-full h-8 bg-blue-500 hover:opacity-80 rounded"></button>
                  <button onclick="window.setStyle('color', 'green')" class="w-full h-8 bg-green-500 hover:opacity-80 rounded"></button>
              </div>
          </div>

          <!-- Text Decoration -->
          <div class="bg-gray-50 p-4 rounded-lg">
              <h2 class="font-semibold mb-3 text-gray-700">Text Decoration</h2>
              <div class="flex space-x-2">
                  <button onclick="window.setStyle('textDecoration', 'none')" class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
                      None
                  </button>
                  <button onclick="window.setStyle('textDecoration', 'underline')" class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
                      Underline
                  </button>
                  <button onclick="window.setStyle('textDecoration', 'line-through')" class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
                      Strike
                  </button>
              </div>
          </div>

          <!-- Font Size -->
          <div class="bg-gray-50 p-4 rounded-lg">
              <h2 class="font-semibold mb-3 text-gray-700">Font Size</h2>
              <div class="flex space-x-2">
                  <button onclick="window.setStyle('fontSize', '12px')" class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
                      Small
                  </button>
                  <button onclick="window.setStyle('fontSize', '16px')" class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
                      Medium
                  </button>
                  <button onclick="window.setStyle('fontSize', '24px')" class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
                      Large
                  </button>
              </div>
          </div>
        </div>

        <!-- Custom Properties -->
        <div class="mt-6 bg-gray-50 p-4 rounded-lg">
            <h2 class="font-semibold mb-3 text-gray-700">Custom CSS Properties</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Property Name</label>
                    <input type="text" id="custom_property_name" placeholder="for example color" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Property Value</label>
                    <input type="text" id="custom_property_value" placeholder="for example red" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                <div class="flex items-end">
                    <button onclick="window.setCustomProperty()" class="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Apply
                    </button>
                </div>
            </div>
        </div>

        <!-- Reset Button -->
        <div class="mt-6 text-center">
          <button onclick="window.resetStyles()" class="px-6 py-2 bg-red-500 text-white rounded">
            Reset All Styles
          </button>
        </div>
      </div>
    </div>
  `;
};
