// import { useState, useEffect } from "react";
// import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import Navigation from "@/components/Navigation";
// import { Camera, MapPin, Send, CheckCircle } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";

// const SubmitComplaint = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const [category, setCategory] = useState("");
//   const [trackingId, setTrackingId] = useState("");
//   const [locationCoords, setLocationCoords] = useState({ lat: 0, lng: 0 });
//   const [file, setFile] = useState<File | null>(null); // NEW: File state
//   const { toast } = useToast();

//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
//   });

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setLocationCoords({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           });
//         },
//         () => {
//           console.warn("Geolocation permission denied or unavailable");
//         }
//       );
//     }
//   }, []);

//   const complaintCategories = [
//     "Road & Transportation",
//     "Water Supply",
//     "Electricity",
//     "Waste Management",
//     "Public Safety",
//     "Street Lighting",
//     "Drainage & Sewerage",
//     "Parks & Recreation",
//     "Public Health",
//     "Others",
//   ];

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const form = e.target as HTMLFormElement;
//     const title = category;
//     const description = (form.querySelector("#description") as HTMLTextAreaElement).value;
//     const name = (form.querySelector("#name") as HTMLInputElement).value;
//     const email = (form.querySelector("#email") as HTMLInputElement).value;
//     const phone = (form.querySelector("#phone") as HTMLInputElement).value;
//     const location = `${locationCoords.lat},${locationCoords.lng}`;

//     try {
//       // Use FormData for file + text data
//       const formData = new FormData();
//       formData.append("title", title);
//       formData.append("description", description);
//       formData.append("name", name);
//       formData.append("email", email);
//       formData.append("phone", phone);
//       formData.append("location", location);
//       formData.append("latitude", String(locationCoords.lat));
//       formData.append("longitude", String(locationCoords.lng));

//       if (file) {
//         formData.append("file", file); // append uploaded file
//       }

//       const res = await fetch("http://127.0.0.1:8000/complaints/", {
//         method: "POST",
//         body: formData, // No headers → browser sets "multipart/form-data"
//       });

//       const data = await res.json();
//       const newTrackingId = data.complaint?.tracking_id || "UNKNOWN-ID";
//       setTrackingId(newTrackingId);

//       setSubmitted(true);
//       toast({
//         title: "Complaint Submitted Successfully!",
//         description: `Your tracking ID is ${newTrackingId}`,
//       });
//     } catch (err) {
//       console.error("Error submitting complaint:", err);
//       toast({
//         title: "Submission Failed",
//         description: "Please try again later.",
//       });
//     }
//   };

//   if (submitted) {
//     return (
//       <div className="min-h-screen bg-background">
//         <Navigation />
//         <div className="max-w-4xl mx-auto px-4 py-16">
//           <Card className="text-center shadow-hero">
//             <CardContent className="pt-12 pb-8">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-growth-green-light rounded-full mb-6">
//                 <CheckCircle className="w-8 h-8 text-growth-green" />
//               </div>
//               <h1 className="text-3xl font-bold text-foreground mb-4">
//                 Complaint Submitted Successfully!
//               </h1>
//               <p className="text-muted-foreground mb-6">
//                 Your complaint has been received and is being processed by our AI system.
//               </p>
//               <div className="bg-civic-blue-light/20 rounded-lg p-4 mb-6 inline-block">
//                 <p className="text-sm text-muted-foreground mb-1">Your Tracking ID:</p>
//                 <p className="text-2xl font-mono font-bold text-civic-blue">{trackingId}</p>
//               </div>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Button variant="civic" onClick={() => window.location.href = "/track"}>
//                   Track This Complaint
//                 </Button>
//                 <Button variant="outline" onClick={() => setSubmitted(false)}>
//                   Submit Another Complaint
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />
//       <div className="max-w-4xl mx-auto px-4 py-16">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-foreground mb-4">Submit Your Complaint</h1>
//           <p className="text-lg text-muted-foreground">
//             Help us serve you better by providing detailed information about your civic issue
//           </p>
//         </div>

//         <Card className="shadow-card">
//           <CardHeader>
//             <CardTitle className="flex items-center gap-2">
//               <Send className="w-5 h-5 text-civic-blue" />
//               Complaint Details
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Name & Email */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <Label htmlFor="name">Full Name *</Label>
//                   <Input id="name" placeholder="Enter your full name" required />
//                 </div>
//                 <div>
//                   <Label htmlFor="email">Email Address *</Label>
//                   <Input id="email" type="email" placeholder="Enter your email" required />
//                 </div>
//               </div>

