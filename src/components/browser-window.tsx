import type { ReactNode } from "react";

interface BrowserWindowProps {
  title: string;
  children: ReactNode;
}

export default function BrowserWindow({ title, children }: BrowserWindowProps) {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden bg-white shadow-xl opacity-80 flex flex-col border border-gray-200">
      {/* Browser header - Chrome-like */}
      <div className="bg-gray-100 px-4 py-2 flex items-center border-b border-gray-200">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>

        {/* Tab */}
        <div className="flex-1 flex items-center">
          <div className="bg-white rounded-t-lg border-t border-l border-r border-gray-200 py-1.5 px-4 text-sm text-gray-800 font-medium max-w-xs truncate flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
            {title}
          </div>
          <div className="flex-1"></div>
        </div>

        {/* Browser controls */}
        <div className="flex items-center space-x-4 text-gray-500">
          <div className="w-4 h-4 text-lg font-thin">×</div>
        </div>
      </div>

      {/* URL bar */}
      <div className="bg-gray-100 px-4 py-2 border-b border-gray-200">
        <div className="flex items-center bg-gray-50 rounded-full border border-gray-200 px-3 py-1">
          <div className="w-4 h-4 bg-gray-200 rounded-full mr-2"></div>
          <div className="text-xs text-gray-500 truncate flex-1">
            https://react-genai/showcase/
            {title.toLowerCase().replace(/\s+/g, "-")}
          </div>
        </div>
      </div>

      {/* Browser content - white scrollable area */}
      <div className="flex-1 overflow-auto bg-white">{children}</div>
    </div>
  );
}
