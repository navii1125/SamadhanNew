// // // src/pages/UserDashboard.tsx
// // src/pages/UserDashboard.tsx
// import React from "react";
// import Navigation from "@/components/Navigation";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Progress } from "@/components/ui/progress";
// import {
//   CheckCircle2,
//   Flame,
//   Mail,
//   MapPin,
//   Send,
//   ShieldCheck,
//   Clock,
// } from "lucide-react";

// const UserDashboard: React.FC = () => {
//   // ---- STATIC METRICS ----
//   const daysTracked = 3;
//   const submittedCount = 8;
//   const solvedCount = 5;
//   const resolutionRate = Math.round((solvedCount / submittedCount) * 100); // 62%

//   // Fake user
//   const user = {
//     name: "Atharva",
//     email: "atharva@example.com",
//     startedOn: "2025-02-12",
//   };

//   // Static monthly trend data (simple array of counts by month label)
//   const monthly = [
//     { month: "Oct", count: 1 },
//     { month: "Nov", count: 0 },
//     { month: "Dec", count: 2 },
//     { month: "Jan", count: 3 },
//     { month: "Feb", count: 2 },
//   ];

//   // A little inline SVG area chart (no external libs)
//   const maxCount = Math.max(...monthly.map((m) => m.count), 5);
//   const chartWidth = 320;
//   const chartHeight = 120;
//   const padX = 24;
//   const padY = 16;
//   const stepX = (chartWidth - padX * 2) / (monthly.length - 1 || 1);
//   const scaleY = (val: number) =>
//     chartHeight - padY - (val / maxCount) * (chartHeight - padY * 2);

//   const points = monthly
//     .map((m, i) => `${padX + i * stepX},${scaleY(m.count)}`)
//     .join(" ");

//   const areaPath = `
//     M ${padX},${chartHeight - padY}
//     L ${points}
//     L ${padX + (monthly.length - 1) * stepX},${chartHeight - padY}
//     Z
//   `;

//   // Static latest complaint
//   const latest = {
//     title: "Pothole near Sector 12",
//     status: "In Progress",
//     created_at: "2025-02-22 10:14 AM",
//     location: "Sector 12, Ring Road",
//     tracking_id: "A1B2C3D4",
//   };

//   // Static table rows
//   const rows = [
//     {
//       tracking_id: "A1B2C3D4",
//       title: "Pothole near Sector 12",
//       status: "In Progress",
//       textLabel: "Road & Transportation",
//       imgLabel: "Road & Transportation",
//       created: "2025-02-22 10:14 AM",
//     },
//     {
//       tracking_id: "E5F6G7H8",
//       title: "Streetlight not working",
//       status: "Resolved",
//       textLabel: "Street Lighting",
//       imgLabel: "Street Lighting",
//       created: "2025-02-21 08:30 PM",
//     },
//     {
//       tracking_id: "I9J0K1L2",
//       title: "Overflowing garbage bin",
//       status: "Open",
//       textLabel: "Waste Management",
//       imgLabel: "Waste Management",
//       created: "2025-02-20 09:02 AM",
//     },
//     {
//       tracking_id: "M3N4O5P6",
//       title: "Water leakage in lane 5",
//       status: "In Progress",
//       textLabel: "Water Supply",
//       imgLabel: "Water Supply",
//       created: "2025-02-19 04:47 PM",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />

//       <div className="max-w-7xl mx-auto px-4 py-10 space-y-8">
//         {/* Header */}
//         <div className="flex items-center gap-3">
//           <div className="h-12 w-12 rounded-full bg-civic-blue-light flex items-center justify-center font-semibold text-civic-blue text-lg">
//             {user.name
//               ? user.name
//                   .split(" ")
//                   .map((w) => w[0])
//                   .slice(0, 2)
//                   .join("")
//                   .toUpperCase()
//               : "U"}
//           </div>
//           <div>
//             <h1 className="text-3xl font-bold">Welcome back, {user.name}</h1>
//             <p className="text-muted-foreground flex items-center gap-2">
//               <Mail className="w-4 h-4" /> {user.email}
//             </p>
//           </div>
//         </div>

//         {/* KPI Row */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           <Card className="shadow-card">
//             <CardHeader className="pb-2">
//               <CardTitle className="text-sm text-muted-foreground">
//                 Days Tracked
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="pt-0">
//               <div className="flex items-center gap-2">
//                 <Flame className="w-5 h-5 text-urgent-orange" />
//                 <span className="text-3xl font-bold">{daysTracked}</span>
//               </div>
//               <p className="text-xs text-muted-foreground mt-1">
//                 Since {new Date(user.startedOn).toDateString()}
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="shadow-card">
//             <CardHeader className="pb-2">
//               <CardTitle className="text-sm text-muted-foreground">
//                 Submitted Complaints
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="pt-0">
//               <div className="flex items-center gap-2">
//                 <Send className="w-5 h-5 text-civic-blue" />
//                 <span className="text-3xl font-bold">{submittedCount}</span>
//               </div>
//               <p className="text-xs text-muted-foreground mt-1">All-time</p>
//             </CardContent>
//           </Card>

