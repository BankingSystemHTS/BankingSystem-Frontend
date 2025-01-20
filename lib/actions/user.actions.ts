"use server";
import { Account, ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async (data: signInProps) => {
  const { email, password } = data;
  try {
    //mutations / database / make fetch
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email, password);
    // cookies().set("appwrite-session", session.secret, {
    //   path: "/",
    //   httpOnly: true,
    //   sameSite: "strict",
    //   secure: true,
    // });
    // const user = await account.get();
    return parseStringify(session);
  } catch (error) {
    console.error("Error", error);
  }
};

export const signUp = async (userData: SignUpParams) => {
   const { email, password, firstName, lastName } = userData;
   try {
    //returns a authenticated account service
    const { account } = await createAdminClient();

    //create account on appwrite server
    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );
    const session = await account.createEmailPasswordSession(email, password);
    //set response session cookie
    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
   });
   return parseStringify(newUserAccount);
   //redirect to dashboard
  } catch (error) {
    console.error("Error", error);
  }

};



export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const user = await account.get();
    return parseStringify(user);
  } catch (error) {
    console.error("Error from getLoggedInUser", error);
    return null;
  }
}
