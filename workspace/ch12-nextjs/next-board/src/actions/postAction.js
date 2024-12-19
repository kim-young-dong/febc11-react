"use server";
import { redirect } from "next/navigation";
import { BASE_URL, HEADERS } from "@/config/index";

export async function addPost(formData) {
  const data = {
    type: formData.get("type") || "info", // "info" or "free" or "qna"
    title: formData.get("title"),
    content: formData.get("content"),
  };

  const response = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (result.ok) {
    redirect("/info");
  } else {
    console.log(result);
  }
}

export async function updatePost(formData) {
  const data = {
    title: formData.get("title"),
    content: formData.get("content"),
  };

  const response = await fetch(`${BASE_URL}/posts/${formData.get("_id")}`, {
    method: "PATCH",
    headers: HEADERS,
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (result.ok) {
    redirect("/info");
  } else {
    console.log(result);
  }
}

export async function deletePost(_id) {
  const response = await fetch(`${BASE_URL}/posts/${_id}`, {
    method: "DELETE",
    headers: HEADERS,
  });

  const result = await response.json();

  if (result.ok) {
    redirect("/info");
  } else {
    console.log(result);
  }
}

export async function addReple(_id) {
  const response = await fetch(`${BASE_URL}/posts/${_id}/reple`, {
    method: "POST",
    headers: HEADERS,
  });

  const result = await response.json();

  if (result.ok) {
    redirect(`/info/${_id}`);
  } else {
    console.log(result);
  }
}