//           <Card className="shadow-card">
//             <CardHeader className="pb-2">
//               <CardTitle className="text-sm text-muted-foreground">
//                 Solved Complaints
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="pt-0">
//               <div className="flex items-center gap-2">
//                 <CheckCircle2 className="w-5 h-5 text-growth-green" />
//                 <span className="text-3xl font-bold">{solvedCount}</span>
//               </div>
//               <p className="text-xs text-muted-foreground mt-1">
//                 Great job reporting!
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="shadow-card">
//             <CardHeader className="pb-2">
//               <CardTitle className="text-sm text-muted-foreground">
//                 Resolution Rate
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="pt-0">
//               <div className="flex items-center gap-2 mb-2">
//                 <ShieldCheck className="w-5 h-5 text-growth-green" />
//                 <span className="text-2xl font-bold">{resolutionRate}%</span>
//               </div>
//               <Progress value={resolutionRate} />
//             </CardContent>
//           </Card>
//         </div>

//         {/* Trend + Latest Complaint */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//           <Card className="shadow-card lg:col-span-2">
//             <CardHeader className="pb-2">
//               <CardTitle className="text-sm text-muted-foreground">
//                 Monthly Submissions (Static)
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="pt-2">
//               {/* Simple inline SVG chart */}
//               <div className="rounded-md border p-3">
//                 <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
//                   <span>Last 5 months</span>
//                   <span>Max: {maxCount}</span>
//                 </div>
//                 <svg
//                   width="100%"
//                   viewBox={`0 0 ${chartWidth} ${chartHeight}`}
//                   preserveAspectRatio="none"
//                 >
//                   {/* Axes */}
//                   <line
//                     x1="24"
//                     y1={chartHeight - 16}
//                     x2={chartWidth - 8}
//                     y2={chartHeight - 16}
//                     stroke="currentColor"
//                     strokeOpacity="0.25"
//                     strokeWidth="1"
//                   />
//                   <line
//                     x1="24"
//                     y1="8"
//                     x2="24"
//                     y2={chartHeight - 16}
//                     stroke="currentColor"
//                     strokeOpacity="0.25"
//                     strokeWidth="1"
//                   />
//                   {/* Area fill */}
//                   <path d={areaPath} fill="currentColor" fillOpacity="0.12" />
//                   {/* Line */}
//                   <polyline
//                     points={points}
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeOpacity="0.9"
//                   />
//                   {/* Dots */}
//                   {monthly.map((m, i) => (
//                     <circle
//                       key={m.month}
//                       cx={24 + i * stepX}
//                       cy={scaleY(m.count)}
//                       r="3"
//                       fill="currentColor"
//                     />
//                   ))}
//                 </svg>
//                 <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
//                   {monthly.map((m) => (
//                     <span key={m.month} className="w-[20%] text-center">
//                       {m.month}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           <Card className="shadow-card">
//             <CardHeader className="pb-2">
//               <CardTitle className="text-sm text-muted-foreground">
//                 Latest Complaint (Static)
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="pt-2 space-y-2">
//               <div className="flex items-center justify-between">
//                 <div className="font-semibold">{latest.title}</div>
//                 <Badge
//                   variant={
//                     latest.status === "Resolved" ? "default" : "secondary"
//                   }
//                 >
//                   {latest.status}
//                 </Badge>
//               </div>
//               <div className="text-sm text-muted-foreground">
//                 Tracking ID: <span className="font-mono">{latest.tracking_id}</span>
//               </div>
//               <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                 <Clock className="w-4 h-4" />
//                 {latest.created_at}
//               </div>
//               <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                 <MapPin className="w-4 h-4" /> {latest.location}
//               </div>
//               <div className="pt-2">
//                 <Button
//                   size="sm"
//                   variant="outline"
//                   onClick={() => navigator.clipboard.writeText(latest.tracking_id)}
//                 >
//                   Copy Tracking ID
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Static table */}
//         <Card className="shadow-card">
//           <CardHeader className="pb-2">
//             <CardTitle className="text-base">Your Complaints (Static)</CardTitle>
//           </CardHeader>
//           <CardContent className="pt-0">
//             <div className="overflow-x-auto">
//               <table className="w-full text-sm">
//                 <thead>
//                   <tr className="text-left text-muted-foreground">
//                     <th className="py-2 pr-4 font-medium">Tracking ID</th>
//                     <th className="py-2 pr-4 font-medium">Title</th>
//                     <th className="py-2 pr-4 font-medium">Status</th>
//                     <th className="py-2 pr-4 font-medium">AI Labels</th>
//                     <th className="py-2 pr-4 font-medium">Created</th>
//                     <th className="py-2 pr-4 font-medium text-right">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {rows.map((c) => (
//                     <tr key={c.tracking_id} className="border-t">
//                       <td className="py-3 pr-4 font-mono">{c.tracking_id}</td>
//                       <td className="py-3 pr-4">{c.title}</td>
//                       <td className="py-3 pr-4">
//                         <Badge
//                           variant={c.status === "Resolved" ? "default" : "secondary"}
//                         >
//                           {c.status}
//                         </Badge>
//                       </td>
//                       <td className="py-3 pr-4">
//                         <div className="flex flex-wrap gap-1">
//                           <Badge variant="outline">T: {c.textLabel}</Badge>
//                           <Badge variant="outline">I: {c.imgLabel}</Badge>
//                         </div>
//                       </td>
//                       <td className="py-3 pr-4 text-muted-foreground">
//                         {c.created}
//                       </td>
//                       <td className="py-3 pr-0 text-right">
//                         <Button
//                           size="sm"
//                           variant="outline"
//                           onClick={() => navigator.clipboard.writeText(c.tracking_id)}
//                         >
//                           Copy ID
//                         </Button>
//                       </td>
//                     </tr>
//                   ))}
//                   {/* Fill remaining to always look populated */}
//                   {rows.length === 0 && (
//                     <tr>
//                       <td className="py-6 text-center text-muted-foreground" colSpan={6}>
//                         No complaints yet.
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
import React, { useMemo } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle2,
  Flame,
  Mail,
  MapPin,
  Send,
  ShieldCheck,
  Clock,
} from "lucide-react";

