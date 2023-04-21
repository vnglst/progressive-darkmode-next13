import { headers } from "next/headers";
import { NextRequest } from "next/server";

/**
 * The route is used to handle the form submission when clicks on the toggle button.
 */
export async function POST(request: NextRequest) {
  // Retrieve the next mode from the form data
  const formData = await request.formData();
  const nextTheme = formData.get("nextTheme");

  // After form submission, redirect to the page that the user was on
  const headersList = headers();
  const referer = headersList.get("referer");
  const redirectUrl = new URL(referer || "/").toString();

  return new Response(null, {
    headers: {
      "Set-Cookie": `theme=${nextTheme}`,
      Location: redirectUrl,
    },
    status: 302,
  });
}