//               {/* Phone & Category */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <Label htmlFor="phone">Phone Number *</Label>
//                   <Input id="phone" type="tel" placeholder="Enter your phone number" required />
//                 </div>
//                 <div>
//                   <Label htmlFor="category">Complaint Category *</Label>
//                   <Select value={category} onValueChange={setCategory} required>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select category" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {complaintCategories.map((c) => (
//                         <SelectItem key={c} value={c}>
//                           {c}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>

//               {/* Description */}
//               <div>
//                 <Label htmlFor="description">Complaint Description *</Label>
//                 <Textarea
//                   id="description"
//                   placeholder="Describe your issue in detail..."
//                   className="min-h-[120px]"
//                   required
//                 />
//               </div>

//               {/* Google Map */}
//               {isLoaded && (
//                 <div className="h-64 w-full mb-4">
//                   <GoogleMap center={locationCoords} zoom={16} mapContainerClassName="h-full w-full">
//                     <Marker position={locationCoords} />
//                   </GoogleMap>
//                   <p className="text-sm text-muted-foreground mt-1 text-center">
//                     Your current location is automatically fetched via GPS.
//                   </p>
//                 </div>
//               )}

//               {/* File Upload */}
//               <div>
//                 <Label>Upload Photos (Optional)</Label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(e) => setFile(e.target.files?.[0] || null)}
//                   className="hidden"
//                   id="fileInput"
//                 />
//                 <div
//                   className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-civic-blue transition-colors cursor-pointer"
//                   onClick={() => document.getElementById("fileInput")?.click()}
//                 >
//                   <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
//                   <p className="text-muted-foreground mb-2">Click to upload photos or drag and drop</p>
//                   <p className="text-sm text-muted-foreground">Photos help us understand and resolve your issue faster</p>
//                   <Button type="button" variant="outline" className="mt-4">
//                     Choose Files
//                   </Button>
//                   {file && <p className="mt-2 text-sm text-civic-blue">Selected: {file.name}</p>}
//                 </div>
//               </div>

//               <Button type="submit" variant="civic" size="lg" className="w-full">
//                 <Send className="w-5 h-5 mr-2" />
//                 Submit Complaint
//               </Button>
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default SubmitComplaint;

// import { useState, useEffect } from "react";
// import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import Navigation from "@/components/Navigation";
// import { Camera, MapPin, Send, CheckCircle } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";

// const SubmitComplaint = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const [category, setCategory] = useState("");
//   const [trackingId, setTrackingId] = useState("");
//   const [locationCoords, setLocationCoords] = useState({ lat: 0, lng: 0 });
//   const { toast } = useToast();

//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
//   });

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setLocationCoords({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           });
//         },
//         () => {
//           console.warn("Geolocation permission denied or unavailable");
//         }
//       );
//     }
//   }, []);

//   const complaintCategories = [
//     "Road & Transportation",
//     "Water Supply",
//     "Electricity",
//     "Waste Management",
//     "Public Safety",
//     "Street Lighting",
//     "Drainage & Sewerage",
//     "Parks & Recreation",
//     "Public Health",
//     "Others",
//   ];

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const form = e.target as HTMLFormElement;
//     const title = category;
//     const description = (form.querySelector("#description") as HTMLTextAreaElement).value;
//     const name = (form.querySelector("#name") as HTMLInputElement).value;
//     const email = (form.querySelector("#email") as HTMLInputElement).value;
//     const phone = (form.querySelector("#phone") as HTMLInputElement).value;
//     const location = ${locationCoords.lat},${locationCoords.lng};

//     try {
//       const res = await fetch("http://127.0.0.1:8000/complaints", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           title,
//           description,
//           name,
//           email,
//           phone,
//           location,
//           latitude: locationCoords.lat,
//           longitude: locationCoords.lng,
//         }),
//       });

//       const data = await res.json();
//       const newTrackingId = "SMX-" + (data.complaint?.id || Math.random().toString(36).substr(2, 8).toUpperCase());
//       setTrackingId(newTrackingId);

