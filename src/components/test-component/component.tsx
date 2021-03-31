import React, { useRef, useState } from "react";
import { OpenFileDialogUploadField } from "../open-file-dialog-upload-field/component";
import { useBrowserOpenFileDialog } from "../../hooks/use-browser-open-file-dialog/hook";

export const TestComponent = () => {
  const uploadField = useRef(null);
  const [trigger] = useBrowserOpenFileDialog(uploadField, "*", true);
  const [files, setFiles] = useState<File[]>([]);

  const handleClick = async () => {
    const files = await trigger();
    files.forEach(async (file: File) =>
      console.log(`FILE DETAILS`, {
        filename: file.name,
        lastModified: file.lastModified,
        size: file.size,
        content: await file.text(),
      })
    );
    setFiles(files);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <h1>Test Component</h1>
      <button data-testid="trigger-upload-btn" onClick={handleClick}>
        Trigger Upload
      </button>
      <p data-testid="selected-file-count">{files.length} Selected</p>
      <OpenFileDialogUploadField fieldRef={uploadField} hidden={false} />
    </div>
  );
};

export default TestComponent;
