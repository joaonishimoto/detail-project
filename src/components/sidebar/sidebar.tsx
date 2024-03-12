import { database } from "@/database/database";

type SideBarProps = {
  checklistId: string;
  children: React.ReactNode;
};


const SideBar: React.FC<SideBarProps> = ( { checklistId, children } ) => {

  const urlPart = database.find(part => (part.name === checklistId));

  if (!urlPart) {
    return <div>peça não encontrada{checklistId}</div>;
  }

  const checklistItems = urlPart.checklist.map((item, index) => (
    <li key={index}>
      <label className="">
        <input type="checkbox" className="mr-2 text-teal-900"/>
        {item.title}
      </label>
    </li>
  ));

  return (
    <div className="hidden border-r border-teal-300 text-teal-900 relative h-[calc(100vh-48px)] overflow-hidden  
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
