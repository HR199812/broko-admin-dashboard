import { AppSidebar } from "@/components/app-sidebar";
import { SidebarLayout, SidebarTrigger } from "@/components/ui/sidebar";
import ThreeScene from "@/components/ThreeScene";
import CurvedLineChart from "@/components/charts/CurvedLineChart";
import CircularProgressBar from "@/components/charts/CircularProgressBar";
import LineChart from "@/components/charts/LineChart";
import CanadaMap from "@/components/CanadaMap";

export default async function Page() {
  const { cookies } = await import("next/headers");
  return (
    <SidebarLayout
      defaultOpen={cookies().get("sidebar:state")?.value === "true"}
    >
      <AppSidebar />
      <main className="flex flex-1 flex-col p-2 transition-all duration-300 ease-in-out">
        <div className="h-full rounded-md border-2 border-dashed p-2">
          <SidebarTrigger />
          <div className="flex justify-between items-center">
            <CurvedLineChart />
            <CanadaMap />
            <div
              className="rounded-lg"
              style={{
                width: "400px",
                height: "400px",
                backgroundColor: "#F5F5F5",
                padding: "20px",
              }}
            >
              <div className="flex justify-around items-center pt-8">
                <CircularProgressBar strokeColor="orange" progress={90} />
                <CircularProgressBar strokeColor="" progress={150} />
              </div>
              <div className="flex justify-around items-center pt-4">
                <CircularProgressBar strokeColor="purple" progress={80} />
                <CircularProgressBar strokeColor="green" progress={45} />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-8">
            <LineChart />
          </div>
          <div className="fixed bottom-5 right-0 w-[150px] h-[100px]">
            <ThreeScene />
          </div>
        </div>
      </main>
    </SidebarLayout>
  );
}
