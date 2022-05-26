import Attachments from '../../src/transforms/Attachments';

describe('toPayload', () => {
  test('toPayload adds the attachment, if provided', () => {
    const formData = {
      append: jest.fn()
    };

    const record = {
      attachment: jest.fn(),
      attachment_remove: true
    };

    Attachments.toPayload(formData, 'test', record, 'attachment');

    expect(formData.append).toHaveBeenCalledWith('test[attachment]', record.attachment);
  });

  test('toPayload removes the attachment if the *_remove attribute is provided with no attachment', () => {
    const formData = {
      append: jest.fn()
    };

    const record = {
      attachment_remove: true
    };

    Attachments.toPayload(formData, 'test', record, 'attachment');

    expect(formData.append).toHaveBeenCalledWith('test[attachment_remove]', true);
  });
});
