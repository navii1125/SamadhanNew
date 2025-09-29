// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Landing from "./pages/Landing";
// import SubmitComplaint from "./pages/SubmitComplaint";
// import TrackComplaint from "./pages/TrackComplaint";
// import About from "./pages/About";
// import Login from "./pages/Login";
// import AdminLayout from "./components/AdminLayout";
// import Dashboard from "./pages/admin/Dashboard";
// import ComplaintManagement from "./pages/admin/ComplaintManagement";
// import Analytics from "./pages/admin/Analytics";
// import UserManagement from "./pages/admin/UserManagement";
// import Notifications from "./pages/admin/Notifications";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Landing />} />
//           <Route path="/submit" element={<SubmitComplaint />} />
//           <Route path="/track" element={<TrackComplaint />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/login" element={<Login />} />
          
//           {/* Admin Routes */}
//           <Route path="/admin" element={<AdminLayout />}>
//             <Route path="dashboard" element={<Dashboard />} />
//             <Route path="complaints" element={<ComplaintManagement />} />
//             <Route path="analytics" element={<Analytics />} />
//             <Route path="users" element={<UserManagement />} />
//             <Route path="notifications" element={<Notifications />} />
//           </Route>
          
//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;


// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Landing from "./pages/Landing";
// import SubmitComplaint from "./pages/SubmitComplaint";
// import TrackComplaint from "./pages/TrackComplaint";
// import About from "./pages/About";
// import Login from "./pages/Login";
// import Register from "./pages/Register";   // ✅ Import Register page
// import AdminLayout from "./components/AdminLayout";
// import Dashboard from "./pages/admin/Dashboard";
// import ComplaintManagement from "./pages/admin/ComplaintManagement";
// import Analytics from "./pages/admin/Analytics";
// import UserManagement from "./pages/admin/UserManagement";
// import Notifications from "./pages/admin/Notifications";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Landing />} />
//           <Route path="/submit" element={<SubmitComplaint />} />
//           <Route path="/track" element={<TrackComplaint />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} /> {/* ✅ Register route */}

//           {/* Admin Routes */}
//           <Route path="/admin" element={<AdminLayout />}>
//             <Route path="dashboard" element={<Dashboard />} />
//             <Route path="complaints" element={<ComplaintManagement />} />
//             <Route path="analytics" element={<Analytics />} />
//             <Route path="users" element={<UserManagement />} />
//             <Route path="notifications" element={<Notifications />} />
//           </Route>

//           {/* Catch-all Route */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import SubmitComplaint from "./pages/SubmitComplaint";
import TrackComplaint from "./pages/TrackComplaint";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminLayout from "./components/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import ComplaintManagement from "./pages/admin/ComplaintManagement";
import Analytics from "./pages/admin/Analytics";
import UserManagement from "./pages/admin/UserManagement";
import Notifications from "./pages/admin/Notifications";
import NotFound from "./pages/NotFound";
import UserDashboard from "./pages/Userdashboard";

const queryClient = new QueryClient();

// ProtectedRoute component
function ProtectedRoute({ children }: { children: JSX.Element }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route
            path="/submit"
            element={
              <ProtectedRoute>
                <SubmitComplaint />
              </ProtectedRoute>
            }
          />
          <Route
            path="/track"
            element={
              <ProtectedRoute>
                <TrackComplaint />
              </ProtectedRoute>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<UserDashboard />} />


          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="complaints" element={<ComplaintManagement />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="notifications" element={<Notifications />} />
          </Route>

          {/* Catch-all Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;