//       setSubmitted(true);
//       toast({
//         title: "Complaint Submitted Successfully!",
//         description: Your tracking ID is ${newTrackingId},
//       });
//     } catch (err) {
//       console.error("Error submitting complaint:", err);
//       toast({
//         title: "Submission Failed",
//         description: "Please try again later.",
//       });
//     }
//   };

//   if (submitted) {
//     return (
//       <div className="min-h-screen bg-background">
//         <Navigation />
//         <div className="max-w-4xl mx-auto px-4 py-16">
//           <Card className="text-center shadow-hero">
//             <CardContent className="pt-12 pb-8">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-growth-green-light rounded-full mb-6">
//                 <CheckCircle className="w-8 h-8 text-growth-green" />
//               </div>
//               <h1 className="text-3xl font-bold text-foreground mb-4">
//                 Complaint Submitted Successfully!
//               </h1>
//               <p className="text-muted-foreground mb-6">
//                 Your complaint has been received and is being processed by our AI system.
//               </p>
//               <div className="bg-civic-blue-light/20 rounded-lg p-4 mb-6 inline-block">
//                 <p className="text-sm text-muted-foreground mb-1">Your Tracking ID:</p>
//                 <p className="text-2xl font-mono font-bold text-civic-blue">{trackingId}</p>
//               </div>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Button variant="civic" onClick={() => window.location.href = "/track"}>
//                   Track This Complaint
//                 </Button>
//                 <Button variant="outline" onClick={() => setSubmitted(false)}>
//                   Submit Another Complaint
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />
//       <div className="max-w-4xl mx-auto px-4 py-16">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-foreground mb-4">Submit Your Complaint</h1>
//           <p className="text-lg text-muted-foreground">
//             Help us serve you better by providing detailed information about your civic issue
//           </p>
//         </div>

//         <Card className="shadow-card">
//           <CardHeader>
//             <CardTitle className="flex items-center gap-2">
//               <Send className="w-5 h-5 text-civic-blue" />
//               Complaint Details
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Name & Email */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <Label htmlFor="name">Full Name *</Label>
//                   <Input id="name" placeholder="Enter your full name" required />
//                 </div>
//                 <div>
//                   <Label htmlFor="email">Email Address *</Label>
//                   <Input id="email" type="email" placeholder="Enter your email" required />
//                 </div>
//               </div>

//               {/* Phone & Category */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <Label htmlFor="phone">Phone Number *</Label>
//                   <Input id="phone" type="tel" placeholder="Enter your phone number" required />
//                 </div>
//                 <div>
//                   <Label htmlFor="category">Complaint Category *</Label>
//                   <Select value={category} onValueChange={setCategory} required>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select category" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {complaintCategories.map((c) => (
//                         <SelectItem key={c} value={c}>
//                           {c}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>

//               {/* Description */}
//               <div>
//                 <Label htmlFor="description">Complaint Description *</Label>
//                 <Textarea
//                   id="description"
//                   placeholder="Describe your issue in detail..."
//                   className="min-h-[120px]"
//                   required
//                 />
//               </div>

//               {/* Google Map */}
//               {isLoaded && (
//                 <div className="h-64 w-full mb-4">
//                   <GoogleMap center={locationCoords} zoom={16} mapContainerClassName="h-full w-full">
//                     <Marker position={locationCoords} />
//                   </GoogleMap>
//                   <p className="text-sm text-muted-foreground mt-1 text-center">
//                     Your current location is automatically fetched via GPS.
//                   </p>
//                 </div>
//               )}

//               {/* File Upload */}
//               <div>
//                 <Label>Upload Photos (Optional)</Label>
//                 <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-civic-blue transition-colors">
//                   <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
//                   <p className="text-muted-foreground mb-2">Click to upload photos or drag and drop</p>
//                   <p className="text-sm text-muted-foreground">Photos help us understand and resolve your issue faster</p>
//                   <Button type="button" variant="outline" className="mt-4">
//                     Choose Files
//                   </Button>
//                 </div>
//               </div>

//               <Button type="submit" variant="civic" size="lg" className="w-full">
//                 <Send className="w-5 h-5 mr-2" />
//                 Submit Complaint
//               </Button>
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default SubmitComplaint;


// import { useState, useEffect } from "react";
// import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import Navigation from "@/components/Navigation";
// import { Camera, MapPin, Send, CheckCircle } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";

