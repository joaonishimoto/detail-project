import { database } from "@/database/database";

type SideBarProps = {
  curChecklist: string;
  children: React.ReactNode;
};


const SideBar: React.FC<SideBarProps> = ( { curChecklist, children } ) => {

  const urlPart = database.find(part => (part.name === curChecklist));

  if (!urlPart) {
    return <div>peça não encontrada{curChecklist}</div>;
  }

  return (
    <div className="hidden border-r border-teal-300 text-teal-900 relative h-screen overflow-hidden  
    sm:block">
      <div className="overflow-y-scroll h-full">
        <ul className="ml-3 text-teal-900 pt-2">
          {children}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
