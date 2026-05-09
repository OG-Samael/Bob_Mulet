"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { Box, Button } from "@mui/material";

export default function BlogEditor({ value, onChange }: any) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({
        openOnClick: true,
      }),
    ],
    content: value,
    immediatelyRender: false,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  const addImage = async () => {
    const input = document.createElement("input");

    input.type = "file";
    input.accept = "image/*";

    input.onchange = async () => {
      const file = input.files?.[0];

      if (!file) return;

      const formData = new FormData();

      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      editor.chain().focus().setImage({ src: data.url }).run();
    };

    input.click();
  };

  return (
    <Box>
      <Box display="flex" gap={1} mb={1}>
        <Button size="small" onClick={() => editor.chain().focus().toggleBold().run()}>
          Bold
        </Button>
        <Button size="small" onClick={() => editor.chain().focus().toggleItalic().run()}>
          Italic
        </Button>
        <Button size="small" onClick={() => editor.chain().focus().toggleBulletList().run()}>
          Bullet List
        </Button>
        <Button size="small" onClick={() => editor.chain().focus().toggleOrderedList().run()}>
          Numbered List
        </Button>
        <Button size="small" onClick={addImage}>
          Image
        </Button>
      </Box>

      <EditorContent editor={editor} />
    </Box>
  );
}
