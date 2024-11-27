// DarkModeToggle.tsx
import React from "react";
import { Moon, Sun } from "lucide-react";
import { Theme } from "./lib/types";

interface DarkModeToggleProps {
	theme: Theme;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ theme }) => {
	return (
		<button
			onClick={theme.toggleTheme}
			className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 
                 dark:hover:bg-gray-700 transition-colors duration-200"
			aria-label="Toggle dark mode"
		>
			{theme.isDark ? (
				<Sun className="w-5 h-5 text-yellow-500" />
			) : (
				<Moon className="w-5 h-5 text-gray-700" />
			)}
		</button>
	);
};

export default DarkModeToggle;