// const SubmitComplaint = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const [category, setCategory] = useState("");
//   const [trackingId, setTrackingId] = useState("");
//   const [locationCoords, setLocationCoords] = useState({ lat: 0, lng: 0 });
//   const { toast } = useToast();

//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
//   });

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setLocationCoords({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           });
//         },
//         () => {
//           console.warn("Geolocation permission denied or unavailable");
//         }
//       );
//     }
//   }, []);

//   const complaintCategories = [
//     "Road & Transportation",
//     "Water Supply",
//     "Electricity",
//     "Waste Management",
//     "Public Safety",
//     "Street Lighting",
//     "Drainage & Sewerage",
//     "Parks & Recreation",
//     "Public Health",
//     "Others",
//   ];

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const form = e.target as HTMLFormElement;
//     const title = category;
//     const description = (form.querySelector("#description") as HTMLTextAreaElement).value;
//     const name = (form.querySelector("#name") as HTMLInputElement).value;
//     const email = (form.querySelector("#email") as HTMLInputElement).value;
//     const phone = (form.querySelector("#phone") as HTMLInputElement).value;
//     const location = ${locationCoords.lat},${locationCoords.lng};

//     try {
//       const res = await fetch("http://127.0.0.1:8000/complaints", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           title,
//           description,
//           name,
//           email,
//           phone,
//           location,
//           latitude: locationCoords.lat,
//           longitude: locationCoords.lng,
//         }),
//       });

//       const data = await res.json();
//       const newTrackingId = "SMX-" + (data.complaint?.id || Math.random().toString(36).substr(2, 8).toUpperCase());
//       setTrackingId(newTrackingId);

//       setSubmitted(true);
//       toast({
//         title: "Complaint Submitted Successfully!",
//         description: Your tracking ID is ${newTrackingId},
//       });
//     } catch (err) {
//       console.error("Error submitting complaint:", err);
//       toast({
//         title: "Submission Failed",
//         description: "Please try again later.",
//       });
//     }
//   };

//   if (submitted) {
//     return (
//       <div className="min-h-screen bg-background">
//         <Navigation />
//         <div className="max-w-4xl mx-auto px-4 py-16">
//           <Card className="text-center shadow-hero">
//             <CardContent className="pt-12 pb-8">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-growth-green-light rounded-full mb-6">
//                 <CheckCircle className="w-8 h-8 text-growth-green" />
//               </div>
//               <h1 className="text-3xl font-bold text-foreground mb-4">
//                 Complaint Submitted Successfully!
//               </h1>
//               <p className="text-muted-foreground mb-6">
//                 Your complaint has been received and is being processed by our AI system.
//               </p>
//               <div className="bg-civic-blue-light/20 rounded-lg p-4 mb-6 inline-block">
//                 <p className="text-sm text-muted-foreground mb-1">Your Tracking ID:</p>
//                 <p className="text-2xl font-mono font-bold text-civic-blue">{trackingId}</p>
//               </div>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Button variant="civic" onClick={() => window.location.href = "/track"}>
//                   Track This Complaint
//                 </Button>
//                 <Button variant="outline" onClick={() => setSubmitted(false)}>
//                   Submit Another Complaint
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />
//       <div className="max-w-4xl mx-auto px-4 py-16">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-foreground mb-4">Submit Your Complaint</h1>
//           <p className="text-lg text-muted-foreground">
//             Help us serve you better by providing detailed information about your civic issue
//           </p>
//         </div>

//         <Card className="shadow-card">
//           <CardHeader>
//             <CardTitle className="flex items-center gap-2">
//               <Send className="w-5 h-5 text-civic-blue" />
//               Complaint Details
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Name & Email */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <Label htmlFor="name">Full Name *</Label>
//                   <Input id="name" placeholder="Enter your full name" required />
//                 </div>
//                 <div>
//                   <Label htmlFor="email">Email Address *</Label>
//                   <Input id="email" type="email" placeholder="Enter your email" required />
//                 </div>
//               </div>

//               {/* Phone & Category */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <Label htmlFor="phone">Phone Number *</Label>
//                   <Input id="phone" type="tel" placeholder="Enter your phone number" required />
//                 </div>
//                 <div>
//                   <Label htmlFor="category">Complaint Category *</Label>
//                   <Select value={category} onValueChange={setCategory} required>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select category" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {complaintCategories.map((c) => (
//                         <SelectItem key={c} value={c}>
//                           {c}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>

