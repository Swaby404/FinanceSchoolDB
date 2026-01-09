
import db from "#db/client";
import { createUser } from "#db/queries/users";




 
await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");


async function seed() {
  // create 1 User that needs username and email!
  const user = await createUser("testuser", "oliver.swaby@gmail.com");
  if (!user || !user.id) {
    throw new Error("User creation failed");
  }}
