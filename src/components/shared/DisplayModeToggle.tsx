interface DisplayModeToggleProps {
  displayMode: "code" | "general";
  setDisplayMode: (mode: "code" | "general") => void;
}

const DisplayModeToggle: React.FC<DisplayModeToggleProps> = ({
  displayMode,
  setDisplayMode
}) => {
  const handleModeChange = async (mode: "code" | "general") => {
    try {
      await window.electronAPI.updateConfig({ displayMode: mode });
      setDisplayMode(mode);
    } catch (error) {
      console.error("Failed to update display mode:", error);
    }
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleModeChange("code")}
        className={`px-3 py-1.5 text-xs rounded transition-colors ${
          displayMode === "code"
            ? "bg-white/20 text-white"
            : "text-white/50 hover:text-white/70"
        }`}
      >
        Code
      </button>
      <button
        onClick={() => handleModeChange("general")}
        className={`px-3 py-1.5 text-xs rounded transition-colors ${
          displayMode === "general"
            ? "bg-white/20 text-white"
            : "text-white/50 hover:text-white/70"
        }`}
      >
        General
      </button>
    </div>
  );
};

export default DisplayModeToggle;