//               {/* Description */}
//               <div>
//                 <Label htmlFor="description">Complaint Description *</Label>
//                 <Textarea
//                   id="description"
//                   placeholder="Describe your issue in detail..."
//                   className="min-h-[120px]"
//                   required
//                 />
//               </div>

//               {/* Google Map */}
//               {isLoaded && (
//                 <div className="h-64 w-full mb-4">
//                   <GoogleMap center={locationCoords} zoom={16} mapContainerClassName="h-full w-full">
//                     <Marker position={locationCoords} />
//                   </GoogleMap>
//                   <p className="text-sm text-muted-foreground mt-1 text-center">
//                     Your current location is automatically fetched via GPS.
//                   </p>
//                 </div>
//               )}

//               {/* File Upload */}
//               <div>
//                 <Label>Upload Photos (Optional)</Label>
//                 <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-civic-blue transition-colors">
//                   <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
//                   <p className="text-muted-foreground mb-2">Click to upload photos or drag and drop</p>
//                   <p className="text-sm text-muted-foreground">Photos help us understand and resolve your issue faster</p>
//                   <Button type="button" variant="outline" className="mt-4">
//                     Choose Files
//                   </Button>
//                 </div>
//               </div>

//               <Button type="submit" variant="civic" size="lg" className="w-full">
//                 <Send className="w-5 h-5 mr-2" />
//                 Submit Complaint
//               </Button>
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default SubmitComplaint;

// import { useState, useEffect } from "react";
// import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import Navigation from "@/components/Navigation";
// import { Send, CheckCircle } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";
// const SubmitComplaint = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const [category, setCategory] = useState("");
//   const [trackingId, setTrackingId] = useState("");
//   const [locationCoords, setLocationCoords] = useState({ lat: 0, lng: 0 });
//   const [imageFile, setImageFile] = useState<File | null>(null);
//   const { toast } = useToast();

//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
//   });

//   // 📍 Fetch current location
//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setLocationCoords({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           });
//         },
//         () => {
//           console.warn("Geolocation permission denied or unavailable");
//         }
//       );
//     }
//   }, []);

//   const complaintCategories = [
//     "Road & Transportation",
//     "Water Supply",
//     "Electricity",
//     "Waste Management",
//     "Public Safety",
//     "Street Lighting",
//     "Drainage & Sewerage",
//     "Parks & Recreation",
//     "Public Health",
//     "Others",
//   ];

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const form = e.target as HTMLFormElement;
//     const title = category;
//     const description = (form.querySelector("#description") as HTMLTextAreaElement).value;
//     const name = (form.querySelector("#name") as HTMLInputElement).value;

//     // Prefer the email from localStorage (normalized) to keep dashboard filtering consistent
//     const emailInput = (form.querySelector("#email") as HTMLInputElement).value;
//     const storedEmail = (localStorage.getItem("userEmail") || emailInput || "").trim().toLowerCase();

//     const phone = (form.querySelector("#phone") as HTMLInputElement).value;
//     const location = `${locationCoords.lat},${locationCoords.lng}`;

//     // ✅ Use FormData for mixed fields + file
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("name", name);
//     formData.append("email", storedEmail); // ✅ normalized email
//     formData.append("phone", phone);
//     formData.append("location", location);
//     formData.append("latitude", locationCoords.lat.toString());
//     formData.append("longitude", locationCoords.lng.toString());
//     if (imageFile) {
//       formData.append("image", imageFile);
//     }

//     try {
//       const res = await fetch("http://127.0.0.1:8000/complaints/", {
//         method: "POST",
//         body: formData, // let browser set Content-Type boundary
//       });

//       if (!res.ok) {
//         throw new Error("Failed to submit complaint");
//       }

//       const data = await res.json();
//       const newTrackingId = data.tracking_id || "UNKNOWN";
//       setTrackingId(newTrackingId);

//       setSubmitted(true);
//       toast({
//         title: "Complaint Submitted Successfully!",
//         description: `Your tracking ID is ${newTrackingId}`,
//       });
//     } catch (err) {
//       console.error("Error submitting complaint:", err);
//       toast({
//         title: "Submission Failed",
//         description: "Please try again later.",
//         variant: "destructive",
//       });
//     }
//   };

