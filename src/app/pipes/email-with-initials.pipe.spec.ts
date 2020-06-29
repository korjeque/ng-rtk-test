import { EmailWithInitialsPipe } from './email-with-initials.pipe';

describe('EmailWithInitialsPipe', () => {
  it('create an instance', () => {
    const pipe = new EmailWithInitialsPipe();
    expect(pipe).toBeTruthy();
  });
});
