"use client";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandFigma,
} from "@tabler/icons-react";

import {Form,FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription} from "@/components/ui/form"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Turnstile } from "@marsidev/react-turnstile";



const cloudflareSiteKey = import.meta.env.PUBLIC_TURNSTILE_SITE_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID; 
const EMAILJS_TEMPLATE_ID = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID; 
const EMAILJS_PUBLIC_KEY = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY; 

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [token, setToken] = useState<string | null>(null);

  const formSchema = z.object({
    firstname: z.string().min(3, "3 characters minimum").max(30),
    lastname: z.string().min(4, "4 characters minimum").max(30),
    email: z.string().email("Invalid email"),
    message: z.string().min(10, "10 characters minimum").max(1500, "1500 characters maximum"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    },
  });
  

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    if(!token){
      setSubmitStatus("error");
      return;
    }

    try {
      // Parámetros que se enviarán al template de EmailJS
      const templateParams = {
        fullname: `${values.firstname} ${values.lastname}`,
        email: values.email,
        message: values.message,
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if(response.status === 200){
        setSubmitStatus("success");
      }else{
        setSubmitStatus("error");
      }
      form.reset(); // Limpia el formulario después de enviar
      
      // Resetea el mensaje de éxito después de 5 segundos
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      setSubmitStatus("error");
      
      // Resetea el mensaje de error después de 5 segundos
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  }

  

  return (
    <div className="shadow-input mx-auto w-full max-w-xl rounded-none bg-background lg:border-2 border-sky-500 dark:border-sky-300 p-4 lg:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-4xl font-bold text-neutral-800 dark:text-neutral-200">
        Contact Me
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Get in touch with me
      </p>
      <Form {...form}>
      <form className="my-8" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input {...field} id="firstname" placeholder="Tyler" type="text" />
                </FormControl>
                <FormDescription/>
                <FormMessage/>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last name</FormLabel>
                <FormControl> 
                  <Input {...field} id="lastname" placeholder="Durden" type="text" />
                </FormControl>
                <FormDescription/>
                <FormMessage/>
              </FormItem>
            )}
          />
        </div>
        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                    <Input {...field} id="email" placeholder="projectmayhem@fc.com" type="email" />
            </FormControl>
            <FormDescription/>
            <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea {...field} className="mb-4" id="message" placeholder="Your message..." />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
        <Turnstile
        className="mb-4"
        siteKey={cloudflareSiteKey!}
        onSuccess={(t) => setToken(t)} // se dispara cuando el reto se resuelve
        onExpire={() => setToken(null)}
      />

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send"}
          <BottomGradient />
        </button>

        {/* Mensajes de estado */}
        {submitStatus === "success" && (
          <p className="mt-4 text-center text-sm text-green-600 dark:text-green-400">
            ✅ Message sent successfully! I'll respond soon.
          </p>
        )}
        {submitStatus === "error" && (
          <p className="mt-4 text-center text-sm text-red-600 dark:text-red-400">
            ❌ Error sending message. Please try again.
          </p>
        )}

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <div className="flex gap-2">
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="button"
            onClick={() => window.open("https://github.com/9ero", "_blank")}
          >
            <IconBrandGithub className="h-5 w-5 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              9ero
            </span>
            <BottomGradient />
          </button>
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="button"
            onClick={() => window.open("https://www.linkedin.com/in/juanmiguelfernandeza/", "_blank")}
          >
            <IconBrandLinkedin className="h-5 w-5 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              juanmiguelfernandeza
            </span>
            <BottomGradient />
          </button>
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="button"
            onClick={() => window.open("https://www.figma.com/@midjuan", "_blank")}
          >
            <IconBrandFigma className="h-5 w-5 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              midjuan
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
      </Form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

