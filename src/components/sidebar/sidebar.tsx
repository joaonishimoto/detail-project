import { database } from "@/database/database";
import "@/app/globals.css"

type SideBarProps = {
  curChecklist: string;
  children: React.ReactNode;
};


export const SideBar: React.FC<SideBarProps> = ( { curChecklist, children } ) => {

  const urlPart = database.find(part => (part.name === curChecklist));

  if (!urlPart) {
    return <div>peça não encontrada{curChecklist}</div>;
  }

  return (
    <div className="hidden border-r border-teal-300 relative h-screen overflow-hidden sm:block overflow-y-scroll bg-white">
      {children}
    </div>
  );
};


