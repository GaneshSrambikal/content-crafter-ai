"use client"

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { useEffect, useState } from "react"
import { Loader } from "lucide-react"

const chartConfig = {
    available: {
        label: "Available",
        color: "hsl(var(--chart-1))",
    },
    used: {
        label: "Used",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig
export function AIChart({ availableCredit, totalUsage }: { availableCredit: number, totalUsage: number }) {
    
    const [credits, setCredit] = useState(10000)
    const [usage, setUsage] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        setCredit(availableCredit)
        setUsage(totalUsage)
        setIsLoading(false)
    }, [availableCredit, totalUsage])
    const chartData = [{ available: `${credits}`, used: `${usage}` }]
    return (
        <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square w-full max-w-[250px]"
        >
            {isLoading ? <div className="flex justify-center"><Loader className="animate-spin"></Loader></div>
                :
                <RadialBarChart
                    data={chartData}
                    endAngle={180}
                    innerRadius={80}
                    outerRadius={130}
                >
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                    />
                    <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                        <Label
                            content={({ viewBox }) => {
                                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                    return (
                                        <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                                            <tspan
                                                x={viewBox.cx}
                                                y={(viewBox.cy || 0) - 16}
                                                className="fill-foreground text-sm font-bold"
                                            >
                                                {`${usage} / ${credits} `}
                                            </tspan>
                                            <tspan
                                                x={viewBox.cx}
                                                y={(viewBox.cy || 0) + 4}
                                                className="fill-muted-foreground"
                                            >
                                                Credit Usage
                                            </tspan>
                                        </text>
                                    )
                                }
                            }}
                        />
                    </PolarRadiusAxis>
                    <RadialBar
                        dataKey="available"
                        stackId="a"
                        cornerRadius={1}
                        fill="var(--color-available)"
                        className="stroke-transparent stroke-2"
                    />
                    <RadialBar
                        dataKey="used"
                        fill="var(--color-used)"
                        stackId="a"
                        cornerRadius={1}
                        className="stroke-transparent stroke-2"
                    />
                </RadialBarChart>
            }
        </ChartContainer>



    )
}