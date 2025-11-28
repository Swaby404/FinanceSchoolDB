
import db from "#db/client";
import { createUser } from "#db/queries/users";




 
await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");


async function seed() {
  // create User
  const user = await createUser("user", "password123");
  if (!user || !user.id) {
    throw new Error("User creation failed");
  }}
