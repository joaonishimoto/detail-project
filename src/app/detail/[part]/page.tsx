import SideBar from "@/components/sidebar/sidebar";
import VerticalLinearStepper from "@/components/sidebar/stepper";

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
      </main>
    </div> 
  );
}
