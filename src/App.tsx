import React from "react";
import DarkMode from "./components/DarkMode";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <header className="p-4 bg-gray-200 dark:bg-gray-700 flex items-center justify-between shadow-md">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          My Blog
        </h1>
        <DarkMode />
      </header>

      <main className="flex-grow p-6 max-w-3xl mx-auto">
        <article className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Blog Post Title
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4"></p>
          <p className="text-gray-700 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum. Curabitur vitae nisi ut urna
            hendrerit tincidunt. Phasellus nec libero sed quam vehicula cursus.
            Integer ac eros et eros commodo tincidunt a eget ligula. Cras in dui
            sit amet ligula fermentum sodales. Morbi sit amet sem id dolor
            tristique tristique.
          </p>
        </article>
      </main>

      <footer className="p-4 bg-gray-200 dark:bg-gray-700 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          © 2024 My Blog. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
