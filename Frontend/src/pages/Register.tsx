// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { useToast } from "@/hooks/use-toast";

// const Register = () => {
//   const [form, setForm] = useState({
//     name: "",       // added for backend
//     email: "",
//     password: "",
//     confirm_password: "",
//     role: "citizen", // optional, default value
//   });

//   const navigate = useNavigate();
//   const { toast } = useToast();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (form.password !== form.confirm_password) {
//       toast({
//         title: "Error",
//         description: "Passwords do not match",
//         variant: "destructive",
//       });
//       return;
//     }

//     try {
//       const res = await fetch("http://127.0.0.1:8000/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       if (!res.ok) {
//         const errorData = await res.json();
//         throw new Error(errorData.detail || "Registration failed");
//       }

//       toast({
//         title: "Success",
//         description: "Account created! Redirecting to login...",
//       });

//       navigate("/login"); // Redirect to login
//     } catch (err: any) {
//       toast({
//         title: "Error",
//         description: err.message || "Failed to register. Try again.",
//         variant: "destructive",
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
//       <Card className="w-full max-w-md">
//         <CardHeader>
//           <CardTitle className="text-center">Create Account</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <Label>Name</Label>
//               <Input
//                 type="text"
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//               />
//             </div>
//             <div>
//               <Label>Email</Label>
//               <Input
//                 type="email"
//                 value={form.email}
//                 onChange={(e) => setForm({ ...form, email: e.target.value })}
//               />
//             </div>
//             <div>
//               <Label>Password</Label>
//               <Input
//                 type="password"
//                 value={form.password}
//                 onChange={(e) => setForm({ ...form, password: e.target.value })}
//               />
//             </div>
//             <div>
//               <Label>Confirm Password</Label>
//               <Input
//                 type="password"
//                 value={form.confirm_password}
//                 onChange={(e) =>
//                   setForm({ ...form, confirm_password: e.target.value })
//                 }
//               />
//             </div>
//             <Button type="submit" className="w-full">
//               Register
//             </Button>
//           </form>
//           <div className="mt-4 text-center">
//             <Link to="/login">
//               <Button variant="outline">Back to Login</Button>
//             </Link>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default Register;


// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { useToast } from "@/hooks/use-toast";

// const Register = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirm_password: "",
//     role: "citizen", // default role
//   });

//   const navigate = useNavigate();
//   const { toast } = useToast();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (form.password !== form.confirm_password) {
//       toast({
//         title: "Error",
//         description: "Passwords do not match",
//         variant: "destructive",
//       });
//       return;
//     }

//     try {
//       const res = await fetch("http://127.0.0.1:8000/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name: form.name,
//           email: form.email,
//           password: form.password,
//           role: form.role,
//         }),
//       });

//       if (!res.ok) {
//         const errorData = await res.json();
//         throw new Error(errorData.detail || "Registration failed");
//       }

//       toast({
//         title: "Success",
//         description: "Account created! Redirecting to login...",
//       });

//       navigate("/login");
//     } catch (err: any) {
//       toast({
//         title: "Error",
//         description: err.message || "Failed to register. Try again.",
//         variant: "destructive",
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
//       <Card className="w-full max-w-md">
//         <CardHeader>
//           <CardTitle className="text-center">Create Account</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <Label>Name</Label>
//               <Input
//                 type="text"
//                 value={form.name}
//                 required
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//               />
//             </div>
//             <div>
//               <Label>Email</Label>
//               <Input
//                 type="email"
//                 value={form.email}
//                 required
//                 onChange={(e) => setForm({ ...form, email: e.target.value })}
//               />
//             </div>
//             <div>
//               <Label>Password</Label>
//               <Input
//                 type="password"
//                 value={form.password}
//                 required
//                 minLength={6}
//                 onChange={(e) => setForm({ ...form, password: e.target.value })}
//               />
//             </div>
//             <div>
//               <Label>Confirm Password</Label>
//               <Input
//                 type="password"
//                 value={form.confirm_password}
//                 required
//                 onChange={(e) =>
//                   setForm({ ...form, confirm_password: e.target.value })
//                 }
//               />
//             </div>
//             <Button type="submit" className="w-full">
//               Register
//             </Button>
//           </form>
//           <div className="mt-4 text-center">
//             <Link to="/login">
//               <Button variant="outline">Back to Login</Button>
//             </Link>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default Register;


