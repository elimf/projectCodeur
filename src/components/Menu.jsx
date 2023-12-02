export const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened, activeSection } = props;

  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 fixed top-12 right-12 p-3 bg-indigo-600 w-11 h-11 rounded-md"
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45  translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col
      ${menuOpened ? "w-80" : "w-0"}`}
      >
        <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
          <MenuButton
            label="About"
            onClick={() => onSectionChange(0)}
            isActive={activeSection === 0}
          />
          <MenuButton
            label="Resume"
            onClick={() => onSectionChange(1)}
            isActive={activeSection === 1}
          />
          <MenuButton
            label="Skills"
            onClick={() => onSectionChange(2)}
            isActive={activeSection === 2}
          />
          <MenuButton
            label="Projects"
            onClick={() => onSectionChange(3)}
            isActive={activeSection === 3}
          />
          <MenuButton
            label="Contact"
            onClick={() => onSectionChange(4)}
            isActive={activeSection === 4}
          />
        </div>
      </div>
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick, isActive } = props;
  return (
    <button
      onClick={onClick}
      className={`text-2xl font-bold cursor-pointer transition-colors ${
        isActive ? "text-yellow-500" : "text-indigo-600 hover:text-yellow-500"
      }`}
    >
      {label}
    </button>
  );
};
