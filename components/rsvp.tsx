"use client"

import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"

import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { motion, type Variants } from "framer-motion"

const formSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  attendance: z.string().min(1, "Please select attendance"),
  message: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

export default function RSVPSection() {
  const easing = [0.22, 1, 0.36, 1] as const

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      attendance: "",
      message: "",
    },
  })

  const onSubmit = async (values: FormValues) => {
    try {
      console.log(values)

      toast.success("Thank you for your RSVP!")

      form.reset()
    } catch (error) {
      console.error(error)
      toast.error("Failed to submit RSVP")
    }
  }

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  }

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: easing,
      },
    },
  }

  return (
    <motion.section
      className="relative flex w-full items-center justify-center py-30 text-center text-white"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.65 }}
    >
      <motion.div
        variants={fadeUp}
        className="flex w-[82%] max-w-105 flex-col items-center justify-center rounded-2xl bg-black/10 px-6 py-10 shadow-2xl backdrop-blur-xs"
      >
        <motion.p
          variants={fadeUp}
          className="font-vibes text-5xl/14 tracking-wide text-pink-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]"
        >
          R.S.V.P
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="font-montserrat text-sm text-[#FFF8F2] drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]"
        >
          Kindly confirm your attendance before the wedding day.
        </motion.p>

        <motion.form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto mt-10 flex w-full max-w-md flex-col gap-3 font-montserrat text-sm text-[#FFF8F2] drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]"
        >
          <Field className="flex flex-col gap-1">
            <FieldLabel>Name</FieldLabel>
            <Input
              className="text-sm"
              placeholder="Enter your name"
              {...form.register("name")}
            />
            <FieldError>{form.formState.errors.name?.message}</FieldError>
          </Field>

          <Field className="flex flex-col gap-1">
            <FieldLabel>Attendance</FieldLabel>
            <Controller
              control={form.control}
              name="attendance"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue
                      className="text-sm"
                      placeholder="Select attendance"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="attending">Will Attend</SelectItem>
                    <SelectItem value="not-attending">
                      Unable to Attend
                    </SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError>{form.formState.errors.attendance?.message}</FieldError>
          </Field>

          <Field className="flex flex-col gap-1">
            <FieldLabel>Message</FieldLabel>
            <Textarea
              className="text-sm"
              rows={5}
              placeholder="Write your wishes for the bride and groom..."
              {...form.register("message")}
            />
            <FieldError>{form.formState.errors.message?.message}</FieldError>
          </Field>

          <Button className="mt-6 rounded-full bg-[#F7E7A9] text-[#8B5E3C] hover:bg-[#F3D98B]">
            Send RSVP
          </Button>
        </motion.form>
      </motion.div>
    </motion.section>
  )
}