// src/pages/Register.tsx

// import { useState } from "react";

// function Register() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirm_password: ""
//   });
//   const [message, setMessage] = useState("");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:8000/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage(data.message); // ✅ "User registered successfully!"
//       } else {
//         setMessage(data.detail);  // ❌ error messages
//       }
//     } catch (err) {
//       setMessage("Something went wrong!");
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <input name="name" placeholder="Name" onChange={handleChange} />
//         <input name="email" placeholder="Email" onChange={handleChange} />
//         <input name="password" type="password" placeholder="Password" onChange={handleChange} />
//         <input name="confirm_password" type="password" placeholder="Confirm Password" onChange={handleChange} />
//         <button type="submit">Register</button>
//       </form>
//       <p>{message}</p>
//     </div>
//   );
// }

// export default Register;

// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// const Register = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirm_password: "",
//   });
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setMessage("");

//     if (form.password !== form.confirm_password) {
//       setError("Passwords do not match");
//       return;
//     }

//     try {
//       const response = await fetch("http://127.0.0.1:8000/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name: form.name,
//           email: form.email,
//           password: form.password,
//           role: "citizen",
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage("Account created! Redirecting to login...");
//         setTimeout(() => navigate("/login"), 1500);
//       } else {
//         setError(data.detail || "Registration failed");
//       }
//     } catch (err) {
//       setError("Something went wrong!");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
//       <Card className="w-full max-w-md">
//         <CardHeader>
//           <CardTitle className="text-center">Create Account</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <Label>Name</Label>
//               <Input
//                 name="name"
//                 type="text"
//                 placeholder="Enter your name"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div>
//               <Label>Email</Label>
//               <Input
//                 name="email"
//                 type="email"
//                 placeholder="Enter your email"
//                 value={form.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div>
//               <Label>Password</Label>
//               <Input
//                 name="password"
//                 type="password"
//                 placeholder="Enter your password"
//                 value={form.password}
//                 onChange={handleChange}
//                 required
//                 minLength={6}
//               />
//             </div>
//             <div>
//               <Label>Confirm Password</Label>
//               <Input
//                 name="confirm_password"
//                 type="password"
//                 placeholder="Confirm your password"
//                 value={form.confirm_password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <Button type="submit" className="w-full">
//               Register
//             </Button>
//           </form>
//           <div className="mt-4 text-center">
//             <Link to="/login">
//               <Button variant="outline">Back to Login</Button>
//             </Link>
//           </div>
//           {error && <p className="text-destructive text-center mt-2">{error}</p>}
//           {message && <p className="text-green-600 text-center mt-2">{message}</p>}
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default Register;

// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// const Register = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirm_password: "",
//   });
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setMessage("");

//     if (form.password !== form.confirm_password) {
//       setError("Passwords do not match");
//       return;
//     }

