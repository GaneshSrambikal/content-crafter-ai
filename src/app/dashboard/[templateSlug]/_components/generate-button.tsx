import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs/server'
import React from 'react'

const GenerateButton = async () => {
    let totalCredit: number = 0
    let creditUsed: number = 0
    const { userId } = auth()
    const user = await db.user.findUnique({
        where: {
            userId: userId as string
        },

    })
    if (!user) {
        totalCredit = 10000
    } else {
        totalCredit = user.totalCredit
    }
    const outputs = await db.aIOutput.findMany({
        where: {
            userId: userId as string
        }

    })
    if (outputs.length > 0) {
        outputs.forEach((outputs) => {
            creditUsed = creditUsed + outputs.description.length
        })
    }
    console.log(creditUsed, totalCredit)
    return (
        <div>GeneratButton</div>
    )
}

export default GenerateButton