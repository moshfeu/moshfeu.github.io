/**
 * @param {{
    event_category: string;
    event_label: string;
    value: string | number;
 }} data
 * @param {(...args: any[]) => void} callback
 * @returns (...args: any[]) => void
 */
export const useGAEvent = (data, callback) => (...args) => {
  window?.gtag?.("event", "click", { ...data })  // eslint-disable-line no-unused-expressions
  callback(...args)
}