//   // ✅ Success Screen
//   if (submitted) {
//     return (
//       <div className="min-h-screen bg-background">
//         <Navigation />
//         <div className="max-w-4xl mx-auto px-4 py-16">
//           <Card className="text-center shadow-hero">
//             <CardContent className="pt-12 pb-8">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-growth-green-light rounded-full mb-6">
//                 <CheckCircle className="w-8 h-8 text-growth-green" />
//               </div>
//               <h1 className="text-3xl font-bold text-foreground mb-4">
//                 Complaint Submitted Successfully!
//               </h1>
//               <p className="text-muted-foreground mb-6">
//                 Your complaint has been received and is being processed.
//               </p>
//               <div className="bg-civic-blue-light/20 rounded-lg p-4 mb-6 inline-block">
//                 <p className="text-sm text-muted-foreground mb-1">Your Tracking ID:</p>
//                 <p className="text-2xl font-mono font-bold text-civic-blue">{trackingId}</p>
//               </div>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Button variant="civic" onClick={() => (window.location.href = "/track")}>
//                   Track This Complaint
//                 </Button>
//                 <Button variant="outline" onClick={() => setSubmitted(false)}>
//                   Submit Another Complaint
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     );
//   }

//   // ✅ Complaint Form
//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />
//       <div className="max-w-4xl mx-auto px-4 py-16">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-foreground mb-4">Submit Your Complaint</h1>
//           <p className="text-lg text-muted-foreground">
//             Help us serve you better by providing detailed information about your issue.
//           </p>
//         </div>

//         <Card className="shadow-card">
//           <CardHeader>
//             <CardTitle className="flex items-center gap-2">
//               <Send className="w-5 h-5 text-civic-blue" />
//               Complaint Details
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Name & Email */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <Label htmlFor="name">Full Name *</Label>
//                   <Input id="name" placeholder="Enter your full name" required />
//                 </div>
//                 <div>
//                   <Label htmlFor="email">Email Address *</Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     placeholder="Enter your email"
//                     // optionally pre-fill with stored email for convenience:
//                     defaultValue={(localStorage.getItem("userEmail") || "").toLowerCase()}
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Phone & Category */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <Label htmlFor="phone">Phone Number *</Label>
//                   <Input id="phone" type="tel" placeholder="Enter your phone number" required />
//                 </div>
//                 <div>
//                   <Label htmlFor="category">Complaint Category *</Label>
//                   <Select value={category} onValueChange={setCategory} required>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select category" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {complaintCategories.map((c) => (
//                         <SelectItem key={c} value={c}>
//                           {c}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>

//               {/* Description */}
//               <div>
//                 <Label htmlFor="description">Complaint Description *</Label>
//                 <Textarea
//                   id="description"
//                   placeholder="Describe your issue in detail..."
//                   className="min-h-[120px]"
//                   required
//                 />
//               </div>

//               {/* Google Map */}
//               {isLoaded && (
//                 <div className="h-64 w-full mb-4">
//                   <GoogleMap center={locationCoords} zoom={16} mapContainerClassName="h-full w-full">
//                     <Marker position={locationCoords} />
//                   </GoogleMap>
//                   <p className="text-sm text-muted-foreground mt-1 text-center">
//                     Your current location is automatically fetched via GPS.
//                   </p>
//                 </div>
//               )}

//               {/* ✅ File Upload */}
//               <div>
//                 <Label htmlFor="image">Upload Photos (Optional)</Label>
//                 <Input
//                   id="image"
//                   type="file"
//                   accept="image/*"
//                   onChange={(e) => setImageFile(e.target.files?.[0] || null)}
//                 />
//               </div>

