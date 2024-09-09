"use server";

// This /lib/actions.js folder and file is where we'd store all of the Server Actions for our app. The stuff that runs in the background and handles our data after our user interaction.

export async function formAction(formData) {
  // Get the data from our form:
  const message = formData.get("message");
  // Do something with it. Currently, check that we did it correctly:
  console.log(message);

  // Here is where you would do some further code that uses the form data, IE upload it to your database
}
