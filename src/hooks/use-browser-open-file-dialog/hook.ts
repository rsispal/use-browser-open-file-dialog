/**
 *
 * @param ref The React ref to the OpenFileDialogUploadField component
 * @param accept A string or HTML mime type to denote the acceptable file formats INCLUDING the dot prefix (i.e. `.txt`, `.csv`, "image/png" or accept any file by `*`)
 * @param multiple Boolean flag to allow single (`multiple = false`) or multiple (`multiple = true`) file selection
 * @returns [trigger: () => Promise<File[]> ] - an array with trigger() method that can be imperatively used to capture the selected files.
 */
export function useBrowserOpenFileDialog(
  ref: React.MutableRefObject<HTMLInputElement | null>,
  accept: string,
  multiple: boolean
) {
  /**
   * trigger: Imperative method to trigger the in-browser open file dialog
   * @returns Promise<File[]>
   */
  const trigger = (): Promise<File[]> => {
    return new Promise((resolve) => {
      const handleEvent = async (ev: React.ChangeEvent<HTMLInputElement>) => {
        let processed: File[] = [];
        const files = ev.target.files as FileList;
        const len = files?.length;

        if (!len) {
          return resolve([]);
        }

        let i = 0;

        while (i < len) {
          const f: File | null | undefined = files.item(i);
          f && processed.push(f);
          i++;
        }
        return resolve(processed);
      };

      if (ref && ref?.current) {
        ref.current.accept = accept || "*";
        ref.current.multiple = multiple;
        ref.current.addEventListener("change", handleEvent as (arg: any) => void);
        ref.current.dispatchEvent(new MouseEvent("click"));
      }
    });
  };
  return [trigger];
}
