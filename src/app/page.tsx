'use client'
import { Button } from "@/components/ui/button"
import Mensaje from "@/components/mensaje"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="relative flex justify-center items-center h-screen overflow-hidden">
      <div className="absolute inset-x-0 -top-40 -z-10 overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
      </div>
      <div className="max-w-xl px-4">

        <Tabs defaultValue="encriptar">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="encriptar">Encriptar</TabsTrigger>
            <TabsTrigger value="desencriptar">Desencriptar</TabsTrigger>
          </TabsList>
          <TabsContent value="encriptar">
            <Card>
              <CardHeader>
                <CardTitle>Encriptar</CardTitle>
                <CardDescription>
                  En esta sección podrás encriptar tus mensajes para informar a tus generales.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Mensaje messages={["qwedqd qw1"]} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="mensaje">Mensaje</Label>
                  <Textarea id="mensaje" placeholder="Ingrese su mensaje aquí" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="desplazamiento">Desplazamiento</Label>
                  <Input id="desplazamiento" type="number" defaultValue="3" placeholder="Ingrese el desplazamiento aquí" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Encriptar</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="desencriptar">
            <Card>
              <CardHeader>
                <CardTitle>Desencriptar</CardTitle>
                <CardDescription>
                  En esta sección podrás desencriptar los mensajes que te han enviado tus generales.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Mensaje messages={["Mensaje 1"]} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="mensaje">Mensaje</Label>
                  <Textarea id="mensaje" placeholder="Ingrese su mensaje encriptado aquí" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="desplazamiento">Desplazamiento</Label>
                  <Input id="desplazamiento" type="number" defaultValue="3" placeholder="Ingrese el desplazamiento aquí" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full"
                >Desencriptar</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
      </div>
    </div>
  )
}