const UserDashboard: React.FC = () => {
  // 🔹 Read user info dynamically from localStorage (set at login)
  const { name, email } = useMemo(() => {
    const storedName = localStorage.getItem("userName") || "User";
    const storedEmail = localStorage.getItem("userEmail") || "user@example.com";
    return { name: storedName, email: storedEmail };
  }, []);

  // ---- STATIC METRICS ----
  const daysTracked = 3;
  const submittedCount = 8;
  const solvedCount = 0; // keep 0 as requested
  const resolutionRate = 0;

  const latest = {
    title: "Pothole near Sector 12",
    status: "In Progress",
    created_at: "2025-02-22 10:14 AM",
    location: "Sector 12, Ring Road",
    tracking_id: "A1B2C3D4",
  };

  const rows = [
    {
      tracking_id: "A1B2C3D4",
      title: "Pothole near Sector 12",
      status: "In Progress",
      created: "2025-02-22 10:14 AM",
    },
    {
      tracking_id: "E5F6G7H8",
      title: "Streetlight not working",
      status: "Open",
      created: "2025-02-21 08:30 PM",
    },
    {
      tracking_id: "I9J0K1L2",
      title: "Overflowing garbage bin",
      status: "Open",
      created: "2025-02-19 05:41 PM",
    },
  ];

  // Initials for avatar circle
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-10 space-y-8">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-civic-blue-light flex items-center justify-center font-semibold text-civic-blue text-lg">
            {initials || "U"}
          </div>
          <div>
            <h1 className="text-3xl font-bold">Welcome back, {name}</h1>
            <p className="text-muted-foreground flex items-center gap-2">
              <Mail className="w-4 h-4" /> {email}
            </p>
          </div>
        </div>

        {/* KPI Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Days Tracked */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">
                Days Tracked
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 flex items-center gap-2">
              <Flame className="w-5 h-5 text-urgent-orange" />
              <span className="text-3xl font-bold">{daysTracked}</span>
            </CardContent>
          </Card>

          {/* Submitted */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">
                Submitted Complaints
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 flex items-center gap-2">
              <Send className="w-5 h-5 text-civic-blue" />
              <span className="text-3xl font-bold">{submittedCount}</span>
            </CardContent>
          </Card>

          {/* Resolved */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">
                Resolved Complaints
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-gray-400" />
              <span className="text-3xl font-bold">{solvedCount}</span>
            </CardContent>
          </Card>

          {/* Resolution Rate */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">
                Resolution Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-gray-400" />
                <span className="text-2xl font-bold">{resolutionRate}%</span>
              </div>
              <Progress value={resolutionRate} />
            </CardContent>
          </Card>
        </div>

        {/* Latest Complaint (static) */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              Latest Complaint 
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between">
              <div className="font-semibold">{latest.title}</div>
              <Badge variant="secondary">{latest.status}</Badge>
            </div>
            <p className="text-sm mt-1">
              Tracking ID: <span className="font-mono">{latest.tracking_id}</span>
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
              <Clock className="w-4 h-4" /> {latest.created_at}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" /> {latest.location}
            </div>
            <Button
              size="sm"
              variant="outline"
              className="mt-3"
              onClick={() => navigator.clipboard.writeText(latest.tracking_id)}
            >
              Copy Tracking ID
            </Button>
          </CardContent>
        </Card>

        {/* Static Table */}
        <Card>
          <CardHeader>
            <CardTitle>Your Complaints</CardTitle>
          </CardHeader>
          <CardContent>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-muted-foreground">
                  <th className="py-2 pr-4">Tracking ID</th>
                  <th className="py-2 pr-4">Title</th>
                  <th className="py-2 pr-4">Status</th>
                  <th className="py-2 pr-4">Created</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((c) => (
                  <tr key={c.tracking_id} className="border-t">
                    <td className="py-2 pr-4 font-mono">{c.tracking_id}</td>
                    <td className="py-2 pr-4">{c.title}</td>
                    <td className="py-2 pr-4">
                      <Badge variant="secondary">{c.status}</Badge>
                    </td>
                    <td className="py-2 pr-4">{c.created}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;

