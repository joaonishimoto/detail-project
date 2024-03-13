import { Detail }  from "@/components/detail/detail";
import { SideBar } from "@/components/sidebar/sidebar";
import { VerticalLinearStepper } from "@/components/sidebar/stepper";

import { AppProvider } from '@/app/AppContext';

interface PartProps {
  params: {
    part: string
  }
}

export default function Home(props: PartProps) {

  // current part on url
  const curPart = props.params.part

  return (
    <div className="grid grid-cols-app bg-teal-950">
      <AppProvider>
        <SideBar curChecklist={curPart}>
          <VerticalLinearStepper curChecklist={curPart}/>
        </SideBar>
        <Detail curChecklist={curPart} />
      </AppProvider>
    </div> 
  );
}
