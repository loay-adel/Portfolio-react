import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router-dom";
import React from "react";

// Simple loading component
const LoadingFallback = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-gray-200 rounded-full border-t-primaryCyan-500 animate-spin mx-auto mb-4"></div>
      <p className="text-gray-600 dark:text-gray-300">Loading...</p>
    </div>
  </div>
);

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-600">
              Please refresh the page to try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-primaryCyan-500 text-white rounded hover:bg-primaryCyan-600"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Main app component
const RootComponent = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ErrorBoundary>
);

// Render with error handling
const root = createRoot(document.getElementById("root"));

try {
  root.render(<RootComponent />);
} catch (error) {
  console.error("Failed to render app:", error);
  // Fallback rendering
  root.render(
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Application Error
        </h1>
        <p className="text-gray-600">
          Failed to load the application. Please refresh the page.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-primaryCyan-500 text-white rounded hover:bg-primaryCyan-600"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
}
