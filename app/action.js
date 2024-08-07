"use server";

import { cookies } from "next/headers";

async function create(data) {
  cookies().set("name", "lee");
}
