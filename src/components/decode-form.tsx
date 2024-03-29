"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Textarea } from "./ui/textarea"
import Mensaje from "./mensaje"

const decodeFormSchema = z.object({
  message: z
    .string({
      required_error: "El mensaje es requerido.",
    })
    .refine(
      (value) => /^[a-zA-ZñÑ]+[-'s]?[a-zA-ZñÑ ]+$/.test(value ?? ""), 'El mensaje debe contener solo letras y espacios.'
    ),
  shift: z.coerce
    .number({
      required_error: "El desplazamiento es requerido.",
    })
    .int({
      message: "El desplazamiento debe ser un número entero.",
    })
    .nonnegative({
      message: "El desplazamiento debe ser un número positivo.",
    }),
})

type DecodeFormValues = z.infer<typeof decodeFormSchema>

const defaultValues: Partial<DecodeFormValues> = {
  message: "",
  shift: 3,
}

export function DecodeForm() {
  const [decodedMessage, setDecodedMessage] = useState<string[]>(["Mensaje descodificado"])

  const form = useForm<DecodeFormValues>({
    resolver: zodResolver(decodeFormSchema),
    defaultValues,
  })

  async function onSubmit(data: DecodeFormValues) {
    await fetch("https://caesar-cipher-phnv.onrender.com/decrypt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: data.message,
        shift: data.shift,
      })
    }).then(async (res) => {
      const response = await res.json()
      setDecodedMessage([response.message])
      toast({
        title: "Haz enviado los siguientes valores:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      })
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Mensaje messages={decodedMessage} />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Textarea placeholder="Ingrese su mensaje aquí" {...field} />
              </FormControl>
              <FormDescription>
                Este mensaje será descodificar para informar a tus generales.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="shift"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Desplazamiento</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese su desplazamiento aquí" {...field} type="number" />
              </FormControl>
              <FormDescription>
                Este desplazamiento será utilizado para descodificar el mensaje.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Descodificar</Button>
      </form>
    </Form>
  )
}