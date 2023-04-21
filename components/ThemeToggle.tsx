"use client";

export type Theme = "dark" | "light" | undefined;

export default function ThemeToggle({ theme }: { theme: Theme }) {
  const nextTheme = theme === "dark" ? "light" : "dark";

  // If we do have access to JavaScript we add the class programmatically.
  // We'll prevent the default form submission and do a fetch in the background
  // to prevent a page refresh.
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    document.documentElement.classList.toggle("dark");

    // Retrieve the theme from the DOM after the class has been toggled
    const nextTheme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";

    const formData = new FormData();
    formData.set("nextTheme", nextTheme);
    fetch("/theme", { method: "POST", body: formData });
  }

  return (
    <form
      className="font-semibold text-gray-800 dark:text-gray-200"
      action="/theme"
      method="POST"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="nextTheme" value={nextTheme} />
      <button
        type="submit"
        aria-label={`Switch to ${nextTheme} mode`}
        className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-900 dark:ring-gray-100 transition-all"
      >
        {/* 
            We're not using JS here to conditionally display the correct dark mode but CSS (using dark class)
            This way the correct icon is displayed on first render and there is no Flash of Incorrect Icon.
        */}
        <MoonSvg />
        <SunSvg />
      </button>
    </form>
  );
}

function SunSvg() {
  return (
    <svg
      className="w-5 h-5 block dark:hidden"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
    </svg>
  );
}

function MoonSvg() {
  return (
    <svg
      className="w-5 h-5 hidden dark:block"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
