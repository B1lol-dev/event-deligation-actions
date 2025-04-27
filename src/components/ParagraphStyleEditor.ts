export const ParagraphStyleEditor = (): string => {
  return /*html */ `
    <div class="bg-gray-100 min-h-screen min-w-screen p-8 snap-center">
      <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 class="text-2xl font-bold mb-6 text-gray-800">Paragraph Style Editor</h1>

        <!-- Preview Area -->
        <div class="bg-gray-50 p-4 rounded-lg mb-6">
            <p id="editableParagraph" class="p-4 border border-gray-300 rounded min-h-[100px]">
                This is an editable paragraph. Use the controls to change its style.
            </p>
        </div>


      </div>
    </div>
  `;
};
