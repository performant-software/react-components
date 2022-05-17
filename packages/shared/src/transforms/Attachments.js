// @flow

/**
 * Helper class for handling binary data. This class should be used in conjunction with the FormDataTransform.
 */
class Attachments {
  /**
   * Appends the attachment for the passed record to the passed form data. If the attachment is not present, the
   * "*_remove" attribute will be appended if the attachment has been removed.
   *
   * @param formData
   * @param prefix
   * @param record
   * @param name
   */
  toPayload(formData: FormData, prefix: string, record: any, name: string) {
    const attachment = record[name];
    const removeAttribute = `${name}_remove`;

    if (attachment) {
      formData.append(`${prefix}[${name}]`, attachment);
    } else if (record[removeAttribute]) {
      formData.append(`${prefix}[${removeAttribute}]`, record[removeAttribute]);
    }
  }
}

export default new Attachments();
