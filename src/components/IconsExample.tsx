import React from 'react';
import {
  DownloadIcon,
  CopyIcon,
  EyeIcon,
  PlusIcon,
  MenuIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  XMarkIcon,
  Icon,
} from './Icons';

/**
 * Example component demonstrating icon usage
 * These icons support:
 * - Size customization via the `size` prop
 * - Color inheritance via `currentColor` through text-color utilities
 * - Custom className props for additional styling
 * - All standard SVG attributes
 */
export const IconsExample: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 p-8">
      {/* Individual icon usage examples */}
      <section>
        <h2 className="text-xl font-bold mb-4">Icon Components</h2>
        <div className="flex gap-6 items-center">
          <div className="flex flex-col items-center gap-2">
            <DownloadIcon size={24} className="text-gray-700" />
            <span className="text-sm">Download</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <CopyIcon size={24} className="text-gray-700" />
            <span className="text-sm">Copy</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <EyeIcon size={24} className="text-gray-700" />
            <span className="text-sm">Eye</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <PlusIcon size={24} className="text-gray-700" />
            <span className="text-sm">Plus</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <MenuIcon size={24} className="text-gray-700" />
            <span className="text-sm">Menu</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <ChevronDownIcon size={24} className="text-gray-700" />
            <span className="text-sm">Chevron Down</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <ChevronUpIcon size={24} className="text-gray-700" />
            <span className="text-sm">Chevron Up</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <XMarkIcon size={24} className="text-gray-700" />
            <span className="text-sm">X Mark</span>
          </div>
        </div>
      </section>

      {/* Size variation examples */}
      <section>
        <h2 className="text-xl font-bold mb-4">Size Variations</h2>
        <div className="flex gap-4 items-center">
          <PlusIcon size={16} className="text-gray-700" />
          <PlusIcon size={24} className="text-gray-700" />
          <PlusIcon size={32} className="text-gray-700" />
          <PlusIcon size={48} className="text-gray-700" />
        </div>
      </section>

      {/* Color variations using currentColor and text utilities */}
      <section>
        <h2 className="text-xl font-bold mb-4">Color Variations (via text color)</h2>
        <div className="flex gap-4 items-center">
          <DownloadIcon size={24} className="text-gray-700" />
          <DownloadIcon size={24} className="text-blue-500" />
          <DownloadIcon size={24} className="text-green-500" />
          <DownloadIcon size={24} className="text-red-500" />
        </div>
      </section>

      {/* Generic Icon component usage */}
      <section>
        <h2 className="text-xl font-bold mb-4">Using Generic Icon Component</h2>
        <div className="flex gap-4 items-center">
          <Icon name="download" size={24} className="text-gray-700" />
          <Icon name="copy" size={24} className="text-gray-700" />
          <Icon name="eye" size={24} className="text-gray-700" />
          <Icon name="plus" size={24} className="text-blue-500" />
          <Icon name="menu" size={24} className="text-gray-700" />
          <Icon name="chevronDown" size={24} className="text-gray-700" />
          <Icon name="chevronUp" size={24} className="text-gray-700" />
          <Icon name="xMark" size={24} className="text-red-500" />
        </div>
      </section>

      {/* Button examples with icons */}
      <section>
        <h2 className="text-xl font-bold mb-4">Button Examples</h2>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            <DownloadIcon size={20} />
            Download
          </button>

          <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800">
            <CopyIcon size={20} />
            Copy
          </button>

          <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800">
            <PlusIcon size={20} />
            Add New
          </button>

          <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800">
            <EyeIcon size={20} />
            View
          </button>

          <button className="flex items-center justify-center w-10 h-10 bg-gray-700 text-white rounded hover:bg-gray-800">
            <MenuIcon size={20} />
          </button>
        </div>
      </section>

      {/* Form input with icon example */}
      <section>
        <h2 className="text-xl font-bold mb-4">Form Input with Icon</h2>
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            {/* Icon placed inside input */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IconsExample;
