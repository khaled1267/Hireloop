"use client";
import React, { useState } from "react";
import { Card, Input, TextArea, Button, Form } from "@heroui/react";
import {
  Briefcase,
  User,
  Mail,
  FileText,
  UploadCloud,
  Globe,
  Link2,
  MessageSquareQuote,
} from "lucide-react";
import { toast } from "react-hot-toast";
import { submitapplication } from "@/lib/action/appilication";
import { useRouter } from "next/navigation";

const Jobapply = ({ job, applicant }) => {
  const [resume, setResume] = useState(null);
  const [isPending, setIsPending] = useState(false); // লোডিং স্টেট
 const router = useRouter();
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true); // লোডিং শুরু

    const formData = new FormData(e.currentTarget);
console.log("job",job);
    // jobId এবং jobTitle সহ অবজেক্ট তৈরি
    const data = {
      jobId: job?._id || job?.id || "", // আপনার ডাটাবেজের আইডি ফিল্ড অনুযায়ী চেক করবে
      jobTitle: job?.jobTitle
 || "",
      name: formData.get("name"),
      email: formData.get("email"),
      portfolio: formData.get("portfolio"),
      resumeLink: formData.get("resumeLink"),

      companyName: job?.companyName || "",
      coverLetter: formData.get("coverLetter"),
      notes: formData.get("notes"),
      resumeFile: resume,
      applicantId: applicant?._id || "",
    };

    console.log("Submitted Application Data with Job Details:", data);

    try {
      const res = await submitapplication(data);

      if (res?.insertedId) {
        toast.success("Your application has been submitted successfully! 🎉");
        // সাবমিট সফল হলে চাইলে ফাইল স্টেট ক্লিয়ার করতে পারেন
        setResume(null);
        router.push("/");
        e.currentTarget.reset();

        // ফর্মের ইনপুটগুলো খালি করার জন্য
      } else {
        toast.error("Failed to submit application. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsPending(false); // লোডিং শেষ
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-50 dark:bg-zinc-900 p-4 md:p-8 transition-colors">
      <Card className="w-full max-w-2xl shadow-xl border border-default-200/60 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden rounded-2xl">
        {/* Header Section */}
        <div className="flex flex-col items-start gap-2 p-6 md:p-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white/10 rounded-lg backdrop-blur-md">
              <Briefcase size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight">
              Apply for Position
            </h1>
          </div>
          <p className="text-sm text-blue-100 font-medium">
            Role:{" "}
            <span className="bg-white/20 px-2.5 py-0.5 rounded-full text-white text-xs font-semibold ml-1">
              {job?.title || "Software Engineer"}
            </span>
          </p>
        </div>

        <Form onSubmit={handleSubmit} validationBehavior="native">
          {/* Form Body */}
          <div className="space-y-6 p-6 md:p-8 w-full flex flex-col bg-white dark:bg-zinc-950">
            {/* Row 1: Full Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                isRequired
                type="text"
                name="name"
                label="Full Name"
                placeholder="John Doe"
                labelPlacement="outside"
                defaultValue={applicant?.name || ""}
                variant="bordered"
                className="text-default-900 dark:text-zinc-100"
                startContent={<User className="text-default-400" size={18} />}
              />

              <Input
                isRequired
                type="email"
                name="email"
                label="Email Address"
                placeholder="example@gmail.com"
                labelPlacement="outside"
                defaultValue={applicant?.email || ""}
                variant="bordered"
                className="text-default-900 dark:text-zinc-100"
                startContent={<Mail className="text-default-400" size={18} />}
              />
            </div>

            {/* Row 2: Portfolio & Resume Link */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="url"
                name="portfolio"
                label="Portfolio URL"
                placeholder="https://myportfolio.com"
                labelPlacement="outside"
                variant="bordered"
                className="text-default-900 dark:text-zinc-100"
                startContent={<Globe className="text-default-400" size={18} />}
              />

              <Input
                type="url"
                name="resumeLink"
                label="Resume Link (Google Drive / Dropbox)"
                placeholder="https://drive.google.com/..."
                labelPlacement="outside"
                variant="bordered"
                className="text-default-900 dark:text-zinc-100"
                startContent={<Link2 className="text-default-400" size={18} />}
              />
            </div>

            {/* Cover Letter */}
            <TextArea
              isRequired
              name="coverLetter"
              label="Cover Letter"
              placeholder="Briefly describe why you are a great fit for this role..."
              labelPlacement="outside"
              variant="bordered"
              minRows={4}
              className="text-default-900 dark:text-zinc-100"
              startContent={
                <FileText className="text-default-400 mt-1" size={18} />
              }
            />

            {/* Additional Notes */}
            <TextArea
              name="notes"
              label="Additional Notes / Comments"
              placeholder="Anything else you'd like to share with the hiring team?"
              labelPlacement="outside"
              variant="bordered"
              minRows={3}
              className="text-default-900 dark:text-zinc-100"
              startContent={
                <MessageSquareQuote
                  className="text-default-400 mt-1"
                  size={18}
                />
              }
            />

            {/* Resume File Upload (Drag & Drop UI) */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-semibold text-default-700 dark:text-zinc-300">
                Attach Resume File <span className="text-danger">*</span>
              </label>
              <div className="border-2 border-dashed border-default-300 dark:border-zinc-800 rounded-xl p-6 flex flex-col items-center justify-center bg-default-50/50 dark:bg-zinc-900/40 hover:bg-default-100 dark:hover:bg-zinc-900/80 transition-all cursor-pointer relative group">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer z-10"
                />
                <UploadCloud
                  className="text-default-400 group-hover:text-primary transition-colors mb-2"
                  size={32}
                />
                <p className="text-sm text-default-700 dark:text-zinc-300 font-medium text-center px-2">
                  {resume ? resume.name : "Click to upload or drag & drop"}
                </p>
                <p className="text-xs text-default-400 mt-1">
                  Supported formats: PDF, DOCX (Max 5MB)
                </p>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex justify-end items-center gap-3 p-6 w-full border-t border-default-100 dark:border-zinc-900 bg-default-50/50 dark:bg-zinc-900/20">
            <Button
              color="danger"
              variant="light"
              type="button"
              className="font-medium rounded-xl"
            >
              Cancel
            </Button>
            <Button
              color="primary"
              type="submit"
              isLoading={isPending} // HeroUI-এর লেটেস্ট স্পিনার যুক্ত করা হলো
              className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 px-6 rounded-xl hover:opacity-95 transition-opacity"
            >
              Submit Application
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Jobapply;
