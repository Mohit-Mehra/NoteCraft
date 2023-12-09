"use client";

import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";

interface EditoProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

export const Editor = ({ onChange, initialContent, editable }: EditoProps) => {
  const editor: BlockNoteEditor = useBlockNote({
    editable,
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
    onEditorContentChange: (editor) => {
      onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
    },
  });
  return (
    <div>
      <BlockNoteView />
    </div>
  );
};