//     try {
//       const response = await fetch("http://127.0.0.1:8000/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage("Account created! Redirecting to home...");
//         setTimeout(() => navigate("/"), 1500); // Redirect to Landing Page
//       } else {
//         setError(data.detail || "Registration failed");
//       }
//     } catch (err) {
//       setError("Something went wrong!");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
//       <Card className="w-full max-w-md">
//         <CardHeader>
//           <CardTitle className="text-center">Create Account</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <Label>Name</Label>
//               <Input
//                 name="name"
//                 type="text"
//                 placeholder="Enter your name"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div>
//               <Label>Email</Label>
//               <Input
//                 name="email"
//                 type="email"
//                 placeholder="Enter your email"
//                 value={form.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div>
//               <Label>Password</Label>
//               <Input
//                 name="password"
//                 type="password"
//                 placeholder="Enter your password"
//                 value={form.password}
//                 onChange={handleChange}
//                 required
//                 minLength={6}
//               />
//             </div>
//             <div>
//               <Label>Confirm Password</Label>
//               <Input
//                 name="confirm_password"
//                 type="password"
//                 placeholder="Confirm your password"
//                 value={form.confirm_password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <Button type="submit" className="w-full">
//               Register
//             </Button>
//           </form>
//           <div className="mt-4 text-center">
//             <Link to="/login">
//               <Button variant="outline">Back to Login</Button>
//             </Link>
//           </div>
//           {error && <p className="text-destructive text-center mt-2">{error}</p>}
//           {message && <p className="text-green-600 text-center mt-2">{message}</p>}
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default Register;

// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// const Register = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirm_password: "",
//   });
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setMessage("");

//     if (form.password !== form.confirm_password) {
//       setError("Passwords do not match");
//       return;
//     }

//     try {
//       const response = await fetch("http://127.0.0.1:8000/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem("isLoggedIn", "true");
//         setMessage("Account created! Redirecting to home...");
//         setTimeout(() => navigate("/"), 1500);
//       } else {
//         setError(data.detail || "Registration failed");
//       }
//     } catch (err) {
//       setError("Something went wrong!");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
//       <Card className="w-full max-w-md">
//         <CardHeader>
//           <CardTitle className="text-center">Create Account</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <Label>Name</Label>
//               <Input
//                 name="name"
//                 type="text"
//                 placeholder="Enter your name"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div>
//               <Label>Email</Label>
//               <Input
//                 name="email"
//                 type="email"
//                 placeholder="Enter your email"
//                 value={form.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div>
//               <Label>Password</Label>
//               <Input
//                 name="password"
//                 type="password"
//                 placeholder="Enter your password"
//                 value={form.password}
//                 onChange={handleChange}
//                 required
//                 minLength={6}
//               />
//             </div>
//             <div>
//               <Label>Confirm Password</Label>
//               <Input
//                 name="confirm_password"
//                 type="password"
//                 placeholder="Confirm your password"
//                 value={form.confirm_password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <Button type="submit" className="w-full">
//               Register
//             </Button>
//           </form>
//           <div className="mt-4 text-center">
//             <Link to="/login">
//               <Button variant="outline">Back to Login</Button>
//             </Link>
//           </div>
//           {error && <p className="text-destructive text-center mt-2">{error}</p>}
//           {message && <p className="text-green-600 text-center mt-2">{message}</p>}
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default Register;
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (form.password !== form.confirm_password) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("https://samadhannew-1.onrender.com/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        // ✅ Save login info
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", data.email || form.email);
        localStorage.setItem("userName", data.name || form.name);

        if (data.access_token) {
          localStorage.setItem("token", data.access_token);
        }

        setMessage("Account created! Redirecting to dashboard...");
        setTimeout(() => navigate("/dashboard"), 1500);
      } else {
        setError(data.detail || "Registration failed");
      }
    } catch (err) {
      setError("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Create Account</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Name</Label>
              <Input
                name="name"
                type="text"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label>Email</Label>
              <Input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label>Password</Label>
              <Input
                name="password"
                type="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                required
                minLength={6}
              />
            </div>
            <div>
              <Label>Confirm Password</Label>
              <Input
                name="confirm_password"
                type="password"
                placeholder="Confirm your password"
                value={form.confirm_password}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>
          <div className="mt-4 text-center">
            <Link to="/login">
              <Button variant="outline">Back to Login</Button>
            </Link>
          </div>
          {error && <p className="text-destructive text-center mt-2">{error}</p>}
          {message && (
            <p className="text-green-600 text-center mt-2">{message}</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
