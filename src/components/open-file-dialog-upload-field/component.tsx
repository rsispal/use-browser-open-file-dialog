import React, { FC, MutableRefObject } from "react";

export interface IOpenFileDialogUploadFieldProperties {
  fieldRef: MutableRefObject<HTMLInputElement | null>;
  hidden: boolean;
}
export const OpenFileDialogUploadField: FC<IOpenFileDialogUploadFieldProperties> = ({ fieldRef, hidden }) => (
  <input data-testid="open-file-dialog-upload-field" ref={fieldRef} hidden={hidden || true} type={"file"} />
);
export default OpenFileDialogUploadField;
