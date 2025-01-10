import AttendanceChart from "@/components/AttendanceChart"
import CountChart from "@/components/CountChart"
import FinanceChart from "@/components/FinanceChart"
import UserCard from "@/components/UserCard"

const Adminpage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" amount={1234} year="2024/25" />
          <UserCard type="teacher" amount={23} year="2024/25" />
          <UserCard type="parent" amount={300} year="2024/25" />
          <UserCard type="staff" amount={12} year="2024/25" />
        </div>

        {/* MIDDLE CHART */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>

          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>

        </div>

        {/* BOTTOMCHART */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/3">r</div>
    </div>
  )
}

export default Adminpage
