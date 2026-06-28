import MiddleUI from "../DashComponents/middleComponent";
import SidePanel from "../DashComponents/side_component";

export default function Dashboard() {
  return (
    <div className="display-dash">
      <SidePanel />
      <MiddleUI />
    </div>
)
}