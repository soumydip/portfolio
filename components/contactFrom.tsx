"use client";

import { useActionState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, XCircle, Loader2, Send } from "lucide-react";
// সঠিক ফাইল থেকে ইমপোর্ট করুন (যেখানে সার্ভার অ্যাকশন রেখেছেন)
import { sendContact, type FormState } from "@/app/actions/contact"; 

const initialState: FormState = {
  success: false,
  message: "",
};

export const ContactForm = () => {
  const [state, action, isPending] = useActionState(sendContact, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state.success]);

  return (
    <Card className="w-full max-w-lg mx-auto bg-slate-900 border-slate-800 mt-8">
      <CardHeader>
        <CardTitle className="text-white text-2xl">Get In Touch</CardTitle>
        <CardDescription className="text-slate-400">
          Have a project in mind? Let&#39;s talk.
        </CardDescription>
      </CardHeader>

      <CardContent>
        {state.message && (
          <Alert
            className={`mb-6 ${
              state.success
                ? "border-green-500 bg-green-500/10"
                : "border-red-500 bg-red-500/10"
            }`}
          >
            {state.success ? (
              <CheckCircle2 className="h-4 w-4 text-green-500" />
            ) : (
              <XCircle className="h-4 w-4 text-red-500" />
            )}
            <AlertDescription
              className={state.success ? "text-green-400" : "text-red-400"}
            >
              {state.message}
            </AlertDescription>
          </Alert>
        )}

        <form ref={formRef} action={action} className="space-y-5">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-slate-300">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Soumyadip Maity"
              disabled={isPending}
              minLength={5}
              className={`bg-slate-800 border-slate-700 text-white 
                placeholder:text-slate-500 focus:border-blue-500
                ${state.errors?.name ? "border-red-500" : ""}`}
            />
            {state.errors?.name && (
              <p className="text-red-400 text-xs mt-1">
                {state.errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-300">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              disabled={isPending}
              className={`bg-slate-800 border-slate-700 text-white 
                placeholder:text-slate-500 focus:border-blue-500
                ${state.errors?.email ? "border-red-500" : ""}`}
            />
            {state.errors?.email && (
              <p className="text-red-400 text-xs mt-1">
                {state.errors.email} 
              </p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-slate-300">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              required
              minLength={10}
              rows={5}
              disabled={isPending }
              className={`bg-slate-800 border-slate-700 text-white 
                placeholder:text-slate-500 focus:border-blue-500 
                resize-none
                ${state.errors?.message ? "border-red-500" : ""}`}
            />
            {state.errors?.message && (
              <p className="text-red-400 text-xs mt-1">
                {state.errors.message} 
              </p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};