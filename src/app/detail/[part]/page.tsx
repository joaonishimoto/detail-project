import SideBar from "@/components/sidebar/sidebar";
import VerticalLinearStepper from "@/components/sidebar/stepper";
import Image from "next/image";


import * as esquadreta from '@/database/esquadreta/import';




interface PartProps {
  params: {
    part: string
  }
}

export default function Home(props: PartProps) {

  // current part on url
  const curPart = props.params.part

  return (
    <div className="
    grid grid-cols-app"
    >
      <SideBar checklistId={curPart}>
        <VerticalLinearStepper checklistId={curPart}/>
      </SideBar>

      <main>
        <Image 
          src={esquadreta['slide1' as keyof typeof esquadreta]} 
          alt="" 
          style={{objectFit: "contain"}} 
          className="max-h-screen bg-teal-950" 
        />
      </main>
    </div> 
  );
}
