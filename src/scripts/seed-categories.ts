//create seed categories 

import { prisma } from "@/lib/prisma";


const categoryNames = [
    "Cars and vehicles",
    "Comedy",
    "Education",
    "Gaming",
    "Entertainment",
    "Filme and animation",
    "How-to and style",
    "Music",
    "News and politics",
    "People and blogs",
    "Pets and animals",
    "Science and technology",
    "Sports",
    "Travel and events",
];

async function main() {
    console.log("Seeding cqtegories... ");

    try {
        // const values = categoryNames.map((name) => ({
        //     name,
        //     description: `Video related to ${name.toLowerCase()}`
        // }))
        // for (const value of values) {
        //     await prisma.categories.create({
        //     data: {
        //         name: value.name,
        //         description: value.description
        //     }
        // }) 
        // }
        await prisma.categories.createMany({
            data: categoryNames.map((name) => ({
                name,
                description: `Video related to ${name.toLowerCase()}`
            }))
        })
        console.log("sucessfullly")
    }catch (error) {
        console.error("Error seeding categories: ", error)
        process.exit(1)
    }
}

main();