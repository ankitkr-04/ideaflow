import { z } from "zod";
export const formSchema = z.object({
  title: z.string().min(3).max(140),
  description: z.string().min(3).max(1000),
  category: z.string().min(3).max(30),
  link: z
    .string()
    .url()
    .refine(
      async (url) => {
        try {
          const res = await fetch(url, { method: "HEAD" });
          const contentType = res.headers.get("content-type");
          return contentType?.startsWith("image/");
        } catch {
          return false;
        }
      },
      { message: "This must be a valid Image Url" }
    ),

  pitch: z.string().min(10),
});
