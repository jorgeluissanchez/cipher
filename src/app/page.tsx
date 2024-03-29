'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { EncodeForm } from "@/components/encode-form"
import { DecodeForm } from "@/components/decode-form"

export default function Home() {

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-x-0 -top-40 -z-10 overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
      </div>
      <div className="w-full h-full px-4 py-10 overflow-auto">
        <div className="max-w-xl min-h-full flex items-center m-auto">
          <Tabs defaultValue="encriptar">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="encriptar">Encriptar</TabsTrigger>
              <TabsTrigger value="descodificar">Descodificar</TabsTrigger>
            </TabsList>
            <TabsContent value="encriptar">
              <Card>
                <CardHeader>
                  <CardTitle>Encriptar</CardTitle>
                  <CardDescription>
                    En esta sección podrás encriptar tus mensajes para informar a tus generales.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <EncodeForm />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="descodificar">
              <Card>
                <CardHeader>
                  <CardTitle>Descodificar</CardTitle>
                  <CardDescription>
                    En esta sección podrás descodificar los mensajes que te han enviado tus generales.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <DecodeForm />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
      </div>
    </div>
  )
}
