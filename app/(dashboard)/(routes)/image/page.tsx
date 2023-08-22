"use client"
import axios from "axios"
import * as z from "zod"

import Heading from "@/components/Heading"
import Loader from "@/components/Loader"
import Empty from "@/components/Empty"

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardFooter } from "@/components/ui/card"



import { DownloadIcon, ImageIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { amountOptions, formSchema, resolutionOptions } from "./constants"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const ImagePage = () => {
    const router = useRouter()
    const [images, setImages] = useState<string[]>([]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: "",
            amount: "1",
            resolution: "512x512"
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setImages([]);
        try {
            const response = await axios.post('/api/image', values);
            const urls = response.data.map((image: {url: string}) => image.url)

            setImages(urls);
            form.reset();
        } catch (error: any) {
            console.log(error)
        } finally {
            router.refresh();
        }
    }

  return (
    <div>
        <Heading
            title="Image Generation"
            description="Our most advanced image generation model"
            icon={ImageIcon}
            iconColor="text-pink-700"
            bgColor="bg-pink-700/10"
        />
        <div className="px-4 lg:px-8">
            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="rounded-lg border p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2">
                        <FormField
                            name="prompt"
                            render={({ field }) => (
                                <FormItem className="col-span-12 lg:col-span-6">
                                    <FormControl>
                                        <Input 
                                            className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                                            disabled={isLoading}
                                            placeholder="A picture of sun"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        {/* Options */}
                        <FormField 
                            control={form.control}
                            name="amount"
                            render={({field}) => (
                                <FormItem className="col-span-12 lg:col-span-2">
                                    <Select disabled={isLoading} onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue defaultValue={field.value} />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {amountOptions.map((option) => (
                                                <SelectItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                        {/* Resolutions */}
                        <FormField 
                            control={form.control}
                            name="resolution"
                            render={({field}) => (
                                <FormItem className="col-span-12 lg:col-span-2">
                                    <Select disabled={isLoading} onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue defaultValue={field.value} />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {resolutionOptions.map((option) => (
                                                <SelectItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                        <Button className="col-span-12 lg:col-span-2 w-full" disabled={isLoading}>Generate</Button>
                    </form>
                </Form>
            </div>
            <div className="space-y-4 mt-4">
                {isLoading && (
                    <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                        <Loader />
                    </div>
                )}
                {images.length === 0 && !isLoading && (
                    <div>
                        <Empty label="No images generated"/>
                    </div>
                )}
                <div className="grid grid-cols-1 md:grid-col-2 lg:grid-col-3 xl:grid-col-4 gap-4 mt-8">
                    {images.map(src => (
                        <Card key={src} className="rounded-lg overflow-hidden">
                            <div className="relative aspect-square">
                                <Image alt="Image" fill src={src} />
                            </div>
                            <CardFooter className="p-2">
                                <Button onClick={() => window.open(src)} className="w-full" variant="secondary">
                                    <DownloadIcon className="w-4 h-4 mr-2" />
                                    Download
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ImagePage