//               {/* Submit Button */}
//               <Button type="submit" variant="civic" size="lg" className="w-full">
//                 <Send className="w-5 h-5 mr-2" />
//                 Submit Complaint
//               </Button>
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default SubmitComplaint;
import { useState, useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SubmitComplaint = () => {
  const [submitted, setSubmitted] = useState(false);
  const [category, setCategory] = useState("");
  const [trackingId, setTrackingId] = useState("");
  const [locationCoords, setLocationCoords] = useState({ lat: 0, lng: 0 });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
  });

  // 📍 Fetch current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationCoords({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          console.warn("Geolocation permission denied or unavailable");
        }
      );
    }
  }, []);

  const complaintCategories = [
    "Road & Transportation",
    "Water Supply",
    "Electricity",
    "Waste Management",
    "Public Safety",
    "Street Lighting",
    "Drainage & Sewerage",
    "Parks & Recreation",
    "Public Health",
    "Others",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!category) {
      toast({
        title: "Category required",
        description: "Please choose a complaint category.",
        variant: "destructive",
      });
      return;
    }

    const form = e.target as HTMLFormElement;
    const title = category;
    const description = (form.querySelector("#description") as HTMLTextAreaElement).value;
    const name = (form.querySelector("#name") as HTMLInputElement).value;

    // Prefer the email from localStorage (normalized) to keep dashboard filtering consistent
    const emailInput = (form.querySelector("#email") as HTMLInputElement).value;
    const storedEmail = (localStorage.getItem("userEmail") || emailInput || "")
      .trim()
      .toLowerCase();

    const phone = (form.querySelector("#phone") as HTMLInputElement).value;
    const location = `${locationCoords.lat},${locationCoords.lng}`;

    // ✅ Use FormData for mixed fields + file
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("name", name);
    formData.append("email", storedEmail); // normalized email
    formData.append("phone", phone);
    formData.append("location", location);
    formData.append("latitude", locationCoords.lat.toString());
    formData.append("longitude", locationCoords.lng.toString());
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      setSubmitting(true);
      const res = await fetch("http://127.0.0.1:8000/complaints/", {
        method: "POST",
        body: formData, // let browser set Content-Type boundary
      });

      if (!res.ok) {
        throw new Error("Failed to submit complaint");
      }

      const data = await res.json();
      const newTrackingId = data.tracking_id || "UNKNOWN";
      setTrackingId(newTrackingId);

      // Make sure we also store the normalized email locally (helps the dashboard)
      localStorage.setItem("userEmail", storedEmail);

      setSubmitted(true);
      toast({
        title: "Complaint Submitted Successfully!",
        description: `Your tracking ID is ${newTrackingId}`,
      });
    } catch (err) {
      console.error("Error submitting complaint:", err);
      toast({
        title: "Submission Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  // ✅ Success Screen
  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-16">
          <Card className="text-center shadow-hero">
            <CardContent className="pt-12 pb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-growth-green-light rounded-full mb-6">
                <CheckCircle className="w-8 h-8 text-growth-green" />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4">
                Complaint Submitted Successfully!
              </h1>
              <p className="text-muted-foreground mb-6">
                Your complaint has been received and is being processed.
              </p>
              <div className="bg-civic-blue-light/20 rounded-lg p-4 mb-6 inline-block">
                <p className="text-sm text-muted-foreground mb-1">Your Tracking ID:</p>
                <p className="text-2xl font-mono font-bold text-civic-blue">{trackingId}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="civic" onClick={() => (window.location.href = "/track")}>
                  Track This Complaint
                </Button>
                <Button variant="outline" onClick={() => setSubmitted(false)}>
                  Submit Another Complaint
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // ✅ Complaint Form
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Submit Your Complaint</h1>
          <p className="text-lg text-muted-foreground">
            Help us serve you better by providing detailed information about your issue.
          </p>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Send className="w-5 h-5 text-civic-blue" />
              Complaint Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    defaultValue={localStorage.getItem("userName") || ""}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    defaultValue={(localStorage.getItem("userEmail") || "").toLowerCase()}
                    required
                  />
                </div>
              </div>

              {/* Phone & Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                </div>
                <div>
                  <Label htmlFor="category">Complaint Category *</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {complaintCategories.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description">Complaint Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your issue in detail..."
                  className="min-h-[120px]"
                  required
                />
              </div>

              {/* Google Map */}
              {isLoaded && (
                <div className="h-64 w-full mb-4">
                  <GoogleMap center={locationCoords} zoom={16} mapContainerClassName="h-full w-full">
                    <Marker position={locationCoords} />
                  </GoogleMap>
                  <p className="text-sm text-muted-foreground mt-1 text-center">
                    Your current location is automatically fetched via GPS.
                  </p>
                </div>
              )}

              {/* ✅ File Upload */}
              <div>
                <Label htmlFor="image">Upload Photos (Optional)</Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" variant="civic" size="lg" className="w-full" disabled={submitting}>
                <Send className="w-5 h-5 mr-2" />
                {submitting ? "Submitting..." : "Submit Complaint"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SubmitComplaint;
